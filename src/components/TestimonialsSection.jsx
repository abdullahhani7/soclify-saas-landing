"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, ShieldCheck } from "lucide-react";

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      company: "Onetech.inc",
      content:
        "We were looking for a scalable security partner, and Securely nailed it. Real-time dashboard, instant alerts, and expert support? Game changer.",
      author: "Lamine Yamal",
      role: "Founder of Onetech.inc",
      avatar:
        "https://i.pinimg.com/736x/22/5f/4c/225f4c968155fcd81cc89182f673583b.jpg",
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=OT",
    },
    {
      company: "TechFlow Systems",
      content:
        "Their incident response team is incredible. We had a minor breach attempt and they neutralized it before it even hit our main database.",
      author: "Alex Rivera",
      role: "CTO at TechFlow",
      avatar:
        "https://i.pinimg.com/736x/7a/e0/72/7ae07275b5bcb595ec5da30eb436b639.jpg",
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=TF",
    },
    {
      company: "CyberGuard",
      content:
        "The most intuitive security platform we've used in years. Integration was seamless and the ROI was immediate for our team.",
      author: "John Chen",
      role: "Head of IT",
      avatar:
        "https://i.pinimg.com/webp/1200x/08/6c/75/086c750bbca89ed4561bdad81e39e8c5.webp",
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=CG",
    },
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section className="bg-[#161616] text-white py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center    gap-12 lg:gap-0">
        {/* الجزء الشمال: العنوان ثابت */}
        <div className="lg:w-1/2 space-y-8 z-10 text-center lg:text-start">
          <div className=" inline-flex items-center gap-2 px-3 py-1 rounded-md bg-gradient-to-r from-[#272626] via-white/30 to-[#272626] border border-white/10 text-sm text-white mb-6">
            <ShieldCheck size={14} />
            <span>Testimonial</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-medium leading-tight  ">
            Trusted by Global <br />
            Companies. See Their <br />
            <span className="text-gray-300 font-medium">Testimonials</span>
          </h2>

          <p className="text-gray-300 text-md m-auto lg:m-0 max-w-sm leading-relaxed  text-center lg:text-start">
            From startups to global enterprises, our clients rely on us to
            deliver exceptional results.
          </p>
        </div>

        {/* الخط العمودي الثابت في النص */}
        <div className="hidden lg:flex flex-col items-center justify-center h-80 px-16 relative">
          <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-white/20 to-transparent relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.8)]" />
          </div>
        </div>

        {/* الجزء اليمين: السلايدر مع أزرار يمين وشمال */}
        <div className="lg:w-1/2 relative min-h-[450px] flex items-center px-4 md:px-16">
          {/* زر السهم الشمال */}
          <button
            onClick={handlePrev}
            className="absolute left-0 z-20 w-10 h-10 rounded-full border border-white/10 bg-[#0a0a0a]/50 backdrop-blur-sm flex items-center justify-center hover:border-emerald-500/50 hover:text-emerald-500 transition-all"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
              className="space-y-5 w-full"
            >
              {/* اللوجو */}
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-[#111] border border-white/10 flex items-center justify-center">
                  <img
                    src={testimonials[activeIndex].logo}
                    alt="logo"
                    className="w-8 h-8 opacity-80 rounded-full"
                  />
                </div>
                <span className="text-xl font-medium tracking-tight">
                  {testimonials[activeIndex].company}
                </span>
              </div>

              {/* نص الرأي */}
              <p className="text-xl md:text-xl   text-gray-300 leading-relaxed min-h-[120px]">
                {testimonials[activeIndex].content}
              </p>

              {/* بيانات الشخص */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-emerald-500/30 shrink-0">
                  <img
                    src={testimonials[activeIndex].avatar}
                    alt={testimonials[activeIndex].author}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">
                    {testimonials[activeIndex].author}
                  </h4>
                  <p className="text-emerald-500/80 text-sm font-medium">
                    {testimonials[activeIndex].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* زر السهم اليمين */}
          <button
            onClick={handleNext}
            className="absolute right-0 z-20 w-10 h-10 rounded-full border border-white/10 bg-[#0a0a0a]/50 backdrop-blur-sm flex items-center justify-center hover:border-emerald-500/50 hover:text-emerald-500 transition-all"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
