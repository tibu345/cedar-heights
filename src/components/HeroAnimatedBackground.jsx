import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { prefersReducedMotion } from "../utils/animation.js";

const windowRows = Array.from({ length: 5 });
const windowCols = Array.from({ length: 8 });

function Building({ className = "", windows = true }) {
  return (
    <div className={`absolute bottom-0 border border-white/10 bg-[#22313a]/72 shadow-2xl shadow-black/30 ${className}`}>
      {windows && (
        <div className="grid h-full grid-cols-4 gap-3 p-4 opacity-80 sm:grid-cols-5 lg:grid-cols-6">
          {windowRows.flatMap((_, row) =>
            windowCols.map((__, col) => (
              <span
                key={`${row}-${col}`}
                className={`rounded-[1px] border border-white/8 ${
                  (row + col) % 4 === 0
                    ? "bg-[#d8bd78]/45 shadow-[0_0_18px_rgba(216,189,120,0.22)]"
                    : "bg-white/10"
                }`}
              />
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default function HeroAnimatedBackground() {
  const root = useRef(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      gsap.to(".parallax-sky", {
        xPercent: -4,
        duration: 18,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".parallax-mid", {
        xPercent: 3,
        yPercent: -1.5,
        duration: 14,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".parallax-front", {
        xPercent: -2,
        yPercent: 1,
        duration: 11,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".window-glow", {
        autoAlpha: 0.45,
        duration: 2.4,
        repeat: -1,
        yoyo: true,
        stagger: 0.12,
        ease: "sine.inOut",
      });

      gsap.fromTo(
        ".light-sweep",
        { xPercent: -120, autoAlpha: 0 },
        {
          xPercent: 120,
          autoAlpha: 0.5,
          duration: 9,
          repeat: -1,
          repeatDelay: 2,
          ease: "power1.inOut",
        }
      );
    },
    { scope: root }
  );

  return (
    <div ref={root} className="pointer-events-none absolute inset-0 overflow-hidden bg-[#111513]" aria-hidden="true">
      <div className="parallax-sky absolute inset-[-6%] bg-[radial-gradient(circle_at_30%_20%,rgba(198,167,91,0.28),transparent_28%),radial-gradient(circle_at_72%_16%,rgba(255,255,255,0.14),transparent_24%),linear-gradient(135deg,#1f2927_0%,#101211_52%,#2a251d_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.028)_1px,transparent_1px)] bg-[size:90px_90px]" />

      <div className="parallax-mid absolute inset-x-[-5%] bottom-0 h-[72%]">
        <Building className="left-[6%] h-[78%] w-[18%]" />
        <Building className="left-[24%] h-[92%] w-[20%] bg-[#293741]/76" />
        <Building className="left-[47%] h-[68%] w-[18%]" />
        <Building className="left-[67%] h-[88%] w-[20%] bg-[#253239]/78" />
        <Building className="left-[86%] h-[62%] w-[16%]" />
      </div>

      <div className="parallax-front absolute inset-x-[-8%] bottom-[-2%] h-[58%]">
        <Building className="left-[0%] h-[70%] w-[22%] bg-[#172025]/86" />
        <Building className="left-[18%] h-[92%] w-[24%] bg-[#1b252b]/90" />
        <Building className="left-[40%] h-[78%] w-[20%] bg-[#151d22]/88" />
        <Building className="left-[58%] h-[96%] w-[26%] bg-[#202b31]/88" />
        <Building className="left-[82%] h-[72%] w-[22%] bg-[#172025]/88" />
      </div>

      <div className="window-glow absolute left-[14%] top-[30%] h-28 w-28 rounded-full bg-[#d8bd78]/20 blur-3xl" />
      <div className="window-glow absolute right-[18%] top-[22%] h-36 w-36 rounded-full bg-white/12 blur-3xl" />
      <div className="window-glow absolute bottom-[18%] left-[48%] h-28 w-44 rounded-full bg-[#c6a75b]/18 blur-3xl" />

      <div className="light-sweep absolute inset-y-0 w-1/3 rotate-12 bg-gradient-to-r from-transparent via-white/16 to-transparent blur-xl" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/78 via-black/28 to-black/50" />
      <div className="absolute inset-0 bg-black/22" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#f7f1e6] to-transparent" />
    </div>
  );
}
