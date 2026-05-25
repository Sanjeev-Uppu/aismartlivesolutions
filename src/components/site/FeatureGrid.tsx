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
        <div className="hidden md:flex items-center justify-center gap-4 lg:gap-8 flex-wrap">

          {items.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
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
                  delay: i * 0.08,
                }}
                whileHover={{
                  y: -12,
                  scale: 1.04,
                  rotateY: 10,
                  rotateX: -8,
                }}
                style={{
                  transformStyle: "preserve-3d",
                }}
                className={`group relative ${
                  i % 2 === 0
                    ? "-mt-8"
                    : "mt-8"
                }`}
              >
                
                {/* Glow */}
                <div
                  className={`absolute inset-0 rounded-full bg-gradient-to-br ${item.gradient} opacity-25 blur-3xl transition-all duration-500 group-hover:opacity-50`}
                />

                {/* Sphere */}
                <div
                  className="relative flex h-[280px] w-[280px] flex-col items-center justify-center rounded-full overflow-hidden border border-white/10"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 28%, rgba(255,255,255,0.30), rgba(255,255,255,0.05) 42%, rgba(255,255,255,0.015) 72%)",
                    boxShadow:
                      "inset -30px -40px 80px rgba(255,255,255,0.02), inset 25px 25px 40px rgba(255,255,255,0.10), 0 40px 80px rgba(0,0,0,0.45)",
                    backdropFilter: "blur(30px)",
                  }}
                >
                  
                  {/* Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-[0.13]`}
                  />

                  {/* Shine */}
                  <div className="absolute left-[20%] top-[12%] h-20 w-24 rounded-full bg-white/25 blur-2xl" />

                  {/* Rings */}
                  <div className="absolute inset-5 rounded-full border border-white/10" />
                  <div className="absolute inset-10 rounded-full border border-white/[0.05]" />

                  {/* Icon */}
                  <div
                    className={`relative mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${item.gradient}`}
                    style={{
                      boxShadow:
                        "0 25px 50px rgba(0,0,0,0.35)",
                    }}
                  >
                    <Icon className="h-7 w-7 text-white" />
                  </div>

                  {/* Text */}
                  <div className="relative flex flex-col items-center text-center">
                    
                    <h3 className="text-[34px] font-black leading-tight tracking-tight text-white">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-[16px] font-medium text-white/75">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ================= MOBILE ================= */}
        <div className="flex flex-col gap-2 md:hidden">

          {items.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 24,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.08,
                }}
                className={`relative flex ${
                  i % 2 === 0
                    ? "justify-start"
                    : "justify-end"
                }`}
              >
                
                {/* Glow */}
                <div
                  className={`absolute inset-0 rounded-full bg-gradient-to-br ${item.gradient} opacity-20 blur-3xl`}
                />

                {/* Sphere */}
                <motion.div
                  whileHover={{
                    scale: 1.03,
                  }}
                  className="relative flex h-[210px] w-[210px] flex-col items-center justify-center rounded-full overflow-hidden border border-white/10"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 28%, rgba(255,255,255,0.30), rgba(255,255,255,0.05) 42%, rgba(255,255,255,0.015) 72%)",
                    boxShadow:
                      "inset -20px -30px 60px rgba(255,255,255,0.03), inset 20px 20px 40px rgba(255,255,255,0.08), 0 30px 70px rgba(0,0,0,0.45)",
                    backdropFilter: "blur(30px)",
                  }}
                >
                  
                  {/* Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-[0.14]`}
                  />

                  {/* Shine */}
                  <div className="absolute left-[22%] top-[14%] h-12 w-16 rounded-full bg-white/25 blur-xl" />

                  {/* Rings */}
                  <div className="absolute inset-4 rounded-full border border-white/10" />
                  <div className="absolute inset-8 rounded-full border border-white/[0.05]" />

                  {/* Icon */}
                  <div
                    className={`relative mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${item.gradient}`}
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </div>

                  {/* Text */}
                  <div className="relative flex flex-col items-center text-center px-5">
                    
                    <h3 className="text-[28px] font-black leading-tight tracking-tight text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-[15px] font-medium text-white/75">
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