import { Metadata } from "next";
import AthleteDevelopmentClient from "./AthleteDevelopmentClient";

export const metadata: Metadata = {
  title: "Athlete Development | PRADA BC INDONESIA",
  description: "Long-term structured development systems designed to identify talent and build elite competitive athletes.",
};

export default function AthleteDevelopmentPage() {
  return <AthleteDevelopmentClient />;
}
