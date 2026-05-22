import { motion } from "framer-motion";
import { Search, Cpu, Plug, TrendingUp } from "lucide-react";
import { processSteps } from "@/lib/site-data";

const icons = [Search, Cpu, Plug, TrendingUp];

export function ProcessTimeline() {
  return (
    <div className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <div
        className="hidden lg:block absolute top-10 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, oklch(0.62 0.235 295 / 0.5), transparent)" }}
        aria-hidden
      />
      {processSteps.map((step, i) => {
        const Icon = icons[i];
        return (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="card-gradient-border p-6 relative"
          >
            <div className="flex items-center justify-between">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
                <Icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xs font-mono text-muted-foreground">0{i + 1}</span>
            </div>
            <h3 className="mt-5 text-lg font-semibold">{step.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{step.desc}</p>
          </motion.div>
        );
      })}
    </div>
  );
}
