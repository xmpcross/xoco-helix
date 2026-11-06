import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { categories } from "@/config/categories";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      category: z.enum(categories),
      date: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      readingTime: z.number().int().positive(),
      author: z.object({
        name: z.string(),
        role: z.string(),
        bio: z.string().optional(),
      }),
      articleType: z.enum([
        "Discovery",
        "Explainer",
        "Field Report",
        "Interview",
        "Analysis",
        "Visual Investigation",
      ]),
      researchStatus: z
        .enum([
          "Peer-reviewed study",
          "Preprint",
          "Analysis",
          "Field report",
          "Interview",
          "Explainer",
        ])
        .default("Analysis"),
      audience: z.array(z.string()).default([]),
      tags: z.array(z.string()).default([]),
      image: z.object({
        src: image(),
        alt: z.string(),
        caption: z.string(),
        credit: z.string(),
        creditUrl: z.url().optional(),
        width: z.number().int().positive().default(1600),
        height: z.number().int().positive().default(1000),
      }),
      featuredState: z.enum(["lead", "featured", "standard"]).default("standard"),
      doi: z.string().optional(),
      researchLink: z.string().optional(),
      keyFindings: z.array(z.string()).default([]),
      methodology: z.string().optional(),
      corrections: z.string().optional(),
      sources: z
        .array(
          z.object({
            label: z.string(),
            url: z.string().optional(),
            note: z.string().optional(),
          }),
        )
        .default([]),
      figures: z
        .array(
          z.object({
            title: z.string(),
            caption: z.string(),
          }),
        )
        .default([]),
      trending: z.boolean().default(false),
      draft: z.boolean().default(false),
    }),
});

export const collections = { posts };
