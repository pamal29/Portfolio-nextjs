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
        className="portfolio-section-watermark pointer-events-none absolute left-0 top-8 -z-10 select-none"
      >
        JOURNEY
      </div>

      <div className="mx-auto max-w-6xl">
        <div className="glass-section-heading relative z-10 mb-12 inline-block max-w-full rounded-[26px] px-7 py-5 sm:px-9">
          <span
            className="text-[11px] font-semibold uppercase tracking-[0.25em]"
            style={{ color: "var(--muted-text-color)" }}
          >
            My background
          </span>

          <h2
            id="education-title"
            className="mt-2 text-4xl font-bold tracking-[-0.065em] sm:text-6xl"
            style={{ color: "var(--heading-color)" }}
          >
            Education & Certifications
            <span style={{ color: "var(--muted-text-color)" }}>.</span>
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Education */}
          <div>
            <div className="mb-7">
              <h3
                className="text-2xl font-bold tracking-tight"
                style={{ color: "var(--education-heading-color)" }}
              >
                Education
              </h3>

              <p
                className="mt-2 text-sm"
                style={{ color: "var(--education-description-color)" }}
              >
                My academic journey and qualifications.
              </p>
            </div>

            <div className="relative space-y-6 before:absolute before:bottom-4 before:left-[17px] before:top-4 before:w-px before:bg-[var(--education-timeline-color)] sm:before:left-[23px]">
              {education.map((item) => (
                <div
                  key={item.title}
                  className="relative pl-12 sm:pl-16"
                >
                  <span
                    aria-hidden="true"
                    className="absolute left-[10px] top-9 z-10 h-4 w-4 rounded-full border-4 shadow-[0_0_0_1px_rgba(80,80,80,.2)] sm:left-[16px]"
                    style={{
                      borderColor: "var(--education-dot-border)",
                      background: "var(--education-dot-background)",
                    }}
                  />

                  <article className="glass-education-card group rounded-[26px] p-6 sm:p-8">
                    <div>
                      <span
                        className="mb-3 inline-block text-[11px] font-semibold uppercase tracking-[0.2em]"
                        style={{ color: "var(--education-period-color)" }}
                      >
                        {item.period}
                      </span>

                      <h4
                        className="text-xl font-bold tracking-[-0.035em] sm:text-2xl"
                        style={{ color: "var(--education-title-color)" }}
                      >
                        {item.title}
                      </h4>

                      <p
                        className="mt-2 text-sm font-semibold"
                        style={{ color: "var(--education-place-color)" }}
                      >
                        {item.place}
                      </p>

                      <p
                        className="mt-4 max-w-2xl text-sm leading-7"
                        style={{ color: "var(--education-note-color)" }}
                      >
                        {item.note}
                      </p>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="mb-7">
              <h3
                className="text-2xl font-bold tracking-tight"
                style={{ color: "var(--certificate-heading-color)" }}
              >
                Certifications
              </h3>

              <p
                className="mt-2 text-sm"
                style={{ color: "var(--certificate-description-color)" }}
              >
                Professional certificates and completed courses.
              </p>
            </div>

            <div className="space-y-5">
              {certifications.map((certificate) => (
                <article
                  key={certificate.title}
                  className="glass-certificate group relative overflow-hidden rounded-[24px] p-6"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border shadow-sm"
                      style={{
                        borderColor: "var(--certificate-icon-border)",
                        background: "var(--certificate-icon-background)",
                        color: "var(--certificate-icon-color)",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="21"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M12 15l-3.5 2 1-4-3-3 4.2-.3L12 6l1.3 3.7 4.2.3-3 3 1 4z" />
                        <path d="M8 17.5V22l4-2 4 2v-4.5" />
                      </svg>
                    </div>

                    <div className="min-w-0">
                      <h4
                        className="text-base font-bold leading-6"
                        style={{ color: "var(--certificate-title-color)" }}
                      >
                        {certificate.title}
                      </h4>

                      <p
                        className="mt-2 text-sm"
                        style={{ color: "var(--certificate-issuer-color)" }}
                      >
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