import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { prefersReducedMotion } from "../utils/animation.js";

export default function HeroVideoBackground({
  src,
  poster,
  overlayClassName = "bg-black/34",
  className = "",
}) {
  const root = useRef(null);
  const media = useRef(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      gsap.fromTo(
        media.current,
        { yPercent: -2, scale: 1.04 },
        {
          yPercent: 5,
          scale: 1.1,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.8,
          },
        }
      );
    },
    { scope: root }
  );

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(query.matches);

    updatePreference();
    query.addEventListener("change", updatePreference);

    return () => query.removeEventListener("change", updatePreference);
  }, []);

  const showPoster = reducedMotion || videoFailed || !src;

  return (
    <div ref={root} className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {showPoster ? (
        <img ref={media} src={poster} alt="" className="h-full w-full object-cover" />
      ) : (
        <>
          <img
            src={poster}
            alt=""
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              videoReady ? "opacity-0" : "opacity-100"
            }`}
          />
          <video
            ref={media}
            className={`h-full w-full object-cover transition-opacity duration-700 ${
              videoReady ? "opacity-100" : "opacity-0"
            }`}
            poster={poster}
            muted
            autoPlay
            loop
            playsInline
            preload="metadata"
            onCanPlay={() => setVideoReady(true)}
            onError={() => setVideoFailed(true)}
          >
            <source src={src} type="video/mp4" />
          </video>
        </>
      )}
      <div className={`absolute inset-0 ${overlayClassName}`} />
      <div className="absolute inset-0 bg-gradient-to-r from-black/72 via-black/20 to-black/18" />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#f7f1e6] to-transparent" />
    </div>
  );
}
