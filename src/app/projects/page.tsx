import { PageHero } from "@/components/page-hero";
import { PageSection } from "@/components/page-section";
import { SiteShell } from "@/components/site-shell";

export default function ProjectsPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Projects"
        title="Proof of capability through completed work and project experience"
        description="A strong portfolio helps clients evaluate capability, professionalism, and fit. Jepnik’s projects section is designed to showcase work, images, and short case examples that build trust."
      />

      <PageSection
        label="Portfolio direction"
        title="What the projects section should communicate"
        intro="For procurement teams and private clients alike, proof matters. A portfolio strengthens credibility and helps buyers move from interest to enquiry."
        muted
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Project name or location",
            "Type of work completed",
            "Short scope summary",
            "Outcome or practical result",
          ].map((item) => (
            <div key={item} className="card">
              <p className="text-lg font-semibold text-[var(--foreground)]">{item}</p>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection label="Why it matters" title="Evidence that supports confident decision-making">
        <p className="max-w-4xl text-lg leading-8 text-[var(--muted)]">
          When clients can see examples of previous work, supporting imagery, and concise project summaries, it becomes easier to assess capability and trust the business with similar requirements. Even a small number of well-presented projects can significantly improve credibility.
        </p>
      </PageSection>
    </SiteShell>
  );
}
