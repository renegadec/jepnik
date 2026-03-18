type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[var(--brand-black)] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(244,199,0,0.24),_transparent_28%),linear-gradient(135deg,_rgba(239,129,33,0.12),_transparent_42%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--brand-gold)]">
            {eyebrow}
          </p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75 sm:text-xl">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
