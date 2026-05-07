import type { Metadata } from "next";
import ServicesPageClient from "./ServicesPageClient";

export const metadata: Metadata = {
  title: "Services — PRADA BC",
  description: "Explore our professional badminton coaching programs, private sessions, and athlete development pathways at PRADA BC Indonesia.",
  keywords: ["badminton training", "private coaching", "athlete development", "badminton academy Indonesia"],
  openGraph: {
    title: "PRADA BC Services",
    description: "Structured athletic development programs for all levels.",
    url: "/services",
  },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
