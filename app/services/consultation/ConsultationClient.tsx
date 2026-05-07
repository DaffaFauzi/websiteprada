"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
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

const getIcon = (key: string) => {
  switch (key) {
    case "star": return <IconStar />;
    case "shield": return <IconShield />;
    case "chart": return <IconChart />;
    default: return null;
  }
};

export default function ConsultationClient() {
  const { dict } = useLanguage();
  const p = dict.consultationPage;
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

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
            <span className="text-gold/60">{dict.nav.programConsultation}</span>
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
          <div className="grid sm:grid-cols-3 gap-8">
            {p.benefits.items.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col items-center text-center space-y-6 p-8 rounded-3xl border border-border bg-ink/50"
              >
                <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center border border-gold/20">
                  {getIcon(item.icon)}
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold uppercase tracking-tight text-snow italic">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-snow/60">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Form Section */}
      <section className="py-20 lg:py-32 relative">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-tighter italic">
                    {p.form.title}
                  </h2>
                  <p className="text-snow/60 text-lg font-medium">
                    {p.form.desc}
                  </p>
                </div>

                <div className="p-8 rounded-[3rem] border border-gold/20 bg-gold/5 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center text-ink">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest text-gold italic">Quick Response</div>
                      <div className="text-xl font-bold text-snow italic">+62 812 3456 7890</div>
                    </div>
                  </div>
                  <p className="text-sm text-snow/50 leading-relaxed italic">
                    "Our team typically responds within 2 hours during operational hours."
                  </p>
                </div>
              </div>

              <div className="relative">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-ink/90 backdrop-blur-xl rounded-[3rem] border border-gold/30 p-12 text-center space-y-6"
                  >
                    <div className="w-20 h-20 rounded-full bg-gold flex items-center justify-center text-ink">
                      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-black uppercase italic text-gold">Thank You</h3>
                      <p className="text-snow/60 font-medium">Your request has been received. We'll be in touch shortly.</p>
                    </div>
                  </motion.div>
                ) : null}

                <form onSubmit={handleSubmit} className="p-8 sm:p-12 rounded-[3.5rem] border border-border bg-white/[0.03] space-y-6 relative z-10">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-snow/40 italic px-2">{p.form.labels.name}</label>
                      <input required type="text" className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl px-6 text-snow focus:outline-none focus:border-gold transition-colors font-medium" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-snow/40 italic px-2">{p.form.labels.parentName}</label>
                      <input required type="text" className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl px-6 text-snow focus:outline-none focus:border-gold transition-colors font-medium" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-snow/40 italic px-2">{p.form.labels.age}</label>
                      <input required type="number" className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl px-6 text-snow focus:outline-none focus:border-gold transition-colors font-medium" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-snow/40 italic px-2">{p.form.labels.level}</label>
                      <select required className="w-full h-14 bg-ink border border-white/10 rounded-2xl px-6 text-snow focus:outline-none focus:border-gold transition-colors font-medium appearance-none">
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Competitive</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-snow/40 italic px-2">{p.form.labels.goal}</label>
                    <input required type="text" className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl px-6 text-snow focus:outline-none focus:border-gold transition-colors font-medium" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-snow/40 italic px-2">{p.form.labels.message}</label>
                    <textarea className="w-full min-h-[120px] bg-white/5 border border-white/10 rounded-2xl p-6 text-snow focus:outline-none focus:border-gold transition-colors font-medium" />
                  </div>

                  <div className="pt-4 space-y-4">
                    <button type="submit" className="w-full h-16 rounded-2xl bg-gold text-ink font-black uppercase tracking-widest italic hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-gold/10">
                      {p.form.labels.submit}
                    </button>
                    <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="flex w-full h-16 rounded-2xl border-2 border-gold text-gold font-black uppercase tracking-widest italic items-center justify-center hover:bg-gold/10 transition-all">
                      {p.form.labels.whatsapp}
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </motion.main>
  );
}
