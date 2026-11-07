import { FiArrowUpRight, FiCode, FiLayers } from "react-icons/fi";
import Section from "./Section";
import { skillGroups } from "@/data/portfolio";

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="portfolio-skills relative isolate overflow-hidden px-5 py-24 sm:px-8 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="portfolio-grid pointer-events-none absolute inset-0 -z-20"
      />

      <div
        aria-hidden="true"
        className="portfolio-section-watermark pointer-events-none absolute -left-4 top-6 -z-10"
      >
        TOOLKIT
      </div>

      <div
        aria-hidden="true"
        className="portfolio-skills-orb pointer-events-none absolute -left-28 bottom-8 -z-10"
      />

      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <div className="glass-section-heading inline-block max-w-full rounded-[26px] px-7 py-5 sm:px-9">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                What I work with
              </p>

              <h2
                id="skills-title"
                className="mt-2 text-4xl font-bold tracking-[-0.065em] text-zinc-900 sm:text-6xl"
              >
                My Skills<span className="text-zinc-400">.</span>
              </h2>
            </div>

            <p className="mt-5 max-w-lg text-sm leading-7 text-zinc-600">
              Technologies and tools I use to design, develop, and build modern
              software applications.
            </p>
          </div>

          <div className="glass-small-pill inline-flex items-center gap-2 self-start rounded-full px-4 py-3 text-xs font-semibold text-zinc-700">
            <FiLayers aria-hidden="true" />
            Development × Technology
          </div>
        </div>

        <div className="grid items-stretch gap-5 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <article
              key={group.label}
              className="glass-skill-card group rounded-[28px] p-6 transition-all duration-300 hover:-translate-y-1 sm:p-8"
            >
              <div className="mb-7 flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="glass-skill-icon flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-zinc-700">
                    <FiCode size={24} aria-hidden="true" />
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                      Technical skills
                    </p>

                    <h3 className="mt-1 text-xl font-bold tracking-[-0.04em] text-zinc-900 sm:text-2xl">
                      {group.label}
                    </h3>
                  </div>
                </div>

                <span className="text-xs font-bold tracking-[0.1em] text-zinc-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="glass-skill-tag inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-semibold text-zinc-700"
                  >
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 rounded-full bg-zinc-500"
                    />
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex items-center justify-between border-t border-white/60 pt-4">
                <span className="text-[10px] font-semibold uppercase tracking-[0.17em] text-zinc-500">
                  Keep growing
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