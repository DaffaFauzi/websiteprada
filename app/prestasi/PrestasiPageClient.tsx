"use client";

import Image from "next/image";
import Container from "@/app/_components/Container";
import PageHero from "@/app/_components/PageHero";
import { useLanguage } from "@/app/_components/LanguageProvider";
import { motion } from "framer-motion";

export default function PrestasiPageClient() {
  const { dict } = useLanguage();
  const { prestasiPage: p } = dict;

  return (
    <div className="bg-ink pb-20">
      <PageHero
        eyebrow={p.hero.eyebrow}
        title={p.hero.title}
        subtitle={p.hero.subtitle}
      />

      {/* Medal Statistics Section */}
      <section className="relative -mt-8 z-10">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {p.stats.items.map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-border bg-surface p-5 sm:p-6 shadow-sm transition-all hover:shadow-md hover:border-gold/30"
              >
                <div className="flex flex-col gap-3">
                  <div className={`inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl transition-colors ${
                    item.icon === 'gold' ? 'bg-gold/10 text-gold' :
                    item.icon === 'silver' ? 'bg-snow/5 text-snow/60' :
                    item.icon === 'bronze' ? 'bg-[#CD7F32]/10 text-[#CD7F32]' :
                    'bg-gold/10 text-gold'
                  }`}>
                    {item.icon === 'tournament' ? (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>
                    ) : (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
                    )}
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold text-snow tracking-tight">{item.value}</div>
                    <div className="text-xs sm:text-sm font-medium text-snow/50 uppercase tracking-wider mt-0.5">{item.label}</div>
                  </div>
                </div>
                <div className="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity">
                   <svg viewBox="0 0 24 24" fill="currentColor" className="w-24 h-24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Main Content Area */}
      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 items-start">
            
            {/* LEFT COLUMN: Main Achievements & Timeline */}
            <div className="lg:col-span-8 space-y-16">
              
              {/* Championships Timeline */}
              <div>
                <div className="flex items-center gap-4 mb-8 sm:mb-10">
                  <div className="h-px flex-1 bg-border/60" />
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-snow whitespace-nowrap">
                    {p.championships.title}
                  </h2>
                  <div className="h-px flex-1 bg-border/60" />
                </div>
                
                <div className="space-y-6 sm:space-y-8 relative before:absolute before:left-[19px] sm:before:left-[27px] before:top-2 before:bottom-2 before:w-px before:bg-border/60">
                  {p.championships.items.map((item, idx) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className="relative pl-12 sm:pl-16 group"
                    >
                      <div className="absolute left-0 top-1 sm:top-2 h-10 w-10 sm:h-14 sm:w-14 rounded-full bg-surface border border-border shadow-sm flex items-center justify-center z-10 group-hover:border-gold transition-colors">
                        <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-gold animate-pulse-slow" />
                      </div>
                      
                      <div className="rounded-2xl sm:rounded-3xl border border-border bg-surface p-6 sm:p-8 transition-all hover:shadow-xl hover:shadow-gold/5 group-hover:-translate-y-1 duration-300">
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                          <div>
                            <span className="inline-block px-3 py-1 rounded-full bg-gold/10 text-gold text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-3">
                              {item.meta.split(' • ').pop()}
                            </span>
                            <h3 className="text-lg sm:text-xl font-bold text-snow group-hover:text-gold transition-colors">
                              {item.title}
                            </h3>
                            <p className="mt-1 text-sm text-snow/60 font-medium">
                              {item.meta.split(' • ').slice(0, -1).join(' • ')}
                            </p>
                          </div>
                          <div className="h-px w-full sm:h-auto sm:w-px bg-border/60 sm:mx-4" />
                          <div className="sm:max-w-[200px]">
                            <p className="text-sm leading-relaxed text-snow/70 italic">
                              "{item.highlight}"
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Yearly Milestones */}
              <div className="rounded-3xl bg-surface-2/50 border border-border p-8 sm:p-12 overflow-hidden relative">
                <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 h-64 w-64 bg-gold/5 rounded-full blur-3xl" />
                
                <h2 className="text-xl sm:text-2xl font-bold text-snow mb-8 relative z-10 flex items-center gap-3">
                   <div className="w-8 h-8 rounded-lg bg-gold/20 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-gold"><path d="M12 2v20M2 12h20"/></svg>
                   </div>
                   {p.milestones.title}
                </h2>
                
                <div className="grid sm:grid-cols-3 gap-8 relative z-10">
                  {p.milestones.items.map((m) => (
                    <div key={m.year} className="group">
                      <div className="text-3xl font-black text-gold/20 group-hover:text-gold/40 transition-colors duration-500 mb-2">{m.year}</div>
                      <h4 className="text-base font-bold text-snow mb-2">{m.title}</h4>
                      <p className="text-sm text-snow/60 leading-relaxed">{m.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Supporting Content */}
            <aside className="lg:col-span-4 space-y-8 sm:space-y-10">
              
              {/* Featured Athletes */}
              <div className="rounded-3xl border border-border bg-surface p-6 sm:p-8 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg sm:text-xl font-bold text-snow">
                    {p.athletes.title}
                  </h2>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-gold"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </div>
                
                <div className="space-y-6">
                  {p.athletes.items.map((a) => (
                    <div key={a.name} className="group relative">
                      <div className="flex items-center gap-4">
                        <div className="relative h-12 w-12 sm:h-14 sm:w-14 shrink-0 overflow-hidden rounded-2xl bg-ink border border-border group-hover:border-gold transition-colors">
                          <Image
                            src="/globe.svg"
                            alt={`Photo ${a.name}`}
                            fill
                            className="object-cover p-2 opacity-20"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <div>
                          <h4 className="text-sm sm:text-base font-bold text-snow leading-none">
                            {a.name}
                          </h4>
                          <p className="mt-1 text-xs text-gold font-bold uppercase tracking-wider">
                            {a.focus}
                          </p>
                        </div>
                      </div>
                      <div className="mt-3 pl-4 border-l-2 border-border group-hover:border-gold/30 transition-colors">
                        <p className="text-xs sm:text-sm text-snow/60 leading-relaxed italic">
                           {a.highlight}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Awards & Certificates */}
              <div className="rounded-3xl border border-border bg-snow p-8 text-white relative overflow-hidden shadow-xl">
                 <div className="absolute top-0 right-0 p-4 opacity-10">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-20 h-20 text-white"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                 </div>
                 
                 <h2 className="text-lg sm:text-xl font-bold mb-6 relative z-10">
                   {p.awards.title}
                 </h2>
                 
                 <div className="space-y-6 relative z-10">
                   {p.awards.items.map((award) => (
                     <div key={award.title} className="group">
                        <h4 className="text-sm sm:text-base font-bold text-gold mb-1 group-hover:translate-x-1 transition-transform">
                          {award.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                          {award.desc}
                        </p>
                     </div>
                   ))}
                 </div>
                 
                 <div className="mt-8 pt-6 border-t border-white/10 relative z-10">
                    <button className="text-xs font-bold uppercase tracking-widest text-gold hover:text-white transition-colors flex items-center gap-2">
                       Verify Credentials
                       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-3 h-3"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </button>
                 </div>
              </div>

              {/* Quick Info Box */}
              <div className="rounded-3xl bg-gold/10 border border-gold/20 p-6 sm:p-8">
                <h3 className="text-sm font-bold text-gold uppercase tracking-widest mb-3">Professional Standard</h3>
                <p className="text-sm text-snow/80 leading-relaxed">
                  All PRADA BC achievements are verified by regional sports associations and reflect our commitment to professional athletic excellence.
                </p>
              </div>

            </aside>
          </div>
        </Container>
      </section>

      {/* Final CTA Section */}
      <section className="pb-16 sm:pb-24">
         <Container>
            <div className="rounded-3xl sm:rounded-[3rem] bg-surface border border-border p-8 sm:p-16 text-center relative overflow-hidden">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(197,164,109,0.05),transparent_50%)]" />
               <div className="max-w-2xl mx-auto relative z-10">
                  <h2 className="text-3xl sm:text-4xl font-bold text-snow tracking-tight mb-6">
                    Start Your Championship Journey
                  </h2>
                  <p className="text-lg text-snow/60 mb-10">
                    Join PRADA BC and be part of our legacy of excellence. Structured training for future champions.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                     <button className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-snow text-white font-bold hover:bg-gold transition-colors">
                        Register Now
                     </button>
                     <button className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-transparent border border-border text-snow font-bold hover:bg-ink transition-colors">
                        View Programs
                     </button>
                  </div>
               </div>
            </div>
         </Container>
      </section>
    </div>
  );
}
