/**
 * Design System Tokens
 * Escola de Tecnologia - Inspired by FIAP
 * 
 * This file contains all design tokens for the Escola de Tecnologia Design System
 */

export const designTokens = {
  // Colors
  colors: {
    // Primary colors
    black: '#000000',
    white: '#ffffff',
    
    // Dark grays
    dark: {
      100: '#111111',
      200: '#222222',
      300: '#333333',
    },
    
    // Neon colors (FIAP-inspired)
    neon: {
      pink: '#ff006e',
      purple: '#6a00f4',
    },
    
    // Gradients
    gradients: {
      neonPink: 'linear-gradient(135deg, #ff006e 0%, #ff4d94 100%)',
      neonPurple: 'linear-gradient(135deg, #6a00f4 0%, #8e44ff 100%)',
      neonDiagonal: 'linear-gradient(135deg, #6a00f4 0%, #ff006e 100%)',
      darkOverlay: 'linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 100%)',
    },
  },

  // Typography
  typography: {
    fonts: {
      sans: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif",
      display: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    },
    
    weights: {
      light: 300,
      regular: 400,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
    
    sizes: {
      xs: '0.75rem',      // 12px
      sm: '0.875rem',     // 14px
      base: '1rem',       // 16px
      lg: '1.125rem',     // 18px
      xl: '1.25rem',      // 20px
      '2xl': '1.5rem',    // 24px
      '3xl': '1.875rem',  // 30px
      '4xl': '2.25rem',   // 36px
      '5xl': '3rem',      // 48px
      '6xl': '3.75rem',   // 60px
      '7xl': '4.5rem',    // 72px
    },
    
    lineHeights: {
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.75,
    },
    
    letterSpacing: {
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
    },
  },

  // Spacing
  spacing: {
    navbar: {
      height: '80px',
      heightMobile: '64px',
    },
    
    container: {
      maxWidth: '1280px',
      padding: '2rem',
      paddingMobile: '1rem',
    },
    
    section: {
      paddingY: '5rem',
      paddingYMobile: '3rem',
    },
    
    grid: {
      gap: '2rem',
      gapMobile: '1rem',
    },
  },

  // Border Radius
  radii: {
    none: '0',
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '24px',
    full: '9999px',
  },

  // Transitions & Animations
  transitions: {
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
    
    // Cubic bezier for futuristic feel
    easing: {
      default: 'cubic-bezier(0.4, 0, 0.2, 1)',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      futuristic: 'cubic-bezier(0.34, 1.56, 0.64, 1)', // Bounce effect
    },
  },

  // Shadows
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    neon: {
      pink: '0 0 20px rgba(255, 0, 110, 0.5), 0 0 40px rgba(255, 0, 110, 0.3)',
      purple: '0 0 20px rgba(106, 0, 244, 0.5), 0 0 40px rgba(106, 0, 244, 0.3)',
    },
  },

  // Breakpoints
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  // Z-index layers
  zIndex: {
    base: 0,
    dropdown: 1000,
    sticky: 1100,
    modal: 1200,
    popover: 1300,
    tooltip: 1400,
  },
} as const

export type DesignTokens = typeof designTokens
