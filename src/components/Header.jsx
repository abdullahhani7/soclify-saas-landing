"use client";
import { ShieldCheck } from "lucide-react";
import React, { useState } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";

const Header = () => {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    // لو نزلنا أكتر من 50 بكسل وبنكمل نزول، يبدأ يختفي
    if (latest > previous && latest > 50) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: {
          y: 0,
          opacity: 1,
          scale: 1,
        },
        hidden: {
          y: -40,
          opacity: 0,
          scale: 0.98,
        },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="fixed top-8 left-0 right-0 z-50 flex justify-center px-4 w-full"
    >
      <div className="flex items-center justify-between w-full max-w-5xl px-4 py-2 bg-[#161616]/80 backdrop-blur-lg border border-white/10 rounded-lg shadow-2xl">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group cursor-pointer">
          <div className="w-8 h-8 bg-gradient-to-bl from-emerald-500 to-emerald-900 rounded-lg flex items-center justify-center shadow-lg">
            <ShieldCheck size={20} className="text-white" />
          </div>
          <span className="text-white font-bold text-lg tracking-tight">
            SOClify
          </span>
        </a>

        {/* Links */}
        <div className="hidden md:flex items-center gap-6">
          {["Home", "Services", "Pricing", "Company", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white hover:text-[#22ae74] text-sm font-medium transition-all"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Action Button */}
        <button className="bg-gradient-to-b from-white/10 to-transparent hover:from-emerald-500 hover:to-emerald-900 text-white px-5 py-1.5 rounded-lg border border-white/10 text-sm font-medium transition-all active:scale-95 cursor-pointer duration-300">
          Try it Now
        </button>
      </div>
    </motion.nav>
  );
};

export default Header;
