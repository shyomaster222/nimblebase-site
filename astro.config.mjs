import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Pages kept out of the sitemap: the thanks page, and the legal templates until they are filled and reviewed
// (flip `legalReady` in src/data/site.ts and remove them from this list at the same time).
const hidden = ['/contact/thanks/', '/privacy/', '/terms/'];

// Set `site` to the production URL before deploying (used for canonical URLs, the sitemap and RSS).
export default defineConfig({
  site: 'https://nimblebasehq.com',
  integrations: [sitemap({ filter: (page) => !hidden.some((path) => page.endsWith(path)) })],
});
