import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { stats } from "../data/siteData.js";
import { prefersReducedMotion, revealOnScroll } from "../utils/animation.js";

export default function Stats() {
  const root = useRef(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) {
        gsap.utils.toArray(".stat-number").forEach((number) => {
          number.textContent = Number(number.dataset.value).toLocaleString("en-US");
        });
        return;
      }

      const numbers = gsap.utils.toArray(".stat-number");
      numbers.forEach((number) => {
        const target = Number(number.dataset.value);

        const animateCounter = () => {
          const counter = { value: 0 };
          gsap.to(counter, {
            value: target,
            duration: target > 100 ? 1.45 : 1.15,
            ease: "power2.out",
            onUpdate: () => {
              number.textContent = Math.round(counter.value).toLocaleString("en-US");
            },
          });
        };

        gsap.timeline({
          scrollTrigger: {
            trigger: number,
            start: "top 86%",
            end: "bottom 18%",
            onEnter: animateCounter,
            onEnterBack: animateCounter,
            onLeaveBack: () => {
              number.textContent = "0";
            },
          },
        });
      });

      revealOnScroll(".stat-card", root.current, { y: 26, stagger: 0.12, duration: 0.8, start: "top 82%" });
    },
    { scope: root }
  );

  return (
    <section ref={root} className="reveal-section section-shell py-14 sm:py-20">
      <div className="grid border-y border-[#191714]/10 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.label}
            className="stat-card border-b border-[#191714]/10 px-5 py-8 last:border-b-0 sm:odd:border-r lg:border-b-0 lg:border-r lg:last:border-r-0"
          >
            <div className="font-display text-5xl text-[#191714]">
              <span className="stat-number" data-value={item.value}>
                0
              </span>
              {item.suffix}
            </div>
            <p className="mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#806328]">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
