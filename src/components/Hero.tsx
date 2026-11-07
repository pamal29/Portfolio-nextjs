import { profile } from "@/data/portfolio";

export default function Hero() {
  return (
    <section id="top" className="pt-24 pb-16 sm:pt-32 sm:pb-24">
      <div className="mx-auto w-full max-w-5xl px-6">
        <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Open to internships and junior roles
        </p>
        <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight sm:text-6xl">
          Hi, I&apos;m {profile.name}.
          <span className="block text-muted">{profile.role}.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          {profile.tagline}
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="rounded-full bg-foreground px-6 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-85"
          >
            View projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-border bg-surface px-6 py-2.5 text-sm font-medium transition-colors hover:border-foreground"
          >
            Get in touch
          </a>
          {profile.resumeUrl && (
            <a
              href={profile.resumeUrl}
              className="px-3 py-2.5 text-sm font-medium text-accent hover:underline"
            >
              Download résumé
            </a>
          )}
        </div>
      </div>
    </section>
  );
}