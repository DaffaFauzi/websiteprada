const fs = require('fs');

// 1. Update dictionaries.ts
let dictContent = fs.readFileSync('app/i18n/dictionaries.ts', 'utf8');

const enRest = `
    testimoniPage: {
      hero: {
        eyebrow: "Testimonials",
        title: "Real stories from the PRADA BC community",
        subtitle: "Quotes from athletes, parents, and partners who have experienced the impact of PRADA BC's development and professional culture."
      },
      carousel: {
        prev: "Prev",
        next: "Next",
        items: [
          {
            quote: "PRADA BC is not just a club, but a family that supports us to continuously achieve.",
            name: "PRADA BC Athlete",
            role: "Athlete",
            photoAlt: "Photo of PRADA BC athlete"
          },
          {
            quote: "The training program is structured and the communication is clear. My child's development is evident.",
            name: "Athlete's Parent",
            role: "Parent",
            photoAlt: "Photo of PRADA BC athlete's parent"
          },
          {
            quote: "Professional management and a strong developmental vision. PRADA BC is the right partner for collaboration.",
            name: "Club Partner",
            role: "Partner",
            photoAlt: "Photo of PRADA BC partner"
          }
        ]
      }
    },
    kontakPage: {
      hero: {
        eyebrow: "Contact",
        title: "Connect with the PRADA BC team",
        subtitle: "Have questions about the program, registration, or club visits? Our team is ready to assist you via WhatsApp or the contact form."
      },
      form: {
        title: "Send a Message",
        name: "Full Name",
        whatsapp: "WhatsApp Number",
        message: "Message or Question",
        submit: "Send Message",
        workingHours: "Operational Hours",
        hoursInfo: "Every Day: 08:00 - 20:00 WIB",
        location: "Training Location",
        locationInfo: "Surabaya, East Java"
      }
    },`;

const idRest = `
    testimoniPage: {
      hero: {
        eyebrow: "Testimoni",
        title: "Cerita nyata dari komunitas PRADA BC",
        subtitle: "Kutipan dari atlet, orang tua, dan mitra yang merasakan dampak pembinaan dan budaya profesional PRADA BC."
      },
      carousel: {
        prev: "Prev",
        next: "Next",
        items: [
          {
            quote: "PRADA BC bukan hanya klub, tapi keluarga yang mendukung kami untuk terus berprestasi.",
            name: "Atlet PRADA BC",
            role: "Atlet",
            photoAlt: "Foto atlet PRADA BC"
          },
          {
            quote: "Program latihannya terstruktur dan komunikasinya jelas. Perkembangan anak saya terasa nyata.",
            name: "Orang Tua Atlet",
            role: "Orang Tua",
            photoAlt: "Foto orang tua atlet PRADA BC"
          },
          {
            quote: "Manajemen profesional dan visi pembinaan yang kuat. PRADA BC mitra yang tepat untuk kolaborasi.",
            name: "Mitra Klub",
            role: "Partner",
            photoAlt: "Foto mitra PRADA BC"
          }
        ]
      }
    },
    kontakPage: {
      hero: {
        eyebrow: "Kontak",
        title: "Terhubung dengan tim PRADA BC",
        subtitle: "Ada pertanyaan tentang program, pendaftaran, atau kunjungan klub? Tim kami siap membantu Anda melalui WhatsApp atau formulir kontak."
      },
      form: {
        title: "Kirim Pesan",
        name: "Nama Lengkap",
        whatsapp: "Nomor WhatsApp",
        message: "Pesan atau Pertanyaan",
        submit: "Kirim Pesan",
        workingHours: "Jam Operasional",
        hoursInfo: "Setiap Hari: 08:00 - 20:00 WIB",
        location: "Lokasi Latihan",
        locationInfo: "Surabaya, Jawa Timur"
      }
    },`;

dictContent = dictContent.replace('footer: {', enRest + '\n    footer: {');
dictContent = dictContent.replace('      clubDesc: "Klub badminton premium', idRest + '\n    footer: {\n      clubDesc: "Klub badminton premium');
fs.writeFileSync('app/i18n/dictionaries.ts', dictContent, 'utf8');

// 2. Create TestimoniClient.tsx
const testimoniClientContent = `"use client";

import Container from "@/app/_components/Container";
import PageHero from "@/app/_components/PageHero";
import TestimonialsCarousel from "@/app/testimoni/TestimonialsCarousel";
import { useLanguage } from "@/app/_components/LanguageProvider";

export default function TestimoniClient() {
  const { dict } = useLanguage();
  const t = dict.testimoniPage;

  return (
    <div>
      <PageHero
        eyebrow={t.hero.eyebrow}
        title={t.hero.title}
        subtitle={t.hero.subtitle}
      />

      <section className="py-12 sm:py-16 lg:py-20">
        <Container>
          <TestimonialsCarousel />
        </Container>
      </section>
    </div>
  );
}
`;
fs.writeFileSync('app/testimoni/TestimoniClient.tsx', testimoniClientContent, 'utf8');

let testimoniPageContent = fs.readFileSync('app/testimoni/page.tsx', 'utf8');
testimoniPageContent = testimoniPageContent.replace('import Container from "@/app/_components/Container";\nimport PageHero from "@/app/_components/PageHero";\nimport TestimonialsCarousel from "@/app/testimoni/TestimonialsCarousel";', 'import TestimoniClient from "./TestimoniClient";');
testimoniPageContent = testimoniPageContent.replace(/export default function TestimoniPage\(\) \{[\s\S]*\}\n/, `export default function TestimoniPage() {\n  return <TestimoniClient />;\n}\n`);
fs.writeFileSync('app/testimoni/page.tsx', testimoniPageContent, 'utf8');

// 3. Update TestimonialsCarousel.tsx
let carouselContent = fs.readFileSync('app/testimoni/TestimonialsCarousel.tsx', 'utf8');
carouselContent = carouselContent.replace('import { useEffect, useMemo, useState } from "react";', 'import { useEffect, useMemo, useState } from "react";\nimport { useLanguage } from "@/app/_components/LanguageProvider";');
carouselContent = carouselContent.replace(/const items = useMemo<Testimonial\[\]>\([\s\S]*?\],\n  \);/, `const { dict } = useLanguage();\n  const items = useMemo<Testimonial[]>(() => dict.testimoniPage.carousel.items.map((item, idx) => ({\n    quote: item.quote,\n    name: item.name,\n    role: item.role,\n    photoSrc: idx === 0 ? "/globe.svg" : idx === 1 ? "/file.svg" : "/window.svg",\n    photoAlt: item.photoAlt,\n  })), [dict.testimoniPage.carousel.items]);`);
carouselContent = carouselContent.replace(/Prev\n          <\/button>/g, `{dict.testimoniPage.carousel.prev}\n          </button>`);
carouselContent = carouselContent.replace(/Next\n          <\/button>/g, `{dict.testimoniPage.carousel.next}\n          </button>`);
fs.writeFileSync('app/testimoni/TestimonialsCarousel.tsx', carouselContent, 'utf8');

// 4. Update kontak/page.tsx -> KontakClient.tsx
const kontakClientContent = `"use client";

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
`;
fs.writeFileSync('app/kontak/KontakClient.tsx', kontakClientContent, 'utf8');

let kontakPageContent = fs.readFileSync('app/kontak/page.tsx', 'utf8');
kontakPageContent = kontakPageContent.replace('import Container from "@/app/_components/Container";\nimport PageHero from "@/app/_components/PageHero";\nimport ContactForm from "@/app/kontak/ContactForm";', 'import KontakClient from "./KontakClient";');
kontakPageContent = kontakPageContent.replace(/export default function KontakPage\(\) \{[\s\S]*\}\n/, `export default function KontakPage() {\n  return <KontakClient />;\n}\n`);
fs.writeFileSync('app/kontak/page.tsx', kontakPageContent, 'utf8');

// 5. Update ContactForm.tsx
let formContent = fs.readFileSync('app/kontak/ContactForm.tsx', 'utf8');
formContent = formContent.replace('export default function ContactForm() {', 'import { useLanguage } from "@/app/_components/LanguageProvider";\n\nexport default function ContactForm() {\n  const { dict } = useLanguage();\n  const f = dict.kontakPage.form;');
formContent = formContent.replace('Kirim Pesan', '{f.title}');
formContent = formContent.replace('Nama Lengkap', '{f.name}');
formContent = formContent.replace('Nomor WhatsApp', '{f.whatsapp}');
formContent = formContent.replace('Pesan atau pertanyaan Anda...', '{f.message}');
formContent = formContent.replace(/>\n          Kirim Pesan\n        <\/button>/g, '>\n          {f.submit}\n        </button>');
fs.writeFileSync('app/kontak/ContactForm.tsx', formContent, 'utf8');

console.log('Processed testimoni and kontak successfully.');
