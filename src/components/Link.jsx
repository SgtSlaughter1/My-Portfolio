import { navigate } from "../lib/router";

// Same-origin links navigate without a reload; everything else behaves like a normal <a>.
export default function Link({ to, onClick, ...rest }) {
  const handleClick = (e) => {
    onClick?.(e);
    if (
      e.defaultPrevented ||
      e.button !== 0 ||
      e.metaKey || e.ctrlKey || e.shiftKey || e.altKey ||
      rest.target === "_blank"
    ) {
      return;
    }
    const url = new URL(to, window.location.href);
    if (url.origin !== window.location.origin) return;

    e.preventDefault();
    if (url.pathname === window.location.pathname && url.hash) {
      document.getElementById(url.hash.slice(1))?.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState({}, "", url.hash);
      return;
    }
    navigate(to);
  };

  return <a href={to} onClick={handleClick} {...rest} />;
}
