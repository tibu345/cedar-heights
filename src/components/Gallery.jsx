import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { motion } from "motion/react";
import SectionHeading from "./SectionHeading.jsx";
import { galleryImages, portfolioImages } from "../data/siteData.js";
import { prefersReducedMotion, revealOnScroll } from "../utils/animation.js";

export default function Gallery() {
  const root = useRef(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      gsap.from(".gallery-card", {
        autoAlpha: 0,
        y: 38,
        clipPath: "inset(18% 0 0 0)",
        stagger: 0.11,
        duration: 0.95,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".gallery-grid",
          start: "top 78%",
          end: "bottom 18%",
          toggleActions: "play reverse play reverse",
        },
      });

      revealOnScroll(".portfolio-copy > *", ".portfolio-grid", { y: 26, stagger: 0.08, duration: 0.85 });
      revealOnScroll(".portfolio-frame", ".portfolio-grid", { y: 34, stagger: 0.14, duration: 0.9 });
    },
    { scope: root }
  );

  return (
    <section id="gallery" ref={root} className="section-shell py-16 sm:py-24">
      <SectionHeading
        eyebrow="Gallery"
        title="Large architectural visuals make the development easier to believe in."
        copy="For actual client work, these placeholders would be replaced with renders, construction progress photos, renovation before-and-afters, or agency listing imagery."
      />

      <div className="gallery-grid mt-12 grid gap-4 sm:grid-cols-2">
        {galleryImages.map((image, index) => (
          <figure
            key={image.title}
            className={`gallery-card group relative overflow-hidden rounded-sm bg-[#d8c7a8] ${
              index === 0 ? "sm:row-span-2" : ""
            }`}
          >
            <motion.img
              src={image.src}
              alt={image.title}
              whileHover={{ scale: 1.055 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className={`w-full object-cover ${
                index === 0 ? "h-full min-h-[520px]" : "h-[300px]"
              }`}
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/65">
                {image.tag}
              </p>
              <h3 className="mt-2 font-display text-2xl">{image.title}</h3>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="portfolio-grid mt-20 grid gap-4 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div className="portfolio-copy">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#806328]">
            Portfolio section
          </p>
          <h3 className="mt-4 font-display text-4xl leading-tight text-[#191714]">
            Before and after storytelling for renovation and construction firms.
          </h3>
          <p className="mt-5 leading-8 text-[#5e5549]">
            This section gives contractors a clear way to show transformation, material
            quality, and completed workmanship without sending prospects to a PDF.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {portfolioImages.map((image) => (
            <motion.figure
              key={image.label}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.32, ease: "easeOut" }}
              className="portfolio-frame relative overflow-hidden rounded-sm"
            >
              <motion.img
                src={image.src}
                alt={`${image.label} construction portfolio`}
                whileHover={{ scale: 1.045 }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                className="h-80 w-full object-cover"
              />
              <figcaption className="absolute left-4 top-4 bg-[#f7f1e6] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#806328]">
                {image.label}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
