import { PageHero } from "@/components/page-hero";
import { PageSection } from "@/components/page-section";
import { SiteShell } from "@/components/site-shell";

export default function ContactPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Contact"
        title="Talk to Jepnik about your product, service, or project requirement"
        description="If you need bitumen products, civil contracting support, road marking services, or safety product supply, get in touch and our team will respond with the right next step."
      />

      <PageSection
        label="Get in touch"
        title="Simple contact options for faster enquiries"
        intro="Whether the requirement is product supply, contract work, or a general business enquiry, Jepnik should make it easy for clients to reach the right team quickly."
      >
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="card bg-[var(--brand-black)] text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--brand-gold)]">Direct contact</p>
            <div className="mt-6 space-y-4 text-base leading-7 text-white/80">
              <p><span className="font-semibold text-white">Phone:</span> +263 776 663 738</p>
              <p><span className="font-semibold text-white">Alt:</span> +263 77 474 2217</p>
              <p><span className="font-semibold text-white">Email:</span> info@jepnikinv.co.zw</p>
            </div>
          </div>

          <div className="card">
            <h2 className="text-2xl font-semibold text-[var(--foreground)]">Recommended enquiry form fields</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                "Full name",
                "Company name",
                "Phone number",
                "Email address",
                "Type of enquiry",
                "Project location",
                "Message",
              ].map((item) => (
                <div key={item} className="rounded-xl border border-black/10 bg-[var(--surface-alt)] px-4 py-4 text-sm font-medium text-[var(--foreground)]">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </PageSection>
    </SiteShell>
  );
}
