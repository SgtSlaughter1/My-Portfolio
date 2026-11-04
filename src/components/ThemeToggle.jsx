import { useSyncExternalStore } from "react";

const COLORS = { light: "#f7f7f5", dark: "#131518" };

function readStored() {
  try {
    return localStorage.getItem("theme");
  } catch {
    return null;
  }
}

function apply(theme) {
  document.documentElement.dataset.theme = theme;
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.content = COLORS[theme];
}

// The theme lives on <html data-theme>, set before paint by the inline script in
// index.html. Components subscribe to it; the prerendered HTML assumes light.
const listeners = new Set();
const getTheme = () => (document.documentElement.dataset.theme === "dark" ? "dark" : "light");
const getServerTheme = () => "light";

function subscribe(callback) {
  listeners.add(callback);
  // Follow the system setting until the visitor picks a theme themselves.
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  const onSystemChange = (e) => {
    if (readStored()) return;
    setTheme(e.matches ? "dark" : "light");
  };
  media.addEventListener("change", onSystemChange);
  return () => {
    listeners.delete(callback);
    media.removeEventListener("change", onSystemChange);
  };
}

function setTheme(theme) {
  apply(theme);
  listeners.forEach((l) => l());
}

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getTheme, getServerTheme);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* private mode: the choice lasts for this visit only */
    }
  };

  const isDark = theme === "dark";
  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Light theme" : "Dark theme"}
    >
      {isDark ? (
        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <path
            d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M5.3 18.7l1.6-1.6M17.1 6.9l1.6-1.6"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path
            d="M20 14.6A8.2 8.2 0 0 1 9.4 4a8.2 8.2 0 1 0 10.6 10.6Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}
