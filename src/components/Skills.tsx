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

/**
 * Maps a skill name (lowercase) to its icon.
 * When you change skills in data/portfolio, add the new name here.
 * Anything not listed falls back to a generic code icon.
 */
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
        className="portfolio-grid pointer-events-none absolute inset-0 -z-20"
      />

      <div
        aria-hidden="true"
        className="portfolio-section-watermark pointer-events-none absolute -left-4 top-6 -z-10 select-none"
      >
        TOOLKIT
      </div>

      <div
        aria-hidden="true"
        className="portfolio-skills-orb pointer-events-none absolute -left-28 bottom-8 -z-10"
      />

      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
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

        <div className="glass-skill-card divide-y divide-white/60 overflow-hidden rounded-[28px]">
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="grid gap-6 px-6 py-7 sm:px-8 md:grid-cols-[200px_1fr] md:gap-8"
            >
              <h3 className="text-lg font-bold tracking-[-0.03em] text-zinc-900 sm:text-xl md:pt-3">
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
                        className="text-zinc-600 transition-colors duration-300 group-hover:text-zinc-900"
                      />
                      <span className="text-[11px] font-semibold leading-4 text-zinc-700">
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