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

    const { enrollmentId, lessonId, completed } = await request.json()

    if (!enrollmentId || !lessonId || completed === undefined) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Verify enrollment belongs to user
    const { data: enrollment, error: enrollmentError } = await supabaseAdmin
      .from('enrollments')
      .select('id, user_id, course_id')
      .eq('id', enrollmentId)
      .eq('user_id', user.id)
      .single()

    if (enrollmentError || !enrollment) {
      return NextResponse.json({ error: 'Enrollment not found' }, { status: 404 })
    }

    // Upsert lesson progress
    const { data: progress, error: progressError } = await supabaseAdmin
      .from('lesson_progress')
      .upsert({
        enrollment_id: enrollmentId,
        lesson_id: lessonId,
        completed,
        last_watched_at: new Date().toISOString()
      }, {
        onConflict: 'enrollment_id,lesson_id'
      })
      .select()
      .single()

    if (progressError) {
      console.error('Progress error:', progressError)
      return NextResponse.json({ error: 'Failed to save progress' }, { status: 500 })
    }

    // Update enrollment progress percentage
    // Get total lessons in course
    const { data: courseLessons } = await supabaseAdmin
      .from('lessons')
      .select('id, modules!inner(course_id)')
      .eq('modules.course_id', enrollment.course_id)

    // Get completed lessons for this enrollment
    const { data: completedLessons } = await supabaseAdmin
      .from('lesson_progress')
      .select('lesson_id')
      .eq('enrollment_id', enrollmentId)
      .eq('completed', true)

    const totalLessons = courseLessons?.length || 0
    const completedCount = completedLessons?.length || 0
    const progressPercentage = totalLessons > 0 ? (completedCount / totalLessons) * 100 : 0

    // Update enrollment progress
    await supabaseAdmin
      .from('enrollments')
      .update({ progress: progressPercentage })
      .eq('id', enrollmentId)

    return NextResponse.json({ 
      progress,
      enrollmentProgress: progressPercentage 
    }, { status: 200 })
  } catch (error) {
    console.error('Progress API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
