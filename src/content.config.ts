import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const insights = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/insights' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    // Matches a service `id` in src/data/site.ts, used for the tag and the related-service link.
    service: z.enum(['marketing', 'ai-consulting', 'ai-implementation', 'software', 'how-we-work']),
    draft: z.boolean().default(false),
  }),
});

export const collections = { insights };
