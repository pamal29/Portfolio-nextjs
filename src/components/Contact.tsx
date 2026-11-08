"use client";

import { useState, type FormEvent } from "react";
import {
  FiArrowUpRight,
  FiCheck,
  FiMail,
  FiMapPin,
  FiSend,
} from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { profile } from "@/data/portfolio";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [needsEmail, setNeedsEmail] = useState(false);

  const socialLinks = [
    {
      label: "GitHub",
      href: profile.github,
      Icon: FaGithub,
    },
    {
      label: "LinkedIn",
      href: profile.linkedin,
      Icon: FaLinkedinIn,
    },
  ].filter(
    (item) => item.href && !item.href.includes("your-username")
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!profile.email) {
      setNeedsEmail(true);
      return;
    }

    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const subject =
      String(form.get("subject") || "").trim() ||
      `Hello from ${name}`;
    const message = String(form.get("message") || "").trim();

    const body = `${message}\n\n—\n${name}\n${email}`;

    const params = new URLSearchParams({
      subject: `Portfolio: ${subject}`,
      body,
    });

    window.location.href = `mailto:${profile.email}?${params.toString()}`;

    setSent(true);
    setNeedsEmail(false);
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="portfolio-contact relative isolate overflow-hidden px-5 pb-16 pt-24 sm:px-8 sm:pt-28"
    >
      <div
        aria-hidden="true"
        className="portfolio-section-watermark pointer-events-none absolute -left-4 top-6 -z-10"
      >
        LET&apos;S TALK
      </div>

      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <div className="glass-section-heading inline-block max-w-full rounded-[26px] px-7 py-5 sm:px-9">
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.24em]"
              style={{ color: "var(--muted-text-color)" }}
            >
              Get in touch
            </p>

            <h2
              id="contact-title"
              className="mt-2 text-4xl font-bold tracking-[-0.065em] sm:text-6xl"
              style={{ color: "var(--heading-color)" }}
            >
              Contact Me
              <span style={{ color: "var(--muted-text-color)" }}>.</span>
            </h2>
          </div>

          <p
            className="mt-5 max-w-xl text-sm leading-7"
            style={{ color: "var(--contact-description-color)" }}
          >
            Have a project, an opportunity, or just want to connect? I&apos;d
            love to hear from you.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
          {/* Contact information */}
          <div className="glass-contact-card flex flex-col justify-between rounded-[30px] p-7 sm:p-9">
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-[0.23em]"
                style={{ color: "var(--contact-label-color)" }}
              >
                LET&apos;S CONNECT
              </p>

              <h3
                className="mt-5 text-4xl font-bold leading-tight tracking-[-0.07em] sm:text-5xl"
                style={{ color: "var(--contact-heading-color)" }}
              >
                Let&apos;s build
                <br />
                something
                <br />
                together
                <span style={{ color: "var(--muted-text-color)" }}>.</span>
              </h3>

              <p
                className="mt-5 max-w-xs text-sm leading-8"
                style={{ color: "var(--contact-description-color)" }}
              >
                I&apos;m looking for internship and junior developer
                opportunities. If you have a project or a role in mind,
                let&apos;s start a conversation.
              </p>

              <div className="mt-10 space-y-3">
                <div className="glass-contact-info flex items-center gap-4 rounded-[20px] p-4">
                  <div
                    className="glass-skill-icon flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                    style={{ color: "var(--contact-icon-color)" }}
                  >
                    <FiMail size={20} aria-hidden="true" />
                  </div>

                  <div className="min-w-0">
                    <p
                      className="text-[10px] font-semibold uppercase tracking-[0.16em]"
                      style={{ color: "var(--contact-label-color)" }}
                    >
                      Email
                    </p>

                    {profile.email ? (
                      <a
                        href={`mailto:${profile.email}`}
                        className="mt-1 block break-all text-sm font-semibold hover:underline"
                        style={{ color: "var(--contact-link-color)" }}
                      >
                        {profile.email}
                      </a>
                    ) : (
                      <p
                        className="mt-1 text-sm font-semibold"
                        style={{ color: "var(--contact-description-color)" }}
                      >
                        Add your email in portfolio.ts
                      </p>
                    )}
                  </div>
                </div>

                <div className="glass-contact-info flex items-center gap-4 rounded-[20px] p-4">
                  <div
                    className="glass-skill-icon flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                    style={{ color: "var(--contact-icon-color)" }}
                  >
                    <FiMapPin size={20} aria-hidden="true" />
                  </div>

                  <div>
                    <p
                      className="text-[10px] font-semibold uppercase tracking-[0.16em]"
                      style={{ color: "var(--contact-label-color)" }}
                    >
                      Based in
                    </p>

                    <p
                      className="mt-1 text-sm font-semibold"
                      style={{ color: "var(--contact-link-color)" }}
                    >
                      {profile.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="mt-9 border-t pt-6"
              style={{ borderColor: "var(--contact-divider-color)" }}
            >
              <p
                className="mb-4 text-[10px] font-semibold uppercase tracking-[0.15em]"
                style={{ color: "var(--contact-label-color)" }}
              >
                Find me online
              </p>

              <div className="flex gap-3">
                {socialLinks.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    title={label}
                    className="glass-social flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-300 hover:-translate-y-1"
                    style={{ color: "var(--contact-link-color)" }}
                  >
                    <Icon size={20} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="glass-contact-card rounded-[30px] p-7 sm:p-9">
            <div className="mb-7 flex items-center justify-between gap-4">
              <div>
                <p
                  className="text-[10px] font-semibold uppercase tracking-[0.18em]"
                  style={{ color: "var(--contact-label-color)" }}
                >
                  DIRECT MESSAGE
                </p>

                <h3
                  className="mt-1 text-2xl font-bold tracking-[-0.05em]"
                  style={{ color: "var(--contact-heading-color)" }}
                >
                  Send a message
                  <span style={{ color: "var(--muted-text-color)" }}>.</span>
                </h3>
              </div>

              <FiArrowUpRight
                style={{ color: "var(--contact-icon-color)" }}
                size={25}
                aria-hidden="true"
              />
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label
                  className="block text-xs font-semibold"
                  style={{ color: "var(--contact-label-color)" }}
                >
                  Your name
                  <input
                    required
                    name="name"
                    autoComplete="name"
                    placeholder="Your name"
                    className="glass-contact-input mt-2 block w-full rounded-2xl px-4 py-3.5 text-sm outline-none transition-colors focus-visible:ring-2"
                  />
                </label>

                <label
                  className="block text-xs font-semibold"
                  style={{ color: "var(--contact-label-color)" }}
                >
                  Email address
                  <input
                    required
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    className="glass-contact-input mt-2 block w-full rounded-2xl px-4 py-3.5 text-sm outline-none transition-colors focus-visible:ring-2"
                  />
                </label>
              </div>

              <label
                className="block text-xs font-semibold"
                style={{ color: "var(--contact-label-color)" }}
              >
                Subject
                <input
                  name="subject"
                  placeholder="Let's work together"
                  className="glass-contact-input mt-2 block w-full rounded-2xl px-4 py-3.5 text-sm outline-none transition-colors focus-visible:ring-2"
                />
              </label>

              <label
                className="block text-xs font-semibold"
                style={{ color: "var(--contact-label-color)" }}
              >
                Your message
                <textarea
                  required
                  name="message"
                  rows={5}
                  maxLength={5000}
                  placeholder="Tell me about your project..."
                  className="glass-contact-input mt-2 block w-full resize-y rounded-2xl px-4 py-3.5 text-sm leading-7 outline-none transition-colors focus-visible:ring-2"
                />
              </label>

              <div className="flex flex-wrap items-center justify-between gap-4">
                <p
                  className="text-xs"
                  style={{ color: "var(--contact-hint-color)" }}
                >
                  Opens your email app — no message is sent automatically.
                </p>

                <button
                  type="submit"
                  className="inline-flex items-center gap-4 rounded-full px-6 py-3.5 text-sm font-semibold transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2"
                  style={{
                    background: "var(--contact-button-background)",
                    color: "var(--contact-button-text)",
                  }}
                >
                  Compose email
                  <FiSend size={16} aria-hidden="true" />
                </button>
              </div>

              <div
                role="status"
                aria-live="polite"
                className="text-xs leading-6"
                style={{ color: "var(--contact-status-color)" }}
              >
                {needsEmail ? (
                  "Add your email address to profile.email in portfolio.ts."
                ) : sent ? (
                  <span className="inline-flex items-center gap-2">
                    <FiCheck aria-hidden="true" />
                    Your email app should open with a drafted message. Check it
                    before sending.
                  </span>
                ) : null}
              </div>
            </form>
          </div>
        </div>

        {/* Footer */}
        <footer
          className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t py-7 text-xs"
          style={{
            borderColor: "var(--contact-divider-color)",
            color: "var(--contact-footer-color)",
          }}
        >
          <p>© 2026 {profile.name}. Crafted with care.</p>

          <a
            href="#home"
            className="inline-flex items-center gap-2 font-semibold hover:underline"
            style={{ color: "var(--contact-footer-link)" }}
          >
            Back to top
            <FiArrowUpRight aria-hidden="true" />
          </a>
        </footer>
      </div>
    </section>
  );
}
