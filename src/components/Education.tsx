import { education, certifications } from "@/data/portfolio";

export default function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-title"
      className="portfolio-education relative isolate overflow-hidden px-5 py-24 sm:px-8 sm:py-32"
    >
      <div
        aria-hidden="true"
        className="portfolio-grid pointer-events-none absolute inset-0 -z-10"
      />

      <div
        aria-hidden="true"
        className="portfolio-education-glow pointer-events-none absolute -z-10"
      />

      <div
        aria-hidden="true"
        className="portfolio-section-watermark pointer-events-none absolute left-0 top-8 -z-10 select-none"
      >
        JOURNEY
      </div>

      <div className="mx-auto max-w-6xl">
        <div className="glass-section-heading relative z-10 mb-12 inline-block max-w-full rounded-[26px] px-7 py-5 sm:px-9">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-zinc-500">
            My background
          </span>

          <h2
            id="education-title"
            className="mt-2 text-4xl font-bold tracking-[-0.065em] text-zinc-900 sm:text-6xl"
          >
            Education & Certifications
            <span className="text-zinc-400">.</span>
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <div className="mb-7">
              <h3 className="text-2xl font-bold tracking-tight text-zinc-900">
                Education
              </h3>
              <p className="mt-2 text-sm text-zinc-500">
                My academic journey and qualifications.
              </p>
            </div>

            <div className="relative space-y-6 before:absolute before:bottom-4 before:left-[17px] before:top-4 before:w-px before:bg-zinc-300 sm:before:left-[23px]">
              {education.map((item, index) => (
                <div
                  key={item.title}
                  className="relative pl-12 sm:pl-16"
                >
                  <span
                    aria-hidden="true"
                    className="absolute left-[10px] top-9 z-10 h-4 w-4 rounded-full border-4 border-white bg-zinc-600 shadow-[0_0_0_1px_rgba(80,80,80,.2)] sm:left-[16px]"
                  />

                  <article className="glass-education-card group rounded-[26px] p-6 sm:p-8">
                    <div className="flex justify-between gap-5">
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
            <div className="mb-7">
              <h3 className="text-2xl font-bold tracking-tight text-zinc-900">
                Certifications
              </h3>
              <p className="mt-2 text-sm text-zinc-500">
                Professional certificates and completed courses.
              </p>
            </div>

            <div className="space-y-5">
              {certifications.map((certificate, index) => (
                <article
                  key={certificate.title}
                  className="glass-certificate group relative overflow-hidden rounded-[24px] p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-zinc-200 bg-white/70 text-sm font-bold text-zinc-600 shadow-sm">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="min-w-0">
                      <h4 className="text-base font-bold leading-6 text-zinc-900">
                        {certificate.title}
                      </h4>

                      <p className="mt-2 text-sm text-zinc-500">
                        {certificate.issuer}
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
