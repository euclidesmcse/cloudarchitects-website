#!/bin/sh
set -e

echo "╔══════════════════════════════════════╗"
echo "║   Cloud Architects Website — Start   ║"
echo "╚══════════════════════════════════════╝"

# ─── Initialize database (create tables if missing) ─────────────
echo "🔧 Initializing database..."
node /app/init-db.cjs 2>&1 || true
echo ""

# ─── Start Next.js standalone server ──────────────────────────
node server.js &
SERVER_PID=$!
echo "🚀 Server started (PID: $SERVER_PID)"

# ─── Health check: wait for server to respond ────────────────
echo "⏳ Waiting for server to be ready..."
for i in $(seq 1 30); do
  HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" http://127.0.0.1:3000/ 2>/dev/null || true)
  case "$HTTP_CODE" in
    200|301|302|307|308)
      echo "✅ Server is ready! (HTTP $HTTP_CODE)"
      break
      ;;
  esac
  if [ "$i" -eq 30 ]; then
    echo "❌ Server failed to start within 60s"
    kill "$SERVER_PID" 2>/dev/null
    exit 1
  fi
  sleep 2
done

# ─── Seed database ────────────────────────────────────────────
echo "🌱 Running database seed..."
curl -s http://localhost:3000/api/seed | cat
echo ""
echo "✅ Seed complete!"

# ─── Bring server to foreground ───────────────────────────────
wait "$SERVER_PID"
