"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState, useEffect } from "react";
import LogoMark from "@/app/_components/LogoMark";
import Container from "@/app/_components/Container";

type NavItem = {
  href: string;
  label: string;
};

const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/#layanan", label: "Layanan" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/#kontak", label: "Kontak" },
];

const ABOUT_ITEMS: NavItem[] = [
  { href: "/tentang", label: "Profil Klub" },
  { href: "/prestasi", label: "Prestasi" },
  { href: "/organisasi", label: "Pelatih & Organisasi" },
  { href: "/testimoni", label: "Testimoni" },
];

function isActivePath(currentPath: string, href: string) {
  if (href === "/") return currentPath === "/";
  return currentPath === href || currentPath.startsWith(`${href}/`);
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);

  const items = useMemo(() => NAV_ITEMS, []);
  const aboutItems = useMemo(() => ABOUT_ITEMS, []);
  const homeItem = items[0];
  const secondaryItems = items.slice(1);

  const aboutActive = useMemo(() => {
    return ["/tentang", "/prestasi", "/organisasi", "/testimoni"].some((p) =>
      pathname === p || pathname.startsWith(`${p}/`),
    );
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-ink/95 backdrop-blur-sm">
      <Container>
        <div className="flex h-16 sm:h-20 items-center justify-between gap-4">
          <Link
            href="/"
            className="group flex h-11 min-w-[44px] items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 active:scale-95 transition-transform"
            aria-label="Beranda PRADA BC"
            onClick={() => setIsOpen(false)}
          >
            <div className="flex h-12 sm:h-14 items-center justify-center transition-transform group-hover:scale-105">
              <LogoMark className="h-full w-auto" />
            </div>
            <div className="hidden leading-tight sm:block">
              <div className="text-sm font-black uppercase tracking-tighter text-snow group-hover:text-gold transition-colors italic">
                PRADA BC
              </div>
              <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-gold/60">
                Surabaya
              </div>
            </div>
            <span className="sr-only">PRADA BC</span>
          </Link>

          <nav className="hidden items-center gap-1.5 lg:flex" aria-label="Navigasi utama">
            <Link
              href={homeItem.href}
              className={[
                "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70",
                isActivePath(pathname, homeItem.href)
                  ? "bg-white/8 text-gold ring-1 ring-inset ring-gold/30"
                  : "text-snow/85 hover:bg-surface/70 hover:text-snow",
              ].join(" ")}
            >
              {homeItem.label}
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setIsAboutOpen(true)}
              onMouseLeave={() => setIsAboutOpen(false)}
            >
              <button
                type="button"
                className={[
                  "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70",
                  aboutActive
                    ? "bg-white/8 text-gold ring-1 ring-inset ring-gold/30"
                    : "text-snow/85 hover:bg-surface/70 hover:text-snow",
                ].join(" ")}
                aria-haspopup="menu"
                aria-expanded={isAboutOpen}
                onClick={() => setIsAboutOpen((v) => !v)}
              >
                Tentang Kami
                <span className="text-snow/55">▾</span>
              </button>
              <div
                className={[
                  "absolute left-0 top-[calc(100%+10px)] w-64 overflow-hidden rounded-2xl border border-white/10 bg-ink shadow-[0_18px_60px_rgba(0,0,0,0.55)]",
                  isAboutOpen ? "block" : "hidden",
                ].join(" ")}
                role="menu"
                aria-label="Menu Tentang Kami"
              >
                <div className="p-2">
                  {aboutItems.map((item) => {
                    const active = isActivePath(pathname, item.href);
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={[
                          "block rounded-xl px-3 py-2 text-sm font-medium transition-colors",
                          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70",
                          active
                            ? "bg-white/8 text-gold"
                            : "text-snow/85 hover:bg-white/6 hover:text-snow",
                        ].join(" ")}
                        onClick={() => setIsAboutOpen(false)}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            {secondaryItems.map((item) => {
              const active = isActivePath(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70",
                    active
                      ? "bg-white/8 text-gold ring-1 ring-inset ring-gold/30"
                      : "text-snow/85 hover:bg-surface/70 hover:text-snow",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/#kontak"
              className="hidden h-10 items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 text-sm font-semibold text-snow/85 transition-colors duration-200 hover:bg-white/8 hover:text-snow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 lg:inline-flex"
            >
              Konsultasi
            </Link>
            
            {/* Hamburger Button */}
            <button
              type="button"
              className="relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/5 lg:hidden active:scale-95 transition-transform"
              aria-controls="mobile-nav"
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Toggle Menu</span>
              <div
                className={`h-[2px] w-5 rounded-full bg-snow transition-all duration-300 ${
                  isOpen ? "translate-y-[8px] rotate-45" : ""
                }`}
              />
              <div
                className={`h-[2px] w-5 rounded-full bg-snow transition-all duration-300 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <div
                className={`h-[2px] w-5 rounded-full bg-snow transition-all duration-300 ${
                  isOpen ? "-translate-y-[8px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Fullscreen Menu */}
      <div
        className={`fixed inset-0 top-16 sm:top-20 z-40 lg:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-ink/95 backdrop-blur-md"
          onClick={() => setIsOpen(false)}
        />
        
        {/* Menu Content */}
        <div className="absolute inset-x-0 top-0 max-h-[calc(100svh-4rem)] overflow-y-auto bg-ink/90 border-b border-white/10 px-5 py-8 pb-12 shadow-2xl">
          <nav className="flex flex-col gap-6" aria-label="Navigasi mobile">
            <Link
              href={homeItem.href}
              className={`text-xl font-medium tracking-tight transition-colors active:scale-95 ${
                isActivePath(pathname, homeItem.href) ? "text-gold" : "text-snow hover:text-gold"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {homeItem.label}
            </Link>

            <div className="flex flex-col gap-4">
              <button
                type="button"
                className={`flex w-full items-center justify-between text-xl font-medium tracking-tight transition-colors active:scale-95 ${
                  aboutActive ? "text-gold" : "text-snow hover:text-gold"
                }`}
                onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)}
              >
                Tentang Kami
                <span className={`text-sm transition-transform duration-300 ${isMobileAboutOpen ? "rotate-180" : ""}`}>▼</span>
              </button>
              
              <div className={`flex flex-col gap-4 pl-4 border-l border-white/10 transition-all duration-300 overflow-hidden ${
                isMobileAboutOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}>
                {aboutItems.map((item) => {
                  const active = isActivePath(pathname, item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`text-lg font-medium tracking-tight transition-colors py-1 active:scale-95 ${
                        active ? "text-gold" : "text-snow/80 hover:text-snow"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>

            {secondaryItems.map((item) => {
              const active = isActivePath(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-xl font-medium tracking-tight transition-colors active:scale-95 ${
                    active ? "text-gold" : "text-snow hover:text-gold"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}

            <div className="pt-6 mt-2 border-t border-white/10">
              <Link
                href="/#kontak"
                className="flex min-h-[52px] items-center justify-center rounded-2xl bg-gold px-6 text-base font-semibold text-ink transition-colors hover:bg-gold/90 active:scale-95"
                onClick={() => setIsOpen(false)}
              >
                Konsultasi Program
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}