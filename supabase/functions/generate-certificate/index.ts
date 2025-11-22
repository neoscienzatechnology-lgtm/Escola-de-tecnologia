import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    const { userId, courseId } = await req.json()

    if (!userId || !courseId) {
      return new Response(
        JSON.stringify({ error: 'Missing userId or courseId' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
      )
    }

    // Verify user completed the course
    const { data: enrollment, error: enrollmentError } = await supabaseClient
      .from('enrollments')
      .select('progress')
      .eq('user_id', userId)
      .eq('course_id', courseId)
      .single()

    if (enrollmentError || !enrollment || enrollment.progress < 100) {
      return new Response(
        JSON.stringify({ error: 'Course not completed' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
      )
    }

    // Get user and course details
    const { data: user } = await supabaseClient
      .from('users')
      .select('display_name')
      .eq('id', userId)
      .single()

    const { data: course } = await supabaseClient
      .from('courses')
      .select('title')
      .eq('id', courseId)
      .single()

    // Generate mock PDF certificate
    // In production, use a PDF library like jsPDF or puppeteer
    const certificateContent = `
      CERTIFICATE OF COMPLETION
      
      This certifies that ${user?.display_name || 'Student'}
      has successfully completed the course
      "${course?.title || 'Course'}"
      
      Issued on: ${new Date().toLocaleDateString('pt-BR')}
      Certificate ID: ${userId.slice(0, 8)}-${courseId.slice(0, 8)}
    `

    // In production: upload PDF to storage bucket
    const certificateUrl = `/certificates/${userId}_${courseId}_${Date.now()}.txt`

    // Create certificate record
    const { data: certificate, error: certError } = await supabaseClient
      .from('certificates')
      .insert({
        user_id: userId,
        course_id: courseId,
        certificate_url: certificateUrl,
        issued_at: new Date().toISOString()
      })
      .select()
      .single()

    if (certError) {
      throw certError
    }

    return new Response(
      JSON.stringify({ 
        certificate,
        content: certificateContent,
        message: 'Certificate generated successfully' 
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
    )
  }
})
