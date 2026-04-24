import React from "react";
import {
  Globe,
  Compass,
  Layers,
  Cpu,
  FingerprintPattern,
  ArrowUpRight,
} from "lucide-react";

const Hero = () => {
  const partners = [
    { name: "Logoipsum", icon: <Globe className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-9 xl:h-9" /> },
    { name: "Learnify", icon: <Compass className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-9 xl:h-9" /> },
    { name: "Saydraw", icon: <Layers className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-9 xl:h-9" /> },
    { name: "Shopfun", icon: <Cpu className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-9 xl:h-9" /> },
    { name: "OneTech", icon: <FingerprintPattern className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-9 xl:h-9" /> },
  ];

  return (
    <div id="home" className="relative min-h-screen w-full flex flex-col items-center justify-between overflow-hidden ">
      <div
        className="absolute inset-0 bg-[url('/bg.jpg')] bg-cover bg-center   z-0"
        aria-hidden="true"
      ></div>

      <div className="flex-1 flex flex-col items-center justify-center relative z-10 px-6 pt-20">
        <div className="flex items-center gap-2 bg-white/5 backdrop-blur-xl border border-white/10 px-2 py-1 rounded-lg mb-6 animate-in fade-in slide-in-from-top-4 duration-1000">
          <span className="bg-linear-to-bl from-emerald-300 to-emerald-900 text-white text-[12px]   px-2 py-1 rounded-lg uppercase">
            #1
          </span>
          <span className="text-gray-200 text-sm font-semibold tracking-wider">
            Best security service
          </span>
        </div>

        <h1 className="text-[48px] md:text-[55px] font-semibold text-white leading-[1.1] tracking-tight mb-8 text-center max-w-3xl">
          Your Digital Fortress <br />
          <span className="bg-linear-to-b from-white to-white/40 bg-clip-text text-transparent">
            Starts Here.
          </span>
        </h1>

        <p className="text-white-400 text-base md:text-lg max-w-2xl leading-relaxed mb-8 font-light text-center">
          Protect your business from cyber threats with cutting-edge security
          solutions, real-time monitoring, and a team of experienced experts.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-10">
          <button className="group relative flex items-center gap-2 bg-linear-to-b from-[#0d7653] to-[#059669]   text-white   px-5 py-3 rounded-xl transition-all duration-300   active:scale-95 cursor-pointer">
            Book a Demo
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>

          <button className="cursor-pointer text-gray-300 hover:text-white font-semibold text-lg transition-all relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 hover:after:w-full after:bg-white after:transition-all">
            Learn More
          </button>
        </div>
      </div>

      <div className="relative z-10 w-full py-12    ">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-7 lg:gap-20 xl:gap-32 opacity-30">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all duration-300 group cursor-pointer"
              >
                <div className="text-white   transition-colors">
                  {partner.icon}
                </div>
                <span className="text-lg md:text-xl  lg:text-xl  xl:text-2xl tracking-tight text-white">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
