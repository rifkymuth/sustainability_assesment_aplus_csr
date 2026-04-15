"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const sectors = [
  "Food & Beverage",
  "Financials",
  "Technology",
  "Energy",
  "Healthcare",
  "Transportation",
];

const pillars = ["Environment", "Social", "Governance"] as const;
type Pillar = (typeof pillars)[number];

type Indicator = {
  id: string;
  title: string;
  pillar: Pillar;
  sector: string;
  description: string;
  refs: { framework: string; code: string }[];
  documents: string[];
};

const indicators: Indicator[] = [
  {
    id: "ENV-001",
    title: "Scope 1 & 2 GHG emissions",
    pillar: "Environment",
    sector: "Food & Beverage",
    description:
      "Direct (Scope 1) and energy-indirect (Scope 2) greenhouse-gas emissions, measured in tCO₂e and disclosed annually.",
    refs: [
      { framework: "GRI", code: "305-1, 305-2" },
      { framework: "SASB", code: "FB-AG-110a.1" },
      { framework: "MSCI", code: "Carbon Emissions" },
      { framework: "S&P CSA", code: "1.7.1" },
      { framework: "Sustainalytics", code: "E.1.1" },
    ],
    documents: [
      "GHG inventory report (current FY)",
      "Energy consumption ledger",
      "Third-party verification statement",
      "Emission factor source list",
    ],
  },
  {
    id: "ENV-014",
    title: "Water withdrawal & stress exposure",
    pillar: "Environment",
    sector: "Food & Beverage",
    description:
      "Total water withdrawn by source, with an overlay for facilities located in water-stressed regions per WRI Aqueduct.",
    refs: [
      { framework: "GRI", code: "303-3" },
      { framework: "SASB", code: "FB-AG-140a.1" },
      { framework: "MSCI", code: "Water Stress" },
    ],
    documents: [
      "Site-level water meter logs",
      "WRI Aqueduct facility map",
      "Water management policy",
    ],
  },
  {
    id: "SOC-007",
    title: "Workforce diversity & inclusion",
    pillar: "Social",
    sector: "Technology",
    description:
      "Headcount and representation by gender, age band and underrepresented groups, including board and senior management.",
    refs: [
      { framework: "GRI", code: "405-1" },
      { framework: "SASB", code: "TC-SI-330a.3" },
      { framework: "MSCI", code: "Labour Standards" },
      { framework: "S&P CSA", code: "3.4.2" },
    ],
    documents: [
      "Annual D&I report",
      "HRIS workforce extract",
      "Pay-equity analysis",
      "Board composition matrix",
    ],
  },
  {
    id: "SOC-021",
    title: "Supplier human-rights audit coverage",
    pillar: "Social",
    sector: "Food & Beverage",
    description:
      "Percentage of Tier-1 and Tier-2 suppliers covered by an independent human-rights audit in the past 24 months.",
    refs: [
      { framework: "GRI", code: "414-1" },
      { framework: "SASB", code: "FB-AG-430a.1" },
      { framework: "Sustainalytics", code: "S.4.2" },
    ],
    documents: [
      "Supplier code of conduct",
      "Audit results register",
      "Corrective action plan tracker",
    ],
  },
  {
    id: "GOV-003",
    title: "Board independence & ESG oversight",
    pillar: "Governance",
    sector: "Financials",
    description:
      "Share of independent directors and existence of a formal ESG / sustainability committee at board level.",
    refs: [
      { framework: "GRI", code: "2-9, 2-12" },
      { framework: "SASB", code: "FN-CB-510a" },
      { framework: "MSCI", code: "Corporate Governance" },
      { framework: "S&P CSA", code: "1.1.4" },
    ],
    documents: [
      "Board charter",
      "Director independence assessment",
      "ESG committee terms of reference",
      "Annual board ESG agenda",
    ],
  },
  {
    id: "GOV-018",
    title: "Whistleblower & ethics hotline",
    pillar: "Governance",
    sector: "Technology",
    description:
      "Existence, accessibility and reporting cadence of a confidential whistleblower channel for employees and third parties.",
    refs: [
      { framework: "GRI", code: "2-26" },
      { framework: "S&P CSA", code: "1.4.3" },
      { framework: "Sustainalytics", code: "G.2.1" },
    ],
    documents: [
      "Whistleblower policy",
      "Hotline access guide (multi-language)",
      "Annual reports register (anonymised)",
    ],
  },
];

export default function IndicatorsPage() {
  const [pillar, setPillar] = useState<Pillar | "All">("All");
  const [sector, setSector] = useState<string>("All sectors");
  const [query, setQuery] = useState("");
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const visible = useMemo(() => {
    return indicators.filter((i) => {
      if (pillar !== "All" && i.pillar !== pillar) return false;
      if (sector !== "All sectors" && i.sector !== sector) return false;
      if (
        query &&
        !`${i.title} ${i.description} ${i.id}`
          .toLowerCase()
          .includes(query.toLowerCase())
      )
        return false;
      return true;
    });
  }, [pillar, sector, query]);

  const total = indicators.reduce((acc, i) => acc + i.documents.length, 0);
  const ticked = Object.values(checked).filter(Boolean).length;

  return (
    <>
      {/* Mockup banner */}
      <section className="relative">
        <div className="section pt-16 lg:pt-24">
          <div className="rounded-3xl border border-dashed border-jungle-teal/40 bg-pale-sky/30 p-4 text-center text-xs font-semibold uppercase tracking-[0.25em] text-deep-teal">
            Preview · Sample indicators shown — full unified library is being
            curated
          </div>
        </div>
      </section>

      {/* Header */}
      <section className="relative">
        <div className="blob -left-24 top-10 h-80 w-80 rounded-full bg-pale-sky" />
        <div className="blob right-[-3rem] top-32 h-80 w-80 rounded-full bg-muted-teal/60" />
        <div className="section relative pt-6">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-end">
            <div>
              <span className="pill">Unified indicator library</span>
              <h1 className="heading-display mt-4">
                Every indicator. Every framework. One library.
              </h1>
              <p className="body-muted mt-4 max-w-2xl">
                Browse the indicators that matter for your sector, see exactly
                which standards they map to, and tick off the documents you
                already have in place.
              </p>
            </div>

            <div className="card">
              <p className="text-xs uppercase tracking-wider text-deep-teal/70">
                Your evidence checklist
              </p>
              <div className="mt-3 flex items-end justify-between">
                <p className="font-display text-4xl font-semibold text-deep-teal">
                  {ticked}
                  <span className="text-xl text-slate-400">/{total}</span>
                </p>
                <p className="text-xs text-slate-500">documents on file</p>
              </div>
              <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-cream">
                <div
                  className="h-full rounded-full bg-gradient-teal transition-all"
                  style={{ width: `${(ticked / total) * 100}%` }}
                />
              </div>
              <p className="mt-3 text-xs text-slate-500">
                Tick items as you go — your progress is saved locally for this
                preview.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="relative">
        <div className="section pt-2">
          <div className="rounded-3xl bg-white/85 p-4 shadow-soft ring-1 ring-jungle-teal/10 sm:p-5">
            <div className="grid gap-3 sm:grid-cols-[1fr_auto_auto]">
              <label className="relative">
                <span className="sr-only">Search indicators</span>
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search indicators, codes, keywords..."
                  className="w-full rounded-full border border-jungle-teal/15 bg-cream px-5 py-3 pl-11 text-sm text-deep-teal placeholder:text-slate-400 focus:border-jungle-teal focus:outline-none focus:ring-4 focus:ring-jungle-teal/15"
                />
                <svg
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
                  <path d="m20 20-3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </label>

              <select
                value={pillar}
                onChange={(e) => setPillar(e.target.value as Pillar | "All")}
                className="rounded-full border border-jungle-teal/15 bg-cream px-5 py-3 text-sm font-semibold text-deep-teal focus:border-jungle-teal focus:outline-none"
              >
                <option>All</option>
                {pillars.map((p) => (
                  <option key={p}>{p}</option>
                ))}
              </select>

              <select
                value={sector}
                onChange={(e) => setSector(e.target.value)}
                className="rounded-full border border-jungle-teal/15 bg-cream px-5 py-3 text-sm font-semibold text-deep-teal focus:border-jungle-teal focus:outline-none"
              >
                <option>All sectors</option>
                {sectors.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Indicator list */}
      <section className="relative">
        <div className="section pt-2">
          <div className="grid gap-5">
            {visible.map((ind) => (
              <article
                key={ind.id}
                className="rounded-[2rem] bg-white/90 p-7 shadow-soft ring-1 ring-jungle-teal/10 transition hover:shadow-glow sm:p-8"
              >
                <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full bg-pale-sky/60 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-deep-teal">
                        {ind.id}
                      </span>
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          ind.pillar === "Environment"
                            ? "bg-muted-teal/30 text-jungle-teal"
                            : ind.pillar === "Social"
                            ? "bg-pale-sky/60 text-deep-teal"
                            : "bg-ash-grey/60 text-deep-teal"
                        }`}
                      >
                        {ind.pillar}
                      </span>
                      <span className="text-xs text-slate-500">
                        {ind.sector}
                      </span>
                    </div>

                    <h2 className="mt-3 font-display text-2xl font-semibold text-deep-teal">
                      {ind.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      {ind.description}
                    </p>

                    <div className="mt-5">
                      <p className="text-xs font-semibold uppercase tracking-wider text-deep-teal/70">
                        Mapped to
                      </p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {ind.refs.map((r) => (
                          <span
                            key={r.framework}
                            className="inline-flex items-center gap-1.5 rounded-full bg-cream px-3 py-1.5 text-xs ring-1 ring-jungle-teal/10"
                          >
                            <span className="font-semibold text-deep-teal">
                              {r.framework}
                            </span>
                            <span className="text-slate-500">{r.code}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="rounded-3xl bg-cream p-5">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-semibold uppercase tracking-wider text-deep-teal/70">
                        Required documents
                      </p>
                      <span className="text-xs text-slate-500">
                        {
                          ind.documents.filter((d) => checked[`${ind.id}::${d}`])
                            .length
                        }
                        /{ind.documents.length}
                      </span>
                    </div>
                    <ul className="mt-3 space-y-2">
                      {ind.documents.map((d) => {
                        const k = `${ind.id}::${d}`;
                        const isChecked = !!checked[k];
                        return (
                          <li key={d}>
                            <label className="flex cursor-pointer items-center gap-3 rounded-2xl bg-white/80 px-3 py-2.5 text-sm ring-1 ring-jungle-teal/10 transition hover:bg-white">
                              <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={(e) =>
                                  setChecked((prev) => ({
                                    ...prev,
                                    [k]: e.target.checked,
                                  }))
                                }
                                className="peer sr-only"
                              />
                              <span
                                className={`grid h-5 w-5 flex-none place-items-center rounded-md border-2 transition ${
                                  isChecked
                                    ? "border-jungle-teal bg-jungle-teal text-white"
                                    : "border-jungle-teal/30 bg-white"
                                }`}
                              >
                                {isChecked && (
                                  <svg
                                    width="12"
                                    height="12"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                  >
                                    <path
                                      d="M5 12l4 4 10-10"
                                      stroke="currentColor"
                                      strokeWidth="3"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                )}
                              </span>
                              <span
                                className={
                                  isChecked
                                    ? "text-deep-teal line-through decoration-jungle-teal/40"
                                    : "text-deep-teal"
                                }
                              >
                                {d}
                              </span>
                            </label>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </article>
            ))}

            {visible.length === 0 && (
              <div className="rounded-3xl bg-white/80 p-10 text-center text-sm text-slate-500 ring-1 ring-jungle-teal/10">
                No indicators match those filters yet. Try widening your
                search.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative">
        <div className="section pb-10 pt-2 text-center">
          <h2 className="heading-section">
            Turn this checklist into a real assessment.
          </h2>
          <p className="body-muted mx-auto mt-4 max-w-xl">
            Once you&apos;ve mapped your evidence, the self-assessment will
            populate the indicators automatically.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/assessment" className="btn-primary">
              Start self-assessment
            </Link>
            <Link href="/about#methodology" className="btn-secondary">
              See the methodology
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
