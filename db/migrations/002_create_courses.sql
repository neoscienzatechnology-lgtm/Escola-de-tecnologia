-- Migration: Create courses table
-- Description: Stores course information

CREATE TABLE IF NOT EXISTS public.courses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  cover_url TEXT,
  difficulty TEXT CHECK (difficulty IN ('beginner', 'intermediate', 'advanced')),
  created_by UUID REFERENCES public.users(id),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  published BOOLEAN NOT NULL DEFAULT FALSE
);

-- Enable RLS
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;

-- Policies for courses table
-- Anyone can view published courses
CREATE POLICY "Anyone can view published courses"
  ON public.courses
  FOR SELECT
  USING (published = TRUE OR auth.uid() IS NOT NULL);

-- Teachers and admins can create courses
CREATE POLICY "Teachers and admins can create courses"
  ON public.courses
  FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.users
      WHERE id = auth.uid() AND role IN ('teacher', 'admin')
    )
  );

-- Teachers can update their own courses, admins can update all
CREATE POLICY "Teachers can update own courses"
  ON public.courses
  FOR UPDATE
  USING (
    created_by = auth.uid() OR
    EXISTS (
      SELECT 1 FROM public.users
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Prevent mass deletion in production
CREATE POLICY "Prevent unauthorized deletion"
  ON public.courses
  FOR DELETE
  USING (
    EXISTS (
      SELECT 1 FROM public.users
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Create index for performance
CREATE INDEX IF NOT EXISTS idx_courses_slug ON public.courses(slug);
CREATE INDEX IF NOT EXISTS idx_courses_published ON public.courses(published);
