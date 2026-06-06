"use client";

import { motion } from "framer-motion";
import { Sparkles, Layers, Waves, Flame } from "lucide-react";

export default function AntiSculptureSection() {
  const principles = [
    {
      icon: <Sparkles size={20} className="text-brand-orange" />,
      title: "Anti-Sculpture (반조각)",
      desc: "Not a negation of sculpture, but a shift in its essence. It rejects the imposition of the artist's absolute will, allowing the material and space to converse freely.",
    },
    {
      icon: <Layers size={20} className="text-brand-orange" />,
      title: "Prima Energeia (氣)",
      desc: "Focusing on the unseen forces within matter rather than its finished external form. Tracing a transition from static substance to generative energy.",
    },
    {
      icon: <Waves size={20} className="text-brand-orange" />,
      title: "Cyclical Time",
      desc: "Deeply influenced by the sea of Tongyeong, where waves advance and recede in endless cycle. Art is viewed as a medium of natural reincarnation.",
    },
    {
      icon: <Flame size={20} className="text-brand-orange" />,
      title: "The Setter of Conditions",
      desc: "The artist steps down from the role of a dominant creator to become a setter of conditions, enabling the forces of nature to carry out the act of sculpting.",
    },
  ];

  return (
    <section
      id="anti-sculpture"
      className="py-24 md:py-36 bg-[#0C0C0C] text-[#F5F2EB] relative border-t border-white/5"
    >
      <div className="absolute inset-0 bg-radial-at-t from-brand-rust/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Main Info */}
          <div className="lg:col-span-5 space-y-6">
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-brand-orange font-bold">
              Artistic Philosophy
            </p>
            <h2 className="font-serif text-4xl md:text-6xl font-bold tracking-tight uppercase leading-none">
              The Philosophy of<br />
              <span className="text-brand-orange italic font-light">Anti-Sculpture</span>
            </h2>
            <p className="text-base md:text-lg text-[#F5F2EB]/70 font-light leading-relaxed pt-4">
              Where Western modernism opened up space by slicing the canvas (as Lucio Fontana did), Shim Moon-Seup weaves natural time and organic energy back into the very core of matter.
            </p>
            
            <div className="hidden lg:block pt-8 relative overflow-hidden aspect-square border border-white/10 p-2">
              <img
                src="/images/exhibition-detail-01.jpg"
                alt="Clay Work Detail"
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
              />
              <span className="block mt-2 text-[9px] font-mono text-white/30 uppercase tracking-widest text-center">
                Thoughts on Clay (Series) — Material detail
              </span>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((p, idx) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] as any }}
                className="border border-white/10 bg-[#121212]/40 backdrop-blur-sm p-8 hover:border-brand-orange/40 hover:bg-[#121212]/80 transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 border border-white/10 flex items-center justify-center mb-6 bg-white/5">
                    {p.icon}
                  </div>
                  <h3 className="font-serif text-xl font-semibold uppercase tracking-wider mb-4">
                    {p.title}
                  </h3>
                  <p className="text-xs md:text-sm text-[#F5F2EB]/60 leading-relaxed font-light">
                    {p.desc}
                  </p>
                </div>
                <div className="pt-8 text-right font-mono text-[9px] text-[#F5F2EB]/30">
                  0{idx + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
