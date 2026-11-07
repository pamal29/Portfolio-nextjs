import Section from "./Section";
import { education, certifications } from "@/data/portfolio";

export default function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Education & certifications">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <h3 className="text-sm font-medium uppercase tracking-widest text-subtle">
            Education
          </h3>
          <ol className="mt-5 space-y-8 border-l border-border pl-6">
            {education.map((e) => (
              <li key={e.title} className="relative">
                <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-background" />
                <p className="font-mono text-xs text-subtle">{e.period}</p>
                <h4 className="mt-1 text-lg font-semibold tracking-tight">{e.title}</h4>
                <p className="text-sm text-muted">{e.place}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{e.note}</p>
              </li>
            ))}
          </ol>
        </div>
        <div>
          <h3 className="text-sm font-medium uppercase tracking-widest text-subtle">
            Certifications
          </h3>
          <ul className="mt-5 space-y-3">
            {certifications.map((c) => (
              <li key={c.title} className="rounded-2xl border border-border bg-surface p-5">
                <p className="font-medium">{c.title}</p>
                <p className="mt-0.5 text-sm text-muted">{c.issuer}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}