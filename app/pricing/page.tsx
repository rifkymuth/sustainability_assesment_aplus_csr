"use client";

import Link from "next/link";
import { useState } from "react";

export default function PricingPage() {
  const [annual, setAnnual] = useState(true);

  return (
    <>
      {/* HERO */}
      <section className="relative isolate">
        <div className="blob -left-24 top-20 h-80 w-80 rounded-full bg-pale-sky" />
        <div className="blob right-[-4rem] top-32 h-96 w-96 rounded-full bg-muted-teal/60" />

        <div className="section relative pt-16 lg:pt-24">
          <div className="mx-auto max-w-2xl text-center">
            <span className="pill">Pricing</span>
            <h1 className="heading-display mt-5">
              Honest pricing for honest sustainability work.
            </h1>
            <p className="body-muted mx-auto mt-6 max-w-xl">
              Start with a full self-assessment for free. Upgrade when
              you&apos;re ready to share evidence-grade reports across your
              organisation.
            </p>

            <div className="mx-auto mt-8 inline-flex items-center gap-1 rounded-full bg-white/80 p-1.5 shadow-soft ring-1 ring-jungle-teal/10 backdrop-blur">
              <button
                onClick={() => setAnnual(false)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                  !annual
                    ? "bg-jungle-teal text-white"
                    : "text-deep-teal/70 hover:text-deep-teal"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setAnnual(true)}
                className={`flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition ${
                  annual
                    ? "bg-jungle-teal text-white"
                    : "text-deep-teal/70 hover:text-deep-teal"
                }`}
              >
                Annual
                <span className="rounded-full bg-pale-sky/60 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-deep-teal">
                  −20%
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* PLANS */}
      <section className="relative">
        <div className="section">
          <div className="grid gap-6 lg:grid-cols-3">
            {plans.map((p) => (
              <PlanCard key={p.name} plan={p} annual={annual} />
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="relative">
        <div className="section">
          <div className="rounded-[2.5rem] bg-white/85 p-6 shadow-soft ring-1 ring-jungle-teal/10 sm:p-10">
            <div className="mb-6 flex items-end justify-between">
              <div>
                <span className="pill">Compare plans</span>
                <h2 className="heading-section mt-3">
                  Pick the plan that fits your reporting cycle.
                </h2>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-jungle-teal/10">
                    <th className="py-4 pr-4 font-semibold text-deep-teal">
                      Feature
                    </th>
                    {plans.map((p) => (
                      <th
                        key={p.name}
                        className="px-4 py-4 font-display text-base font-semibold text-deep-teal"
                      >
                        {p.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row) => (
                    <tr
                      key={row.label}
                      className="border-b border-jungle-teal/5 last:border-0"
                    >
                      <td className="py-4 pr-4 text-slate-700">{row.label}</td>
                      {row.values.map((v, i) => (
                        <td
                          key={i}
                          className="px-4 py-4 text-slate-600"
                        >
                          {typeof v === "boolean" ? (
                            v ? (
                              <span className="grid h-7 w-7 place-items-center rounded-full bg-muted-teal/30 text-jungle-teal">
                                ✓
                              </span>
                            ) : (
                              <span className="grid h-7 w-7 place-items-center rounded-full bg-cream text-slate-400">
                                –
                              </span>
                            )
                          ) : (
                            <span className="text-deep-teal">{v}</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative">
        <div className="section">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <span className="pill">Pricing FAQ</span>
              <h2 className="heading-section mt-4">
                Just the answers, no fine print.
              </h2>
              <p className="body-muted mt-4">
                Need a custom plan for an enterprise procurement process? Email
                us at{" "}
                <a
                  href="mailto:sales@apluscsr.example"
                  className="font-semibold text-jungle-teal underline decoration-pale-sky decoration-2 underline-offset-4"
                >
                  sales@apluscsr.example
                </a>
                .
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

      {/* CTA */}
      <section className="relative">
        <div className="section pb-10 pt-4 text-center">
          <h2 className="heading-section">Try it before you commit.</h2>
          <p className="body-muted mx-auto mt-4 max-w-xl">
            Run a complete self-assessment on the free plan. Upgrade only when
            you need to share, collaborate or export.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/assessment" className="btn-primary">
              Start free assessment
            </Link>
            <Link href="/about#contact" className="btn-secondary">
              Talk to sales
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

type Plan = {
  name: string;
  tagline: string;
  monthly: number | null;
  annual: number | null;
  features: string[];
  cta: string;
  highlighted?: boolean;
  customLabel?: string;
};

function PlanCard({ plan, annual }: { plan: Plan; annual: boolean }) {
  const price = annual ? plan.annual : plan.monthly;
  const isCustom = price === null;

  return (
    <article
      className={`relative flex flex-col rounded-[2rem] p-8 shadow-soft transition hover:-translate-y-1 hover:shadow-glow ${
        plan.highlighted
          ? "bg-gradient-teal text-white ring-1 ring-jungle-teal"
          : "bg-white/90 ring-1 ring-jungle-teal/10"
      }`}
    >
      {plan.highlighted && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-pale-sky px-4 py-1 text-xs font-semibold uppercase tracking-wider text-deep-teal shadow-soft">
          Most popular
        </span>
      )}
      <h3
        className={`font-display text-2xl font-semibold ${
          plan.highlighted ? "text-white" : "text-deep-teal"
        }`}
      >
        {plan.name}
      </h3>
      <p
        className={`mt-2 text-sm ${
          plan.highlighted ? "text-white/85" : "text-slate-600"
        }`}
      >
        {plan.tagline}
      </p>

      <div className="mt-6">
        {isCustom ? (
          <p
            className={`font-display text-4xl font-semibold ${
              plan.highlighted ? "text-white" : "text-deep-teal"
            }`}
          >
            {plan.customLabel ?? "Let's talk"}
          </p>
        ) : (
          <div className="flex items-baseline gap-2">
            <p
              className={`font-display text-5xl font-semibold ${
                plan.highlighted ? "text-white" : "text-deep-teal"
              }`}
            >
              ${price}
            </p>
            <p
              className={`text-sm ${
                plan.highlighted ? "text-white/80" : "text-slate-500"
              }`}
            >
              {price === 0 ? "forever" : annual ? "/mo, billed yearly" : "/mo"}
            </p>
          </div>
        )}
      </div>

      <ul className="mt-6 space-y-3 text-sm">
        {plan.features.map((f) => (
          <li key={f} className="flex gap-3">
            <span
              className={`mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full ${
                plan.highlighted
                  ? "bg-white/20 text-white"
                  : "bg-muted-teal/30 text-jungle-teal"
              }`}
            >
              ✓
            </span>
            <span
              className={
                plan.highlighted ? "text-white/90" : "text-slate-700"
              }
            >
              {f}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <Link
          href={isCustom ? "/about#contact" : "/assessment"}
          className={
            plan.highlighted
              ? "inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-jungle-teal shadow-soft transition hover:bg-cream"
              : "btn-primary !w-full"
          }
        >
          {plan.cta}
        </Link>
      </div>
    </article>
  );
}

const plans: Plan[] = [
  {
    name: "Starter",
    tagline:
      "For founders and small teams running their first ESG baseline.",
    monthly: 0,
    annual: 0,
    features: [
      "1 self-assessment per quarter",
      "Single sector mapping",
      "Score & summary report",
      "Indicator library (read-only)",
      "Email support",
    ],
    cta: "Start for free",
  },
  {
    name: "Growth",
    tagline:
      "For sustainability leads who need shareable, evidence-ready reports.",
    monthly: 149,
    annual: 119,
    features: [
      "Unlimited assessments",
      "All 11 sector mappings",
      "Full PDF + JSON exports",
      "Document evidence checklist",
      "Up to 5 team collaborators",
      "Improvement roadmap",
      "Priority support",
    ],
    cta: "Upgrade to Growth",
    highlighted: true,
  },
  {
    name: "Enterprise",
    tagline:
      "For groups with multi-entity reporting and custom standards.",
    monthly: null,
    annual: null,
    customLabel: "Custom",
    features: [
      "Multi-entity & subsidiary roll-ups",
      "Custom indicator mappings",
      "SSO, audit log & data residency",
      "API access & data export",
      "Dedicated success manager",
      "On-site onboarding",
    ],
    cta: "Contact sales",
  },
];

const comparison: { label: string; values: (boolean | string)[] }[] = [
  { label: "Self-assessments", values: ["1 / quarter", "Unlimited", "Unlimited"] },
  { label: "Sector mappings", values: ["1 sector", "All 11", "Custom"] },
  { label: "Cross-framework reconciliation", values: [true, true, true] },
  { label: "PDF report export", values: ["Summary only", "Full report", "Full + branded"] },
  { label: "Document evidence checklist", values: [false, true, true] },
  { label: "Improvement roadmap", values: [false, true, true] },
  { label: "Team collaborators", values: ["1", "5", "Unlimited"] },
  { label: "Multi-entity roll-ups", values: [false, false, true] },
  { label: "API access", values: [false, false, true] },
  { label: "SSO + audit log", values: [false, false, true] },
  { label: "Support", values: ["Email", "Priority email", "Dedicated CSM"] },
];

const faq = [
  {
    q: "Is the free plan really free?",
    a: "Yes. The Starter plan is free forever and includes a complete self-assessment with a summary report. We only charge when you need unlimited runs, full exports or team collaboration.",
  },
  {
    q: "Can I switch plans later?",
    a: "Of course. Upgrade or downgrade at any time. Annual plans are pro-rated when you upgrade mid-cycle.",
  },
  {
    q: "Do you offer NGO or academic discounts?",
    a: "Yes — registered non-profits and academic institutions get 50% off the Growth plan. Email us to set it up.",
  },
  {
    q: "What payment methods do you accept?",
    a: "Major credit cards and bank transfer for annual plans. Enterprise customers can be invoiced in their local currency.",
  },
  {
    q: "Can I cancel any time?",
    a: "Yes. Cancellation is one click in your workspace settings. Your data remains exportable for 30 days after cancellation.",
  },
];
