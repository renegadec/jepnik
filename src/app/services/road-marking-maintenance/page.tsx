import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { PageSection } from "@/components/page-section";
import { SiteShell } from "@/components/site-shell";

export default function RoadMarkingMaintenancePage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Services • Road Marking & Maintenance"
        title="Improving safety, visibility and usability across road and site environments"
        description="Jepnik Investments offers road marking and maintenance services designed to support safer and more effective road and surface use."
      />

      <PageSection
        label="Typical applications"
        title="Where this service adds practical value"
        intro="Road marking and maintenance work should be clear, durable, and professionally executed to support both function and presentation."
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {[
            "Public roads",
            "Commercial premises",
            "Parking areas",
            "Industrial sites",
            "Institutional facilities",
          ].map((item) => (
            <div key={item} className="card flex min-h-40 items-center justify-center text-center">
              <p className="text-lg font-semibold text-[var(--foreground)]">{item}</p>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection
        label="Service value"
        title="Focused on visibility, safety and lasting usability"
        intro="Jepnik aims to provide service that supports practical safety needs while improving the quality and usability of road and surface environments."
        muted
      >
        <div className="grid gap-5 md:grid-cols-3">
          {[
            "Clear visual guidance",
            "Professional execution",
            "Support for functional and presentational requirements",
          ].map((item) => (
            <div key={item} className="rounded-[1.5rem] bg-white p-6 shadow-[0_10px_30px_rgba(2,2,18,0.05)]">
              <p className="text-base font-semibold text-[var(--foreground)]">{item}</p>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection label="Next step" title="Need road marking or maintenance support?">
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link href="/contact" className="btn-primary">Contact Jepnik</Link>
          <Link href="/services" className="btn-secondary">Back to Services</Link>
        </div>
      </PageSection>
    </SiteShell>
  );
}
