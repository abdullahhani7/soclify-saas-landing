import Image from "next/image";
import { ShieldCheck, Monitor, Users, Eye, Zap } from "lucide-react"; // محتاج تعمل npm install lucide-react

export default function SecuritySection() {
  const features = [
    {
      title: "Real-Time Threat Monitoring",
      description:
        "Monitor your network and system activity 24/7 with instant notifications when suspicious activity is detected.",
      icon: <Monitor className="w-6 h-6 text-emerald-500" />,
    },
    {
      title: "Global Certified Expert Team",
      description:
        "Our security experts hold leading certifications such as CISSP, CEH, and OSCP.",
      icon: <Users className="w-6 h-6 text-emerald-500" />,
    },
    {
      title: "Full Transparency and Control",
      description:
        "Access the interactive dashboard to view real-time security reports.",
      icon: <Eye className="w-6 h-6 text-emerald-500" />,
    },
    {
      title: "Fast & Effective Incident Response",
      description:
        "We don't just detect — we act fast. Our response team is ready to help mitigate within minutes.",
      icon: <Zap className="w-6 h-6 text-emerald-500" />,
    },
  ];

  return (
    <section id="company" className="relative min-h-screen w-full   py-25 px-6 overflow-hidden flex flex-col items-center">
      <div className="absolute inset-0 z-0 opacity-30">
        <Image
          src="/bg2.png"
          alt="Background Pattern"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-2 py-1.5 rounded-lg  bg-linear-to-b  from-white/50 to-white/10 bg-[#161616]/50 border border-white/10 text-white text-sm mb-8 backdrop-blur-sm">
          <ShieldCheck size={18} />
          <span>Why Choose Securely</span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight">
          Security Isn&apos;t Just a Feature — It&apos;s
          <br className="hidden md:block" />
          <span className="text-gray-400">Our Foundation.</span>
        </h2>

        {/* Subtitle */}
        <p className="text-white max-w-lg mx-auto text-lg mb-16">
          Built from the ground up to protect what matters most — your data,
          your users, and your business.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group py-10 px-6 rounded-3xl bg-linear-to-bl from-white/19 to-[#161616] bg-[#161616]/50 border border-white/5 backdrop-blur-md hover:border-emerald-500/30 transition-all duration-300 text-left"
            >
              {/* Icon Box */}
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:bg-emerald-500/10 transition-colors">
                {feature.icon}
              </div>

              <h3 className="text-lg w-2/3 text-white mb-4">{feature.title}</h3>

              <p className="text-gray-400 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
