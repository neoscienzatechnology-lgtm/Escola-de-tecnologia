-- Migration: Create certificates table
-- Description: Stores issued certificates for completed courses

CREATE TABLE IF NOT EXISTS public.certificates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  course_id UUID NOT NULL REFERENCES public.courses(id) ON DELETE CASCADE,
  issued_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  certificate_url TEXT,
  UNIQUE(user_id, course_id)
);

-- Enable RLS
ALTER TABLE public.certificates ENABLE ROW LEVEL SECURITY;

-- Policies for certificates table
-- Users can view their own certificates
CREATE POLICY "Users can view own certificates"
  ON public.certificates
  FOR SELECT
  USING (user_id = auth.uid());

-- Admins can view all certificates
CREATE POLICY "Admins can view all certificates"
  ON public.certificates
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.users
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- System can insert certificates (via Edge Function with service role)
CREATE POLICY "Service role can insert certificates"
  ON public.certificates
  FOR INSERT
  WITH CHECK (TRUE);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_certificates_user_id ON public.certificates(user_id);
CREATE INDEX IF NOT EXISTS idx_certificates_course_id ON public.certificates(course_id);
CREATE INDEX IF NOT EXISTS idx_certificates_issued_at ON public.certificates(issued_at);
