"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ShieldCheck, HelpCircle } from "lucide-react";
import FAQItem from "./FAQItem";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(1);

  const faqs = [
    {
      question: "Do you provide security reports?",
      answer:
        "Yes, we provide detailed monthly and real-time security reports that outline detected threats, system vulnerabilities, and the actions taken to mitigate risks.",
    },
    {
      question: "Vulnerability vs. Pentesting?",
      answer:
        "Vulnerability Assessment identifies security gaps in your system. Penetration Testing (pentest) simulates a real attack to test how strong your system is against threats.",
    },
    {
      question: "How often should I perform security checks?",
      answer:
        "We recommend continuous monitoring, but a full comprehensive security audit should be performed at least quarterly or whenever significant changes are made.",
    },
    {
      question: "Is my data safe with you?",
      answer:
        "Absolutely. We use industry-standard encryption and strict access controls. Your data is processed following global compliance standards like GDPR and SOC2.",
    },
    {
      question: "What happens if a threat is detected?",
      answer:
        "Our automated systems immediately isolate the threat, and our 24/7 security operations center (SOC) team is alerted to investigate and neutralize it within minutes.",
    },
    {
      question: "Do you support multi-cloud security environments?",
      answer:
        "Yes, our platform is designed for hybrid and multi-cloud strategies, providing a unified security layer across AWS, Azure, and Google Cloud simultaneously.",
    },
    {
      question: "Can your service protect mobile applications?",
      answer:
        "Definitely. We provide end-to-end security for mobile apps, including API protection, code obfuscation checks, and secure data storage validation.",
    },
    {
      question: "Do you offer specialized security for SMEs?",
      answer:
        "Yes, we offer scalable packages specifically tailored for SMEs, ensuring enterprise-grade protection that fits smaller budgets.",
    },
    // الأسئلة الجديدة المضافة لتكملة العدد لـ 12
    {
      question: "Do you provide 24/7 incident response?",
      answer:
        "Yes, our global security operations center (SOC) operates 24 hours a day, 7 days a week, ensuring immediate response to any critical security incident.",
    },
    {
      question: "How do you handle API security?",
      answer:
        "We implement advanced rate limiting, OAuth2 authentication checks, and payload inspection to prevent common API attacks like injection and broken object-level authorization.",
    },
  ];

  // التقسيم الجديد داخل الكومبوننت لضمان التساوي
  const leftCol = faqs.slice(0, 5);
  const rightCol = faqs.slice(5, 10);

  return (
    <section className="bg-[#161616] text-white py-24 px-6 relative overflow-hidden">
      {/* Subtle Background Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/5 via-transparent to-transparent -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-gradient-to-r from-[#272626] via-white/30 to-[#272626] border border-white/10 text-sm text-white mb-6">
            <ShieldCheck size={14} />
            <span>Frequently Asked Question</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            Got questions about cyber <br />
            <span className="text-gray-300"> security? We've got answers.</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-md">
            Our FAQ is here to give you clarity and <br /> confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          <div className="space-y-4">
            {faqs.map(
              (faq, index) =>
                index % 2 === 0 && (
                  <FAQItem
                    key={index}
                    faq={faq}
                    isOpen={openIndex === index}
                    onClick={() =>
                      setOpenIndex(openIndex === index ? -1 : index)
                    }
                  />
                ),
            )}
          </div>

          <div className="space-y-4">
            {faqs.map(
              (faq, index) =>
                index % 2 !== 0 && (
                  <FAQItem
                    key={index}
                    faq={faq}
                    isOpen={openIndex === index}
                    onClick={() =>
                      setOpenIndex(openIndex === index ? -1 : index)
                    }
                  />
                ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
