"use client";

import { motion } from "framer-motion";

export default function ExhibitionSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as any,
      },
    },
  };

  return (
    <section
      id="exhibition"
      className="py-24 md:py-36 bg-[#F5F2EB] text-[#0C0C0C] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
        >
          {/* Left Heading */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <motion.p
              variants={itemVariants}
              className="text-xs font-mono uppercase tracking-[0.3em] text-brand-rust font-bold mb-4"
            >
              Exhibition Frame
            </motion.p>
            <motion.h2
              variants={itemVariants}
              className="font-serif text-4xl md:text-6xl font-bold tracking-tight uppercase leading-[1.05]"
            >
              Harnessed<br />
              From Nature
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mt-6 text-sm md:text-base text-[#0C0C0C]/60 font-mono uppercase tracking-widest"
            >
              Ca' Faccanon, Venice
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-12 border-l-4 border-brand-rust pl-6 max-w-sm"
            >
              <p className="text-sm italic text-[#0C0C0C]/80 leading-relaxed">
                "To harness from nature is not to dominate, but to invite the organic flows, currents, and cycles of nature to reveal themselves."
              </p>
            </motion.div>
          </div>

          {/* Right Text Content */}
          <div className="lg:col-span-7 space-y-8 text-base md:text-lg text-[#0C0C0C]/80 font-light leading-relaxed">
            <motion.p variants={itemVariants} className="text-xl md:text-2xl font-serif italic text-brand-rust leading-snug">
              Echoing the 61st Venice Biennale's thematic frame, "In Minor Keys," the exhibition offers a quiet, profound counterpoint to the chaotic realities of contemporary times.
            </motion.p>

            <motion.div variants={itemVariants} className="space-y-6">
              <p>
                Organized during the historic art event in Venice, the solo exhibition of Shim Moon-Seup at Ca' Faccanon brings together over 28 significant works. Spanning sculpture, painting, and installations, it traces the artist's lifelong quest to look beyond traditional modes of making.
              </p>
              <p>
                The theme proposed by the artistic director of this edition of the Biennale, Koyo Kouoh, is <strong>"In Minor Keys."</strong> It calls for an attention to discrete frequencies, fragile narratives, and silent acts of resistance, rather than grand declarations. Shim Moon-Seup's conceptual practice of <strong>"Anti-Sculpture"</strong> has carried out this sense for over half a century.
              </p>
              <p>
                His works do not assert massive, static forms in space. Instead, they expose the raw, shifting state of materials—where wood, clay, stone, and water interact in relationships of tension, gravity, and slow ecological time. It is a space designed not for passive observation, but for immersive sensory resonance.
              </p>
            </motion.div>

            {/* In-text media element */}
            <motion.div
              variants={itemVariants}
              className="pt-6 relative group overflow-hidden border border-black/10 bg-[#0C0C0C]/5 p-2"
            >
              <img
                src="/images/exhibition-installation-01.jpg"
                alt="Exhibition Installation Scene"
                className="w-full h-80 object-cover filter contrast-105 hover:scale-102 transition-transform duration-700"
              />
              <span className="block mt-2 text-[10px] font-mono text-[#0C0C0C]/40 uppercase tracking-widest text-center">
                Installation View: Ca' Faccanon First Floor, Venice 2026
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
