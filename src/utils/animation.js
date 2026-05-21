import gsap from "gsap";

export function prefersReducedMotion() {
  if (typeof window === "undefined") return true;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function revealOnScroll(targets, trigger, options = {}) {
  return gsap.from(targets, {
    autoAlpha: 0,
    y: options.y ?? 34,
    scale: options.scale ?? 1,
    duration: options.duration ?? 0.9,
    stagger: options.stagger ?? 0.1,
    ease: options.ease ?? "power3.out",
    scrollTrigger: {
      trigger,
      start: options.start ?? "top 78%",
      end: options.end ?? "bottom 18%",
      toggleActions: options.toggleActions ?? "play reverse play reverse",
    },
  });
}

export function revealLines(targets, options = {}) {
  return gsap.from(targets, {
    yPercent: 110,
    autoAlpha: 0,
    duration: options.duration ?? 1,
    stagger: options.stagger ?? 0.13,
    ease: options.ease ?? "expo.out",
  });
}
