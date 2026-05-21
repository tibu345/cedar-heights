import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { prefersReducedMotion } from "../utils/animation.js";

export default function SectionHeading({ eyebrow, title, copy, align = "left", inverted = false }) {
  const root = useRef(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      gsap.from(".heading-item", {
        autoAlpha: 0,
        y: 22,
        duration: 0.85,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: root.current,
          start: "top 84%",
          end: "bottom 22%",
          toggleActions: "play reverse play reverse",
        },
      });

      gsap.fromTo(
        ".gold-line",
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.1,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: root.current,
            start: "top 84%",
            end: "bottom 22%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    },
    { scope: root }
  );

  return (
    <div ref={root} className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <p
        className={`heading-item text-sm font-semibold uppercase tracking-[0.18em] ${
          inverted ? "text-[#c6a75b]" : "text-[#806328]"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`heading-item mt-4 font-display text-4xl leading-tight sm:text-5xl ${
          inverted ? "text-white" : "text-[#191714]"
        }`}
      >
        {title}
      </h2>
      {copy && (
        <p className={`heading-item mt-5 text-lg leading-8 ${inverted ? "text-white/68" : "text-[#5e5549]"}`}>
          {copy}
        </p>
      )}
      <div
        className={`gold-line mt-7 h-px w-28 bg-[#9a7a35] ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </div>
  );
}
