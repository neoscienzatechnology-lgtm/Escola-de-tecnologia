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

async function seed() {
  console.log('🌱 Starting database seeding...\n')
  
  const seedFile = path.join(__dirname, '..', 'db', 'seed', 'seed.sql')
  
  if (!fs.existsSync(seedFile)) {
    console.error('❌ Seed file not found!')
    process.exit(1)
  }
  
  console.log('⚠️  IMPORTANT: To run seed data, you need to use one of these methods:')
  console.log('   1. Supabase Dashboard: SQL Editor > New Query > Copy/paste seed.sql')
  console.log('   2. Direct PostgreSQL connection with psql')
  console.log('   3. Supabase CLI: supabase db reset (includes migrations + seed)\n')
  
  console.log('Seed file location: db/seed/seed.sql')
  console.log('\n✅ Seed file is ready!')
  console.log('   It will create:')
  console.log('   - 3 users (student, teacher, admin)')
  console.log('   - 3 courses (Fullstack, Data Science, Cloud)')
  console.log('   - 2 modules per course')
  console.log('   - 3 lessons per module')
  console.log('   - 1 learning path')
  console.log('   - Sample enrollment and progress data')
}

seed().catch(console.error)
