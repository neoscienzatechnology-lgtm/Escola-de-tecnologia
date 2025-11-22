# Component Inventory

## Basic UI Components (`/components/ui`)

### Button
- **Variants**: default, secondary, outline, ghost, link, neon, neonPink, neonPurple
- **Sizes**: sm, default, lg, xl, icon
- **Features**: Full keyboard accessibility, focus states, disabled state

### Input
- **Features**: Standard text input, email, password support
- **States**: default, disabled, error (via className)

### Textarea
- **Features**: Multi-line text input
- **States**: default, disabled

### Card
- **Sub-components**: CardHeader, CardTitle, CardDescription, CardContent, CardFooter
- **Features**: Modular card structure, hover effects

### Badge
- **Variants**: default, secondary, destructive, outline, neon, neonPink, neonPurple
- **Features**: Small labels and tags

### Dialog (Modal)
- **Sub-components**: DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter
- **Features**: Accessible modal dialogs, backdrop, close button, keyboard escape

## Advanced Components (`/components/system`)

### HeroSection
- **Props**: title, subtitle, description, primaryCta, secondaryCta, backgroundImage
- **Features**: Animated gradient orbs, Framer Motion animations, responsive layout

### CourseCard
- **Props**: title, description, duration, students, level, category, image, price, instructor
- **Features**: Hover animations, badge integration, responsive images

### CourseGrid
- **Props**: columns (1-4), children
- **Features**: Responsive grid layout

### Navbar
- **Props**: logo, logoText, links, ctaText, ctaHref
- **Features**: Responsive mobile menu, animated transitions

### Footer
- **Features**: Multi-column layout, social links, responsive

### SectionTitle
- **Props**: title, subtitle, description, align
- **Features**: Animated on scroll, multiple alignment options

### Container
- **Props**: maxWidth (sm, md, lg, xl, 2xl, full)
- **Features**: Responsive padding, centered layout

### TestimonialCard
- **Props**: quote, author, role, company, image, rating
- **Features**: Star rating display, profile images

### Timeline
- **Props**: items (array of title, description, date, icon)
- **Features**: Alternating layout, animated on scroll, custom icons

### CTABlock
- **Props**: title, description, primaryCta, secondaryCta, variant
- **Variants**: default, gradient, outlined
- **Features**: Multiple call-to-action styles

## Design Tokens (`/lib/design/tokens.ts`)

### Colors
- Primary: Black (#000), White (#fff)
- Dark shades: #111, #222, #333
- Neon: Pink (#ff006e), Purple (#6a00f4)
- Gradients: neonPink, neonPurple, neonDiagonal, darkOverlay

### Typography
- Fonts: Inter (body), Poppins (headings)
- Weights: 300, 400, 600, 700, 800
- Sizes: xs through 7xl
- Line heights: tight (1.2), normal (1.5), relaxed (1.75)

### Spacing
- Navbar: 80px desktop, 64px mobile
- Container: 1280px max, 2rem padding desktop, 1rem mobile
- Section: 5rem padding vertical desktop, 3rem mobile
- Grid gap: 2rem desktop, 1rem mobile

### Border Radius
- sm: 4px
- md: 8px
- lg: 12px
- xl: 24px
- full: 9999px

### Transitions
- fast: 150ms
- normal: 300ms
- slow: 500ms
- Easings: default, in, out, inOut, futuristic

### Shadows
- Standard: sm, md, lg, xl
- Neon: pink, purple (with glow effect)

### Breakpoints
- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px
- 2xl: 1536px

## Custom CSS Utilities (`/styles/design-system.css`)

### Text Effects
- `.text-neon-pink`: Pink neon text with glow
- `.text-neon-purple`: Purple neon text with glow

### Glow Effects
- `.glow-neon-pink`: Pink neon box shadow
- `.glow-neon-purple`: Purple neon box shadow

### Gradients
- `.bg-gradient-neon-pink`: Pink gradient
- `.bg-gradient-neon-purple`: Purple gradient
- `.bg-gradient-neon-diagonal`: Diagonal pink-purple gradient
- `.bg-dark-overlay`: Dark gradient overlay

### Transitions
- `.transition-smooth`: 300ms smooth transition
- `.transition-fast`: 150ms fast transition
- `.transition-futuristic`: Bounce easing transition

### Container
- `.container-custom`: Custom container with responsive padding

## Usage Examples

### Basic Button
```tsx
import { Button } from "@/components/ui/button"

<Button variant="neon">Click Me</Button>
```

### Hero Section
```tsx
import { HeroSection } from "@/components/system/hero-section"

<HeroSection
  title="Welcome"
  description="Get started today"
  primaryCta={{ text: "Sign Up", href: "/signup" }}
/>
```

### Course Grid
```tsx
import { CourseGrid } from "@/components/system/course-grid"
import { CourseCard } from "@/components/system/course-card"

<CourseGrid columns={3}>
  <CourseCard title="Course 1" description="..." />
  <CourseCard title="Course 2" description="..." />
  <CourseCard title="Course 3" description="..." />
</CourseGrid>
```

## Accessibility Features

- Keyboard navigation support
- ARIA labels and attributes
- Focus indicators (2px ring with offset)
- Semantic HTML structure
- WCAG AA color contrast
- Screen reader friendly
- Skip to content links
- Reduced motion support

## Responsive Behavior

All components are fully responsive with breakpoints:
- Mobile: < 768px (1 column layouts)
- Tablet: 768px - 1024px (2 column layouts)
- Desktop: > 1024px (3-4 column layouts)

## Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

## Performance

- Server-side rendering (SSR)
- Static generation where possible
- Optimized images
- Code splitting
- Tree shaking
- Minified production builds
