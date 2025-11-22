-- Migration: Create lesson_progress table
-- Description: Tracks individual lesson completion progress

CREATE TABLE IF NOT EXISTS public.lesson_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  enrollment_id UUID NOT NULL REFERENCES public.enrollments(id) ON DELETE CASCADE,
  lesson_id UUID NOT NULL REFERENCES public.lessons(id) ON DELETE CASCADE,
  completed BOOLEAN NOT NULL DEFAULT FALSE,
  last_watched_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(enrollment_id, lesson_id)
);

-- Enable RLS
ALTER TABLE public.lesson_progress ENABLE ROW LEVEL SECURITY;

-- Policies for lesson_progress table
-- Users can view their own lesson progress
CREATE POLICY "Users can view own lesson progress"
  ON public.lesson_progress
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.enrollments
      WHERE id = enrollment_id AND user_id = auth.uid()
    )
  );

-- Admins can view all lesson progress
CREATE POLICY "Admins can view all lesson progress"
  ON public.lesson_progress
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.users
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Users can create their own lesson progress
CREATE POLICY "Users can create own lesson progress"
  ON public.lesson_progress
  FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.enrollments
      WHERE id = enrollment_id AND user_id = auth.uid()
    )
  );

-- Users can update their own lesson progress
CREATE POLICY "Users can update own lesson progress"
  ON public.lesson_progress
  FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM public.enrollments
      WHERE id = enrollment_id AND user_id = auth.uid()
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.enrollments
      WHERE id = enrollment_id AND user_id = auth.uid()
    )
  );

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_lesson_progress_enrollment_id ON public.lesson_progress(enrollment_id);
CREATE INDEX IF NOT EXISTS idx_lesson_progress_lesson_id ON public.lesson_progress(lesson_id);
CREATE INDEX IF NOT EXISTS idx_lesson_progress_completed ON public.lesson_progress(completed);
