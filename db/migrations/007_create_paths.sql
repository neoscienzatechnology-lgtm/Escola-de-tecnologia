-- Migration: Create paths (learning paths/trilhas) table
-- Description: Stores learning paths that group multiple courses

CREATE TABLE IF NOT EXISTS public.paths (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  cover_url TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.paths ENABLE ROW LEVEL SECURITY;

-- Policies for paths table
-- Anyone can view paths
CREATE POLICY "Anyone can view paths"
  ON public.paths
  FOR SELECT
  USING (TRUE);

-- Teachers and admins can create paths
CREATE POLICY "Teachers and admins can create paths"
  ON public.paths
  FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.users
      WHERE id = auth.uid() AND role IN ('teacher', 'admin')
    )
  );

-- Teachers and admins can update paths
CREATE POLICY "Teachers and admins can update paths"
  ON public.paths
  FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM public.users
      WHERE id = auth.uid() AND role IN ('teacher', 'admin')
    )
  );

-- Admins can delete paths
CREATE POLICY "Admins can delete paths"
  ON public.paths
  FOR DELETE
  USING (
    EXISTS (
      SELECT 1 FROM public.users
      WHERE id = auth.uid() AND role = 'admin'
    )
  );
