import { profile } from "@/data/portfolio";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur">
      <nav className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6">
        <a href="#top" className="text-sm font-semibold tracking-tight">
          {profile.name}
          <span className="text-accent">.</span>
        </a>
        <ul className="hidden items-center gap-7 sm:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="rounded-full bg-foreground px-4 py-1.5 text-sm font-medium text-background transition-opacity hover:opacity-85 sm:hidden"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}