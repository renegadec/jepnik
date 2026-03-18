import { PageHero } from "@/components/page-hero";
import { PageSection } from "@/components/page-section";
import { SiteShell } from "@/components/site-shell";

export default function AboutPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="About Jepnik"
        title="A practical partner for supply, contracting and site support"
        description="Jepnik Investments serves infrastructure, construction, road maintenance, and safety supply needs with a focus on professionalism, reliability, and practical delivery."
      />

      <PageSection
        label="Company overview"
        title="Built to support real project requirements"
        intro="Jepnik Investments is a Zimbabwean business serving the infrastructure, construction, road maintenance, and safety supply sectors. Our focus is to provide dependable products and services that help clients complete projects efficiently and professionally."
      >
        <div className="grid gap-8 lg:grid-cols-2">
          <p className="text-lg leading-8 text-[var(--muted)]">
            We support requirements across bitumen and road surfacing products, civil contracting, road marking and maintenance, and safety product supply. Our work is grounded in a practical understanding of project needs, customer expectations, and the importance of quality delivery.
          </p>
          <p className="text-lg leading-8 text-[var(--muted)]">
            Whether the client is preparing for procurement, sourcing materials, or looking for execution support, Jepnik aims to offer clarity, responsiveness, and service that reflects trust and capability.
          </p>
        </div>
      </PageSection>

      <PageSection label="Who we serve" title="Support for public and private sector clients" muted>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            "Contractors and project teams",
            "Institutions and procurement buyers",
            "Businesses requiring road-related services or safety products",
          ].map((item) => (
            <div key={item} className="card">
              <p className="text-lg font-semibold text-[var(--foreground)]">{item}</p>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection label="Our approach" title="What defines how Jepnik works">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {[
            "Professional service",
            "Quality-focused delivery",
            "Clear communication",
            "Reliable support",
            "Practical solutions",
          ].map((item) => (
            <div key={item} className="rounded-2xl border border-black/10 bg-[var(--surface-alt)] px-5 py-6 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--foreground)]">
              {item}
            </div>
          ))}
        </div>
      </PageSection>
    </SiteShell>
  );
}
