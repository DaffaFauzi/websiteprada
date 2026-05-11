"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState, useEffect } from "react";
import LogoMark from "@/app/_components/LogoMark";
import Container from "@/app/_components/Container";
import LanguageSwitcher from "@/app/_components/LanguageSwitcher";
import { useLanguage } from "@/app/_components/LanguageProvider";

type NavItem = {
  href: string;
  label: string;
};

export default function SiteHeader() {
  const { dict, lang } = useLanguage();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");

  const items = useMemo(() => [
    { href: "/", label: dict.nav.home },
    { href: "/gallery", label: dict.nav.gallery },
    { href: lang === "id" ? "/kontak" : "/contact", label: dict.nav.contact },
  ], [dict.nav, lang]);

  const servicesItems = useMemo(() => [
    { href: "/services/programs", label: dict.nav.trainingPrograms },
    { href: "/services/private-coaching", label: dict.nav.privateCoaching },
    { href: "/services/athlete-development", label: dict.nav.athleteDevelopment },
    { href: "/services/consultation", label: dict.nav.programConsultation },
  ], [dict.nav]);

  const aboutItems = useMemo(() => [
    { href: "/tentang", label: dict.nav.profile },
    { href: "/prestasi", label: dict.nav.achievements },
    { href: "/organisasi", label: dict.nav.organization },
    { href: "/testimoni", label: dict.nav.testimonials },
  ], [dict.nav]);

  const homeItem = items[0];
  const secondaryItems = items.slice(1);

  const aboutActive = useMemo(() => {
    return ["/tentang", "/prestasi", "/organisasi", "/testimoni"].some((p) =>
      pathname === p || pathname.startsWith(`${p}/`),
    );
  }, [pathname]);

  const servicesActive = useMemo(() => {
    return pathname.startsWith("/services");
  }, [pathname]);

  // Track scroll position for active section on homepage
  useEffect(() => {
    if (typeof window !== "undefined") {
      setActiveHash(window.location.hash);
    }

    const handleScroll = () => {
      // Only track scroll sections on the home page
      if (pathname !== "/") return;

      const sections = ["layanan", "gallery", "kontak"];
      let currentHash = "";

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Adjust threshold to detect when section comes into view
          if (rect.top <= 300) {
            currentHash = `#${section}`;
          }
        }
      }

      // Default to empty hash (Home) if at the top
      if (window.scrollY < 100) {
        currentHash = "";
      }

      setActiveHash(currentHash);
    };

    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("hashchange", handleHashChange);

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [pathname]);

  // Determine active state for links
  const isActive = (href: string) => {
    if (href === "/") {
      // Home is active only if on root and no other section is active
      return pathname === "/" && (!activeHash || activeHash === "");
    }
    if (href.startsWith("/#")) {
      // Anchor links are active if on root and the hash matches
      return pathname === "/" && activeHash === href.substring(1);
    }
    // Subpages (e.g. /tentang)
    return pathname === href || pathname.startsWith(`${href}/`);
  };

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
    <header className="sticky top-0 z-50 border-b border-border bg-ink/85 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.08)] transition-all duration-300">
      <Container>
        <div className="flex h-16 sm:h-20 items-center justify-between gap-4">
          <Link
            href="/"
            className="group flex py-1 items-center gap-2.5 sm:gap-3.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 active:scale-95 transition-all duration-300 hover:opacity-90 hover:-translate-y-[1px]"
            aria-label="Beranda PRADA BC"
            onClick={() => setIsOpen(false)}
          >
            <div className="relative flex h-10 w-[52px] sm:h-12 sm:w-[64px] items-center justify-center transition-transform duration-500 group-hover:scale-105 group-hover:drop-shadow-[0_0_15px_rgba(212,175,55,0.25)]">
              <LogoMark className="h-[135%] w-auto max-w-none" />
            </div>
            <div className="flex flex-col justify-center pt-0.5 leading-none">
              <div className="text-[13px] sm:text-[15px] font-black uppercase tracking-tighter text-snow transition-colors duration-300 group-hover:text-gold italic">
                PRADA BC
              </div>
              <div className="mt-0.5 text-[7.5px] sm:text-[8.5px] font-semibold uppercase tracking-[0.35em] sm:tracking-[0.45em] text-gold transition-colors duration-300 group-hover:text-gold/90">
                Indonesia
              </div>
            </div>
            <span className="sr-only">PRADA BC</span>
          </Link>

          <nav className="hidden items-center gap-2 lg:flex" aria-label="Navigasi utama">
            <Link
              href={homeItem.href}
              className={[
                "group relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ease-out",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70",
                isActive(homeItem.href)
                  ? "bg-gold/10 text-gold font-semibold ring-1 ring-inset ring-gold/25 shadow-[0_0_15px_rgba(212,175,55,0.1)]"
                  : "text-snow/80 hover:text-snow hover:bg-snow/5 hover:-translate-y-[1px]",
              ].join(" ")}
            >
              {homeItem.label}
              {!isActive(homeItem.href) && (
                <span className="absolute inset-x-4 -bottom-[1px] h-[1px] scale-x-0 bg-gold/40 transition-transform duration-300 ease-out group-hover:scale-x-100" />
              )}
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setIsAboutOpen(true)}
              onMouseLeave={() => setIsAboutOpen(false)}
            >
              <button
                type="button"
                className={[
                  "group relative inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ease-out",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70",
                  aboutActive
                    ? "bg-gold/10 text-gold font-semibold ring-1 ring-inset ring-gold/25 shadow-[0_0_15px_rgba(212,175,55,0.1)]"
                    : "text-snow/80 hover:text-snow hover:bg-snow/5 hover:-translate-y-[1px]",
                ].join(" ")}
                aria-haspopup="menu"
                aria-expanded={isAboutOpen}
                onClick={() => setIsAboutOpen((v) => !v)}
              >
                {dict.nav.aboutUs}
                <span className={`text-[10px] transition-transform duration-300 ${isAboutOpen ? "rotate-180 text-snow" : "text-snow/50 group-hover:text-snow/80"}`}>▼</span>
                {!aboutActive && (
                  <span className="absolute inset-x-4 -bottom-[1px] h-[1px] scale-x-0 bg-gold/40 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                )}
              </button>
              <div
                className={[
                  "absolute left-1/2 -translate-x-1/2 top-full pt-2 w-56 transition-all duration-300 origin-top",
                  isAboutOpen ? "opacity-100 scale-y-100 translate-y-0 visible" : "opacity-0 scale-y-95 -translate-y-1 invisible pointer-events-none",
                ].join(" ")}
              >
                <div 
                  className="overflow-hidden rounded-2xl border border-border bg-ink/95 backdrop-blur-xl shadow-[0_30px_60px_rgba(0,0,0,0.25)]"
                  role="menu"
                  aria-label="Menu Tentang Kami"
                >
                  <div className="p-2 flex flex-col gap-1">
                    {aboutItems.map((item) => {
                      const active = isActive(item.href);
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={[
                            "block rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200",
                            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70",
                            active
                              ? "bg-gold/15 text-gold font-semibold"
                              : "text-snow/80 hover:bg-snow/5 hover:text-snow hover:translate-x-1",
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
            </div>

            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                type="button"
                className={[
                  "group relative inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ease-out",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70",
                  servicesActive
                    ? "bg-gold/10 text-gold font-semibold ring-1 ring-inset ring-gold/25 shadow-[0_0_15px_rgba(212,175,55,0.1)]"
                    : "text-snow/80 hover:text-snow hover:bg-snow/5 hover:-translate-y-[1px]",
                ].join(" ")}
                aria-haspopup="menu"
                aria-expanded={isServicesOpen}
                onClick={() => setIsServicesOpen((v) => !v)}
              >
                {dict.nav.services}
                <span className={`text-[10px] transition-transform duration-300 ${isServicesOpen ? "rotate-180 text-snow" : "text-snow/50 group-hover:text-snow/80"}`}>▼</span>
                {!servicesActive && (
                  <span className="absolute inset-x-4 -bottom-[1px] h-[1px] scale-x-0 bg-gold/40 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                )}
              </button>
              <div
                className={[
                  "absolute left-1/2 -translate-x-1/2 top-full pt-2 w-56 transition-all duration-300 origin-top",
                  isServicesOpen ? "opacity-100 scale-y-100 translate-y-0 visible" : "opacity-0 scale-y-95 -translate-y-1 invisible pointer-events-none",
                ].join(" ")}
              >
                <div 
                  className="overflow-hidden rounded-2xl border border-border bg-ink/95 backdrop-blur-xl shadow-[0_30px_60px_rgba(0,0,0,0.25)]"
                  role="menu"
                  aria-label="Menu Layanan"
                >
                  <div className="p-2 flex flex-col gap-1">
                    {servicesItems.map((item) => {
                      const active = isActive(item.href);
                      return (
                        <Link
                          key={item.label}
                          href={item.href}
                          className={[
                            "block rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200",
                            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70",
                            active
                              ? "bg-gold/15 text-gold font-semibold"
                              : "text-snow/80 hover:bg-snow/5 hover:text-snow hover:translate-x-1",
                          ].join(" ")}
                          onClick={() => setIsServicesOpen(false)}
                        >
                          {item.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {secondaryItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    "group relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ease-out",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70",
                    active
                      ? "bg-gold/10 text-gold font-semibold ring-1 ring-inset ring-gold/25 shadow-[0_0_15px_rgba(212,175,55,0.1)]"
                      : "text-snow/80 hover:text-snow hover:bg-snow/5 hover:-translate-y-[1px]",
                  ].join(" ")}
                >
                  {item.label}
                  {!active && (
                    <span className="absolute inset-x-4 -bottom-[1px] h-[1px] scale-x-0 bg-gold/40 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/services/consultation"
              className="hidden h-10 items-center justify-center rounded-full border border-gold/40 bg-gold/5 px-6 text-sm font-semibold text-gold transition-all duration-300 ease-out hover:-translate-y-[2px] hover:bg-gold/15 hover:border-gold/60 hover:shadow-[0_0_20px_rgba(212,175,55,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 lg:inline-flex"
            >
              {dict.nav.consultation}
            </Link>

            <LanguageSwitcher />

            {/* Hamburger Button */}
            <button
              type="button"
              className="relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-border bg-snow/5 lg:hidden active:scale-95 transition-all hover:bg-snow/10"
              aria-controls="mobile-nav"
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Toggle Menu</span>
              <div
                className={`h-[2px] w-5 rounded-full bg-snow transition-all duration-300 ease-out ${isOpen ? "translate-y-[8px] rotate-45" : ""
                  }`}
              />
              <div
                className={`h-[2px] w-5 rounded-full bg-snow transition-all duration-300 ease-out ${isOpen ? "opacity-0" : "opacity-100"
                  }`}
              />
              <div
                className={`h-[2px] w-5 rounded-full bg-snow transition-all duration-300 ease-out ${isOpen ? "-translate-y-[8px] -rotate-45" : ""
                  }`}
              />
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Fullscreen Menu */}
      <div
        className={`fixed inset-0 top-16 sm:top-20 z-40 lg:hidden transition-all duration-300 ease-in-out ${isOpen ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"
          }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-ink/95 backdrop-blur-md"
          onClick={() => setIsOpen(false)}
        />

        {/* Menu Content */}
        <div className="absolute inset-x-0 top-0 max-h-[calc(100svh-4rem)] overflow-y-auto bg-ink/95 backdrop-blur-xl border-b border-border px-5 py-8 pb-12 shadow-2xl">
          <nav className="flex flex-col gap-6" aria-label="Navigasi mobile">
            <Link
              href={homeItem.href}
              className={`text-xl font-semibold tracking-tight transition-colors active:scale-95 ${isActive(homeItem.href) ? "text-gold" : "text-snow hover:text-gold"
                }`}
              onClick={() => setIsOpen(false)}
            >
              {homeItem.label}
            </Link>

            <div className="flex flex-col gap-4">
              <button
                type="button"
                className={`flex w-full items-center justify-between text-xl font-semibold tracking-tight transition-colors active:scale-95 ${aboutActive ? "text-gold" : "text-snow hover:text-gold"
                  }`}
                onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)}
              >
                {dict.nav.aboutUs}
                <span className={`text-sm transition-transform duration-300 ${isMobileAboutOpen ? "rotate-180" : ""}`}>▼</span>
              </button>

              <div className={`flex flex-col gap-4 pl-4 border-l border-border transition-all duration-300 overflow-hidden ${isMobileAboutOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}>
                {aboutItems.map((item) => {
                  const active = isActive(item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`text-lg font-semibold tracking-tight transition-colors py-1 active:scale-95 ${active ? "text-gold" : "text-snow/80 hover:text-snow"
                        }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <button
                type="button"
                className={`flex w-full items-center justify-between text-xl font-semibold tracking-tight transition-colors active:scale-95 ${servicesActive ? "text-gold" : "text-snow hover:text-gold"
                  }`}
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              >
                {dict.nav.services}
                <span className={`text-sm transition-transform duration-300 ${isMobileServicesOpen ? "rotate-180" : ""}`}>▼</span>
              </button>

              <div className={`flex flex-col gap-4 pl-4 border-l border-border transition-all duration-300 overflow-hidden ${isMobileServicesOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}>
                {servicesItems.map((item) => {
                  const active = isActive(item.href);
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={`text-lg font-semibold tracking-tight transition-colors py-1 active:scale-95 ${active ? "text-gold" : "text-snow/80 hover:text-snow"
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
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-xl font-semibold tracking-tight transition-colors active:scale-95 ${active ? "text-gold" : "text-snow hover:text-gold"
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}

            <div className="pt-6 mt-2 border-t border-border">
              <Link
                href="/services/consultation"
                className="flex min-h-[52px] items-center justify-center rounded-full border border-gold/40 bg-gold/10 px-6 text-base font-semibold text-gold transition-all duration-300 hover:bg-gold/20 hover:border-gold/60 hover:shadow-[0_0_20px_rgba(212,175,55,0.25)] active:scale-95"
                onClick={() => setIsOpen(false)}
              >
                {dict.nav.consultation}
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}