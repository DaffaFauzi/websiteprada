"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/app/_components/Container";
import { useLanguage } from "@/app/_components/LanguageProvider";

const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1626721105368-a69248e93b32?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1659081463572-4c5903a309e6?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop"
];

const IconAcademy = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-gold" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147L12 15l7.74-4.853a4.5 4.5 0 00-2.485-8.147H6.745a4.5 4.5 0 00-2.485 8.147z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v5.25M12 15l-3.21 1.926A2 2 0 016 15.176V12M12 15l3.21 1.926A2 2 0 0018 15.176V12" />
  </svg>
);

const IconTrophy = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-gold" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-5.25c-.622 0-1.125.504-1.125 1.125v3.375m9 0h-9M12 14.25a3 3 0 003-3V6.75h-6v4.5a3 3 0 003 3z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 7.125h1.5m15 0h1.5M4.5 9v3.75c0 1.242 1.008 2.25 2.25 2.25h.75m12 0h.75c1.242 0 2.25-1.008 2.25-2.25V9" />
  </svg>
);

const IconGrowth = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-gold" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
  </svg>
);

const IconChart = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-gold" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
  </svg>
);

const getIcon = (key: string) => {
  switch (key) {
    case "academy": return <IconAcademy />;
    case "trophy": return <IconTrophy />;
    case "growth": return <IconGrowth />;
    case "chart": return <IconChart />;
    default: return null;
  }
};

const IconStar = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-gold" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
  </svg>
);

const IconMonitor = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-gold" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12H3V5.25" />
  </svg>
);

const IconSupport = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-gold" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a5.97 5.97 0 00-.942 3.197M12 10.5a3.375 3.375 0 100-6.75 3.375 3.375 0 000 6.75zM4.5 18.72a9.094 9.094 0 01-3.741-.479 3 3 0 014.682-2.72m-.94 3.198l-.001.031c0 .225.012.447.038.666A11.944 11.944 0 0012 21c2.17 0 4.207-.576 5.963-1.584A6.062 6.062 0 0018 18.719m-12 0a5.971 5.971 0 01.941-3.197m0 0A5.995 5.995 0 0112 12.75a5.995 5.995 0 015.058 2.772m0 0a5.97 5.97 0 01.942 3.197" />
  </svg>
);

const IconShield = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-gold" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
);

const getBenefitIcon = (key: string) => {
  switch (key) {
    case "star": return <IconStar />;
    case "monitor": return <IconMonitor />;
    case "support": return <IconSupport />;
    case "shield": return <IconShield />;
    default: return null;
  }
};

export default function ProgramsClient() {
  const { dict } = useLanguage();
  const p = dict.programsPage;

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-ink min-h-screen text-snow selection:bg-gold/30"
    >
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-20 lg:pt-32 lg:pb-32">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/90 to-ink" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-20 blur-3xl">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/20 rounded-full mix-blend-screen" />
            <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gold/10 rounded-full mix-blend-screen" />
          </div>
        </div>

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center justify-center gap-2 mb-8 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-snow/30"
          >
            <Link href="/" className="hover:text-gold transition-colors">{dict.nav.home}</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-gold transition-colors">{dict.nav.services}</Link>
            <span>/</span>
            <span className="text-gold/60">{dict.nav.trainingPrograms}</span>
          </motion.div>

          <div className="max-w-4xl mx-auto text-center space-y-6 lg:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-gold"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-gold"></span>
              </span>
              {p.hero.badge}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9] italic"
            >
              {p.hero.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-2xl mx-auto text-lg sm:text-xl text-snow/70 font-medium leading-relaxed"
            >
              {p.hero.desc}
            </motion.p>
          </div>
        </Container>
      </section>

      {/* Main Program Cards */}
      <section className="py-20 lg:py-32 bg-ink/50 relative">
        <Container>
          <div className="text-center mb-16 lg:mb-24 space-y-4">
            <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-tighter italic">
              {p.mainPrograms.title}
            </h2>
            <p className="text-snow/60 max-w-2xl mx-auto text-lg font-medium">
              {p.mainPrograms.desc}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {p.mainPrograms.items.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative overflow-hidden rounded-3xl border border-border bg-ink p-8 hover:-translate-y-2 transition-all duration-500 shadow-2xl hover:shadow-gold/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 space-y-6">
                  <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center border border-gold/20 group-hover:scale-110 transition-transform duration-500">
                    {getIcon(item.icon)}
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold uppercase tracking-tight text-snow group-hover:text-gold transition-colors duration-300 italic">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-snow/60 group-hover:text-snow/80 transition-colors">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Gallery Section */}
      <section className="py-20 lg:py-32 overflow-hidden">
        <Container>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-tighter italic">
                {p.gallery.title}
              </h2>
              <p className="text-snow/60 max-w-xl text-lg font-medium">
                {p.gallery.desc}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {GALLERY_IMAGES.map((src, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-border"
              >
                <Image
                  src={src}
                  alt={p.gallery.images[idx]}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-8">
                  <p className="text-snow font-bold text-lg uppercase italic tracking-tighter translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {p.gallery.images[idx]}
                  </p>
                </div>
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 group-hover:ring-gold/30 transition-all duration-500 rounded-[2rem]" />
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Athlete Development System */}
      <section className="py-20 lg:py-32 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-tighter italic">
                  {p.system.title}
                </h2>
                <p className="text-snow/60 text-lg font-medium">
                  {p.system.desc}
                </p>
              </div>

              <div className="space-y-4">
                {p.system.steps.map((step, idx) => (
                  <div key={idx} className="flex gap-6 p-6 rounded-3xl border border-border bg-ink/50 hover:bg-gold/5 transition-colors group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center font-black italic text-gold bg-gold/5 group-hover:bg-gold group-hover:text-ink transition-all">
                      0{idx + 1}
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-lg font-bold uppercase italic text-snow group-hover:text-gold transition-colors">{step.title}</h3>
                      <p className="text-sm text-snow/60">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative aspect-square lg:aspect-auto lg:h-[600px] rounded-[3rem] overflow-hidden border border-border group">
              <Image 
                src="https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=1200&auto=format&fit=crop" 
                alt="Development System" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
              <div className="absolute bottom-12 left-12 right-12 p-8 rounded-3xl border border-gold/20 bg-ink/80 backdrop-blur-xl space-y-4">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                  <IconShield />
                </div>
                <p className="text-snow/80 font-medium italic">
                  "Our system is built to sustain excellence from the very first stroke to the national podium."
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Program Levels */}
      <section className="py-20 lg:py-32 bg-ink/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 blur-[120px] rounded-full" />
        <Container>
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-tighter italic">
              {p.levels.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {p.levels.items.map((item, idx) => (
              <div 
                key={idx} 
                className={`relative overflow-hidden rounded-[2.5rem] border ${idx === 1 ? 'border-gold shadow-[0_0_40px_rgba(212,175,55,0.15)] bg-gold/[0.03]' : 'border-border bg-surface/50'} p-10 space-y-8 transition-all duration-500 hover:border-gold/50`}
              >
                {idx === 1 && (
                  <div className="absolute top-6 right-6 px-3 py-1 bg-gold text-ink text-[10px] font-black uppercase tracking-widest rounded-full italic">
                    Recommended
                  </div>
                )}
                
                <div className="space-y-2">
                  <div className="text-gold font-bold uppercase tracking-[0.2em] text-xs">
                    Level {idx + 1}
                  </div>
                  <h3 className="text-3xl font-black uppercase tracking-tighter italic text-snow">
                    {item.level}
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm py-3 border-b border-white/5">
                    <span className="text-snow/50 uppercase font-bold tracking-tight">Intensity</span>
                    <span className="text-snow font-bold italic">{item.intensity}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm py-3 border-b border-white/5">
                    <span className="text-snow/50 uppercase font-bold tracking-tight">Focus</span>
                    <span className="text-snow font-bold italic">{item.focus}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm py-3">
                    <span className="text-snow/50 uppercase font-bold tracking-tight">Target</span>
                    <span className="text-snow font-bold italic">{item.target}</span>
                  </div>
                </div>

                <Link 
                  href="/#kontak"
                  className={`flex w-full h-14 items-center justify-center rounded-2xl text-sm font-black uppercase tracking-widest italic transition-all ${idx === 1 ? 'bg-gold text-ink hover:scale-105' : 'bg-white/5 text-snow hover:bg-white/10'}`}
                >
                  Join Level
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="py-20 lg:py-32 relative">
        <Container>
          <div className="text-center mb-16 lg:mb-24">
            <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-tighter italic">
              {p.benefits.title}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {p.benefits.items.map((item, idx) => (
              <div key={idx} className="space-y-6 text-center group">
                <div className="w-20 h-20 mx-auto rounded-[2rem] border border-gold/20 bg-gold/5 flex items-center justify-center group-hover:bg-gold transition-all duration-500 group-hover:-translate-y-2">
                  <div className="group-hover:text-ink transition-colors duration-500">
                    {getBenefitIcon(item.icon)}
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold uppercase italic tracking-tight text-gold">
                    {item.title}
                  </h3>
                  <p className="text-sm text-snow/60 font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 relative">
        <Container>
          <div className="relative overflow-hidden rounded-[3rem] lg:rounded-[4rem] bg-gold p-12 lg:p-24 text-center space-y-10 group">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/20 rounded-full blur-[100px] animate-pulse" />
            
            <div className="relative z-10 space-y-6 max-w-3xl mx-auto">
              <h2 className="text-4xl lg:text-7xl font-black uppercase tracking-tighter leading-none italic text-ink">
                {p.cta.title}
              </h2>
              <p className="text-ink/80 text-lg lg:text-2xl font-bold italic">
                {p.cta.desc}
              </p>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-6 pt-6">
              <Link 
                href="/#kontak"
                className="w-full sm:w-auto min-h-[64px] px-10 flex items-center justify-center rounded-2xl bg-ink text-gold font-black uppercase tracking-[0.2em] italic transition-all hover:scale-105 hover:shadow-2xl active:scale-95"
              >
                {p.cta.buttons.consult}
              </Link>
              <Link 
                href="/#kontak"
                className="w-full sm:w-auto min-h-[64px] px-10 flex items-center justify-center rounded-2xl border-2 border-ink text-ink font-black uppercase tracking-[0.2em] italic transition-all hover:bg-ink hover:text-gold active:scale-95"
              >
                {p.cta.buttons.register}
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </motion.main>
  );
}
