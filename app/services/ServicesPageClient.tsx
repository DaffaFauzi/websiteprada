"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Container from "@/app/_components/Container";
import { useLanguage } from "@/app/_components/LanguageProvider";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export default function ServicesPageClient() {
  const { dict } = useLanguage();

  const serviceIcons = [
    <svg key="1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
    <svg key="2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
    <svg key="3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>,
    <svg key="4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
  ];

  return (
    <div className="bg-ink text-snow min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden border-b border-border/70">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(201,162,39,0.15),transparent_70%)]" />
        <Container className="relative">
          <motion.div
            initial="hidden"
            animate="show"
            variants={stagger}
            className="max-w-4xl"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-semibold tracking-widest text-gold uppercase mb-6">
              {dict.services.eyebrow}
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-8 leading-[1.1] [font-family:var(--font-display)]">
              {dict.servicesPage.hero.title}
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg sm:text-xl text-snow/70 leading-relaxed max-w-2xl">
              {dict.servicesPage.hero.desc}
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-32">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2"
          >
            {dict.services.programs.map((program, idx) => (
              <motion.article
                key={idx}
                variants={fadeUp}
                className="group relative flex flex-col p-8 sm:p-10 rounded-[2rem] border border-border bg-surface/40 backdrop-blur-sm transition-all duration-500 hover:bg-[#fffdf9] hover:border-gold/30 hover:shadow-[0_30px_60px_rgba(197,164,109,0.15)] hover:-translate-y-2"
              >
                <div className="flex items-start justify-between mb-8">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gold/10 text-gold transition-all duration-500 group-hover:scale-110 group-hover:bg-gold group-hover:text-snow shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                    {serviceIcons[idx % serviceIcons.length]}
                  </div>
                  <div className="text-4xl font-bold text-snow/5 transition-colors duration-500 group-hover:text-gold/20">
                    0{idx + 1}
                  </div>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-snow mb-4 transition-colors duration-500">
                  {program.title}
                </h3>
                <p className="text-lg text-snow/60 leading-relaxed mb-8 flex-1 transition-colors duration-500">
                  {program.desc}
                </p>
                <Link
                  href={idx === 0 ? "/services/programs" : "/#kontak"}
                  className="inline-flex items-center text-gold font-bold text-lg transition-all duration-500 group-hover:translate-x-2"
                >
                  {dict.services.detailProgram}
                  <svg className="ml-2 w-5 h-5 transition-transform duration-500 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Extra Section: Training Flow */}
      <section className="py-20 lg:py-32 bg-surface/20 border-y border-border/70">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="text-center max-w-3xl mx-auto mb-16 lg:mb-24"
          >
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              {dict.servicesPage.extra.flowTitle}
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-snow/60">
              {dict.servicesPage.extra.flowDesc}
            </motion.p>
          </motion.div>

          <div className="grid gap-12 lg:grid-cols-4 relative">
            {/* Connection Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent -translate-y-1/2" />
            
            {dict.servicesPage.extra.stages.map((stage, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
                className="relative flex flex-col items-center text-center group"
              >
                <div className="relative z-10 w-16 h-16 rounded-full bg-ink border-2 border-gold/40 flex items-center justify-center text-xl font-bold text-gold mb-6 transition-all duration-500 group-hover:scale-110 group-hover:bg-gold group-hover:text-ink group-hover:border-gold">
                  {idx + 1}
                </div>
                <h4 className="text-xl font-bold text-snow mb-3">{stage.title}</h4>
                <p className="text-sm text-snow/50 leading-relaxed">{stage.desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-32 overflow-hidden relative">
        <div className="absolute inset-0 bg-gold/[0.03]" />
        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-[3rem] border border-gold/20 bg-ink p-10 sm:p-16 lg:p-20 text-center shadow-2xl overflow-hidden relative group"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(201,162,39,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight mb-8 relative z-10">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-lg text-snow/60 mb-10 max-w-2xl mx-auto relative z-10">
              Consult with our coaching team today to map out your personalized development path and join the PRADA BC excellence culture.
            </p>
            <Link
              href="/#kontak"
              className="inline-flex h-14 items-center justify-center rounded-full bg-gold px-12 text-lg font-bold text-ink transition-all duration-300 hover:bg-gold-2 hover:-translate-y-1 hover:shadow-2xl relative z-10 active:scale-95"
            >
              Start Consultation
            </Link>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
