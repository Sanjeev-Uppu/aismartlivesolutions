import { motion } from "framer-motion";
import clients from "@/assets/clients.png";

export default function Clients() {
  return (
    <section
      id="clients"
      className="relative overflow-hidden py-20 md:py-28"
    >
      {/* Ambient Lights */}
      <div className="absolute left-[10%] top-[20%] h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute right-[10%] top-[30%] h-72 w-72 rounded-full bg-fuchsia-500/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-medium text-white/70 backdrop-blur-xl sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            Trusted Partners
          </span>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-8 mb-12 max-w-5xl text-center"
        >
          <h2 className="text-3xl font-black leading-tight text-white sm:text-5xl md:text-6xl">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-lime-400 bg-clip-text text-transparent">
              Growing Brands
            </span>{" "}
            & Institutions
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-white/70">
            We collaborate with educational institutions,
            healthcare brands, retail businesses, and modern
            enterprises to build impactful AI-powered digital
            solutions that drive real-world growth.
          </p>
        </motion.div>

        {/* Clients Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <img
            src={clients}
            alt="Trusted Clients"
            className="
              w-full
              max-w-[360px]
              sm:max-w-[520px]
              md:max-w-[760px]
              lg:max-w-[1000px]
              xl:max-w-[1200px]

              h-auto

              rounded-3xl

              shadow-[0_30px_80px_rgba(0,0,0,0.35)]

              transition-transform
              duration-500
              hover:scale-[1.02]
            "
          />
        </motion.div>
      </div>
    </section>
  );
}