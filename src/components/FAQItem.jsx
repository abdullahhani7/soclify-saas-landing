import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ShieldCheck, HelpCircle } from "lucide-react";

export default function FAQItem({ faq, isOpen, onClick }) {
  return (
    <motion.div
      layout  
      initial={false}
      className={`rounded-2xl border transition-colors duration-500 ${
        isOpen
          ? "bg-linear-to-bl from-[#24B176]/19 to-[#161616] bg-[#161616]/100 border-emerald-500/30 shadow-2xl"
          : " bg-gradient-to-bl from-white/20 to-[#0f0e0e]  border-white/5 hover:border-white/10"
      }`}
    >
      <button
        onClick={onClick}
        className="cursor-pointer w-full px-6 md:p-4 flex items-center justify-between text-left outline-none"
      >
        <span
          className={`text-lg font-medium pr-4 transition-colors duration-300 ${isOpen ? "text-white" : "text-white"}`}
        >
          {faq.question}
        </span>
        <motion.div
          animate={{
            rotate: isOpen ? 180 : 0,
            backgroundColor: isOpen ? "#10b981" : "rgba(255,255,255,0.05)",
          }}
          className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center border border-white/10 ${isOpen ? "text-black shadow-[0_0_15px_rgba(16,185,129,0.4)]" : "text-gray-500"}`}
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }} // Spring-like feel
          >
            <div className="px-6 md:px-8 pb-8 pt-0 text-gray-400 leading-relaxed border-t border-white/5 mt-2">
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="pt-6"
              >
                {faq.answer}
                <div className="mt-6 flex items-center gap-2 text-emerald-500/40 text-[10px] font-bold uppercase tracking-widest">
                  <ShieldCheck size={12} />
                  <span>Secure Protocol</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
