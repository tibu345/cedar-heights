import { CalendarDays, Home, MapPin, MessageCircle } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import AnimatedButton from "./AnimatedButton.jsx";
import HeroVideoBackground from "./HeroVideoBackground.jsx";
import { trustItems, whatsappUrl } from "../data/siteData.js";
import { prefersReducedMotion, revealLines } from "../utils/animation.js";

const heroVideo = {
  src: `${import.meta.env.BASE_URL}videos/cedar-heights-hero.mp4`,
  poster:
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=88",
};

export default function Hero() {
  useGSAP(() => {
    if (prefersReducedMotion()) {
      gsap.set(".site-header", { autoAlpha: 1 });
      return;
    }

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.to(".site-header", { autoAlpha: 1, y: 0, duration: 0.75 })
      .from(".hero-kicker", { autoAlpha: 0, y: 18, duration: 0.75 }, "-=0.32")
      .add(revealLines(".hero-title-line"), "-=0.28")
      .from(".hero-copy", { autoAlpha: 0, y: 24, duration: 0.85 }, "-=0.55")
      .from(".hero-action", { autoAlpha: 0, y: 18, stagger: 0.1, duration: 0.65 }, "-=0.42")
      .from(".hero-trust", { autoAlpha: 0, y: 18, stagger: 0.12, duration: 0.6 }, "-=0.55");
  }, []);

  return (
    <section id="overview" className="relative isolate min-h-[100svh] overflow-hidden bg-[#191714]">
      <HeroVideoBackground
        src={heroVideo.src}
        poster={heroVideo.poster}
        overlayClassName="bg-black/28"
      />

      <div className="section-shell hero-cover-layout relative z-10 flex min-h-[100svh] flex-col items-center justify-center pb-28 pt-24 text-center sm:pb-32 sm:pt-28 lg:pb-36">
        <div className="max-w-6xl">
          <div className="hero-kicker mx-auto mb-5 inline-flex max-w-full items-center gap-2 border border-white/20 bg-black/18 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#e6d39d] backdrop-blur-md sm:mb-7 sm:px-4 sm:text-sm sm:tracking-[0.18em]">
            <MapPin size={17} />
            Achrafieh, Beirut
          </div>
          <h1 className="hero-title hero-cover-title font-display mx-auto max-w-5xl text-balance text-white">
            <span className="hero-line">
              <span className="hero-title-line inline-block">Cedar Heights,</span>
            </span>
            <span className="hero-line">
              <span className="hero-title-line inline-block">modern residences</span>
            </span>
            <span className="hero-line">
              <span className="hero-title-line inline-block">for city living</span>
            </span>
          </h1>
          <p className="hero-copy hero-cover-copy mx-auto mt-5 max-w-3xl text-base leading-7 text-white/78 sm:mt-7 sm:text-lg sm:leading-8">
            A premium project website concept built to help real estate and construction
            companies present their work, capture inquiries, and book site visits.
          </p>
          <div className="hero-actions hero-cover-actions mx-auto mt-7 grid max-w-4xl gap-2.5 sm:mt-12 sm:grid-cols-3 sm:gap-3">
            <AnimatedButton href="#contact" variant="lightOutline" className="hero-action min-w-0 border-white/30 bg-black/18">
              <CalendarDays size={17} /> Plan a Visit
            </AnimatedButton>
            <AnimatedButton href="#units" variant="lightOutline" className="hero-action min-w-0 border-white/30 bg-black/18">
              <Home size={17} /> View Units
            </AnimatedButton>
            <AnimatedButton href={whatsappUrl} variant="lightOutline" className="hero-action min-w-0 border-white/30 bg-black/18" target="_blank" rel="noreferrer">
              <MessageCircle size={17} /> WhatsApp
            </AnimatedButton>
          </div>
        </div>

        <div className="hero-trust-wrap mt-10 w-full max-w-3xl lg:absolute lg:inset-x-4 lg:bottom-10 lg:mx-auto lg:mt-0">
          <div className="grid grid-cols-3 gap-2 border-t border-white/15 pt-4">
            {trustItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="hero-trust flex min-h-14 flex-col justify-center gap-1.5 border border-white/16 bg-black/18 p-2 text-white backdrop-blur-md sm:min-h-16 sm:gap-2 sm:p-3"
                >
                  <Icon className="text-[#d8bd78]" size={18} />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-white/72 sm:text-xs sm:tracking-[0.12em]">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
