import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('userId')
    const published = searchParams.get('published')

    // Build query
    let query = supabaseAdmin
      .from('courses')
      .select(`
        id,
        title,
        slug,
        description,
        cover_url,
        difficulty,
        published,
        created_at,
        modules (
          id,
          title,
          order
        )
      `)
      .order('created_at', { ascending: false })

    // Filter by published status if specified
    if (published === 'true') {
      query = query.eq('published', true)
    }

    const { data: courses, error } = await query

    if (error) {
      console.error('Courses fetch error:', error)
      return NextResponse.json({ error: 'Failed to fetch courses' }, { status: 500 })
    }

    // If userId is provided, fetch enrollments
    let enrollments = null
    if (userId) {
      const { data: userEnrollments } = await supabaseAdmin
        .from('enrollments')
        .select('course_id, progress, enrolled_at')
        .eq('user_id', userId)

      enrollments = userEnrollments
    }

    // Merge enrollment data with courses if available
    const coursesWithEnrollment = courses?.map(course => ({
      ...course,
      enrollment: enrollments?.find(e => e.course_id === course.id) || null
    }))

    return NextResponse.json({ courses: coursesWithEnrollment }, { status: 200 })
  } catch (error) {
    console.error('Courses API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
