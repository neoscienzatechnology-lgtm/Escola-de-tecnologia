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

    const { event, userId, courseId, data } = await req.json()

    console.log('Webhook received:', { event, userId, courseId })

    // Handle different webhook events
    switch (event) {
      case 'payment.completed':
        // Mock payment webhook - create enrollment
        if (userId && courseId) {
          const { error } = await supabaseClient
            .from('enrollments')
            .insert({
              user_id: userId,
              course_id: courseId,
              progress: 0
            })

          if (error && error.code !== '23505') { // Ignore duplicate error
            throw error
          }

          return new Response(
            JSON.stringify({ message: 'Enrollment created', status: 'success' }),
            { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
          )
        }
        break

      case 'course.completed':
        // Auto-generate certificate when course is completed
        if (userId && courseId) {
          // Call generate-certificate function
          const certResponse = await fetch(
            `${Deno.env.get('SUPABASE_URL')}/functions/v1/generate-certificate`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')}`
              },
              body: JSON.stringify({ userId, courseId })
            }
          )

          const certData = await certResponse.json()

          return new Response(
            JSON.stringify({ message: 'Certificate generated', data: certData }),
            { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
          )
        }
        break

      default:
        return new Response(
          JSON.stringify({ message: 'Unknown event type', event }),
          { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
        )
    }

    return new Response(
      JSON.stringify({ message: 'Webhook processed', status: 'success' }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
    )
  }
})
