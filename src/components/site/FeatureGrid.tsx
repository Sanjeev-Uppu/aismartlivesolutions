import { motion } from "framer-motion";
import { Bot, Zap, Layers, BarChart3, ShieldCheck, Activity } from "lucide-react";
import { features } from "@/lib/site-data";

const icons = [Bot, Zap, Layers, BarChart3, ShieldCheck, Activity];

export function FeatureGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {features.map((f, i) => {
        const Icon = icons[i];
        return (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            className="card-gradient-border p-6 hover:-translate-y-0.5 transition-transform duration-300"
          >
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-surface-elevated border border-border text-primary">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-base font-semibold">{f.title}</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">{f.desc}</p>
          </motion.div>
        );
      })}
    </div>
  );
}
