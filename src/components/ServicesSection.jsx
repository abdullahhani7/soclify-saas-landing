import Image from "next/image";
import { ShieldCheck } from "lucide-react"; // تأكد من عمل npm install lucide-react

export default function ServicesSection() {
  const services = [
    {
      title: "Cloud Security",
      desc: "Keep your data safe in a cloud environment.",
      img: "/bg1.png",
      colSpan: "md:col-span-1",
    },
    {
      title: "Vulnerability Assessment & Penetration Testing",
      desc: "Detect vulnerabilities, before they get hacked.",
      img: "/bg2.png",
      colSpan: "md:col-span-1",
    },
    {
      title: "Threat Detection & Response",
      desc: "Monitor and respond to cyber threats in real-time.",
      img: "/bg3.png",
      colSpan: "md:col-span-1",
    },
    {
      title: "Firewall & Network Security",
      desc: "Multi-layered protection for your corporate network.",
      img: "/bg4.png",
      colSpan: "md:col-span-1",
    },
    {
      title: "Endpoint Protection",
      desc: "Secure your work and mobile devices, wherever you are.",
      img: "/bg5.png",
      colSpan: "md:col-span-1",
    },
  ];

  return (
    <section id="services" className="bg-[#161616] text-white py-20 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col  md:flex-row justify-between text-center md:text-start items-center  md:items-end mb-16 gap-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-gradient-to-r from-[#272626] via-white/30 to-[#272626] border border-white/10 text-xs text-white">
              <ShieldCheck size={14} />
              <span>Our Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold  leading-tight">
              Comprehensive Security <br />
              <span className="text-gray-300">
                Solutions for the Digital Age
              </span>
            </h2>
          </div>
          <p className="text-gray-300   max-w-sm text-sm leading-relaxed">
            Protecting your data, infrastructure, and reputation with end-to-end
            cybersecurity.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-5">
          {/* Row 1: Two Large Cards */}
          <div className="bg-linear-to-bl from-white/29 to-[#060606] bg-[#161616]/50  md:col-span-3 group relative h-[350px] overflow-hidden rounded-3xl border border-white/5 bg-[#111111]">
            <div className="relative z-20 p-8">
              <h3 className="text-xl font-semibold mb-2">Cloud Security</h3>
              <p className="text-gray-400 text-sm">
                Keep your data safe in a cloud environment.
              </p>
            </div>
            <Image
              src="/service1.png"
              alt="Cloud"
              fill
              className="object-cover object-bottom opacity-80 group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="bg-linear-to-bl from-white/29 to-[#060606] bg-[#161616]/50  md:col-span-3 group relative h-[350px] overflow-hidden rounded-3xl border border-white/5 bg-[#111111]">
            <div className="relative z-20 p-8">
              <h3 className="text-xl font-semibold mb-2">
                Vulnerability Assessment & Penetration Testing
              </h3>
              <p className="text-gray-400 text-sm">
                Detect vulnerabilities, before they get hacked.
              </p>
            </div>
            <Image
              src="/service2.png"
              alt="Testing"
              fill
              className="object-cover object-bottom opacity-80 group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Row 2: Three Smaller Cards */}
          <div className="bg-linear-to-bl from-white/29 to-[#060606] bg-[#161616]/50  md:col-span-2 group relative h-[400px] overflow-hidden rounded-3xl border border-white/5 bg-[#111111]">
            <div className="relative z-20 p-8">
              <h3 className="text-lg font-semibold mb-2">
                Threat Detection & Response
              </h3>
              <p className="text-gray-400 text-sm">
                Monitor and respond to cyber threats in real-time.
              </p>
            </div>
            <Image
              src="/service3.png"
              alt="Threat"
              fill
              className="object-cover object-bottom opacity-80 group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="bg-linear-to-bl from-white/29 to-[#060606] bg-[#161616]/50  md:col-span-2 group relative h-[400px] overflow-hidden rounded-3xl border border-white/5 bg-[#111111]">
            <div className="relative z-20 p-8">
              <h3 className="text-lg font-semibold mb-2">
                Firewall & Network Security
              </h3>
              <p className="text-gray-400 text-sm">
                Multi-layered protection for your corporate network.
              </p>
            </div>
            <Image
              src="/service4.png"
              alt="Firewall"
              fill
              className="object-cover object-bottom opacity-80 group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="bg-linear-to-bl from-white/29 to-[#060606] bg-[#161616]/50  md:col-span-2 group relative h-[400px] overflow-hidden rounded-3xl border border-white/5 bg-[#111111]">
            <div className="relative z-20 p-8">
              <h3 className="text-lg font-semibold mb-2">
                Endpoint Protection
              </h3>
              <p className="text-gray-400 text-sm">
                Secure your work and mobile devices, wherever you are.
              </p>
            </div>
            <Image
              src="/service5.jpeg"
              alt="Endpoint"
              fill
              className="object-cover object-bottom opacity-80 group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
