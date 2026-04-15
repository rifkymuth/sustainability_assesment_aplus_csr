import Link from "next/link";

export const metadata = {
  title: "About · A+ CSR",
  description:
    "Learn how A+ CSR unifies the world's leading ESG frameworks into a single self-assessment, and meet the team behind the platform.",
};

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate">
        <div className="blob -left-24 top-20 h-96 w-96 rounded-full bg-pale-sky" />
        <div className="blob right-[-4rem] top-44 h-80 w-80 rounded-full bg-muted-teal/60" />

        <div className="section relative pt-16 lg:pt-24">
          <div className="mx-auto max-w-3xl text-center">
            <span className="pill">About A+ CSR</span>
            <h1 className="heading-display mt-5">
              Sustainability data shouldn&apos;t live in twelve different
              spreadsheets.
            </h1>
            <p className="body-muted mx-auto mt-6 max-w-2xl">
              We started A+ CSR after watching brilliant teams burn out
              translating their work between GRI, SASB, MSCI and the next new
              framework. So we built one assessment that speaks all of them at
              once.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="relative">
        <div className="section">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div className="relative">
              <div className="absolute -inset-6 -z-10 animate-blob rounded-blob bg-gradient-brand opacity-50 blur-2xl" />
              <div className="rounded-[2.5rem] bg-white/80 p-8 shadow-soft ring-1 ring-jungle-teal/10 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.3em] text-deep-teal/70">
                  Our mission
                </p>
                <p className="mt-4 font-display text-2xl leading-snug text-deep-teal">
                  Make defensible sustainability reporting accessible to every
                  organisation — not just the Fortune 500.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-slate-600">
                  {[
                    "Reduce the cost of reporting by an order of magnitude.",
                    "Replace anecdote with measurable, comparable evidence.",
                    "Help leaders see risk before it becomes a headline.",
                  ].map((t) => (
                    <li key={t} className="flex gap-3">
                      <span className="mt-1 h-2 w-2 flex-none rounded-full bg-jungle-teal" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <span className="pill">The story</span>
              <h2 className="heading-section mt-4">
                Built by sustainability practitioners, for sustainability
                practitioners.
              </h2>
              <p className="body-muted mt-5">
                Our founding team spent the last decade running ESG programmes
                inside FMCG, energy and financial services. We saw, again and
                again, that the bottleneck wasn&apos;t ambition — it was
                translation. Five frameworks. Three auditors. One overworked
                sustainability lead.
              </p>
              <p className="body-muted mt-4">
                A+ CSR is the platform we wished we had: a unified indicator
                library, a sector-aware questionnaire, and a report engine that
                speaks the language of regulators, investors and the board, all
                from the same source of truth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section id="methodology" className="relative">
        <div className="section">
          <div className="mx-auto max-w-2xl text-center">
            <span className="pill">Methodology</span>
            <h2 className="heading-section mt-4">
              How the assessment actually works.
            </h2>
            <p className="body-muted mt-4">
              No black boxes. Every question, weight and recommendation is
              traceable to a public standard.
            </p>
          </div>

          <ol className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {methodology.map((m, i) => (
              <li
                key={m.title}
                className="card relative overflow-hidden"
              >
                <span className="absolute right-4 top-4 font-display text-5xl text-pale-sky/80">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-lg font-semibold text-deep-teal">
                  {m.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {m.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FRAMEWORKS */}
      <section className="relative">
        <div className="section">
          <div className="rounded-[2.5rem] bg-white/85 p-8 shadow-soft ring-1 ring-jungle-teal/10 sm:p-14">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-center">
              <div>
                <span className="pill">Standards we map</span>
                <h2 className="heading-section mt-4">
                  Five frameworks. One conversation.
                </h2>
                <p className="body-muted mt-4">
                  Each indicator in our library is cross-walked to its peers in
                  the world&apos;s leading ESG standards — so your answer, once
                  given, populates everywhere it&apos;s asked for.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {frameworks.map((f) => (
                  <div
                    key={f.name}
                    className="rounded-3xl bg-cream p-5 ring-1 ring-jungle-teal/10 transition hover:shadow-soft"
                  >
                    <p className="font-display text-lg font-semibold text-deep-teal">
                      {f.name}
                    </p>
                    <p className="mt-1 text-xs text-slate-600">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="relative">
        <div className="section">
          <div className="mx-auto max-w-2xl text-center">
            <span className="pill">The team</span>
            <h2 className="heading-section mt-4">A small team, deep bench.</h2>
            <p className="body-muted mt-4">
              We&apos;re practitioners, engineers and former auditors — united
              by an allergy to greenwashing.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((p) => (
              <article
                key={p.name}
                className="card group flex flex-col items-start gap-4"
              >
                <div className="grid h-16 w-16 place-items-center rounded-full bg-gradient-teal font-display text-xl font-semibold text-white">
                  {p.initials}
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-deep-teal">
                    {p.name}
                  </h3>
                  <p className="text-sm text-jungle-teal">{p.role}</p>
                </div>
                <p className="text-sm leading-relaxed text-slate-600">
                  {p.bio}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative">
        <div className="section">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <span className="pill">FAQ</span>
              <h2 className="heading-section mt-4">
                Questions we get asked the most.
              </h2>
              <p className="body-muted mt-4">
                Can&apos;t find what you need? Reach out below — we read every
                message.
              </p>
            </div>
            <div className="space-y-3">
              {faq.map((q) => (
                <details
                  key={q.q}
                  className="group rounded-3xl bg-white/85 p-6 shadow-soft ring-1 ring-jungle-teal/10 transition open:shadow-glow"
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-4 text-left font-display text-lg font-semibold text-deep-teal">
                    {q.q}
                    <span className="grid h-8 w-8 flex-none place-items-center rounded-full bg-pale-sky/60 text-deep-teal transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600">
                    {q.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="contact" className="relative">
        <div className="section pb-10 pt-4">
          <div className="overflow-hidden rounded-[2.5rem] bg-gradient-teal p-10 text-white shadow-soft sm:p-14">
            <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
              <div>
                <h2 className="font-display text-3xl font-semibold sm:text-4xl">
                  Want a walk-through?
                </h2>
                <p className="mt-4 max-w-xl text-white/85">
                  Book a 20-minute call with our team, or jump straight in and
                  start your self-assessment.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 lg:justify-end">
                <Link
                  href="/assessment"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-jungle-teal shadow-soft transition hover:bg-cream"
                >
                  Start assessment
                </Link>
                <a
                  href="mailto:hello@apluscsr.example"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/60 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  hello@apluscsr.example
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const methodology = [
  {
    title: "Map your sector",
    body: "We tag your organisation against SASB SICS so the questionnaire surfaces only the indicators that are material to your industry.",
  },
  {
    title: "Unified questions",
    body: "One question can satisfy GRI, SASB and MSCI requirements — we maintain the cross-walks so you don't have to.",
  },
  {
    title: "Weighted scoring",
    body: "Indicators are weighted by sector materiality and standard-of-evidence — not just whether you ticked the box.",
  },
  {
    title: "Action-ready report",
    body: "The output isn't a number — it's a risk register, a document checklist and a prioritised improvement roadmap.",
  },
];

const frameworks = [
  { name: "GRI", desc: "Global Reporting Initiative — universal & topic standards." },
  { name: "SASB", desc: "Industry-specific, financially material disclosures." },
  { name: "MSCI", desc: "Investor-grade ESG ratings methodology." },
  { name: "S&P Global", desc: "Corporate Sustainability Assessment indicators." },
  { name: "Sustainalytics", desc: "ESG Risk Ratings and exposure scoring." },
  { name: "TCFD / IFRS S2", desc: "Climate-related financial disclosure aligned." },
];

const team = [
  {
    initials: "RM",
    name: "Rifky Muthahhari",
    role: "Founder & CEO",
    bio: "Ex-sustainability lead at a regional FMCG. Built A+ CSR after one too many midnight cross-walks.",
  },
  {
    initials: "AP",
    name: "Ayu Prasetyo",
    role: "Head of Standards",
    bio: "Former GRI-certified consultant. Owns the indicator library and the framework mappings.",
  },
  {
    initials: "DN",
    name: "Dimas Nugroho",
    role: "Head of Engineering",
    bio: "Built data platforms at two climate-tech startups. Cares deeply about boring, reliable software.",
  },
  {
    initials: "SR",
    name: "Sofia Ramirez",
    role: "Head of Customer",
    bio: "Walks every new customer through their first assessment. Knows the questions before you ask them.",
  },
];

const faq = [
  {
    q: "Is A+ CSR an audit?",
    a: "No. We are a self-assessment and reporting platform. The output is designed to make external assurance dramatically faster, but it does not replace third-party verification.",
  },
  {
    q: "Which sectors do you support?",
    a: "We currently cover 11 SASB sectors at launch — Food & Beverage, Financials, Technology & Communications, Consumer Goods, Extractives, Healthcare, Infrastructure, Renewable Resources, Resource Transformation, Services, and Transportation.",
  },
  {
    q: "How long does the assessment take?",
    a: "A typical first-time run takes 45–90 minutes and can be split across multiple sessions and contributors. Subsequent quarters usually take under 20 minutes.",
  },
  {
    q: "Can we use the report with our investors?",
    a: "Yes. Reports are exported as PDF and machine-readable JSON, with every claim referenced back to the underlying standard (GRI, SASB, MSCI, etc.).",
  },
  {
    q: "Where is our data stored?",
    a: "All data is encrypted at rest and in transit. You retain full ownership of your data and can delete your workspace at any time.",
  },
];
