"use client";

import { MapPin, Calendar, Clock, ArrowRight } from "lucide-react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mgobozaa";
const EMAIL_SUBJECT = "Inquiry about Shim Moon-Seup: Harnessed From Nature";
const FORM_ID = "visit-contact-form";
const STATUS_ID = "visit-contact-status";
const LABEL_ID = "visit-submit-label";

export default function VisitSection() {
  return (
    <section
      id="visit"
      className="py-24 md:py-36 bg-[#0C0C0C] text-[#F5F2EB] border-t border-white/5 relative"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Info & Map */}
          <div className="lg:col-span-6 space-y-10">
            <div className="space-y-4">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-brand-orange font-bold">
                Visitor Guide
              </span>
              <h2 className="font-serif text-4xl md:text-6xl font-bold uppercase tracking-tight leading-none">
                Plan Your Visit
              </h2>
            </div>

            {/* Practical info cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-xs text-[#F5F2EB]/70">
              <div className="flex gap-4 items-start p-5 bg-[#121212] border border-white/5">
                <MapPin size={16} className="text-brand-orange shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#F5F2EB] uppercase mb-1">Venue</h4>
                  <p>Ca&apos; Faccanon</p>
                  <p>Calle delle Acque, 30124</p>
                  <p>Venezia, Italy (1st Floor)</p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-5 bg-[#121212] border border-white/5">
                <Calendar size={16} className="text-brand-orange shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#F5F2EB] uppercase mb-1">Dates</h4>
                  <p>8 May —</p>
                  <p>30 September 2026</p>
                  <p className="text-brand-rust">Free Admission</p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-5 bg-[#121212] border border-white/5 md:col-span-2">
                <Clock size={16} className="text-brand-orange shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#F5F2EB] uppercase mb-1">Opening Hours</h4>
                  <p>Tuesday — Sunday, 10:00 — 18:00</p>
                  <p className="text-[#F5F2EB]/40 mt-1">Closed on Mondays except during national holidays.</p>
                </div>
              </div>
            </div>

            {/* Map Frame */}
            <div className="relative border border-white/10 bg-[#121212] p-1.5 aspect-video overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2799.462310156119!2d12.33477411208007!3d45.43677627900845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477eb1d987c55555%3A0xadfc436e71234f3f!2sCa&#39;%20Faccanon!5e0!3m2!1sen!2sit!4v1712217600000!5m2!1sen!2sit"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(1) contrast(1.2) invert(0.9) opacity(0.85)" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ca' Faccanon Location Venice"
              />
            </div>
          </div>

          {/* Right Column: Press Kit Request Form */}
          <div className="lg:col-span-6 space-y-10 lg:pl-6">
            <div className="space-y-4">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-brand-orange font-bold">
                Contact
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold uppercase tracking-tight leading-none">
                Contact
              </h2>
              <p className="text-sm text-[#F5F2EB]/50 font-light leading-relaxed max-w-md">
                For exhibition inquiries, press requests, research materials, curatorial discussions, collaborations, or private viewing appointments, please contact us using the form below.
              </p>
            </div>

            <form
              id={FORM_ID}
              action={FORMSPREE_ENDPOINT}
              method="POST"
              encType="multipart/form-data"
              className="space-y-6 font-mono text-xs"
            >
              <input type="hidden" name="_subject" value={EMAIL_SUBJECT} />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="uppercase tracking-widest text-[#F5F2EB]/50">Full Name *</label>
                  <input
                    type="text"
                    required
                    name="name"
                    className="w-full bg-[#121212] border border-white/10 px-4 py-3 text-[#F5F2EB] focus:outline-none focus:border-brand-orange transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="uppercase tracking-widest text-[#F5F2EB]/50">Email Address *</label>
                  <input
                    type="email"
                    required
                    name="email"
                    className="w-full bg-[#121212] border border-white/10 px-4 py-3 text-[#F5F2EB] focus:outline-none focus:border-brand-orange transition-colors"
                    placeholder="email@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="uppercase tracking-widest text-[#F5F2EB]/50">Affiliation (Media, Institution)</label>
                <input
                  type="text"
                  name="affiliation"
                  className="w-full bg-[#121212] border border-white/10 px-4 py-3 text-[#F5F2EB] focus:outline-none focus:border-brand-orange transition-colors"
                  placeholder="e.g. Art Forum, Tate Modern"
                />
              </div>

              <div className="space-y-2">
                <label className="uppercase tracking-widest text-[#F5F2EB]/50">Request / Message</label>
                <textarea
                  rows={4}
                  name="message"
                  className="w-full bg-[#121212] border border-white/10 px-4 py-3 text-[#F5F2EB] focus:outline-none focus:border-brand-orange transition-colors resize-none"
                  placeholder="Specify requested resources or queries..."
                />
              </div>

              <button
                type="submit"
                id="visit-submit-button"
                className="w-full bg-brand-rust hover:bg-brand-orange text-[#F5F2EB] py-4 uppercase font-bold tracking-[0.2em] transition-colors flex items-center justify-center gap-2"
              >
                <span id={LABEL_ID}>Send Message</span>
                <ArrowRight size={14} />
              </button>

              <p id={STATUS_ID} className="text-center font-mono text-xs uppercase tracking-[0.2em]" aria-live="polite" />
            </form>
          </div>
        </div>
      </div>

      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function () {
              var form = document.getElementById(${JSON.stringify(FORM_ID)});
              var status = document.getElementById(${JSON.stringify(STATUS_ID)});
              var label = document.getElementById(${JSON.stringify(LABEL_ID)});
              var button = document.getElementById("visit-submit-button");
              if (!form || !status || !label || !button) return;

              var successClass = "text-brand-rust";
              var errorClass = "text-red-300";

              form.addEventListener("submit", async function (event) {
                event.preventDefault();
                status.textContent = "";
                status.className = "text-center font-mono text-xs uppercase tracking-[0.2em]";
                button.setAttribute("disabled", "disabled");
                label.textContent = "Sending...";

                try {
                  var response = await fetch(${JSON.stringify(FORMSPREE_ENDPOINT)}, {
                    method: "POST",
                    body: new FormData(form),
                    headers: { Accept: "application/json" }
                  });

                  if (!response.ok) {
                    throw new Error("Form submission failed");
                  }

                  form.reset();
                  status.textContent = "Thank you. Your message has been sent.";
                  status.classList.add(successClass);
                } catch (error) {
                  status.textContent = "Sorry, there was a problem sending your message. Please try again.";
                  status.classList.add(errorClass);
                } finally {
                  button.removeAttribute("disabled");
                  label.textContent = "Send Message";
                }
              });
            })();
          `,
        }}
      />
    </section>
  );
}
