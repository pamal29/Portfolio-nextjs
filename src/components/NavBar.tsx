"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

const navItems = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact Me" },
] as const;

type SectionId = (typeof navItems)[number]["id"];
type Indicator = { left: number; width: number; ready: boolean };

/**
 * Real glass effect: the surface is nearly transparent, and backdrop-filter
 * blurs the ACTUAL page moving underneath the fixed navigation.
 */
export default function GlassNavbar() {
  const [active, setActive] = useState<SectionId>("home");
  const [scrolled, setScrolled] = useState(false);
  const [indicator, setIndicator] = useState<Indicator>({
    left: 0,
    width: 0,
    ready: false,
  });
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;

    const syncNavigation = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 40);
        const checkpoint = window.innerHeight * 0.42;
        let current: SectionId = "home";

        for (const item of navItems) {
          const section = document.getElementById(item.id);
          if (section && section.getBoundingClientRect().top <= checkpoint) {
            current = item.id;
          }
        }
        setActive(current);
      });
    };

    syncNavigation();
    window.addEventListener("scroll", syncNavigation, { passive: true });
    window.addEventListener("resize", syncNavigation);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", syncNavigation);
      window.removeEventListener("resize", syncNavigation);
    };
  }, []);

  useLayoutEffect(() => {
    const links = linksRef.current;
    if (!links) return;
    const measure = () => {
      const link = links.querySelector<HTMLElement>(`[data-nav-section="${active}"]`);
      if (link) {
        setIndicator({ left: link.offsetLeft, width: link.offsetWidth, ready: true });
      }
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(links);
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [active]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-5 z-50 flex justify-center px-3 sm:top-7">
      <nav
        aria-label="Main navigation"
        className={[
          "pointer-events-auto max-w-full rounded-full",
          "transition-opacity duration-500 ease-out",
          "hover:opacity-100 focus-within:opacity-100",
          scrolled ? "opacity-75" : "opacity-100",
        ].join(" ")}
      >
        <div className="liquid-glass-nav max-w-[calc(100vw-24px)] overflow-x-auto rounded-full p-1.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div ref={linksRef} className="relative flex w-max items-center gap-0.5">
            {/* The ACTIVE pill is also transparent: nothing hides the background. */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 rounded-full border border-white/55 bg-white/25 shadow-[inset_0_1px_0_rgba(255,255,255,.55),0_2px_12px_rgba(0,0,0,.08)] transition-[left,width,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
              style={{
                left: indicator.left,
                width: indicator.width,
                opacity: indicator.ready ? 1 : 0,
              }}
            />
            {navItems.map((item) => (
              <a
                key={item.id}
                data-nav-section={item.id}
                href={`#${item.id}`}
                aria-current={active === item.id ? "location" : undefined}
                onClick={() => setActive(item.id)}
                className={[
                  "relative z-10 shrink-0 rounded-full px-3 py-2.5 text-[11px] font-semibold tracking-[0.01em] sm:px-5 sm:py-3 sm:text-sm",
                  "transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-800",
                  active === item.id
                    ? "text-zinc-950"
                    : "text-zinc-600 hover:text-zinc-950",
                ].join(" ")}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
