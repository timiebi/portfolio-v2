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
      description=""
    />
  );
}
