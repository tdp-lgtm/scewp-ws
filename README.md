# Stockholm Centre for the Ethics of War and Peace

The website for the **Stockholm Centre for the Ethics of War and Peace (SCEWP)**,
an interdisciplinary research centre in the Department of Philosophy at Stockholm
University. Live at **[stockholmcentre.org](https://stockholmcentre.org)**.

## Stack

| Layer        | Technology                                        |
| ------------ | ------------------------------------------------- |
| Framework    | [Astro](https://astro.build) (static output)      |
| Styling      | [Tailwind CSS](https://tailwindcss.com) v3        |
| Content      | Astro Content Collections (Markdown + Zod schemas)|
| CMS          | [Decap CMS](https://decapcms.org) (Git Gateway)   |
| Hosting      | [Netlify](https://netlify.com)                    |
| Markdown/MDX | `@astrojs/mdx`                                     |
| SEO          | `@astrojs/sitemap`, custom `SEO.astro`            |

> **Note on versions:** This project uses **Astro 5** rather than Astro 6,
> because the `@astrojs/tailwind` integration (and the `tailwind.config.mjs`
> design-system workflow this project relies on) does not support Astro 6.
> Everything else follows the original specification.

## Local development

```sh
# 1. Install dependencies
npm install

# 2. Start the dev server (http://localhost:4321)
npm run dev

# 3. Build for production (outputs to ./dist)
npm run build

# 4. Preview the production build locally
npm run preview
```

Node 20+ is recommended (see `.nvmrc`).

## Folder structure

```
.
├── public/
│   ├── admin/              # Decap CMS — index.html + config.yml
│   ├── uploads/            # Editor-uploaded images & PDFs (media library)
│   ├── robots.txt
│   ├── og-default.svg      # Default social-share image (replace with PNG ideally)
│   └── favicon.svg
├── src/
│   ├── components/         # Reusable Astro components (cards, layout, utils)
│   ├── content/            # Markdown content + collection schemas (config.ts)
│   │   ├── people/
│   │   ├── publications/
│   │   ├── events/
│   │   ├── symposia/
│   │   ├── news/
│   │   └── projects/
│   ├── layouts/            # BaseLayout.astro
│   ├── lib/                # Shared TypeScript helpers (utils.ts)
│   ├── pages/              # File-based routes
│   └── styles/             # global.css (Tailwind + design system)
├── astro.config.mjs
├── tailwind.config.mjs
├── netlify.toml
└── .nvmrc
```

## Content collections

All content lives in `src/content/` as Markdown files with YAML frontmatter.
Schemas are defined and validated in `src/content/config.ts`, and mirror the
Decap CMS config in `public/admin/config.yml` exactly (identical field names).

| Collection     | Folder                       | Key fields                                                       |
| -------------- | ---------------------------- | --------------------------------------------------------------- |
| `people`       | `src/content/people`         | name, role, status, bio, research_interests, display_order      |
| `publications` | `src/content/publications`   | title, authors[], year, publication_type, tags[], featured      |
| `events`       | `src/content/events`         | title, event_type, start_date, speakers[], online, recording_url|
| `symposia`     | `src/content/symposia`       | title, journal, year, contributors[], display_order             |
| `news`         | `src/content/news`           | title, date, category, summary, external_url, featured          |
| `projects`     | `src/content/projects`       | title, status, start_year, lead_researcher, funder              |

The Markdown **body** of each file is the long-form content (rendered via
`<Content />` on detail pages). In Decap this maps to the `body` markdown widget.

## Deployment (Netlify)

1. Push this repository to GitHub.
2. In Netlify, **Add new site → Import an existing project** and select the repo.
3. Netlify reads `netlify.toml` automatically:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 20
4. Deploy. Your site will build and go live on a `*.netlify.app` URL; point the
   `stockholmcentre.org` domain at it under **Domain settings**.

## Enabling the CMS (Netlify Identity + Git Gateway)

The CMS at `/admin` uses Netlify **Identity** for login and **Git Gateway** to
commit content changes back to the repository. To activate:

1. **Enable Identity**
   Netlify dashboard → **Site configuration → Identity → Enable Identity**.
2. **Set registration to invite-only** (recommended)
   Identity → **Registration → Invite only**. This stops the public from
   signing up as editors.
3. **Enable Git Gateway**
   Identity → **Services → Git Gateway → Enable Git Gateway**. This lets the CMS
   read and write content via your connected Git provider.
4. **Invite editors**
   Identity → **Invite users**. Each editor receives an email invitation and
   sets a password.
5. **Add the Identity widget redirect (already handled)**
   Logins are handled by the Identity widget loaded inside `/admin`. After
   accepting an invite, editors land on the site; clicking the confirmation link
   opens the login. If a confirmation link opens the homepage rather than the
   login modal, navigate to `/admin/` and log in there.

Once enabled, editors visit **`https://stockholmcentre.org/admin/`**, log in,
and manage content. Saved changes are committed to the `main` branch; because
**editorial workflow** is enabled, changes flow through Draft → In Review →
Published before going live.

## Notes & things to revisit

- Replace `public/og-default.svg` with a 1200×630 **PNG** for best social-share
  rendering (some platforms don't render SVG OG images).
- The Stockholm University and Wallenberg Academy Fellows logos in the footer
  are placeholders — drop real assets into `public/` and update `SiteFooter.astro`.
- The contact form uses **Netlify Forms** (`data-netlify="true"`); submissions
  appear in the Netlify dashboard under **Forms** once the site is deployed.
