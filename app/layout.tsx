import type { Metadata } from "next";
import { Poppins, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SiteFooter from "@/app/_components/SiteFooter";
import SiteHeader from "@/app/_components/SiteHeader";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "PRADA BC (Perkasa Ardana Badminton Club)",
    template: "%s | PRADA BC",
  },
  description:
    "PRADA BC (Perkasa Ardana Badminton Club) adalah klub badminton asal Surabaya di bawah Ardana Perkasa Group, fokus pada pembinaan atlet dan prestasi.",
  keywords: [
    "PRADA BC",
    "Perkasa Ardana Badminton Club",
    "badminton Surabaya",
    "klub bulutangkis",
    "pembinaan atlet",
    "Ardana Perkasa Group",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "PRADA BC (Perkasa Ardana Badminton Club)",
    description:
      "Klub badminton premium dari Surabaya di bawah Ardana Perkasa Group. Pembinaan atlet, program latihan, dan prestasi.",
    url: "/",
    siteName: "PRADA BC",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PRADA BC (Perkasa Ardana Badminton Club)",
    description:
      "Klub badminton premium dari Surabaya di bawah Ardana Perkasa Group. Pembinaan atlet, program latihan, dan prestasi.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${poppins.variable} ${spaceGrotesk.variable} antialiased`}>
        <div className="min-h-dvh bg-ink text-snow">
          <SiteHeader />
          <main className="min-h-[60dvh]">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
