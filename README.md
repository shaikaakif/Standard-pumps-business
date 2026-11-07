# Standard Pumps & Borewells website

Production-ready Next.js website for Standard Pumps & Borewells, Attapur Ring Road, Hyderabad. Four routes, the supplied portrait business reel, direct WhatsApp and telephone actions, and factual product/service content.

## Requirements

- Node.js 20.9 or newer (built and tested on Node 24)
- npm

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Scripts

```bash
npm run lint       # ESLint
npm run typecheck  # TypeScript, no emit
npm run build      # production build
npm run start      # serve the production build
```

## Environment

One optional value controls canonical URLs, the sitemap, `robots.txt`'s sitemap line and the `url` field in LocalBusiness structured data:

```bash
NEXT_PUBLIC_SITE_URL=https://your-production-domain.example
```

Copy `.env.example` to `.env.local`. Use the full origin without a trailing slash. When it is unset, the site still builds and runs; canonical and sitemap URLs are intentionally omitted rather than pointing at a placeholder domain.

## Deploy to Vercel

1. Push this directory to a Git repository.
2. Import the repository at Vercel. The framework preset is detected as Next.js; no custom build settings are required.
3. Add `NEXT_PUBLIC_SITE_URL` in Project → Settings → Environment Variables for Production (and Preview if wanted). Set it to the production origin once the domain is known.
4. Deploy.

Or from the project directory:

```bash
npm install -g vercel
vercel
vercel --prod
```

## Content and business facts

- Phone and WhatsApp: +91 9110704747.
- Address: Attapur Ring Road, Hyderabad, Telangana, India.
- The Google Maps action is a search link for the business name and address, not a confirmed place pin.
- No email address, opening hours, prices, stock levels, ratings, certifications, response times or service-radius claims are published. These must be confirmed by the owner before adding.
- Product classes and brand names shown as "profile-listed" come from the supplied business profile and should be confirmed against current stock.
- The supplied reel uses on-screen Hinglish text. No separate caption file or narration transcript was supplied; the page provides a text summary.
- The contact form does not submit to a server. It validates locally and opens a prefilled WhatsApp message.

## Assets

Supplied and preserved unchanged:

- `public/images/brand/standard-pumps-logo.png`
- `public/images/video/standard-pumps-poster.jpg`
- `public/videos/standard-pumps-reel.mp4`

Generated from the supplied logo and project palette:

- `public/images/brand/standard-pumps-og.png` (1200×630 social image)
- `app/icon.png` (512×512 favicon source)
- `app/apple-icon.png` (180×180 touch icon)
