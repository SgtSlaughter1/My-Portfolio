import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import About from "./components/About";
import ScrollToTop from "./components/ScrollToTop";
import CustomCursor from "./components/CustomCursor";
import ProjectDetailsPage from "./components/ProjectDetailsPage";
import { projectsData } from "./data/projectsData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App({ initialProjectSlug = null }) {
  const [currentProjectSlug, setCurrentProjectSlug] =
    useState(initialProjectSlug);

  useEffect(() => {
    const handleHashChange = () => {
      if (typeof window === "undefined") return;
      const hash = window.location.hash;
      if (hash.startsWith("#/project/")) {
        const slug = hash.replace("#/project/", "");
        setCurrentProjectSlug(slug);
      } else {
        setCurrentProjectSlug(null);
      }
    };

    if (typeof window !== "undefined") {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
      }
      handleHashChange();
      window.addEventListener("hashchange", handleHashChange);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("hashchange", handleHashChange);
      }
    };
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
    // Refresh ScrollTrigger when layout switches
    const timer = setTimeout(() => {
      if (typeof window !== "undefined") {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      }
      ScrollTrigger.refresh();
    }, 100);
    const raf = requestAnimationFrame(() => {
      if (typeof window !== "undefined") {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      }
    });
    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(raf);
    };
  }, [currentProjectSlug]);

  const currentProject = projectsData.find((p) => p.id === currentProjectSlug);
  const currentProjectIndex = projectsData.findIndex(
    (p) => p.id === currentProjectSlug,
  );
  const nextProjectSlug =
    currentProjectIndex !== -1 && currentProjectIndex < projectsData.length - 1
      ? projectsData[currentProjectIndex + 1].id
      : null;

  const handleBackToHome = () => {
    if (typeof window !== "undefined") {
      window.location.hash = "#portfolio";
    }
  };

  const handleNavigateToProject = (slug) => {
    if (typeof window !== "undefined") {
      window.location.hash = `#/project/${slug}`;
    }
  };

  return (
    <div className="bg-dark min-vh-100 overflow-x-hidden">
      <Helmet>
        <title>Habeeb Abdulsalam | Full Stack Developer</title>
        <meta name="title" content="Habeeb Abdulsalam | Full Stack Developer" />
        <meta
          name="description"
          content="Full Stack Developer focused on building scalable, technical web applications with Laravel, Next.js, and React. Architecting clean systems and modern digital experiences."
        />
        <meta
          name="keywords"
          content="web developer, full stack developer, Laravel developer, Vue.js developer, PHP developer, frontend developer, backend developer, portfolio, Nigeria, Lagos"
        />
        <link rel="canonical" href="https://habeeb-abdulsalam.vercel.app/" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://habeeb-abdulsalam.vercel.app/"
        />
        <meta
          property="og:title"
          content="Habeeb Abdulsalam | Full Stack Developer"
        />
        <meta
          property="og:description"
          content="Full Stack Developer focused on building scalable, technical web applications with Laravel, Next.js, and React. Architecting clean systems and modern digital experiences."
        />
        <meta
          property="og:image"
          content="https://habeeb-abdulsalam.vercel.app/assets/profile-img.jpeg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:url"
          content="https://habeeb-abdulsalam.vercel.app/"
        />
        <meta
          name="twitter:title"
          content="Habeeb Abdulsalam | Full Stack Developer"
        />
        <meta
          name="twitter:description"
          content="Full Stack Developer focused on building scalable, technical web applications with Laravel, Next.js, and React. Architecting clean systems and modern digital experiences."
        />
        <meta
          name="twitter:image"
          content="https://habeeb-abdulsalam.vercel.app/assets/profile-img.jpeg"
        />

        {/* Structured Data Graph */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Person",
                "@id": "https://habeeb-abdulsalam.vercel.app/#person",
                name: "Habeeb Abdulsalam",
                jobTitle: "Full Stack Web Developer",
                description:
                  "Full Stack Developer focused on building scalable web applications with Laravel, Next.js, and React.",
                url: "https://habeeb-abdulsalam.vercel.app/",
                image:
                  "https://habeeb-abdulsalam.vercel.app/assets/profile-img.jpeg",
                sameAs: [
                  "https://github.com/SgtSlaughter1",
                  "https://www.linkedin.com/in/abdulsalam-habeeb-9909592a2/",
                  "https://wa.me/2349076630104",
                ],
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Ijebu Ode",
                  addressCountry: "NG",
                },
                knowsAbout: [
                  "Laravel",
                  "Vue.js",
                  "PHP",
                  "JavaScript",
                  "HTML5",
                  "CSS3",
                  "MySQL",
                  "Postgres",
                  "Prisma",
                  "Redis",
                  "Git",
                  "Docker",
                  "Bootstrap",
                  "Nuxt.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "Next.js",
                  "React.js",
                  "Inertia.js",
                  "Redux",
                  "Zustand",
                  "Three.js",
                  "GSAP",
                  "Node.js",
                  "RESTful APIs",
                ],
              },
              {
                "@type": "WebSite",
                "@id": "https://habeeb-abdulsalam.vercel.app/#website",
                url: "https://habeeb-abdulsalam.vercel.app/",
                name: "Habeeb Abdulsalam Portfolio",
                description: "Full Stack Developer Portfolio",
                publisher: {
                  "@id": "https://habeeb-abdulsalam.vercel.app/#person",
                },
              },
              {
                "@type": "ProfilePage",
                "@id": "https://habeeb-abdulsalam.vercel.app/#profile",
                url: "https://habeeb-abdulsalam.vercel.app/",
                mainEntity: {
                  "@id": "https://habeeb-abdulsalam.vercel.app/#person",
                },
              },
            ],
          })}
        </script>
      </Helmet>
      <Navbar />
      <main>
        {currentProjectSlug ? (
          <ProjectDetailsPage
            project={currentProject}
            onBack={handleBackToHome}
            nextProjectSlug={nextProjectSlug}
            onNavigateToProject={handleNavigateToProject}
          />
        ) : (
          <>
            <Home />
            <Portfolio />
            <Skills />
            <Experience />
            <Certificates />
            <About />
            <Contact />
          </>
        )}
      </main>
      <ScrollToTop />
      <CustomCursor />
    </div>
  );
}

export default App;
