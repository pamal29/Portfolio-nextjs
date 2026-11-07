import Section from "./Section";
import { projects, type Project } from "@/data/portfolio";

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col rounded-2xl border border-border bg-surface p-6 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
        {project.featured && (
          <span className="rounded-full bg-accent-soft px-2.5 py-0.5 text-xs font-medium text-accent">
            Featured
          </span>
        )}
      </div>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
        {project.description}
      </p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <li
            key={t}
            className="rounded-md bg-background px-2 py-1 font-mono text-xs text-muted ring-1 ring-inset ring-border"
          >
            {t}
          </li>
        ))}
      </ul>
      {(project.github || project.live) && (
        <div className="mt-5 flex gap-4 text-sm font-medium">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              Code
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              Live demo
            </a>
          )}
        </div>
      )}
    </article>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  return (
    <Section id="projects" eyebrow="Projects" title="Selected work">
      <div className="grid gap-5 md:grid-cols-3">
        {featured.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
      <h3 className="mt-14 text-sm font-medium uppercase tracking-widest text-subtle">
        More projects
      </h3>
      <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </Section>
  );
}