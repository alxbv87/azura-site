"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

/** Inline SVG icons (no extra deps) */
const icons = {
  formation: (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
    </svg>
  ),
  office: (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 21h18M6 21V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14" />
      <path d="M9 10h6M9 14h6M9 18h6" strokeLinecap="round" />
    </svg>
  ),
  banking: (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 10l9-6 9 6v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V10z" />
      <path d="M9 14h6M9 18h6" strokeLinecap="round" />
    </svg>
  ),
  compliance: (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M5 4h10l4 4v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
      <path d="M9 13l2 2 4-4" strokeLinecap="round" />
    </svg>
  ),
  accounting: (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M7 7h10M7 12h10M7 17h6" strokeLinecap="round" />
    </svg>
  ),
  immigration: (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8" strokeLinecap="round" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
};

const SERVICES = [
  {
    id: "company-formation",
    title: "Company Formation (Costa Rica)",
    icon: "formation",
    summary:
      "End-to-end incorporation of local entities with clear timelines and fixed-fee transparency.",
    details: {
      intro:
        "We handle the full incorporation workflow so you can launch quickly and compliantly. We advise on the right vehicle based on ownership, liability, banking needs, and operational plans.",
      bestFor: [
        "Entrepreneurs validating a product or market quickly",
        "International founders expanding operations into Costa Rica",
        "Existing companies seeking a local subsidiary",
      ],
      steps: [
        "Kickoff & structuring call to confirm entity type and ownership.",
        "Document collection & KYC (founders/shareholders, directors).",
        "Drafting and execution of incorporation documents.",
        "Registration with the relevant authorities.",
        "Activation basics (corporate records, guidance on next steps).",
      ],
      deliverables: [
        "Company established and registered",
        "Corporate records pack (digital copies)",
        "Clear post-incorporation checklist",
      ],
      timeline: "Typical timeline: 5–10 business days after complete KYC.",
      requirements: [
        "Valid IDs/passports for shareholders and directors",
        "Basic company info (name preferences, activities, share capital)",
        "Proof of address (depending on KYC policy)",
      ],
      disclaimer:
        "Actual timing depends on document readiness and authority workloads.",
    },
  },
  {
    id: "registered-office",
    title: "Registered Office & Local Representation",
    icon: "office",
    summary:
      "A compliant local presence for service of notices and official correspondence.",
    details: {
      intro:
        "We provide a reliable registered office address and local representation so your company meets statutory obligations and never misses critical notices.",
      steps: [
        "Assign registered address and official correspondence handling.",
        "Annual maintenance & renewal reminders.",
        "Mail scanning/forwarding according to your preferences.",
      ],
      deliverables: [
        "Registered office certificate/confirmation",
        "Mail handling protocol",
        "Annual reminders calendar",
      ],
      timeline: "Activation within 1–2 business days.",
      requirements: ["Active local entity or incorporation with us", "KYC"],
    },
  },
  {
    id: "banking",
    title: "Corporate Banking Assistance",
    icon: "banking",
    summary:
      "We prepare your file, pre-screen, and coordinate introductions to suitable institutions.",
    details: {
      intro:
        "Banking is all about preparation. We help you assemble a bank-ready profile and introduce you to institutions aligned with your business model.",
      steps: [
        "Pre-screening against bank appetite and compliance notes.",
        "Compile application pack and support forms.",
        "Coordinate the introduction and guide you through interviews.",
      ],
      deliverables: [
        "Bank-ready application pack",
        "Introductions to suitable institutions",
        "Compliance checklist for ongoing use",
      ],
      timeline:
        "Varies by institution and profile complexity. Typical range: 1–4 weeks after complete documentation.",
      requirements: [
        "Corporate documents post-incorporation",
        "UBO/KYC documentation for stakeholders",
        "Business plan / transactional rationale (as applicable)",
      ],
      disclaimer:
        "Account approval is always at the bank’s sole discretion. We increase readiness and fit; we do not guarantee approvals.",
    },
  },
  {
    id: "compliance",
    title: "Compliance & Annual Maintenance",
    icon: "compliance",
    summary:
      "Stay in good standing with proactive reminders and hands-on support for renewals.",
    details: {
      intro:
        "We manage your yearly obligations so you can focus on operations. From corporate record-keeping to annual renewals, we keep you on track.",
      steps: [
        "Annual corporate health check and key-date calendar.",
        "Preparation of routine minutes/resolutions.",
        "Guidance on beneficial ownership and other filings.",
      ],
      deliverables: [
        "Annual maintenance plan",
        "Prepared corporate minutes/resolutions (as needed)",
        "Reminders for key deadlines",
      ],
      timeline: "Ongoing, with reminders issued 30–60 days in advance.",
      requirements: [
        "Up-to-date company records",
        "Contact for authorized signatory approvals",
      ],
    },
  },
  {
    id: "accounting-tax",
    title: "Accounting & Tax Filings",
    icon: "accounting",
    summary:
      "Streamlined bookkeeping and filing support tailored to your activity and volume.",
    details: {
      intro:
        "We set up a practical accounting workflow, keep your books tidy, and prepare filings according to the applicable requirements.",
      steps: [
        "Onboarding & chart-of-accounts setup.",
        "Monthly bookkeeping and reconciliations.",
        "Periodic tax computations and filing support.",
      ],
      deliverables: [
        "Monthly management reports",
        "Year-end package (trial balance & ledgers)",
        "Filing confirmations/receipts (as applicable)",
      ],
      timeline: "Monthly cycle with agreed cut-offs and SLAs.",
      requirements: [
        "Source documents (invoices, statements, payroll data)",
        "Access to accounting portal/shared drive",
      ],
    },
  },
  {
    id: "immigration",
    title: "Immigration & Work Authorization (Add-On)",
    icon: "immigration",
    summary:
      "Business-friendly guidance for founders and key staff relocating or working locally.",
    details: {
      intro:
        "When relocation is part of your plan, we coordinate the right permits and keep timelines realistic.",
      steps: [
        "Profile assessment and document list.",
        "Application preparation and submission.",
        "Status tracking and interview guidance (if required).",
      ],
      deliverables: [
        "Application pack and submission",
        "Milestone updates",
        "Post-approval checklist",
      ],
      timeline: "Highly dependent on authorities; we set expectations up front.",
      requirements: ["Identity documents", "Clean police record", "Proof of means/offer"],
    },
  },
];

function AccordionItem({ item, openId, setOpenId }) {
  const isOpen = openId === item.id;

  return (
    <div
      id={item.id}
      className={`rounded-2xl border transition-shadow ${isOpen ? "border-brand shadow-lg bg-white" : "border-gray-200 bg-white hover:shadow"} `}
    >
      <button
        onClick={() => setOpenId(isOpen ? null : item.id)}
        className="w-full flex items-center justify-between gap-4 p-6 text-left"
        aria-expanded={isOpen}
        aria-controls={`${item.id}-panel`}
      >
        <div className="flex items-center gap-3">
          <span className={`text-brand ${isOpen ? "" : ""}`}>{icons[item.icon]}</span>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.summary}</p>
          </div>
        </div>
        {/* Chevron */}
        <svg
          className={`w-5 h-5 text-gray-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.17l3.71-2.94a.75.75 0 1 1 .94 1.16l-4.24 3.36a.75.75 0 0 1-.94 0L5.21 8.39a.75.75 0 0 1 .02-1.18z" />
        </svg>
      </button>

      {isOpen && (
        <div id={`${item.id}-panel`} className="px-6 pb-6 -mt-3">
          {/* Intro */}
          {item.details?.intro && (
            <p className="text-gray-700 leading-relaxed mb-6">{item.details.intro}</p>
          )}

          <div className="grid md:grid-cols-3 gap-6">
            {/* Left column: steps & best for */}
            <div className="md:col-span-2">
              {item.details?.bestFor && (
                <>
                  <h4 className="font-semibold text-gray-900 mb-2">Best for</h4>
                  <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
                    {item.details.bestFor.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </>
              )}

              {item.details?.steps && (
                <>
                  <h4 className="font-semibold text-gray-900 mb-2">How it works</h4>
                  <ol className="list-decimal list-inside text-gray-700 space-y-2 mb-6">
                    {item.details.steps.map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ol>
                </>
              )}

              {item.details?.disclaimer && (
                <p className="text-sm text-gray-500 italic mb-6">{item.details.disclaimer}</p>
              )}
            </div>

            {/* Right column: deliverables, timeline, requirements */}
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
              {item.details?.deliverables && (
                <>
                  <h4 className="font-semibold text-gray-900 mb-2">What you get</h4>
                  <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                    {item.details.deliverables.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                </>
              )}

              {item.details?.timeline && (
                <p className="text-gray-700 mb-4">
                  <span className="font-semibold">Timeline: </span>
                  {item.details.timeline}
                </p>
              )}

              {item.details?.requirements && (
                <>
                  <h4 className="font-semibold text-gray-900 mb-2">Requirements</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {item.details.requirements.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={`/contact?service=${encodeURIComponent(item.title)}`}
              className="bg-brand hover:bg-brand-dark text-white px-5 py-3 rounded-lg font-semibold transition"
            >
              Get a personalized quote
            </Link>
            <a
              href={`#${item.id}`}
              className="px-5 py-3 rounded-lg border border-gray-300 text-gray-700 hover:border-brand hover:text-brand transition"
              onClick={(e) => {
                e.preventDefault();
                setOpenId(null);
              }}
            >
              Close
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Services() {
  const [openId, setOpenId] = useState(null);

  // Open a section automatically if URL hash matches (e.g., /services#banking)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash?.replace("#", "");
    if (hash && SERVICES.some((s) => s.id === hash)) setOpenId(hash);
  }, []);

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero (match home gradient/colors) */}
      <section className="bg-gradient-to-r from-brand to-brand-dark text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Services</h1>
          <p className="text-white/90 max-w-2xl mx-auto">
            Choose a category to see the full process, deliverables, timelines, and requirements.
          </p>
        </div>
      </section>

      {/* Accordion */}
      <section className="max-w-6xl mx-auto px-6 py-14 space-y-5">
        {SERVICES.map((item) => (
          <AccordionItem key={item.id} item={item} openId={openId} setOpenId={setOpenId} />
        ))}
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Not sure which service you need?
          </h2>
          <p className="text-gray-600 mb-8">
            Tell us your goals and we’ll design a streamlined, compliant plan for you.
          </p>
          <Link
            href="/contact"
            className="bg-brand hover:bg-brand-dark text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            Talk to an expert
          </Link>
        </div>
      </section>
    </main>
  );
}
