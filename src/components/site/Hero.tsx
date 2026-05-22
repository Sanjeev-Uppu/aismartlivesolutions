import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Boxes, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

import heroImg from "@/assets/hero-ai.jpg";
import homeImg from "@/assets/homeimg.png";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 md:pt-40 pb-20 md:pb-24 bg-gradient-hero">
      {/* Background Effects */}
      <div
        className="absolute inset-0 grid-pattern pointer-events-none"
        aria-hidden
      />

      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 h-[520px] w-[900px] rounded-full opacity-50 pointer-events-none"
        style={{
          background:
            "radial-gradient(closest-side, oklch(0.62 0.235 295 / 0.55), transparent 70%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3 py-1.5 text-xs font-medium text-muted-foreground"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-glow" />
              Next-Gen AI · Built for the Enterprise
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight"
            >
              Empowering Businesses with{" "}
              <span className="text-gradient">
                Next-Gen AI Solutions
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="mt-6 max-w-2xl text-base md:text-lg text-muted-foreground"
            >
              We craft intelligent products like Sense Minds 360,
              Alankara AI, and AstraVidya AI to redefine how businesses
              automate, create, and learn.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-primary hover:opacity-95 shadow-glow gap-2"
                >
                  Get in Touch <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>

              <Link to="/products">
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 border-border"
                >
                  <Boxes className="h-4 w-4" />
                  View Products
                </Button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 grid grid-cols-3 gap-6 max-w-md"
            >
              {[
                { v: "3+", l: "AI Products" },
                { v: "50+", l: "Enterprise Clients" },
                { v: "99.9%", l: "Uptime SLA" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-2xl md:text-3xl font-semibold">
                    {s.v}
                  </div>

                  <div className="text-xs text-muted-foreground mt-1">
                    {s.l}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="card-gradient-border overflow-hidden shadow-elevated">
              <img
                src={heroImg}
                alt="AI neural network visualization"
                width={1600}
                height={1024}
                className="w-full h-auto rounded-[inherit]"
              />
            </div>
          </motion.div>
        </div>

        {/* Achievement Section */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-14 md:mt-16"
        >
          {/* Heading */}
          <div className="text-center mb-6 md:mb-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1.5 text-[11px] md:text-xs text-primary">
              <Trophy className="h-3.5 w-3.5" />
              Achievements & Recognition
            </div>

            <h2 className="mt-4 text-xl md:text-3xl font-bold leading-tight">
              Recognized Across{" "}
              <span className="text-gradient">
                National Innovation Platforms
              </span>
            </h2>

            <p className="mt-3 max-w-2xl mx-auto text-xs md:text-sm text-muted-foreground">
              Our innovations and AI-driven solutions have been recognized
              in hackathons and startup ecosystems across India.
            </p>
          </div>

          {/* Achievement Image */}
         {/* Achievement Image */}
<div className="card-gradient-border overflow-hidden shadow-elevated max-w-4xl mx-auto">
  <img
    src={homeImg}
    alt="AISmartLive Achievements"
    loading="lazy"
    className="
      w-full
      h-auto
      object-contain
      rounded-[inherit]
      transition-transform
      duration-500
      hover:scale-[1.01]
    "
  />
</div>
        </motion.div>
      </div>
    </section>
  );
}