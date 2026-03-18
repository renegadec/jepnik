import Link from "next/link";
import { PageSection } from "@/components/page-section";
import { SiteShell } from "@/components/site-shell";

const services = [
  {
    title: "Civil Contracting",
    href: "/services/civil-contracting",
    description:
      "Structured support for road-related and civil works projects, with a focus on practical delivery, coordination, and professionalism.",
  },
  {
    title: "Road Marking & Maintenance",
    href: "/services/road-marking-maintenance",
    description:
      "Road marking and maintenance services designed to improve safety, visibility, and the usability of roads, parking areas, and site environments.",
  },
  {
    title: "Bitumen & Road Surfacing Products",
    href: "/products/bitumen-road-surfacing",
    description:
      "Supply of bitumen, emulsions, and related surfacing materials for construction, maintenance, and infrastructure work.",
  },
  {
    title: "Safety & PPE Products",
    href: "/products/safety-ppe",
    description:
      "Protective clothing, footwear, and site safety products for contractors, teams, and operational environments where safety matters.",
  },
];

const trustPoints = [
  "Public & private sector support",
  "Road surfacing materials",
  "Civil contracting capability",
  "Safety & PPE supply",
  "Responsive quote handling",
];

const quickLinks = [
  {
    title: "Bitumen Products",
    href: "/products/bitumen-road-surfacing",
    description: "Road surfacing materials for infrastructure and maintenance work.",
  },
  {
    title: "Safety Products",
    href: "/products/safety-ppe",
    description: "PPE and safety supply for contractors, teams and operational sites.",
  },
  {
    title: "Civil Contracting",
    href: "/services/civil-contracting",
    description: "Execution-focused support for road-related and civil works projects.",
  },
  {
    title: "Site Evaluation & Consulting",
    href: "/services/site-evaluation-consulting",
    description: "Practical early-stage guidance before project delivery begins.",
  },
];

const proofItems = [
  "Clearer separation between products and services",
  "Stronger trust signals for procurement and corporate buyers",
  "A faster route from interest to quote request",
  "A more credible, infrastructure-focused online presence",
];

export default function Home() {
  return (
    <SiteShell>
      <main>
        <section className="relative overflow-hidden bg-[var(--brand-black)] text-white">
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(2,2,18,0.74),rgba(2,2,18,0.48)_45%,rgba(2,2,18,0.2)),radial-gradient(circle_at_top_right,rgba(244,199,0,0.18),transparent_25%)]" />
          <div className="relative mx-auto grid min-h-[78vh] max-w-7xl items-end gap-12 px-6 py-18 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
            <div className="max-w-3xl pb-4 lg:pb-10">
              <p className="text-sm font-semibold uppercase tracking-[0.34em] text-[var(--brand-gold)]">
                Zimbabwe • Infrastructure • Road Works
              </p>
              <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.94] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
                Reliable supply and project support for road works, civil contracting and site safety.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/76 sm:text-xl">
                Jepnik Investments supports public and private sector projects with bitumen and road surfacing products, civil contracting services, road marking solutions, and safety product supply.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link href="/contact" className="btn-primary">
                  Request a Quote
                </Link>
                <Link href="/services" className="btn-outline-light">
                  Explore Services
                </Link>
              </div>
            </div>

            <div className="justify-self-end rounded-[2rem] border border-white/10 bg-white/6 p-8 backdrop-blur-md lg:max-w-md">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--brand-gold)]">
                Jepnik at a glance
              </p>
              <div className="mt-8 space-y-6">
                {[
                  ["Infrastructure support", "Products and services shaped around practical site and project requirements."],
                  ["Professional delivery", "A clearer route from first impression to enquiry, quotation and execution."],
                  ["Built for confidence", "A stronger digital presence designed for procurement and private-sector credibility."],
                ].map(([title, body]) => (
                  <div key={title} className="border-b border-white/10 pb-6 last:border-b-0 last:pb-0">
                    <p className="text-lg font-semibold text-white">{title}</p>
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
                <div
                  key={item}
                  className="rounded-2xl border border-black/8 bg-[var(--surface-alt)] px-4 py-4 text-sm font-medium text-[var(--foreground)] shadow-[0_8px_24px_rgba(2,2,18,0.04)]"
                >
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
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <p className="max-w-3xl text-lg leading-8 text-[var(--muted)]">
              Whether the need is product supply, contract work, or safety equipment, Jepnik&apos;s goal is to make it easier for clients to move from enquiry to execution with confidence.
            </p>
            <div className="rounded-[1.75rem] border border-black/6 bg-[var(--surface)] p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--brand-gold-deep)]">
                Positioning focus
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--muted)]">
                {proofItems.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--brand-orange)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </PageSection>

        <PageSection
          label="What we do"
          title="Services built around real project needs"
          intro="Our work is built around practical support for infrastructure, road works, maintenance, and operational safety requirements."
          muted
        >
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <article key={service.title} className="card group">
                <h3 className="text-2xl font-semibold text-[var(--foreground)]">{service.title}</h3>
                <p className="mt-4 text-base leading-7 text-[var(--muted)]">{service.description}</p>
                <Link
                  href={service.href}
                  className="mt-6 inline-flex text-sm font-semibold text-[var(--brand-orange)] transition group-hover:text-[var(--brand-navy)]"
                >
                  Explore this offering →
                </Link>
              </article>
            ))}
          </div>
        </PageSection>

        <PageSection
          label="Products & solutions"
          title="Products and services built for serious project work"
          intro="Jepnik&apos;s offering is designed to support clients across supply, contracting, and operational requirements. From road surfacing materials to safety products and specialised service support, the focus is on helping clients source and execute more efficiently."
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {quickLinks.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="rounded-[1.5rem] border border-[var(--brand-gold)]/25 bg-[linear-gradient(180deg,rgba(244,199,0,0.06),rgba(255,255,255,1))] p-6 shadow-[0_12px_30px_rgba(2,2,18,0.05)] transition hover:-translate-y-0.5 hover:border-[var(--brand-orange)]/40"
              >
                <p className="text-lg font-semibold text-[var(--foreground)]">{item.title}</p>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.description}</p>
                <p className="mt-5 text-sm font-semibold text-[var(--brand-orange)]">Learn more →</p>
              </Link>
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

        <section className="relative overflow-hidden bg-[var(--brand-gold)] py-20 text-[var(--brand-black)]">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.24),transparent_42%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_0.8fr] lg:px-8 lg:items-center">
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
                <p>
                  <span className="font-semibold text-[var(--foreground)]">Call:</span> +263 776 663 738
                </p>
                <p>
                  <span className="font-semibold text-[var(--foreground)]">Alt:</span> +263 77 474 2217
                </p>
                <p>
                  <span className="font-semibold text-[var(--foreground)]">Email:</span> info@jepnikinv.co.zw
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="tel:+263776663738" className="btn-dark">
                  Call Now
                </a>
                <a href="mailto:info@jepnikinv.co.zw" className="btn-secondary">
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
