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
    <section className="relative overflow-hidden py-20 sm:py-28">

      {/* BACKGROUND LIGHTS */}
      <div className="absolute left-[8%] top-[10%] h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute right-[8%] top-[20%] h-72 w-72 rounded-full bg-fuchsia-500/10 blur-[120px]" />
      <div className="absolute bottom-[10%] left-[40%] h-72 w-72 rounded-full bg-lime-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ================= DESKTOP / TABLET ================= */}
        <div className="relative hidden md:flex items-center justify-between gap-4">

          {/* FLOW LINE */}
          <svg
            className="absolute left-0 top-[70px] w-full"
            height="140"
            viewBox="0 0 1400 140"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="
                M60 70
                C220 -10, 360 150, 520 70
                S840 -10, 1000 70
                S1220 150, 1360 70
              "
              stroke="url(#flow)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="10 14"
              opacity="0.85"
            />

            {/* MOVING DOT */}
            <motion.circle
              cx="0"
              cy="0"
              r="7"
              fill="#22d3ee"
              animate={{
                offsetDistance: ["0%", "100%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                offsetPath:
                  "path('M60 70 C220 -10, 360 150, 520 70 S840 -10, 1000 70 S1220 150, 1360 70')",
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
                  y: 50,
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
                whileHover={{
                  y: -12,
                  scale: 1.04,
                }}
                className={`relative z-10 flex w-full max-w-[240px] flex-col items-center text-center ${
                  i % 2 === 0
                    ? "-mt-8"
                    : "mt-8"
                }`}
              >

                {/* GLOW */}
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className={`absolute -inset-3 rounded-full bg-gradient-to-br ${step.gradient} opacity-20 blur-3xl`}
                />

                {/* ORBIT RING */}
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 14,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="
                    absolute
                    top-[-8px]
                    flex
                    h-[110px]
                    w-[110px]
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                  "
                >
                  <div className="absolute top-0 h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_16px_#22d3ee]" />
                </motion.div>

                {/* ICON BOX */}
                <motion.div
                  whileHover={{
                    rotateX: 6,
                    rotateY: -6,
                  }}
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                  className={`
                    relative
                    flex
                    h-[95px]
                    w-[95px]
                    items-center
                    justify-center
                    rounded-[30px]
                    bg-gradient-to-br
                    ${step.gradient}
                    p-[1px]
                    shadow-[0_16px_45px_rgba(0,0,0,0.45)]
                  `}
                >
                  {/* INNER */}
                  <div className="relative flex h-full w-full items-center justify-center rounded-[29px] bg-[#050816]/95 overflow-hidden backdrop-blur-2xl">

                    {/* SHINE */}
                    <motion.div
                      animate={{
                        x: ["-120%", "120%"],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
                    />

                    {/* ICON */}
                    <Icon className="relative z-10 h-8 w-8 text-white" />
                  </div>
                </motion.div>

                {/* TEXT */}
                <div className="mt-5">
                  <h3 className="text-[26px] font-black tracking-tight text-white">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-[14px] leading-6 text-white/70">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ================= MOBILE ================= */}
        <div className="relative flex flex-col items-center gap-10 md:hidden">

          {/* THIN FLOW LINE */}
          <motion.div
            animate={{
              backgroundPosition: ["0% 0%", "0% 100%"],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              top-0
              h-full
              w-[2px]
              rounded-full
              bg-gradient-to-b
              from-cyan-400
              via-fuchsia-500
              to-lime-400
              bg-[length:100%_250%]
              opacity-70
            "
          />

          {steps.map((step, i) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                initial={{
                  opacity: 0,
                  y: 24,
                  scale: 0.92,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.08,
                }}
                className={`
                  relative
                  z-10
                  flex
                  w-full
                  ${
                    i % 2 === 0
                      ? "justify-start pl-2"
                      : "justify-end pr-2"
                  }
                `}
              >
                {/* WRAPPER */}
                <div className="flex w-[170px] flex-col items-center text-center">

                  {/* ORBIT */}
                  <motion.div
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="
                      absolute
                      top-[-8px]
                      flex
                      h-[72px]
                      w-[72px]
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/10
                    "
                  >
                    <div className="absolute top-0 h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_14px_#22d3ee]" />
                  </motion.div>

                  {/* ICON BOX */}
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                    }}
                    className={`
                      relative
                      flex
                      h-[64px]
                      w-[64px]
                      items-center
                      justify-center
                      rounded-[22px]
                      bg-gradient-to-br
                      ${step.gradient}
                      p-[1px]
                      shadow-[0_12px_35px_rgba(0,0,0,0.35)]
                    `}
                  >
                    <div className="relative flex h-full w-full items-center justify-center rounded-[21px] bg-[#050816]/95 overflow-hidden backdrop-blur-xl">

                      {/* SHINE */}
                      <motion.div
                        animate={{
                          x: ["-120%", "120%"],
                        }}
                        transition={{
                          duration: 2.2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
                      />

                      {/* ICON */}
                      <Icon className="relative z-10 h-6 w-6 text-white" />
                    </div>
                  </motion.div>

                  {/* TEXT */}
                  <div className="mt-3">
                    <h3 className="text-[18px] font-black tracking-tight text-white">
                      {step.title}
                    </h3>

                    <p className="mt-1 text-[12px] leading-5 text-white/65">
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