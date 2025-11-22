import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'

export async function POST(request: NextRequest) {
  try {
    // Get the authorization header
    const authHeader = request.headers.get('authorization')
    if (!authHeader) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Verify the JWT token
    const token = authHeader.replace('Bearer ', '')
    const { data: { user }, error: authError } = await supabaseAdmin.auth.getUser(token)
    
    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { courseId } = await request.json()

    if (!courseId) {
      return NextResponse.json({ error: 'Course ID is required' }, { status: 400 })
    }

    // Check if user is already enrolled
    const { data: existingEnrollment } = await supabaseAdmin
      .from('enrollments')
      .select('id')
      .eq('user_id', user.id)
      .eq('course_id', courseId)
      .single()

    if (existingEnrollment) {
      return NextResponse.json({ error: 'Already enrolled in this course' }, { status: 400 })
    }

    // Check if course exists and is published
    const { data: course, error: courseError } = await supabaseAdmin
      .from('courses')
      .select('id, published')
      .eq('id', courseId)
      .single()

    if (courseError || !course) {
      return NextResponse.json({ error: 'Course not found' }, { status: 404 })
    }

    if (!course.published) {
      return NextResponse.json({ error: 'Course is not published' }, { status: 400 })
    }

    // Create enrollment
    const { data: enrollment, error: enrollError } = await supabaseAdmin
      .from('enrollments')
      .insert({
        user_id: user.id,
        course_id: courseId,
        progress: 0
      })
      .select()
      .single()

    if (enrollError) {
      console.error('Enrollment error:', enrollError)
      return NextResponse.json({ error: 'Failed to enroll' }, { status: 500 })
    }

    return NextResponse.json({ enrollment }, { status: 201 })
  } catch (error) {
    console.error('Enroll API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
