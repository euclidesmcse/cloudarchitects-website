# Cloud Architects — Website (Next.js + Payload CMS)

Site principal da Cloud Architects: **Next.js 16** (App Router) + **Payload CMS 3** + React 19 + Tailwind 4, com SQLite local.

## Stack

| Componente | Versão |
|---|---|
| Next.js | 16.2.9 |
| Payload CMS | 3.85.x (`@payloadcms/next`, `db-sqlite`, `richtext-lexical`) |
| React | 19.2.4 |
| Tailwind CSS | 4 |
| Banco | SQLite (`file:/app/data/payload.db`) |

## Estrutura

```
src/
├── app/            # App Router (layout, page, globals.css, middleware)
├── collections/    # Post, Category, Media, Users
├── lib/            # navigation, utils
├── migrations/     # migrations do Payload
├── payload.config.ts
└── payload-types.ts
public/             # imagens e assets estáticos
data/               # payload.db (runtime)
```

## Domínio

- `cloudarchitect.com.br` e `www.cloudarchitect.com.br` (router Traefik, TLS `le`).

## Variáveis de ambiente (`.env`)

| Variável | Uso |
|---|---|
| `PAYLOAD_SECRET` | assinatura de tokens do Payload (obrigatória) |
| `DATABASE_URI` | `file:/app/data/payload.db` |
| `NEXT_PUBLIC_APP_URL` | URL pública |
| `CMS_ADMIN_EMAIL` / `CMS_ADMIN_PASSWORD` | admin inicial |
| `ADSENSE_PUBLISHER_ID` | opcional |

## Desenvolvimento

```bash
npm install
cp .env.example .env
npm run dev        # http://localhost:3000
```

## Build / produção

```bash
docker compose up -d --build
docker compose ps
docker logs cloudarchitects-web --tail 50
```

Volume persistente: `cloudarchitects_payload_data` (`/app/data`). Rede `edge` (external).

## ⚠️ Observações

- O `docker-compose.yml` define um **default fraco para `CMS_ADMIN_PASSWORD`** — remover o default e usar segredo forte via `.env`/Infisical.
- `AGENTS.md` avisa que esta versão do Next.js tem breaking changes; consultar `node_modules/next/dist/docs/`.
- Repositório GitHub: `euclidesmcse/cloudarchitects-website`.

## Documentação

- [`docs/ARCHITECTURE.md`](./docs/ARCHITECTURE.md) — arquitetura e modelo de dados.
- [`RUNBOOK.md`](./RUNBOOK.md) — operação, backup e troubleshooting.
