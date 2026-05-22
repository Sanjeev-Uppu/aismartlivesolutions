import { motion } from "framer-motion";
import clients from "@/assets/clients.png";

export default function Clients() {
  return (
    <section
      id="clients"
      className="py-16 md:py-24 bg-background"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1 text-xs sm:text-sm font-medium text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-primary" />
            Trusted Partners
          </span>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-6 mb-10 md:mb-14"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight leading-tight">
            Trusted by Growing Brands & Institutions
          </h2>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
            We collaborate with educational institutions, healthcare brands,
            retail businesses, and modern enterprises to build impactful
            AI-powered digital solutions that drive real-world growth.
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
    max-w-[220px]
    sm:max-w-sm
    md:max-w-md
    lg:max-w-xl
    mx-auto
    rounded-2xl
    border
    border-border
    shadow-lg
    object-contain
  "
/>
        </motion.div>
      </div>
    </section>
  );
}