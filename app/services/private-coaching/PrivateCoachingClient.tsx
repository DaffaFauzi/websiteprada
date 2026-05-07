"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/app/_components/Container";
import { useLanguage } from "@/app/_components/LanguageProvider";

const IconStar = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-gold" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
  </svg>
);

const IconShield = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-gold" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
);

const IconChart = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-gold" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
  </svg>
);

const IconSupport = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-gold" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a5.97 5.97 0 00-.942 3.197M12 10.5a3.375 3.375 0 100-6.75 3.375 3.375 0 000 6.75zM4.5 18.72a9.094 9.094 0 01-3.741-.479 3 3 0 014.682-2.72m-.94 3.198l-.001.031c0 .225.012.447.038.666A11.944 11.944 0 0012 21c2.17 0 4.207-.576 5.963-1.584A6.062 6.062 0 0018 18.719m-12 0a5.971 5.971 0 01.941-3.197m0 0A5.995 5.995 0 0112 12.75a5.995 5.995 0 015.058 2.772m0 0a5.97 5.97 0 01.942 3.197" />
  </svg>
);

const getIcon = (key: string) => {
  switch (key) {
    case "star": return <IconStar />;
    case "shield": return <IconShield />;
    case "chart": return <IconChart />;
    case "support": return <IconSupport />;
    default: return null;
  }
};

export default function PrivateCoachingClient() {
  const { dict } = useLanguage();
  const p = dict.privateCoachingPage;

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
            <span className="text-gold/60">{dict.nav.privateCoaching}</span>
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

      {/* Benefits Section */}
      <section className="py-20 lg:py-32 bg-ink/50 relative">
        <Container>
          <div className="text-center mb-16 lg:mb-24 space-y-4">
            <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-tighter italic">
              {p.benefits.title}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {p.benefits.items.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative overflow-hidden rounded-3xl border border-border bg-ink p-8 hover:-translate-y-2 transition-all duration-500 shadow-2xl hover:shadow-gold/10"
              >
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

      {/* Focus Section */}
      <section className="py-20 lg:py-32 relative">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/5] lg:h-[600px] rounded-[3rem] overflow-hidden border border-border group">
              <Image 
                src="https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=1200&auto=format&fit=crop" 
                alt="Coaching Session" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-60" />
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-tighter italic">
                  {p.focus.title}
                </h2>
                <p className="text-snow/60 text-lg font-medium">
                  {p.focus.desc}
                </p>
              </div>

              <div className="space-y-4">
                {p.focus.items.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-gold/20 transition-colors"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center">
                      <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-bold uppercase tracking-tight text-snow/80 italic">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 relative">
        <Container>
          <div className="relative overflow-hidden rounded-[3rem] lg:rounded-[4rem] bg-gold p-12 lg:p-24 text-center space-y-10 group">
            <div className="relative z-10 space-y-6 max-w-3xl mx-auto text-ink">
              <h2 className="text-4xl lg:text-7xl font-black uppercase tracking-tighter leading-none italic">
                {dict.programsPage.cta.title}
              </h2>
              <p className="text-lg lg:text-2xl font-bold italic opacity-80">
                {dict.programsPage.cta.desc}
              </p>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-6 pt-6">
              <Link 
                href="/services/consultation"
                className="w-full sm:w-auto min-h-[64px] px-10 flex items-center justify-center rounded-2xl bg-ink text-gold font-black uppercase tracking-[0.2em] italic transition-all hover:scale-105 hover:shadow-2xl active:scale-95"
              >
                {dict.programsPage.cta.buttons.consult}
              </Link>
              <Link 
                href="/#kontak"
                className="w-full sm:w-auto min-h-[64px] px-10 flex items-center justify-center rounded-2xl border-2 border-ink text-ink font-black uppercase tracking-[0.2em] italic transition-all hover:bg-ink hover:text-gold active:scale-95"
              >
                {dict.programsPage.cta.buttons.register}
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </motion.main>
  );
}
