import Link from "next/link";

export const metadata = {
  title: "Self-Assessment · A+ CSR",
  description:
    "Mockup of the A+ CSR sector-aware ESG self-assessment questionnaire.",
};

const sections = [
  {
    key: "E",
    title: "Environment",
    color: "bg-muted-teal",
    progress: 60,
    questions: [
      "Do you measure and report Scope 1 & 2 GHG emissions?",
      "Have you set a science-based emissions reduction target?",
      "What % of energy consumed comes from renewable sources?",
      "How is water consumption tracked across your operations?",
      "Do you have a formal waste-reduction or circularity policy?",
    ],
  },
  {
    key: "S",
    title: "Social",
    color: "bg-pale-sky",
    progress: 35,
    questions: [
      "What is the gender pay gap across your workforce?",
      "Do you publish a workforce diversity & inclusion report?",
      "Are health & safety incidents tracked and disclosed?",
      "Is there a formal supplier human-rights policy in place?",
      "Do you conduct community impact assessments for major projects?",
    ],
  },
  {
    key: "G",
    title: "Governance",
    color: "bg-ash-grey",
    progress: 80,
    questions: [
      "What % of your board is independent?",
      "Is executive compensation linked to ESG performance?",
      "Do you have a formal whistleblower / ethics hotline?",
      "Has the board approved a climate-risk oversight mandate?",
      "Are anti-corruption training records maintained annually?",
    ],
  },
];

export default function AssessmentPage() {
  return (
    <>
      {/* Mockup banner */}
      <section className="relative">
        <div className="section pt-16 lg:pt-24">
          <div className="rounded-3xl border border-dashed border-jungle-teal/40 bg-pale-sky/30 p-4 text-center text-xs font-semibold uppercase tracking-[0.25em] text-deep-teal">
            Preview · Indicators wiring is mocked while the unified library is
            finalised
          </div>
        </div>
      </section>

      {/* Header */}
      <section className="relative">
        <div className="blob -left-20 top-10 h-72 w-72 rounded-full bg-pale-sky" />
        <div className="blob right-[-3rem] top-32 h-80 w-80 rounded-full bg-muted-teal/60" />
        <div className="section relative pt-6">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <span className="pill">Self-assessment</span>
              <h1 className="heading-display mt-4">
                Your Q3 2026 ESG questionnaire.
              </h1>
              <p className="body-muted mt-4">
                Answer at your own pace — your progress is saved automatically.
                Skip the questions that don&apos;t apply to your sector and
                we&apos;ll re-weight your score accordingly.
              </p>
            </div>

            <div className="card w-full max-w-sm">
              <p className="text-xs uppercase tracking-wider text-deep-teal/70">
                Overall progress
              </p>
              <div className="mt-3 flex items-end justify-between">
                <p className="font-display text-4xl font-semibold text-deep-teal">
                  58<span className="text-xl text-slate-400">%</span>
                </p>
                <p className="text-xs text-slate-500">26 of 45 answered</p>
              </div>
              <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-cream">
                <div
                  className="h-full rounded-full bg-gradient-teal"
                  style={{ width: "58%" }}
                />
              </div>
              <Link href="/results" className="btn-primary mt-5 !w-full">
                View interim results
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section selector */}
      <section className="relative">
        <div className="section pt-2">
          <div className="grid gap-4 md:grid-cols-3">
            {sections.map((s) => (
              <div key={s.key} className="card relative overflow-hidden">
                <span
                  className={`absolute -right-6 -top-6 h-24 w-24 rounded-full ${s.color} opacity-50`}
                />
                <div className="flex items-center gap-3">
                  <span
                    className={`grid h-10 w-10 place-items-center rounded-full ${s.color} font-display text-lg font-semibold text-deep-teal`}
                  >
                    {s.key}
                  </span>
                  <h2 className="font-display text-xl font-semibold text-deep-teal">
                    {s.title}
                  </h2>
                </div>
                <div className="mt-5 flex items-end justify-between">
                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    Section progress
                  </p>
                  <p className="font-display text-2xl font-semibold text-jungle-teal">
                    {s.progress}%
                  </p>
                </div>
                <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-cream">
                  <div
                    className="h-full rounded-full bg-jungle-teal"
                    style={{ width: `${s.progress}%` }}
                  />
                </div>
                <p className="mt-4 text-xs text-slate-500">
                  {s.questions.length} questions · ~{s.questions.length * 2} min
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Question blocks */}
      <section className="relative">
        <div className="section pt-2">
          {sections.map((s) => (
            <div key={s.key} className="mb-12">
              <div className="mb-5 flex items-center gap-3">
                <span
                  className={`grid h-9 w-9 place-items-center rounded-full ${s.color} font-display font-semibold text-deep-teal`}
                >
                  {s.key}
                </span>
                <h2 className="heading-section !text-3xl">{s.title}</h2>
              </div>

              <div className="space-y-3">
                {s.questions.map((q, i) => (
                  <article
                    key={q}
                    className="rounded-3xl bg-white/85 p-6 shadow-soft ring-1 ring-jungle-teal/10 transition hover:shadow-glow sm:p-7"
                  >
                    <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                      <div className="max-w-2xl">
                        <p className="text-xs font-semibold uppercase tracking-wider text-deep-teal/60">
                          Question {i + 1} · GRI {200 + i * 3}-{i + 1}
                        </p>
                        <p className="mt-2 font-display text-lg text-deep-teal">
                          {q}
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center gap-2">
                        {["Yes", "Partial", "No", "N/A"].map((opt, j) => (
                          <button
                            key={opt}
                            type="button"
                            disabled
                            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                              j === 0
                                ? "bg-jungle-teal text-white shadow-soft"
                                : "bg-cream text-deep-teal/70 ring-1 ring-jungle-teal/10"
                            } cursor-not-allowed`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2 text-xs">
                      {["GRI", "SASB", "MSCI"].map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-pale-sky/50 px-3 py-1 font-semibold text-deep-teal"
                        >
                          {tag}
                        </span>
                      ))}
                      <span className="rounded-full bg-cream px-3 py-1 text-slate-500 ring-1 ring-jungle-teal/10">
                        Evidence: policy doc + KPI table
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}

          <div className="flex flex-col items-center justify-between gap-4 rounded-3xl bg-gradient-teal p-6 text-white shadow-soft sm:flex-row sm:p-8">
            <div>
              <p className="font-display text-xl font-semibold">
                Save and continue later
              </p>
              <p className="mt-1 text-sm text-white/85">
                Your answers are auto-saved. Return any time to finish.
              </p>
            </div>
            <div className="flex gap-3">
              <button
                disabled
                className="cursor-not-allowed rounded-full border-2 border-white/60 px-6 py-3 text-sm font-semibold text-white"
              >
                Save draft
              </button>
              <Link
                href="/results"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-jungle-teal shadow-soft transition hover:bg-cream"
              >
                Submit & see results
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
