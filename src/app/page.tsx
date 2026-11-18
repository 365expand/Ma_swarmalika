import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MusicSection from "@/components/MusicSection";
import LearnSection from "@/components/LearnSection";
import PerformanceSection from "@/components/PerformanceSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import MusicalRibbon from "@/components/MusicalRibbon";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#181615]">
      {/* SECTION 01 — NAVIGATION */}
      <Navigation />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        {/* SECTION 02 — HERO EXPERIENCE */}
        <HeroSection />

        {/* SECTION 03 — ABOUT THE ARTIST */}
        <AboutSection />

        {/* SECTION 04 — EXPLORE HER MUSIC */}
        <MusicSection />

        {/* DYNAMIC MUSICAL RIBBON INTERLUDE */}
        <MusicalRibbon />

        {/* SECTION 05 — LEARN MUSIC WITH MILI */}
        <LearnSection />

        {/* SECTION 06 — LIVE PERFORMANCE & ORCHESTRA */}
        <PerformanceSection />

        {/* REVERSE MUSICAL RIBBON INTERLUDE */}
        <MusicalRibbon reverse />

        {/* SECTION 07 — PHOTO GALLERY */}
        <GallerySection />

        {/* SECTION 08 — CONTACT & BOOKING */}
        <ContactSection />
      </main>

      {/* SECTION 09 — FOOTER */}
      <Footer />

      {/* FLOATING WHATSAPP QUICK CHAT BUTTON */}
      <FloatingWhatsApp />
    </div>
  );
}
