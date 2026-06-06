"use client";

import { motion } from "framer-motion";
import { ArrowDown, Calendar, MapPin } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#070707] overflow-hidden py-24 md:py-32">
      {/* Background Media container */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#070707]/90 via-[#070707]/40 to-[#0C0C0C]" />
        {/* We can use the exhibition poster or a high-quality aesthetic placeholder/background */}
        <img
          src="/images/venue-exterior.jpg"
          alt="Ca' Faccanon Venice"
          className="w-full h-full object-cover opacity-25 scale-105 filter grayscale contrast-125"
          sizes="100vw"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left main text column */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as any }}
            className="inline-flex items-center gap-3 px-3 py-1.5 border border-brand-orange/30 bg-brand-orange/5 text-brand-orange text-xs font-mono uppercase tracking-[0.25em] mb-8 self-start"
          >
            <span className="w-1.5 h-1.5 bg-brand-orange rounded-full animate-pulse" />
            Venice Biennale 2026 Solo Exhibition
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] as any }}
            className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tight uppercase text-[#F5F2EB]"
          >
            SHIM<br />
            MOON-SEUP
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] as any }}
            className="mt-6"
          >
            <p className="font-serif italic text-2xl md:text-4xl text-brand-rust tracking-wide">
              Harnessed From Nature
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] as any }}
            className="mt-8 text-base md:text-lg text-[#F5F2EB]/70 max-w-xl leading-relaxed font-light"
          >
            Discover the seminal solo exhibition of Shim Moon-Seup, a pioneer of Korean avant-garde. Set against the watery landscape of Venice, this exhibition explores the concept of "Anti-Sculpture" through primary elements of clay, stone, wood, water, and light.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="mt-12 flex flex-wrap gap-4"
          >
            <a
              href="#exhibition"
              className="px-8 py-3.5 bg-brand-rust hover:bg-brand-orange text-[#F5F2EB] uppercase text-xs tracking-[0.2em] font-bold transition-all duration-300"
            >
              Explore Exhibition
            </a>
            <a
              href="#ai-film"
              className="px-8 py-3.5 border border-white/20 hover:border-white text-[#F5F2EB] uppercase text-xs tracking-[0.2em] font-bold transition-all duration-300 bg-white/5"
            >
              Watch AI Film
            </a>
          </motion.div>
        </div>

        {/* Right poster & details column */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center lg:pl-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] as any }}
            className="relative w-full max-w-md aspect-[3/4] bg-[#121212] border border-white/10 p-3 shadow-2xl group"
          >
            <div className="absolute inset-0 bg-[#E2583E]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <img
              src="/images/exhibition-poster.png"
              alt="Harnessed From Nature Exhibition Poster"
              className="w-full h-full object-cover filter brightness-90 hover:brightness-100 transition-all duration-700"
            />
          </motion.div>

          {/* Quick info block below poster */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="mt-8 w-full max-w-md grid grid-cols-2 gap-4 font-mono text-xs text-[#F5F2EB]/60 bg-[#121212]/50 backdrop-blur-sm p-4 border border-white/5"
          >
            <div className="flex gap-2.5 items-start">
              <Calendar size={14} className="text-brand-rust shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-[#F5F2EB] mb-0.5">DATES</p>
                <p>8 May —</p>
                <p>30 September 2026</p>
              </div>
            </div>
            <div className="flex gap-2.5 items-start">
              <MapPin size={14} className="text-brand-rust shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-[#F5F2EB] mb-0.5">VENUE</p>
                <p>Ca' Faccanon</p>
                <p>Venice, Italy</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/40 hover:text-brand-orange transition-colors">
        <span className="text-[9px] uppercase tracking-[0.3em] font-mono">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </div>
    </section>
  );
}
