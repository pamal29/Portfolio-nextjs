"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { profile } from "../data/portfolio";
import { Download } from "lucide-react";

const roles = [
  profile.role,
  "Full-Stack Developer",
  "DevOps Enthusiast",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setRoleIndex((index) => (index + 1) % roles.length);
    }, 2800);

    return () => window.clearInterval(interval);
  }, []);

  const socials = [
    { label: "GitHub", href: profile.github, Icon: FaGithub },
    { label: "LinkedIn", href: profile.linkedin, Icon: FaLinkedinIn },
  ];

  return (
    <section
      id="home"
      className="portfolio-hero relative isolate min-h-screen overflow-hidden px-5 pb-20 pt-28 sm:px-8 lg:pt-36"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        <div className="order-2 lg:order-1">
          <div
            className="mb-7 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.26em]"
            style={{ color: "var(--muted-text-color)" }}
          >
            <span
              className="h-2 w-2 rounded-full"
              style={{ background: "var(--availability-color)" }}
            />
            Available for opportunities
          </div>

          <div className="glass-name inline-block max-w-full rounded-[28px] px-6 py-5 sm:px-8 sm:py-6">
            <p
              className="mb-1 text-sm font-medium"
              style={{ color: "var(--text-color)" }}
            >
              Hi, I&apos;m
            </p>

            <h1
              className="text-4xl font-bold leading-[1.08] tracking-[-0.06em] sm:text-5xl lg:text-[3.65rem]"
              style={{ color: "var(--heading-color)" }}
            >
              {profile.name}
              <span style={{ color: "var(--muted-text-color)" }}>.</span>
            </h1>
          </div>

          <div
            className="mt-6 flex items-center gap-3"
            aria-label="Social profiles"
          >
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className="glass-social flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{ color: "var(--heading-color)" }}
              >
                <Icon size={21} aria-hidden="true" />
              </a>
            ))}
          </div>

          <div className="mt-11">

            <div className="flex min-h-[85px] items-center sm:min-h-[100px]">
              <h2
                key={roleIndex}
                aria-live="polite"
                className="role-enter text-4xl font-bold tracking-[-0.065em] sm:text-5xl lg:text-6xl"
                style={{ color: "var(--heading-color)" }}
              >
                {roles[roleIndex]}
              </h2>
            </div>

            <p
              className="mt-5 max-w-[470px] text-base leading-8"
              style={{ color: "var(--text-color)" }}
            >
              {profile.tagline}
            </p>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-3">

            <a
              href="#contact"
              className="glass-secondary inline-flex items-center gap-5 rounded-full px-7 py-4 text-sm font-semibold transition-all duration-300 hover:-translate-y-1"
              style={{ color: "var(--heading-color)" }}
            >
              Get in touch <span aria-hidden="true">↓</span>
            </a>

            {profile.resumeUrl && (
              
            <a
              href="/resume.pdf"
              download="Pamal_Pahasara_Resume.pdf"
              className="glass-secondary group inline-flex items-center gap-3 rounded-full px-7 py-4 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:border-[#8b5cf6]/50 hover:shadow-[0_8px_30px_rgba(139,92,246,0.2)]"
              style={{ color: "var(--heading-color)" }}
            >
              <Download
                size={18}
                className="transition-transform duration-300 group-hover:translate-y-0.5"
              />
              Download Resume
            </a>

            )}
          </div>
        </div>

        <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
          <div className="portrait-stage relative aspect-square w-[min(79vw,440px)] sm:w-[420px] lg:w-full lg:max-w-[465px]">
            <div
              aria-hidden="true"
              className="portrait-orbit absolute inset-[1%] rounded-full"
            />

            <div
              aria-hidden="true"
              className="portrait-orbit portrait-orbit-inner absolute inset-[9%] rounded-full"
            />

            {profile.photo && (
              <div className="portrait-photo absolute inset-[13%] overflow-hidden rounded-full">
                <Image
                  src={profile.photo}
                  alt={`${profile.name} portrait`}
                  fill
                  priority
                  sizes="(max-width: 768px) 70vw, 360px"
                  className="object-cover object-center"
                />
              </div>
            )}

            <div
              aria-hidden="true"
              className="portrait-glass-tag absolute bottom-[14%] left-[-2%] rounded-2xl px-5 py-3 text-xs font-semibold tracking-[0.13em] sm:text-sm"
              style={{ color: "var(--text-color)" }}
            >
              CREATE • DESIGN • BUILD
            </div>

            <div
              aria-hidden="true"
              className="portrait-mini-orb absolute right-[4%] top-[14%] flex h-16 w-16 items-center justify-center rounded-2xl text-3xl sm:h-20 sm:w-20"
              style={{ color: "var(--text-color)" }}
            >
              ✳
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
