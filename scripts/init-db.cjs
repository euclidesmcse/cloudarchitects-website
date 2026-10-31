// @ts-nocheck
// Cria as tabelas do Payload CMS usando o schema AUTORITATIVO gerado pelo
// próprio Payload (payload migrate → dump em scripts/payload-schema.json).
//
// IMPORTANTE: NÃO escreva CREATE TABLE à mão aqui. O adapter SQLite do Payload
// (Drizzle) espera `id INTEGER PRIMARY KEY` (autoincrement) e nomes/tipos de
// coluna específicos. Um schema divergente (ex.: `id TEXT`) faz TODO findByID
// retornar "Not Found", quebrando a autenticação do admin (loop de login).
//
// Para atualizar o schema após mudar collections/config:
//   1) PAYLOAD_SECRET=... DATABASE_URI=file:./data/tmp.db npx payload migrate:create --name x
//   2) PAYLOAD_SECRET=... DATABASE_URI=file:./data/tmp.db npx payload migrate
//   3) regenerar scripts/payload-schema.json a partir do sqlite_master de tmp.db

const fs = require('fs');
const path = require('path');
const { createClient } = require('@libsql/client');

const dbUrl = process.env.DATABASE_URI || 'file:./data/payload.db';
const client = createClient({ url: dbUrl });

async function init() {
  console.log('🔧 Initializing database tables (Payload authoritative schema)...');

  const schemaPath = path.join(__dirname, 'payload-schema.json');
  const statements = JSON.parse(fs.readFileSync(schemaPath, 'utf8'));

  let created = 0;
  for (const sql of statements) {
    try {
      await client.execute(sql);
      created++;
    } catch (err) {
      if (!err.message?.includes('already exists')) {
        console.error('  ⚠️  SQL error:', err.message);
      }
    }
  }

  console.log(`✅ Database tables initialized (${created}/${statements.length} statements)`);
  process.exit(0);
}

init().catch((err) => {
  console.error('❌ Database init failed:', err.message);
  process.exit(1);
});
