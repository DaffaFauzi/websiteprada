"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import LogoMark from "@/app/_components/LogoMark";
import Container from "@/app/_components/Container";
import { useLanguage } from "@/app/_components/LanguageProvider";

export default function SiteFooter() {
  const { dict, lang } = useLanguage();

  const NAV_LINKS = [
    { href: "/", label: dict.footer.links.home },
    { href: "/tentang", label: dict.footer.links.about },
    { href: "/services", label: dict.footer.links.services },
    { href: "/gallery", label: dict.footer.links.gallery },
    { href: lang === "id" ? "/kontak" : "/contact", label: dict.footer.links.contact },
  ];

  const PROGRAM_LINKS = [
    { href: "/prestasi", label: dict.footer.links.achievements },
    { href: "/organisasi", label: dict.footer.links.organization },
    { href: "/testimoni", label: dict.footer.links.testimonials },
  ];

  const SOCIAL_CONTACT = [
    { 
      label: "WhatsApp", 
      href: "https://wa.me/6281234567890", 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    },
    { 
      label: "Instagram", 
      href: "https://instagram.com/pradabc.official", 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" strokeWidth="1.5" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01" />
        </svg>
      )
    },
    { 
      label: "YouTube", 
      href: "https://youtube.com/@pradabc", 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33 2.78 2.78 0 001.94 2C5.12 19.5 12 19.5 12 19.5s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.33 29 29 0 00-.46-5.33z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 15.02l5.75-3.27-5.75-3.27v6.54z" />
        </svg>
      )
    },
    { 
      label: "Indonesia • Training Hub", 
      href: lang === "id" ? "/kontak" : "/contact", 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-[#E8DDC8] bg-gradient-to-b from-[#F8F5EF] to-[#F2ECE2]">
      {/* Visual Details & Patterns */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A861]/30 to-transparent" />
        
        {/* Radial Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#C9A861]/5 blur-[100px] rounded-full" />
        
        {/* Subtle Court Line Pattern (Subtle Opacity) */}
        <div className="absolute inset-0 opacity-[0.02] grayscale invert mix-blend-multiply" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='300' viewBox='0 0 200 300' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0H200V300H0V0Z' stroke='%23C9A861' stroke-width='2'/%3E%3Cpath d='M0 150H200' stroke='%23C9A861' stroke-width='2'/%3E%3Cpath d='M40 0V300' stroke='%23C9A861' stroke-width='1'/%3E%3Cpath d='M160 0V300' stroke='%23C9A861' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '100px 150px'
        }} />
      </div>

      <Container className="relative z-10 pt-14 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 items-start">
          
          {/* COLUMN 1: BRAND INFO */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white p-2 shadow-sm transition-transform duration-500 group-hover:scale-105">
                <LogoMark className="h-full w-full" />
              </div>
              <div>
                <div className="text-lg font-bold tracking-tight text-[#18181B]">
                  PRADA BC
                </div>
                <div className="text-[10px] uppercase tracking-[0.45em] text-[#C9A861] font-semibold">
                  Indonesia
                </div>
              </div>
            </div>
            
            <p className="text-[13px] leading-relaxed text-[#5F5F5F] max-w-[240px]">
              {dict.footer.brandDesc}
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              {[
                dict.footer.stats.years,
                dict.footer.stats.athletes,
                dict.footer.stats.level
              ].map((stat) => (
                <span key={stat} className="inline-flex items-center rounded-full bg-white/50 border border-[#E8DDC8]/60 px-3 py-1 text-[9px] font-bold text-[#18181B]/80 backdrop-blur-sm uppercase tracking-wider">
                  {stat}
                </span>
              ))}
            </div>
          </div>

          {/* COLUMN 2: NAVIGATION */}
          <div className="lg:pl-10 space-y-5">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#18181B]">
              {dict.footer.navTitle}
            </h4>
            <nav className="flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group relative text-[13px] text-[#5F5F5F] hover:text-[#C9A861] transition-colors duration-300 w-fit"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#C9A861] transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>
          </div>

          {/* COLUMN 3: PROGRAMS */}
          <div className="lg:pl-6 space-y-5">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#18181B]">
              {dict.footer.programsTitle}
            </h4>
            <nav className="flex flex-col gap-2.5">
              {PROGRAM_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group relative text-[13px] text-[#5F5F5F] hover:text-[#C9A861] transition-colors duration-300 w-fit"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#C9A861] transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>
          </div>

          {/* COLUMN 4: CONTACT & SOCIAL */}
          <div className="space-y-5">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#18181B]">
              {dict.footer.contactTitle}
            </h4>
            <div className="flex flex-col gap-3.5">
              {SOCIAL_CONTACT.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-3 text-[13px] text-[#5F5F5F] transition-all duration-300 hover:text-[#C9A861] group"
                >
                  <div className="text-[#C9A861] transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>
                  <span className="font-medium tracking-tight">{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-12 pt-6 border-t border-[#E8DDC8]/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-[10px] font-medium text-[#888888] tracking-wide order-2 sm:order-1 opacity-80">
            © {new Date().getFullYear()} PRADA BC. {dict.footer.rights}
          </div>
          
          <div className="flex items-center gap-4 order-1 sm:order-2">
            <span className="flex items-center gap-2 text-[9px] font-semibold text-[#A1A1AA] uppercase tracking-[0.25em]">
              <span className="h-1 w-1 rounded-full bg-[#C9A861]/50" />
              {dict.footer.empowering}
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
