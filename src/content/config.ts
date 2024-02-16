import { z, defineCollection } from "astro:content"

const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    pubDate: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    author: z.string(),
    summary: z.string(),
    category: z.string(),
    readingDuration: z.number(),
    tags: z.array(z.string()),
  }),
})

const products = defineCollection({
  type: "data",
  schema: z.object({
    id: z.number(),
    name: z.string(),
    price: z.number(),
    category: z.string(),
    quantity: z.number(),
    imageSrc: z.string(),
    description: z.string(),
  }),
})

export const collections = { posts, products }
