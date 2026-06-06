"use client";

import { motion } from "framer-motion";

export default function ArtistSection() {
  const timeline = [
    { year: "1943", desc: "Born in Tongyeong, a coastal city in South Korea." },
    { year: "1969", desc: "Emerged as a leading figure in the Korean avant-garde group AG (Avant-Garde)." },
    { year: "1971–75", desc: "Participated in Paris Biennale (1971, 1973, 1975), establishing international presence." },
    { year: "1981", desc: "Received the Excellence Award at the 2nd Henry Moore Grand Prize Exhibition." },
    { year: "1995", desc: "Presented at the Parallel Exhibition of the Venice Biennale." },
    { year: "2007", desc: "First Korean artist to exhibit solo at the Jardin du Palais-Royal in Paris. Received France's Chevalier de l'Ordre des Arts et des Lettres." },
    { year: "2026", desc: "Presents 'Harnessed From Nature' solo exhibition in Venice." },
  ];

  return (
    <section
      id="artist"
      className="py-24 md:py-36 bg-[#F5F2EB] text-[#0C0C0C] relative border-t border-black/5"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Image & War Scar Intro */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.3em] text-brand-rust font-bold mb-4">
                The Master of Anti-Sculpture
              </p>
              <h2 className="font-serif text-4xl md:text-6xl font-bold tracking-tight uppercase leading-none">
                Shim Moon-Seup
              </h2>
            </div>

            <div className="border border-black/10 bg-white p-2.5 shadow-lg relative group overflow-hidden">
              <img
                src="/images/Shim Moon-Seup in his Tongyeong studio.png"
                alt="Shim Moon-Seup and Emmanuel Perrotin"
                className="w-full h-80 object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
              />
              <span className="block mt-2 text-[9px] font-mono text-[#0C0C0C]/50 uppercase tracking-widest text-center">
                Shim Moon-Seup in his Tongyeong studio
              </span>
            </div>

            <div className="bg-[#0C0C0C]/5 p-6 border-l-4 border-[#0C0C0C]/30 space-y-3">
              <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-brand-rust">
                Trauma and Reconstruction
              </h4>
              <p className="text-xs md:text-sm text-[#0C0C0C]/70 leading-relaxed font-light">
                "Within his scarred, eroded surfaces lies the irreparable trauma of the Korean War, which the artist lived through. His iconic 1972 work, 'Relation (Place)'—where paper is violently split in two—re-evokes this historical wound, finding painful resonance in today's global conflicts."
              </p>
            </div>
          </div>

          {/* Right Column: Narrative & Timeline */}
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-6 text-base md:text-lg text-[#0C0C0C]/80 font-light leading-relaxed">
              <p>
                Shim Moon-Seup (b. 1943) is a pioneer of modern Korean sculpture whose practice has consistently challenged the traditional boundaries of medium and genre. Emerging in the late 1960s within the Korean avant-garde movement AG, he launched a radical aesthetic inquiry into materiality, temporality, and nature.
              </p>
              <p>
                Rejecting the concept of sculpture as a finished, self-contained object created by human dominance, Shim focused on revealing the innate qualities of his materials. In his hands, the growth rings of wood, the geological fractures of stone, and the flow of water become active processes. The art continues to shift, weather, and evolve in tandem with natural time.
              </p>
            </div>

            {/* Timeline */}
            <div className="space-y-8 pt-8 border-t border-black/10">
              <h3 className="font-mono text-xs uppercase tracking-[0.3em] text-brand-rust font-bold">
                Chronology
              </h3>
              
              <div className="relative border-l border-black/10 pl-6 space-y-8 ml-2">
                {timeline.map((item, idx) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.08 }}
                    className="relative"
                  >
                    {/* Circle bullet */}
                    <span className="absolute -left-[31px] top-1.5 w-2 h-2 rounded-full bg-brand-rust" />
                    
                    <div className="flex flex-col md:flex-row md:items-start gap-1.5 md:gap-8">
                      <span className="font-serif text-lg font-bold text-brand-rust shrink-0 w-20">
                        {item.year}
                      </span>
                      <span className="text-sm md:text-base text-[#0C0C0C]/75 font-light leading-relaxed">
                        {item.desc}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
