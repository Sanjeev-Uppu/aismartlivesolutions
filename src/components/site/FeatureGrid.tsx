import { motion } from "framer-motion";
import {
  Sparkles,
  Orbit,
  Radar,
  Wand2,
} from "lucide-react";

const items = [
  {
    title: "Automation",
    desc: "Smart AI workflows",
    icon: Sparkles,
    gradient: "from-pink-500 via-orange-400 to-yellow-300",
  },
  {
    title: "Integration",
    desc: "Seamless AI systems",
    icon: Orbit,
    gradient: "from-cyan-400 via-blue-500 to-violet-500",
  },
  {
    title: "Analytics",
    desc: "Real-time insights",
    icon: Radar,
    gradient: "from-lime-400 via-green-400 to-emerald-500",
  },
  {
    title: "Innovation",
    desc: "Future-ready AI",
    icon: Wand2,
    gradient: "from-fuchsia-500 via-pink-500 to-rose-400",
  },
];

export function FeatureGrid() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24">

      {/* BACKGROUND LIGHTS */}
      <div className="absolute left-[8%] top-[10%] h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute right-[8%] top-[20%] h-72 w-72 rounded-full bg-fuchsia-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">

        {/* ================= DESKTOP / TABLET ================= */}
        <div className="hidden md:flex items-center justify-center gap-6 lg:gap-10 flex-wrap">

          {items.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
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
                  delay: i * 0.1,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className={`group relative ${
                  i % 2 === 0 ? "-mt-6" : "mt-6"
                }`}
              >
                {/* OUTER GLOW */}
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 14,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className={`absolute -inset-3 rounded-full bg-gradient-to-br ${item.gradient} opacity-25 blur-3xl`}
                />

                {/* SPHERE WRAPPER */}
                <div className="relative flex items-center justify-center">

                  {/* ROTATING SPHERE */}
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
                      relative
                      flex
                      h-[260px]
                      w-[260px]
                      items-center
                      justify-center
                      rounded-full
                      overflow-hidden
                      border
                      border-white/10
                    "
                    style={{
                      background:
                        "radial-gradient(circle at 30% 28%, rgba(255,255,255,0.30), rgba(255,255,255,0.05) 42%, rgba(255,255,255,0.015) 72%)",
                      boxShadow:
                        "inset -25px -35px 70px rgba(255,255,255,0.02), inset 20px 20px 35px rgba(255,255,255,0.10), 0 35px 70px rgba(0,0,0,0.45)",
                      backdropFilter: "blur(30px)",
                    }}
                  >
                    {/* GRADIENT */}
                    <motion.div
                      animate={{
                        rotate: -360,
                      }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-[0.14]`}
                    />

                    {/* SHINE */}
                    <div className="absolute left-[20%] top-[12%] h-16 w-20 rounded-full bg-white/25 blur-2xl" />

                    {/* RINGS */}
                    <motion.div
                      animate={{
                        rotate: 360,
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute inset-5 rounded-full border border-white/10"
                    />

                    <motion.div
                      animate={{
                        rotate: -360,
                      }}
                      transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute inset-10 rounded-full border border-white/[0.06]"
                    />

                    {/* WHEEL LINE */}
                    <motion.div
                      animate={{
                        rotate: 360,
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute h-[2px] w-full bg-white/10"
                    />

                    {/* WHEEL LINE */}
                    <motion.div
                      animate={{
                        rotate: -360,
                      }}
                      transition={{
                        duration: 9,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute h-full w-[2px] bg-white/10"
                    />
                  </motion.div>

                  {/* STATIC CONTENT */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">

                    {/* ICON */}
                    <div
                      className={`relative mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br ${item.gradient}`}
                      style={{
                        boxShadow:
                          "0 20px 40px rgba(0,0,0,0.35)",
                      }}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>

                    {/* TEXT */}
                    <div className="relative flex flex-col items-center text-center">
                      <h3 className="text-[30px] font-black leading-tight tracking-tight text-white">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-[14px] font-medium text-white/70">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ================= MOBILE ================= */}
        <div className="flex flex-col items-center gap-6 md:hidden">

          {items.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 20,
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
                  flex
                  w-full
                  ${
                    i % 2 === 0
                      ? "justify-start pl-2"
                      : "justify-end pr-2"
                  }
                `}
              >
                {/* MOBILE GLOW */}
                <div
                  className={`absolute inset-0 rounded-full bg-gradient-to-br ${item.gradient} opacity-20 blur-3xl`}
                />

                {/* MOBILE SPHERE */}
                <div className="relative flex items-center justify-center">

                  {/* ROTATING CIRCLE */}
                  <motion.div
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="
                      relative
                      flex
                      h-[185px]
                      w-[185px]
                      items-center
                      justify-center
                      rounded-full
                      overflow-hidden
                      border
                      border-white/10
                    "
                    style={{
                      background:
                        "radial-gradient(circle at 30% 28%, rgba(255,255,255,0.28), rgba(255,255,255,0.04) 42%, rgba(255,255,255,0.01) 72%)",
                      backdropFilter: "blur(24px)",
                      boxShadow:
                        "inset -18px -24px 40px rgba(255,255,255,0.03), inset 14px 14px 28px rgba(255,255,255,0.08), 0 20px 45px rgba(0,0,0,0.4)",
                    }}
                  >
                    {/* GRADIENT */}
                    <motion.div
                      animate={{
                        rotate: -360,
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-[0.15]`}
                    />

                    {/* OUTER RING */}
                    <motion.div
                      animate={{
                        rotate: 360,
                      }}
                      transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute inset-4 rounded-full border border-white/10"
                    />

                    {/* INNER RING */}
                    <motion.div
                      animate={{
                        rotate: -360,
                      }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute inset-8 rounded-full border border-white/[0.06]"
                    />

                    {/* WHEEL LINE */}
                    <motion.div
                      animate={{
                        rotate: 360,
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute h-[1.5px] w-full bg-white/10"
                    />

                    {/* WHEEL LINE */}
                    <motion.div
                      animate={{
                        rotate: -360,
                      }}
                      transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute h-full w-[1.5px] bg-white/10"
                    />
                  </motion.div>

                  {/* STATIC CONTENT */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">

                    {/* ICON */}
                    <div
                      className={`relative mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${item.gradient}`}
                    >
                      <Icon className="h-5 w-5 text-white" />
                    </div>

                    {/* TEXT */}
                    <div className="text-center px-4">
                      <h3 className="text-[20px] font-black tracking-tight text-white">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-[12px] leading-5 text-white/70">
                        {item.desc}
                      </p>
                    </div>
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