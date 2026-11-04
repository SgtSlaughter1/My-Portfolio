// Case-study content. `depth: "full"` renders the long layout; "short" the compact one.
// Order here is the reading order: each page links to the next.
export const projects = [
  {
    slug: "edutams-essential-v2",
    title: "Edutams Essential V2",
    group: "featured",
    depth: "full",
    role: "Fullstack Developer",
    year: "2025–now",
    live: { url: "https://diper.ogunstate.gov.ng/", label: "diper.ogunstate.gov.ng" },
    image: "/assets/projects/v2.webp",
    imageAlt: "Edutams Essential V2 school dashboard",
    card: {
      eyebrow: "Edutams · 2025–now",
      summary:
        "The school administration system behind Ogun State’s DiPER, used by ministry officials, schools, teachers and families across the state, from admission to graduation.",
      stack: "Laravel · Vue · PDF reports",
    },
    page: {
      eyebrow: "Edutams · Ogun State DiPER",
      headline: "Running a state’s schools on one platform",
      lede:
        "The school administration system behind DiPER. Ministry officials, school heads, teachers, students and guardians all use it, from admission to graduation.",
      facts: [
        { label: "Role", value: "Fullstack Developer" },
        { label: "Company", value: "Edutams" },
        { label: "Timeline", value: "June 2025 — present" },
      ],
      sections: [
        {
          heading: "The problem",
          paragraphs: [
            "A state school system runs on paper and spreadsheets until it doesn’t. Scores become report cards, report cards decide promotion, and every school sets its own grading rules. It all has to stay correct across the state at once, and it peaks at the end of every term, when everyone uploads at the same time.",
            "And the platform keeps growing, with new features added on the same foundation every term.",
          ],
        },
        {
          heading: "Who it serves",
          list: [
            { label: "Schools", text: "Student records, assessment and report cards, following each school’s own rules." },
            { label: "Government", text: "State-wide views so officials can see how schools are doing." },
            { label: "Families", text: "Fees, receipts and results that parents can access online." },
          ],
        },
      ],
      builtIntro:
        "Built with Laravel and Vue. Heavy work such as bulk uploads and report generation happens in the background, so the platform stays responsive at the end of term when every school is busy.",
      builtCards: [
        { tag: "App", text: "Laravel · Vue · separate access for ministry, school and family users" },
        { tag: "Scale", text: "Background processing so busy weeks don’t slow anyone down" },
        { tag: "Documents", text: "Report cards, certificates and receipts generated as PDFs" },
      ],
      decisionsHeading: "What working at this scale taught me",
      decisionsText:
        "When every school in a state uploads results in the same week, a slow page becomes everyone’s problem. I learned to move heavy work into the background, prepare reports before people ask for them, and think about real-world volumes before a feature ships.",
    },
  },
  {
    slug: "acedrill",
    title: "AceDrill",
    group: "featured",
    depth: "full",
    role: "Fullstack Developer",
    year: "2026",
    live: { url: "https://ailearn.gt.tc/", label: "ailearn.gt.tc" },
    image: "/assets/projects/acedrill.webp",
    imageAlt: "AceDrill homepage with an adaptive maths question",
    card: {
      eyebrow: "Fullstack · 2026",
      summary:
        "WAEC and JAMB revision that keeps working when the internet doesn’t. Quizzes are graded on the device without sending it the answers, offline progress syncs safely when the connection returns, and an AI tutor falls back to built-in explanations with no signal.",
      stack: "Laravel · React · IndexedDB · PWA · Groq/Gemini · 288 tests",
    },
    page: {
      eyebrow: "Independent product · EdTech + AI",
      headline: "Exam practice that works when the internet doesn’t",
      lede:
        "AceDrill helps Nigerian students prepare for WAEC, JAMB and NECO on any phone, and keeps working with no data. Teachers get class analytics and timed CBT exams; schools get their own walled-off space.",
      facts: [
        { label: "Role", value: "Fullstack Developer" },
        { label: "For", value: "Students, teachers and school admins" },
        { label: "Timeline", value: "August — October 2026" },
      ],
      sections: [
        {
          heading: "The problem",
          paragraphs: [
            "Most students revise on a phone, on data they pay for by the megabyte. Online-only study apps stop working exactly when a student has a free hour and no signal. And an offline app has a cheating problem: if the answers are on the device, anyone can read them.",
            "So AceDrill had to do three things at once: work fully offline, grade honestly without revealing answers, and bring everything back to the server without losing or doubling progress.",
          ],
        },
        {
          heading: "What it does",
          list: [
            { label: "For students", text: "Topic quizzes, WAEC/JAMB/NECO past questions, a daily spaced-repetition review, an AI tutor, plus XP, streaks, badges and short “Recess” games." },
            { label: "For teachers", text: "Class analytics, a question bank with AI-drafted questions, and timed school CBT exams they can watch live." },
            { label: "For schools", text: "Multi-tenant admin where each school only ever sees its own data." },
          ],
        },
      ],
      decisionsHeading: "Four decisions that made it work",
      decisions: [
        { tag: "01 · Honest offline grading", title: "Grade on the phone without sending the answer", text: "Each question carries a SHA-256 hash of its correct option, not the option itself. The phone grades by checking each choice against the hash. The explanation is encrypted with a key derived from the right answer, so it only unlocks once you’ve answered. The server re-grades every paper with the same code." },
        { tag: "02 · Sync that can’t double up", title: "Retry as often as you like", text: "Offline work queues in IndexedDB and syncs in batches, each with an idempotency key the server enforces. Mastery updates are single atomic SQL statements, and reviews are dated when they happened, not when the phone found signal." },
        { tag: "03 · Learning science", title: "Questions that match the student", text: "Quizzes adapt with Elo ratings, so difficulty follows the learner. Reviews use SM-2 spaced repetition, capped at a year so intervals never overflow MySQL’s 2038 timestamp limit." },
        { tag: "04 · AI that degrades gracefully", title: "A tutor with three fallbacks", text: "The tutor tries Groq first, then Gemini, then a built-in rule-based tutor that works offline. Student input is sanitised before it reaches any model, and AI-reported XP is capped per day." },
      ],
      builtWith:
        "Laravel API with MySQL · React 19 + TypeScript PWA with Workbox and Dexie · KaTeX for maths · Groq and Gemini · past questions imported from the ALOC API · 288 automated tests.",
      closing: {
        heading: "Proof",
        text: "288 automated tests across feature, unit and a “sync-storm” load test that hammers the sync endpoint to prove retries never duplicate data.",
      },
    },
  },
  {
    slug: "hama-vet",
    title: "HAMA Vet",
    group: "featured",
    depth: "full",
    role: "Fullstack Developer",
    year: "2026",
    live: null,
    image: "/assets/projects/hama.webp",
    imageAlt: "HAMA Vet storefront",
    card: {
      eyebrow: "Fullstack · 2026",
      summary:
        "A veterinary clinic’s whole business in one app: pet records, appointment booking, and a store with checkout and receipts. Payments run through a locked database transaction, so an order can’t be paid twice or for the wrong amount.",
      stack: "Laravel 12 · Inertia · Vue 3 · Paystack · Pest",
    },
    page: {
      eyebrow: "Veterinary clinic · Booking + commerce",
      headline: "A vet clinic’s whole business, with payments that can’t go wrong",
      lede:
        "Pet owners register their animals, book appointments and shop for supplies in one place. Staff run appointments, clients, products and orders from one admin.",
      facts: [
        { label: "Role", value: "Fullstack Developer" },
        { label: "For", value: "Pet owners and clinic staff" },
        { label: "Year", value: "2026" },
      ],
      sections: [
        {
          heading: "The problem",
          paragraphs: [
            "Bookings, pet records and product sales lived in different places, and taking payment online meant trusting that a customer couldn’t pay twice, pay too little, or be charged for an order that was already paid.",
          ],
        },
        {
          heading: "What it does",
          list: [
            { label: "Client portal", text: "Sign-up with email verification, pet profiles, appointment booking, order history and receipts." },
            { label: "Store", text: "Services catalogue, products with stock, cart, checkout and discounts." },
            { label: "Admin", text: "Dashboard plus appointments, clients, pets, products, orders and services, behind rate-limited admin routes." },
            { label: "Discoverability", text: "Generated sitemap and SEO checks covered by tests." },
          ],
        },
      ],
      steps: {
        tag: "The decision worth explaining",
        title: "One payment path, locked and checked, whether Paystack calls back or the customer returns",
        items: [
          { title: "1 · Verify", text: "The webhook checks Paystack’s HMAC-SHA512 signature before reading anything." },
          { title: "2 · Lock", text: "The order row is locked inside a database transaction, so two callbacks can’t race." },
          { title: "3 · Check", text: "Amounts that differ by more than 1 kobo are rejected; already-paid orders are skipped." },
          { title: "4 · Fulfil once", text: "One checkout service marks it paid, reduces stock, records payment and sends receipts to customer and admin." },
        ],
      },
      builtWith:
        "Laravel 12 with Inertia 2 and Vue 3 · Breeze auth with email verification · Sanctum · international phone validation · Paystack · Pest feature tests for SEO, receipts, validation and maintenance routes.",
    },
  },
  {
    slug: "remo-stars-fc-fan-portal",
    title: "Remo Stars FC",
    group: "featured",
    depth: "full",
    role: "Fullstack Developer",
    year: "2026",
    live: { url: "https://remostars.vercel.app", label: "remostars.vercel.app" },
    image: "/assets/projects/remo.webp",
    imageAlt: "Remo Stars FC fan portal home",
    card: {
      eyebrow: "Fullstack · Concept · 2026",
      summary:
        "A fan portal concept for a Nigerian Premier League club, with a 3D stadium scene, a lineup builder and a merch store. Live fixtures and tables are cached and fall back to seed data, so the site never shows an empty match day.",
      stack: "Next.js 16 · Three.js · API-Football · Zustand",
    },
    page: {
      eyebrow: "Sport · Fan experience + store",
      headline: "A fan portal that never shows an empty match day",
      lede:
        "One home for Remo Stars supporters: fixtures and results, the league table, men’s and ladies’ squads, news, club history, a lineup builder and a merch store, opened by a 3D stadium scene.",
      facts: [
        { label: "Role", value: "Fullstack Developer" },
        { label: "Type", value: "Concept build" },
        { label: "Timeline", value: "May 2026, about two weeks" },
      ],
      sections: [
        {
          heading: "The problem",
          paragraphs: [
            "Fans follow the club across scattered social pages and score apps. A club site has to feel special at the front door, and it can’t break on match day just because a third-party football API is slow or out of quota.",
          ],
        },
        {
          heading: "What it does",
          list: [
            { text: "11 pages: home, fixtures and results, table, two squads with player pages, news with sharing, about, timeline, contact and shop." },
            { text: "A lineup builder: pick 4-4-2, 4-3-3, 3-5-2 or 4-2-3-1 and the starting XI rearranges." },
            { text: "A merch store with a cart drawer and Paystack checkout." },
          ],
        },
      ],
      decisions: [
        { tag: "Live data, with a net", title: "Cache, then fall back", text: "The API-Football client caches the team lookup for 24 hours and fixtures and tables for an hour. If the live call returns nothing, routes serve seed data and say so (“live” or “seed”), so the page is never empty." },
        { tag: "3D, kept light", title: "A stadium in the browser", text: "React Three Fiber scene with animated meshes, a point-cloud particle sphere built from one typed array, and environment lighting instead of many lights." },
        { tag: "State that survives", title: "A cart that remembers", text: "The Zustand cart persists to local storage, but only the items, not UI state like whether the drawer was open." },
      ],
      builtWith:
        "Next.js 16 and React 19 · Three.js via React Three Fiber and drei · GSAP and Framer Motion · Zustand · Tailwind v4 · API-Football · Paystack.",
    },
  },
  {
    slug: "ngo-assistant",
    title: "NGO Assistant",
    group: "ai",
    depth: "full",
    role: "Fullstack Developer",
    year: "2026",
    live: null,
    card: {
      tag: "Function calling",
      summary:
        "Donate goods or ask for help just by chatting. Gemini calls 10 approved tools to create the records. The AI never sees your user ID, and if every model is down, a built-in step-by-step flow takes over without creating duplicates.",
      stack: "Laravel · React · Gemini tools · model fallback",
    },
    page: {
      eyebrow: "AI case study · Function calling · Charity",
      headline: "Donating by conversation, safely",
      lede:
        "People donate goods or ask an NGO for help just by chatting. The assistant fills in the forms for them, creating and tracking real records, without ever being trusted with who the user is.",
      facts: [
        { label: "Role", value: "Fullstack Developer" },
        { label: "Model", value: "Gemini, native function calling" },
        { label: "Timeline", value: "October 2026" },
      ],
      flow: {
        title: "How one message becomes a donation",
        steps: [
          { title: "User", text: "“I have two bags of children’s clothes to give.”" },
          { title: "Laravel API", text: "Adds the last 50 messages; keeps the user ID to itself." },
          { title: "Gemini", text: "Chooses from 10 approved tools, e.g. create_donation.", accent: true },
          { title: "Validated tool", text: "Arguments checked; owner taken from the session." },
          { title: "MySQL record", text: "Donation saved; the reply confirms it." },
        ],
      },
      sections: [
        {
          heading: "The problem",
          paragraphs: [
            "Forms put people off giving or asking for help. A chat is easier, but an AI that writes to a database is dangerous if it can be talked into acting for someone else, if it loops, or if it stops answering halfway through a donation.",
          ],
        },
      ],
      decisionsHeading: "How it stays safe",
      decisions: [
        { tag: "Security boundary", title: "The AI never knows who you are", text: "The backend takes the user from the login session, not from the model. Every tool argument is treated as untrusted and validated, and repositories check ownership before any read or write." },
        { tag: "Bounded loop", title: "Many tools, never forever", text: "Gemini can call several tools in one turn and gets all results back together. The loop stops after 8 rounds." },
        { tag: "Failover", title: "If the model goes down", text: "On errors, rate limits or timeouts it tries the next model, inside one shared 25-second budget. If none answer, a built-in step-by-step flow finishes the job, and won’t create the same donation twice if a tool already ran." },
      ],
      builtWith:
        "Laravel (PHP 8.3) and MySQL with thin controllers, services and repositories · React + TypeScript + Vite front end · Gemini function calling written directly against the API, no framework · six docs covering AI, API, architecture, auth, database and development.",
    },
  },
  {
    slug: "pamsy-assist",
    title: "Pamsy Assist",
    group: "ai",
    depth: "full",
    role: "Backend Developer",
    year: "2026",
    live: null,
    card: {
      tag: "RAG + agent",
      summary:
        "A support agent for a healthcare platform. It answers from the help docs, and it can also check appointments, pharmacy stock and wallet balances itself. It adapts to patients, providers, clinics and pharmacies, with medical and privacy guardrails.",
      stack: "FastAPI · LangChain · Chroma · Gemini",
    },
    page: {
      eyebrow: "AI case study · RAG + tool-calling agent · Healthcare",
      headline: "A support agent that can actually check your appointment",
      lede:
        "Pamsy Assist answers questions for a healthcare platform’s patients, providers, clinic admins and pharmacy merchants. It knows the help docs, and it can look things up in the live system instead of just pointing people to a page.",
      facts: [
        { label: "Role", value: "Backend Developer" },
        { label: "Models", value: "Gemini chat + embeddings" },
        { label: "Timeline", value: "July — August 2026" },
      ],
      flow: {
        title: "One agent, two kinds of answer",
        steps: [
          { title: "Question + role", text: "“Is my lab order ready?” from a patient" },
          { title: "LangChain agent", text: "Gemini decides: search the docs, call a tool, or both.", accent: true },
          { title: "Knowledge search", text: "Help docs → header-aware chunks → Gemini embeddings → Chroma" },
          { title: "6 live tools", text: "Appointments, reschedule, pharmacy stock, wallet, lab orders, tickets" },
        ],
      },
      sections: [
        {
          heading: "The problem",
          paragraphs: [
            "Healthcare support questions are both “how do I…” and “what’s happening with mine?”. A plain FAQ bot can’t answer the second kind, and an AI in healthcare must never diagnose, prescribe or leak personal data.",
          ],
        },
      ],
      decisionsHeading: "Decisions worth explaining",
      decisions: [
        { tag: "Guardrails", title: "Helpful, not a doctor", text: "Medical disclaimer with no diagnosis or dosages, privacy rules aligned with NDPR, GDPR and HIPAA, and hand-off to a human for disputed transactions. Answers adapt to each of the four roles." },
        { tag: "Fits a small server", title: "512 MB is enough", text: "The vector store loads only on the first knowledge question, so the API starts fast on a small host." },
        { tag: "Tested without the API", title: "Fake embeddings, real checks", text: "RAG tests run against a fake embeddings class, so retrieval is verified without paying for model calls. Requests are rate-limited and validated with Pydantic." },
      ],
      builtWith:
        "FastAPI · LangChain agent (LangGraph under the hood) · Gemini chat and embeddings · Chroma · typed tools calling the Laravel backend over httpx · slowapi rate limiting.",
    },
  },
  {
    slug: "linkedin-agent",
    title: "LinkedIn Agent",
    group: "ai",
    depth: "full",
    role: "Backend Developer",
    year: "2026",
    live: null,
    card: {
      tag: "Human in the loop",
      summary:
        "Learns my writing voice from my post history, drafts posts with images and slide decks, and publishes on a schedule, but only after I approve each one. It runs my 30-day “AI Terminologies Explained” series.",
      stack: "Python · Gemini · LinkedIn API",
    },
    page: {
      eyebrow: "AI case study · Human in the loop · Personal tool",
      headline: "An AI that writes like me, and waits for my yes",
      lede:
        "A command-line agent that drafts LinkedIn posts in my own voice, makes the images and slide decks to go with them, and publishes on a schedule, but only the posts I’ve approved. It runs my 30-day “AI Terminologies Explained” series.",
      facts: [
        { label: "Role", value: "Backend Developer" },
        { label: "Models", value: "Gemini (text) · Flux (images)" },
        { label: "Timeline", value: "July — November 2026" },
      ],
      flow: {
        title: "From post history to published, with me in the middle",
        steps: [
          { title: "Learn voice", text: "Past posts → style profile" },
          { title: "Draft", text: "Post + image + deck" },
          { title: "I approve", text: "APPROVED marker, or nothing posts", warm: true },
          { title: "Schedule", text: "Checks every 15 min, Lagos time" },
          { title: "Publish once", text: "POSTED marker stops repeats", accent: true },
        ],
      },
      sections: [
        {
          heading: "The problem",
          paragraphs: [
            "Posting every day for 30 days takes hours of writing and design. Fully automatic posting is risky: AI text sounds generic, and one bad post goes out under your name. I wanted the speed of automation with my voice and my final say.",
          ],
        },
      ],
      decisionsHeading: "Decisions worth explaining",
      decisions: [
        { tag: "Voice, not template", title: "Learned from my own posts", text: "It reads my LinkedIn data export safely, removes duplicate posts, and has Gemini describe my style. That profile goes into every prompt." },
        { tag: "Approval gate", title: "Nothing ships without a yes", text: "A scheduler walks a dated queue. It posts only approved items, marks them posted so they never go twice, uses different times on weekdays and weekends, and gives up after three failures." },
        { tag: "Clean output", title: "Reads like a person wrote it", text: "Filters strip the model’s “Here’s your post…” chatter and Markdown, because LinkedIn shows plain text only." },
      ],
      builtWith:
        "Python · Gemini via the google-genai SDK · Cloudflare Workers AI (Flux) for images · python-pptx for decks · HTML/CSS designs rendered to PNG with headless Chrome · my own LinkedIn OAuth and posting client with token refresh.",
    },
  },
  {
    slug: "amiable-agro-allied",
    title: "Amiable Agro Allied",
    group: "client",
    depth: "short",
    role: "Fullstack Developer",
    year: "2026",
    live: { url: "https://amiableagro.com/", label: "amiableagro.com" },
    image: "/assets/projects/amiableagro.webp",
    imageAlt: "Amiable Agro Allied store",
    card: {
      label: "Fullstack",
      summary: "Farm-produce store and blog with an admin dashboard, Cloudinary media and signature-verified Paystack payments.",
      stack: "Next.js 16 · Prisma · Postgres · Paystack",
    },
    page: {
      eyebrow: "Client work · Agriculture · E-commerce",
      lede: "An online store and farming blog that connects an agricultural business directly with its customers, run from one admin dashboard.",
      about: "Customers browse products by category, keep a wishlist and check out as guests. The blog shares farming knowledge with a rich-text editor. Staff manage products and stock, orders and status, articles, the contact inbox, media and settings.",
      audience: "Shoppers buying farm produce and supplies directly from the source, readers looking for practical farming advice, and the staff who run the business day to day.",
      highlights: [
        "Paystack webhooks verified by signature, with payments never processed twice and a receipt email on success.",
        "Hand-built admin security: scrypt passwords, httpOnly sessions, signed CSRF tokens and rate limiting.",
        "Cloudinary uploads signed first, then committed, with cached pages refreshed on change.",
      ],
      builtWith: "Next.js 16 · React 19 · TypeScript · Prisma · Postgres · Tailwind v4 · Zod · Cloudinary · Paystack",
    },
  },
  {
    slug: "mercy-and-blessing",
    title: "Mercy & Blessing Wedding",
    group: "client",
    depth: "short",
    role: "Fullstack Developer",
    year: "2026",
    live: { url: "https://mbweds.vercel.app", label: "mbweds.vercel.app" },
    image: "/assets/projects/mb.webp",
    imageAlt: "Mercy and Blessing save-the-date page",
    card: {
      label: "Fullstack",
      summary: "Wedding site with RSVPs, a guestbook and a live photo wall. Guests’ photos are compressed on their phones before upload.",
      stack: "Next.js 16 · Supabase · GSAP",
    },
    page: {
      eyebrow: "Client work · Events · Wedding website",
      lede: "A wedding website that opens like an invitation: the couple’s story, the day’s details, RSVPs, a guestbook and a live photo wall guests add to from their phones.",
      about: "Guests open the invite, read the proposal story and timeline, watch the countdown, follow an animated travel guide to the venue, RSVP, sign the guestbook, see the registry, and share photos during the celebration. A music player and gentle motion set the mood.",
      audience: "Wedding guests near and far who need the details in one place, a quick way to RSVP, and somewhere to share the day as it happens.",
      highlights: [
        "Photos compressed on the guest’s phone before upload, several at once, so the wall works on venue Wi-Fi.",
        "Supabase with row-level security: anyone can add, only the couple can read RSVPs.",
        "Spam protection with a honeypot field, a short rate limit and phone validation for Nigerian and international numbers.",
        "Custom mobile scrolling where desktop scroll effects felt heavy on phones.",
      ],
      builtWith: "Next.js 16 · React 19 · Supabase · Tailwind 4 · Zod · Framer Motion · GSAP · Lenis",
    },
  },
  {
    slug: "across-ummah-cic",
    title: "Across Ummah CIC",
    group: "client",
    depth: "short",
    role: "Fullstack Developer",
    year: "2025–2026",
    live: { url: "https://www.acrossummah.com/", label: "acrossummah.com" },
    image: "/assets/projects/ummah-cic.webp",
    imageAlt: "Across Ummah CIC homepage",
    card: {
      label: "Fullstack",
      summary: "UK charity platform for programmes, events and volunteers, with donations and a spam-protected, consent-checked email flow.",
      stack: "Next.js 14 · Radix UI · React Email",
    },
    page: {
      eyebrow: "Client work · UK charity · Community platform",
      lede: "The online home for a UK community interest company: its programmes, events and volunteers, with an easy way to donate and get in touch.",
      about: "Visitors explore programmes and events, sign up to volunteer, find the team on a map and donate through a quick modal. Trust signals such as testimonials, social proof and badges help turn visits into support.",
      audience: "Families and individuals the charity supports, volunteers looking for a way to help, and donors who want to see the difference their giving makes.",
      highlights: [
        "Contact route that validates input, requires consent, catches bots with a honeypot and sends a React Email template through Brevo.",
        "Scripts that moved every image to Cloudinary and rewrote the links automatically.",
        "Structured data across the site so search engines understand the charity.",
      ],
      builtWith: "Next.js 14 · Radix / shadcn · Tailwind · Redux Toolkit · React Hook Form · Zod · React Email · Cloudinary",
    },
  },
  {
    slug: "nurture-prime-foundation",
    title: "Nurture Prime Foundation",
    group: "client",
    depth: "short",
    role: "Frontend Developer",
    year: null,
    live: { url: "https://www.nurtureprimefoundation.org", label: "nurtureprimefoundation.org" },
    image: "/assets/projects/nutureprime.webp",
    imageAlt: "Nurture Prime Foundation homepage",
    card: {
      label: "Frontend",
      summary: "Website for a charity supporting older adults, children and vulnerable families across Nigeria.",
      stack: "Next.js 15 · GSAP · Lenis",
    },
    page: {
      eyebrow: "Client work · Nigerian charity · Website",
      lede: "A website that shows the work of a charity improving life for older adults, underprivileged children and vulnerable families across Nigeria, and makes it easy to support them.",
      about: "A purpose-driven organisation needed a presence that earns trust quickly: clear about who it helps, warm in tone, and fast on the phones most of its audience uses. Scroll-led storytelling walks visitors through the foundation’s work.",
      audience: "Donors, partners and volunteers who want to understand the foundation’s work and support older adults, children and families in need.",
      highlights: [
        "Scroll-triggered storytelling with GSAP, kept smooth with Lenis.",
        "Motion used to guide attention, not decorate.",
      ],
      builtWith: "Next.js 15 · React 19 · TypeScript · Tailwind CSS · Framer Motion · GSAP · Lenis",
    },
  },
  {
    slug: "the-nebula",
    title: "The Nebula",
    group: "client",
    depth: "short",
    role: "Frontend Developer",
    year: null,
    live: { url: "https://work.thenebula.tech/", label: "work.thenebula.tech" },
    image: "/assets/projects/nebula.webp",
    imageAlt: "The Nebula workspace",
    card: {
      label: "Frontend",
      summary: "Real-time talent matching and collaboration space for tech communities.",
      stack: "Nuxt · TypeScript · Socket.io",
    },
    page: {
      eyebrow: "Product team · Tech community · Real-time web app",
      lede: "A space where tech talent finds matches, teams form around projects, and collaborators work together in real time.",
      about: "The Nebula brings talent development, community and project collaboration into one product, with live updates so matches and messages appear without refreshing.",
      audience: "Developers, designers and other tech talent looking for projects and teammates, and the communities that bring them together.",
      highlights: [
        "Real-time UI over Socket.io: updates arrive as they happen.",
        "Typed Vue components in Nuxt, built alongside designers and backend engineers.",
      ],
      builtWith: "Nuxt · TypeScript · Tailwind CSS · Socket.io · REST APIs",
    },
  },
  {
    slug: "mkce",
    title: "Mykiddiescakes Catering & Events",
    group: "client",
    depth: "short",
    role: "Frontend Developer",
    year: "2026",
    live: { url: "https://www.mykiddiescakeseventcic.co.uk", label: "mykiddiescakeseventcic.co.uk" },
    image: "/assets/projects/mkce.webp",
    imageAlt: "MKCE homepage with cakes and catering photos",
    card: {
      label: "Frontend",
      summary: "Site for a Manchester catering and events CIC, with a local-SEO page for each area it serves and WhatsApp enquiries.",
      stack: "Next.js 16 · JSON-LD · Local SEO",
    },
    page: {
      eyebrow: "Client work · Manchester, UK · Small business",
      lede: "The website for a Manchester community interest company that bakes, cooks Nigerian food, decorates and hosts events, and teaches cake decorating, sewing and cooking.",
      about: "Families find cakes, catering, decoration, event hosts and classes, see prices and a gallery, and book by WhatsApp in one tap. Each Manchester area it serves has its own page, so local searches find it.",
      audience: "Families across Manchester planning birthdays, weddings and celebrations, and anyone who wants to learn cake decorating, sewing or cooking.",
      highlights: [
        "Local SEO pages per area, each with service and breadcrumb structured data.",
        "Generated sitemap, robots file, manifest and social preview image.",
        "WhatsApp deep links for instant enquiries.",
      ],
      builtWith: "Next.js 16 · React 19 · TypeScript · Tailwind 4 · JSON-LD",
    },
  },
];

// Smaller work listed on the homepage only.
export const alsoBuilt = [
  { title: "North Manchester Inclusion Partnership", text: "Accessible community directory with ward and need filters", stack: "Next.js 16" },
  { title: "HR AI Platform", text: "Multi-agent HR assistant with FastAPI, pgvector and WhatsApp", stack: "Python · FastAPI" },
];

export const getProject = (slug) => projects.find((p) => p.slug === slug) ?? null;

export const getNextProject = (slug) => {
  const i = projects.findIndex((p) => p.slug === slug);
  return i === -1 || i === projects.length - 1 ? null : projects[i + 1];
};

// Old URLs that should land somewhere useful.
export const legacySlugs = {
  ogsera: "edutams-essential-v2",
};
