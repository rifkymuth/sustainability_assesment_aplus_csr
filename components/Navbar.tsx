"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/assessment", label: "Self-Assessment" },
  { href: "/results", label: "Results" },
  { href: "/indicators", label: "Indicators" },
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full">
      <div className="mx-auto mt-4 w-[min(1200px,calc(100%-2rem))] rounded-full border border-jungle-teal/15 bg-white/80 px-4 py-2 shadow-soft backdrop-blur-xl sm:px-6">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="flex items-center gap-2.5 rounded-full px-2 py-1.5 transition hover:bg-pale-sky/40"
          >
            <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-teal text-white shadow-soft">
              <LeafIcon />
            </span>
            <span className="font-display text-lg font-semibold tracking-tight text-deep-teal">
              A+ <span className="text-muted-teal">CSR</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    active
                      ? "bg-jungle-teal text-white shadow-soft"
                      : "text-deep-teal/80 hover:bg-pale-sky/50 hover:text-deep-teal"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <Link href="/assessment" className="btn-primary !py-2.5 !text-sm">
              Start assessment
            </Link>
          </div>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full bg-pale-sky/50 text-deep-teal lg:hidden"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d={open ? "M6 6l12 12M6 18L18 6" : "M4 7h16M4 12h16M4 17h16"}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {open && (
          <div className="mt-3 grid gap-1 rounded-3xl bg-white/80 p-3 lg:hidden">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`rounded-2xl px-4 py-2.5 text-sm font-medium ${
                  pathname === l.href
                    ? "bg-jungle-teal text-white"
                    : "text-deep-teal/80 hover:bg-pale-sky/40"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/assessment"
              onClick={() => setOpen(false)}
              className="btn-primary mt-1 !w-full"
            >
              Start assessment
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

function LeafIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M20 4c-7 0-13 4-13 11 0 1.8.5 3.4 1.4 4.6L6 22l1.4-1.4C8.6 21.5 10.2 22 12 22c7 0 8-9 8-18Z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M8 18c3-5 7-8 11-9"
        stroke="white"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
