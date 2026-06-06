import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ExhibitionSection from "@/components/ExhibitionSection";
import AntiSculptureSection from "@/components/AntiSculptureSection";
import ArtistSection from "@/components/ArtistSection";
import AIFilmSection from "@/components/AIFilmSection";
import PressSection from "@/components/PressSection";
import GallerySection from "@/components/GallerySection";
import OpeningSection from "@/components/OpeningSection";
import EssaySection from "@/components/EssaySection";
import VisitSection from "@/components/VisitSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative font-sans select-none">
      {/* Header bar */}
      <Header />

      {/* Main Sections */}
      <main className="flex-1 w-full">
        <HeroSection />
        <ExhibitionSection />
        <AntiSculptureSection />
        <ArtistSection />
        <AIFilmSection />
        <GallerySection />
        <PressSection />
        <OpeningSection />
        <EssaySection />
        <VisitSection />
      </main>

      {/* Footer bar */}
      <Footer />

      {/* Bottom Ticker */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#0C0C0C] border-t-2 border-brand-orange py-2 z-30 overflow-hidden whitespace-nowrap">
        <div className="inline-block animate-marquee font-mono font-bold uppercase text-[10px] tracking-[0.25em] text-brand-orange">
          SHIM MOON-SEUP : HARNESSED FROM NATURE · SOLO EXHIBITION DURING THE 61ST VENICE BIENNALE · CA' FACCANON · 8 MAY - 30 SEP 2026 ·&nbsp;
        </div>
        <div className="inline-block animate-marquee font-mono font-bold uppercase text-[10px] tracking-[0.25em] text-brand-orange">
          SHIM MOON-SEUP : HARNESSED FROM NATURE · SOLO EXHIBITION DURING THE 61ST VENICE BIENNALE · CA' FACCANON · 8 MAY - 30 SEP 2026 ·&nbsp;
        </div>
      </div>
    </div>
  );
}

