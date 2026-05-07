import { Metadata } from "next";
import ConsultationClient from "./ConsultationClient";

export const metadata: Metadata = {
  title: "Professional Consultation | PRADA BC INDONESIA",
  description: "Discuss your athlete journey, goals, and training pathways directly with PRADA BC professional coaches.",
};

export default function ConsultationPage() {
  return <ConsultationClient />;
}
