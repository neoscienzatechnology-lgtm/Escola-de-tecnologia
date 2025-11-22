-- Storage buckets configuration
-- Run this in Supabase SQL Editor after project is created

-- Note: Buckets can also be created via Dashboard UI
-- This SQL is for reference and automation

-- Create buckets (if not exists, you may need to do this via Dashboard)
-- INSERT INTO storage.buckets (id, name, public) VALUES 
--   ('public-assets', 'public-assets', true),
--   ('private-videos', 'private-videos', false),
--   ('certificates', 'certificates', false)
-- ON CONFLICT (id) DO NOTHING;

-- Storage policies for public-assets bucket
CREATE POLICY "Public assets are viewable by everyone"
ON storage.objects FOR SELECT
USING (bucket_id = 'public-assets');

CREATE POLICY "Authenticated users can upload public assets"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'public-assets' AND
  auth.role() = 'authenticated'
);

-- Storage policies for private-videos bucket
CREATE POLICY "Authenticated users can view videos"
ON storage.objects FOR SELECT
USING (
  bucket_id = 'private-videos' AND
  auth.role() = 'authenticated'
);

CREATE POLICY "Teachers and admins can upload videos"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'private-videos' AND
  EXISTS (
    SELECT 1 FROM public.users
    WHERE id = auth.uid() AND role IN ('teacher', 'admin')
  )
);

-- Storage policies for certificates bucket
CREATE POLICY "Users can view their own certificates"
ON storage.objects FOR SELECT
USING (
  bucket_id = 'certificates' AND
  (storage.foldername(name))[1] = auth.uid()::text
);

CREATE POLICY "Service role can insert certificates"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'certificates'
);

-- Instructions:
-- 1. Create buckets manually in Supabase Dashboard > Storage
-- 2. Create these buckets:
--    - public-assets (public: true)
--    - private-videos (public: false)
--    - certificates (public: false)
-- 3. Run this SQL to set up policies
-- 4. Upload placeholder images to public-assets for seed data
