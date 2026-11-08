import type { IconType } from "react-icons";
import { FiCode } from "react-icons/fi";
import {
  FaAws,
  FaCss3Alt,
  FaHtml5,
  FaJava,
  FaMicrosoft,
} from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import {
  SiDart,
  SiDocker,
  SiDotnet,
  SiExpo,
  SiExpress,
  SiFastapi,
  SiFigma,
  SiFirebase,
  SiFlutter,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiJavascript,
  SiKubernetes,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiRedis,
  SiSupabase,
  SiTailwindcss,
  SiTerraform,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { skillGroups } from "@/data/portfolio";

const iconMap: Record<string, IconType> = {
  react: SiReact,
  "react.js": SiReact,
  "react native": SiReact,
  typescript: SiTypescript,
  javascript: SiJavascript,
  "next.js": SiNextdotjs,
  nextjs: SiNextdotjs,
  "tailwind css": SiTailwindcss,
  tailwind: SiTailwindcss,
  html: FaHtml5,
  html5: FaHtml5,
  css: FaCss3Alt,
  css3: FaCss3Alt,
  expo: SiExpo,
  flutter: SiFlutter,
  dart: SiDart,
  "node.js": SiNodedotjs,
  nodejs: SiNodedotjs,
  express: SiExpress,
  "express.js": SiExpress,
  ".net": SiDotnet,
  "asp.net core": SiDotnet,
  "asp.net": SiDotnet,
  "c#": TbBrandCSharp,
  java: FaJava,
  python: SiPython,
  fastapi: SiFastapi,
  postgresql: SiPostgresql,
  postgres: SiPostgresql,
  postgis: SiPostgresql,
  mysql: SiMysql,
  mongodb: SiMongodb,
  redis: SiRedis,
  supabase: SiSupabase,
  firebase: SiFirebase,
  docker: SiDocker,
  kubernetes: SiKubernetes,
  terraform: SiTerraform,
  "github actions": SiGithubactions,
  "ci/cd": SiGithubactions,
  git: SiGit,
  github: SiGithub,
  aws: FaAws,
  azure: FaMicrosoft,
  linux: SiLinux,
  figma: SiFigma,
  postman: SiPostman,
  vercel: SiVercel,
};

function getIcon(name: string): IconType {
  return iconMap[name.trim().toLowerCase()] ?? FiCode;
}

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="portfolio-skills relative isolate overflow-hidden px-5 py-24 sm:px-8 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="portfolio-section-watermark pointer-events-none absolute -left-4 top-6 -z-10 select-none"
      >
        TOOLKIT
      </div>

      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <div className="glass-section-heading inline-block max-w-full rounded-[26px] px-7 py-5 sm:px-9">
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.24em]"
              style={{ color: "var(--muted-text-color)" }}
            >
              What I work with
            </p>

            <h2
              id="skills-title"
              className="mt-2 text-4xl font-bold tracking-[-0.065em] sm:text-6xl"
              style={{ color: "var(--heading-color)" }}
            >
              My Skills
              <span style={{ color: "var(--muted-text-color)" }}>.</span>
            </h2>
          </div>

          <p
            className="mt-5 max-w-lg text-sm leading-7"
            style={{ color: "var(--skills-description-color)" }}
          >
            Technologies and tools I use to design, develop, and build modern
            software applications.
          </p>
        </div>

        <div className="glass-skill-card overflow-hidden rounded-[28px]">
          {skillGroups.map((group, index) => (
            <div
              key={group.label}
              className={[
                "grid gap-6 px-6 py-7 sm:px-8 md:grid-cols-[200px_1fr] md:gap-8",
                index !== skillGroups.length - 1 ? "border-b" : "",
              ].join(" ")}
              style={{
                borderColor: "var(--skills-divider-color)",
              }}
            >
              <h3
                className="text-lg font-bold tracking-[-0.03em] sm:text-xl md:pt-3"
                style={{ color: "var(--skills-category-color)" }}
              >
                {group.label}
              </h3>

              <ul className="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-6">
                {group.items.map((item) => {
                  const Icon = getIcon(item);

                  return (
                    <li
                      key={item}
                      className="glass-skill-tag group flex flex-col items-center justify-center gap-2.5 rounded-2xl px-2 py-4 text-center transition-transform duration-300 hover:-translate-y-1"
                    >
                      <Icon
                        size={28}
                        aria-hidden="true"
                        className="transition-colors duration-300"
                        style={{ color: "var(--skills-icon-color)" }}
                      />

                      <span
                        className="text-[11px] font-semibold leading-4"
                        style={{ color: "var(--skills-item-color)" }}
                      >
                        {item}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
