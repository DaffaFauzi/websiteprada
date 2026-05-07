"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/app/_components/Container";
import { useLanguage } from "@/app/_components/LanguageProvider";

export default function AthleteDevelopmentClient() {
  const { dict } = useLanguage();
  const p = dict.athleteDevelopmentPage;

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
            <span className="text-gold/60">{dict.nav.athleteDevelopment}</span>
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

      {/* Roadmap Section */}
      <section className="py-20 lg:py-32 bg-ink/50 relative">
        <Container>
          <div className="text-center mb-16 lg:mb-24 space-y-4">
            <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-tighter italic">
              {p.roadmap.title}
            </h2>
            <p className="text-snow/60 max-w-2xl mx-auto text-lg font-medium">
              {p.roadmap.desc}
            </p>
          </div>

          <div className="relative">
            {/* Connection Line (Desktop) */}
            <div className="hidden lg:block absolute top-[44px] left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
              {p.roadmap.stages.map((stage, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex flex-col items-center text-center space-y-6 group"
                >
                  <div className="w-24 h-24 rounded-[2rem] border border-gold/20 bg-ink flex items-center justify-center font-black text-3xl italic text-gold group-hover:bg-gold group-hover:text-ink transition-all duration-500 shadow-2xl group-hover:shadow-gold/20">
                    0{idx + 1}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold uppercase tracking-tight text-snow group-hover:text-gold transition-colors italic">
                      {stage.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-snow/60">
                      {stage.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Progression Levels Section */}
      <section className="py-20 lg:py-32 relative">
        <Container>
          <div className="text-center mb-16 lg:mb-24">
            <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-tighter italic">
              {p.levels.title}
            </h2>
          </div>

          <div className="grid gap-6">
            {p.levels.items.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group grid lg:grid-cols-[200px_1fr_1fr_1fr] items-center gap-8 p-8 rounded-[2rem] border border-border bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-500"
              >
                <h3 className="text-2xl font-black uppercase tracking-tighter italic text-gold">
                  {item.level}
                </h3>
                <div className="space-y-1">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-snow/30 italic">Primary Focus</div>
                  <div className="font-bold text-snow/80 italic">{item.focus}</div>
                </div>
                <div className="space-y-1">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-snow/30 italic">Core Goals</div>
                  <div className="font-bold text-snow/80 italic">{item.goals}</div>
                </div>
                <div className="space-y-1">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-snow/30 italic">Assessment</div>
                  <div className="font-bold text-snow/80 italic">{item.evaluation}</div>
                </div>
              </motion.div>
            ))}
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
