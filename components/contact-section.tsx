"use client";

import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/lib/site";
import { eyebrowHighlight } from "@/lib/typography";
import { useState, FormEvent } from "react";

type ContactSectionProps = {
  kicker?: string;
  title?: string;
  description?: string;
};

export function ContactSection({
  kicker = "Contact",
  title = "Say what you need.",
  description = "Brief context beats a polished pitch. I read everything; I reply when there is a real fit.",
}: ContactSectionProps) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill out all fields.");
      return;
    }
    // Simple email regex
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message.");
      }

      setIsSent(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (err: any) {
      // If Resend API key or custom domain is not configured, fall back to opening user's mail client directly
      const mailtoUrl = `mailto:${site.email}?subject=Portfolio Message from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(
        `From: ${formData.name} <${formData.email}>\n\nMessage:\n${formData.message}`
      )}`;
      
      window.location.href = mailtoUrl;

      setIsSent(true);
      setFormData({ name: "", email: "", message: "" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-w-0" aria-labelledby="contact-heading">
      <FadeIn>
        <SectionHeading
          index={kicker}
          title={title}
          titleId="contact-heading"
          description={description}
        />
      </FadeIn>

      {isSent ? (
        <FadeIn delay={0.06}>
          <div className="relative min-w-0 overflow-hidden rounded-2xl border border-border bg-surface/30 p-8 dark:bg-surface-elevated/10 sm:rounded-3xl sm:p-12 md:p-16 text-center backdrop-blur-xs">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-highlight/10 text-highlight mb-6">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3 className="font-display text-xl font-semibold tracking-[-0.025em] text-foreground sm:text-2xl mb-3">
              Message Sent!
            </h3>
            <p className="mx-auto max-w-sm text-sm leading-relaxed text-muted mb-8">
              Thank you for reaching out. I read every message and will get back to you as soon as there is a fit.
            </p>
            <button
              onClick={() => setIsSent(false)}
              className="inline-flex h-11 cursor-pointer items-center justify-center rounded-full border border-border bg-surface px-6 text-sm font-semibold text-foreground transition-all duration-200 hover:border-highlight/35 hover:bg-surface-elevated focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight dark:bg-surface-elevated/80"
            >
              Send another message
            </button>
          </div>
        </FadeIn>
      ) : (
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Form */}
          <div className="lg:col-span-7">
            <FadeIn delay={0.06}>
              <form
                onSubmit={handleSubmit}
                className="relative min-w-0 overflow-hidden rounded-2xl border border-border bg-surface/30 p-6 dark:bg-surface-elevated/10 sm:rounded-3xl sm:p-8 backdrop-blur-xs space-y-6"
              >
                {error && (
                  <div className="p-3 text-xs font-semibold text-rose-500 bg-rose-500/10 rounded-lg border border-rose-500/25">
                    {error}
                  </div>
                )}
                <div className="space-y-2 group">
                  <label
                    htmlFor="name"
                    className="block font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-muted transition-colors group-focus-within:text-highlight"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-xl border border-border bg-background/50 px-4 py-3.5 text-sm text-foreground placeholder-muted/40 transition-all duration-200 outline-hidden hover:border-border/120 focus:border-highlight focus:ring-3 focus:ring-highlight/10 dark:bg-background/25"
                    placeholder="Your name"
                  />
                </div>

                <div className="space-y-2 group">
                  <label
                    htmlFor="email"
                    className="block font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-muted transition-colors group-focus-within:text-highlight"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-xl border border-border bg-background/50 px-4 py-3.5 text-sm text-foreground placeholder-muted/40 transition-all duration-200 outline-hidden hover:border-border/120 focus:border-highlight focus:ring-3 focus:ring-highlight/10 dark:bg-background/25"
                    placeholder="email@example.com"
                  />
                </div>

                <div className="space-y-2 group">
                  <label
                    htmlFor="message"
                    className="block font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-muted transition-colors group-focus-within:text-highlight"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full resize-none rounded-xl border border-border bg-background/50 px-4 py-3.5 text-sm text-foreground placeholder-muted/40 transition-all duration-200 outline-hidden hover:border-border/120 focus:border-highlight focus:ring-3 focus:ring-highlight/10 dark:bg-background/25"
                    placeholder="Tell me about your project, team, or opportunity..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative flex min-h-12 w-full cursor-pointer touch-manipulation items-center justify-center gap-2.5 rounded-full bg-foreground px-8 text-sm font-semibold text-background transition-all duration-300 hover:bg-foreground/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="h-4 w-4 animate-spin text-background"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-transform duration-300 ease-out group-hover:translate-x-1"
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </FadeIn>
          </div>

          {/* Right Column: Direct Info & Social Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Direct Email Card */}
            <FadeIn delay={0.12} className="h-full">
              <div className="relative h-full overflow-hidden rounded-2xl border border-border bg-surface/30 p-6 dark:bg-surface-elevated/10 sm:p-8 backdrop-blur-xs flex flex-col justify-between">
                <div
                  className="pointer-events-none absolute -right-8 -top-8 h-36 w-36 opacity-30 dark:opacity-20"
                  style={{
                    background:
                      "radial-gradient(circle at center, var(--highlight) 0%, transparent 70%)",
                  }}
                />
                <div className="relative space-y-4">
                  <p className={eyebrowHighlight}>Direct Email</p>
                  <div className="min-w-0 max-w-full">
                    <a
                      href={`mailto:${site.email}`}
                      className="inline-block cursor-pointer break-all font-display text-[clamp(0.95rem,4.8vw,1.75rem)] font-semibold leading-[1.2] tracking-[-0.02em] text-foreground transition-colors hover:text-highlight focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-highlight"
                    >
                      {site.email}
                    </a>
                  </div>
                  <p className="text-xs leading-relaxed text-muted max-w-md">
                    For recruiting or collaboration opportunities, feel free to drop a line directly. I
                    read everything.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Social Cards */}
            <FadeIn delay={0.18}>
              <div className="relative overflow-hidden rounded-2xl border border-border bg-surface/30 p-6 dark:bg-surface-elevated/10 sm:p-8 backdrop-blur-xs">
                <div className="relative space-y-4">
                  <p className={eyebrowHighlight}>Social Networks</p>
                  <div className="flex flex-col gap-3">
                    <a
                      href={site.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex h-11 items-center justify-between rounded-xl border border-border bg-background/50 px-5 text-sm font-medium text-foreground transition-all duration-300 hover:border-highlight/35 hover:bg-surface-elevated dark:bg-background/25"
                    >
                      <span className="flex items-center gap-2.5">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-muted transition-colors group-hover:text-highlight"
                        >
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                          <path d="M9 18c-4.51 2-5-2-7-2" />
                        </svg>
                        GitHub
                      </span>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-muted transition-transform duration-300 group-hover:translate-x-0.5"
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </a>
                    <a
                      href={site.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex h-11 items-center justify-between rounded-xl border border-border bg-background/50 px-5 text-sm font-medium text-foreground transition-all duration-300 hover:border-highlight/35 hover:bg-surface-elevated dark:bg-background/25"
                    >
                      <span className="flex items-center gap-2.5">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-muted transition-colors group-hover:text-highlight"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                          <rect width="4" height="12" x="2" y="9" />
                          <circle cx="4" cy="4" r="2" />
                        </svg>
                        LinkedIn
                      </span>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-muted transition-transform duration-300 group-hover:translate-x-0.5"
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      )}
    </section>
  );
}
