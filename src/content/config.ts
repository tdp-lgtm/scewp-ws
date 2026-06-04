import { defineCollection, z } from "astro:content";

/**
 * Content collections for the Stockholm Centre for the Ethics of War and Peace.
 *
 * Field names here are kept IDENTICAL to the Decap CMS config in
 * public/admin/config.yml so editors and the build share one source of truth.
 */

const people = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    role: z.string(),
    status: z.enum(["current", "affiliate", "alumni"]),
    photo: z.string().optional(),
    bio: z.string(),
    research_interests: z.array(z.string()).optional(),
    website: z.string().url().optional(),
    email: z.string().optional(),
    publications_link: z.string().url().optional(),
    display_order: z.number().default(99),
  }),
});

const publications = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    year: z.number(),
    publication_type: z.enum([
      "Journal Article",
      "Book",
      "Book Chapter",
      "Working Paper",
      "Report",
      "Edited Volume",
    ]),
    journal_or_publisher: z.string().optional(),
    volume: z.string().optional(),
    pages: z.string().optional(),
    doi: z.string().optional(),
    open_access_url: z.string().url().optional(),
    pdf_file: z.string().optional(),
    abstract: z.string().optional(),
    tags: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
  }),
});

const events = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    event_type: z.enum([
      "Talk",
      "Workshop",
      "Conference",
      "Public Lecture",
      "Reading Group",
      "Conversations on War",
      "Other",
    ]),
    start_date: z.coerce.date(),
    end_date: z.coerce.date().optional(),
    time: z.string().optional(),
    location: z.string().optional(),
    online: z.boolean().default(false),
    online_link: z.string().url().optional(),
    description: z.string().optional(),
    speakers: z.array(z.string()).optional(),
    registration_url: z.string().optional(),
    image: z.string().optional(),
    status: z.enum(["upcoming", "past"]).optional(),
    recording_url: z.string().optional(),
  }),
});

const symposia = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    journal: z.string(),
    year: z.number(),
    subject_description: z.string(),
    book_title: z.string().optional(),
    book_author: z.string().optional(),
    contributors: z.array(z.string()).optional(),
    journal_url: z.string().optional(),
    cover_image: z.string().optional(),
    display_order: z.number().default(99),
  }),
});

const news = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.enum(["News", "Announcement", "Press", "Blog", "Other"]),
    summary: z.string(),
    image: z.string().optional(),
    external_url: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    status: z.enum(["current", "completed"]),
    start_year: z.number(),
    end_year: z.number().optional(),
    lead_researcher: z.string().optional(),
    collaborators: z.array(z.string()).optional(),
    funder: z.string().optional(),
    website_url: z.string().optional(),
    image: z.string().optional(),
  }),
});

export const collections = {
  people,
  publications,
  events,
  symposia,
  news,
  projects,
};
