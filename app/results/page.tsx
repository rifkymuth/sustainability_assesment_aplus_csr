import Link from "next/link";

export const metadata = {
  title: "Results & Review · A+ CSR",
  description:
    "Mockup of the A+ CSR results & report-export page following an ESG self-assessment.",
};

const pillars = [
  { key: "Environment", score: 78, color: "bg-muted-teal", change: "+6" },
  { key: "Social", score: 64, color: "bg-pale-sky", change: "+3" },
  { key: "Governance", score: 81, color: "bg-ash-grey", change: "+1" },
];

const risks = [
  {
    title: "Scope 3 emissions disclosure",
    severity: "High",
    framework: "GRI 305-3 · SASB FB-AG-110a",
    body: "Upstream agricultural emissions are not yet inventoried. This is the single largest gap impacting your environment score.",
  },
  {
    title: "Supplier human-rights audit",
    severity: "Medium",
    framework: "GRI 414 · MSCI Labour Standards",
    body: "Tier-1 suppliers covered, but Tier-2 audits are missing. Consider a phased rollout over the next two cycles.",
  },
  {
    title: "Board ESG oversight charter",
    severity: "Low",
    framework: "S&P CSA · TCFD Governance",
    body: "Charter exists but is not publicly disclosed. Publishing it would close a quick-win governance gap.",
  },
];

const improvements = [
  {
    title: "Adopt a Scope 3 screening methodology",
    effort: "Medium",
    impact: "+8 pts",
    horizon: "Next quarter",
  },
  {
    title: "Publish board ESG oversight charter",
    effort: "Low",
    impact: "+2 pts",
    horizon: "30 days",
  },
  {
    title: "Roll out Tier-2 supplier audit programme",
    effort: "High",
    impact: "+5 pts",
    horizon: "6 months",
  },
  {
    title: "Set science-based emissions target (SBTi)",
    effort: "High",
    impact: "+7 pts",
    horizon: "12 months",
  },
];

export default function ResultsPage() {
  return (
    <>
      {/* Mockup banner */}
      <section className="relative">
        <div className="section pt-16 lg:pt-24">
          <div className="rounded-3xl border border-dashed border-jungle-teal/40 bg-pale-sky/30 p-4 text-center text-xs font-semibold uppercase tracking-[0.25em] text-deep-teal">
            Preview · Sample data shown until live scoring is wired
          </div>
        </div>
      </section>

      {/* Header */}
      <section className="relative">
        <div className="blob -left-24 top-10 h-80 w-80 rounded-full bg-pale-sky" />
        <div className="blob right-[-3rem] top-32 h-80 w-80 rounded-full bg-muted-teal/60" />
        <div className="section relative pt-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="pill">Results · Q3 2026</span>
              <h1 className="heading-display mt-4">
                Your unified ESG score, ready for the boardroom.
              </h1>
              <p className="body-muted mt-4 max-w-2xl">
                Cross-walked across GRI, SASB, MSCI, S&amp;P Global and
                Sustainalytics. Every claim is traceable to its source
                indicator.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="btn-primary">Export report (PDF)</button>
              <button className="btn-secondary">Download data (JSON)</button>
            </div>
          </div>
        </div>
      </section>

      {/* Score panel */}
      <section className="relative">
        <div className="section pt-2">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_1.4fr]">
            {/* Big score */}
            <div className="card relative overflow-hidden">
              <span className="absolute -right-10 -top-10 h-44 w-44 animate-blob rounded-blob bg-gradient-brand opacity-50 blur-2xl" />
              <p className="text-xs uppercase tracking-wider text-deep-teal/70">
                Overall ESG score
              </p>
              <div className="mt-4 flex items-end gap-4">
                <p className="font-display text-7xl font-semibold text-deep-teal">
                  74
                </p>
                <div className="pb-3">
                  <p className="rounded-full bg-muted-teal/30 px-3 py-1 text-xs font-semibold text-jungle-teal">
                    Grade B+
                  </p>
                  <p className="mt-2 text-xs text-slate-500">
                    +4 pts vs. last quarter
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {pillars.map((p) => (
                  <div key={p.key}>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-semibold text-deep-teal">
                        {p.key}
                      </span>
                      <span className="text-deep-teal">
                        {p.score}{" "}
                        <span className="text-xs text-jungle-teal">
                          {p.change}
                        </span>
                      </span>
                    </div>
                    <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-cream">
                      <div
                        className={`${p.color} h-full rounded-full`}
                        style={{ width: `${p.score}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-cream p-4 text-xs text-slate-600">
                Benchmark: A+ CSR sector average for{" "}
                <span className="font-semibold text-deep-teal">
                  Food & Beverage
                </span>{" "}
                is <span className="font-semibold text-deep-teal">61</span>.
                You are in the <span className="font-semibold text-jungle-teal">top 22%</span>.
              </div>
            </div>

            {/* Framework reconciliation */}
            <div className="card">
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-wider text-deep-teal/70">
                  Framework reconciliation
                </p>
                <Link
                  href="/indicators"
                  className="text-xs font-semibold text-jungle-teal hover:underline"
                >
                  Open indicator library →
                </Link>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {[
                  ["GRI", "B+", "92% covered"],
                  ["SASB", "A−", "88% covered"],
                  ["MSCI", "BBB", "Modeled"],
                  ["S&P CSA", "62", "Above sector avg."],
                  ["Sustainalytics", "Low", "ESG Risk 18.4"],
                  ["TCFD", "Aligned", "4 of 4 pillars"],
                ].map(([fw, grade, note]) => (
                  <div
                    key={fw}
                    className="rounded-2xl bg-cream p-4 ring-1 ring-jungle-teal/10"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wider text-deep-teal/70">
                      {fw}
                    </p>
                    <p className="mt-1 font-display text-2xl font-semibold text-deep-teal">
                      {grade}
                    </p>
                    <p className="mt-0.5 text-xs text-slate-500">{note}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-deep-teal/70">
                  Materiality heatmap
                </p>
                <div className="mt-3 grid grid-cols-6 gap-1.5">
                  {Array.from({ length: 36 }).map((_, i) => {
                    const intensity = (i * 7) % 100;
                    return (
                      <div
                        key={i}
                        className="h-6 rounded-md"
                        style={{
                          backgroundColor: `rgba(86,135,109,${
                            0.15 + (intensity / 100) * 0.65
                          })`,
                        }}
                      />
                    );
                  })}
                </div>
                <div className="mt-2 flex justify-between text-[10px] uppercase tracking-wider text-slate-500">
                  <span>Low materiality</span>
                  <span>High materiality</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Risk register */}
      <section className="relative">
        <div className="section pt-2">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <span className="pill">Risk register</span>
              <h2 className="heading-section mt-3">
                Where the gaps are — and what they cost you.
              </h2>
            </div>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {risks.map((r) => (
              <article
                key={r.title}
                className="card flex flex-col"
              >
                <div className="flex items-start justify-between">
                  <h3 className="font-display text-lg font-semibold text-deep-teal">
                    {r.title}
                  </h3>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      r.severity === "High"
                        ? "bg-red-100 text-red-700"
                        : r.severity === "Medium"
                        ? "bg-amber-100 text-amber-700"
                        : "bg-muted-teal/30 text-jungle-teal"
                    }`}
                  >
                    {r.severity}
                  </span>
                </div>
                <p className="mt-2 text-xs uppercase tracking-wider text-deep-teal/60">
                  {r.framework}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {r.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Improvement roadmap */}
      <section className="relative">
        <div className="section pt-2">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <span className="pill">Improvement roadmap</span>
              <h2 className="heading-section mt-3">
                A prioritised path to your next score uplift.
              </h2>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl bg-white/85 shadow-soft ring-1 ring-jungle-teal/10">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-cream text-xs uppercase tracking-wider text-deep-teal/70">
                <tr>
                  <th className="px-6 py-4 font-semibold">Action</th>
                  <th className="px-4 py-4 font-semibold">Effort</th>
                  <th className="px-4 py-4 font-semibold">Estimated impact</th>
                  <th className="px-6 py-4 font-semibold">Horizon</th>
                </tr>
              </thead>
              <tbody>
                {improvements.map((imp) => (
                  <tr
                    key={imp.title}
                    className="border-t border-jungle-teal/5"
                  >
                    <td className="px-6 py-4 font-display text-base font-semibold text-deep-teal">
                      {imp.title}
                    </td>
                    <td className="px-4 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          imp.effort === "Low"
                            ? "bg-muted-teal/30 text-jungle-teal"
                            : imp.effort === "Medium"
                            ? "bg-pale-sky/60 text-deep-teal"
                            : "bg-ash-grey/60 text-deep-teal"
                        }`}
                      >
                        {imp.effort}
                      </span>
                    </td>
                    <td className="px-4 py-4 font-semibold text-jungle-teal">
                      {imp.impact}
                    </td>
                    <td className="px-6 py-4 text-slate-600">{imp.horizon}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative">
        <div className="section pb-10 pt-2">
          <div className="overflow-hidden rounded-[2.5rem] bg-gradient-teal p-10 text-white shadow-soft sm:p-14">
            <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
              <div>
                <h2 className="font-display text-3xl font-semibold sm:text-4xl">
                  Ready to share with your board?
                </h2>
                <p className="mt-4 max-w-xl text-white/85">
                  Export a fully formatted report — branded, footnoted, and
                  cross-referenced to every standard.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 lg:justify-end">
                <button className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-jungle-teal shadow-soft transition hover:bg-cream">
                  Export report (PDF)
                </button>
                <Link
                  href="/assessment"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/60 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Re-run assessment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
