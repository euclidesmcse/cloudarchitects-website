# ────────────────────────────────────────────────
# Cloud Architects Website — Docker Multi-stage
# Next.js 16 + Payload CMS 3 + SQLite
# ────────────────────────────────────────────────

# ─── Stage 1: Dependencies ──────────────────────
FROM node:22-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci

# ─── Stage 2: Build ─────────────────────────────
FROM node:22-alpine AS build
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# Fix Payload bug: isPublicAdminRoute fails because routeWithoutAdmin has leading /
# "/login".startsWith("login") === false → public routes never detected!
# See: scripts/patch-payload-bug.cjs
RUN node scripts/patch-payload-bug.cjs
RUN npm run build

# ─── Stage 3: Runner ────────────────────────────
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN apk add --no-cache curl

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Native modules (libsql client — Payload CMS 3.x)
COPY --from=deps /app/node_modules/@libsql ./node_modules/@libsql
# Standalone server output (server.js, node_modules, .next)
COPY --from=build /app/.next/standalone ./
# Static assets (served by standalone server)
COPY --from=build /app/.next/static ./.next/static
COPY --from=build /app/public ./public

# Entrypoint & DB init
COPY scripts/entrypoint.sh /entrypoint.sh
COPY scripts/init-db.cjs /app/init-db.cjs
RUN chmod 755 /entrypoint.sh

RUN mkdir -p /app/data && chown -R nextjs:nodejs /app

USER nextjs
EXPOSE 3000
ENV PORT=3000

ENTRYPOINT ["/entrypoint.sh"]
