# Nimblebase site

Astro static site, 19 routes. Live at https://nimblebasehq.com.

    npm install
    npm run dev       # http://localhost:4321
    npm run build     # output in dist/

## Hosting

GitHub Pages from the public repo `shyomaster222/nimblebase-site`. Every push to `main` runs `.github/workflows/deploy.yml`, which builds with Astro and deploys. `public/CNAME` holds the custom domain. DNS is at iwantmyname: four GitHub Pages A records on `@`, `www` CNAME to `shyomaster222.github.io`, Zoho MX records and SPF for mail.

## Pages

- `/` home, with the four-Friday planner
- `/services/` overview and `/services/<slug>/` for digital-marketing, ai-consulting, ai-implementation, software-development
- `/how-we-work/`, `/pricing/`, `/about/`, `/faq/`
- `/insights/` and `/insights/<slug>/` (markdown in `src/content/insights/`, schema in `src/content.config.ts`), feed at `/rss.xml`
- `/contact/` and `/contact/thanks/` (the form redirects here when `formEndpoint` is set)
- `/privacy/`, `/terms/` (templates, `noindex` and out of the sitemap until `legalReady` is true in `src/data/site.ts`; also remove them from `hidden` in `astro.config.mjs`)
- `404`, `sitemap-index.xml`, `robots.txt`, `og.png`

Structured data: Organization and WebSite on home, Service and FAQPage on service pages, FAQPage on `/faq/`, Article on insights, BreadcrumbList wherever breadcrumbs show.

To add an article: drop a markdown file in `src/content/insights/` with `title`, `description`, `date` and `service` (a service `id`, or `how-we-work`). It appears in the index, footer, related service page and RSS.

## Design direction

Light, quick, green. Mint ground `#dff5e6`, forest ink `#0e2f22`, leaf green `#14804a` for actions, lime `#c6f26b` for Fridays.
Type is Funnel Display and Funnel Sans (self-hosted through Fontsource).
The signature element is the hero board (`src/components/Planner.astro`): four Friday columns, one row per service, rows switch on and off without the layout moving. On phones each service is a toggle with its four Fridays listed underneath.
Design canvas with the approved direction: https://claude.ai/artifact/4DDe9kDfgLUErTu9RnGZPN
Tokens live at the top of `src/styles/global.css`.

## Content

All service copy, the week rhythm, engagement options and FAQs live in `src/data/site.ts`.

## Before launch

- Positioning is a proposal. Confirm each operating promise is one the team will keep: one-week cycles, something live every Friday, reply within one working day, 30 days notice, fixed-price sprints and projects, no mark-up on ad spend or tools, no reselling or referral fees, a cap on client numbers.
- Fill every `[bracketed]` fact. They render with a dashed outline so they can't ship unnoticed. Current list: sprint, project and monthly prices; monthly day allocation; minimum monthly ad spend; invoicing terms; preferred stack; location and working hours; founder and team names, roles, bios, photos; and on the legal pages the legal entity, registered address, jurisdiction, hosting, form and email providers, retention period, response period, liability wording, last-updated date. `grep -rn "\[" src/data src/pages` finds them.
- Legal pages are filled with the company facts (Nimblebase LLC, Sheridan WY address, Wyoming law) and only need the phone number; flip `legalReady` to true and remove them from `hidden` in `astro.config.mjs` once a lawyer has looked them over.
- Article dates are placeholders from the build week. Set real publish dates, and name authors if you want bylines beyond "The Nimblebase team".
- Finish email: sign up for Zoho Mail (free plan) with nimblebasehq.com, add Zoho's verification TXT and DKIM records at iwantmyname, create hello@nimblebasehq.com. If wanted, set a form endpoint in `src/data/site.ts`; with no endpoint the contact form opens the visitor's email app.
- Add real proof (results, client names, testimonials) in the marked proof slot on the home page. None is invented here, and there is no case-study section by choice.
