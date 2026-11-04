import { useRef } from "react";
import Link from "../components/Link";
import { usePageMotion } from "../lib/motion";
import StackIcon from "../components/StackIcon";
import { stackIcons } from "../data/stackIcons";
import { projects, alsoBuilt } from "../data/projects";
import { profile, stats, experience, education, certifications, stack } from "../data/profile";

const featured = projects.filter((p) => p.group === "featured");
const aiWork = projects.filter((p) => p.group === "ai");
const clientWork = projects.filter((p) => p.group === "client");
const projectHref = (p) => `/project/${p.slug}`;

export default function HomePage() {
  const mainRef = useRef(null);
  usePageMotion(mainRef, "home");

  return (
    <main id="main" ref={mainRef}>
      <Hero />
      <div className="wrap">
        <dl className="stats" aria-label="At a glance">
          {stats.map((s) => (
            <div key={s.value} className="stat">
              <dt className="stat__value">{s.value}</dt>
              <dd className="stat__label">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
      <FeaturedWork />
      <AiSystems />
      <ClientWork />
      <Stack />
      <Experience />
      <About />
    </main>
  );
}

function Hero() {
  return (
    <section className="wrap hero">
      <p className="mono status" data-intro>
        <span className="status__dot" aria-hidden="true" />
        Fullstack developer · {profile.location} · Open to freelance work
      </p>
      <h1 data-intro>I build dependable software, and the AI that makes it easier to use.</h1>
      <p className="hero__lede" data-intro>
        Fullstack developer at Edutams, working on the platform that runs Ogun State’s schools. On my own time I build AI
        agents and offline-first tools, like a tutor that works without internet and an NGO helper that turns a chat into
        a donation. I ship alongside AI coding agents like Claude Code, Codex and Kiro, and I review and own every line.
      </p>
      <div className="hero__actions" data-intro>
        <Link to="/#work" className="btn btn--solid">
          See the work
        </Link>
        <Link to="/#contact" className="btn btn--ghost">
          Get in touch
        </Link>
      </div>
      <LogoMarquee />
    </section>
  );
}

function FeaturedWork() {
  return (
    <section id="work" className="wrap section" aria-labelledby="work-h">
      <div className="section-head">
        <h2 id="work-h">Selected work</h2>
        <p>Each one has a case study: the problem, how it works, and the decisions behind it.</p>
      </div>
      {featured.map((p, i) => (
        <article key={p.slug} className="feature">
          <Link to={projectHref(p)} className="feature__media" tabIndex={-1} aria-hidden="true">
            <img src={p.image} alt="" width="1600" height="1000" loading={i === 0 ? "eager" : "lazy"} />
          </Link>
          <div className="feature__body">
            <p className="mono">
              {String(i + 1).padStart(2, "0")} — {p.card.eyebrow}
            </p>
            <h3>
              <Link to={projectHref(p)}>{p.title}</Link>
            </h3>
            <p className="feature__summary">{p.card.summary}</p>
            <p className="feature__stack">{p.card.stack}</p>
            <p className="feature__links">
              <Link to={projectHref(p)}>
                Read the case study <span aria-hidden="true">→</span>
              </Link>
              {p.live && p.slug === "acedrill" && (
                <a className="link-accent" href={p.live.url} target="_blank" rel="noopener noreferrer">
                  Try it live <span aria-hidden="true">↗</span>
                </a>
              )}
            </p>
          </div>
        </article>
      ))}
    </section>
  );
}

function AiSystems() {
  return (
    <section id="ai" className="wrap section" aria-labelledby="ai-h">
      <div className="section-head">
        <h2 id="ai-h">AI systems</h2>
        <p>Agents that act in real systems, built so they fail safely when the model doesn’t answer.</p>
      </div>
      <div className="grid">
        {aiWork.map((p) => (
          <Link key={p.slug} to={projectHref(p)} className="ai-card">
            <span className="ai-card__tag">{p.card.tag}</span>
            <span className="ai-card__title">{p.title}</span>
            <span className="ai-card__text">{p.card.summary}</span>
            <span className="ai-card__stack">{p.card.stack}</span>
          </Link>
        ))}
      </div>
      <p className="note">
        Also: HR AI Platform, a multi-agent HR assistant using FastAPI, pgvector, Celery and WhatsApp. Source code for
        these projects is private; I’m happy to walk you through it on a call.
      </p>
    </section>
  );
}

function ClientWork() {
  return (
    <section id="clients" className="wrap section" aria-labelledby="clients-h">
      <div className="section-head">
        <h2 id="clients-h">Client &amp; community work</h2>
        <p>Websites and platforms for businesses, charities and events.</p>
      </div>
      <div className="client-grid">
        {clientWork.map((p) => (
          <Link key={p.slug} to={projectHref(p)} className="client-card">
            <span className="client-card__media">
              <img src={p.image} alt="" width="1600" height="1000" loading="lazy" />
            </span>
            <span className="client-card__head">
              <span className="client-card__title">{p.title}</span>
              <span className="client-card__label">{p.card.label}</span>
            </span>
            <span className="client-card__text">{p.card.summary}</span>
            <span className="client-card__stack">{p.card.stack}</span>
          </Link>
        ))}
      </div>
      <div className="also">
        <h3>Also</h3>
        <ul>
          {alsoBuilt.map((a) => (
            <li key={a.title}>
              <span className="also__title">{a.title}</span>
              <span className="also__text">{a.text}</span>
              <span className="mono">{a.stack}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Stack() {
  return (
    <section id="stack" className="wrap section" aria-labelledby="stack-h">
      <div className="section-head">
        <h2 id="stack-h">Stack</h2>
        <p>The tools behind the projects above.</p>
      </div>
      <div className="stack-list">
        {stack.map((row) => (
          <div key={row.group} className="stack-row">
            <h3>{row.group}</h3>
            <ul className="chips">
              {row.items.map((item) => (
                <li key={item} className={`chip${row.accent ? " chip--accent" : ""}`}>
                  <StackIcon name={item} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

// Decorative: the grouped list below names every tool for screen readers.
function LogoMarquee() {
  const logos = stack.flatMap((row) => row.items).filter((item) => stackIcons[item]);
  const track = (copy) =>
    logos.map((item) => (
      <li key={`${copy}-${item}`} className={`marquee__item${copy === "b" ? " marquee__item--copy" : ""}`}>
        <StackIcon name={item} size={28} />
        <span>{item}</span>
      </li>
    ));

  return (
    <div className="marquee" data-intro aria-hidden="true">
      <ul className="marquee__track">
        {track("a")}
        {track("b")}
      </ul>
    </div>
  );
}

function Experience() {
  return (
    <section id="experience" className="band" aria-labelledby="exp-h">
      <div className="wrap">
        <div className="section-head">
          <h2 id="exp-h">Experience</h2>
        </div>
        <ol className="timeline">
          {experience.map((e) => (
            <li key={e.title}>
              <p className="timeline__period">{e.period}</p>
              <div className="timeline__body">
                <h3>{e.title}</h3>
                <p>{e.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="timeline-foot">{education}</p>
        <h3 className="certs__title">Certifications</h3>
        <ul className="certs">
          {certifications.map((c) => (
            <li key={`${c.title}-${c.issuer}`}>
              <span className="certs__name">{c.title}</span>
              <span className="certs__issuer">
                {c.issuer}
                {c.year && ` · ${c.year}`}
              </span>
              <span className="certs__links">
                {c.links.map((l) => (
                  <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">
                    {l.label} <span aria-hidden="true">↗</span>
                  </a>
                ))}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="wrap about" aria-labelledby="about-h">
      <img src={profile.photo} alt={`Portrait of ${profile.name}`} width="300" height="375" loading="lazy" />
      <div className="about__body">
        <h2 id="about-h">About</h2>
        <p>
          I started out fixing computers and teaching science. Both taught me that technology only matters if the person
          on the other end can use it.
        </p>
        <p>
          Now I like problems where structure matters: data that has to be right, payments that can’t double-charge, and
          apps that keep working on a slow connection.
        </p>
        <p>
          I build with AI coding agents every day. They let me move fast, but I still review, test and own every line
          that ships.
        </p>
        <p className="about__aside">
          Away from the keyboard: chess and crossword puzzles. At the keyboard: usually pair-programming with an AI agent.
        </p>
      </div>
    </section>
  );
}
