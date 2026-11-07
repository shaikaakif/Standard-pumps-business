# OpenCode Implementation Prompt — Standard Pumps & Borewells Website

You are the lead product designer and senior frontend engineer for this project. Build the actual production-quality website in this directory. Do not return only a plan, a wireframe, or a visual mockup. Inspect the supplied context and assets, implement the website, run it, test it, inspect the rendered result at multiple viewport widths, refine defects, and report exactly what was verified.

## 0. Read before coding

Read completely:
- `AGENTS.md`
- `DESIGN.md`
- `PROJECT_CONTEXT.md`
- `ANTISLOP_SETUP.md`
- `.opencode/skills/master-ui-skill/SKILL.md`

Also read the installed Antislop core and all relevant installed skills under `.opencode/skills/`. For this task the relevant set is: core, UI, copywriting, human/accessibility, layoutmobile, and code comments. If the files are missing, do not pretend the rules are loaded; ask the user to finish the official installation in `ANTISLOP_SETUP.md`.

Use Antislop in during-build mode. `DESIGN.md` is the visual authority for this business. Antislop filters generic output; it does not override the brand direction.

## 1. Project goal

Create a polished, responsive, local-business website for **Standard Pumps & Borewells**, located at Attapur Ring Road, Hyderabad, Telangana, India.

The website must quickly answer:
1. What does the business sell?
2. What pump and borewell-related services does it provide?
3. Can it help with the visitor's type of requirement?
4. How can the visitor call or message the business?

The site should feel credible, clean, minimal, carefully art-directed and easy to use. It is not a SaaS landing page, a generic template, a dashboard, or a maximalist promotional reel.

## 2. Business facts and truth constraints

Treat `PROJECT_CONTEXT.md` as the primary source of business information.

Confirmed by the business owner in the conversation:
- Business name: Standard Pumps & Borewells.
- Location: Attapur Ring Road, Hyderabad, Telangana, India.
- Phone: +91 9110704747.
- Primary business strengths: reliable pump sales and genuine products.
- Customer base: everyone — residential, apartment, agricultural, commercial and construction customers.

The supplied business profile lists product categories including submersible pumps, open-well pumps, monoblock pumps, booster pumps, motors, column pipes, submersible cables, starters, control panels, fittings and accessories.

The supplied profile lists service categories including pump installation/removal, repair, motor rewinding, borewell flushing/cleaning, on-site inspection, pump selection assistance and related borewell work.

**Do not invent or overstate:** exact stock, prices, discounts, warranties, authorised dealership status, certifications, technician credentials, customer testimonials, star ratings, years in business, emergency response times, guaranteed results, opening hours, exact service radius, or exact drilling/lifting capacities. The old banner says “Trusted Service Since 25 Years”, but this is not confirmed; do not publish it as a fact without user approval. Brand names are profile-supplied; do not claim authorised-dealer status. Use cautious wording such as “product options may include” where stock may vary.

There is no supplied business email address. Do not create one.

## 3. Required media and contact destinations

Use the exact supplied files:
- Logo: `/images/brand/standard-pumps-logo.png`
- Main video: `/videos/standard-pumps-reel.mp4`
- Poster: `/images/video/standard-pumps-poster.jpg`

The supplied video is portrait 1080×1920, 30 fps, approximately 40.4 seconds. Preserve its 9:16 ratio. Do not crop it into a landscape video, stretch it, replace it with stock footage, or transcode/overwrite the source.

Contact destinations:
- WhatsApp: `https://wa.me/919110704747`
- Phone: `tel:+919110704747`
- Facebook: `https://www.facebook.com/people/Standard-Pumps-Borewell/`
- Instagram: `https://www.instagram.com/standard_pumps_and_borewell`
- Google Maps search: `https://www.google.com/maps/search/?api=1&query=Standard+Pumps+%26+Borewells%2C+Attapur+Ring+Road%2C+Hyderabad`

Use a prefilled WhatsApp message that politely asks what pump or service the visitor needs. Encode the message correctly. Open external links safely with appropriate `rel` attributes. The Maps URL is a search URL, not a verified place pin; label it “Find us on Google Maps” rather than claiming an exact pin.

## 4. Page architecture

Build a compact site with four meaningful routes:
- `/` — Home
- `/products` — Products and equipment categories
- `/services` — Service capabilities
- `/contact` — Contact, location and enquiry actions

Do not create a large sitemap of thin pages. Four useful pages are enough. Share navigation, footer, contact actions and design tokens. Use semantic headings and useful internal links.

### Home
The supplied video must be the first major content element after the compact header. It must not be buried below a long generic introduction.

- Mobile: compact header, then the portrait video as the immediate hero media, then concise business positioning and prominent WhatsApp/Call actions. Keep the video within the first screen or immediately visible without a long scroll.
- Desktop: use a balanced editorial split layout. Give the vertical video a prominent 9:16 frame; put a concise business headline, one short explanation and call/WhatsApp actions beside it. Do not stretch the video to fill a wide rectangle.
- Use the provided poster and native accessible video controls.
- Do not autoplay with sound. Prefer click-to-play and `preload="metadata"` so the page does not immediately download the full 14 MB video for every visitor.
- Show a clear play affordance and a visible way to pause/stop playback.
- Follow the video with a concise explanation of sales + service, product categories, a purposeful services preview, business identity/location, and contact CTA.
- Do not add fake reviews or a fake “trusted by” logo strip.

### Products
Group products in meaningful categories:
- Water pumps and motors: submersible, open-well, monoblock, booster.
- Borewell column pipes.
- Submersible cables.
- Starters and control panels.
- Fittings and accessories.

Explain categories in plain language. Do not fabricate model specifications, pricing, availability, product photos or performance claims. If no real product photos are supplied, use a restrained icon/diagram treatment or typography; do not pass stock photos off as actual inventory.

### Services
Present only the services listed in `PROJECT_CONTEXT.md`, with concise, factual explanations:
- Pump installation.
- Pump removal/extraction.
- Pump repair and servicing.
- Motor rewinding (subject to confirming actual scope).
- Borewell flushing/cleaning (subject to confirming actual scope/equipment).
- On-site inspection and pump-selection assistance.
- Related borewell lifting/installation work only with cautious wording where exact capabilities are unconfirmed.

Avoid invented guarantees, response times and technical limits. Provide a direct WhatsApp enquiry CTA for each relevant service, using a prefilled message that names that service.

### Contact
- Prominent tap-to-call and WhatsApp actions.
- Address: Attapur Ring Road, Hyderabad, Telangana, India.
- Google Maps search link.
- Facebook and Instagram links.
- No email field or fake contact form submission.
- If you create an enquiry form, make it a real client-side form that validates fields and opens a WhatsApp message; clearly explain that it opens WhatsApp and does not submit to a server. Do not create a fake backend.

## 5. Design direction

Follow `DESIGN.md` precisely:
- Warm white / near-white canvas.
- Deep navy as the main brand anchor.
- Pump blue for primary actions.
- Cyan as a restrained supporting accent.
- Gold/yellow as a small highlight only.
- Strong typography, clear hierarchy, generous but disciplined whitespace.
- Clean editorial layouts, not generic card grids.
- Restrained borders, shadows and corner radii.
- No glassmorphism, no blue-purple gradients, no glowing blobs, no excessive pill shapes, no random decorative icons.
- Do not copy the maximalist style of the video into the website. The video is a media asset; the site itself is clean and minimal.

Use the supplied logo without distortion. Build a small consistent token system for colors, spacing, type, radii, shadows and motion. Avoid scattering one-off hex values and magic numbers across components.

## 6. Motion and interaction

Use motion only where it helps orientation, hierarchy or feedback:
- subtle section reveal when content enters view;
- refined button hover/press feedback;
- small navigation state transitions;
- restrained video-frame entrance;
- carefully timed micro-interactions on product/service links.

Avoid animation on every element. Do not make the site feel busy. Respect `prefers-reduced-motion: reduce` and disable non-essential transitions/reveals. No scroll hijacking, autoplay carousels, cursor followers, floating blobs or long blocking intro animations. All content must remain available if animation is disabled.

## 7. Persistent WhatsApp access

Provide a persistent WhatsApp action on every route:
- Use a recognizable WhatsApp icon from a consistent icon library (for example Lucide message icon if the official brand glyph is unavailable; do not draw a misleading brand logo).
- Add an accessible label such as “Chat on WhatsApp”.
- Link to `https://wa.me/919110704747?text=...`.
- Keep the target at least 44×44 px, with sufficient contrast and spacing.
- On mobile, position it above the safe-area inset and away from browser/system controls.
- Do not obscure content, video controls, cookie controls or footer links.

Also provide clear tap-to-call access. Do not make phone numbers unclickable plain text on mobile.

## 8. Technical implementation

Use a stable, Vercel-compatible React framework with strong SEO support. Preferred stack:
- Next.js App Router.
- TypeScript.
- Tailwind CSS (or a small, well-structured CSS system if Tailwind adds no value).
- Framer Motion for restrained motion, only if needed.
- Lucide React for consistent icons.

Before scaffolding, inspect the current directory and Node/npm versions. Do not overwrite the supplied files. If the project is not initialized, create the Next.js app in this directory without deleting the supplied assets or docs. Use stable compatible package versions; do not blindly install `latest` or upgrade dependencies without checking compatibility.

No database, authentication, CMS or server API is required for this brochure website. Do not add Supabase or unnecessary backend services. The site should deploy to Vercel.

### File-count constraint
Keep the implementation intentionally small:
- Target approximately 30–45 app-authored source/config files.
- Hard cap: 50 app-authored source/config files unless there is a concrete, documented reason.
- Exclude `node_modules`, `.next`, generated lockfiles, public media and installed skill files from this count.
- Group related small components sensibly; do not create one file for every tiny wrapper or icon.
- Do not generate 100–200 files.

## 9. SEO and metadata

Implement real, route-specific SEO:
- Unique `<title>` and meta description for each route.
- Correct canonical URL only when the real production domain is supplied through `NEXT_PUBLIC_SITE_URL`; do not invent a domain.
- Open Graph and Twitter metadata.
- A suitable social preview image using the supplied logo or a designed local OG image; do not use a random stock image.
- `robots.ts` and `sitemap.ts` if the canonical base URL is configured; otherwise document the one value the owner must provide.
- Semantic HTML, one clear H1 per route, descriptive internal links, meaningful image alt text.
- LocalBusiness JSON-LD with only supported fields: business name, phone, supplied postal address components, URL if known, and the supplied social profile URLs as `sameAs`. Do not invent coordinates, opening hours, ratings, review count, price range or email.
- Natural local intent: “pump sales and service in Attapur, Hyderabad”, “water pumps”, “submersible pumps”, “pump repair” and other relevant terms only where they accurately describe content. No keyword stuffing.

## 10. Accessibility, responsiveness and performance

Accessibility:
- WCAG AA contrast for text and controls.
- Visible keyboard focus.
- Semantic landmarks and correct heading order.
- Proper labels for all fields.
- Accessible names for icon-only controls.
- Keyboard-operable mobile menu and dialogs.
- Reduced-motion support.
- Video must have controls and an accessible label; provide a concise text description/transcript summary if available from supplied narration.
- Check zoom at 200%.

Responsive:
- Design mobile first, but not mobile only.
- Test narrow phone, large phone, tablet, laptop and wide desktop widths.
- Reflow layouts intentionally; do not merely shrink desktop columns.
- No horizontal overflow.
- Touch targets at least 44×44 px.
- Ensure WhatsApp bubble and sticky actions do not cover content.
- Check long headings, phone number, navigation and footer wrapping.

Performance:
- Keep client components limited to where interaction/motion requires them.
- Optimize local images; do not alter the original video.
- Use a poster and metadata preload for the video.
- Avoid large animation libraries if CSS is sufficient.
- Avoid layout shifts; reserve media aspect ratio.
- Lazy-load below-the-fold images.
- Keep JavaScript and dependencies lean.

## 11. Verification workflow

After implementation:
1. Install dependencies and run the development server.
2. Inspect the homepage and every route in a real browser.
3. Test all nav links, video play/pause, phone links, WhatsApp links, map link and social links.
4. Test the mobile menu with keyboard and touch.
5. Check the site at narrow phone, tablet, laptop and desktop widths.
6. Check reduced-motion mode and keyboard focus.
7. Run lint, typecheck and production build.
8. Check for broken image/video paths, console errors, hydration errors and horizontal overflow.
9. Inspect SEO metadata and JSON-LD output.
10. Run the Antislop Delivery Gate and report PASS/FAIL with evidence. Do not claim a test passed unless it was actually run.

Fix all critical defects before finishing. If a browser/screenshot tool is unavailable, state that visual browser QA was not performed and provide the exact checks still outstanding.

## 12. Final handoff

When finished, report:
- Pages/routes implemented.
- Main components and design decisions.
- WhatsApp, call, Maps and social destinations wired.
- SEO items implemented and any domain-dependent items outstanding.
- Commands run and their actual results.
- Responsive/browser QA performed and widths tested.
- Antislop Delivery Gate results.
- Final app-authored file count.
- Any business facts that still need owner confirmation.

Do not finish with generic praise. Give a precise implementation report.
