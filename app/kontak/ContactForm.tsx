"use client";

import { useMemo, useState } from "react";
import { useLanguage } from "@/app/_components/LanguageProvider";

type FormState = {
  name: string;
  phone: string;
  age: string;
  goals: string;
  schedule: string;
};

function encode(value: string) {
  return encodeURIComponent(value);
}

export default function ContactForm() {
  const { dict } = useLanguage();
  const f = dict.kontakPage.form;
  const [state, setState] = useState<FormState>({
    name: "",
    phone: "",
    age: "",
    goals: "",
    schedule: "",
  });
  const [status, setStatus] = useState<"idle" | "ready">("idle");

  const whatsappHref = useMemo(() => {
    const waNumber = "6281234567890"; // From dict.kontakPage.info.items.whatsapp.value
    const text = [
      `*Konsultasi PRADA BC*`,
      `Nama: ${state.name}`,
      `WhatsApp: ${state.phone}`,
      `Usia Atlet: ${state.age}`,
      `Jadwal: ${state.schedule}`,
      `Tujuan: ${state.goals}`,
    ].join("\n");

    return `https://wa.me/${waNumber}?text=${encode(text)}`;
  }, [state]);

  return (
    <form
      className="group relative overflow-hidden rounded-[40px] border border-[#E9DBC0] bg-white/70 p-8 sm:p-10 backdrop-blur-xl shadow-[0_20px_80px_rgba(201,168,97,0.12)] transition-all duration-500 hover:shadow-[0_30px_100px_rgba(201,168,97,0.18)]"
      onSubmit={(e) => {
        e.preventDefault();
        setStatus("ready");
        window.open(whatsappHref, "_blank");
      }}
    >
      <div className="space-y-8">
        <div className="space-y-2">
          <h3 className="text-3xl font-black tracking-tight text-[#18181B] leading-tight">{f.title}</h3>
          <div className="h-1 w-12 bg-gold/40 rounded-full" />
        </div>

        <div className="grid gap-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="grid gap-2">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gold/80 ml-1">{f.fields.name}</span>
              <input
                value={state.name}
                onChange={(e) => setState((s) => ({ ...s, name: e.target.value }))}
                className="h-14 rounded-2xl border border-[#E9DBC0] bg-[#FDFBF7]/50 px-5 text-[#18181B] placeholder:text-[#18181B]/30 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:bg-white transition-all duration-300"
                placeholder={f.fields.namePlaceholder}
                required
              />
            </label>

            <label className="grid gap-2">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gold/80 ml-1">{f.fields.whatsapp}</span>
              <input
                value={state.phone}
                onChange={(e) => setState((s) => ({ ...s, phone: e.target.value }))}
                type="tel"
                className="h-14 rounded-2xl border border-[#E9DBC0] bg-[#FDFBF7]/50 px-5 text-[#18181B] placeholder:text-[#18181B]/30 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:bg-white transition-all duration-300"
                placeholder={f.fields.whatsappPlaceholder}
                required
              />
            </label>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <label className="grid gap-2">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gold/80 ml-1">{f.fields.age}</span>
              <input
                value={state.age}
                onChange={(e) => setState((s) => ({ ...s, age: e.target.value }))}
                className="h-14 rounded-2xl border border-[#E9DBC0] bg-[#FDFBF7]/50 px-5 text-[#18181B] placeholder:text-[#18181B]/30 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:bg-white transition-all duration-300"
                placeholder={f.fields.agePlaceholder}
                required
              />
            </label>

            <label className="grid gap-2">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gold/80 ml-1">{f.fields.schedule}</span>
              <input
                value={state.schedule}
                onChange={(e) => setState((s) => ({ ...s, schedule: e.target.value }))}
                className="h-14 rounded-2xl border border-[#E9DBC0] bg-[#FDFBF7]/50 px-5 text-[#18181B] placeholder:text-[#18181B]/30 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:bg-white transition-all duration-300"
                placeholder={f.fields.schedulePlaceholder}
                required
              />
            </label>
          </div>

          <label className="grid gap-2">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gold/80 ml-1">{f.fields.goals}</span>
            <textarea
              value={state.goals}
              onChange={(e) => setState((s) => ({ ...s, goals: e.target.value }))}
              className="min-h-[120px] rounded-2xl border border-[#E9DBC0] bg-[#FDFBF7]/50 px-5 py-4 text-[#18181B] placeholder:text-[#18181B]/30 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:bg-white transition-all duration-300 resize-none"
              placeholder={f.fields.goalsPlaceholder}
              required
            />
          </label>
        </div>

        <div className="flex flex-col gap-6 pt-4">
          <button
            type="submit"
            className="group relative inline-flex h-16 items-center justify-center rounded-2xl bg-[#18181B] px-10 text-sm font-bold text-white shadow-xl transition-all duration-300 hover:shadow-gold/20 hover:-translate-y-1 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              {f.submit}
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </button>
          
          <div className="flex items-center gap-3 px-2">
            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <p className="text-xs font-medium text-[#5F5F5F]">
              {status === "ready" ? f.sending : "Consultation requests are typically processed within 1 hour."}
            </p>
          </div>
        </div>
      </div>
    </form>
  );
}
