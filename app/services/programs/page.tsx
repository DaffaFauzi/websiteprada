import { Metadata } from "next";
import ProgramsClient from "./ProgramsClient";

export const metadata: Metadata = {
  title: "Training Programs | PRADA BC INDONESIA",
  description: "Explore our modern and structured badminton training programs designed for every athlete level at PRADA BC.",
};

export default function ProgramsPage() {
  return <ProgramsClient />;
}
