import React from "react";
import { Link } from "@nextui-org/react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { pricingData, PricingPlan } from "../utils/data";

const CheckIcon = ({ featured }: { featured?: boolean }) => (
  <svg
    className={`mt-0.5 h-4 w-4 flex-none ${featured ? "text-paper" : "text-accent"}`}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m5 13 4 4L19 7" />
  </svg>
);

function PlanCard({ plan, index }: { plan: PricingPlan; index: number }) {
  const featured = plan.featured;
  return (
    <Reveal
      delay={index * 0.06}
      className={`lift flex flex-col border p-7 ${
        featured
          ? "border-ink bg-ink text-paper"
          : "border-line bg-surface text-ink"
      }`}
    >
      <div className="flex items-center justify-between">
        <h3 className="font-serif text-xl font-semibold">{plan.title}</h3>
        {featured && (
          <span className="bg-accent px-2.5 py-1 text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-paper">
            Popular
          </span>
        )}
      </div>

      <div className="mt-5 flex items-baseline gap-1.5">
        <span className="font-serif text-4xl font-semibold">{plan.price}</span>
        {plan.period && (
          <span className={featured ? "text-sm text-white/60" : "text-sm text-muted"}>
            {plan.period}
          </span>
        )}
      </div>

      <p
        className={`mt-3 text-sm leading-relaxed ${
          featured ? "text-white/70" : "text-muted"
        }`}
      >
        {plan.description}
      </p>

      <ul
        className={`mt-6 flex-1 space-y-3 border-t pt-6 ${
          featured ? "border-white/15" : "border-line"
        }`}
      >
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm">
            <CheckIcon featured={featured} />
            <span className={featured ? "text-white/85" : "text-ink-soft"}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <Link
        href="/#contact"
        className={`mt-8 inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] transition-colors ${
          featured
            ? "bg-paper text-ink hover:bg-accent hover:text-paper"
            : "bg-ink text-paper hover:bg-accent"
        }`}
      >
        {plan.cta} <span aria-hidden>→</span>
      </Link>
    </Reveal>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="border-b border-line py-20 sm:py-28">
      <div className="mx-auto max-w-screen-xl px-6">
        <SectionHeading
          index="06 / 06"
          eyebrow="Service Plans"
          title={
            <>
              Transparent cover, <span className="italic text-accent">no surprises.</span>
            </>
          }
          description="Fixed monthly plans for ongoing upkeep, or a scoped program tailored to your portfolio. Every quote is clear and upfront."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pricingData.map((plan, index) => (
            <PlanCard key={plan.title} plan={plan} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
