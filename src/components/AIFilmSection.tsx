"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Film, Info, X } from "lucide-react";

export default function AIFilmSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section
      id="ai-film"
      className="py-24 md:py-36 bg-[#090909] text-[#F5F2EB] relative border-t border-white/5 overflow-hidden"
    >
      {/* Decorative blurred background orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-rust/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 border border-brand-orange/30 bg-brand-orange/5 text-brand-orange text-xs font-mono uppercase tracking-[0.25em]"
          >
            <Film size={12} />
            World First AI Essay Film & Critique
          </motion.div>
          <h2 className="font-serif text-4xl md:text-6xl font-bold uppercase tracking-tight">
            Veiling Sailing
          </h2>
          <p className="text-sm md:text-base text-brand-rust font-mono tracking-widest uppercase">
            A Video Critique by Dr. Sim Eunlog
          </p>
        </div>

        {/* Video Frame */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as any }}
          className="relative w-full aspect-video bg-[#121212] border border-white/10 group cursor-pointer overflow-hidden p-2 shadow-2xl"
          onClick={() => setIsPlaying(true)}
        >
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500 z-10" />
          
          {/* Main Film Still */}
          <img
            src="/images/veiling-sailing.png"
            alt="Veiling Sailing AI Film Still"
            className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-[1.5s] ease-out filter brightness-75 group-hover:brightness-90"
          />

          {/* Floating Play Indicator */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-brand-orange bg-[#0C0C0C]/80 backdrop-blur-sm flex items-center justify-center text-brand-orange shadow-2xl transition-all"
            >
              <Play size={32} className="fill-brand-orange ml-1.5" />
            </motion.div>
            <span className="mt-4 text-[10px] font-mono uppercase tracking-[0.3em] text-[#F5F2EB] drop-shadow-md">
              Watch Trailer
            </span>
          </div>

          <div className="absolute bottom-6 left-6 z-20 font-mono text-[9px] text-[#F5F2EB]/50 uppercase tracking-widest">
            AI Generated Critique Visuals · 2026
          </div>
        </motion.div>

        {/* Credits and Details grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-16 pt-12 border-t border-white/5 items-start">
          <div className="lg:col-span-4 space-y-4 font-mono text-xs text-[#F5F2EB]/60">
            <h3 className="text-[#F5F2EB] font-serif text-lg font-bold uppercase tracking-wider">
              Film Details
            </h3>
            <div className="grid grid-cols-3 gap-2 py-2 border-b border-white/5">
              <span className="font-semibold text-brand-rust">Director</span>
              <span className="col-span-2">Dr. Sim Eunlog</span>
            </div>
            <div className="grid grid-cols-3 gap-2 py-2 border-b border-white/5">
              <span className="font-semibold text-brand-rust">Producer</span>
              <span className="col-span-2">Nara Information</span>
            </div>
            <div className="grid grid-cols-3 gap-2 py-2 border-b border-white/5">
              <span className="font-semibold text-brand-rust">Format</span>
              <span className="col-span-2">AI-assisted visual art film</span>
            </div>
            <div className="grid grid-cols-3 gap-2 py-2">
              <span className="font-semibold text-brand-rust">Year</span>
              <span className="col-span-2">2026</span>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-6 text-sm md:text-base text-[#F5F2EB]/70 font-light leading-relaxed">
            <p>
              Featured inside the exhibition hall at Ca' Faccanon, <strong>《Veiling Sailing》</strong> is a pioneering video critique produced using generative artificial intelligence to reconstruct the sculptural world of Shim Moon-Seup.
            </p>
            <p>
              Rather than a conventional documentary, director Sim Eunlog uses AI visual synthesis to visualize the journey from the tides of Tongyeong, through the art centers of Seoul and Paris, and ultimately to the canals of Venice. The film challenges contemporary visual regimes, questioning how the tactile reality of physical "anti-sculpture" translates into digital, non-human landscapes.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="border border-white/5 p-1 bg-[#121212]/30">
                <img
                  src="/images/veiling-sailing-2.jpg"
                  alt="AI Video Still Second"
                  className="w-full h-32 object-cover filter grayscale contrast-115"
                />
              </div>
              <div className="border border-white/5 p-1 bg-[#121212]/30 flex flex-col justify-center px-4">
                <p className="text-[10px] font-mono text-brand-rust uppercase tracking-widest font-bold mb-1">
                  Concept Frame
                </p>
                <p className="text-xs text-[#F5F2EB]/50 leading-relaxed font-light">
                  AI engines simulating clay fluidity, stone weight, and wind currents in virtual spaces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal Overlay */}
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0C0C0C]/95 backdrop-blur-md flex items-center justify-center p-6"
          >
            <button
              onClick={() => setIsPlaying(false)}
              className="absolute top-8 right-8 text-[#F5F2EB] hover:text-brand-orange transition-colors p-2"
              aria-label="Close video player"
            >
              <X size={28} />
            </button>
            <div className="w-full max-w-5xl flex flex-col gap-4">
              <div className="aspect-video bg-black border border-white/10 overflow-hidden shadow-2xl">
                <iframe
                  src="https://www.youtube.com/embed/eXQI_Vy2YBU?rel=0&modestbranding=1&playsinline=1&controls=1"
                  title="Veiling Sailing (2026) YouTube player"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
              <div className="text-center space-y-1 px-2">
                <p className="font-serif text-sm md:text-base uppercase tracking-wider text-[#F5F2EB]">
                  Veiling Sailing (2026)
                </p>
                <p className="font-mono text-[10px] md:text-xs uppercase tracking-[0.25em] text-[#F5F2EB]/70">
                  AI Visual Critique Film
                </p>
                <p className="font-mono text-[10px] md:text-xs uppercase tracking-[0.25em] text-[#F5F2EB]/70">
                  Directed by Sim Eunlog
                </p>
                <p className="font-mono text-[10px] md:text-xs uppercase tracking-[0.25em] text-[#F5F2EB]/70">
                  Produced by Nara Knowledge Information Co., Ltd.
                </p>
                <p className="font-mono text-[10px] md:text-xs uppercase tracking-[0.25em] text-[#F5F2EB]/70">
                  Runtime: 8 min 05 sec
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
