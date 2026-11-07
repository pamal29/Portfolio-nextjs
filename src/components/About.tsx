import Section from "./Section";
import { profile } from "@/data/portfolio";

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="A bit about me">
      <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-start">
        <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-muted">
          {profile.about.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <dl className="grid min-w-56 gap-4 rounded-2xl border border-border bg-surface p-6 text-sm">
          <div>
            <dt className="text-subtle">Based in</dt>
            <dd className="mt-0.5 font-medium">{profile.location}</dd>
          </div>
          <div>
            <dt className="text-subtle">Focus</dt>
            <dd className="mt-0.5 font-medium">Full-stack, mobile, cloud</dd>
          </div>
          <div>
            <dt className="text-subtle">Studying</dt>
            <dd className="mt-0.5 font-medium">BSc Information Systems</dd>
          </div>
        </dl>
      </div>
    </Section>
  );
}