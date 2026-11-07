import { profile } from "@/data/portfolio";

const CURRENT_YEAR = 2026;

export default function Footer() {
  return (
    <footer className="border-t border-border py-6">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-2 px-6 text-sm text-subtle sm:flex-row">
        <p>
          © {CURRENT_YEAR} {profile.name}. All rights reserved.
        </p>
        <p>Built with Next.js and Tailwind CSS</p>
      </div>
    </footer>
  );
}