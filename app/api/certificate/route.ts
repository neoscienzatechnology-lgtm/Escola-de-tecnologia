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

    // Verify user completed the course (100% progress)
    const { data: enrollment, error: enrollmentError } = await supabaseAdmin
      .from('enrollments')
      .select('id, progress')
      .eq('user_id', user.id)
      .eq('course_id', courseId)
      .single()

    if (enrollmentError || !enrollment) {
      return NextResponse.json({ error: 'Enrollment not found' }, { status: 404 })
    }

    if (enrollment.progress < 100) {
      return NextResponse.json({ 
        error: 'Course not completed yet',
        progress: enrollment.progress 
      }, { status: 400 })
    }

    // Check if certificate already exists
    const { data: existingCert } = await supabaseAdmin
      .from('certificates')
      .select('id, certificate_url')
      .eq('user_id', user.id)
      .eq('course_id', courseId)
      .single()

    if (existingCert) {
      return NextResponse.json({ 
        certificate: existingCert,
        message: 'Certificate already exists'
      }, { status: 200 })
    }

    // Call Edge Function to generate certificate
    // For now, create a placeholder certificate
    const certificateUrl = `/certificates/${user.id}_${courseId}_${Date.now()}.pdf`
    
    const { data: certificate, error: certError } = await supabaseAdmin
      .from('certificates')
      .insert({
        user_id: user.id,
        course_id: courseId,
        certificate_url: certificateUrl,
        issued_at: new Date().toISOString()
      })
      .select()
      .single()

    if (certError) {
      console.error('Certificate creation error:', certError)
      return NextResponse.json({ error: 'Failed to generate certificate' }, { status: 500 })
    }

    // In production, this would trigger the generate-certificate Edge Function
    // which would create an actual PDF and upload to storage

    return NextResponse.json({ 
      certificate,
      message: 'Certificate generated successfully'
    }, { status: 201 })
  } catch (error) {
    console.error('Certificate API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
