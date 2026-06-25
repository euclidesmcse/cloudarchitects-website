// @ts-nocheck
// Creates ALL Payload CMS tables via direct SQL
// Runs BEFORE Next.js server so DB is ready for seed

const { createClient } = require('@libsql/client');

const dbUrl = process.env.DATABASE_URI || 'file:./data/payload.db';
const client = createClient({ url: dbUrl });

async function init() {
  console.log('🔧 Initializing database tables...');

  const statements = [
    // === Users collection (auth enabled) ===
    `CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      email TEXT NOT NULL UNIQUE,
      hash TEXT,
      salt TEXT,
      reset_password_token TEXT,
      reset_password_expiration TEXT,
      login_attempts INTEGER DEFAULT 0,
      lock_until TEXT,
      enable_api_key INTEGER DEFAULT 0,
      api_key TEXT,
      api_key_index TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`,
    `CREATE UNIQUE INDEX IF NOT EXISTS users_email_idx ON users(email)`,

    // Users auth: sessions
    `CREATE TABLE IF NOT EXISTS users_sessions (
      _order INTEGER,
      _parent_id TEXT NOT NULL REFERENCES users(id),
      id TEXT PRIMARY KEY,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      expires_at TEXT NOT NULL
    )`,
    `CREATE INDEX IF NOT EXISTS users_sessions_parent_idx ON users_sessions(_parent_id)`,

    // Users auth: password reset tokens
    `CREATE TABLE IF NOT EXISTS users_reset_password_token (
      _order INTEGER,
      _parent_id TEXT NOT NULL REFERENCES users(id),
      id TEXT PRIMARY KEY,
      token TEXT NOT NULL UNIQUE,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      expires_at TEXT NOT NULL
    )`,

    // Users auth: verification tokens
    `CREATE TABLE IF NOT EXISTS users_verification_token (
      _order INTEGER,
      _parent_id TEXT NOT NULL REFERENCES users(id),
      id TEXT PRIMARY KEY,
      token TEXT NOT NULL UNIQUE,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      expires_at TEXT NOT NULL
    )`,

    // === Media (uploads) collection ===
    `CREATE TABLE IF NOT EXISTS media (
      id TEXT PRIMARY KEY,
      updated_at TEXT DEFAULT (datetime('now')),
      created_at TEXT DEFAULT (datetime('now')),
      filename TEXT,
      mime_type TEXT,
      filesize REAL,
      width REAL,
      height REAL,
      focal_x REAL DEFAULT 50,
      focal_y REAL DEFAULT 50,
      url TEXT,
      thumbnail_url TEXT,
      alt TEXT DEFAULT '',
      sizes JSON
    )`,

    // === Posts collection ===
    `CREATE TABLE IF NOT EXISTS posts (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL DEFAULT '',
      excerpt TEXT DEFAULT '',
      slug TEXT NOT NULL UNIQUE,
      cover_image_id TEXT,
      content TEXT,
      category_id TEXT,
      status TEXT DEFAULT 'draft',
      published_date TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`,
    `CREATE UNIQUE INDEX IF NOT EXISTS posts_slug_idx ON posts(slug)`,

    // Posts relations (for category relationship)
    `CREATE TABLE IF NOT EXISTS posts_rels (
      id TEXT PRIMARY KEY,
      parent_id TEXT NOT NULL,
      path TEXT NOT NULL,
      posts_id TEXT,
      categories_id TEXT
    )`,
    `CREATE INDEX IF NOT EXISTS posts_rels_parent_idx ON posts_rels(parent_id)`,

    // === Categories collection ===
    `CREATE TABLE IF NOT EXISTS categories (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      slug TEXT NOT NULL UNIQUE,
      description TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`,
    `CREATE UNIQUE INDEX IF NOT EXISTS categories_slug_idx ON categories(slug)`,

    // === Media collection ===
    `CREATE TABLE IF NOT EXISTS media (
      id TEXT PRIMARY KEY,
      alt TEXT,
      filename TEXT,
      mime_type TEXT,
      filesize INTEGER,
      width INTEGER,
      height INTEGER,
      focal_x REAL DEFAULT 50,
      focal_y REAL DEFAULT 50,
      url TEXT,
      thumbnail_url TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`,

    // === Payload system tables ===
    `CREATE TABLE IF NOT EXISTS payload_config (
      id TEXT PRIMARY KEY,
      key TEXT NOT NULL UNIQUE,
      value TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`,

    `CREATE TABLE IF NOT EXISTS payload_relations (
      id TEXT PRIMARY KEY,
      parent_id TEXT NOT NULL,
      parent_field TEXT NOT NULL,
      relation_to TEXT NOT NULL,
      relation_id TEXT NOT NULL,
      sort_order INTEGER DEFAULT 0
    )`,
    `CREATE INDEX IF NOT EXISTS payload_relations_parent_idx ON payload_relations(parent_id, parent_field)`,

    `CREATE TABLE IF NOT EXISTS payload_preferences (
      id TEXT PRIMARY KEY,
      key TEXT NOT NULL,
      user_id TEXT NOT NULL,
      user_collection TEXT NOT NULL,
      value TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`,
    `CREATE UNIQUE INDEX IF NOT EXISTS payload_preferences_key_user_idx ON payload_preferences(key, user_id, user_collection)`,

    `CREATE TABLE IF NOT EXISTS payload_migrations (
      id TEXT PRIMARY KEY,
      name TEXT,
      batch INTEGER,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`,

    `CREATE TABLE IF NOT EXISTS payload_locks (
      id TEXT PRIMARY KEY,
      entity_id TEXT NOT NULL,
      entity_type TEXT NOT NULL,
      user_id TEXT,
      user_type TEXT,
      expires_at TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`,
  ];

  for (const sql of statements) {
    try {
      await client.execute(sql);
    } catch (err) {
      if (!err.message?.includes('already exists')) {
        console.error('  ⚠️  SQL error:', err.message);
      }
    }
  }

  console.log('✅ Database tables initialized');
  process.exit(0);
}

init().catch((err) => {
  console.error('❌ Database init failed:', err.message);
  process.exit(1);
});
