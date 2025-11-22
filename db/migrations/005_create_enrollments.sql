-- Migration: Create enrollments table
-- Description: Tracks student enrollments in courses

CREATE TABLE IF NOT EXISTS public.enrollments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  course_id UUID NOT NULL REFERENCES public.courses(id) ON DELETE CASCADE,
  progress NUMERIC NOT NULL DEFAULT 0.0 CHECK (progress >= 0 AND progress <= 100),
  enrolled_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(user_id, course_id)
);

-- Enable RLS
ALTER TABLE public.enrollments ENABLE ROW LEVEL SECURITY;

-- Policies for enrollments table
-- Users can view their own enrollments
CREATE POLICY "Users can view own enrollments"
  ON public.enrollments
  FOR SELECT
  USING (user_id = auth.uid());

-- Admins can view all enrollments
CREATE POLICY "Admins can view all enrollments"
  ON public.enrollments
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.users
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Users can enroll themselves (insert will be done via API route for validation)
CREATE POLICY "Users can create own enrollments"
  ON public.enrollments
  FOR INSERT
  WITH CHECK (user_id = auth.uid());

-- Users can update their own enrollment progress
CREATE POLICY "Users can update own enrollment progress"
  ON public.enrollments
  FOR UPDATE
  USING (user_id = auth.uid())
  WITH CHECK (user_id = auth.uid());

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_enrollments_user_id ON public.enrollments(user_id);
CREATE INDEX IF NOT EXISTS idx_enrollments_course_id ON public.enrollments(course_id);
