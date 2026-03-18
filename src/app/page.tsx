import Image from "next/image";
import Link from "next/link";
import { PageSection } from "@/components/page-section";
import { SiteShell } from "@/components/site-shell";

const trustPoints = [
  "Public & private sector support",
  "Road surfacing materials",
  "Civil contracting capability",
  "Safety & PPE supply",
  "Responsive quote handling",
];

const activities = [
  {
    title: "Civil Contracting",
    href: "/services/civil-contracting",
    description:
      "Structured support for road-related and civil works projects, with a focus on practical delivery, coordination, and professionalism.",
    image: "/activity-contracting.svg",
    tone: "light",
  },
  {
    title: "Bitumen & Road Surfacing Products",
    href: "/products/bitumen-road-surfacing",
    description:
      "Supply of bitumen, emulsions, and related surfacing materials for construction, maintenance, and infrastructure work.",
    image: "/activity-products.svg",
    tone: "dark",
  },
  {
    title: "Safety & PPE Products",
    href: "/products/safety-ppe",
    description:
      "Protective clothing, footwear, and site safety products for contractors, teams, and operational environments where safety matters.",
    image: "/activity-safety.svg",
    tone: "light",
  },
];

const quickLinks = [
  {
    title: "Road Marking & Maintenance",
    href: "/services/road-marking-maintenance",
    description: "Support for visibility, safety and better road-surface usability.",
  },
  {
    title: "Site Evaluation & Consulting",
    href: "/services/site-evaluation-consulting",
    description: "Practical early-stage guidance before project delivery begins.",
  },
  {
    title: "Resources",
    href: "/resources",
    description: "Company profile, certifications and supporting documents in one place.",
  },
  {
    title: "Projects",
    href: "/projects",
    description: "A stronger project-led presentation of capability and proof.",
  },
];

export default function Home() {
  return (
    <SiteShell>
      <main>
        <section className="bg-[var(--brand-black)] text-white">
          <div className="mx-auto grid max-w-[1680px] lg:min-h-[82vh] lg:grid-cols-[0.92fr_1.08fr]">
            <div className="flex items-center bg-[var(--brand-black)] px-6 py-20 lg:px-12 xl:px-18">
              <div className="mx-auto max-w-[34rem] lg:mx-0">
                <p className="text-sm font-semibold uppercase tracking-[0.34em] text-[var(--brand-gold)]">
                  Zimbabwe • Infrastructure • Road Works
                </p>
                <h1 className="mt-6 text-5xl font-semibold leading-[0.92] tracking-[-0.055em] text-white sm:text-6xl xl:text-[5.3rem]">
                  Reliable support for construction, maintenance and transport infrastructure needs.
                </h1>
                <p className="mt-7 max-w-xl text-lg leading-8 text-white/74 sm:text-xl">
                  Jepnik Investments supplies bitumen and road surfacing products, supports civil contracting requirements, and provides safety-focused solutions for public and private sector projects.
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
            </div>

            <div className="relative min-h-[360px] lg:min-h-full">
              <Image
                src="/hero-infrastructure.svg"
                alt="Stylised infrastructure illustration"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,2,18,0.08),transparent_28%)]" />
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
          title="A more credible way to present products, services and project capability"
          intro="Jepnik Investments is a Zimbabwean business focused on road surfacing products, civil contracting support, road marking and maintenance, and safety product supply. The goal of the new site direction is to present Jepnik with more clarity, stronger trust signals, and a more serious infrastructure-company feel."
        >
          <div className="max-w-4xl text-lg leading-8 text-[var(--muted)]">
            Whether the need is product supply, contract work, or safety equipment, Jepnik should feel easier to understand, easier to trust, and easier to contact.
          </div>
        </PageSection>

        <section className="bg-[var(--surface-alt)]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
            <div className="max-w-3xl">
              <p className="section-label">Our activities</p>
              <h2 className="section-title mt-4">Support built around practical infrastructure and site needs</h2>
              <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
                The key activities should feel visual, structured and clear — with strong image-led sections that explain what Jepnik does without forcing users through walls of text.
              </p>
            </div>

            <div className="mt-14 space-y-8">
              {activities.map((activity, index) => {
                const dark = activity.tone === "dark";
                const reverse = index % 2 === 1;

                return (
                  <article
                    key={activity.title}
                    className={`grid overflow-hidden rounded-[2.2rem] bg-white shadow-[0_22px_46px_rgba(2,2,18,0.08)] lg:grid-cols-[1.08fr_0.92fr] ${
                      reverse ? "lg:[&>*:first-child]:order-2" : ""
                    }`}
                  >
                    <div className="relative min-h-[320px] lg:min-h-[470px]">
                      <Image
                        src={activity.image}
                        alt={activity.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div
                      className={`flex items-center px-8 py-12 lg:px-12 xl:px-14 ${
                        dark
                          ? "bg-[var(--brand-black)] text-white"
                          : "bg-white text-[var(--foreground)]"
                      }`}
                    >
                      <div className="max-w-xl">
                        <p
                          className={`text-sm font-semibold uppercase tracking-[0.28em] ${
                            dark ? "text-[var(--brand-gold)]" : "text-[var(--brand-gold-deep)]"
                          }`}
                        >
                          Our activities
                        </p>
                        <h3 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl xl:text-[2.8rem]">
                          {activity.title}
                        </h3>
                        <p
                          className={`mt-6 max-w-lg text-base leading-8 ${
                            dark ? "text-white/74" : "text-[var(--muted)]"
                          }`}
                        >
                          {activity.description}
                        </p>
                        <Link
                          href={activity.href}
                          className={`mt-10 inline-flex text-sm font-semibold ${
                            dark ? "text-[var(--brand-gold)]" : "text-[var(--brand-orange)]"
                          }`}
                        >
                          Learn more →
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <PageSection
          label="Additional focus areas"
          title="Other parts of the Jepnik experience"
          intro="Beyond the core activities, the website should keep the rest of the journey clean and direct — from operational support pages to project proof and downloadable resources."
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {quickLinks.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="rounded-[1.5rem] border border-black/8 bg-white p-6 shadow-[0_12px_30px_rgba(2,2,18,0.05)] transition hover:-translate-y-0.5 hover:border-[var(--brand-orange)]/35"
              >
                <p className="text-lg font-semibold text-[var(--foreground)]">{item.title}</p>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.description}</p>
                <p className="mt-5 text-sm font-semibold text-[var(--brand-orange)]">Explore →</p>
              </Link>
            ))}
          </div>
        </PageSection>

        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="rounded-[2rem] bg-[var(--brand-black)] px-8 py-10 text-white lg:px-12 lg:py-14">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div>
                <p className="section-label !text-[var(--brand-gold)]">Resources</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Important company and product information in one place
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
