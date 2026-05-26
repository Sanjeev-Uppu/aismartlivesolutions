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
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">

        {/* ================= DESKTOP ================= */}
        <div className="hidden md:flex items-center justify-center gap-6 lg:gap-10 flex-wrap">

          {items.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 60,
                  scale: 0.8,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.12,
                }}
                whileHover={{
                  y: -12,
                  scale: 1.03,
                }}
                className={`group relative ${
                  i % 2 === 0 ? "-mt-8" : "mt-8"
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

                {/* ================= SPHERE ================= */}
                <div className="relative flex items-center justify-center">

                  {/* ROTATING WHEEL SPHERE */}
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
                      h-[280px]
                      w-[280px]
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
                        "inset -30px -40px 80px rgba(255,255,255,0.02), inset 25px 25px 40px rgba(255,255,255,0.10), 0 40px 80px rgba(0,0,0,0.45)",
                      backdropFilter: "blur(30px)",
                    }}
                  >
                    {/* ROTATING GRADIENT */}
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
                    <div className="absolute left-[20%] top-[12%] h-20 w-24 rounded-full bg-white/25 blur-2xl" />

                    {/* OUTER RING */}
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

                    {/* INNER RING */}
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

                    {/* EXTRA WHEEL LINE */}
                    <motion.div
                      animate={{
                        rotate: 360,
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="
                        absolute
                        h-[2px]
                        w-full
                        bg-white/10
                      "
                    />

                    {/* EXTRA WHEEL LINE */}
                    <motion.div
                      animate={{
                        rotate: -360,
                      }}
                      transition={{
                        duration: 9,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="
                        absolute
                        h-full
                        w-[2px]
                        bg-white/10
                      "
                    />
                  </motion.div>

                  {/* ================= STATIC CONTENT ================= */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">

                    {/* ICON */}
                    <div
                      className={`relative mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${item.gradient}`}
                      style={{
                        boxShadow:
                          "0 25px 50px rgba(0,0,0,0.35)",
                      }}
                    >
                      <Icon className="h-7 w-7 text-white" />
                    </div>

                    {/* TEXT */}
                    <div className="relative flex flex-col items-center text-center">
                      <h3 className="text-[34px] font-black leading-tight tracking-tight text-white">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-[16px] font-medium text-white/75">
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
        <div className="flex flex-col gap-6 md:hidden">

          {items.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 30,
                  scale: 0.9,
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
                className={`relative flex ${
                  i % 2 === 0
                    ? "justify-start"
                    : "justify-end"
                }`}
              >
                {/* MOBILE GLOW */}
                <div
                  className={`absolute inset-0 rounded-full bg-gradient-to-br ${item.gradient} opacity-20 blur-3xl`}
                />

                {/* MOBILE SPHERE */}
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
                    relative
                    flex
                    h-[210px]
                    w-[210px]
                    items-center
                    justify-center
                    rounded-full
                    overflow-hidden
                    border
                    border-white/10
                  "
                >
                  {/* BACKGROUND */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-[0.14]`}
                  />

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
                    className="absolute inset-4 rounded-full border border-white/10"
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
                    className="absolute inset-8 rounded-full border border-white/[0.06]"
                  />

                  {/* STATIC CONTENT */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center px-5">

                    <div
                      className={`relative mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${item.gradient}`}
                    >
                      <Icon className="h-5 w-5 text-white" />
                    </div>

                    <h3 className="text-[28px] font-black leading-tight tracking-tight text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-[15px] font-medium text-white/75 text-center">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}