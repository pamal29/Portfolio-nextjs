import { education, certifications } from "@/data/portfolio";

export default function Education() {
  return (
    <section
      id="education"
      className="portfolio-education relative isolate overflow-hidden px-5 py-24 sm:px-8 sm:py-32"
    >
      <div
        aria-hidden="true"
        className="portfolio-education-glow pointer-events-none absolute -z-10"
      />

      <div className="mx-auto max-w-6xl">
        <div className="glass-section-heading mb-12 inline-block max-w-full rounded-[26px] px-7 py-5 sm:px-9">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-zinc-500">
            My journey
          </span>

          <h2 className="mt-2 text-4xl font-bold tracking-[-0.065em] text-zinc-900 sm:text-6xl">
            Education<span className="text-zinc-400">.</span>
          </h2>
        </div>

        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="mb-8 flex items-center gap-3">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-600">
                Academic Background
              </h3>
              <div className="h-px flex-1 bg-white/70" />
            </div>

            <div className="relative space-y-6 before:absolute before:bottom-4 before:left-[17px] before:top-4 before:w-px before:bg-zinc-300 sm:before:left-[23px]">
              {education.map((item, index) => (
                <div key={item.title} className="relative pl-12 sm:pl-16">
                  <span
                    aria-hidden="true"
                    className="absolute left-[10px] top-9 z-10 h-4 w-4 rounded-full border-4 border-white bg-zinc-600 shadow-[0_0_0_1px_rgba(80,80,80,.2)] sm:left-[16px]"
                  />

                  <article className="glass-education-card group rounded-[26px] p-6 sm:p-8">
                    <div className="flex flex-col gap-5 sm:flex-row sm:justify-between sm:gap-8">
                      <div>
                        <span className="mb-3 inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
                          {item.period}
                        </span>

                        <h4 className="text-xl font-bold tracking-[-0.035em] text-zinc-900 sm:text-2xl">
                          {item.title}
                        </h4>

                        <p className="mt-2 text-sm font-semibold text-zinc-600">
                          {item.place}
                        </p>

                        <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-600">
                          {item.note}
                        </p>
                      </div>

                      <span className="education-number select-none self-start text-4xl font-bold tracking-[-0.08em] text-zinc-300 sm:text-5xl">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-8 flex items-center gap-3">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-600">
                Certifications
              </h3>
              <div className="h-px flex-1 bg-white/70" />
            </div>

            <div className="space-y-4">
              {certifications.map((certification, index) => (
                <article
                  key={certification.title}
                  className="glass-education-card group rounded-[24px] p-5 sm:p-6"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/70 bg-white/40 text-sm font-bold text-zinc-600 shadow-sm">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="min-w-0 flex-1">
                      <h4 className="text-base font-bold leading-snug text-zinc-900">
                        {certification.title}
                      </h4>

                      <p className="mt-2 text-sm font-medium text-zinc-600">
                        {certification.issuer}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}