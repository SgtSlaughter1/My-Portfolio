import { useEffect } from "react";
import SiteHeader from "./components/SiteHeader";
import ContactFooter from "./components/ContactFooter";
import Seo from "./components/Seo";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import { navigate, usePath } from "./lib/router";
import Link from "./components/Link";
import { projects, getProject, legacySlugs } from "./data/projects";
import { SITE_URL, profile, stack } from "./data/profile";

const HOME_TITLE = `${profile.name} | Fullstack Developer & AI Engineer`;
const HOME_DESCRIPTION =
  "Fullstack developer building dependable web platforms with Laravel, Vue, React and Next.js, and AI agents with RAG and tool calling. Case studies from education, health, commerce and charity.";

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: profile.name,
  alternateName: ["Abdulsalam Oladipupo Habeeb", "Habeeb Abdulsalam"],
  url: `${SITE_URL}/`,
};

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  alternateName: ["Abdulsalam Oladipupo Habeeb", "Habeeb Abdulsalam"],
  jobTitle: profile.role,
  url: `${SITE_URL}/`,
  image: `${SITE_URL}${profile.photo}`,
  email: `mailto:${profile.email}`,
  sameAs: [profile.github, profile.linkedin],
  address: { "@type": "PostalAddress", addressLocality: "Ijebu Ode", addressCountry: "Nigeria" },
  worksFor: { "@type": "Organization", name: "Edutams" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Olabisi Onabanjo University" },
  knowsAbout: stack.flatMap((row) => row.items),
};

function slugFromPath(path) {
  const m = path.match(/^\/project\/([^/]+)\/?$/);
  return m ? decodeURIComponent(m[1]) : null;
}

export default function App({ initialPath = "/" }) {
  const path = usePath(initialPath);
  const slug = slugFromPath(path);
  const project = slug ? getProject(slug) : null;
  const isHome = path === "/" || path === "/index.html";

  // Old links used #/project/<slug>; move them to the real URL.
  useEffect(() => {
    const redirectLegacyHash = () => {
      const m = window.location.hash.match(/^#\/project\/(.+)$/);
      if (!m) return;
      const target = legacySlugs[m[1]] ?? m[1];
      navigate(getProject(target) ? `/project/${target}` : "/", { replace: true });
    };
    redirectLegacyHash();
    window.addEventListener("hashchange", redirectLegacyHash);
    return () => window.removeEventListener("hashchange", redirectLegacyHash);
  }, []);

  // Land at the right spot after each route change.
  useEffect(() => {
    const id = window.location.hash.slice(1);
    const el = id && !id.startsWith("/") ? document.getElementById(id) : null;
    if (el) el.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [path]);

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <SiteHeader />
      {isHome && (
        <>
          <Seo title={HOME_TITLE} description={HOME_DESCRIPTION} path="/" jsonLd={[websiteLd, personLd]} />
          <HomePage />
        </>
      )}
      {project && (
        <>
          <ProjectSeo project={project} />
          <ProjectPage key={project.slug} project={project} />
        </>
      )}
      {!isHome && !project && <NotFound />}
      <ContactFooter />
    </>
  );
}

function ProjectSeo({ project }) {
  const path = `/project/${project.slug}`;
  const description = project.page.lede;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: project.title,
      headline: project.page.headline ?? project.title,
      description,
      url: `${SITE_URL}${path}`,
      ...(project.image && { image: `${SITE_URL}${project.image}` }),
      author: { "@type": "Person", name: profile.name, url: `${SITE_URL}/` },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: project.title, item: `${SITE_URL}${path}` },
      ],
    },
  ];

  return (
    <Seo
      title={`${project.title} — Case study | ${profile.name}`}
      description={description}
      path={path}
      image={project.image}
      jsonLd={jsonLd}
    />
  );
}

function NotFound() {
  return (
    <main id="main" className="wrap not-found">
      <Seo title={`Page not found | ${profile.name}`} description={HOME_DESCRIPTION} path="/" />
      <h1>That page isn’t here</h1>
      <p>
        It may have moved. <Link to="/#work">See all the work</Link> or{" "}
        <Link to={`/project/${projects[0].slug}`}>start with the first case study</Link>.
      </p>
    </main>
  );
}
