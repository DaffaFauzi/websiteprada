import type { Metadata } from "next";
import GalleryPageClient from "./GalleryPageClient";

export const metadata: Metadata = {
  title: "Gallery — PRADA BC",
  description: "View our gallery of training sessions, tournaments, community events, and athlete achievements at PRADA BC Indonesia.",
  keywords: ["badminton gallery", "PRADA BC photos", "badminton tournament photos", "badminton training moments"],
  openGraph: {
    title: "PRADA BC Gallery",
    description: "Visual documentation of our journey and athletic excellence.",
    url: "/gallery",
  },
};

export default function GalleryPage() {
  return <GalleryPageClient />;
}
