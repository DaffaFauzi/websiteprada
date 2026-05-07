const fs = require('fs');

const path = 'app/_components/HomePageClient.tsx';
let content = fs.readFileSync(path, 'utf8');

// 1. Inject useLanguage
if (!content.includes('useLanguage')) {
  content = content.replace(
    'import TestimonialsCarousel from "@/app/testimoni/TestimonialsCarousel";',
    'import TestimonialsCarousel from "@/app/testimoni/TestimonialsCarousel";\nimport { useLanguage } from "@/app/_components/LanguageProvider";'
  );
  content = content.replace(
    'export default function HomePageClient() {\n',
    'export default function HomePageClient() {\n  const { dict } = useLanguage();\n\n'
  );
}

// 2. Replace trustBadges
content = content.replace(
  `  const trustBadges = useMemo(
    () => [
      "Pelatih Bersertifikat",
      "Program Berjenjang",
      "Pendampingan Kompetisi",
    ],
    [],
  );`,
  `  const trustBadges = useMemo(() => dict.hero.badges, [dict.hero.badges]);`
);

// 3. Replace programs
content = content.replace(
  `title: "Program Latihan"`,
  `title: dict.services.programs[0].title`
);
content = content.replace(
  `desc: "Kurikulum teknik, fisik, dan taktik yang tersusun per level atlet."`,
  `desc: dict.services.programs[0].desc`
);
content = content.replace(
  `title: "Private Coaching"`,
  `title: dict.services.programs[1].title`
);
content = content.replace(
  `desc: "Sesi personal untuk target spesifik: teknik, footwork, dan strategi."`,
  `desc: dict.services.programs[1].desc`
);
content = content.replace(
  `title: "Pembinaan Atlet"`,
  `title: dict.services.programs[2].title`
);
content = content.replace(
  `desc: "Pendampingan jangka panjang untuk jalur prestasi regional hingga nasional."`,
  `desc: dict.services.programs[2].desc`
);
content = content.replace(
  `title: "Konsultasi Program"`,
  `title: dict.services.programs[3].title`
);
content = content.replace(
  `desc: "Rekomendasi jalur latihan berdasarkan level, usia, dan tujuan atlet."`,
  `desc: dict.services.programs[3].desc`
);

// 4. Hero section
content = content.replace(
  `PRADA BADMINTON CLUB SURABAYA`,
  `{dict.hero.badge}`
);
content = content.replace(
  `Elite Badminton Club dengan Standar<br className="hidden sm:block" /> Pembinaan Profesional.`,
  `{dict.hero.title}`
);
content = content.replace(
  `PRADA BC adalah institusi pembinaan badminton yang memadukan coaching
                  profesional, sistem latihan terstruktur, dan budaya atlet berintegritas untuk
                  membangun prestasi berkelanjutan.`,
  `{dict.hero.desc}`
);
content = content.replace(
  `>
                  Tentang Klub
                </Link>`,
  `>\n                  {dict.hero.aboutClub}\n                </Link>`
);
content = content.replace(
  `>
                  Lihat Program
                </Link>`,
  `>\n                  {dict.hero.viewPrograms}\n                </Link>`
);

content = content.replace(
  `{ value: "10+", label: "Tahun Pengalaman" },`,
  `{ value: "10+", label: dict.hero.stats[0].label },`
);
content = content.replace(
  `{ value: "100+", label: "Atlet Aktif" },`,
  `{ value: "100+", label: dict.hero.stats[1].label },`
);
content = content.replace(
  `{ value: "120+", label: "Medali Turnamen" },`,
  `{ value: "120+", label: dict.hero.stats[2].label },`
);

// 5. Tentang Section
content = content.replace(
  `<div className="text-[11px] sm:text-xs font-medium uppercase tracking-[0.2em] text-gold">
                Tentang Kami
              </div>`,
  `<div className="text-[11px] sm:text-xs font-medium uppercase tracking-[0.2em] text-gold">\n                {dict.about.eyebrow}\n              </div>`
);
content = content.replace(
  `Profil Klub dengan Fondasi Kepercayaan, Kredibilitas, dan Prestasi.`,
  `{dict.about.title}`
);
content = content.replace(
  `PRADA BC membangun atlet melalui struktur pelatihan yang disiplin, tim pelatih
                berpengalaman, dan budaya organisasi yang profesional untuk keberlanjutan
                prestasi.`,
  `{dict.about.desc}`
);
content = content.replace(
  `<h3 className="text-base sm:text-lg font-semibold text-snow">Profil Klub</h3>`,
  `<h3 className="text-base sm:text-lg font-semibold text-snow">{dict.about.profileTitle}</h3>`
);
content = content.replace(
  `Berdiri sebagai klub badminton pembinaan, PRADA BC melayani atlet junior hingga
                  dewasa dengan orientasi teknik, mental bertanding, dan etika kompetisi.`,
  `{dict.about.profileDesc}`
);
content = content.replace(
  `>
                    Profil Lengkap
                  </Link>`,
  `>\n                    {dict.about.fullProfile}\n                  </Link>`
);
content = content.replace(
  `<h3 className="text-[11px] sm:text-sm font-semibold uppercase tracking-[0.16em] text-gold">Visi</h3>`,
  `<h3 className="text-[11px] sm:text-sm font-semibold uppercase tracking-[0.16em] text-gold">{dict.about.vision}</h3>`
);
content = content.replace(
  `Menjadi institusi badminton premium yang dikenal atas kualitas pembinaan dan
                    integritas atlet.`,
  `{dict.about.visionDesc}`
);
content = content.replace(
  `<h3 className="text-[11px] sm:text-sm font-semibold uppercase tracking-[0.16em] text-gold">Misi</h3>`,
  `<h3 className="text-[11px] sm:text-sm font-semibold uppercase tracking-[0.16em] text-gold">{dict.about.mission}</h3>`
);
content = content.replace(
  `Menyediakan coaching profesional, evaluasi progres berkala, dan jalur kompetisi
                    yang terstruktur.`,
  `{dict.about.missionDesc}`
);

// Map array replacements for Tentang Kami items
content = content.replace(
  `title: "Prestasi",`,
  `title: dict.about.achievements,`
);
content = content.replace(
  `desc: "Pencapaian atlet pada turnamen lokal, regional, dan nasional sebagai bukti sistem pembinaan yang konsisten.",`,
  `desc: dict.about.achievementsDesc,`
);
content = content.replace(
  `title: "Pelatih & Organisasi",`,
  `title: dict.about.organization,`
);
content = content.replace(
  `desc: "Tim pelatih, manajemen, dan struktur operasional klub yang memastikan pembinaan berjalan profesional.",`,
  `desc: dict.about.organizationDesc,`
);
content = content.replace(
  `title: "Testimoni",`,
  `title: dict.about.testimonials,`
);
content = content.replace(
  `desc: "Cerita atlet dan orang tua yang merasakan perkembangan teknik, disiplin, dan kepercayaan diri.",`,
  `desc: dict.about.testimonialsDesc,`
);
content = content.replace(
  `>
                    Jelajahi
                  </Link>`,
  `>\n                    {dict.about.explore}\n                  </Link>`
);
content = content.replace(
  `<div className="mb-4 sm:mb-5 text-[11px] sm:text-xs font-medium uppercase tracking-[0.2em] text-gold">
                Testimoni Komunitas
              </div>`,
  `<div className="mb-4 sm:mb-5 text-[11px] sm:text-xs font-medium uppercase tracking-[0.2em] text-gold">\n                {dict.about.communityTestimonials}\n              </div>`
);

// 6. Layanan
content = content.replace(
  `<div className="text-[11px] sm:text-xs font-medium uppercase tracking-[0.2em] text-gold">Layanan</div>`,
  `<div className="text-[11px] sm:text-xs font-medium uppercase tracking-[0.2em] text-gold">{dict.services.eyebrow}</div>`
);
content = content.replace(
  `Sistem Layanan yang Terstruktur untuk Performa Atlet.`,
  `{dict.services.title}`
);
content = content.replace(
  `Setiap layanan dirancang untuk menjaga kesinambungan perkembangan atlet, dari
                fondasi teknik hingga kesiapan kompetisi.`,
  `{dict.services.desc}`
);
content = content.replace(
  `>
                    Detail Program
                  </Link>`,
  `>\n                    {dict.services.detailProgram}\n                  </Link>`
);

// 7. Gallery
content = content.replace(
  `<div className="text-[11px] sm:text-xs font-medium uppercase tracking-[0.2em] text-gold">Gallery</div>`,
  `<div className="text-[11px] sm:text-xs font-medium uppercase tracking-[0.2em] text-gold">{dict.gallery.eyebrow}</div>`
);
content = content.replace(
  `Dokumentasi Latihan, Event, Turnamen, dan Aktivitas Atlet.`,
  `{dict.gallery.title}`
);
content = content.replace(
  `Kurasi visual PRADA BC yang merekam kualitas latihan, momen pertandingan, dan
                perjalanan pembinaan atlet.`,
  `{dict.gallery.desc}`
);
content = content.replace(
  `>
                        Prev
                      </button>`,
  `>\n                        {dict.gallery.modal.prev}\n                      </button>`
);
content = content.replace(
  `>
                        Next
                      </button>`,
  `>\n                        {dict.gallery.modal.next}\n                      </button>`
);
content = content.replace(
  `<div className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-gold mb-1">
                      {dict.hero.badge}
                    </div>`,
  `<div className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-gold mb-1">\n                      {dict.gallery.modal.detail}\n                    </div>`
);
// Fix the one that I broke earlier. Wait, the original code is:
content = content.replace(
  `<div className="text-[10px] sm:text-xs font-medium uppercase tracking-[0.18em] text-[#D0B26A]">
                      Detail
                    </div>`,
  `<div className="text-[10px] sm:text-xs font-medium uppercase tracking-[0.18em] text-gold">\n                      {dict.gallery.modal.detail}\n                    </div>`
);
content = content.replace(
  `Dokumentasi resmi PRADA BC dalam sesi latihan, event komunitas, dan
                      persiapan turnamen.`,
  `{dict.gallery.modal.desc}`
);
content = content.replace(
  `>
                      Konsultasi
                    </Link>`,
  `>\n                      {dict.gallery.modal.consultation}\n                    </Link>`
);

// 8. Kontak
content = content.replace(
  `<div className="text-[11px] sm:text-xs font-medium uppercase tracking-[0.2em] text-gold">Kontak</div>`,
  `<div className="text-[11px] sm:text-xs font-medium uppercase tracking-[0.2em] text-gold">{dict.contact.eyebrow}</div>`
);
content = content.replace(
  `Konsultasi Program, Lokasi Klub, dan Komunikasi Resmi.`,
  `{dict.contact.title}`
);
content = content.replace(
  `Hubungi tim PRADA BC untuk diskusi kebutuhan latihan, jadwal kunjungan, dan
                pemetaan program yang paling sesuai untuk atlet.`,
  `{dict.contact.desc}`
);
content = content.replace(
  `<h3 className="text-base sm:text-lg font-semibold text-snow">Konsultasi</h3>`,
  `<h3 className="text-base sm:text-lg font-semibold text-snow">{dict.contact.consultation}</h3>`
);
content = content.replace(
  `Sesi konsultasi untuk menentukan level awal, fokus latihan, dan rencana
                    pembinaan atlet.`,
  `{dict.contact.consultationDesc}`
);
content = content.replace(
  `<h3 className="text-base sm:text-lg font-semibold text-snow">Lokasi</h3>`,
  `<h3 className="text-base sm:text-lg font-semibold text-snow">{dict.contact.location}</h3>`
);
content = content.replace(
  `Surabaya, Jawa Timur. Detail alamat lengkap akan diinformasikan saat
                    penjadwalan kunjungan.`,
  `{dict.contact.locationDesc}`
);
content = content.replace(
  `<h3 className="text-base sm:text-lg font-semibold text-snow">WhatsApp</h3>`,
  `<h3 className="text-base sm:text-lg font-semibold text-snow">{dict.contact.whatsapp}</h3>`
);
content = content.replace(
  `>
                    Chat via WhatsApp
                  </Link>`,
  `>\n                    {dict.contact.chatWa}\n                  </Link>`
);
content = content.replace(
  `<h3 className="text-base sm:text-lg font-semibold text-snow">Contact Form</h3>`,
  `<h3 className="text-base sm:text-lg font-semibold text-snow">{dict.contact.formTitle}</h3>`
);
content = content.replace(
  `placeholder="Nama"`,
  `placeholder={dict.contact.name}`
);
content = content.replace(
  `placeholder="No. WhatsApp"`,
  `placeholder={dict.contact.waNo}`
);
content = content.replace(
  `placeholder="Tujuan latihan / pertanyaan"`,
  `placeholder={dict.contact.message}`
);
content = content.replace(
  `>
                      Kirim Permintaan
                    </button>`,
  `>\n                      {dict.contact.send}\n                    </button>`
);

fs.writeFileSync(path, content, 'utf8');
console.log('Translated HomePageClient successfully');
