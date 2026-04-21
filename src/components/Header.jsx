import { ShieldCheck } from "lucide-react";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <div className="flex items-center justify-between w-full max-w-5xl px-4 py-2 bg-[#161616]/80 backdrop-blur-lg border border-white/10 rounded-xl  ">
        {/* Logo */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-9 h-9 bg-emerald-600 rounded-xl flex items-center justify-center shadow-lg group-hover:bg-emerald-500 transition-colors">
            <ShieldCheck />
          </div>

          <span className="text-white font-bold text-lg tracking-tight">
            SOClify
          </span>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-6">
          {["Home", "Services", "Pricing", "Company", "Blog"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-gray-400 hover:text-white text-sm font-medium transition-all"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Action Button */}
        <button className="bg-linear-to-b from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 text-white px-5 py-2 rounded-md border border-white/10 text-sm font-medium transition-all shadow-xl active:scale-95">
          Try it Now
        </button>
      </div>
    </nav>
  );
};

export default Header;
