import { projects, type Project } from "@/data/portfolio";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="glass-project-card group flex h-full flex-col rounded-[30px] p-5 sm:p-6">
      <div className="project-image-shell relative flex aspect-[16/9] items-center justify-center overflow-hidden rounded-[22px]">
        <span className="select-none text-7xl font-bold tracking-[-0.08em] text-zinc-300/80 transition-transform duration-700 group-hover:scale-110">
          {String(index).padStart(2, "0")}
        </span>

        <span className="project-image-number absolute left-4 top-4 rounded-full px-3 py-2 text-[10px] font-bold tracking-[0.14em] text-zinc-800">
          PROJECT {String(index).padStart(2, "0")}
        </span>

        {project.featured && (
          <span className="project-image-category absolute bottom-4 right-4 rounded-full px-3 py-2 text-[10px] font-semibold tracking-[0.1em] text-zinc-800">
            Featured
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col px-2 pb-2 pt-6">
        <h3 className="text-2xl font-bold tracking-[-0.05em] text-zinc-900">
          {project.title}
        </h3>

        <p className="mt-4 flex-1 text-sm leading-7 text-zinc-600">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((technology) => (
            <span
              key={technology}
              className="project-tech-tag rounded-full px-3 py-1.5 text-[11px] font-medium text-zinc-700"
            >
              {technology}
            </span>
          ))}
        </div>

        {(project.github || project.live) && (
          <div className="mt-5 flex flex-wrap items-center gap-4 border-t border-white/60 pt-4">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="project-external-link inline-flex items-center gap-2 text-sm font-semibold text-zinc-800"
              >
                Live demo <span aria-hidden="true">↗</span>
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-external-link inline-flex items-center gap-2 text-sm font-semibold text-zinc-800"
              >
                Source code <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  const featured = projects.filter((project) => project.featured);
  const rest = projects.filter((project) => !project.featured);

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="portfolio-projects relative isolate overflow-hidden px-5 py-24 sm:px-8 sm:py-32"
    >
      <div
        aria-hidden="true"
        className="portfolio-projects-grid pointer-events-none absolute inset-0 -z-20"
      />

      <div
        aria-hidden="true"
        className="portfolio-projects-orb pointer-events-none absolute -right-32 top-12 -z-10"
      />

      <div
        aria-hidden="true"
        className="portfolio-projects-orb portfolio-projects-orb-bottom pointer-events-none absolute -bottom-40 -left-48 -z-10"
      />

      <div
        aria-hidden="true"
        className="portfolio-projects-watermark pointer-events-none absolute left-[-1rem] top-0 -z-10 select-none"
      >
        SELECTED WORK
      </div>

      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <div className="glass-section-heading inline-block max-w-full rounded-[26px] px-7 py-5 sm:px-9">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-zinc-500">
              Things I built
            </p>

            <h2
              id="projects-title"
              className="mt-2 text-4xl font-bold tracking-[-0.065em] text-zinc-900 sm:text-6xl"
            >
              Selected Work<span className="text-zinc-400">.</span>
            </h2>
          </div>

          <p className="mt-5 max-w-md text-sm leading-7 text-zinc-600">
            A collection of applications and experiments I built using
            different technologies and tools.
          </p>
        </div>

        {featured.length > 0 && (
          <>
            <div className="mb-6 flex items-center gap-3">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-600">
                Featured Projects
              </h3>
              <div className="h-px flex-1 bg-white/70" />
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:gap-7">
              {featured.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index + 1}
                />
              ))}
            </div>
          </>
        )}

        {rest.length > 0 && (
          <>
            <div className="mb-6 mt-16 flex items-center gap-3">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-600">
                More Projects
              </h3>
              <div className="h-px flex-1 bg-white/70" />
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
              {rest.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={featured.length + index + 1}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}