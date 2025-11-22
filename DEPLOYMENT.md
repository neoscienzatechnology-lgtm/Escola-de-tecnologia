# Deployment Guide - EscolaTech

## Quick Deploy to Vercel (Recommended)

### Option 1: Via Vercel Dashboard

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Configure the project:
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`
6. Click "Deploy"

Your site will be live at `https://your-project.vercel.app`

### Option 2: Via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

## Alternative Deployment Platforms

### Netlify

1. Connect your GitHub repository
2. Build settings:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `.next`
3. Deploy

### AWS Amplify

1. Connect your repository
2. Build settings:
   - **Build Command**: `npm run build`
3. Deploy

### Railway

1. Connect your GitHub repository
2. Railway auto-detects Next.js
3. Deploy

## Environment Variables

If you integrate email service for the contact form, add these variables:

```env
# Email Service (example with SendGrid)
EMAIL_API_KEY=your_sendgrid_api_key
EMAIL_FROM=noreply@escolatech.com.br
EMAIL_TO=contato@escolatech.com.br
```

## Custom Domain

### Vercel
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed
4. Wait for SSL certificate (automatic)

### Others
Similar process in project settings of each platform.

## Performance Optimization

The site is already optimized for production:

- ✅ Static generation for all pages except dynamic routes
- ✅ Code splitting enabled
- ✅ Automatic image optimization
- ✅ Minification and compression
- ✅ Lazy loading of components

## Post-Deployment Checklist

- [ ] Test all pages and navigation
- [ ] Verify contact form works
- [ ] Check mobile responsiveness
- [ ] Test all CTAs and links
- [ ] Verify SEO meta tags
- [ ] Set up analytics (Google Analytics, Vercel Analytics)
- [ ] Configure custom domain
- [ ] Set up monitoring
- [ ] Enable HTTPS (automatic on Vercel)

## Monitoring & Analytics

### Vercel Analytics
Already integrated - just enable in Vercel dashboard.

### Google Analytics
Add to `app/layout.tsx`:

```tsx
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  `}
</Script>
```

## Support

For deployment issues:
- Vercel: https://vercel.com/docs
- Netlify: https://docs.netlify.com
- Next.js: https://nextjs.org/docs/deployment

## Production Checklist

- [x] All pages implemented
- [x] Responsive design
- [x] SEO optimized
- [x] Performance optimized
- [x] Security patched
- [x] Code reviewed
- [x] Build successful
- [x] No vulnerabilities
- [ ] Custom domain configured
- [ ] Analytics integrated
- [ ] Contact form email configured
