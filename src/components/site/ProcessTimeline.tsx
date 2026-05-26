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
    gradient: "from-cyan-400 via-blue-500 to-indigo-500",
  },
  {
    title: "Develop",
    desc: "Building intelligent systems",
    icon: Cpu,
    gradient: "from-violet-500 via-fuchsia-500 to-pink-500",
  },
  {
    title: "Integrate",
    desc: "Connecting real AI products",
    icon: PlugZap,
    gradient: "from-emerald-400 via-lime-500 to-green-500",
  },
  {
    title: "Optimize",
    desc: "Improving speed & scale",
    icon: Rocket,
    gradient: "from-orange-400 via-rose-500 to-pink-500",
  },
];

export function ProcessTimeline() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">

      {/* BACKGROUND LIGHTS */}
      <div className="absolute left-[8%] top-[10%] h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />
      <div className="absolute right-[8%] top-[20%] h-80 w-80 rounded-full bg-fuchsia-500/10 blur-[140px]" />
      <div className="absolute bottom-[10%] left-[40%] h-80 w-80 rounded-full bg-lime-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ================= DESKTOP ================= */}
        <div className="relative hidden md:flex items-center justify-between">

          {/* FLOW LINE */}
          <svg
            className="absolute left-0 top-[90px] w-full"
            height="160"
            viewBox="0 0 1400 160"
            fill="none"
            preserveAspectRatio="none"
          >
            {/* MAIN CURVE */}
            <path
              d="
                M60 80
                C220 -20, 360 180, 520 80
                S840 -20, 1000 80
                S1220 180, 1360 80
              "
              stroke="url(#flow)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="12 18"
              opacity="0.85"
            />

            {/* ANIMATED PARTICLE */}
            <motion.circle
              cx="0"
              cy="0"
              r="8"
              fill="#22d3ee"
              animate={{
                offsetDistance: ["0%", "100%"],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                offsetPath:
                  "path('M60 80 C220 -20, 360 180, 520 80 S840 -20, 1000 80 S1220 180, 1360 80')",
              }}
            />

            <defs>
              <linearGradient id="flow">
                <stop stopColor="#22d3ee" />
                <stop offset="0.3" stopColor="#8b5cf6" />
                <stop offset="0.6" stopColor="#d946ef" />
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
                  y: 80,
                  scale: 0.7,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.9,
                  delay: i * 0.15,
                  type: "spring",
                  stiffness: 80,
                }}
                whileHover={{
                  y: -18,
                  scale: 1.05,
                }}
                className={`relative z-10 flex w-full max-w-[270px] flex-col items-center text-center ${
                  i % 2 === 0
                    ? "-mt-10"
                    : "mt-10"
                }`}
              >

                {/* ORBIT GLOW */}
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className={`absolute -inset-4 rounded-full bg-gradient-to-br ${step.gradient} opacity-20 blur-3xl`}
                />

                {/* ORBIT RING */}
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="
                    absolute
                    top-[-12px]
                    flex
                    h-[128px]
                    w-[128px]
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                  "
                >
                  {/* SATELLITE */}
                  <div className="absolute top-0 h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_20px_#22d3ee]" />
                </motion.div>

                {/* MAIN CARD */}
                <motion.div
                  whileHover={{
                    rotateX: 8,
                    rotateY: -8,
                  }}
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                  className={`
                    relative
                    flex
                    h-[110px]
                    w-[110px]
                    items-center
                    justify-center
                    rounded-[36px]
                    bg-gradient-to-br
                    ${step.gradient}
                    p-[1px]
                    shadow-[0_20px_60px_rgba(0,0,0,0.45)]
                  `}
                >
                  {/* INNER */}
                  <div className="relative flex h-full w-full items-center justify-center rounded-[35px] bg-[#050816]/95 backdrop-blur-2xl overflow-hidden">

                    {/* MOVING SHINE */}
                    <motion.div
                      animate={{
                        x: ["-120%", "120%"],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
                    />

                    {/* ICON */}
                    <Icon className="relative z-10 h-10 w-10 text-white" />
                  </div>
                </motion.div>

                {/* TEXT */}
                <div className="mt-7">
                  <motion.h3
                    animate={{
                      textShadow: [
                        "0 0 0px rgba(255,255,255,0)",
                        "0 0 18px rgba(255,255,255,0.4)",
                        "0 0 0px rgba(255,255,255,0)",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.4,
                    }}
                    className="text-[32px] font-black tracking-tight text-white"
                  >
                    {step.title}
                  </motion.h3>

                  <p className="mt-3 text-[15px] leading-7 text-white/70">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ================= MOBILE ================= */}
        <div className="relative flex flex-col items-center gap-16 md:hidden">

          {/* VERTICAL FLOW */}
          <motion.div
            animate={{
              backgroundPosition: ["0% 0%", "0% 100%"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              top-0
              h-full
              w-[3px]
              rounded-full
              bg-gradient-to-b
              from-cyan-400
              via-fuchsia-500
              to-lime-400
              bg-[length:100%_300%]
            "
          />

          {steps.map((step, i) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                initial={{
                  opacity: 0,
                  y: 40,
                  scale: 0.85,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.12,
                }}
                className={`relative z-10 flex w-full ${
                  i % 2 === 0
                    ? "justify-start"
                    : "justify-end"
                }`}
              >
                <div className="flex max-w-[250px] flex-col items-center text-center">

                  {/* MOBILE ORBIT */}
                  <motion.div
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 12,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="
                      absolute
                      top-[-10px]
                      flex
                      h-[100px]
                      w-[100px]
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/10
                    "
                  >
                    <div className="absolute top-0 h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_18px_#22d3ee]" />
                  </motion.div>

                  {/* ICON BOX */}
                  <div
                    className={`
                      relative
                      flex
                      h-[88px]
                      w-[88px]
                      items-center
                      justify-center
                      rounded-[28px]
                      bg-gradient-to-br
                      ${step.gradient}
                      p-[1px]
                    `}
                  >
                    <div className="relative flex h-full w-full items-center justify-center rounded-[27px] bg-[#050816]">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  {/* TEXT */}
                  <div className="mt-5">
                    <h3 className="text-[26px] font-black tracking-tight text-white">
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