import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Pages kept out of the sitemap.
const hidden = ['/contact/thanks/'];

// Set `site` to the production URL before deploying (used for canonical URLs, the sitemap and RSS).
export default defineConfig({
  site: 'https://nimblebasehq.com',
  integrations: [sitemap({ filter: (page) => !hidden.some((path) => page.endsWith(path)) })],
});
