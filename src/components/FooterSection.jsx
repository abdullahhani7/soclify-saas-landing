"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative   text-white pt-24 pb-12 px-6 overflow-hidden">
      {/* سكشن الـ CTA العلوي - مطابقة تامة للصورة */}
      <div className="absolute inset-0 bg-[url('/footer-bg.jpg')] bg-cover bg-center opacity-60  z-[-1]" />
      <div className="relative max-w-7xl mx-auto mb-32 rounded-[40px]     overflow-hidden">
        {/* الخلفية: صورة bg.png مع الـ Overlay الأخضر التقني */}
        <div className="absolute inset-0   z-0" />

        {/* محتوى الـ CTA */}
        <div className="relative z-10 py-24 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-medium mb-8 tracking-tight leading-[1.1]">
              Protect What Matters <br />
              Most — Your Data.
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-12 text-lg md:text-xl leading-relaxed">
              Don't wait until you're attacked. Start protecting your business
              today with <br className="hidden md:block" />
              Securely's world-class cybersecurity system.
            </p>

            <button className="cursor-pointer inline-flex items-center gap-2 bg-[#0d7653] hover:bg-[#059669] text-white px-10 py-4 rounded-xl font-bold text-lg transition-all   group">
              Book a Demo
              <ArrowUpRight
                size={22}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </button>
          </motion.div>
        </div>
      </div>

      {/* الـ Footer الرئيسي السفلي */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-16 mb-24">
          {/* البراند والوصف */}
          <div className="lg:max-w-md space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-linear-to-bl from-emerald-500 to-emerald-900 rounded-lg flex items-center justify-center shadow-lg   transition-all">
                <ShieldCheck />
              </div>
              <span className="text-3xl  font-medium tracking-tight">
                SOClify
              </span>
            </div>
            <p className="text-gray-300 text-md leading-relaxed">
              Securely is a modern cybersecurity platform designed to protect
              businesses of all sizes from digital threats.
            </p>
          </div>

          {/* روابط القوائم */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-11">
            {/* Navigation */}
            <div>
              <h4 className="text-white text-lg mb-8">Navigation</h4>
              <ul className="space-y-4">
                {["Home", "Product", "Pricing", "Company", "Blog"].map(
                  (link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-gray-300 hover:text-[#10b981] transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>

            {/* Our Company */}
            <div>
              <h4 className="text-white text-lg mb-8">Our Company</h4>
              <ul className="space-y-4">
                {["About Us", "News", "Career", "Our Story"].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-[#10b981] transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Us */}
            <div className="col-span-2 md:col-span-1">
              <h4 className="text-white  text-lg mb-8">Contact Us</h4>
              <div className="text-gray-300 space-y-4">
                <p className="leading-relaxed">
                  123 Maple Street <br />
                  Apt. 4B <br />
                  Los Angeles, CA 90001 <br />
                  United States
                </p>
                <p className="text-white    pt-2">Phone : (256) 870-8700</p>
              </div>
            </div>
          </div>
        </div>

        {/* سطر الحقوق النهائي */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-gray-300 text-sm">
            © {currentYear} SOClify. All right reserved.
          </p>

          <div className="flex gap-8">
            <FaFacebook
              size={22}
              className="text-gray-300 hover:text-white transition-all transform hover:scale-110 cursor-pointer"
            />

            {/* <a
              href="#"
              className="text-gray-300 hover:text-white transition-all transform hover:scale-110"
            > */}
            <RiTwitterXLine
              size={22}
              className="text-gray-300 hover:text-white transition-all transform hover:scale-110 cursor-pointer"
            />
            {/* </a> */}
            {/* <a
              href="#"
              className="text-gray-300 hover:text-white transition-all transform hover:scale-110"
            > */}
            <AiFillInstagram
              size={22}
              className="text-gray-300 hover:text-white transition-all transform hover:scale-110 cursor-pointer"
            />
            {/* </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
