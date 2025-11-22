-- Migration: Create lessons table
-- Description: Stores lesson content within modules

CREATE TABLE IF NOT EXISTS public.lessons (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  module_id UUID NOT NULL REFERENCES public.modules(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  content JSONB DEFAULT '{}',
  video_url TEXT,
  "order" INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.lessons ENABLE ROW LEVEL SECURITY;

-- Policies for lessons table
-- Anyone can view lessons of published courses
CREATE POLICY "Anyone can view lessons of published courses"
  ON public.lessons
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.modules m
      JOIN public.courses c ON c.id = m.course_id
      WHERE m.id = module_id AND (c.published = TRUE OR auth.uid() IS NOT NULL)
    )
  );

-- Teachers and admins can create lessons
CREATE POLICY "Teachers and admins can create lessons"
  ON public.lessons
  FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.modules m
      JOIN public.courses c ON c.id = m.course_id
      JOIN public.users u ON u.id = auth.uid()
      WHERE m.id = module_id AND (c.created_by = auth.uid() OR u.role = 'admin')
    )
  );

-- Teachers can update lessons for their courses
CREATE POLICY "Teachers can update own course lessons"
  ON public.lessons
  FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM public.modules m
      JOIN public.courses c ON c.id = m.course_id
      JOIN public.users u ON u.id = auth.uid()
      WHERE m.id = module_id AND (c.created_by = auth.uid() OR u.role = 'admin')
    )
  );

-- Admins can delete lessons
CREATE POLICY "Admins can delete lessons"
  ON public.lessons
  FOR DELETE
  USING (
    EXISTS (
      SELECT 1 FROM public.users
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Create index for performance
CREATE INDEX IF NOT EXISTS idx_lessons_module_id ON public.lessons(module_id);
CREATE INDEX IF NOT EXISTS idx_lessons_order ON public.lessons("order");
