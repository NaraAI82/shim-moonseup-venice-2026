"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X } from "lucide-react";

interface WorkItem {
  id: string;
  name: string;
  category: "sculpture" | "painting" | "view";
  img: string;
  year?: string;
  medium?: string;
  size?: string;
  desc?: string;
}

const WORK_CATEGORIES = ["all", "sculpture", "painting", "view"] as const;

export default function GallerySection() {
  const [filter, setFilter] = useState<(typeof WORK_CATEGORIES)[number]>("all");
  const [activeWork, setActiveWork] = useState<WorkItem | null>(null);
  const modalInfo = {
    category: "VIEW",
    title: "Harnessed From Nature, Venice",
    year: "2026",
    medium: "Spatial installation view",
    dimensions: "First Floor Hall",
    description: "Harnessed From Nature, Venice, 2026. Spatial installation view, First Floor Hall.",
  } as const;

  const works: WorkItem[] = [
    // Local High-res exhibition views & details
    {
      id: "detail-1",
      name: "Thoughts on Clay I",
      category: "sculpture",
      img: "/images/exhibition-detail-01.jpg",
      year: "2026",
      medium: "Clay, organic intervention",
      size: "Dimensions variable",
      desc: "An anti-sculptural work focusing on the raw energy of wet clay as it settles and cracks over time, showing the hand of nature.",
    },
    {
      id: "detail-2",
      name: "Thoughts on Clay II",
      category: "sculpture",
      img: "/images/exhibition-detail-02.jpg",
      year: "2026",
      medium: "Clay and wood",
      size: "120 x 80 x 65 cm",
      desc: "Exploring the dialog between earth and wood, contrasting the rigid structure of timber with the shifting density of clay.",
    },
    {
      id: "detail-3",
      name: "Wood Deity (Tongyeong)",
      category: "sculpture",
      img: "/images/exhibition-detail-03.jpg",
      year: "2026",
      medium: "Carved wood, stone base",
      size: "180 x 45 x 45 cm",
      desc: "Inspired by the indigenous nature deities of the southern Korean seas. The wood grain represents decades of natural growth.",
    },
    {
      id: "detail-4",
      name: "Relation (Tension)",
      category: "sculpture",
      img: "/images/exhibition-detail-04.jpg",
      year: "2026",
      medium: "Iron and stone",
      size: "Dimensions variable",
      desc: "A structural arrangement showcasing the gravity, weight, and balance between geological stone and manufactured iron.",
    },
    {
      id: "install-1",
      name: "Ca' Faccanon Main Pavilion",
      category: "view",
      img: "/images/exhibition-installation-01.jpg",
      year: "2026",
      medium: "Spatial installation view",
      size: "First Floor Hall",
      desc: "Exhibition view demonstrating the flow of space, integrating sculpture, painting, and the historic Venetian architecture.",
    },
    {
      id: "painting-1",
      name: "The Presentation (Venice Large)",
      category: "painting",
      img: "/images/exhibition-painting-01.jpg",
      year: "2026",
      medium: "Acrylic on canvas",
      size: "195 x 390 cm",
      desc: "A monumental painting featuring repeating, layered wave-like strokes, translating the tide cycles into physical gestures.",
    },
    // Existing Postimage links
    {
      id: "post-1",
      name: "Opening Up",
      category: "sculpture",
      img: "https://i.postimg.cc/j5LzH41q/seukeulinsyas-2026-04-04-ohu-5-22-44.png",
      year: "2018",
      medium: "Bamboo, wood, and water",
      size: "Dimensions variable",
      desc: "Water drips onto hollow bamboo rods, introducing sound and movement into the silent sculptural layout.",
    },
    {
      id: "post-2",
      name: "Relation",
      category: "sculpture",
      img: "https://i.postimg.cc/13pwBTXt/seukeulinsyas-2026-04-04-ohu-5-00-01.png",
      year: "2015",
      medium: "Stone and steel",
      size: "95 x 110 x 40 cm",
      desc: "A natural granite stone rests on a bent steel sheet, visualizing the physical dialogue between organic and industrial forces.",
    },
    {
      id: "post-3",
      name: "Thoughts on Clay (Archive)",
      category: "sculpture",
      img: "https://i.postimg.cc/J750zk0r/seukeulinsyas-2026-04-04-ohu-5-03-48.png",
      year: "2019",
      medium: "Clay",
      size: "60 x 60 x 50 cm",
      desc: "Fired and unfired clay chunks demonstrating the elemental transition from liquid earth to solid block.",
    },
    {
      id: "post-4",
      name: "Wood Deity (Archive)",
      category: "sculpture",
      img: "https://i.postimg.cc/X7xgdqHJ/seukeulinsyas-2026-04-04-ohu-5-10-38.png",
      year: "2016",
      medium: "Aged pine wood",
      size: "150 x 35 x 30 cm",
      desc: "Minimal carvings on timber, letting the tree's original growth rings and cracks tell the artistic story.",
    },
    {
      id: "post-5",
      name: "Metaphor",
      category: "sculpture",
      img: "https://i.postimg.cc/vZg6TZCV/seukeulinsyas-2026-04-04-ohu-5-12-46.png",
      year: "2014",
      medium: "Charred wood and iron wire",
      size: "80 x 120 x 40 cm",
      desc: "Wood surfaces subjected to fire, presenting the materiality of carbonized matter bound by iron wires.",
    },
    {
      id: "post-6",
      name: "The Presentation (Wave)",
      category: "painting",
      img: "https://i.postimg.cc/k44CMBp4/seukeulinsyas-2026-04-04-ohu-5-15-26.png",
      year: "2018",
      medium: "Acrylic on canvas",
      size: "114 x 195 cm",
      desc: "Repetitive rhythmic brushstrokes that evoke the constant, cyclical movement of the ocean waves.",
    },
  ];

  const filteredWorks = works.filter((w) => filter === "all" || w.category === filter);

  return (
    <section
      id="works"
      className="py-24 md:py-36 bg-[#0C0C0C] text-[#F5F2EB] border-t border-white/5 relative"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 space-y-6 lg:space-y-0">
          <div className="space-y-4">
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-brand-orange font-bold">
              Art Archive
            </p>
            <h2 className="font-serif text-4xl md:text-6xl font-bold uppercase tracking-tight leading-none">
              Exhibition Works
            </h2>
          </div>

          {/* Categories Tab */}
          <div className="flex flex-wrap gap-3 font-mono text-[11px] uppercase tracking-widest">
            {WORK_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 border transition-all duration-300 ${
                  filter === cat
                    ? "bg-[#F5F2EB] text-[#0C0C0C] border-[#F5F2EB]"
                    : "border-white/10 hover:border-white/40 text-[#F5F2EB]/60 hover:text-[#F5F2EB]"
                }`}
              >
                {cat === "view" ? "Exhibition Views" : cat === "all" ? "All Works" : `${cat}s`}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredWorks.map((work) => (
              <motion.div
                key={work.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group relative bg-[#121212] border border-white/5 p-2 aspect-[4/5] overflow-hidden cursor-pointer shadow-lg hover:border-brand-orange/30"
                onClick={() => setActiveWork(work)}
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors z-10" />
                <img
                  src={work.img}
                  alt={work.name}
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                
                {/* Overlay hover details */}
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-[#0C0C0C]/90 via-[#0C0C0C]/50 to-transparent z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="font-mono text-[10px] text-brand-orange uppercase tracking-widest block mb-1">
                    installation view
                  </span>
                  <h3 className="font-serif text-xl font-bold uppercase tracking-tight text-[#F5F2EB] flex justify-between items-center">
                    Harnessed From Nature
                    <Maximize2 size={14} className="text-[#F5F2EB]/40 group-hover:text-brand-orange transition-colors" />
                  </h3>
                  <span className="font-mono text-[10px] text-[#F5F2EB]/40 block mt-1">
                    2026
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox / Detail view */}
      <AnimatePresence>
        {activeWork && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0C0C0C]/95 backdrop-blur-md flex items-center justify-center p-6"
            onClick={() => setActiveWork(null)}
          >
            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-5xl bg-[#121212] border border-white/10 p-4 grid grid-cols-1 md:grid-cols-12 gap-8 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveWork(null)}
                className="absolute top-6 right-6 text-[#F5F2EB] hover:text-brand-orange transition-colors z-30 p-2"
                aria-label="Close details"
              >
                <X size={24} />
              </button>

              {/* Left Column: Image */}
              <div className="md:col-span-7 aspect-[4/5] bg-black border border-white/5 relative overflow-hidden flex items-center justify-center">
                <img
                  src={activeWork.img}
                  alt={activeWork.name}
                  className="w-full h-full object-cover filter brightness-95"
                />
              </div>

              {/* Right Column: Text Metadata */}
              <div className="md:col-span-5 flex flex-col justify-between py-6 pr-4">
                <div className="space-y-6">
                  <div>
                    <span className="font-mono text-xs text-brand-orange uppercase tracking-[0.2em] font-semibold">
                      {modalInfo.category}
                    </span>
                    <h3 className="font-serif text-3xl md:text-4xl font-bold uppercase tracking-tight text-[#F5F2EB] mt-1.5">
                      {modalInfo.title}
                    </h3>
                  </div>

                  <div className="space-y-3 font-mono text-xs text-[#F5F2EB]/60 border-t border-b border-white/5 py-4">
                    <div className="grid grid-cols-3">
                      <span className="text-[#F5F2EB]/40">Year</span>
                      <span className="col-span-2 text-[#F5F2EB]">{modalInfo.year}</span>
                    </div>
                    <div className="grid grid-cols-3">
                      <span className="text-[#F5F2EB]/40">Medium</span>
                      <span className="col-span-2 text-[#F5F2EB]">{modalInfo.medium}</span>
                    </div>
                    <div className="grid grid-cols-3">
                      <span className="text-[#F5F2EB]/40">Dimensions</span>
                      <span className="col-span-2 text-[#F5F2EB]">{modalInfo.dimensions}</span>
                    </div>
                  </div>

                  <p className="text-sm text-[#F5F2EB]/70 leading-relaxed font-light">
                    {modalInfo.description}
                  </p>
                </div>

                <div className="pt-6 font-mono text-[9px] text-[#F5F2EB]/30 uppercase tracking-widest">
                  Shim Moon-Seup Venice 2026 Archive
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
