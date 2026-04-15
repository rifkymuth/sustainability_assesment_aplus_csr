import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative mt-24">
      <div className="mx-auto w-[min(1200px,calc(100%-2rem))] overflow-hidden rounded-[2.5rem] bg-gradient-teal p-10 text-white shadow-soft sm:p-14">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-white/15">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M20 4c-7 0-13 4-13 11 0 1.8.5 3.4 1.4 4.6L6 22l1.4-1.4C8.6 21.5 10.2 22 12 22c7 0 8-9 8-18Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <span className="font-display text-xl font-semibold">
                A+ CSR
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/80">
              A unified ESG self-assessment platform helping companies translate
              global standards into local action.
            </p>
            <div className="mt-6 flex gap-2">
              {["in", "tw", "gh"].map((s) => (
                <span
                  key={s}
                  className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-xs uppercase"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <FooterCol
            title="Product"
            links={[
              { href: "/assessment", label: "Self-Assessment" },
              { href: "/results", label: "Results & Reports" },
              { href: "/indicators", label: "Indicator library" },
              { href: "/pricing", label: "Pricing" },
            ]}
          />
          <FooterCol
            title="Company"
            links={[
              { href: "/about", label: "About us" },
              { href: "/about#methodology", label: "Methodology" },
              { href: "/about#team", label: "Team" },
              { href: "/about#contact", label: "Contact" },
            ]}
          />
          <FooterCol
            title="Resources"
            links={[
              { href: "/indicators", label: "GRI · SASB · MSCI" },
              { href: "/about#faq", label: "FAQ" },
              { href: "#", label: "Privacy" },
              { href: "#", label: "Terms" },
            ]}
          />
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/15 pt-6 text-xs text-white/70 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} A+ CSR. All rights reserved.</p>
          <p>Crafted for a measurable, accountable transition.</p>
        </div>
      </div>
      <div className="h-10" />
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wider text-white/70">
        {title}
      </p>
      <ul className="mt-4 space-y-2.5 text-sm">
        {links.map((l) => (
          <li key={l.label}>
            <Link
              href={l.href}
              className="text-white/85 transition hover:text-white"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
