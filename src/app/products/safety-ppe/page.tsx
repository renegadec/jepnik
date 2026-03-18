import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { PageSection } from "@/components/page-section";
import { SiteShell } from "@/components/site-shell";

export default function SafetyPpePage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Products • Safety & PPE"
        title="Protective products for safer worksites and operations"
        description="Jepnik Investments supplies safety products and PPE for organisations, contractors, and teams operating in environments where protection, visibility, and compliance matter."
      />

      <PageSection
        label="Product categories"
        title="Core PPE and safety items for operational environments"
        intro="Buyers need safety products that are practical, relevant to the job, and supported by responsive service. Jepnik aims to provide product support that helps clients source confidently."
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-6">
          {[
            "Reflective wear",
            "Helmets",
            "Safety footwear",
            "Gloves",
            "Protective clothing",
            "Site safety accessories",
          ].map((item) => (
            <div key={item} className="card flex min-h-40 items-center justify-center text-center">
              <p className="text-lg font-semibold text-[var(--foreground)]">{item}</p>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection
        label="Suitable for"
        title="Useful across contracting, construction and industrial settings"
        intro="This category supports organisations that need practical PPE sourcing for staff, site teams, contractors, and operational environments."
        muted
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {[
            "Contractors",
            "Construction teams",
            "Industrial operations",
            "Institutions",
            "Businesses with on-site staff",
          ].map((item) => (
            <div key={item} className="rounded-[1.5rem] bg-white p-6 shadow-[0_10px_30px_rgba(2,2,18,0.05)]">
              <p className="text-base font-semibold text-[var(--foreground)]">{item}</p>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection label="Next step" title="Request a quote for PPE and safety products">
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link href="/contact" className="btn-primary">Request a Product Quote</Link>
          <Link href="/products" className="btn-secondary">Back to Products</Link>
        </div>
      </PageSection>
    </SiteShell>
  );
}
