// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";

// 2. Import loader(s)
import { glob, file } from "astro/loaders";

// 3. Define your collection(s)
const progressionLog = defineCollection({
  loader: glob({
    pattern: "**/*.(md|mdx)",
    base: "./src/data/progression-log",
  }),
  schema: z.object({
    title: z.string().optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).optional(),
    worklog: z
      .array(
        z.object({
          type: z.string(),
          area: z.array(z.string()),
          summary: z.string(),
        }),
      )
      .optional(),
  }),
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { progressionLog };
