import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shim Moon-Seup: Harnessed From Nature — Venice 2026",
  description: "Official Digital Archive of Shim Moon-Seup's Solo Exhibition during the 61st Venice Biennale. Explore modern anti-sculpture, generative space, and critical essay film 'Veiling Sailing'.",
  keywords: "Shim Moon-Seup, Venice Biennale 2026, Ca' Faccanon, Anti-Sculpture, Korean Contemporary Art, Sim Eunlog, Veiling Sailing, Perrotin, Art Archive",
  openGraph: {
    title: "Shim Moon-Seup: Harnessed From Nature — Venice 2026",
    description: "Official Digital Archive of Shim Moon-Seup's Solo Exhibition during the 61st Venice Biennale.",
    url: "https://shimmoonseup.org",
    siteName: "Shim Moon-Seup Venice 2026",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased scroll-smooth"
    >
      <body className="min-h-full bg-[#0C0C0C] text-[#F5F2EB] font-sans selection:bg-[#E2583E] selection:text-[#F5F2EB]">
        {children}
      </body>
    </html>
  );
}
