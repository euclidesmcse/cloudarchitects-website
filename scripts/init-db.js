// @ts-nocheck
// This script creates the Payload CMS tables directly via SQL
// It runs BEFORE the Next.js server starts to ensure the DB is ready

const { createClient } = require('@libsql/client');

const dbUrl = process.env.DATABASE_URI || 'file:./data/payload.db';
const client = createClient({ url: dbUrl });

async function init() {
  console.log('🔧 Initializing database tables...');

  // Payload CMS core tables
  const statements = [
    // Users collection
    `CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      email TEXT NOT NULL UNIQUE,
      password TEXT,
      salt TEXT,
      hash TEXT,
      login_attempts INTEGER DEFAULT 0,
      lock_until TEXT,
      enable_api_key INTEGER DEFAULT 0,
      api_key TEXT,
      api_key_index TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`,

    // Users emails index
    `CREATE UNIQUE INDEX IF NOT EXISTS users_email_idx ON users(email)`,

    // Posts collection
    `CREATE TABLE IF NOT EXISTS posts (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      excerpt TEXT,
      slug TEXT NOT NULL UNIQUE,
      content TEXT,
      category TEXT,
      status TEXT DEFAULT 'draft',
      published_at TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`,

    // Posts slug index
    `CREATE UNIQUE INDEX IF NOT EXISTS posts_slug_idx ON posts(slug)`,

    // Categories collection
    `CREATE TABLE IF NOT EXISTS categories (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      slug TEXT NOT NULL UNIQUE,
      description TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`,

    // Categories slug index
    `CREATE UNIQUE INDEX IF NOT EXISTS categories_slug_idx ON categories(slug)`,

    // Media collection
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

    // Payload config collection
    `CREATE TABLE IF NOT EXISTS payload_config (
      id TEXT PRIMARY KEY,
      key TEXT NOT NULL UNIQUE,
      value TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`,

    // Relations table (for polymorphic relationships)
    `CREATE TABLE IF NOT EXISTS payload_relations (
      id TEXT PRIMARY KEY,
      parent_id TEXT NOT NULL,
      parent_field TEXT NOT NULL,
      relation_to TEXT NOT NULL,
      relation_id TEXT NOT NULL,
      sort_order INTEGER DEFAULT 0
    )`,

    // Relations index
    `CREATE INDEX IF NOT EXISTS payload_relations_parent_idx ON payload_relations(parent_id, parent_field)`,

    // Preferences
    `CREATE TABLE IF NOT EXISTS payload_preferences (
      id TEXT PRIMARY KEY,
      key TEXT NOT NULL,
      user_id TEXT NOT NULL,
      user_collection TEXT NOT NULL,
      value TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`,

    // Preferences index
    `CREATE UNIQUE INDEX IF NOT EXISTS payload_preferences_key_user_idx ON payload_preferences(key, user_id, user_collection)`,

    // Migrations
    `CREATE TABLE IF NOT EXISTS payload_migrations (
      id TEXT PRIMARY KEY,
      name TEXT,
      batch INTEGER,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`,

    // Locks
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
