// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `type` and `schema` for each collection
const postsCollection = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      pubDate: z.string(),
      image: z.object({
        url: z.string(),
        alt: z.string()
      }),
      author: z.string(),
      summary: z.string(),
      category: z.string(),
      readingDuration: z.number(),
      tags: z.array(z.string())
    })
});
// Export a single `collections` object to register your collection(s)
export const collections = {
  posts: postsCollection,
};