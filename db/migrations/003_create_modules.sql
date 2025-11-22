-- Migration: Create modules table
-- Description: Stores course modules

CREATE TABLE IF NOT EXISTS public.modules (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id UUID NOT NULL REFERENCES public.courses(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  "order" INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.modules ENABLE ROW LEVEL SECURITY;

-- Policies for modules table
-- Anyone can view modules of published courses
CREATE POLICY "Anyone can view modules of published courses"
  ON public.modules
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.courses
      WHERE id = course_id AND (published = TRUE OR auth.uid() IS NOT NULL)
    )
  );

-- Teachers and admins can create modules
CREATE POLICY "Teachers and admins can create modules"
  ON public.modules
  FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.courses c
      JOIN public.users u ON u.id = auth.uid()
      WHERE c.id = course_id AND (c.created_by = auth.uid() OR u.role = 'admin')
    )
  );

-- Teachers can update modules for their courses
CREATE POLICY "Teachers can update own course modules"
  ON public.modules
  FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM public.courses c
      JOIN public.users u ON u.id = auth.uid()
      WHERE c.id = course_id AND (c.created_by = auth.uid() OR u.role = 'admin')
    )
  );

-- Admins can delete modules
CREATE POLICY "Admins can delete modules"
  ON public.modules
  FOR DELETE
  USING (
    EXISTS (
      SELECT 1 FROM public.users
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Create index for performance
CREATE INDEX IF NOT EXISTS idx_modules_course_id ON public.modules(course_id);
CREATE INDEX IF NOT EXISTS idx_modules_order ON public.modules("order");
