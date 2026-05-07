"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
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

const profileIcons = {
  management: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2M12 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  coaching: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  development: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  ),
  operations: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
};

export default function OrganisasiPageClient() {
  const { dict } = useLanguage();
  const { organisasiPage: p } = dict;

  return (
    <div className="relative overflow-hidden bg-ink text-snow">
      {/* DECORATIVE BACKGROUND ACCENTS */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[10%] -right-[10%] w-[40%] h-[40%] bg-gold/5 blur-[120px] rounded-full" />
        <div className="absolute top-[40%] -left-[10%] w-[30%] h-[30%] bg-gold/3 blur-[100px] rounded-full" />
        {/* Geometric Lines */}
        <div className="absolute top-[25%] left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
        <div className="absolute top-[55%] left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/5 to-transparent" />
        <div className="absolute top-[85%] left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
        {/* Editorial Shapes */}
        <div className="absolute top-[15%] left-[5%] text-gold/10 font-light text-2xl select-none">+</div>
        <div className="absolute top-[45%] right-[5%] text-gold/10 font-light text-2xl select-none">+</div>
        <div className="absolute top-[75%] left-[8%] text-gold/10 font-light text-2xl select-none">+</div>
      </div>

      {/* 1. HERO SECTION (Compressed Editorial Layout) */}
      <section className="relative pt-20 pb-12 sm:pt-24 sm:pb-16 lg:pt-32 lg:pb-20 overflow-hidden border-b border-border/30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(201,162,39,0.08),transparent_50%)]" />
        <Container className="relative">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <motion.div variants={stagger} initial="hidden" animate="show" className="space-y-6">
              <motion.div variants={fadeUp} className="inline-flex items-center rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-[10px] font-semibold tracking-widest text-gold uppercase">
                {p.hero.eyebrow}
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl lg:text-5xl font-bold tracking-tight text-snow leading-[1.1]">
                {p.hero.title}
              </motion.h1>
              <motion.p variants={fadeUp} className="max-w-lg text-base sm:text-lg text-snow/70 leading-relaxed">
                {p.hero.subtitle}
              </motion.p>
              
              <motion.div variants={fadeUp} className="flex flex-wrap gap-8 pt-6 border-t border-border/30">
                {p.hero.stats.map((stat: any) => (
                  <div key={stat.label} className="space-y-0.5">
                    <div className="text-xl sm:text-2xl font-bold text-gold">{stat.value}</div>
                    <div className="text-[10px] font-medium uppercase tracking-wider text-snow/40">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <div className="relative h-[300px] sm:h-[400px] lg:h-[450px] hidden sm:block">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: EASE_OUT }}
                className="absolute right-0 top-0 z-10 w-4/5 h-[90%] rounded-[2rem] overflow-hidden border border-border/50 shadow-2xl"
              >
                <Image src="/FOTO8.webp" alt="Management" fill className="object-cover opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -30, y: 30 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 1, ease: EASE_OUT, delay: 0.2 }}
                className="absolute left-0 bottom-4 z-20 w-[55%] rounded-2xl overflow-hidden border border-border/50 shadow-2xl bg-surface/90 backdrop-blur-md p-6"
              >
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-snow leading-none">Institutional Integrity</div>
                    <p className="text-[10px] text-snow/50 mt-1">Ardana Perkasa Group Standards</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. MAIN CONTENT AREA (Dashboard Grid) */}
      <section className="py-16 sm:py-20 bg-surface-2/30">
        <Container>
          {/* Introductory Overview (formerly Sidebar) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 grid lg:grid-cols-[1fr_2fr] gap-8 items-center p-8 sm:p-10 rounded-[2.5rem] border border-border/50 bg-ink/40 backdrop-blur-sm relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 blur-3xl -mr-32 -mt-32 rounded-full" />
            
            <div className="flex items-center gap-5 relative z-10">
              <div className="h-16 w-16 rounded-2xl bg-gold flex items-center justify-center text-ink font-bold text-2xl shadow-lg shadow-gold/20">
                P
              </div>
              <div>
                <h3 className="text-xl font-bold text-snow">{p.sidebar.title}</h3>
                <p className="text-[10px] text-gold uppercase tracking-[0.2em] font-bold mt-1">PRADA BC OFFICIAL</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-8 relative z-10">
              <p className="text-sm text-snow/70 leading-relaxed">
                {p.sidebar.summary}
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 h-4 w-1 rounded-full bg-gold" />
                  <p className="text-xs text-snow/60 italic leading-relaxed">
                    &quot;{p.sidebar.missionDesc}&quot;
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {p.sidebar.items.slice(0, 3).map((item: string) => (
                    <span key={item} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-snow/60">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Teams Grid - Multi-column Layout */}
          <div className="grid gap-x-12 gap-y-16 lg:grid-cols-2">
            {p.teams.map((team: any, teamIdx: number) => (
              <section key={team.id} id={team.id} className="scroll-mt-32">
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-9 w-9 rounded-lg bg-gold/10 flex items-center justify-center text-gold shrink-0">
                    {profileIcons[team.id as keyof typeof profileIcons]}
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-snow tracking-tight">
                    {team.name}
                  </h2>
                  <div className="flex-1 h-px bg-gradient-to-r from-border/50 to-transparent" />
                </div>

                <div className="space-y-4">
                  {team.members.map((member: any, idx: number) => (
                    <motion.article 
                      key={member.name}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (teamIdx * 0.1) + (idx * 0.05) }}
                      whileHover={{ x: 8 }}
                      className="group relative grid grid-cols-[auto_1fr] gap-5 p-5 rounded-2xl border border-border/50 bg-ink/20 transition-all hover:bg-ink/40 hover:border-gold/30 overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-2xl -mr-16 -mt-16 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      
                      <div className="relative h-14 w-14 sm:h-16 sm:w-16 rounded-xl bg-surface/50 border border-border/50 flex items-center justify-center text-gold shrink-0 overflow-hidden group-hover:border-gold/50 transition-colors">
                        <Image src="/window.svg" alt="" fill className="object-cover opacity-5" />
                        <span className="text-xl font-bold opacity-30 group-hover:opacity-60 transition-opacity">{member.name.charAt(0)}</span>
                      </div>

                      <div className="flex flex-col justify-center min-w-0">
                        <div className="flex justify-between items-start gap-2 mb-1">
                          <h4 className="text-base sm:text-lg font-bold text-snow group-hover:text-gold transition-colors truncate">
                            {member.name}
                          </h4>
                          <span className="shrink-0 px-2 py-0.5 rounded-md bg-gold/10 border border-gold/20 text-[9px] font-bold text-gold uppercase tracking-wider">
                            {member.exp}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs font-semibold text-gold/80">{member.role}</span>
                          <span className="w-1 h-1 rounded-full bg-white/20" />
                          <span className="text-[9px] uppercase tracking-widest text-snow/40 font-medium">{member.division}</span>
                        </div>
                        <p className="text-xs text-snow/50 leading-relaxed line-clamp-2">
                          {member.desc}
                        </p>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. CULTURE SECTION (Tighter) */}
      <section className="py-16 sm:py-20 bg-ink relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(201,162,39,0.03),transparent_70%)]" />
        <Container className="relative">
          <div className="text-center max-w-xl mx-auto mb-12 space-y-3">
            <h2 className="text-3xl font-bold text-snow">{p.culture.title}</h2>
            <p className="text-base text-snow/60">{p.culture.desc}</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {p.culture.items.map((item: any, idx: number) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-2xl border border-border/40 bg-surface/20 backdrop-blur-sm group hover:border-gold/30 transition-colors"
              >
                <div className="h-10 w-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold mb-5 group-hover:bg-gold group-hover:text-ink transition-colors">
                  <span className="font-bold text-sm">{idx + 1}</span>
                </div>
                <h4 className="text-lg font-bold text-snow mb-2 group-hover:text-gold transition-colors">{item.title}</h4>
                <p className="text-sm text-snow/50 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. CTA SECTION (Compressed) */}
      <section className="py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-ink to-ink" />
        <Container className="relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2.5rem] border border-gold/20 bg-ink/40 p-10 sm:p-16 text-center space-y-6 backdrop-blur-md overflow-hidden relative"
          >
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gold/10 blur-3xl" />
            <div className="absolute -left-16 -bottom-16 h-48 w-48 rounded-full bg-gold/5 blur-3xl" />
            
            <h2 className="text-3xl sm:text-4xl font-bold text-snow tracking-tight">{p.ctaSection.title}</h2>
            <p className="text-base sm:text-lg text-snow/60 max-w-xl mx-auto">
              {p.ctaSection.subtitle}
            </p>
            <div className="flex justify-center pt-2 relative z-10">
              <Link href="/#kontak" className="inline-flex h-12 items-center justify-center rounded-full bg-gold px-8 text-base font-bold text-ink transition-all hover:bg-gold-2 hover:scale-105 active:scale-95 shadow-lg shadow-gold/20">
                {p.ctaSection.button}
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
