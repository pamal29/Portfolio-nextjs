import { projects, type Project } from "@/data/portfolio";
import Image from "next/image";

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="glass-project-card group flex h-full flex-col rounded-[30px] p-5 sm:p-6">
      <div className="project-image-shell relative aspect-[16/9] overflow-hidden rounded-[22px]">
        <Image
          src={project.image}
          alt={`${project.title} project screenshot`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain p-2 transition-transform duration-700"
        />

        {project.featured && (
          <span
            className="project-image-category absolute bottom-4 right-4 z-10 rounded-full px-3 py-2 text-[10px] font-semibold tracking-[0.1em]"
            style={{ color: "var(--project-featured-text)" }}
          >
            Featured
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col px-2 pb-2 pt-6">
        <h3
          className="text-2xl font-bold tracking-[-0.05em]"
          style={{ color: "var(--project-title-color)" }}
        >
          {project.title}
        </h3>

        <p
          className="mt-4 flex-1 text-sm leading-7"
          style={{ color: "var(--project-description-color)" }}
        >
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((technology) => (
            <span
              key={technology}
              className="project-tech-tag rounded-full px-3 py-1.5 text-[11px] font-medium"
              style={{ color: "var(--project-tech-text)" }}
            >
              {technology}
            </span>
          ))}
        </div>

        {(project.github || project.live) && (
          <div
            className="mt-5 flex flex-wrap items-center gap-4 border-t pt-4"
            style={{ borderColor: "var(--project-divider-color)" }}
          >
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="project-external-link inline-flex items-center gap-2 text-sm font-semibold"
                style={{ color: "var(--project-link-color)" }}
              >
                Live demo <span aria-hidden="true">↗</span>
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-external-link inline-flex items-center gap-2 text-sm font-semibold"
                style={{ color: "var(--project-link-color)" }}
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
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="portfolio-projects relative isolate overflow-hidden px-5 py-24 sm:px-8 sm:py-32"
    >
      <div
        aria-hidden="true"
        className="portfolio-projects-watermark pointer-events-none absolute left-[-1rem] top-0 -z-10 select-none"
      >
        SELECTED WORK
      </div>

      <div className="mx-auto w-full max-w-[1600px]">
        <div className="mb-12">
          <div className="glass-section-heading inline-block max-w-full rounded-[26px] px-7 py-5 sm:px-9">
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.25em]"
              style={{ color: "var(--muted-text-color)" }}
            >
              Things I built
            </p>

            <h2
              id="projects-title"
              className="mt-2 text-4xl font-bold tracking-[-0.065em] sm:text-6xl"
              style={{ color: "var(--heading-color)" }}
            >
              Selected Work
              <span style={{ color: "var(--muted-text-color)" }}>.</span>
            </h2>
          </div>

          <p
            className="mt-5 max-w-md text-sm leading-7"
            style={{ color: "var(--text-color)" }}
          >
            A collection of applications and experiments I built using
            different technologies and tools.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
