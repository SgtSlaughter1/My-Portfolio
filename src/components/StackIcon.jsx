import { stackIcons } from "../data/stackIcons";

// Relative luminance of a 6-digit hex colour (WCAG formula).
function luminance(hex) {
  const [r, g, b] = [0, 2, 4].map((i) => {
    const c = parseInt(hex.slice(i, i + 2), 16) / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

// Decorative brand mark; the visible label next to it carries the name.
export default function StackIcon({ name, size = 16, className = "" }) {
  const icon = stackIcons[name];
  if (!icon) return null;
  return (
    <svg
      className={`stack-icon ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      style={{
        "--brand-light": `#${icon.hex}`,
        // Marks too dark to read on the dark page fall back to the text colour in CSS.
        "--brand-dark": luminance(icon.hex) > 0.05 ? `#${icon.hex}` : undefined,
      }}
    >
      <path d={icon.path} fill="currentColor" fillRule={icon.evenOdd ? "evenodd" : undefined} />
    </svg>
  );
}
