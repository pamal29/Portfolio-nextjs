"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import Section from "./Section";
import { profile } from "@/data/portfolio";

const svgProps = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const MailIcon = () => (
  <svg {...svgProps}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

const GithubIcon = () => (
  <svg {...svgProps}>
    <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
  </svg>
);

const LinkedinIcon = () => (
  <svg {...svgProps}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const ArrowIcon = () => (
  <svg {...svgProps} width={16} height={16} strokeWidth={2}>
    <path d="M7 17 17 7" />
    <path d="M8 7h9v9" />
  </svg>
);

const SendIcon = () => (
  <svg {...svgProps} width={16} height={16}>
    <path d="m22 2-7 20-4-9-9-4z" />
    <path d="M22 2 11 13" />
  </svg>
);

const PinIcon = () => (
  <svg {...svgProps} width={16} height={16}>
    <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

type LinkRow = {
  label: string;
  text: string;
  href: string;
  icon: ReactNode;
  external: boolean;
};

const inputClass =
  "w-full rounded-2xl border border-black/10 bg-black/5 px-5 py-4 text-sm text-black placeholder:text-black/40 transition-colors duration-200 focus:border-black/40 focus:outline-none";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const rows: LinkRow[] = [
    {
      label: "Email",
      text: profile.email,
      href: `mailto:${profile.email}`,
      icon: <MailIcon />,
      external: false,
    },
    {
      label: "GitHub",
      text: "github.com/pamal29",
      href: profile.github,
      icon: <GithubIcon />,
      external: true,
    },
    {
      label: "LinkedIn",
      text: "LinkedIn profile",
      href: profile.linkedin,
      icon: <LinkedinIcon />,
      external: true,
    },
  ];

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const subject = String(data.get("subject") ?? "") || `Hello from ${name}`;
    const message = String(data.get("message") ?? "");

    const body = `${message}\n\n—\n${name}\n${email}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <Section id="contact" eyebrow="Contact" title="Let's work together">
      <div className="grid overflow-hidden rounded-3xl border border-black/10 bg-white text-black shadow-xl shadow-black/10 md:grid-cols-2">
        <div className="p-6 sm:p-10 md:border-r md:border-black/10">
          <p className="max-w-sm text-base leading-relaxed text-black/60">
            I&apos;m looking for internship and junior developer opportunities.
            If you have a project or a role in mind, I&apos;d like to hear about
            it.
          </p>

          <ul className="mt-8 space-y-3">
            {rows.map((r) => (
              <li key={r.label}>
                <a
                  href={r.href}
                  {...(r.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group flex items-center gap-4 rounded-2xl border border-black/10 bg-black/5 p-3 pr-5 transition-colors duration-200 hover:border-black/30 hover:bg-black/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/70"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-black/10 bg-black/5 text-black">
                    {r.icon}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs text-black/50">
                      {r.label}
                    </span>
                    <span className="block truncate text-sm font-medium">
                      {r.text}
                    </span>
                  </span>
                  <span className="text-black/40 transition duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-black">
                    <ArrowIcon />
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <p className="mt-8 flex items-center gap-2 text-sm text-black/50">
            <PinIcon />
            Sri Lanka · Open to internships &amp; junior roles
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 border-t border-black/10 p-6 sm:p-10 md:border-t-0"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder="Name"
              aria-label="Your name"
              className={inputClass}
            />
            <input
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="Email"
              aria-label="Your email"
              className={inputClass}
            />
          </div>
          <input
            name="subject"
            type="text"
            placeholder="Subject"
            aria-label="Subject"
            className={inputClass}
          />
          <textarea
            name="message"
            required
            rows={6}
            placeholder="Message"
            aria-label="Message"
            className={`${inputClass} min-h-[10rem] flex-1 resize-none`}
          />
          <button
            type="submit"
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-black px-6 py-4 text-sm font-medium text-white transition-opacity duration-200 hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            Send message
            <SendIcon />
          </button>
          <p
            role="status"
            className="min-h-[1.25rem] text-center text-xs text-black/50"
          >
            {sent ? "Opening your email app…" : ""}
          </p>
        </form>
      </div>
    </Section>
  );
}