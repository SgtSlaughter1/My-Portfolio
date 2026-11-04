import { useEffect, useState } from "react";

const NAV_EVENT = "app:navigate";
const isBrowser = typeof window !== "undefined";

export function navigate(to, { replace = false } = {}) {
  if (!isBrowser) return;
  const url = new URL(to, window.location.href);
  const method = replace ? "replaceState" : "pushState";
  window.history[method]({}, "", url.pathname + url.search + url.hash);
  window.dispatchEvent(new Event(NAV_EVENT));
}

// Current pathname, re-rendering on back/forward and on navigate().
export function usePath(initialPath = "/") {
  const [path, setPath] = useState(() => (isBrowser ? window.location.pathname : initialPath));

  useEffect(() => {
    const sync = () => setPath(window.location.pathname);
    window.addEventListener("popstate", sync);
    window.addEventListener(NAV_EVENT, sync);
    return () => {
      window.removeEventListener("popstate", sync);
      window.removeEventListener(NAV_EVENT, sync);
    };
  }, []);

  return path;
}

