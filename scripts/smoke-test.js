#!/usr/bin/env node

const { createClient } = require('@supabase/supabase-js')

require('dotenv').config({ path: '.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Missing environment variables!')
  console.error('Please set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in .env.local')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

async function runSmokeTests() {
  console.log('🧪 Running smoke tests...\n')
  
  let passed = 0
  let failed = 0
  
  // Test 1: Check if tables exist
  console.log('Test 1: Checking if tables exist...')
  try {
    const tables = ['users', 'courses', 'modules', 'lessons', 'enrollments', 'lesson_progress', 'paths', 'path_courses', 'certificates']
    
    for (const table of tables) {
      const { error } = await supabase.from(table).select('id').limit(1)
      if (error) {
        console.log(`   ❌ Table '${table}' not accessible: ${error.message}`)
        failed++
      } else {
        console.log(`   ✅ Table '${table}' exists`)
        passed++
      }
    }
  } catch (error) {
    console.log(`   ❌ Failed: ${error.message}`)
    failed++
  }
  
  // Test 2: Check if seed data exists
  console.log('\nTest 2: Checking seed data...')
  try {
    const { data: courses, error } = await supabase
      .from('courses')
      .select('*')
      .limit(3)
    
    if (error) {
      console.log(`   ❌ Failed to fetch courses: ${error.message}`)
      failed++
    } else if (courses.length > 0) {
      console.log(`   ✅ Found ${courses.length} courses`)
      passed++
    } else {
      console.log(`   ⚠️  No courses found - run seed script`)
      failed++
    }
  } catch (error) {
    console.log(`   ❌ Failed: ${error.message}`)
    failed++
  }
  
  // Test 3: Check RLS policies
  console.log('\nTest 3: Checking RLS policies...')
  try {
    // This will fail without authentication (which is good - means RLS is working)
    const { data, error } = await supabase
      .from('enrollments')
      .select('*')
      .limit(1)
    
    if (error && error.message.includes('policy')) {
      console.log(`   ✅ RLS policies are active (expected auth error)`)
      passed++
    } else if (!error && data) {
      console.log(`   ⚠️  RLS might not be properly configured (data returned without auth)`)
      failed++
    } else {
      console.log(`   ⚠️  Unexpected result`)
      failed++
    }
  } catch (error) {
    console.log(`   ❌ Failed: ${error.message}`)
    failed++
  }
  
  // Test 4: Check storage buckets (if configured)
  console.log('\nTest 4: Checking storage buckets...')
  try {
    const { data: buckets, error } = await supabase.storage.listBuckets()
    
    if (error) {
      console.log(`   ⚠️  Storage not accessible: ${error.message}`)
      console.log(`   Note: Create buckets manually in Supabase Dashboard`)
      failed++
    } else {
      console.log(`   ✅ Storage accessible, found ${buckets?.length || 0} buckets`)
      if (buckets?.length === 0) {
        console.log(`   ⚠️  No buckets found - create them in Dashboard:`)
        console.log(`      - public-assets`)
        console.log(`      - private-videos`)
        console.log(`      - certificates`)
      }
      passed++
    }
  } catch (error) {
    console.log(`   ❌ Failed: ${error.message}`)
    failed++
  }
  
  // Summary
  console.log('\n' + '='.repeat(50))
  console.log(`✅ Passed: ${passed}`)
  console.log(`❌ Failed: ${failed}`)
  console.log('='.repeat(50))
  
  if (failed > 0) {
    console.log('\n⚠️  Some tests failed. Please:')
    console.log('   1. Run migrations using Supabase Dashboard SQL Editor')
    console.log('   2. Run seed data using Dashboard SQL Editor')
    console.log('   3. Create storage buckets in Dashboard')
    console.log('   4. Verify environment variables are set correctly')
    process.exit(1)
  } else {
    console.log('\n🎉 All smoke tests passed!')
  }
}

runSmokeTests().catch(error => {
  console.error('Fatal error:', error)
  process.exit(1)
})
