import Link from "next/link";
import type { ReactNode } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/projects", label: "Projects" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

type SiteShellProps = {
  children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <header className="sticky top-0 z-40 border-b border-black/10 bg-[color:rgba(248,247,242,0.92)] backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <Link href="/" className="block">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--brand-gold-deep)]">
              Jepnik Investments
            </p>
            <p className="mt-1 text-sm text-[var(--muted)]">
              Bitumen, contracting and safety solutions
            </p>
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-medium lg:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-[var(--brand-orange)]">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="tel:+263776663738"
              className="hidden text-sm font-semibold text-[var(--brand-black)] md:inline"
            >
              Call Now
            </a>
            <Link
              href="/contact"
              className="rounded-full bg-[var(--brand-gold)] px-5 py-3 text-sm font-semibold text-[var(--brand-black)] transition hover:bg-[var(--brand-gold-soft)]"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </header>

      {children}

      <footer className="bg-[var(--brand-black)] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[1fr_0.8fr] lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--brand-gold)]">
              Jepnik Investments
            </p>
            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight">
              Reliable support for supply, contracting and infrastructure-related work.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/70">
              Jepnik Investments supports public and private sector projects with bitumen and road surfacing products, civil contracting services, road marking solutions, and safety product supply in Zimbabwe.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/55">Quick Links</p>
              <div className="mt-4 space-y-3 text-sm text-white/75">
                {navItems.map((item) => (
                  <div key={item.href}>
                    <Link href={item.href} className="transition hover:text-[var(--brand-gold)]">
                      {item.label}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/55">Contact</p>
              <div className="mt-4 space-y-3 text-sm text-white/75">
                <p>+263 776 663 738</p>
                <p>+263 77 474 2217</p>
                <p>info@jepnikinv.co.zw</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
