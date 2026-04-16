import type { Metadata } from "next";
import { ContactSection } from "@/components/contact-section";

export const metadata: Metadata = {
  title: "Contact",
  description: "Email and profiles for Timiebi Nicholas Kosu — roles, collaboration, and inquiries.",
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
