export default function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto w-full max-w-5xl px-6">
        <p className="font-mono text-xs uppercase tracking-widest text-accent">
          {eyebrow}
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          {title}
        </h2>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}