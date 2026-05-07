"use client";

import { useMemo, useState } from "react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

function encode(value: string) {
  return encodeURIComponent(value);
}

import { useLanguage } from "@/app/_components/LanguageProvider";

export default function ContactForm() {
  const { dict } = useLanguage();
  const f = dict.kontakPage.form;
  const [state, setState] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "ready">("idle");

  const mailToHref = useMemo(() => {
    const to = "info@pradabc.id";
    const subject = `Kontak PRADA BC — ${state.name || "Calon Anggota/Mitra"}`;
    const body = [
      `Nama: ${state.name}`,
      `Email: ${state.email}`,
      `Telepon: ${state.phone}`,
      "",
      "Pesan:",
      state.message,
    ].join("\n");

    return `mailto:${to}?subject=${encode(subject)}&body=${encode(body)}`;
  }, [state.email, state.message, state.name, state.phone]);

  return (
    <form
      className="rounded-2xl border border-border bg-surface/60 p-6"
      onSubmit={(e) => {
        e.preventDefault();
        setStatus("ready");
        window.location.href = mailToHref;
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm">
          <span className="font-semibold text-snow">Nama</span>
          <input
            value={state.name}
            onChange={(e) => setState((s) => ({ ...s, name: e.target.value }))}
            className="h-11 rounded-xl border border-border bg-ink/40 px-3 text-snow placeholder:text-snow/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70"
            placeholder="Nama lengkap"
            autoComplete="name"
            required
          />
        </label>

        <label className="grid gap-2 text-sm">
          <span className="font-semibold text-snow">Email</span>
          <input
            value={state.email}
            onChange={(e) => setState((s) => ({ ...s, email: e.target.value }))}
            type="email"
            className="h-11 rounded-xl border border-border bg-ink/40 px-3 text-snow placeholder:text-snow/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70"
            placeholder="nama@email.com"
            autoComplete="email"
            required
          />
        </label>

        <label className="grid gap-2 text-sm">
          <span className="font-semibold text-snow">Telepon</span>
          <input
            value={state.phone}
            onChange={(e) => setState((s) => ({ ...s, phone: e.target.value }))}
            className="h-11 rounded-xl border border-border bg-ink/40 px-3 text-snow placeholder:text-snow/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70"
            placeholder="+62..."
            autoComplete="tel"
          />
        </label>

        <div className="hidden sm:block" />
      </div>

      <label className="mt-4 grid gap-2 text-sm">
        <span className="font-semibold text-snow">Pesan</span>
        <textarea
          value={state.message}
          onChange={(e) => setState((s) => ({ ...s, message: e.target.value }))}
          className="min-h-32 rounded-xl border border-border bg-ink/40 px-3 py-3 text-snow placeholder:text-snow/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70"
          placeholder="Tuliskan kebutuhan Anda: bergabung latihan, kemitraan, atau pertanyaan lainnya."
          required
        />
      </label>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-xs text-snow/70">
          {status === "ready"
            ? "Aplikasi email Anda akan terbuka untuk mengirim pesan."
            : "Dengan mengirim formulir ini, Anda setuju menghubungi PRADA BC."}
        </div>
        <button
          type="submit"
          className="inline-flex h-11 items-center justify-center rounded-2xl bg-gold px-6 text-sm font-semibold text-ink hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-snow/70"
        >
          {f.title}
        </button>
      </div>
    </form>
  );
}

