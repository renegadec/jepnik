import Link from "next/link";
import { PageSection } from "@/components/page-section";
import { SiteShell } from "@/components/site-shell";

const services = [
  {
    title: "Civil Contracting",
    description:
      "Structured support for road-related and civil works projects, with a focus on practical delivery, coordination, and professionalism.",
  },
  {
    title: "Road Marking & Maintenance",
    description:
      "Road marking and maintenance services designed to improve safety, visibility, and the usability of roads, parking areas, and site environments.",
  },
  {
    title: "Bitumen & Road Surfacing Products",
    description:
      "Supply of bitumen, emulsions, and related surfacing materials for construction, maintenance, and infrastructure work.",
  },
  {
    title: "Safety & PPE Products",
    description:
      "Protective clothing, footwear, and site safety products for contractors, teams, and operational environments where safety matters.",
  },
];

const trustPoints = [
  "Public & Private Sector Support",
  "Bitumen & Road Surfacing Supply",
  "Civil Contracting Services",
  "Safety & PPE Products",
  "Responsive Quote Support",
];

const whyJepnik = [
  "Industry-relevant products and services",
  "Practical understanding of project requirements",
  "Responsive enquiry and quote support",
  "Professional service delivery",
  "Support for both public and private sector needs",
];

const quickLinks = [
  "Bitumen Products",
  "Safety Products",
  "Civil Contracting",
  "Site Evaluation & Consulting",
];

export default function Home() {
  return (
    <SiteShell>
      <main>
        <section className="relative overflow-hidden bg-[var(--brand-black)] text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(244,199,0,0.28),_transparent_30%),linear-gradient(135deg,_rgba(255,90,0,0.12),_transparent_45%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-32">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--brand-gold)]">
                Infrastructure • Road Works • Safety Supply
              </p>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Bitumen Supply, Civil Contracting &amp; Safety Products in Zimbabwe
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78 sm:text-xl">
                Jepnik Investments supports public and private sector projects with
                reliable road surfacing products, civil contracting services, road
                marking solutions, and safety product supply.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link href="/contact" className="btn-primary">
                  Request a Quote
                </Link>
                <Link href="/services" className="btn-outline-light">
                  View Services
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/6 p-8 backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--brand-gold)]">
                Why businesses choose Jepnik
              </p>
              <div className="mt-8 space-y-5">
                {[
                  ["Reliable Supply", "Support for road surfacing materials and safety product needs."],
                  ["Practical Delivery", "Execution-focused support aligned with real project conditions."],
                  ["Professional Response", "Responsive communication for quotes, enquiries, and project discussions."],
                ].map(([title, body]) => (
                  <div key={title} className="border-b border-white/10 pb-5 last:border-b-0 last:pb-0">
                    <h2 className="text-lg font-semibold text-white">{title}</h2>
                    <p className="mt-2 text-sm leading-7 text-white/72">{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-black/10 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
              {trustPoints.map((item) => (
                <div key={item} className="rounded-2xl border border-black/8 bg-[var(--surface-alt)] px-4 py-4 text-sm font-medium text-[var(--foreground)]">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <PageSection
          label="About Jepnik"
          title="Practical solutions for supply, contracting and site safety"
          intro="Jepnik Investments is a Zimbabwean business focused on bitumen and road surfacing products, civil contracting services, road marking and maintenance, and safety product supply. We serve clients who need dependable support, clear communication, and practical delivery aligned with real project requirements."
        >
          <p className="max-w-3xl text-lg leading-8 text-[var(--muted)]">
            Whether the need is product supply, contract work, or safety equipment, Jepnik&apos;s goal is to make it easier for clients to move from enquiry to execution with confidence.
          </p>
        </PageSection>

        <PageSection
          label="What we do"
          title="Services built around real project needs"
          intro="Our work is built around practical support for infrastructure, road works, maintenance, and operational safety requirements."
          muted
        >
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <article key={service.title} className="card">
                <h3 className="text-2xl font-semibold text-[var(--foreground)]">{service.title}</h3>
                <p className="mt-4 text-base leading-7 text-[var(--muted)]">{service.description}</p>
              </article>
            ))}
          </div>
        </PageSection>

        <PageSection>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="section-label">Why Jepnik</p>
              <h2 className="section-title mt-4">Why clients choose Jepnik Investments</h2>
              <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
                Clients are not only looking for a supplier or contractor — they are looking for a team that communicates clearly, responds professionally, and understands the practical realities of delivery. Jepnik aims to provide support that reflects reliability, professionalism, and service focused on real project outcomes.
              </p>
            </div>

            <div className="rounded-[2rem] bg-[var(--brand-black)] p-8 text-white shadow-[0_24px_60px_rgba(2,2,18,0.18)]">
              <ul className="space-y-4 text-base leading-7 text-white/84">
                {whyJepnik.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--brand-gold)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </PageSection>

        <PageSection
          label="Products & solutions"
          title="Products and services built for serious project work"
          intro="Jepnik&apos;s offering is designed to support clients across supply, contracting, and operational requirements. From road surfacing materials to safety products and specialised service support, the focus is on helping clients source and execute more efficiently."
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {quickLinks.map((item) => (
              <div key={item} className="rounded-[1.5rem] border border-[var(--brand-gold)]/30 bg-[linear-gradient(180deg,rgba(244,199,0,0.08),rgba(255,255,255,1))] p-6">
                <p className="text-lg font-semibold text-[var(--foreground)]">{item}</p>
              </div>
            ))}
          </div>
        </PageSection>

        <PageSection
          label="Projects & proof"
          title="Capability backed by practical work"
          intro="A strong online presence should do more than describe services — it should help clients see evidence of capability. Jepnik&apos;s project portfolio can showcase completed work, relevant experience, and practical examples that help buyers evaluate fit with confidence."
          muted
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Completed work highlights",
              "Road-related case studies",
              "Project photos & scope summaries",
              "Procurement-friendly proof points",
            ].map((item) => (
              <div key={item} className="rounded-[1.5rem] bg-white p-6 shadow-[0_10px_30px_rgba(2,2,18,0.05)]">
                <p className="text-base font-semibold text-[var(--foreground)]">{item}</p>
              </div>
            ))}
          </div>
        </PageSection>

        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="rounded-[2rem] bg-[var(--brand-black)] px-8 py-10 text-white lg:px-12 lg:py-14">
            <p className="section-label !text-[var(--brand-gold)]">Resources</p>
            <div className="mt-4 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  Easy access to company and product information
                </h2>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-white/76">
                  To support enquiries, procurement processes, and decision-making, Jepnik can provide key documents such as company profile material, product catalogues, and certifications through a dedicated resources section.
                </p>
              </div>
              <div className="grid gap-3 text-sm font-medium text-white/84 sm:grid-cols-2">
                {[
                  "Company profile",
                  "Product catalogues",
                  "Certifications",
                  "Capability documents",
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[var(--brand-gold)] py-20 text-[var(--brand-black)]">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_0.8fr] lg:px-8 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-black/70">Contact Jepnik</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
                Need a quote for products or project support?
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-black/75">
                Talk to Jepnik about your supply, service, or project requirement and get the right next step from a team focused on practical delivery and responsive support.
              </p>
            </div>

            <div className="rounded-[2rem] bg-white p-8 shadow-[0_18px_40px_rgba(2,2,18,0.12)]">
              <div className="space-y-4 text-base text-[var(--muted)]">
                <p><span className="font-semibold text-[var(--foreground)]">Call:</span> +263 776 663 738</p>
                <p><span className="font-semibold text-[var(--foreground)]">Alt:</span> +263 77 474 2217</p>
                <p><span className="font-semibold text-[var(--foreground)]">Email:</span> info@jepnikinv.co.zw</p>
              </div>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="tel:+263776663738" className="btn-dark">Call Now</a>
                <a href="mailto:info@jepnikinv.co.zw" className="btn-secondary">Email Us</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
