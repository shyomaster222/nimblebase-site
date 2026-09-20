import { getCollection, type CollectionEntry } from 'astro:content';
import { services } from './site';

export type Post = CollectionEntry<'insights'>;

export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('insights', (e) => !e.data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export const formatDate = (d: Date) =>
  new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }).format(d);

export const readingTime = (post: Post) => `${Math.max(1, Math.round((post.body ?? '').split(/\s+/).length / 220))} min read`;

// The tag shown on a post, and the page it points to.
export function topic(post: Post) {
  const service = services.find((s) => s.id === post.data.service);
  return service
    ? { label: service.name, href: `/services/${service.slug}/` }
    : { label: 'How we work', href: '/how-we-work/' };
}
