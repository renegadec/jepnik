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

const advantages = [
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
    <main className="bg-[var(--color-surface)] text-[var(--color-ink)]">
      <section className="bg-[linear-gradient(180deg,rgba(2,18,34,0.95),rgba(9,27,46,0.92)),linear-gradient(135deg,#0b1d2d,#163a5f)] text-white">
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <header className="flex flex-col gap-4 border-b border-white/10 pb-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-gold-soft)]">
                Jepnik Investments
              </p>
              <p className="mt-2 text-sm text-white/70">
                Bitumen supply, civil contracting and safety products in Zimbabwe
              </p>
            </div>

            <nav className="flex flex-wrap items-center gap-5 text-sm text-white/85">
              <a href="#home" className="transition hover:text-white">Home</a>
              <a href="#about" className="transition hover:text-white">About</a>
              <a href="#services" className="transition hover:text-white">Services</a>
              <a href="#products" className="transition hover:text-white">Products</a>
              <a href="#projects" className="transition hover:text-white">Projects</a>
              <a href="#resources" className="transition hover:text-white">Resources</a>
              <a href="#contact" className="transition hover:text-white">Contact</a>
              <a
                href="#contact"
                className="rounded-full bg-[var(--color-gold)] px-5 py-2.5 font-semibold text-[var(--color-navy)] transition hover:bg-[var(--color-gold-soft)]"
              >
                Request a Quote
              </a>
            </nav>
          </header>

          <div
            id="home"
            className="grid gap-12 py-16 md:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-end"
          >
            <div className="max-w-3xl">
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.26em] text-[var(--color-gold-soft)]">
                Reliable Supply and Project Support
              </p>
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
                Bitumen Supply, Civil Contracting &amp; Safety Products in Zimbabwe
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78 sm:text-xl">
                Jepnik Investments supports public and private sector projects with
                reliable road surfacing products, civil contracting services, road
                marking solutions, and safety product supply.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--color-gold)] px-7 py-3.5 font-semibold text-[var(--color-navy)] transition hover:bg-[var(--color-gold-soft)]"
                >
                  Request a Quote
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3.5 font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
                >
                  View Services
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/6 p-8 backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-gold-soft)]">
                Procurement-ready focus
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {trustPoints.map((point) => (
                  <div
                    key={point}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-white/85"
                  >
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--color-line)] bg-white">
        <div className="mx-auto grid max-w-7xl gap-4 px-6 py-5 text-sm font-medium text-[var(--color-slate)] sm:grid-cols-2 lg:grid-cols-5 lg:px-8">
          {trustPoints.map((point) => (
            <div key={point} className="flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-orange)]" />
              <span>{point}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="section-kicker">About Jepnik</p>
            <h2 className="section-title">
              Practical solutions for supply, contracting and site safety
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-[var(--color-slate)]">
            <p>
              Jepnik Investments is a Zimbabwean business focused on bitumen and
              road surfacing products, civil contracting services, road marking and
              maintenance, and safety product supply. We serve clients who need
              dependable support, clear communication, and practical delivery aligned
              with real project requirements.
            </p>
            <p>
              Whether the need is product supply, contract work, or safety equipment,
              Jepnik&apos;s goal is to make it easier for clients to move from enquiry to
              execution with confidence.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="bg-[var(--color-wash)]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="section-kicker">What we do</p>
            <h2 className="section-title">Services and product support built for real project needs</h2>
            <p className="mt-5 text-lg leading-8 text-[var(--color-slate)]">
              Our work is built around practical support for infrastructure, road
              works, maintenance, and operational safety requirements.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <article
                key={service.title}
                className="flex h-full flex-col rounded-[1.75rem] border border-[var(--color-line)] bg-white p-7 shadow-[0_16px_50px_rgba(7,18,32,0.06)]"
              >
                <div className="mb-5 h-1.5 w-16 rounded-full bg-[var(--color-gold)]" />
                <h3 className="text-xl font-semibold text-[var(--color-navy)]">
                  {service.title}
                </h3>
                <p className="mt-4 flex-1 leading-7 text-[var(--color-slate)]">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex text-sm font-semibold text-[var(--color-orange)] transition hover:text-[var(--color-orange-deep)]"
                >
                  Enquire Now
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="section-kicker">Why Jepnik</p>
            <h2 className="section-title">Why clients choose Jepnik Investments</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--color-slate)]">
              Clients are not only looking for a supplier or contractor — they are
              looking for a team that communicates clearly, responds professionally,
              and understands the practical realities of delivery. Jepnik aims to
              provide support that reflects reliability, professionalism, and service
              focused on real project outcomes.
            </p>
          </div>

          <div className="rounded-[2rem] bg-[var(--color-navy)] p-8 text-white shadow-[0_24px_80px_rgba(8,20,38,0.2)]">
            <ul className="grid gap-4">
              {advantages.map((item) => (
                <li key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white/88">
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--color-gold)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="products" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="section-kicker">Products and solutions</p>
              <h2 className="section-title">Products and services aligned with operational reality</h2>
              <p className="mt-5 text-lg leading-8 text-[var(--color-slate)]">
                Jepnik&apos;s offering is designed to support clients across supply,
                contracting, and operational requirements. From road surfacing
                materials to safety products and specialised service support, the
                focus is on helping clients source and execute more efficiently.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {quickLinks.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-wash)] p-6"
                >
                  <p className="text-lg font-semibold text-[var(--color-navy)]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="bg-[var(--color-wash)]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <div>
              <p className="section-kicker">Capability and proof</p>
              <h2 className="section-title">Capability backed by practical work</h2>
              <p className="mt-5 text-lg leading-8 text-[var(--color-slate)]">
                A strong online presence should do more than describe services — it
                should help clients see evidence of capability. Jepnik&apos;s project
                portfolio can showcase completed work, relevant experience, and
                practical examples that help buyers evaluate fit with confidence.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {["Project portfolio", "Case studies", "Photos of completed work", "Relevant delivery experience"].map((item) => (
                <div
                  key={item}
                  className="rounded-[1.5rem] bg-white p-6 shadow-[0_14px_50px_rgba(7,18,32,0.06)]"
                >
                  <p className="text-base font-semibold text-[var(--color-navy)]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="resources" className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="grid gap-10 rounded-[2.5rem] bg-[linear-gradient(135deg,#102744,#17395d)] px-8 py-10 text-white lg:grid-cols-[1fr_0.9fr] lg:px-12 lg:py-14">
          <div>
            <p className="section-kicker !text-[var(--color-gold-soft)]">Resources</p>
            <h2 className="section-title !text-white">Easy access to company and product information</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">
              To support enquiries, procurement processes, and decision-making,
              Jepnik can provide key documents such as company profile material,
              product catalogues, and certifications through a dedicated resources
              section.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Company Profile",
              "Product Catalogues",
              "Certifications",
              "Capability Documents",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-5 py-5 font-medium text-white/88">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-[var(--color-line)] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="section-kicker">Contact</p>
              <h2 className="section-title">Need a quote for products or project support?</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--color-slate)]">
                Talk to Jepnik about your supply, service, or project requirement and
                get the right next step from a team focused on practical delivery and
                responsive support.
              </p>
              <div className="mt-8 space-y-3 text-[var(--color-slate)]">
                <p>
                  <span className="font-semibold text-[var(--color-navy)]">Call:</span>{" "}
                  +263 776 663 738 / +263 774 742 217
                </p>
                <p>
                  <span className="font-semibold text-[var(--color-navy)]">Email:</span>{" "}
                  info@jepnikinv.co.zw
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-wash)] p-8 shadow-[0_16px_50px_rgba(7,18,32,0.06)]">
              <div className="grid gap-4 sm:grid-cols-2">
                <input className="form-input" placeholder="Full name" />
                <input className="form-input" placeholder="Company name" />
                <input className="form-input" placeholder="Phone number" />
                <input className="form-input" placeholder="Email address" />
                <select className="form-input sm:col-span-2" defaultValue="">
                  <option value="" disabled>
                    Type of enquiry
                  </option>
                  <option>Products</option>
                  <option>Services</option>
                  <option>Project / Contract work</option>
                  <option>General enquiry</option>
                </select>
                <input className="form-input sm:col-span-2" placeholder="Project location" />
                <textarea className="form-input min-h-32 sm:col-span-2" placeholder="Tell us about your requirement" />
              </div>
              <button className="mt-6 inline-flex rounded-full bg-[var(--color-orange)] px-6 py-3 font-semibold text-white transition hover:bg-[var(--color-orange-deep)]">
                Send Enquiry
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
