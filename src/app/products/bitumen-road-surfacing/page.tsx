import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { PageSection } from "@/components/page-section";
import { SiteShell } from "@/components/site-shell";

export default function BitumenRoadSurfacingPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Products • Bitumen & Road Surfacing"
        title="Product supply for road construction, surfacing and maintenance work"
        description="Jepnik Investments supplies bitumen and related road surfacing products for clients involved in infrastructure, road maintenance, and construction-related work."
      />

      <PageSection
        label="Product range"
        title="Supply aligned with practical road work needs"
        intro="Jepnik aims to support buyers with product availability, responsive service, and a better information base for procurement and project execution."
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {[
            "Bitumen",
            "Tars",
            "Emulsions",
            "Road surfacing materials",
            "Related accessories and support items",
          ].map((item) => (
            <div key={item} className="card flex min-h-40 items-center justify-center text-center">
              <p className="text-lg font-semibold text-[var(--foreground)]">{item}</p>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection
        label="Typical use cases"
        title="Built around road and infrastructure work"
        intro="This product category supports clients involved in construction, maintenance, repair work, and infrastructure support projects."
        muted
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Road construction",
            "Road maintenance",
            "Surface repair work",
            "Infrastructure support projects",
          ].map((item) => (
            <div key={item} className="rounded-[1.5rem] bg-white p-6 shadow-[0_10px_30px_rgba(2,2,18,0.05)]">
              <p className="text-base font-semibold text-[var(--foreground)]">{item}</p>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection label="Next step" title="Need pricing or availability?">
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link href="/contact" className="btn-primary">Request a Product Quote</Link>
          <Link href="/products" className="btn-secondary">Back to Products</Link>
        </div>
      </PageSection>
    </SiteShell>
  );
}
