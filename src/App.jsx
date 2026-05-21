import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "./components/Header.jsx";
import ScrollProgress from "./components/ScrollProgress.jsx";
import Hero from "./components/Hero.jsx";
import Stats from "./components/Stats.jsx";
import Units from "./components/Units.jsx";
import Features from "./components/Features.jsx";
import Gallery from "./components/Gallery.jsx";
import Location from "./components/Location.jsx";
import LeadForm from "./components/LeadForm.jsx";
import Footer from "./components/Footer.jsx";
import MobileBar from "./components/MobileBar.jsx";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  return (
    <div className="min-h-screen bg-[#f7f1e6] text-[#191714]">
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Stats />
        <Units />
        <Features />
        <Gallery />
        <Location />
        <LeadForm />
      </main>
      <Footer />
      <MobileBar />
    </div>
  );
}
