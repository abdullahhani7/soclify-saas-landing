"use client";
import { useState } from "react";
import { Check, CircleDollarSign, ShieldCheck } from "lucide-react";
import PricingCards from "./PricingCards";
import Link from "next/link";

export default function PricingSection() {
  // const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      id: "tier1",
      name: "SIEMsation",
      tier: "TIER 1",
      price: "199",
      description:
        "Full ELK Stack deployment — the foundation of enterprise-grade visibility.",
      features: [
        "Elasticsearch + Logstash + Kibana",
        "Custom security dashboards",
        "Log aggregation & indexing",
        "Real-time alerting engine",
        "Threat correlation rules",
        "24/7 support",
        "Free 1hr consultation (1/month)",
      ],
      isPopular: false,
    },
    {
      id: "tier2",
      name: "Autopilot",
      tier: "TIER 2",
      price: "499",
      description:
        "CEverything in SIEMsation and automated incident response, and case management.omplete solution for growing business.",
      features: [
        " All SIEMsation features",

        "File integrity monitoring (FIM)",
        "TheHive — case management & ticketing",
        "Shuffle SOAR — workflow automation",
        "Automated network actions",
        "Host isolation on detection",
        "24/7 support",
        "Free 1hr consultation (2/month)",
      ],
      isPopular: true,
    },
    {
      id: "tier3",
      name: "Full Spectrum",
      tier: "TIER 3",
      price: "899",
      description:
        "The complete SOClify suite — SIEM + SOAR + EDR for total endpoint and network dominance.",
      features: [
        " All Autopilot features",
        "Elastic Defend EDR or LimaCharlie",
        "Malware prevention & removal",
        "Memory integrity enforcement",
        "Ransomware protection",
        "24/7 support",
        "Free 1hr consultation (3/month)",
      ],
      isPopular: false,
    },
  ];

  const [selectedModel, setSelectedModel] = useState("our-cloud");

  return (
    <section id="pricing" className="bg-[#161616] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-gradient-to-r from-[#272626] via-white/30 to-[#272626] border border-white/10 text-sm text-white mb-6">
          <ShieldCheck size={14} />
          <span>Pricing</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight">
          Simple, Scalable Pricing for <br />
          <span className="text-gray-300">Serious Security</span>
        </h2>

        <p className="text-gray-300 mb-10 max-w-lg mx-auto">
          Select how you want SOClify deployed —<br /> then pick your security
          tier.
        </p>
        <p className="text-gray-400  font-medium  max-w-lg mx-auto">
          {/* Step 1 — Deployment Model */}
          STEP 1 — DEPLOYMENT MODEL
        </p>

        <PricingCards
          selectedModel={selectedModel}
          setSelectedModel={setSelectedModel}
        />

        {/* Toggle Switch */}
        {/* <div className="flex justify-center items-center mb-16">
          <div className="bg-[#363535] p-1 rounded-lg border border-white/5 flex items-center">
            <button
              onClick={() => setIsAnnual(false)}
              className={`cursor-pointer px-6 py-2 rounded-md text-sm font-medium transition-all ${
                !isAnnual
                  ? "bg-linear-to-b from-white/20 to-black/40  text-white shadow-lg"
                  : "text-gray-400 hover:text-gray-100"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`cursor-pointer px-6 py-2 rounded-md text-sm font-medium transition-all ${
                isAnnual
                  ? "bg-linear-to-b from-white/20 to-black/40  text-white shadow-lg"
                  : "text-gray-400 hover:text-gray-100"
              }`}
            >
              Annually
            </button>
          </div>
        </div> */}

        <p className="text-gray-400  font-medium mb-7 max-w-lg mx-auto">
          STEP 2 — SECURITY TIER
        </p>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-5 rounded-3xl border transition-all duration-300 flex flex-col text-left ${
                plan.isPopular
                  ? "bg-linear-to-bl from-[#24B176]/19 to-[#161616] bg-[#161616]/100 border-2 border-emerald-500/50   scale-101 z-10"
                  : "bg-gradient-to-bl from-white/20 to-[#0f0e0e] border-white/5 hover:border-white/10"
              }`}
            >
              {/* Badge for Growth Plan */}
              <div className="mb-7">
                <span className="px-3 py-1 rounded-lg  bg-gradient-to-r from-[#272626] via-white/10 to-[#272626] border border-white/10 text-xs  ">
                  {plan.tier}
                </span>
              </div>

              {/* Price */}
              <div className="flex items-baseline-last justify-between mb-6">
                <h4 className="text-3xl sm:text-4xl md:text-[23px] lg:text-4xl xl:text-4xl 2xl:text-4xl  font-semibold">
                  {plan.name}
                </h4>
                <div>
                  <span className="text-[17px] md:text-[17px] font-medium">
                    ${plan.price}
                  </span>
                  <span className="text-gray-300 text-sm md:text-[12px]">
                    /month
                  </span>
                </div>
              </div>

              <p className="text-gray-300 text-sm mb-9 leading-relaxed max-w-4/5">
                {plan.description}
              </p>

              {/* Features List */}
              <ul className="space-y-4 lg:space-y-5 mb-20 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm text-gray-300"
                  >
                    <Check className="w-4 h-4 text-white shrink-0 border rounded-full " />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              {/* <button
                className={`cursor-pointer w-full py-2 rounded-xl font-medium transition-all ${
                  plan.isPopular
                    ? "bg-emerald-700 hover:bg-emerald-600 text-white"
                    : "bg-[#161616]]/5 hover:bg-white/10 text-white border border-white/10"
                }`}
              >
                Get Started
              </button> */}

              <Link
                href={`/get-started?tier=${plan.id}&model=${selectedModel}`}
                className={`w-full py-3 rounded-xl font-bold text-center transition-all ${
                  plan.isPopular
                    ? "bg-emerald-500 hover:bg-emerald-400 text-black shadow-[0_0_20px_rgba(16,185,129,0.2)]"
                    : "bg-white/5 hover:bg-white/10 text-white border border-white/10"
                }`}
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
