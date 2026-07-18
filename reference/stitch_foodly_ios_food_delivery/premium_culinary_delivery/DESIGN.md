---
name: Premium Culinary Delivery
colors:
  surface: '#f9f9fe'
  surface-dim: '#d9dade'
  surface-bright: '#f9f9fe'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f8'
  surface-container: '#ededf2'
  surface-container-high: '#e8e8ed'
  surface-container-highest: '#e2e2e7'
  on-surface: '#1a1c1f'
  on-surface-variant: '#5a413b'
  inverse-surface: '#2e3034'
  inverse-on-surface: '#f0f0f5'
  outline: '#8e706a'
  outline-variant: '#e3beb7'
  surface-tint: '#b3290f'
  primary: '#b3290f'
  on-primary: '#ffffff'
  primary-container: '#ff5f40'
  on-primary-container: '#5f0a00'
  inverse-primary: '#ffb4a5'
  secondary: '#785900'
  on-secondary: '#ffffff'
  secondary-container: '#fdc003'
  on-secondary-container: '#6c5000'
  tertiary: '#5f5e5e'
  on-tertiary: '#ffffff'
  tertiary-container: '#969494'
  on-tertiary-container: '#2d2d2d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad3'
  primary-fixed-dim: '#ffb4a5'
  on-primary-fixed: '#3e0400'
  on-primary-fixed-variant: '#8e1500'
  secondary-fixed: '#ffdf9e'
  secondary-fixed-dim: '#fabd00'
  on-secondary-fixed: '#261a00'
  on-secondary-fixed-variant: '#5b4300'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474746'
  background: '#f9f9fe'
  on-background: '#1a1c1f'
  surface-variant: '#e2e2e7'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 34px
    fontWeight: '700'
    lineHeight: 41px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 17px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 30px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  margin-mobile: 16px
  margin-desktop: 24px
  gutter: 12px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style
The design system is centered on a premium, hospitality-first experience that mirrors the precision and elegance of high-end iOS applications. It targets a discerning audience that values speed, clarity, and appetite-appealing visuals.

The aesthetic follows **Modern Minimalism** with strong influences from the **Apple Human Interface Guidelines (HIG)**. The interface prioritizes high-quality food photography by utilizing expansive white space, subtle depth, and a sophisticated "glass" layer for persistent navigation. The emotional response should be one of reliability, warmth, and effortless luxury.

## Colors
The palette is dominated by a crisp White (#FFFFFF) to ensure a clean, editorial feel. 

- **Primary (Deep Coral):** Used for essential actions, price highlights, and brand presence. It evokes appetite and energy.
- **Secondary (Warm Gold):** Reserved for "Premium" tiers, ratings, and loyalty rewards.
- **Tertiary (Rich Black):** Used for high-contrast typography to ensure readability.
- **System Gray:** A range of adaptive grays (following iOS standards) for secondary text and subtle borders.

## Typography
This design system utilizes **Plus Jakarta Sans** for its clean, geometric, yet friendly personality that closely mimics the clarity of SF Pro while adding a modern editorial flair.

- **Scale:** Utilizes a classic typographic scale to ensure information density is managed effectively.
- **Weight:** Use Bold (700) for primary headers to create a strong visual anchor. Use Regular (400) for body text to maintain a light, airy feel.
- **Alignment:** Primarily left-aligned to follow natural reading patterns in a mobile-first environment.

## Layout & Spacing
The layout follows a **Fluid Grid** model optimized for mobile viewports. 

- **Safe Areas:** Adhere strictly to iOS safe area insets for notched devices.
- **Margins:** A standard 16px lateral margin is used for content containers.
- **Rhythm:** An 8pt spacing system governs all vertical and horizontal relationships to ensure mathematical harmony.
- **Density:** High whitespace is encouraged between major sections (e.g., "Trending Now" vs "Categories") to prevent cognitive overload.

## Elevation & Depth
Depth is used sparingly and purposefully to indicate interactivity and hierarchy.

- **Glassmorphism:** The Tab Bar and Navigation Bar utilize a `systemUltraThinMaterial` background blur (Backdrop Filter: blur(20px)) with a 10% white tint. This keeps the user grounded in their scroll position while maintaining a premium feel.
- **Ambient Shadows:** Cards use a very soft, diffused shadow: `y: 4, blur: 20, color: rgba(0,0,0,0.05)`. 
- **Active State:** When pressed, buttons and cards should subtly scale down (98%) rather than significantly changing shadow depth, mimicking a physical tactile response.

## Shapes
The shape language is "Squircle-adjacent," emphasizing soft, organic curves that feel friendly and approachable.

- **Primary Cards:** Use a generous 24px corner radius to create a distinct, modern "container" look.
- **Interactive Elements:** Buttons use a 16px radius, providing enough distinction from cards while maintaining the soft-edge theme.
- **Images:** All food photography must carry the same corner radius as its parent container to maintain visual alignment.

## Components
- **Buttons:** 
  - *Primary:* Deep Coral background, White text, 16px radius, height 54px for mobile accessibility.
  - *Secondary:* Subtle Gray (#F2F2F7) background, Rich Black text.
- **Cards:** 
  - Full-width or carousel-based with 24px radius. 
  - Content should have 16px internal padding.
- **Chips/Filters:** 
  - Pill-shaped (fully rounded) with a 1px subtle border (#E5E5EA). Active state switches to Primary color with no border.
- **Input Fields:** 
  - Background-filled (#F2F2F7) with 12px radius. No borders unless in an error state.
- **Lists:** 
  - Clean, borderless rows with 1px hairline separators (#C6C6C8) that inset 16px from the left to match Apple's system style.
- **Navigation Bar:** 
  - Transparent on scroll-start, transitioning to Glassmorphism material upon content scroll. Large titles collapse to inline titles following HIG.