"use client";
import { useState } from "react";
import { Check, CircleDollarSign, ShieldCheck } from "lucide-react";

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      price: isAnnual ? "159" : "199",
      description: "For small businesses & startups who want to start safely.",
      features: [
        "Real-time threat monitoring",
        "Email & endpoint protection",
        "Basic security Dashboard",
        "Monthly Report",
        "Support via Email",
      ],
      isPopular: false,
    },
    {
      name: "Growth",
      price: isAnnual ? "399" : "499",
      description: "Complete solution for growing business.",
      features: [
        "All Starter features",
        "Cloud security & firewall protection",
        "24/7 Response Team",
        "Weekly security reports",
        "Integration with your business tools",
      ],
      isPopular: true,
    },
    {
      name: "Enterprise",
      price: isAnnual ? "719" : "899",
      description: "Full security for large scale organizations.",
      features: [
        "All Growth features",
        "Custom threat response plan",
        "Dedicated security consultant",
        "Penetration testing & compliance support",
        "Exclusive SLA & priority support",
      ],
      isPopular: false,
    },
  ];

  return (
    <section  id="pricing" className="bg-[#161616] text-white py-24 px-6">
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
          Choose a plan that fits your business needs —<br/> with no hidden fees.
        </p>

        {/* Toggle Switch */}
        <div className="flex justify-center items-center mb-16">
          <div className="bg-[#363535] p-1 rounded-lg border border-white/5 flex items-center">
            <button
              onClick={() => setIsAnnual(false)}
              className={`cursor-pointer px-6 py-2 rounded-md text-sm font-medium transition-all ${
                !isAnnual ? "bg-linear-to-b from-white/20 to-black/40  text-white shadow-lg" : "text-gray-400 hover:text-gray-100"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`cursor-pointer px-6 py-2 rounded-md text-sm font-medium transition-all ${
                isAnnual ? "bg-linear-to-b from-white/20 to-black/40  text-white shadow-lg" : "text-gray-400 hover:text-gray-100"
              }`}
            >
              Annually
            </button>
          </div>
        </div>

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
                  {plan.name}
                </span>
              </div>

              {/* Price */}
              <div className="mb-4">
                <span className="text-4xl font-medium">${plan.price}</span>
                <span className="text-gray-300 text-sm"> /month</span>
              </div>

              <p className="text-gray-300 text-sm mb-9 leading-relaxed max-w-2/3">
                {plan.description}
              </p>

              {/* Features List */}
              <ul className="space-y-5 mb-20 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                    <Check className="w-4 h-4 text-white shrink-0 border rounded-full " />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={`cursor-pointer w-full py-2 rounded-xl font-medium transition-all ${
                  plan.isPopular
                    ? "bg-emerald-700 hover:bg-emerald-600 text-white"
                    : "bg-[#161616]]/5 hover:bg-white/10 text-white border border-white/10"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}