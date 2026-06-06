"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Exhibition", href: "#exhibition" },
    { name: "Anti-Sculpture", href: "#anti-sculpture" },
    { name: "Artist", href: "#artist" },
    { name: "AI Film", href: "#ai-film" },
    { name: "Works", href: "#works" },
    { name: "Press", href: "#press" },
    { name: "Opening", href: "#opening" },
  ];

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          scrolled
            ? "bg-[#0C0C0C]/90 backdrop-blur-md py-4 border-white/10"
            : "bg-transparent py-6 border-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <a href="#" className="flex flex-col">
            <span className="font-serif text-xl md:text-2xl tracking-[0.2em] uppercase font-bold text-[#F5F2EB]">
              SHIM MOON-SEUP
            </span>
            <span className="text-[9px] tracking-[0.35em] uppercase text-brand-rust font-bold">
              Venice Biennale 2026
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-xs uppercase tracking-[0.2em] font-medium text-[#F5F2EB]/80 hover:text-brand-orange transition-colors duration-300 relative group py-2"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-orange transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href="#visit"
              className="text-xs uppercase tracking-[0.2em] font-bold bg-[#F5F2EB] text-[#0C0C0C] px-5 py-2.5 rounded-none hover:bg-brand-rust hover:text-[#F5F2EB] transition-all duration-300 shadow-md"
            >
              Visit
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-[#F5F2EB] p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#0C0C0C] flex flex-col justify-center px-8 md:px-16"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as any }}
          >
            <nav className="flex flex-col space-y-6 text-left">
              {navItems.map((item, idx) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="font-serif text-3xl md:text-5xl tracking-wide uppercase text-[#F5F2EB] hover:text-brand-orange transition-colors duration-300"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.08 + 0.2 }}
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.a
                href="#visit"
                onClick={() => setIsOpen(false)}
                className="inline-block self-start font-serif text-2xl uppercase tracking-widest text-[#0C0C0C] bg-[#F5F2EB] px-8 py-3 mt-6 hover:bg-brand-orange hover:text-[#F5F2EB] transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.08 + 0.2 }}
              >
                Plan Visit
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
