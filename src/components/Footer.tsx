"use client";

import { Mail, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-white/5 text-[#F5F2EB] py-16 md:py-24 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-brand-blue/5 blur-[150px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[300px] h-[300px] rounded-full bg-brand-rust/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          {/* Brand/Quote */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 lg:space-y-0">
            <div>
              <span className="font-serif text-2xl md:text-3xl tracking-[0.15em] uppercase font-bold text-[#F5F2EB] block">
                SHIM MOON-SEUP
              </span>
              <span className="text-xs tracking-[0.3em] uppercase text-brand-rust font-semibold block mt-1">
                Harnessed From Nature
              </span>
              <p className="mt-6 text-sm text-[#F5F2EB]/60 max-w-md leading-relaxed">
                &quot;We believed that we were sculpting nature, but in fact, nature was sculpting us.&quot;
              </p>
            </div>
            <div className="text-xs text-[#F5F2EB]/40 font-mono">
              Solo Exhibition during the 61st Venice Biennale Art Exhibition 2026.
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 flex flex-col space-y-4 font-mono text-xs">
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-brand-rust font-bold">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#exhibition" className="text-[#F5F2EB]/60 hover:text-brand-orange transition-colors">
                  Exhibition Concept
                </a>
              </li>
              <li>
                <a href="#anti-sculpture" className="text-[#F5F2EB]/60 hover:text-brand-orange transition-colors">
                  Anti-Sculpture Thinking
                </a>
              </li>
              <li>
                <a href="#artist" className="text-[#F5F2EB]/60 hover:text-brand-orange transition-colors">
                  The Artist
                </a>
              </li>
              <li>
                <a href="#ai-film" className="text-[#F5F2EB]/60 hover:text-brand-orange transition-colors">
                  Veiling Sailing (AI Film)
                </a>
              </li>
              <li>
                <a href="#works" className="text-[#F5F2EB]/60 hover:text-brand-orange transition-colors">
                  Selected Works
                </a>
              </li>
              <li>
                <a href="#press" className="text-[#F5F2EB]/60 hover:text-brand-orange transition-colors">
                  International Press
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-brand-rust font-bold">
              Contact Information
            </h4>
            <div className="space-y-3 font-mono text-xs text-[#F5F2EB]/70">
              <p className="flex items-center gap-3">
                <Globe size={14} className="text-brand-rust" />
                <a
                  href="https://shimmoonseup.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-orange transition-colors"
                >
                  shimmoonseup.org
                </a>
              </p>
              <p className="flex items-center gap-3">
                <Mail size={14} className="text-brand-rust" />
                <a href="mailto:naraaifilm82@gmail.com" className="hover:text-brand-orange transition-colors">
                  naraaifilm82@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-[11px] font-mono text-[#F5F2EB]/30 space-y-4 md:space-y-0">
          <p>© 2026 Shim Moon-Seup Art & Culture Foundation. All Rights Reserved.</p>
          <p className="tracking-widest uppercase">
            Curated & Film Directed by{" "}
            <span className="text-[#F5F2EB]/60 font-semibold">Sim Eunlog</span> · Produced by{" "}
            <span className="text-[#F5F2EB]/60 font-semibold">Nara Information Co., Ltd.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
