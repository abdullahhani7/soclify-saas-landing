import { ShieldCheck } from "lucide-react";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <nav className="fixed top-8 left-0 right-0 z-50 flex justify-center px-4">
      <div className="flex items-center justify-between w-full max-w-5xl px-2 py-2 bg-[#161616]/80 backdrop-blur-lg border border-white/10 rounded-lg  ">
        {/* Logo */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-8 h-8 bg-linear-to-bl from-emerald-500 to-emerald-900 rounded-lg flex items-center justify-center shadow-lg   transition-all">
            <ShieldCheck />
          </div>

          <span className="text-white font-bold text-lg tracking-tight">
            SOClify
          </span>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-6">
          {["Home", "Services", "Pricing", "Company", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white  hover:text-[#22ae74] text-sm font-medium transition-all"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Action Button */}
        <button className="bg-linear-to-b from-white/19 to-white/1  hover:from-emerald-500  hover:to-emerald-900 text-white px-5 py-1.5 rounded-lg border border-white/10 text-sm font-medium transition-all   active:scale-95 cursor-pointer transition-colors  duration-300">
          Try it Now
        </button>
      </div>
    </nav>
  );
};

export default Header;
