import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { PageSection } from "@/components/page-section";
import { SiteShell } from "@/components/site-shell";

export default function ProductsPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Products"
        title="Reliable supply for road surfacing and safety-related requirements"
        description="Jepnik Investments supplies products that support construction, road work, maintenance, and safety needs with practical availability and responsive service."
      />

      <PageSection
        label="Product categories"
        title="Supply focused on the products clients need most"
        intro="Jepnik’s product offering is designed for clients who need practical availability, clear information, and a supplier that understands project realities."
        muted
      >
        <div className="grid gap-6 md:grid-cols-2">
          <article className="card">
            <h2 className="text-2xl font-semibold text-[var(--foreground)]">Bitumen & Road Surfacing Products</h2>
            <p className="mt-4 text-base leading-7 text-[var(--muted)]">
              Bitumen, emulsions, and related materials for road works, maintenance, and infrastructure support projects.
            </p>
            <Link href="/products/bitumen-road-surfacing" className="mt-6 inline-flex text-sm font-semibold text-[var(--brand-orange)] transition hover:text-[var(--brand-navy)]">
              Learn more →
            </Link>
          </article>
          <article className="card">
            <h2 className="text-2xl font-semibold text-[var(--foreground)]">Safety & PPE Products</h2>
            <p className="mt-4 text-base leading-7 text-[var(--muted)]">
              Protective wear, footwear, accessories, and site safety products for teams operating in active environments.
            </p>
            <Link href="/products/safety-ppe" className="mt-6 inline-flex text-sm font-semibold text-[var(--brand-orange)] transition hover:text-[var(--brand-navy)]">
              Learn more →
            </Link>
          </article>
        </div>
      </PageSection>

      <PageSection label="Why source from Jepnik" title="A supplier that understands practical site and project needs">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Practical product support",
            "Industry-relevant supply",
            "Responsive enquiry handling",
            "Support for project and ongoing operational needs",
          ].map((item) => (
            <div key={item} className="rounded-[1.5rem] bg-[var(--surface-alt)] p-6 text-base font-semibold text-[var(--foreground)]">
              {item}
            </div>
          ))}
        </div>
      </PageSection>
    </SiteShell>
  );
}
