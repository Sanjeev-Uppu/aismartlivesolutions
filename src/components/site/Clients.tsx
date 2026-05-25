import { motion } from "framer-motion";
import clients from "@/assets/clients.png";

export default function Clients() {
  return (
    <section
      id="clients"
      className="relative overflow-hidden py-20 md:py-28"
    >

      {/* ================= AMBIENT LIGHTS ================= */}
      <div className="absolute left-[10%] top-[20%] h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="absolute right-[10%] top-[30%] h-72 w-72 rounded-full bg-fuchsia-500/10 blur-[120px]" />

      {/* ================= CONTAINER ================= */}
      <div className="mx-auto w-full max-w-[1900px] px-2 sm:px-4 lg:px-8">

        {/* ================= TOP BADGE ================= */}
        <motion.div
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
            duration: 0.5,
          }}
          className="flex justify-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-xs font-medium text-white/70 backdrop-blur-xl sm:text-sm">

            <span className="h-2 w-2 rounded-full bg-cyan-400" />

            Trusted Partners
          </span>
        </motion.div>

        {/* ================= HEADING ================= */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
          }}
          className="mx-auto mt-7 mb-10 sm:mb-16 max-w-5xl text-center"
        >
          <h2 className="text-3xl font-black tracking-tight leading-tight text-white sm:text-5xl md:text-6xl">
            Trusted by
            <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-lime-400 bg-clip-text text-transparent">
              {" "}Growing Brands{" "}
            </span>
            & Institutions
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-white/70 sm:text-base md:text-lg md:leading-8">
            We collaborate with educational institutions,
            healthcare brands, retail businesses,
            and modern enterprises to build impactful
            AI-powered digital solutions that drive growth.
          </p>
        </motion.div>

        {/* ================= CLIENTS SHOWCASE ================= */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.96,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
          }}
          className="relative flex justify-center overflow-hidden rounded-[28px] sm:rounded-[40px]"
        >

          {/* Glow */}
          <div className="absolute inset-0 rounded-[28px] sm:rounded-[40px] bg-gradient-to-br from-cyan-500/10 via-fuchsia-500/10 to-lime-500/10 blur-3xl" />

          {/* Wrapper */}
          <div
            className="
              relative
              w-full
              overflow-hidden
              rounded-[28px]
              sm:rounded-[40px]

              border
              border-white/10

              bg-white

              p-0

              backdrop-blur-xl
            "
          >

            {/* IMAGE */}
            <img
              src={clients}
              alt="Trusted Clients"
              className="
                w-full

                h-auto

                min-h-[520px]
                sm:min-h-[700px]
                md:min-h-[850px]
                lg:min-h-[950px]

                object-cover

                rounded-[24px]
                sm:rounded-[32px]

                bg-white

                shadow-[0_40px_120px_rgba(0,0,0,0.55)]

                transition-all
                duration-700
                hover:scale-[1.01]
              "
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}