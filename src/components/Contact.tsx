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
import Section from "./Section";
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
    (item) =>
      item.href &&
      !item.href.includes("your-username")
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
        className="portfolio-grid pointer-events-none absolute inset-0 -z-20"
      />

      <div
        aria-hidden="true"
        className="portfolio-section-watermark pointer-events-none absolute -left-4 top-6 -z-10"
      >
        LET&apos;S TALK
      </div>

      <div
        aria-hidden="true"
        className="portfolio-contact-orb pointer-events-none absolute -right-32 top-1/4 -z-10"
      />

      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <div className="glass-section-heading inline-block max-w-full rounded-[26px] px-7 py-5 sm:px-9">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Get in touch
            </p>

            <h2
              id="contact-title"
              className="mt-2 text-4xl font-bold tracking-[-0.065em] text-zinc-900 sm:text-6xl"
            >
              Contact Me<span className="text-zinc-400">.</span>
            </h2>
          </div>

          <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-600">
            Have a project, an opportunity, or just want to connect? I&apos;d
            love to hear from you.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
          <div className="glass-contact-card flex flex-col justify-between rounded-[30px] p-7 sm:p-9">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.23em] text-zinc-500">
                LET&apos;S CONNECT
              </p>

              <h3 className="mt-5 text-4xl font-bold leading-tight tracking-[-0.07em] text-zinc-900 sm:text-5xl">
                Let&apos;s build
                <br />
                something
                <br />
                together<span className="text-zinc-400">.</span>
              </h3>

              <p className="mt-5 max-w-xs text-sm leading-8 text-zinc-600">
                I&apos;m looking for internship and junior developer
                opportunities. If you have a project or a role in mind,
                let&apos;s start a conversation.
              </p>

              <div className="mt-10 space-y-3">
                <div className="glass-contact-info flex items-center gap-4 rounded-[20px] p-4">
                  <div className="glass-skill-icon flex h-11 w-11 shrink-0 items-center justify-center rounded-xl">
                    <FiMail size={20} aria-hidden="true" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
                      Email
                    </p>

                    {profile.email ? (
                      <a
                        href={`mailto:${profile.email}`}
                        className="mt-1 block break-all text-sm font-semibold text-zinc-800 hover:underline"
                      >
                        {profile.email}
                      </a>
                    ) : (
                      <p className="mt-1 text-sm font-semibold text-zinc-600">
                        Add your email in portfolio.ts
                      </p>
                    )}
                  </div>
                </div>

                <div className="glass-contact-info flex items-center gap-4 rounded-[20px] p-4">
                  <div className="glass-skill-icon flex h-11 w-11 shrink-0 items-center justify-center rounded-xl">
                    <FiMapPin size={20} aria-hidden="true" />
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
                      Based in
                    </p>

                    <p className="mt-1 text-sm font-semibold text-zinc-800">
                      {profile.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-9 border-t border-white/60 pt-6">
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.15em] text-zinc-500">
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
                    className="glass-social flex h-12 w-12 items-center justify-center rounded-2xl text-zinc-800 transition-transform duration-300 hover:-translate-y-1"
                  >
                    <Icon size={20} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="glass-contact-card rounded-[30px] p-7 sm:p-9">
            <div className="mb-7 flex items-center justify-between gap-4">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
                  DIRECT MESSAGE
                </p>

                <h3 className="mt-1 text-2xl font-bold tracking-[-0.05em] text-zinc-900">
                  Send a message<span className="text-zinc-400">.</span>
                </h3>
              </div>

              <FiArrowUpRight
                className="text-zinc-500"
                size={25}
                aria-hidden="true"
              />
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-xs font-semibold text-zinc-700">
                  Your name
                  <input
                    required
                    name="name"
                    autoComplete="name"
                    placeholder="Your name"
                    className="glass-contact-input mt-2 block w-full rounded-2xl px-4 py-3.5 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 focus-visible:ring-2 focus-visible:ring-zinc-500"
                  />
                </label>

                <label className="block text-xs font-semibold text-zinc-700">
                  Email address
                  <input
                    required
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    className="glass-contact-input mt-2 block w-full rounded-2xl px-4 py-3.5 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 focus-visible:ring-2 focus-visible:ring-zinc-500"
                  />
                </label>
              </div>

              <label className="block text-xs font-semibold text-zinc-700">
                Subject
                <input
                  name="subject"
                  placeholder="Let's work together"
                  className="glass-contact-input mt-2 block w-full rounded-2xl px-4 py-3.5 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 focus-visible:ring-2 focus-visible:ring-zinc-500"
                />
              </label>

              <label className="block text-xs font-semibold text-zinc-700">
                Your message
                <textarea
                  required
                  name="message"
                  rows={5}
                  maxLength={5000}
                  placeholder="Tell me about your project..."
                  className="glass-contact-input mt-2 block w-full resize-y rounded-2xl px-4 py-3.5 text-sm leading-7 text-zinc-900 outline-none placeholder:text-zinc-400 focus-visible:ring-2 focus-visible:ring-zinc-500"
                />
              </label>

              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-zinc-500">
                  Opens your email app — no message is sent automatically.
                </p>

                <button
                  type="submit"
                  className="inline-flex items-center gap-4 rounded-full bg-zinc-900 px-6 py-3.5 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-1 hover:bg-zinc-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
                >
                  Compose email
                  <FiSend size={16} aria-hidden="true" />
                </button>
              </div>

              <div
                role="status"
                aria-live="polite"
                className="text-xs leading-6 text-zinc-600"
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

        <footer className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-zinc-300/60 py-7 text-xs text-zinc-500">
          <p>
            © 2026 {profile.name}. Crafted with care.
          </p>

          <a
            href="#home"
            className="inline-flex items-center gap-2 font-semibold text-zinc-700 hover:text-zinc-900"
          >
            Back to top
            <FiArrowUpRight aria-hidden="true" />
          </a>
        </footer>
      </div>
    </section>
  );
}