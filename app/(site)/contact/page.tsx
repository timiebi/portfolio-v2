import type { Metadata } from "next";
import { ContactSection } from "@/components/contact-section";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Connect with Timiebi Nicholas Kosu — for recruiting, frontend contract work, or engineering collaboration opportunities.",
};

export default function ContactPage() {
  return (
    <ContactSection
      kicker="Contact"
      title="Say what you need."
      description="Brief context beats a polished pitch. I read everything; I reply when there is a real fit."
    />
  );
}
