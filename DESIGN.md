# DESIGN.md — Standard Pumps & Borewells

This file is the visual direction. `antislop` is the quality filter; this document supplies the brand-specific design decisions.

## Product character

A credible, established local pump and borewell business in Attapur, Hyderabad. The website should feel dependable, technically competent, straightforward and carefully made. It is a service business website, not a SaaS landing page.

**Primary feeling:** calm confidence.
**Secondary feeling:** practical engineering clarity.
**Audience:** homeowners, apartment communities, farmers, commercial customers, builders and contractors.
**Primary action:** contact the business by WhatsApp or phone.

## Brand assets and identity

Use the supplied logo as the primary brand mark:
`public/images/brand/standard-pumps-logo.png`

The logo already establishes the circular water-drop / borewell-rig emblem and blue identity. Do not redraw, distort, recolor, crop, or add effects to it. Preserve its aspect ratio. If the logo looks too detailed at a tiny size, use a text wordmark alongside it rather than inventing a second logo.

The supplied reel is the primary homepage media:
`public/videos/standard-pumps-reel.mp4`

Poster:
`public/images/video/standard-pumps-poster.jpg`

## Palette

Use a restrained palette sampled from the supplied identity:

- Deep navy: `#092C68` — primary text, navigation, strong surfaces.
- Pump blue: `#0877D1` — primary actions and key links.
- Water cyan: `#19BFE8` — small highlights and water-related accents.
- Warm white: `#FFFDF8` — main canvas.
- Pale blue: `#E7F8FF` — occasional quiet section surface.
- Gold: `#FFC928` — a very small accent only; not a second primary color.
- Ink: `#17212F` — body text.
- Muted slate: `#5B6B7D` — secondary copy, only after contrast testing.
- Border: a cool, low-contrast line that remains visible.

Do not use a blue-purple gradient. Avoid large gradient fills. A subtle blue tonal shift may be used only when it has a clear hierarchy purpose.

## Typography

Choose one strong, highly legible sans-serif family for most of the interface. A restrained display face may be used for a few headings if it adds character without reducing clarity. Use a deliberate type scale, tight but readable headline tracking, comfortable body leading and consistent weights.

Do not use thin grey text for essential information. Keep normal text at WCAG AA contrast (4.5:1) and large text at least 3:1.

## Layout and composition

- Content max-width: approximately 1180–1240px.
- Use a consistent spacing scale and a clear alignment grid.
- Generous but not wasteful whitespace.
- Sections should have distinct content rhythm; do not repeat the same card grid in every section.
- Prefer editorial layouts, useful product groupings and clear service descriptions over decorative card collections.
- Borders and shadows should be restrained and purposeful.
- Avoid excessive rounded corners. Use a small radius family and reserve stronger rounding for the video frame or interactive controls where appropriate.
- The page should not look like a generic template or a dashboard.

## Homepage media priority

The supplied 40.4-second portrait reel is the first major content element on the homepage.

- It must be visible immediately after a compact header on mobile.
- Keep the 9:16 aspect ratio; never stretch or crop it into a landscape frame.
- On desktop, use a balanced composition: a prominent portrait video next to concise business positioning and contact actions.
- Use the supplied poster and native accessible controls.
- Do not autoplay with sound. Prefer click-to-play with `preload="metadata"` so mobile visitors are not forced to download the full video.
- Keep WhatsApp and Call actions adjacent to the hero, not buried at the bottom.

## Motion

Motion should clarify hierarchy and provide feedback, not decorate every element.

- Use short, purposeful entrance transitions and restrained hover/press states.
- Use one motion language consistently.
- Keep movement subtle on a business-services website.
- Respect `prefers-reduced-motion: reduce`; disable non-essential motion.
- No scroll hijacking, auto-advancing carousels, cursor followers, constant floating blobs, parallax on every section, or animation that delays access to content.
- Never make the site feel like the promotional reel; the website itself remains clean and minimal.

## Components

Buttons:
- Primary: solid pump blue with strong contrast.
- Secondary: navy outline or quiet surface.
- WhatsApp: clearly recognizable and labelled; do not rely on icon-only controls.
- All interactive targets should be at least 44×44px.

Navigation:
- Compact desktop navigation.
- Mobile navigation must be purpose-built, keyboard accessible and easy to close.
- Do not hide every important destination behind an unexplained icon.

Product/service presentation:
- Use concise titles, plain-language descriptions and real categories from `PROJECT_CONTEXT.md`.
- Do not invent prices, stock status, warranties, certifications, testimonials, customer counts, years of experience or service guarantees.
- Do not imply authorized dealership status for a brand unless confirmed.

## Responsive behaviour

Design mobile deliberately, not as a squeezed desktop layout. Verify at narrow phone, large phone, tablet, laptop and wide desktop widths. Prevent horizontal overflow. Preserve readable type and touch targets. Check 200% zoom.

## Anti-patterns to reject

- Generic SaaS hero with a gradient orb.
- Glassmorphism.
- Rows of identical rounded feature cards.
- Fake testimonial sliders or invented star ratings.
- Fake counters and unsupported “25+ years” claims.
- Fake partner/authorized-dealer badges.
- Huge decorative icons with no meaning.
- Overloaded motion and scroll effects.
- Generic AI copy such as “revolutionizing water solutions”.
- Stock images presented as actual company staff, equipment or work.
