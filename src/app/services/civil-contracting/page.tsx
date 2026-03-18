import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { PageSection } from "@/components/page-section";
import { SiteShell } from "@/components/site-shell";

export default function CivilContractingPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Services • Civil Contracting"
        title="Structured support for road-related and civil works projects"
        description="Jepnik Investments provides civil contracting services for clients who need practical execution, coordination, and reliable project support."
      />

      <PageSection
        label="Service overview"
        title="A practical contracting partner for project delivery"
        intro="We approach each requirement with a focus on professionalism, quality, and the realities of delivery on site."
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Project support and coordination",
            "Site-based execution planning",
            "Practical solutions tailored to scope",
            "Professional communication throughout delivery",
          ].map((item) => (
            <div key={item} className="card">
              <p className="text-lg font-semibold text-[var(--foreground)]">{item}</p>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection
        label="Suitable for"
        title="Support for public and private sector requirements"
        intro="Jepnik’s civil contracting services are suited to clients who require dependable support on road-related and infrastructure-focused work."
        muted
      >
        <div className="grid gap-5 md:grid-cols-2">
          {[
            "Road-related infrastructure work",
            "Site support and project coordination needs",
            "Procurement-driven contract requirements",
            "Clients looking for accountable delivery support",
          ].map((item) => (
            <div key={item} className="rounded-[1.5rem] bg-white p-6 shadow-[0_10px_30px_rgba(2,2,18,0.05)]">
              <p className="text-base font-semibold text-[var(--foreground)]">{item}</p>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection label="Next step" title="Discuss your project scope with Jepnik">
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link href="/contact" className="btn-primary">Request a Quote</Link>
          <Link href="/services" className="btn-secondary">Back to Services</Link>
        </div>
      </PageSection>
    </SiteShell>
  );
}
