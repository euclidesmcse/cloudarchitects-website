# RUNBOOK — cloudarchitects-website

## 1. Subir / aplicar

```bash
cd /home/ubuntu/projects/cloudarchitects-website
docker compose up -d --build
docker compose ps
```

## 2. Saúde

```bash
docker inspect --format '{{.State.Health.Status}}' cloudarchitects-web
curl -skI https://cloudarchitect.com.br | head -5
docker logs cloudarchitects-web --tail 50
```

## 3. Backup

```bash
# SQLite + uploads
docker run --rm -v cloudarchitects_payload_data:/data -v "$PWD":/out alpine \
  tar czf /out/payload_$(date +%Y%m%d).tar.gz -C /data .
```

## 4. Restore

```bash
docker compose down
docker run --rm -i -v cloudarchitects_payload_data:/data alpine \
  sh -c 'cd /data && tar xzf -' < payload_YYYYMMDD.tar.gz
docker compose up -d
```

## 5. Migrations do Payload

```bash
npm run payload migrate          # local
# ou dentro do container, conforme scripts disponíveis
```

## 6. Diagnóstico

| Sintoma | Ação |
|---|---|
| 502 | confirmar container na rede `edge` e label `traefik.docker.network=edge` |
| Admin não carrega | validar `PAYLOAD_SECRET` |
| Erro de DB | verificar volume `cloudarchitects_payload_data` |
| Healthcheck falha | `docker logs cloudarchitects-web`; checar porta 3000 |

## 7. Segurança

- Remover o default fraco de `CMS_ADMIN_PASSWORD` no compose e definir senha forte.
- `PAYLOAD_SECRET` e `CMS_ADMIN_PASSWORD` via `.env`/Infisical, nunca no Git.
- Restringir `/admin` por allowlist se possível.
