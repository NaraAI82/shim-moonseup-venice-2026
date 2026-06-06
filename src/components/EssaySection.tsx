"use client";

import { motion } from "framer-motion";

export default function EssaySection() {
  return (
    <section
      id="essay"
      className="py-28 md:py-40 bg-[#0C0C0C] text-[#F5F2EB] relative border-t border-white/5 overflow-hidden"
    >
      {/* Abstract light texture bg */}
      <div className="absolute inset-0 bg-radial-at-b from-brand-rust/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-brand-orange font-bold">
            Artist's Reflection
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold uppercase tracking-tight">
            The Sculpting of Humanity
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as any }}
          className="font-serif text-2xl md:text-4xl text-[#F5F2EB]/95 leading-relaxed italic font-light tracking-wide max-w-3xl mx-auto"
        >
          "In the very moments we believed we were sculpting nature, in truth, nature was sculpting us."
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="space-y-6 text-sm md:text-base text-[#F5F2EB]/65 max-w-2xl mx-auto leading-relaxed font-light font-sans text-justify md:text-center"
        >
          <p>
            Amidst the rise of artificial intelligence and accelerating ecological crises, Shim Moon-Seup's oeuvre bypasses the logic of control, speed, and endless production. It proposes a different temporality based on slowness, resonance, circulation, and sensory response (感應).
          </p>
          <p>
            Elemental matters—clay, stone, wood, water, and light—are not presented as static mediums, but rather as entities containing time and vital energy (Prima Energeia). By shifting the focal point from human-centric shaping to nature-centric manifestation, the exhibition invites us to think beyond the human condition, reconnecting with the raw, forgotten rhythms of the Earth.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-6"
        >
          <span className="w-16 h-[1px] bg-brand-orange inline-block" />
          <span className="block font-mono text-[10px] text-brand-rust uppercase tracking-widest mt-2">
            Venice Biennale 2026 Essay Fragment
          </span>
        </motion.div>
      </div>
    </section>
  );
}
