"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
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

function Counter({ value, unit }: { value: string; unit: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  const numericValue = parseInt(value) || 0;

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = numericValue;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, numericValue]);

  return (
    <div ref={ref} className="flex flex-col items-center sm:items-start">
      <div className="text-3xl sm:text-4xl font-bold text-snow">
        {count}{value.includes("+") ? "+" : ""} <span className="text-sm font-medium text-gold">{unit}</span>
      </div>
    </div>
  );
}

export default function TentangPageClient() {
  const { dict } = useLanguage();
  const { tentangPage: p } = dict;

  return (
    <div className="relative overflow-hidden bg-ink text-snow">
      {/* 1. HERO SECTION */}
      <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 lg:pt-40 lg:pb-32 overflow-hidden border-b border-border/50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(201,162,39,0.15),transparent_50%)]" />
        <Container className="relative">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div 
              variants={stagger} 
              initial="hidden" 
              animate="show"
              className="space-y-8"
            >
              <motion.div variants={fadeUp} className="inline-flex items-center rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-[10px] sm:text-xs font-semibold tracking-widest text-gold uppercase">
                {p.hero.eyebrow}
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-snow leading-[1.1]">
                {p.hero.title}
              </motion.h1>
              <motion.p variants={fadeUp} className="max-w-xl text-lg text-snow/70 leading-relaxed">
                {p.hero.subtitle}
              </motion.p>
              
              <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                <Link href="/#kontak" className="inline-flex h-12 items-center justify-center rounded-full bg-gold px-8 text-sm font-bold text-ink transition-all hover:bg-gold-2 active:scale-95">
                  {p.hero.cta}
                </Link>
              </motion.div>

              <motion.div variants={fadeUp} className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
                {p.hero.stats.map((stat: any) => (
                  <div key={stat.label} className="space-y-1">
                    <div className="text-xl sm:text-2xl font-bold text-snow">{stat.value}</div>
                    <div className="text-[10px] sm:text-xs font-medium uppercase tracking-wider text-snow/50">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <div className="relative h-[400px] sm:h-[500px] lg:h-[600px]">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1, ease: EASE_OUT }}
                className="absolute right-0 top-0 z-10 w-4/5 h-4/5 rounded-3xl overflow-hidden border border-border shadow-2xl"
              >
                <Image src="/FOTO1.webp" alt="Training" fill className="object-cover" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -40, y: 40 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 1, ease: EASE_OUT, delay: 0.2 }}
                className="absolute left-0 bottom-0 z-20 w-3/5 h-3/5 rounded-3xl overflow-hidden border border-border shadow-2xl"
              >
                <Image src="/FOTO2.webp" alt="Action" fill className="object-cover" />
              </motion.div>
              <div className="absolute -right-4 -bottom-4 z-30 hidden sm:flex h-32 w-32 items-center justify-center rounded-full bg-gold/10 backdrop-blur-md border border-gold/30">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gold">10+</div>
                  <div className="text-[8px] font-bold uppercase tracking-tighter text-snow">Years Exp</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. HISTORY SECTION */}
      <section className="py-16 sm:py-24 bg-surface-2 border-b border-border/50">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={stagger}
              className="space-y-6"
            >
              <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-snow">
                {p.sejarahTitle}
              </motion.h2>
              <motion.p variants={fadeUp} className="text-base sm:text-lg text-snow/70 leading-relaxed">
                {p.sejarahDesc}
              </motion.p>
              <motion.div variants={fadeUp} className="rounded-2xl border border-gold/20 bg-gold/5 p-6">
                <h4 className="text-sm font-bold uppercase tracking-widest text-gold mb-2">{p.milestone.title}</h4>
                <p className="text-snow/80">{p.milestone.desc}</p>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: EASE_OUT }}
              className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-[2rem] sm:rounded-[3rem] overflow-hidden border border-border shadow-2xl"
            >
              <Image src="/FOTO3.webp" alt="History" fill className="object-cover" />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* 3. VISION & MISSION */}
      <section className="py-20 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(201,162,39,0.1),transparent_50%)]" />
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-border bg-surface/50 p-8 sm:p-12 backdrop-blur-sm"
            >
              <div className="mb-6 h-12 w-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-snow mb-4">{p.visi}</h3>
              <p className="text-lg text-snow/70 leading-relaxed">{p.visiDesc}</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-border bg-surface/50 p-8 sm:p-12 backdrop-blur-sm"
            >
              <div className="mb-6 h-12 w-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-snow mb-4">{p.misi}</h3>
              <p className="text-lg text-snow/70 leading-relaxed">{p.misiDesc}</p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* 4. CORE VALUES */}
      <section className="py-20 sm:py-32 bg-ink">
        <Container>
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-snow">{p.nilaiUtama}</h2>
            <div className="h-1 w-20 bg-gold mx-auto rounded-full" />
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {p.values.map((val: any, idx: number) => (
              <motion.div 
                key={val.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative rounded-2xl border border-border bg-surface/40 p-6 transition-all hover:bg-surface/80 hover:border-gold/30"
              >
                <div className="mb-4 text-gold group-hover:scale-110 transition-transform duration-300">
                  {val.icon === 'heart' && <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>}
                  {val.icon === 'shield' && <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>}
                  {val.icon === 'check' && <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                  {val.icon === 'star' && <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.382-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>}
                  {val.icon === 'users' && <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>}
                </div>
                <h4 className="text-lg font-bold text-snow mb-2">{val.title}</h4>
                <p className="text-sm text-snow/60">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. QUICK STATISTICS */}
      <section className="py-20 bg-gradient-to-br from-gold/15 to-ink border-y border-border/50">
        <Container>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {p.statItems.map((item: any) => (
              <Counter key={item.label} value={item.value} unit={item.unit} />
            ))}
          </div>
        </Container>
      </section>

      {/* 6. COACHING PHILOSOPHY */}
      <section className="py-20 sm:py-32 bg-surface-2">
        <Container>
          <div className="max-w-3xl mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-snow">{p.philosophy.title}</h2>
            <p className="text-lg text-snow/70">{p.philosophy.desc}</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            {p.philosophy.items.map((item: any, idx: number) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-6 p-6 rounded-2xl bg-ink/30 border border-border"
              >
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gold/10 flex items-center justify-center text-gold font-bold">
                  {idx + 1}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-snow mb-2">{item.title}</h4>
                  <p className="text-snow/70 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* 7. ATHLETE DEVELOPMENT FLOW */}
      <section className="py-20 sm:py-32 bg-ink">
        <Container>
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-snow">{p.development.title}</h2>
            <p className="text-lg text-snow/70 max-w-2xl mx-auto">{p.development.desc}</p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden lg:block" />
            <div className="space-y-12 lg:space-y-0">
              {p.development.stages.map((stage: any, idx: number) => (
                <div key={stage.title} className={`flex flex-col lg:flex-row items-center gap-8 ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className={`flex-1 w-full ${idx % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <motion.div 
                      initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="p-8 rounded-3xl border border-border bg-surface/30 backdrop-blur-sm"
                    >
                      <h4 className="text-2xl font-bold text-gold mb-3">{stage.title}</h4>
                      <p className="text-snow/70 leading-relaxed">{stage.desc}</p>
                    </motion.div>
                  </div>
                  <div className="relative z-10 h-12 w-12 rounded-full bg-ink border-2 border-gold flex items-center justify-center text-gold font-bold shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                    {idx + 1}
                  </div>
                  <div className="flex-1 hidden lg:block" />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 8. CLUB CULTURE / FOOTER CTA */}
      <section className="py-20 sm:py-32 bg-gradient-to-b from-surface-2 to-ink">
        <Container>
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[3rem] overflow-hidden relative"
          >
            <div className="absolute inset-0">
              <Image src="/FOTO6.webp" alt="Club Culture" fill className="object-cover opacity-30" />
              <div className="absolute inset-0 bg-ink/60" />
            </div>
            <div className="relative p-12 sm:p-20 text-center space-y-8">
              <h2 className="text-4xl sm:text-5xl font-bold text-snow">Ready to Elevate Your Game?</h2>
              <p className="text-xl text-snow/80 max-w-2xl mx-auto">
                Join Surabaya&apos;s most professional badminton environment. Start your journey with PRADA BC today.
              </p>
              <div className="flex justify-center pt-4">
                <Link href="/#kontak" className="inline-flex h-14 items-center justify-center rounded-full bg-snow px-10 text-lg font-bold text-ink transition-all hover:bg-gold hover:text-ink active:scale-95 shadow-xl">
                  Contact Us Now
                </Link>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
