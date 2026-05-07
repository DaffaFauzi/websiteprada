import type { Metadata } from "next";
import KontakClient from "../kontak/KontakClient";

export const metadata: Metadata = {
  title: "Contact | PRADA BC",
  description:
    "Contact PRADA BC (Perkasa Ardana Badminton Club) in Indonesia to join or collaborate. Phone, email, operational hours, and contact form available.",
  keywords: [
    "contact PRADA BC",
    "join badminton club Indonesia",
    "badminton collaboration",
  ],
  openGraph: {
    title: "Contact PRADA BC",
    description:
      "Contact us to join or collaborate. PRADA BC — Indonesia.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return <KontakClient />;
}
