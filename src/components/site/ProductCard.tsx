import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function ProductCard({
  name,
  tagline,
  description,
  image,
  index = 0,
}: {
  name: string;
  tagline: string;
  description: string;
  image: string;
  index?: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="card-gradient-border group overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated"
    >
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={image}
          alt={`${name} — ${tagline}`}
          width={800}
          height={600}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-6 md:p-7">
        <div className="text-xs uppercase tracking-[0.18em] text-primary/90">{tagline}</div>
        <h3 className="mt-2 text-xl md:text-2xl font-semibold">{name}</h3>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{description}</p>
        <button className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors">
          View More
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </motion.article>
  );
}
