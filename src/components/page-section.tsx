import type { ReactNode } from "react";

type PageSectionProps = {
  label?: string;
  title?: string;
  intro?: string;
  children?: ReactNode;
  muted?: boolean;
};

export function PageSection({ label, title, intro, children, muted = false }: PageSectionProps) {
  return (
    <section className={muted ? "bg-[var(--surface-alt)]" : "bg-white"}>
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        {(label || title || intro) && (
          <div className="max-w-3xl">
            {label ? <p className="section-label">{label}</p> : null}
            {title ? <h2 className="section-title mt-4">{title}</h2> : null}
            {intro ? <p className="mt-6 text-lg leading-8 text-[var(--muted)]">{intro}</p> : null}
          </div>
        )}
        <div className={label || title || intro ? "mt-10" : ""}>{children}</div>
      </div>
    </section>
  );
}
