export const SITE_URL = "https://habeeb-abdulsalam.vercel.app";

export const profile = {
  name: "Habeeb Abdulsalam",
  role: "Fullstack Developer",
  location: "Ijebu Ode, Nigeria",
  email: "habeebabdulsalam86@gmail.com",
  whatsapp: "https://wa.me/2349076630104",
  github: "https://github.com/SgtSlaughter1",
  linkedin: "https://www.linkedin.com/in/abdulsalam-habeeb-9909592a2/",
  photo: "/assets/projects/profile.webp",
};

export const stats = [
  { value: "16 projects", label: "shipped across education, health, commerce, sport and charity" },
  { value: "5 AI builds", label: "agents with RAG, tool calling and human approval steps" },
  { value: "6 years", label: "in tech, from hardware support in 2020 to fullstack and AI" },
  { value: "2 countries", label: "clients in Nigeria and the United Kingdom" },
];

export const experience = [
  {
    period: "2026 — now",
    title: "Graduate Developer · Edutams",
    text: "I build features for a state-wide school management platform used by government, schools and families, and help keep it fast during the busiest weeks of the school year.",
  },
  {
    period: "2024 — 2025",
    title: "Software Development Intern · Edutams",
    text: "Joined the platform team and shipped production features in Laravel and Vue across the company’s education products.",
  },
  {
    period: "2022 — 2023",
    title: "Science Teacher & ICT CDS President · Fridaus Model School, Igbore",
    text: "Used student performance data to change how lessons were taught, which led to a 70% improvement in overall results.",
  },
  {
    period: "2020 — 2024",
    title: "Computer Engineer · Babakawo Computer Services",
    text: "Hardware, networks and client support. This is where I learned how systems fail in the real world.",
  },
  {
    period: "2020",
    title: "Computer Engineer Intern · Central Tech Computer Services, Babcock University",
    text: "Installed, maintained and repaired computer hardware and networking systems.",
  },
];

export const education = "BSc Computer Science, Olabisi Onabanjo University, 2018–2023";

const cert = (file) => encodeURI(`/assets/certificates/${file}`);

export const certifications = [
  {
    title: "Generative AI",
    issuer: "DeepTech_Ready by Data Science Nigeria · 3MTT",
    year: "2026",
    links: [{ label: "View", href: cert("3mtt-generative-ai.pdf") }],
  },
  {
    title: "Introduction to Generative AI",
    issuer: "Google Cloud · Coursera specialization, 4 courses",
    year: "2026",
    links: [{ label: "Verify", href: "https://coursera.org/verify/specialization/F7J7IJJFP2CU" }],
  },
  {
    title: "AI School",
    issuer: "African Technology Forum · ATF AI Challenge",
    year: "2026",
    links: [{ label: "View", href: cert("atf-ai-school.pdf") }],
  },
  { title: "3MTT Training Programme", issuer: "Federal Government of Nigeria", links: [{ label: "View", href: cert("3mtt.png") }] },
  { title: "Certificate of Completion", issuer: "TS Academy", links: [{ label: "View", href: cert("TSAcademy.png") }] },
  {
    title: "Software Development & Data Analysis",
    issuer: "DFA Challenge · Youth Intermediate programmes",
    links: [
      { label: "Software", href: cert("DFA.png") },
      { label: "Data", href: cert("DFA2.png") },
    ],
  },
  {
    title: "JavaScript Algorithms & Responsive Web Design",
    issuer: "freeCodeCamp",
    links: [
      { label: "JavaScript", href: cert("FreecodeCamp (2).png") },
      { label: "Web Design", href: cert("Freecodecamp.png") },
    ],
  },
  { title: "Google Analytics", issuer: "Google", links: [{ label: "View", href: cert("GoogleAnalytics.png") }] },
];

export const stack = [
  {
    group: "Frontend",
    items: ["React", "Next.js", "Vue", "Nuxt", "Inertia.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML & CSS", "Three.js", "GSAP", "Framer Motion", "PWA & IndexedDB"],
  },
  {
    group: "Backend",
    items: ["Laravel", "PHP", "Python", "FastAPI", "Node.js", "REST APIs", "MySQL", "PostgreSQL", "Prisma", "Supabase", "Redis & queues", "Socket.io", "Paystack"],
  },
  {
    group: "AI",
    accent: true,
    items: ["Gemini", "Groq", "LangChain", "RAG", "Function calling", "Chroma", "pgvector", "Embeddings", "Prompt guardrails", "Claude Code", "ChatGPT", "Codex", "Kiro", "Antigravity", "AI coding agents"],
  },
  {
    group: "Tools",
    items: ["Cloudinary", "Git", "Pest & Vitest", "Figma"],
  },
];
