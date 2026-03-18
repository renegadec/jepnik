import { PageHero } from "@/components/page-hero";
import { PageSection } from "@/components/page-section";
import { SiteShell } from "@/components/site-shell";

export default function ResourcesPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Resources"
        title="Important company and product documents in one place"
        description="This section is designed to make it easier for clients, procurement teams, and partners to access the documents they need when evaluating Jepnik Investments."
      />

      <PageSection
        label="Resource library"
        title="Built for easier enquiries and procurement support"
        intro="Making key documents easy to access supports faster decision-making and helps position Jepnik as an organised, procurement-ready business."
        muted
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {[
            "Company profile",
            "Product catalogues",
            "Certifications",
            "Registrations",
            "Capability documents",
          ].map((item) => (
            <div key={item} className="card flex items-center justify-center text-center min-h-40">
              <p className="text-lg font-semibold text-[var(--foreground)]">{item}</p>
            </div>
          ))}
        </div>
      </PageSection>
    </SiteShell>
  );
}
