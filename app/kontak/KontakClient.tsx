"use client";

import { useState } from "react";
import Container from "@/app/_components/Container";
import ContactForm from "@/app/kontak/ContactForm";
import { useLanguage } from "@/app/_components/LanguageProvider";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function KontakClient() {
  const { dict } = useLanguage();
  const k = dict.kontakPage;

  return (
    <div className="bg-[#FDFBF7] min-h-screen text-[#18181B] font-sans selection:bg-gold/30">
      {/* 1. HERO CONTACT SECTION */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FDFBF7] via-[#F8F4EC] to-[#EFE7DA] -z-10" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/5 blur-[120px] rounded-full -z-10 pointer-events-none" />
        
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20">
                <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gold">{k.hero.badge}</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-black tracking-tight leading-[1.05] text-[#18181B]">
                {k.hero.title}
              </h1>
              
              <p className="text-xl text-[#5F5F5F] leading-relaxed max-w-xl">
                {k.hero.desc}
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <Link 
                  href="#consultation-form"
                  className="px-8 py-4 rounded-2xl bg-[#18181B] text-white font-bold text-sm shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  {k.hero.buttons.free}
                </Link>
                <Link 
                  href={`https://wa.me/6281234567890`}
                  target="_blank"
                  className="px-8 py-4 rounded-2xl bg-white border border-[#E9DBC0] text-[#18181B] font-bold text-sm shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  {k.hero.buttons.wa}
                </Link>
              </div>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] lg:aspect-square rounded-[40px] overflow-hidden border border-[#E9DBC0] shadow-[0_20px_80px_rgba(201,168,97,0.12)] bg-white/50">
                <Image 
                  src="/FOTO10.webp"
                  alt="PRADA BC Premium Training"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#18181B]/40 via-transparent to-transparent" />
              </div>

              {/* Floating Cards */}
              <div className="absolute -left-6 top-1/4 lg:-left-12 flex flex-col gap-4">
                {k.stats.map((stat: any, idx: number) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                    className="backdrop-blur-xl bg-white/70 border border-white/50 p-4 lg:p-6 rounded-3xl shadow-xl space-y-1"
                  >
                    <div className="text-2xl lg:text-3xl font-black text-[#18181B]">{stat.value}</div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-gold">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* 2. CONSULTATION OPTIONS SECTION */}
      <section className="py-20 bg-white border-y border-[#E9DBC0]/50">
        <Container>
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-black tracking-tight text-[#18181B]">{k.consultation.title}</h2>
            <div className="h-1 w-20 bg-gold/30 rounded-full mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {k.consultation.items.map((item: any, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-10 rounded-[32px] border border-[#E9DBC0] bg-[#FDFBF7] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-gold/50"
              >
                <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center text-gold mb-8 group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {idx === 0 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />}
                    {idx === 1 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />}
                    {idx === 2 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />}
                  </svg>
                </div>
                <h3 className="text-2xl font-black mb-4 text-[#18181B]">{item.title}</h3>
                <p className="text-[#5F5F5F] leading-relaxed mb-8">
                  {item.desc}
                </p>
                <Link 
                  href="#consultation-form"
                  className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-gold hover:gap-4 transition-all duration-300"
                >
                  {item.cta}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. CONTACT FORM + INFO */}
      <section id="consultation-form" className="py-24 bg-[#FDFBF7]">
        <Container>
          <div className="grid lg:grid-cols-[1fr_0.6fr] gap-12 lg:gap-20 items-start">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>

            {/* Info Cards */}
            <div className="space-y-8 lg:pt-10">
              <div className="space-y-4">
                <h2 className="text-4xl font-black tracking-tight text-[#18181B]">{k.info.title}</h2>
                <div className="h-1 w-20 bg-gold/30 rounded-full" />
              </div>
              
              <div className="grid gap-4">
                {Object.entries(k.info.items).map(([key, item]: [string, any], idx: number) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-6 rounded-[32px] border border-[#E9DBC0] bg-white shadow-sm hover:shadow-xl transition-all duration-500 group flex items-center gap-6"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-gold/5 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-all duration-500">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {key === 'whatsapp' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />}
                        {key === 'instagram' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />}
                        {key === 'youtube' && (
                          <>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </>
                        )}
                        {key === 'location' && (
                          <>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </>
                        )}
                        {key === 'hours' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />}
                      </svg>
                    </div>
                    <div className="space-y-1">
                      <div className="text-[10px] font-black uppercase tracking-[0.2em] text-gold/80">{item.label}</div>
                      <div className="text-lg font-bold text-[#18181B]">{item.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. LOCATION & MAP SECTION */}
      <section className="py-24 bg-white border-t border-[#E9DBC0]/30">
        <Container>
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20 items-center">
            {/* Location Details */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-5xl font-black tracking-tight leading-tight text-[#18181B]">
                  {k.location.title}
                </h2>
                <p className="text-lg text-[#5F5F5F] leading-relaxed">
                  {k.location.desc}
                </p>
              </div>

              <div className="grid gap-6">
                <div className="flex items-start gap-4 p-6 rounded-[24px] bg-[#FDFBF7] border border-[#E9DBC0]/50">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-black uppercase tracking-wider text-gold/80 mb-1">Hours</div>
                    <div className="font-bold text-[#18181B]">{k.location.hours}</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-[24px] bg-[#FDFBF7] border border-[#E9DBC0]/50">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-black uppercase tracking-wider text-gold/80 mb-1">Security</div>
                    <div className="font-bold text-[#18181B]">{k.location.parking}</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {k.location.highlights.map((h: string, i: number) => (
                  <span key={i} className="px-4 py-2 rounded-xl bg-gold/5 border border-gold/10 text-[10px] font-black uppercase tracking-wider text-gold">
                    {h}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-[16/10] rounded-[40px] overflow-hidden border border-[#E9DBC0] shadow-2xl"
            >
              <iframe
                title={k.location.mapTitle}
                src="https://www.google.com/maps?q=Surabaya&output=embed"
                loading="lazy"
                className="absolute inset-0 h-full w-full grayscale contrast-[1.1] hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* 5. FAQ MINI SECTION */}
      <section className="py-24 bg-[#FDFBF7]">
        <Container>
          <div className="max-w-3xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-black tracking-tight text-[#18181B]">{k.faq.title}</h2>
              <div className="h-1 w-20 bg-gold/30 rounded-full mx-auto" />
            </div>

            <div className="space-y-4">
              {k.faq.items.map((item: any, idx: number) => (
                <FAQItem key={idx} question={item.q} answer={item.a} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 6. FINAL CTA BANNER */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-[48px] bg-[#18181B] overflow-hidden p-12 lg:p-24 text-center"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_#C9A861_1px,_transparent_1px)] bg-[length:40px_40px]" />
            </div>
            
            <div className="relative z-10 space-y-8 max-w-2xl mx-auto">
              <h2 className="text-4xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                {k.cta.title}
              </h2>
              <p className="text-lg text-white/60 leading-relaxed">
                {k.cta.desc}
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-6">
                <Link 
                  href="/register"
                  className="px-10 py-5 rounded-2xl bg-gold text-[#18181B] font-bold text-sm shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  {k.cta.buttons.register}
                </Link>
                <Link 
                  href={`https://wa.me/6281234567890`}
                  target="_blank"
                  className="px-10 py-5 rounded-2xl bg-white/10 border border-white/20 text-white font-bold text-sm hover:bg-white/20 hover:-translate-y-1 transition-all duration-300"
                >
                  {k.cta.buttons.wa}
                </Link>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-[#E9DBC0] rounded-[24px] bg-white overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left transition-colors hover:bg-[#FDFBF7]"
      >
        <span className="text-lg font-bold text-[#18181B] pr-8">{question}</span>
        <div className={`shrink-0 w-8 h-8 rounded-full border border-[#E9DBC0] flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-gold border-gold text-white rotate-180' : 'text-gold'}`}>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="p-6 pt-0 text-[#5F5F5F] leading-relaxed border-t border-[#E9DBC0]/50 mx-6 mt-0">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


