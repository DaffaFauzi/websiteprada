"use client";

import Container from "@/app/_components/Container";
import PageHero from "@/app/_components/PageHero";
import ContactForm from "@/app/kontak/ContactForm";
import { useLanguage } from "@/app/_components/LanguageProvider";

export default function KontakClient() {
  const { dict } = useLanguage();
  const k = dict.kontakPage;

  return (
    <div>
      <PageHero
        eyebrow={k.hero.eyebrow}
        title={k.hero.title}
        subtitle={k.hero.subtitle}
      />

      <section className="py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="grid gap-10 sm:gap-12 lg:grid-cols-2 lg:items-start">
            <div className="space-y-6 sm:space-y-8">
              <div className="rounded-2xl sm:rounded-3xl border border-border bg-gradient-to-br from-gold/14 via-surface/60 to-surface-2/60 p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-snow">
                  Informasi Kontak
                </h2>
                <div className="mt-6 sm:mt-8 space-y-5 sm:space-y-6">
                  <div>
                    <div className="text-sm font-semibold text-snow/70">{k.form.workingHours}</div>
                    <div className="mt-1 text-base sm:text-lg font-medium text-snow">
                      {k.form.hoursInfo}
                    </div>
                  </div>
                  <div className="h-px bg-border w-full" />
                  <div>
                    <div className="text-sm font-semibold text-snow/70">{k.form.location}</div>
                    <div className="mt-1 text-base sm:text-lg font-medium text-snow">
                      {k.form.locationInfo}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
