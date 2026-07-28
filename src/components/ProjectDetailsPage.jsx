import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const ProjectDetailsPage = ({
  project,
  onBack,
  nextProjectSlug,
  onNavigateToProject,
}) => {
  const [viewMode, setViewMode] = useState("live");
  const [iframeKey, setIframeKey] = useState(0);
  useEffect(() => {
    // Reset scroll positions robustly across layout paints
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, 10);

    const raf = requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    });

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(raf);
    };
  }, [project]);

  if (!project) {
    return (
      <div className="container py-5 text-center min-vh-100 d-flex flex-column justify-content-center align-items-center">
        <h2 className="display-4 fw-bold text-white mb-4">Project Not Found</h2>
        <button
          className="btn glass-pill px-4 py-2 text-white"
          onClick={onBack}
        >
          <i className="bi bi-arrow-left me-2"></i> Back to Home
        </button>
      </div>
    );
  }

  const techs = project.techStack
    ? project.techStack.split(",").map((t) => t.trim())
    : [];

  return (
    <div
      className="project-details-page pb-5"
      style={{
        backgroundColor: "var(--primary-bg)",
        color: "var(--text-primary)",
        paddingTop: "clamp(100px, 12vh, 140px)",
      }}
    >
      <Helmet>
        <title>{`${project.title} | Habeeb Abdulsalam - Project Case Study`}</title>
        <meta
          name="title"
          content={`${project.title} | Habeeb Abdulsalam - Project Case Study`}
        />
        <meta name="description" content={project.description} />
        <link
          rel="canonical"
          href={`https://habeeb-abdulsalam.vercel.app/project/${project.id}`}
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://habeeb-abdulsalam.vercel.app/project/${project.id}`}
        />
        <meta
          property="og:title"
          content={`${project.title} | Habeeb Abdulsalam - Project Case Study`}
        />
        <meta property="og:description" content={project.description} />
        <meta
          property="og:image"
          content={`https://habeeb-abdulsalam.vercel.app${project.imageSrc}`}
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:url"
          content={`https://habeeb-abdulsalam.vercel.app/project/${project.id}`}
        />
        <meta
          name="twitter:title"
          content={`${project.title} | Habeeb Abdulsalam - Project Case Study`}
        />
        <meta name="twitter:description" content={project.description} />
        <meta
          name="twitter:image"
          content={`https://habeeb-abdulsalam.vercel.app${project.imageSrc}`}
        />

        {/* Structured Data Graph */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "SoftwareApplication",
                "@id": `https://habeeb-abdulsalam.vercel.app/project/${project.id}#software`,
                name: project.title,
                applicationCategory: "BusinessApplication",
                operatingSystem: "Web",
                description: project.description,
                url: `https://habeeb-abdulsalam.vercel.app/project/${project.id}`,
                image: `https://habeeb-abdulsalam.vercel.app${project.imageSrc}`,
                author: {
                  "@type": "Person",
                  name: "Habeeb Abdulsalam",
                },
              },
              {
                "@type": "BreadcrumbList",
                "@id": `https://habeeb-abdulsalam.vercel.app/project/${project.id}#breadcrumb`,
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://habeeb-abdulsalam.vercel.app",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Projects",
                    item: "https://habeeb-abdulsalam.vercel.app/#portfolio",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: project.title,
                  },
                ],
              },
            ],
          })}
        </script>
      </Helmet>
      <div className="container">
        {/* Back navigation */}
        <div className="mb-5">
          <button
            onClick={onBack}
            className="btn p-0 text-white d-inline-flex align-items-center gap-2 hover-translate-x transition-all"
            style={{
              background: "none",
              border: "none",
              color: "var(--text-secondary)",
              fontSize: "1.1rem",
              cursor: "none",
            }}
          >
            <i
              className="bi bi-arrow-left fs-4"
              style={{ color: "var(--primary-cta)" }}
            ></i>
            <span style={{ fontWeight: "500" }}>Back to Portfolio</span>
          </button>
        </div>

        {/* Hero Header */}
        <div className="row justify-content-between align-items-end mb-4 g-4">
          <div className="col-lg-8">
            <span
              className="text-uppercase font-mono mb-2 d-inline-block"
              style={{
                color: "var(--primary-cta)",
                letterSpacing: "2px",
                fontSize: "0.9rem",
                fontWeight: "600",
              }}
            >
              {project.tagline}
            </span>
            <h1
              className="display-3 fw-bold mb-3 text-white"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              {project.title}
            </h1>
            <p
              className="lead text-secondary mb-0"
              style={{
                maxWidth: "750px",
                fontSize: "1.2rem",
                lineHeight: "1.6",
              }}
            >
              {project.description}
            </p>
          </div>

          <div className="col-lg-4 d-flex justify-content-lg-end gap-3">
            <a
              href={project.liveDemoLink}
              target="_blank"
              rel="noreferrer"
              className="btn glass-pill px-5 py-3 text-white fw-bold d-flex align-items-center gap-2 transition-all hover-translate-y"
              style={{
                backgroundColor: "var(--primary-cta)",
                color: "#0B1020",
                border: "none",
                fontSize: "15px",
                cursor: "none",
              }}
            >
              Launch Live <i className="bi bi-arrow-up-right"></i>
            </a>
            {project.sourceCodeLink && (
              <a
                href={project.sourceCodeLink}
                target="_blank"
                rel="noreferrer"
                className="btn glass-pill px-4 py-3 text-white transition-all hover-translate-y"
                style={{
                  border: "1px solid var(--border)",
                  fontSize: "15px",
                  cursor: "none",
                }}
              >
                <i className="bi bi-github me-2"></i> Code
              </a>
            )}
          </div>
        </div>

        {/* Hero Preview Showcase (Mock Browser) */}
        <div
          className="mb-5 shadow-lg border border-secondary border-opacity-10"
          style={{
            borderRadius: "20px",
            overflow: "hidden",
            backgroundColor: "#0F172A",
          }}
        >
          {/* Browser Header Bar */}
          <div
            className="d-flex flex-wrap align-items-center justify-content-between px-3 py-2 border-bottom border-secondary border-opacity-10"
            style={{ backgroundColor: "#1E293B" }}
          >
            {/* Window controls */}
            <div className="d-flex gap-2 align-items-center">
              <span
                className="rounded-circle"
                style={{ width: "12px", height: "12px", background: "#EF4444" }}
              ></span>
              <span
                className="rounded-circle"
                style={{ width: "12px", height: "12px", background: "#F59E0B" }}
              ></span>
              <span
                className="rounded-circle"
                style={{ width: "12px", height: "12px", background: "#22C55E" }}
              ></span>
            </div>

            {/* Address Bar */}
            <div
              className="d-flex align-items-center gap-2 px-3 py-1 rounded"
              style={{
                backgroundColor: "#0F172A",
                width: "clamp(200px, 50vw, 550px)",
                border: "1px solid rgba(255,255,255,0.05)",
                fontSize: "12px",
              }}
            >
              <i className="bi bi-lock-fill text-success"></i>
              <span
                className="text-secondary overflow-hidden text-truncate font-mono"
                style={{ direction: "ltr" }}
              >
                {project.liveDemoLink}
              </span>
              {viewMode === "live" && (
                <button
                  onClick={() => setIframeKey((k) => k + 1)}
                  className="btn p-0 text-secondary hover-text-white ms-auto border-0 bg-transparent"
                  title="Reload preview"
                  style={{ cursor: "none" }}
                >
                  <i className="bi bi-arrow-clockwise"></i>
                </button>
              )}
            </div>

            {/* Toggle buttons (Live / Image) */}
            <div
              className="btn-group"
              role="group"
              style={{
                border: "1px solid var(--border)",
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <button
                type="button"
                className={`btn btn-sm px-3 py-1 font-mono text-uppercase ${viewMode === "live" ? "btn-info text-dark" : "btn-outline-secondary text-white"}`}
                style={{
                  fontSize: "11px",
                  fontWeight: "600",
                  cursor: "none",
                  border: "none",
                }}
                onClick={() => setViewMode("live")}
              >
                Live Preview
              </button>
              <button
                type="button"
                className={`btn btn-sm px-3 py-1 font-mono text-uppercase ${viewMode === "image" ? "btn-info text-dark" : "btn-outline-secondary text-white"}`}
                style={{
                  fontSize: "11px",
                  fontWeight: "600",
                  cursor: "none",
                  border: "none",
                }}
                onClick={() => setViewMode("image")}
              >
                Screenshot
              </button>
            </div>
          </div>

          {/* Browser Window Body */}
          <div
            style={{
              height: "clamp(450px, 75vh, 800px)",
              position: "relative",
            }}
          >
            {viewMode === "live" ? (
              <>
                <iframe
                  key={iframeKey}
                  src={project.liveDemoLink}
                  title={`${project.title} Live Preview`}
                  className="w-100 h-100 border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                ></iframe>
                {/* Embed notice / Tip overlay banner */}
                <div
                  className="position-absolute bottom-0 start-0 end-0 p-2 text-center"
                  style={{
                    background: "rgba(15, 23, 42, 0.9)",
                    borderTop: "1px solid rgba(255,255,255,0.05)",
                    fontSize: "12px",
                    color: "var(--text-secondary)",
                  }}
                >
                  <i
                    className="bi bi-info-circle me-1"
                    style={{ color: "var(--primary-cta)" }}
                  ></i>
                  Showing interactive live preview. If it does not load due to
                  security policies, switch to{" "}
                  <button
                    onClick={() => setViewMode("image")}
                    className="btn btn-link p-0 m-0 text-info text-decoration-none font-mono"
                    style={{
                      fontSize: "12px",
                      cursor: "none",
                      verticalAlign: "baseline",
                    }}
                  >
                    Screenshot
                  </button>{" "}
                  or{" "}
                  <a
                    href={project.liveDemoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-info text-decoration-none font-mono"
                    style={{ cursor: "none" }}
                  >
                    Launch Live <i className="bi bi-arrow-up-right"></i>
                  </a>
                  .
                </div>
              </>
            ) : (
              <img
                src={project.imageSrc}
                alt={project.title}
                className="w-100 h-100 object-fit-cover"
                style={{ opacity: 0.95 }}
              />
            )}
          </div>
        </div>

        {/* Detailed Case Description */}
        {project.moreText && (
          <div className="mb-5 py-4">
            <h2 className="h3 fw-bold text-white mb-4">
              Project Narrative & Operations
            </h2>
            <p
              className="text-secondary"
              style={{ fontSize: "1.1rem", lineHeight: "1.8" }}
            >
              {project.moreText}
            </p>
          </div>
        )}

        {/* Tech Stack */}
        <div className="mb-5">
          <h2 className="h3 fw-bold text-white mb-4">
            Technology Framework & Integrations
          </h2>
          <div className="d-flex flex-wrap gap-2">
            {techs.map((tech, idx) => (
              <span
                key={idx}
                className="badge font-mono"
                style={{
                  background: "rgba(56, 189, 248, 0.06)",
                  color: "#7DD3FC",
                  border: "1px solid rgba(56, 189, 248, 0.15)",
                  borderRadius: "999px",
                  padding: "8px 18px",
                  fontSize: "13px",
                  fontWeight: "400",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions / Navigation */}
        <div className="mt-5 pt-5 border-top border-secondary border-opacity-10 d-flex flex-column flex-sm-row justify-content-between align-items-center gap-4">
          <button
            className="btn glass-pill px-4 py-3 text-white"
            onClick={onBack}
            style={{ cursor: "none" }}
          >
            <i className="bi bi-arrow-left me-2"></i> Return to Portfolio
          </button>

          {nextProjectSlug && (
            <button
              onClick={() => onNavigateToProject(nextProjectSlug)}
              className="btn btn-link p-0 text-decoration-none text-white d-flex align-items-center gap-2 hover-translate-x transition-all"
              style={{ cursor: "none", color: "var(--primary-cta) !important" }}
            >
              <span>Next Project Case Study</span>
              <i
                className="bi bi-arrow-right fs-5"
                style={{ color: "var(--primary-cta)" }}
              ></i>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
