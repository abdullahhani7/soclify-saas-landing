"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  Building2,
  User,
  Mail,
  Shield,
  Server,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";

const ContactForm = () => {
  const searchParams = useSearchParams();

  // State للفورم والتحكم في العرض
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
    tier: "not-sure",
    model: "our-cloud",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // ربط البيانات اللي جاية من الـ URL بالفورم
  useEffect(() => {
    const tierParam = searchParams.get("tier");
    const modelParam = searchParams.get("model");

    if (tierParam) setFormData((prev) => ({ ...prev, tier: tierParam }));
    if (modelParam) setFormData((prev) => ({ ...prev, model: modelParam }));
  }, [searchParams]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // يمنع الـ Refresh
    setIsSubmitting(true);

    // محاكاة لعملية الإرسال (تقدر تربطها بـ API هنا)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  };

  return (
    <div className="max-w-3xl mx-auto relative px-4">
      <AnimatePresence mode="wait">
        {!isSuccess ? (
          <motion.div
            key="form-step"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className=" bg-gradient-to-bl from-white/10 to-[#0f0e0e] bg-[#000000db] border border-white/5 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
          >
            {/* خلفية جمالية خفيفة */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[100px] -z-10" />

            <div className="mb-10">
              <h1 className="text-4xl md:text-5xl font-semibold text-white mb-4 tracking-tight">
                Send us a <span className="text-emerald-400">message</span>
              </h1>
              <p className="text-gray-400">
                We'll get back to you within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-emerald-500 flex items-center gap-2">
                    <User size={14} /> Full Name *
                  </label>
                  <input
                    required
                    type="text"
                    name="fullName"
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 outline-none transition-all"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-emerald-500 flex items-center gap-2">
                    <Mail size={14} /> Work Email *
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 outline-none transition-all"
                  />
                </div>
              </div>

              {/* Company Name */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-emerald-500 flex items-center gap-2">
                  <Building2 size={14} /> Company Name
                </label>
                <input
                  type="text"
                  name="companyName"
                  placeholder="Your Company Ltd."
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 outline-none transition-all"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Interested Tier */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-emerald-500 flex items-center gap-2">
                    <Shield size={14} /> Interested Tier
                  </label>
                  <div className="relative">
                    <select
                      name="tier"
                      value={formData.tier}
                      onChange={handleChange}
                      className="w-full bg-[#161616] border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-emerald-500 appearance-none cursor-pointer"
                    >
                      <option value="not-sure">Select a Tier</option>
                      <option value="tier1">Tier 1 — SIEMsation</option>
                      <option value="tier2">Tier 2 — Autopilot</option>
                      <option value="tier3">Tier 3 — Full Spectrum</option>
                      <option value="not-sure">Not sure yet</option>
                    </select>
                  </div>
                </div>

                {/* Deployment Model */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-emerald-500 flex items-center gap-2">
                    <Server size={14} /> Deployment Model
                  </label>
                  <div className="relative">
                    <select
                      name="model"
                      value={formData.model}
                      onChange={handleChange}
                      className="w-full bg-[#161616] border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-emerald-500 appearance-none cursor-pointer"
                    >
                      <option value="our-cloud">Option 1 — Our Cloud</option>
                      <option value="your-cloud">
                        Option 2A — Your Cloud, Self-Managed
                      </option>
                      <option value="on-prem">
                        Option 3A — On-Premises, Self-Managed
                      </option>
                      <option value="your-cloud-managed">
                        Option 2B — Your Cloud + Managed Care
                      </option>
                      <option value="on-prem-managed">
                        Option 3B — On-Premises + Managed Care
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-emerald-500 flex items-center gap-2">
                  <MessageSquare size={14} /> Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Tell us about your security needs..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:border-emerald-500/50 outline-none transition-all resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <motion.button
                disabled={isSubmitting}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                type="submit"
                className={`w-full py-4 rounded-xl flex items-center justify-center gap-2 transition-all font-bold group ${
                  isSubmitting
                    ? "bg-emerald-500/20 text-emerald-500 cursor-not-allowed"
                    : "bg-emerald-500 hover:bg-emerald-400 text-black cursor-pointer"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-pulse">Sending Message...</span>
                  </>
                ) : (
                  <>
                    Send Message
                    <Send
                      size={18}
                      className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        ) : (
          /* شاشة النجاح المقتبسة من الصورة اللي بعتها */
          <motion.div
            key="success-step"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#0d0d0d] border border-emerald-500/20 rounded-3xl p-12 md:p-16 shadow-2xl text-center space-y-6"
          >
            <div className="flex justify-center">
              <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center border border-emerald-500/20">
                <CheckCircle2 size={40} className="text-emerald-500" />
              </div>
            </div>

            <h2 className="text-4xl font-bold text-white tracking-tight">
              Message sent!
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed max-w-sm mx-auto">
              Thanks,{" "}
              <span className="text-white capitalize">
                {formData.fullName.split(" ")[0]}
              </span>
              . Our team will reach out to <br />
              <span className="text-emerald-500 font-medium">
                {formData.email}
              </span>{" "}
              <br />
              within 24 hours.
            </p>

            <button
              onClick={() => setIsSuccess(false)}
              className="text-gray-500 hover:text-white text-sm transition-colors pt-4 underline underline-offset-4"
            >
              Send another message
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactForm;
