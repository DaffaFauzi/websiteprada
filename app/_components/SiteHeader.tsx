"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import LogoMark from "@/app/_components/LogoMark";

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

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-ink/95">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link
            href="/"
            className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70"
            aria-label="Beranda PRADA BC"
            onClick={() => setIsOpen(false)}
          >
            <div className="flex h-14 items-center justify-center transition-transform group-hover:scale-110">
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
            <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              className="inline-flex h-10 items-center justify-center rounded-xl border border-border bg-surface/70 px-3 text-sm font-semibold text-snow hover:bg-surface-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70"
              aria-controls="mobile-nav"
              aria-expanded={isOpen}
              onClick={() => setIsOpen((v) => !v)}
            >
              Menu
            </button>
            </div>
          </div>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={[
          "lg:hidden",
          isOpen ? "block" : "hidden",
        ].join(" ")}
      >
        <div className="border-t border-border bg-ink">
          <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6">
            <nav className="grid gap-1" aria-label="Navigasi mobile">
              <Link
                href={homeItem.href}
                className={[
                  "rounded-xl px-3 py-2 text-sm font-medium transition-colors",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70",
                  isActivePath(pathname, homeItem.href)
                    ? "bg-gold/12 text-gold"
                    : "text-snow/85 hover:bg-surface/70 hover:text-snow",
                ].join(" ")}
                onClick={() => setIsOpen(false)}
              >
                {homeItem.label}
              </Link>

              <button
                type="button"
                className={[
                  "flex items-center justify-between rounded-xl px-3 py-2 text-sm font-medium transition-colors",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70",
                  aboutActive
                    ? "bg-gold/12 text-gold"
                    : "text-snow/85 hover:bg-surface/70 hover:text-snow",
                ].join(" ")}
                aria-expanded={isMobileAboutOpen}
                aria-controls="mobile-about"
                onClick={() => setIsMobileAboutOpen((v) => !v)}
              >
                <span>Tentang Kami</span>
                <span className="text-snow/60">{isMobileAboutOpen ? "▴" : "▾"}</span>
              </button>
              <div
                id="mobile-about"
                className={[
                  "grid gap-1 pl-2",
                  isMobileAboutOpen ? "block" : "hidden",
                ].join(" ")}
              >
                {aboutItems.map((item) => {
                  const active = isActivePath(pathname, item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={[
                        "rounded-xl px-3 py-2 text-sm font-medium transition-colors",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70",
                        active
                          ? "bg-gold/12 text-gold"
                          : "text-snow/85 hover:bg-surface/70 hover:text-snow",
                      ].join(" ")}
                      onClick={() => {
                        setIsMobileAboutOpen(false);
                        setIsOpen(false);
                      }}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>

              {secondaryItems.map((item) => {
                const active = isActivePath(pathname, item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={[
                      "rounded-xl px-3 py-2 text-sm font-medium transition-colors",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70",
                      active
                        ? "bg-gold/12 text-gold"
                        : "text-snow/85 hover:bg-surface/70 hover:text-snow",
                    ].join(" ")}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <Link
                href="/#kontak"
                className="mt-2 inline-flex h-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-3 text-sm font-semibold text-snow/90 transition-colors duration-200 hover:bg-white/8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70"
                onClick={() => setIsOpen(false)}
              >
                Konsultasi
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
