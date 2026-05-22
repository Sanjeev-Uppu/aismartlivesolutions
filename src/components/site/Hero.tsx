import { motion } from "framer-motion";

import homeImg from "@/assets/homeimg.png";
import heroImg from "@/assets/hero-ai.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero pt-20 md:pt-24 pb-14 md:pb-20">
      {/* Background Grid */}
      <div
        className="absolute inset-0 grid-pattern pointer-events-none opacity-70"
        aria-hidden
      />

      {/* Glow Effect */}
      <div
        className="absolute top-[-120px] left-1/2 -translate-x-1/2 h-[420px] w-[720px] rounded-full opacity-30 blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.68 0.24 300 / 0.55), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* ================= HERO CONTENT ================= */}
        <div className="text-center max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="
              text-4xl
              sm:text-5xl
              lg:text-6xl
              font-bold
              leading-[1.05]
              tracking-tight
            "
          >
            Empowering Businesses with{" "}
            <span className="text-gradient">
              Next-Gen AI Solutions
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="
              mt-5
              max-w-3xl
              mx-auto
              text-sm
              sm:text-base
              lg:text-lg
              text-muted-foreground
              leading-relaxed
            "
          >
            Building intelligent AI ecosystems with automation,
            innovation, GenAI, IoT, cybersecurity, and scalable
            enterprise solutions for the future.
          </motion.p>
        </div>

        {/* ================= IMAGE SHOWCASE ================= */}
        <div className="mt-12 md:mt-16 grid lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="
              group
              relative
              overflow-hidden
              rounded-3xl
              border
              border-primary/20
              bg-white/5
              backdrop-blur-md
              shadow-[0_0_40px_rgba(140,69,255,0.18)]
              h-full
              flex
            "
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-cyan-400/10 opacity-0 group-hover:opacity-100 transition duration-700" />

            <img
              src={homeImg}
              alt="AISmartLive Achievements"
              loading="eager"
              className="
                w-full
                h-full
                object-cover
                transition-transform
                duration-700
                group-hover:scale-[1.02]
              "
            />

            {/* Bottom Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-5">
               

              
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="
              group
              relative
              overflow-hidden
              rounded-3xl
              border
              border-primary/20
              bg-white/5
              backdrop-blur-md
              shadow-[0_0_40px_rgba(0,170,255,0.18)]
              h-full
              flex
            "
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/10 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition duration-700" />

            <img
              src={heroImg}
              alt="AISmartLive AI Technologies"
              loading="eager"
              className="
                w-full
                h-full
                object-cover
                transition-transform
                duration-700
                group-hover:scale-[1.02]
              "
            />

            {/* Bottom Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-5">
             
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}