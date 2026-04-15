import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate">
        <div className="blob -left-32 top-10 h-96 w-96 rounded-full bg-pale-sky" />
        <div className="blob right-[-6rem] top-40 h-[28rem] w-[28rem] rounded-full bg-muted-teal/70" />

        <div className="section relative grid gap-12 pt-16 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:pt-24">
          <div className="relative z-10">
            <span className="pill">
              <span className="h-2 w-2 rounded-full bg-jungle-teal" />
              ESG made measurable
            </span>
            <h1 className="heading-display mt-5">
              Score, understand and{" "}
              <span className="relative inline-block">
                <span className="relative z-10">act</span>
                <span className="absolute inset-x-0 bottom-1 -z-0 h-3 rounded-full bg-pale-sky/80" />
              </span>{" "}
              on your company&apos;s sustainability.
            </h1>
            <p className="body-muted mt-6 max-w-xl">
              A+ CSR unifies the leading ESG frameworks — GRI, SASB,
              Sustainalytics, MSCI and S&amp;P Global — into a single,
              sector-aware self-assessment. Get a score, a roadmap and a
              report-ready document in under an hour.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/assessment" className="btn-primary">
                Take the self-assessment
                <ArrowIcon />
              </Link>
              <Link href="/about" className="btn-secondary">
                Learn more
              </Link>
            </div>

            <dl className="mt-12 grid max-w-xl grid-cols-3 gap-6 rounded-3xl bg-white/70 p-5 shadow-soft ring-1 ring-jungle-teal/10 backdrop-blur">
              {[
                { k: "5", v: "Frameworks unified" },
                { k: "11", v: "Industry sectors" },
                { k: "320+", v: "Mapped indicators" },
              ].map((s) => (
                <div key={s.v}>
                  <dt className="font-display text-3xl font-semibold text-jungle-teal">
                    {s.k}
                  </dt>
                  <dd className="mt-1 text-xs text-slate-600">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Hero visual */}
          <div className="relative z-10">
            <HeroVisual />
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="relative">
        <div className="section py-10">
          <div className="rounded-[2.5rem] bg-white/80 p-8 shadow-soft ring-1 ring-jungle-teal/10 backdrop-blur">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-deep-teal/70">
              Built on the standards that boards trust
            </p>
            <div className="mt-6 grid grid-cols-2 gap-6 text-center font-display text-lg font-semibold text-deep-teal/80 sm:grid-cols-3 lg:grid-cols-5">
              {["GRI", "SASB", "MSCI", "S&P Global", "Sustainalytics"].map(
                (b) => (
                  <div
                    key={b}
                    className="rounded-2xl bg-pale-sky/40 px-4 py-3 transition hover:bg-pale-sky/60"
                  >
                    {b}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="relative">
        <div className="blob left-1/3 top-1/2 h-72 w-72 rounded-full bg-ash-grey/60" />
        <div className="section">
          <div className="mx-auto max-w-2xl text-center">
            <span className="pill">How it works</span>
            <h2 className="heading-section mt-4">
              From questionnaire to board-ready report — in three moves.
            </h2>
            <p className="body-muted mt-4">
              Designed for sustainability leads, finance teams and founders who
              need clarity without a 12-week consulting engagement.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {steps.map((s, i) => (
              <article
                key={s.title}
                className="card group relative overflow-hidden"
              >
                <span className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-pale-sky/60 transition group-hover:scale-110" />
                <span className="font-display text-5xl font-semibold text-jungle-teal/30">
                  0{i + 1}
                </span>
                <h3 className="mt-3 font-display text-2xl font-semibold text-deep-teal">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {s.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE GRID */}
      <section className="relative">
        <div className="section">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div>
              <span className="pill">Why A+ CSR</span>
              <h2 className="heading-section mt-4">
                One language for every framework, every sector.
              </h2>
              <p className="body-muted mt-4">
                Stop juggling spreadsheets across five different standards. We
                normalize and reconcile indicators so your team only answers a
                question once.
              </p>
              <Link href="/indicators" className="btn-secondary mt-8">
                Explore the indicator library
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="rounded-3xl bg-white/85 p-6 shadow-soft ring-1 ring-jungle-teal/10 transition hover:-translate-y-1 hover:shadow-glow"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-teal text-white">
                    {f.icon}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-deep-teal">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="relative">
        <div className="section">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-brand p-10 text-deep-teal shadow-soft sm:p-16">
            <div className="absolute -bottom-20 -right-12 h-72 w-72 rounded-blob bg-white/30 animate-blob" />
            <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
              <div>
                <span className="pill !bg-white/60">Field-tested</span>
                <p className="mt-5 font-display text-2xl leading-snug sm:text-3xl">
                  &ldquo;We replaced four overlapping ESG questionnaires with a
                  single A+ CSR run. The mapped report saved our team weeks of
                  cross-walking standards.&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-deep-teal text-sm font-semibold text-white">
                    NK
                  </span>
                  <div className="text-sm">
                    <p className="font-semibold text-deep-teal">
                      Naila Karim
                    </p>
                    <p className="text-deep-teal/70">
                      Head of Sustainability, Kira Foods
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { k: "−68%", v: "Reporting time" },
                  { k: "5×", v: "Frameworks reconciled" },
                  { k: "92", v: "Score uplift in 6 mo." },
                  { k: "100%", v: "Board sign-off" },
                ].map((m) => (
                  <div
                    key={m.v}
                    className="rounded-3xl bg-white/70 p-5 backdrop-blur"
                  >
                    <p className="font-display text-3xl font-semibold text-deep-teal">
                      {m.k}
                    </p>
                    <p className="mt-1 text-xs text-deep-teal/70">{m.v}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative">
        <div className="section pb-10 pt-4 text-center">
          <h2 className="heading-section">Ready when your board is.</h2>
          <p className="body-muted mx-auto mt-4 max-w-xl">
            Twenty minutes today. A defensible ESG baseline tomorrow. No credit
            card to start.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/assessment" className="btn-primary">
              Start your self-assessment
              <ArrowIcon />
            </Link>
            <Link href="/pricing" className="btn-secondary">
              See pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

const steps = [
  {
    title: "Pick your sector",
    body: "Choose your industry and we tailor the questionnaire to the indicators that matter for your peers and regulators.",
  },
  {
    title: "Answer in plain English",
    body: "Around 40 sector-aware questions. Skip what doesn't apply. Save and resume — your team can collaborate.",
  },
  {
    title: "Score, report, improve",
    body: "Get a unified ESG score, a heat-mapped risk register and an export-ready PDF aligned to GRI, SASB, MSCI & more.",
  },
];

const features = [
  {
    title: "Sector-aware scoring",
    body: "Every question is weighted by the materiality of your industry — not a generic one-size-fits-all rubric.",
    icon: <DotIcon />,
  },
  {
    title: "Cross-framework mapping",
    body: "One answer, automatically reconciled across GRI, SASB, MSCI, S&P and Sustainalytics codes.",
    icon: <GridIcon />,
  },
  {
    title: "Document checklist",
    body: "Know exactly which policies, certifications and disclosures you need to evidence each indicator.",
    icon: <CheckIcon />,
  },
  {
    title: "Improvement roadmap",
    body: "Concrete, prioritised actions with effort estimates — not just a number on a slide.",
    icon: <ArrowIcon />,
  },
];

function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square max-w-md">
      <div className="absolute inset-0 animate-blob rounded-blob bg-gradient-brand opacity-70 blur-2xl" />
      <div className="relative h-full w-full rounded-[2.5rem] bg-white/80 p-6 shadow-glow ring-1 ring-jungle-teal/10 backdrop-blur">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-wider text-deep-teal/70">
              Live preview
            </p>
            <p className="font-display text-lg font-semibold text-deep-teal">
              Q3 ESG Snapshot
            </p>
          </div>
          <span className="rounded-full bg-jungle-teal/10 px-3 py-1 text-xs font-semibold text-jungle-teal">
            +4.2 pts
          </span>
        </div>

        <div className="mt-6 flex items-end justify-center">
          <ScoreRing score={78} />
        </div>

        <div className="mt-6 grid grid-cols-3 gap-2 text-center text-xs">
          {[
            { k: "Env", v: 82, c: "bg-muted-teal" },
            { k: "Soc", v: 74, c: "bg-pale-sky" },
            { k: "Gov", v: 79, c: "bg-ash-grey" },
          ].map((p) => (
            <div key={p.k} className="rounded-2xl bg-cream p-3">
              <p className="font-semibold uppercase tracking-wider text-deep-teal/70">
                {p.k}
              </p>
              <p className="font-display text-2xl font-semibold text-deep-teal">
                {p.v}
              </p>
              <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-white">
                <div
                  className={`${p.c} h-full rounded-full`}
                  style={{ width: `${p.v}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 space-y-2">
          {[
            ["Climate disclosure (GRI 305)", true],
            ["Workforce diversity policy", true],
            ["Supplier code of conduct", false],
          ].map(([label, ok]) => (
            <div
              key={label as string}
              className="flex items-center justify-between rounded-2xl bg-cream/70 px-4 py-2.5 text-xs text-deep-teal"
            >
              <span>{label as string}</span>
              <span
                className={`rounded-full px-2 py-0.5 font-semibold ${
                  ok
                    ? "bg-muted-teal/30 text-jungle-teal"
                    : "bg-pale-sky/60 text-deep-teal"
                }`}
              >
                {ok ? "Evidenced" : "Pending"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ScoreRing({ score }: { score: number }) {
  const r = 56;
  const c = 2 * Math.PI * r;
  const offset = c - (score / 100) * c;
  return (
    <div className="relative grid place-items-center">
      <svg width="160" height="160" viewBox="0 0 160 160">
        <circle
          cx="80"
          cy="80"
          r={r}
          stroke="#e6efe6"
          strokeWidth="14"
          fill="none"
        />
        <circle
          cx="80"
          cy="80"
          r={r}
          stroke="url(#g1)"
          strokeWidth="14"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={offset}
          transform="rotate(-90 80 80)"
        />
        <defs>
          <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#8db38b" />
            <stop offset="100%" stopColor="#56876d" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute text-center">
        <p className="font-display text-4xl font-semibold text-deep-teal">
          {score}
        </p>
        <p className="text-[10px] uppercase tracking-widest text-deep-teal/60">
          ESG Score
        </p>
      </div>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path
        d="M5 12l4 4 10-10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function GridIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="7" height="7" rx="2" fill="currentColor" />
      <rect x="14" y="3" width="7" height="7" rx="2" fill="currentColor" opacity="0.6" />
      <rect x="3" y="14" width="7" height="7" rx="2" fill="currentColor" opacity="0.6" />
      <rect x="14" y="14" width="7" height="7" rx="2" fill="currentColor" />
    </svg>
  );
}
function DotIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="6" fill="currentColor" />
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
    </svg>
  );
}
