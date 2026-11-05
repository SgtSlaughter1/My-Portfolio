import { useRef } from "react";
import Link from "../components/Link";
import { usePageMotion } from "../lib/motion";
import { getNextProject } from "../data/projects";

const backLink = {
  featured: { to: "/#work", label: "All work" },
  ai: { to: "/#ai", label: "AI systems" },
  client: { to: "/#clients", label: "Client work" },
};

export default function ProjectPage({ project }) {
  const next = getNextProject(project.slug);
  const back = backLink[project.group];
  const mainRef = useRef(null);
  usePageMotion(mainRef, project.slug);

  return (
    <main id="main" ref={mainRef}>
      <div className="wrap">
        <Link to={back.to} className="back">
          <span aria-hidden="true">←</span> {back.label}
        </Link>
      </div>
      {project.depth === "full" ? <FullStudy project={project} /> : <ShortStudy project={project} />}
      <nav aria-label="Next project" className="next">
        {next ? (
          <Link to={`/project/${next.slug}`} className="wrap">
            <span className="mono">Next</span>
            <span className="next__title">
              {next.title} <span aria-hidden="true">→</span>
            </span>
          </Link>
        ) : (
          <Link to="/#work" className="wrap">
            <span className="mono">That’s everything</span>
            <span className="next__title">
              Back to all work <span aria-hidden="true">→</span>
            </span>
          </Link>
        )}
      </nav>
    </main>
  );
}

function Facts({ project, items }) {
  const facts = project.live ? [...items, { label: "Live", value: project.live.label, href: project.live.url }] : items;
  return (
    <dl className="facts">
      {facts.map((f) => (
        <div key={f.label}>
          <dt>{f.label}</dt>
          <dd>
            {f.href ? (
              <a href={f.href} target="_blank" rel="noopener noreferrer">
                {f.value} <span aria-hidden="true">↗</span>
              </a>
            ) : (
              f.value
            )}
          </dd>
        </div>
      ))}
    </dl>
  );
}

function FullStudy({ project }) {
  const { page } = project;

  return (
    <>
      <header className="wrap cs-hero">
        <p className="mono" data-intro>{page.eyebrow}</p>
        <h1 data-intro>{page.headline}</h1>
        <p className="cs-hero__lede" data-intro>{page.lede}</p>
      </header>

      <div className="wrap">
        <Facts project={project} items={page.facts} />
      </div>

      <figure className="wrap cs-figure">
        {project.image ? (
          <img src={project.image} alt={project.imageAlt} width="1600" height="1000" />
        ) : (
          page.flow && <Flow flow={page.flow} />
        )}
      </figure>

      <article className="measure">
        {page.sections.map((s) => (
          <section key={s.heading} className="prose">
            <h2>{s.heading}</h2>
            {s.paragraphs?.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
            {s.list && (
              <ul>
                {s.list.map((item) => (
                  <li key={item.text.slice(0, 32)}>
                    {item.label && <strong>{item.label}: </strong>}
                    {item.text}
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </article>

      {page.builtCards && (
        <section className="wrap decisions" aria-labelledby="built-h">
          <h2 id="built-h">How it’s built</h2>
          <p className="built-intro">{page.builtIntro}</p>
          <div className="grid">
            {page.builtCards.map((c) => (
              <div key={c.tag} className="decision decision--small">
                <p className="decision__tag">{c.tag}</p>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {page.decisions && (
        <section className="wrap decisions" aria-labelledby="decisions-h">
          <h2 id="decisions-h">{page.decisionsHeading ?? "Decisions worth explaining"}</h2>
          <div className={`grid${page.decisions.length % 2 === 0 ? " grid--2" : ""}`}>
            {page.decisions.map((d) => (
              <div key={d.tag} className="decision">
                <p className="decision__tag">{d.tag}</p>
                <h3>{d.title}</h3>
                <p>{d.text}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {page.challenges && <Challenges items={page.challenges} />}

      {page.steps && (
        <section className="wrap decisions" aria-label={page.steps.tag}>
          <div className="steps-panel">
            <p className="steps-panel__tag">{page.steps.tag}</p>
            <p className="steps-panel__title">{page.steps.title}</p>
            <ol>
              {page.steps.items.map((s) => (
                <li key={s.title}>
                  <strong>{s.title}</strong>
                  <p>{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      <article className="measure">
        {page.decisionsText && (
          <section className="prose">
            <h2>{page.decisionsHeading}</h2>
            <p>{page.decisionsText}</p>
          </section>
        )}
        {page.builtWith && (
          <section className="prose">
            <h2>How it’s built</h2>
            <p>{page.builtWith}</p>
          </section>
        )}
        {page.closing && (
          <section className="prose">
            <h2>{page.closing.heading}</h2>
            <p>{page.closing.text}</p>
          </section>
        )}
      </article>
      <div className="cs-end" />
    </>
  );
}

// Real constraints (rate limits, cost, outages) paired with what the build does about them.
function Challenges({ items }) {
  return (
    <section className="wrap challenges" aria-labelledby="challenges-h">
      <h2 id="challenges-h">Problems I hit, and how I solved them</h2>
      <ol className="challenges__list">
        {items.map((c) => (
          <li key={c.problem} className="challenge">
            <div className="challenge__side">
              <p className="challenge__label">Problem</p>
              <h3>{c.problem}</h3>
              <p>{c.problemText}</p>
            </div>
            <div className="challenge__side challenge__side--fix">
              <p className="challenge__label">Solution</p>
              <h3>{c.fix}</h3>
              <p>{c.fixText}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Flow({ flow }) {
  return (
    <div className="flow">
      <p className="flow__title">{flow.title}</p>
      <ol className="flow__steps">
        {flow.steps.map((s) => (
          <li
            key={s.title}
            className={`flow__step${s.accent ? " flow__step--accent" : ""}${s.warm ? " flow__step--warm" : ""}`}
          >
            <strong>{s.title}</strong>
            <span>{s.text}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

function ShortStudy({ project }) {
  const { page } = project;
  const items = [{ label: "Role", value: project.role }];
  if (project.year) items.push({ label: "Year", value: project.year });

  return (
    <>
      <header className="wrap cs-hero">
        <p className="mono" data-intro>{page.eyebrow}</p>
        <h1 data-intro>{project.title}</h1>
        <p className="cs-hero__lede" data-intro>{page.lede}</p>
      </header>

      <div className="wrap">
        <Facts project={project} items={items} />
      </div>

      <figure className="wrap cs-figure">
        <img src={project.image} alt={project.imageAlt} width="1600" height="1000" />
      </figure>

      <div className="wrap short-body">
        <div className="short-body__main">
          <h2>What it does</h2>
          <p>{page.about}</p>
          <h2>Who it’s for</h2>
          <p>{page.audience}</p>
        </div>
        <aside className="short-body__aside" aria-labelledby={`hl-${project.slug}`}>
          <h2 id={`hl-${project.slug}`}>Highlights</h2>
          <ul>
            {page.highlights.map((h) => (
              <li key={h.slice(0, 32)}>{h}</li>
            ))}
          </ul>
          <p className="stack-line">{page.builtWith}</p>
        </aside>
      </div>
    </>
  );
}
