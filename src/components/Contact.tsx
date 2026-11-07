import Section from "./Section";
import { profile } from "@/data/portfolio";

export default function Contact() {
  const links = [
    { label: "Email", href: `mailto:${profile.email}`, text: profile.email },
    { label: "GitHub", href: profile.github, text: "github.com/pamal29" },
    { label: "LinkedIn", href: profile.linkedin, text: "LinkedIn profile" },
  ];
  return (
    <Section id="contact" eyebrow="Contact" title="Let's work together">
      <p className="max-w-xl text-lg leading-relaxed text-muted">
        I&apos;m looking for internship and junior developer opportunities. If you
        have a project or a role in mind, I&apos;d like to hear about it.
      </p>
      <ul className="mt-8 grid gap-3 sm:max-w-md">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              target={l.label === "Email" ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-2xl border border-border bg-surface px-5 py-4 transition-colors hover:border-accent/40"
            >
              <span className="text-sm text-subtle">{l.label}</span>
              <span className="text-sm font-medium">{l.text}</span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}