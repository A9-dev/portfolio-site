// 1. Import utilities from `astro:content`
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

// 2. Import loader(s)
import { glob } from "astro/loaders";

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

const projects = defineCollection({
  loader: glob({
    pattern: "**/*.(md|mdx)",
    base: "./src/data/projects",
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      slug: z.string(),
      summary: z.string(),
      publishedAt: z.coerce.date(),
      published: z.boolean().default(true),
      tags: z.array(z.string()).default([]),
      coverImage: image().optional(),
      seo: z
        .object({
          title: z.string().optional(),
          description: z.string().optional(),
        })
        .optional(),
    }),
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { progressionLog, projects };
