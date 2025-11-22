-- Migration: Create path_courses junction table
-- Description: Many-to-many relationship between paths and courses

CREATE TABLE IF NOT EXISTS public.path_courses (
  path_id UUID NOT NULL REFERENCES public.paths(id) ON DELETE CASCADE,
  course_id UUID NOT NULL REFERENCES public.courses(id) ON DELETE CASCADE,
  "order" INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (path_id, course_id)
);

-- Enable RLS
ALTER TABLE public.path_courses ENABLE ROW LEVEL SECURITY;

-- Policies for path_courses table
-- Anyone can view path-course relationships
CREATE POLICY "Anyone can view path courses"
  ON public.path_courses
  FOR SELECT
  USING (TRUE);

-- Teachers and admins can manage path-course relationships
CREATE POLICY "Teachers and admins can manage path courses"
  ON public.path_courses
  FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM public.users
      WHERE id = auth.uid() AND role IN ('teacher', 'admin')
    )
  );

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_path_courses_path_id ON public.path_courses(path_id);
CREATE INDEX IF NOT EXISTS idx_path_courses_course_id ON public.path_courses(course_id);
CREATE INDEX IF NOT EXISTS idx_path_courses_order ON public.path_courses("order");
