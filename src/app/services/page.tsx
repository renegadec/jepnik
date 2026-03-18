import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { PageSection } from "@/components/page-section";
import { SiteShell } from "@/components/site-shell";

const services = [
  {
    title: "Civil Contracting",
    body: "We provide civil contracting support for projects that require structured execution, coordination, and dependable delivery.",
  },
  {
    title: "Road Marking & Maintenance",
    body: "We offer road marking and maintenance services using a practical, results-oriented approach that improves safety, visibility, and functionality.",
  },
  {
    title: "Site Evaluation & Consulting",
    body: "We support clients at planning stage by assessing requirements, reviewing site conditions, and helping identify the right practical approach before execution begins.",
  },
];

export default function ServicesPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Services"
        title="Execution-focused services for road works and infrastructure-related needs"
        description="Jepnik Investments offers practical services designed to support public and private sector projects with responsive coordination and delivery aligned with client needs."
      />

      <PageSection label="Service areas" title="Practical support from planning to delivery" muted>
        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((service) => {
            const href =
              service.title === "Civil Contracting"
                ? "/services/civil-contracting"
                : service.title === "Road Marking & Maintenance"
                  ? "/services/road-marking-maintenance"
                  : "/services/site-evaluation-consulting";

            return (
              <article key={service.title} className="card h-full">
                <h2 className="text-2xl font-semibold text-[var(--foreground)]">{service.title}</h2>
                <p className="mt-4 text-base leading-7 text-[var(--muted)]">{service.body}</p>
                <Link href={href} className="mt-6 inline-flex text-sm font-semibold text-[var(--brand-orange)] transition hover:text-[var(--brand-navy)]">
                  Learn more →
                </Link>
              </article>
            );
          })}
        </div>
      </PageSection>

      <PageSection
        label="How we work"
        title="A simple process that keeps projects moving"
        intro="Jepnik approaches each enquiry with a practical process that helps clients move from requirement to execution more confidently."
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Understand your requirement",
            "Review scope and site needs",
            "Recommend the right approach",
            "Deliver with professionalism and follow-through",
          ].map((step, index) => (
            <div key={step} className="rounded-[1.5rem] border border-black/10 bg-white p-6 shadow-[0_10px_30px_rgba(2,2,18,0.05)]">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--brand-gold-deep)]">0{index + 1}</p>
              <p className="mt-4 text-lg font-semibold text-[var(--foreground)]">{step}</p>
            </div>
          ))}
        </div>
      </PageSection>
    </SiteShell>
  );
}
