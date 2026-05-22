import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {(eyebrow || title || description) && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl mb-12 md:mb-16"
          >
            {eyebrow && (
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-glow" />
                {eyebrow}
              </span>
            )}
            {title && (
              <h2 className="mt-4 text-3xl md:text-5xl font-semibold leading-tight">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-4 text-base md:text-lg text-muted-foreground">{description}</p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
