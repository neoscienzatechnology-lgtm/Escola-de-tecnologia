#!/usr/bin/env node

const { createClient } = require('@supabase/supabase-js')
const fs = require('fs')
const path = require('path')

require('dotenv').config({ path: '.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Missing environment variables!')
  console.error('Please set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

async function runMigration(filePath) {
  const sql = fs.readFileSync(filePath, 'utf8')
  const fileName = path.basename(filePath)
  
  console.log(`📝 Running migration: ${fileName}`)
  
  // Split by semicolon and run each statement
  const statements = sql
    .split(';')
    .map(s => s.trim())
    .filter(s => s.length > 0 && !s.startsWith('--'))
  
  for (const statement of statements) {
    try {
      const { error } = await supabase.rpc('exec_sql', { sql: statement })
      if (error) {
        // Try direct query if RPC fails
        const { error: directError } = await supabase.from('_migrations').select('*').limit(1)
        console.log(`⚠️  Note: Direct SQL execution not available via JS client`)
        console.log(`   Please run migrations using Supabase CLI or Dashboard SQL Editor`)
        console.log(`   Migration file: ${filePath}`)
        return false
      }
    } catch (err) {
      console.error(`❌ Error in statement:`, err.message)
    }
  }
  
  return true
}

async function migrate() {
  console.log('🚀 Starting database migrations...\n')
  
  const migrationsDir = path.join(__dirname, '..', 'db', 'migrations')
  
  if (!fs.existsSync(migrationsDir)) {
    console.error('❌ Migrations directory not found!')
    process.exit(1)
  }
  
  const files = fs.readdirSync(migrationsDir)
    .filter(f => f.endsWith('.sql'))
    .sort()
  
  console.log(`📁 Found ${files.length} migration files\n`)
  
  console.log('⚠️  IMPORTANT: To run migrations, you need to use one of these methods:')
  console.log('   1. Supabase CLI: supabase db push')
  console.log('   2. Supabase Dashboard: SQL Editor > New Query > Copy/paste migration files')
  console.log('   3. Direct PostgreSQL connection with psql\n')
  
  console.log('Migration files to run:')
  files.forEach((file, idx) => {
    console.log(`   ${idx + 1}. ${file}`)
  })
  
  console.log('\n✅ Migration files are ready in db/migrations/')
  console.log('   Run them in order using your preferred method above.')
}

migrate().catch(console.error)
