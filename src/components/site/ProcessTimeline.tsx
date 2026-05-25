import { motion } from "framer-motion";
import {
  Search,
  Cpu,
  PlugZap,
  Rocket,
} from "lucide-react";

const steps = [
  {
    title: "Analyze",
    desc: "Understanding AI opportunities",
    icon: Search,
    gradient: "from-cyan-400 to-blue-500",
  },
  {
    title: "Develop",
    desc: "Building intelligent systems",
    icon: Cpu,
    gradient: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "Integrate",
    desc: "Connecting real AI products",
    icon: PlugZap,
    gradient: "from-emerald-400 to-lime-500",
  },
  {
    title: "Optimize",
    desc: "Improving speed & scale",
    icon: Rocket,
    gradient: "from-orange-400 to-pink-500",
  },
];

export function ProcessTimeline() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">

      {/* Ambient Lights */}
      <div className="absolute left-[10%] top-[20%] h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute right-[10%] top-[30%] h-72 w-72 rounded-full bg-fuchsia-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ================= DESKTOP + TABLET ================= */}
        <div className="relative hidden md:flex items-center justify-between gap-5">

          {/* Flow Line */}
          <svg
            className="absolute left-0 top-[58px] w-full"
            height="120"
            viewBox="0 0 1200 120"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="
                M100 60
                C240 0, 320 120, 470 60
                S700 0, 840 60
                S1030 120, 1160 60
              "
              stroke="url(#flow)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="7 12"
              opacity="0.8"
            />

            <defs>
              <linearGradient id="flow">
                <stop stopColor="#22d3ee" />
                <stop offset="0.5" stopColor="#d946ef" />
                <stop offset="1" stopColor="#84cc16" />
              </linearGradient>
            </defs>
          </svg>

          {steps.map((step, i) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                initial={{
                  opacity: 0,
                  y: 24,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                }}
                whileHover={{
                  y: -4,
                }}
                className={`relative z-10 flex w-full max-w-[250px] flex-col items-center text-center ${
                  i % 2 === 0
                    ? "-mt-6"
                    : "mt-6"
                }`}
              >
                
                {/* Icon Orb */}
                <div
                  className={`relative flex h-[100px] w-[100px] items-center justify-center rounded-[30px] bg-gradient-to-br ${step.gradient} p-[1px]`}
                >
                  <div className="relative flex h-full w-full items-center justify-center rounded-[29px] bg-[#050816]">
                    
                    {/* Glow */}
                    <div
                      className={`absolute inset-0 rounded-[29px] bg-gradient-to-br ${step.gradient} opacity-20 blur-2xl`}
                    />

                    <Icon className="relative h-9 w-9 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="mt-6">
                  <h3 className="text-[28px] font-black tracking-tight text-white">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-[15px] leading-7 text-white/70">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ================= MOBILE ================= */}
        <div className="relative flex flex-col items-center gap-14 md:hidden">

          {/* Vertical Dotted Line */}
          <svg
            className="absolute top-0 h-full"
            width="120"
            viewBox="0 0 120 1200"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="
                M60 20
                C10 120, 110 220, 60 320
                S10 520, 60 620
                S110 820, 60 920
                S10 1120, 60 1180
              "
              stroke="url(#mobileFlow)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="7 12"
              opacity="0.85"
            />

            <defs>
              <linearGradient id="mobileFlow" x1="0" y1="0" x2="0" y2="1">
                <stop stopColor="#22d3ee" />
                <stop offset="0.4" stopColor="#d946ef" />
                <stop offset="0.8" stopColor="#84cc16" />
                <stop offset="1" stopColor="#f97316" />
              </linearGradient>
            </defs>
          </svg>

          {steps.map((step, i) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: i * 0.06,
                }}
                whileHover={{
                  y: -2,
                }}
                className={`relative z-10 flex w-full ${
                  i % 2 === 0
                    ? "justify-start"
                    : "justify-end"
                }`}
              >
                
                {/* Content Wrapper */}
                <div className="flex max-w-[240px] flex-col items-center text-center">

                  {/* Icon Box */}
                  <div
                    className={`relative flex h-[82px] w-[82px] items-center justify-center rounded-[26px] bg-gradient-to-br ${step.gradient} p-[1px]`}
                  >
                    
                    {/* Inner */}
                    <div className="relative flex h-full w-full items-center justify-center rounded-[25px] bg-[#050816]">
                      
                      {/* Glow */}
                      <div
                        className={`absolute inset-0 rounded-[25px] bg-gradient-to-br ${step.gradient} opacity-20 blur-2xl`}
                      />

                      {/* Icon */}
                      <Icon className="relative h-8 w-8 text-white" />
                    </div>
                  </div>

                  {/* Text */}
                  <div className="mt-5">
                    
                    <h3 className="text-[24px] font-black tracking-tight text-white">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-[15px] leading-6 text-white/70">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}