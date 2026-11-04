import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

// One curve and one pace for every moment, so the motion reads as one system.
const EASE = "expo.out";
const DURATION = 1.1;

// Everything here plays once. With reduced motion (or no JS) the page is simply static:
// the inline script in index.html only adds `html.motion` when motion is allowed.
export function usePageMotion(rootRef, key) {
  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root || !document.documentElement.classList.contains("motion")) return;

    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      intro(root);
      wipeImages(root);
      drawTimeline(root);
    });

    return () => mm.revert();
  }, [rootRef, key]);
}

// Hero: the headline rises line by line from behind a mask, then the rest follows.
function intro(root) {
  const items = gsap.utils.toArray("[data-intro]", root);
  if (!items.length) return;

  const heading = items.find((el) => el.tagName === "H1");
  const rest = items.filter((el) => el !== heading);
  const tl = gsap.timeline({ defaults: { ease: EASE, duration: DURATION } });

  gsap.set(items, { visibility: "visible" });

  if (heading) {
    const split = SplitText.create(heading, { type: "lines", mask: "lines", linesClass: "split-line" });
    tl.from(split.lines, { yPercent: 105, stagger: 0.09, onComplete: () => split.revert() }, 0.1);
  }

  const before = rest.filter((el) => heading && el.compareDocumentPosition(heading) & Node.DOCUMENT_POSITION_FOLLOWING);
  const after = rest.filter((el) => !before.includes(el));

  if (before.length) tl.from(before, { autoAlpha: 0, y: 8, duration: 0.8 }, 0);
  if (after.length) tl.from(after, { autoAlpha: 0, y: 16, stagger: 0.08 }, 0.45);
}

// Screenshots: a soft wipe from the bottom edge while the image settles from a slight zoom.
function wipeImages(root) {
  const frames = gsap.utils.toArray(".feature__media, .client-card__media, .cs-figure > img", root);

  frames.forEach((frame) => {
    const radius = getComputedStyle(frame).borderRadius || "0px";
    const img = frame.tagName === "IMG" ? null : frame.querySelector("img");
    const tl = gsap.timeline({
      defaults: { ease: EASE, duration: 1.4 },
      scrollTrigger: { trigger: frame, start: "top 88%", once: true },
    });

    tl.fromTo(
      frame,
      { clipPath: `inset(100% 0% 0% 0% round ${radius})` },
      { clipPath: `inset(0% 0% 0% 0% round ${radius})`, clearProps: "clipPath" },
      0,
    );
    if (img) tl.fromTo(img, { scale: 1.06 }, { scale: 1, clearProps: "transform" }, 0);
  });
}

// Experience: each rule draws left to right as its role scrolls in, and the role follows it.
function drawTimeline(root) {
  gsap.utils.toArray(".timeline li", root).forEach((row) => {
    const tl = gsap.timeline({
      defaults: { ease: EASE },
      scrollTrigger: { trigger: row, start: "top 85%", once: true },
    });

    tl.fromTo(row, { "--draw": 0 }, { "--draw": 1, duration: 1.2 }, 0).from(
      row.children,
      { autoAlpha: 0, y: 12, duration: 0.9, stagger: 0.06 },
      0.15,
    );
  });
}
