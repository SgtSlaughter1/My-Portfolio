import { useEffect, useState } from "react";
import Link from "./Link";
import ThemeToggle from "./ThemeToggle";
import { profile } from "../data/profile";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#ai", label: "AI" },
  { href: "/#stack", label: "Stack" },
  { href: "/#experience", label: "Experience" },
  { href: "/#about", label: "About" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="wrap site-header__inner">
        <Link to="/" className="brand" onClick={close}>
          {profile.name}
        </Link>
        <button
          type="button"
          className="nav__toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Close" : "Menu"}
        </button>
        <nav id="site-nav" aria-label="Primary" className={`nav${open ? " is-open" : ""}`}>
          {links.map((l) => (
            <Link key={l.href} to={l.href} onClick={close}>
              {l.label}
            </Link>
          ))}
          <Link to="/#contact" className="pill" onClick={close}>
            Get in touch
          </Link>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
