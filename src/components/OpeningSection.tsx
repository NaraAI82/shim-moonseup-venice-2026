"use client";

import { motion } from "framer-motion";
import { Users } from "lucide-react";

export default function OpeningSection() {
  const images = [
    {
      img: "/images/opening-ceremony-01.jpg",
      caption: "Exhibition Opening Ceremony on May 7th at Ca' Faccanon, Venice.",
    },
    {
      img: "/images/opening-group.jpg",
      caption: "From left: Lee Mina, Shim Moon-Seup, Lee Ufan, and Ezra Joo.",
    },
    {
      img: "/images/opening-perrotin.jpg",
      caption: "Shim Moon-Seup in conversation with international gallerist Emmanuel Perrotin.",
    },
  ];

  return (
    <section
      id="opening"
      className="py-24 md:py-36 bg-[#F5F2EB] text-[#0C0C0C] border-t border-black/5 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Title */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.3em] text-brand-rust font-bold">
            <Users size={14} />
            May 7th, 2026 Opening Preview
          </div>
          <h2 className="font-serif text-4xl md:text-6xl font-bold uppercase tracking-tight leading-none">
            Opening Reception
          </h2>
          <p className="font-serif text-xl italic text-brand-rust mt-4 leading-relaxed">
            "Art that reveals the very mechanism of nature, rather than representing it."
          </p>
        </div>

        {/* Olivier Kaeppelin Quote block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 bg-white border border-black/10 p-8 shadow-sm">
          <div className="lg:col-span-4 font-mono space-y-2">
            <span className="text-[10px] text-brand-rust uppercase tracking-widest font-bold block">
              Keynote Speaker
            </span>
            <h3 className="font-serif text-xl font-bold uppercase text-[#0C0C0C]">
              Olivier Kaeppelin
            </h3>
            <p className="text-[11px] text-[#0C0C0C]/50 uppercase tracking-wider leading-relaxed">
              ART HISTORIAN, WRITER, AND FORMER ARTISTIC DIRECTOR OF
              THE BUSAN BIENNALE (2014) & FORMER DIRECTOR OF THE MAEGHT FOUNDATION
            </p>
          </div>
          <div className="lg:col-span-8 text-base md:text-lg text-[#0C0C0C]/75 leading-relaxed font-light border-l-0 lg:border-l lg:pl-8 border-black/10">
            "Shim Moon-Seup's work represents an art that does not merely reproduce the likeness of nature. Instead, it lays down the conditions so that the processes of nature—erosion, gravity, temperature, fluidity—can reveal themselves directly in the space. It is a vital manifestation of generative sculpting."
          </div>
        </div>

        {/* Polaroid Style Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {images.map((item, idx) => (
            <motion.div
              key={item.img}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="bg-white border border-black/10 p-4 shadow-md flex flex-col justify-between group hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="aspect-[4/3] bg-neutral-100 overflow-hidden relative border border-black/5">
                <img
                  src={item.img}
                  alt={item.caption}
                  className={`w-full h-full ${
                    idx === 2 ? "object-contain object-center" : "object-cover"
                  } filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-out`}
                />
              </div>
              <div className="pt-6 pb-2">
                <p className="font-mono text-xs text-[#0C0C0C]/70 leading-relaxed font-light">
                  {item.caption}
                </p>
                <div className="mt-4 font-mono text-[9px] text-[#0C0C0C]/30 uppercase tracking-widest text-right">
                  Ca' Faccanon · 0{idx + 1}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
