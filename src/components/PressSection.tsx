"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Newspaper } from "lucide-react";

export default function PressSection() {
  const articles = [
    {
      publisher: "Galerie Perrotin",
      title: "Venice Guide 2026",
      desc: "Shim Moon-Seup is a pioneer of modern sculpture in Korea whose practice explores nature and temporality beyond fixed genres and media. Repeating brushstrokes of his paintings and the raw textures of his sculptures evoke cycles of creation and destruction, reflecting the temporality of matter.",
      link: "https://www.perrotin.com/en/events/harnessed-from-nature-2026-venise",
      date: "May 2026",
    },
    {
      publisher: "ArtMajeur Magazine",
      title: "Shim Moon-Seup à Venise",
      author: "Nicolas Sarazin",
      desc: "Tongyeong, Séoul, Paris, et aujourd'hui Venise. En plus de cinquante ans de carrière, le sculpteur coréen Shim Moon-Seup n'a jamais cherché à dominer la matière, il l'a écoutée. Harnessed From Nature, son exposition pendant la Biennale 2026, en est la démonstration la plus aboutie.",
      link: "https://www.artmajeur.com/es/magazine/2-noticias-de-arte/shim-moon-seup-en-venecia-del-8-de-mayo-al-30-de-septiembre-de-2026/340939",
      date: "5 April 2026",
    },
    {
      publisher: "ArtsHebdoMédias",
      title: "Memento vivere à Venise",
      author: "Marie-Laure Desjardins",
      desc: "An in-depth critique of the 61st Venice Biennale under the theme 'In Minor Keys'. Highlighting the most significant parallel solo exhibitions, the critique focuses on Lee Ufan and Shim Moon-Seup as the core voices of Korean contemporary art, bringing profound sensory resonance to Venice.",
      link: "https://www.artshebdomedias.com/article/memento-vivere-a-venise/",
      date: "14 May 2026",
    },
    {
      publisher: "The JoongAng",
      title: "Shim Moon-Seup's Venice solo exhibition at Ca' Faccanon",
      desc: "Domestic coverage highlighting Shim Moon-Seup's solo exhibition during the Venice Biennale. Reviewing 28 sculptural and painterly works that bridge the geological time of Tongyeong sea with the watery channels of Venice, and calling it a monumental achievement.",
      link: "https://www.joongang.co.kr/article/25431691",
      date: "May 2026",
    },
  ];

  return (
    <section
      id="press"
      className="py-24 md:py-36 bg-[#F5F2EB] text-[#0C0C0C] border-t border-black/5 relative"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.3em] text-brand-rust font-bold">
              <Newspaper size={14} />
              International Coverage & Reviews
            </div>
            <h2 className="font-serif text-4xl md:text-6xl font-bold uppercase tracking-tight leading-none">
              Press & Critical Reception
            </h2>
          </div>
          <p className="mt-4 md:mt-0 font-mono text-xs text-[#0C0C0C]/50 uppercase tracking-widest max-w-xs leading-relaxed">
            Reviews and updates from leading contemporary art magazines in Europe and globally.
          </p>
        </div>

        {/* 2x2 Grid of Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((art, idx) => (
            <motion.div
              key={art.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group border border-black/10 bg-white p-8 md:p-10 hover:border-brand-rust transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-md"
            >
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <span className="font-mono text-xs uppercase tracking-widest text-brand-rust font-bold">
                    {art.publisher}
                  </span>
                  <span className="font-mono text-[10px] text-[#0C0C0C]/40">
                    {art.date}
                  </span>
                </div>
                
                <h3 className="font-serif text-2xl font-bold uppercase tracking-tight leading-snug group-hover:text-brand-orange transition-colors">
                  {art.title}
                </h3>
                
                {art.author && (
                  <p className="font-mono text-[11px] text-[#0C0C0C]/50 uppercase tracking-wider">
                    By {art.author}
                  </p>
                )}
                
                <p className="text-sm text-[#0C0C0C]/70 leading-relaxed font-light font-sans">
                  "{art.desc}"
                </p>
              </div>

              <div className="pt-8 flex justify-between items-center border-t border-black/5 mt-8">
                <span className="text-[10px] font-mono text-[#0C0C0C]/40 uppercase tracking-widest">
                  Official Archive Link
                </span>
                <a
                  href={art.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 font-mono text-xs text-brand-rust group-hover:text-brand-orange font-bold uppercase tracking-wider transition-colors"
                >
                  Read Article
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature Press Image block */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border border-black/10 bg-white p-4">
          <div className="lg:col-span-7">
            <img
              src="/images/press-perrotin-guide.jpg"
              alt="Perrotin Venice Guide featuring Shim Moon-Seup"
              className="w-full h-80 object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="lg:col-span-5 px-6 py-4 space-y-4">
            <span className="font-mono text-[10px] text-brand-rust uppercase tracking-[0.25em] font-bold">
              Visual Document
            </span>
            <h3 className="font-serif text-xl font-bold uppercase tracking-wider text-[#0C0C0C]">
              Perrotin Venice Guide page
            </h3>
            <p className="text-xs md:text-sm text-[#0C0C0C]/65 leading-relaxed font-light">
              Photo of the official Galerie Perrotin Venice Guide printed for the 61st Venice Biennale, highlighting Shim Moon-Seup's solo presentation at Ca' Faccanon.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
