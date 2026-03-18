import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { PageSection } from "@/components/page-section";
import { SiteShell } from "@/components/site-shell";

export default function SiteEvaluationConsultingPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Services • Site Evaluation & Consulting"
        title="Practical guidance before execution begins"
        description="Jepnik provides site evaluation and consulting support to help clients assess needs, understand scope, and move forward with a clearer project approach."
      />

      <PageSection
        label="What this supports"
        title="Useful input before delivery starts"
        intro="Before work begins, clients often need guidance on conditions, likely interventions, and the most suitable next steps."
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Early-stage planning",
            "Site review and requirement assessment",
            "Practical recommendations",
            "Better decision-making before execution",
          ].map((item) => (
            <div key={item} className="card">
              <p className="text-lg font-semibold text-[var(--foreground)]">{item}</p>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection
        label="Who it’s for"
        title="Support for clients preparing infrastructure or maintenance work"
        intro="This service is useful for clients preparing surfacing, maintenance, infrastructure, or related site work who need informed guidance before moving into delivery."
        muted
      >
        <p className="max-w-4xl text-lg leading-8 text-[var(--muted)]">
          It helps position Jepnik as more than a supplier by supporting decision-making at the stage where project clarity matters most.
        </p>
      </PageSection>

      <PageSection label="Next step" title="Speak to Jepnik about your site and project requirements">
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link href="/contact" className="btn-primary">Request a Consultation</Link>
          <Link href="/services" className="btn-secondary">Back to Services</Link>
        </div>
      </PageSection>
    </SiteShell>
  );
}
