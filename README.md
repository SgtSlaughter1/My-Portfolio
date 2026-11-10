# Abdulsalam Habeeb · Portfolio

The personal site of Abdulsalam Habeeb, a fullstack developer building dependable web platforms and AI agents.

**Live:** [habeeb-abdulsalam.vercel.app](https://habeeb-abdulsalam.vercel.app)

The site is built around case studies. Each project has its own page that explains the problem, who it's for, how it works and the decisions behind it.

## Features

- **Case-study pages.** Every project lives at `/project/:slug`, with a long layout for major projects and a compact one for smaller builds.
- **Pre-rendered pages.** Every page is rendered to static HTML at build time with its own title, description, canonical URL and JSON-LD, so search engines and link previews see real content.
- **Light and dark themes.** The site follows the visitor's system setting, and a header toggle saves their choice. The theme is applied before first paint, so there's no flash.
- **Restrained motion.** GSAP plays each animation once: the headline rises line by line, screenshots wipe in on scroll, and the experience timeline draws itself. Visitors with reduced motion get a static page.
- **Stack with real logos.** Brand marks come from Simple Icons and LobeHub Icons, with a scrolling logo band in the hero.
- **Accessible by default.** It has a skip link, visible focus styles, keyboard-friendly navigation, and text that passes WCAG AA contrast in both themes.

## Tech stack

| Area | Tools |
| --- | --- |
| UI | React 19, plain CSS with design tokens |
| Build | Vite 7, custom pre-render script |
| Routing | Small custom router on the History API (`src/lib/router.js`) |
| SEO | react-helmet-async, JSON-LD, generated sitemap |
| Motion | GSAP 3.13 (ScrollTrigger, SplitText) |
| Icons | simple-icons, LobeHub Icons (MIT) |
| Fonts | Geist and Geist Mono |

## Getting started

You need Node.js 20 or later.

```bash
npm install
```

```bash
npm run dev
```

| Script | What it does |
| --- | --- |
| `npm run dev` | Starts the Vite dev server |
| `npm run build` | Generates the sitemap, builds the app and pre-renders every route into `dist/` |
| `npm run preview` | Serves the production build locally |
| `npm run lint` | Runs ESLint |

## Project structure

```text
src/
├── App.jsx                 # Routes, legacy-link redirects, site-wide SEO
├── main.jsx                # Client entry (hydrates the pre-rendered HTML)
├── styles.css              # All styles; theme tokens at the top
├── pages/
│   ├── HomePage.jsx        # Hero, work, AI systems, stack, experience, about
│   └── ProjectPage.jsx     # Full and short case-study layouts
├── components/
│   ├── SiteHeader.jsx      # Sticky header and mobile menu
│   ├── ThemeToggle.jsx     # Light/dark switch
│   ├── ContactFooter.jsx
│   ├── StackIcon.jsx       # Brand logo for a stack item
│   ├── Link.jsx            # Client-side navigation link
│   └── Seo.jsx
├── data/
│   ├── profile.js          # Bio, stats, experience, certifications, stack
│   ├── projects.js         # Every case study's content
│   ├── stackIcons.js       # Stack name → logo
│   └── aiToolIcons.js      # Logos not in Simple Icons
├── lib/
│   ├── router.js
│   └── motion.js           # GSAP animations
└── prerender/              # Routes and server render used at build time
scripts/
├── generate-sitemap.js
└── prerender.mjs
public/
├── assets/projects/        # Screenshots and portrait (.webp)
├── assets/certificates/
├── sitemap.xml
└── llms.txt
```

## Editing content

All copy lives in `src/data/`, so most updates don't touch any components.

**Add a project**

1. Add a screenshot to `public/assets/projects/` (WebP, 1600×1000 works well).
2. Add an entry to `projects` in `src/data/projects.js`:
   - `group` is `featured`, `ai` or `client`, and decides which home section the project appears in.
   - `depth` is `full` for the long case study or `short` for the compact one.
   - `card` holds the text for the home page card, and `page` holds the case-study content. Copy an existing entry of the same depth as a starting point.
3. Add the route to `src/prerender/staticRoutes.json` so it's pre-rendered and added to the sitemap.

**Other updates**

- **Experience, certifications, stats and stack:** edit `src/data/profile.js`.
- **New stack logo:** map the name to an icon in `src/data/stackIcons.js`. Items without a logo show as text.
- **Colours:** change the tokens at the top of `src/styles.css`. The dark theme overrides them under `:root[data-theme="dark"]`.

## Contact

- Email: [habeebabdulsalam86@gmail.com](mailto:habeebabdulsalam86@gmail.com)
- LinkedIn: [Abdulsalam Habeeb](https://www.linkedin.com/in/habeeb-abdulsalam/)
- GitHub: [SgtSlaughter1](https://github.com/SgtSlaughter1)

The content, screenshots and certificates in this repository belong to Abdulsalam Habeeb and aren't licensed for reuse.
