# Arquitetura — Cloud Architects Website

## Visão geral

```
Internet
  └─ Traefik (edge, TLS le)
       └─ cloudarchitects-web (Next.js 16 + Payload 3, :3000)
            ├─ /admin        → Payload Admin UI
            ├─ /api/*        → Payload REST/GraphQL
            └─ /*            → App Router (SSR)
                 └─ SQLite: /app/data/payload.db (volume cloudarchitects_payload_data)
```

## Componentes

### Next.js (App Router)
- `src/app/layout.tsx` — shell global, fontes.
- `src/app/page.tsx` — página inicial.
- `src/middleware.ts` — middleware de request.

### Payload CMS
- `src/payload.config.ts` — configuração (collections, db sqlite, admin).
- Collections:
  - `Post` — artigos.
  - `Category` — categorias.
  - `Media` — uploads.
  - `Users` — autenticação/admin.
- `src/migrations/` — migrations versionadas.

### Persistência
- SQLite em `file:/app/data/payload.db`, montado no volume `cloudarchitects_payload_data`.
- Uploads de mídia conforme configuração da collection `Media`.

## Roteamento Traefik

- Hosts: `cloudarchitect.com.br`, `www.cloudarchitect.com.br`.
- Entrypoint `websecure`, `certresolver=le`, middleware `secure-headers@file`.
- Serviço na porta interna `3000`.

## Decisões

- **SQLite** em vez de Postgres: simplicidade e baixo custo para site institucional/CMS. Migrar se houver concorrência/multi-instância.
- **Payload embutido no Next.js**: um único container, deploy simples.
