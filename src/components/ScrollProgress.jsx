import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "../utils/animation.js";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollProgress() {
  const progress = useRef(null);

  useGSAP(() => {
    if (prefersReducedMotion()) return;

    gsap.set(progress.current, { scaleX: 0, transformOrigin: "left center" });

    const trigger = ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        gsap.to(progress.current, {
          scaleX: self.progress,
          duration: 0.18,
          ease: "power2.out",
          overwrite: true,
        });
      },
    });

    return () => trigger.kill();
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[3px] bg-transparent">
      <div ref={progress} className="h-full w-full bg-[#c6a75b]" />
    </div>
  );
}
