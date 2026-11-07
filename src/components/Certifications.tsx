import { FiAward, FiArrowUpRight } from "react-icons/fi";
import { certifications } from "@/data/portfolio";

export default function Certifications() {
  return (
    <section
      id="certifications"
      aria-labelledby="certifications-title"
      className="portfolio-education relative isolate overflow-hidden px-5 py-24 sm:px-8 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="portfolio-education-glow pointer-events-none absolute -z-10"
      />

      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col justify-between gap-7 sm:flex-row sm:items-end">
          <div>
            <div className="glass-section-heading inline-block max-w-full rounded-[26px] px-7 py-5 sm:px-9">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                Learning & recognition
              </p>

              <h2
                id="certifications-title"
                className="mt-2 text-4xl font-bold tracking-[-0.065em] text-zinc-900 sm:text-6xl"
              >
                Certifications<span className="text-zinc-400">.</span>
              </h2>
            </div>

            <p className="mt-5 max-w-lg text-sm leading-7 text-zinc-600">
              A collection of courses, credentials, and milestones along my
              learning journey.
            </p>
          </div>

          <div className="glass-education-card inline-flex items-center gap-2 self-start rounded-full px-5 py-3 text-xs font-semibold text-zinc-700">
            <FiAward size={17} aria-hidden="true" />
            Always learning
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((certificate, index) => (
            <article
              key={certificate.title}
              className="glass-education-card group flex flex-col rounded-[26px] p-6 transition-all duration-300 hover:-translate-y-1 sm:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/75 bg-white/40 text-zinc-700 shadow-sm">
                  <FiAward size={23} aria-hidden="true" />
                </div>

                <span className="education-number text-4xl font-bold tracking-[-0.08em] text-zinc-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="mt-7 flex-1">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
                  {certificate.issuer}
                </p>

                <h3 className="mt-3 text-xl font-bold leading-snug tracking-[-0.04em] text-zinc-900">
                  {certificate.title}
                </h3>
              </div>

              <div className="mt-7 flex items-center justify-between border-t border-white/60 pt-4">
                <span className="text-xs font-medium text-zinc-500">
                  Professional development
                </span>

                <FiArrowUpRight
                  className="text-zinc-500 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  size={19}
                  aria-hidden="true"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}