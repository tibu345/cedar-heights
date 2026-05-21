import {
  BedDouble,
  Building2,
  Camera,
  Car,
  ConciergeBell,
  DoorOpen,
  Dumbbell,
  Eye,
  Home,
  Landmark,
  Leaf,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  SunMedium,
  Waves,
} from "lucide-react";

export const whatsappUrl = "https://wa.me/96100000000";

export const navItems = [
  { label: "Overview", href: "#overview" },
  { label: "Units", href: "#units" },
  { label: "Features", href: "#features" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: 24, suffix: "", label: "Apartments" },
  { value: 3, suffix: "", label: "Basement Levels" },
  { value: 2026, suffix: "", label: "Delivery" },
  { value: 24, suffix: "/7", label: "Security" },
];

export const units = [
  {
    title: "1 Bedroom",
    size: "85 sqm",
    price: "Starting from $180,000",
    icon: Home,
    detail: "Efficient residence with balcony, open kitchen, and practical city-living layout.",
  },
  {
    title: "2 Bedrooms",
    size: "135 sqm",
    price: "Starting from $270,000",
    icon: BedDouble,
    detail: "Family-ready plan with generous reception space, en-suite bedroom, and storage.",
  },
  {
    title: "Duplex",
    size: "220 sqm",
    price: "Price on request",
    icon: Building2,
    detail: "Signature upper-level home with private terrace potential and panoramic outlook.",
  },
];

export const features = [
  { title: "Modern lobby design", icon: ConciergeBell },
  { title: "Private underground parking", icon: Car },
  { title: "Panoramic city views", icon: Eye },
  { title: "Smart home readiness", icon: Sparkles },
  { title: "Premium finishes", icon: Landmark },
  { title: "Energy-conscious design", icon: Leaf },
];

export const services = [
  { label: "Developer websites", icon: DoorOpen },
  { label: "Project launches", icon: SunMedium },
  { label: "Renovation portfolios", icon: Camera },
  { label: "Lead generation funnels", icon: MessageCircle },
];

export const galleryImages = [
  {
    title: "Street-facing exterior",
    tag: "Architecture",
    src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Warm reception lobby",
    tag: "Interior",
    src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Open living space",
    tag: "Residence",
    src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Detailed finishes",
    tag: "Materials",
    src: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=85",
  },
];

export const portfolioImages = [
  {
    label: "Before",
    src: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1000&q=80",
  },
  {
    label: "After",
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85",
  },
];

export const locationHighlights = [
  "Minutes from Sassine Square, ABC Achrafieh, schools, and clinics.",
  "Positioned for buyers who want walkable daily life with secure private parking.",
  "Clear map, landmark, and visit-booking CTAs reduce sales-team friction.",
];

export const trustItems = [
  { label: "Gated access", icon: ShieldCheck },
  { label: "City exposure", icon: MapPin },
  { label: "Quiet finishes", icon: Waves },
];
