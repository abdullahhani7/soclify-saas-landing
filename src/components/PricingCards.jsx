"use client";
import { Cloud, Server, Database } from "lucide-react";

export default function PricingCards({ selectedModel, setSelectedModel }) {
  const cards = [
    {
      id: "our-cloud",
      title: "Our Cloud",
      desc: "We host & manage everything on our infrastructure. You get secure access.",
      badge: "SUBSCRIPTION",
      icon: <Cloud size={22} />,
    },
    {
      id: "your-cloud",
      title: "Your Cloud",
      desc: "We install our security suite on your cloud. You retain full ownership.",
      badge: "ONE-TIME + OPTIONS",
      icon: <Server size={22} />,
    },
    {
      id: "on-prem",
      title: "On-Premises",
      desc: "We install our suite directly at your company HQ. Full hardware control.",
      badge: "ON-PREM + OPTIONS",
      icon: <Database size={22} />,
    },
  ];

  return (
    <div className="bg-[#161616] flex items-center justify-center px-6 pb-15 pt-6">
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl w-full">
        {cards.map((card) => (
          <div
            key={card.id}
            onClick={() => setSelectedModel(card.id)}
            className={`relative p-6 rounded-2xl border transition-all duration-300 cursor-pointer 
            ${selectedModel === card.id ? "border-emerald-400 bg-emerald-500/5" : "border-[#1f3d36] opacity-60"}
            bg-gradient-to-bl from-white/20 to-[#0f0e0e] hover:border-emerald-400 hover:opacity-100`}
          >
            <div className="w-10 h-10 rounded-xl bg-[#0e2a24] flex items-center justify-center text-emerald-400 mb-4">
              {card.icon}
            </div>
            <h3 className="text-white text-xl font-semibold mb-2">
              {card.title}
            </h3>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              {card.desc}
            </p>
            <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-[#0e2a24] text-emerald-400">
              {card.badge}
            </span>
            {selectedModel === card.id && (
              <div className="absolute top-4 right-4 w-6 h-6 bg-emerald-400 text-black flex items-center justify-center rounded-full text-xs font-bold">
                ✓
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
