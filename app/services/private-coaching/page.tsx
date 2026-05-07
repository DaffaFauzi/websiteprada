import { Metadata } from "next";
import PrivateCoachingClient from "./PrivateCoachingClient";

export const metadata: Metadata = {
  title: "Private Coaching | PRADA BC INDONESIA",
  description: "Personalized one-on-one badminton coaching sessions tailored to your specific technique and performance goals.",
};

export default function PrivateCoachingPage() {
  return <PrivateCoachingClient />;
}
