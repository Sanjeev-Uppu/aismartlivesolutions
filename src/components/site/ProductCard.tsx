import { motion } from "framer-motion";

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
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        card-gradient-border
        group
        overflow-hidden
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-elevated
        rounded-2xl
        h-full
        flex
        flex-col
      "
    >
      {/* Image Section */}
      <div
        className="
          overflow-hidden
          w-full
          bg-black/20
        "
      >
        <img
          src={image}
          alt={`${name} — ${tagline}`}
          width={800}
          height={600}
          loading="lazy"
          className="
            w-full
            h-[180px]
            sm:h-[220px]
            md:h-[250px]
            lg:h-[260px]
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
          "
        />
      </div>

      {/* Content */}
      <div
        className="
          p-4
          sm:p-5
          md:p-6
          flex
          flex-col
          flex-1
        "
      >
        {/* Tagline */}
        <div
          className="
            text-[10px]
            sm:text-xs
            uppercase
            tracking-[0.18em]
            text-primary/90
          "
        >
          {tagline}
        </div>

        {/* Title */}
        <h3
          className="
            mt-2
            text-lg
            sm:text-xl
            md:text-2xl
            font-semibold
            leading-tight
          "
        >
          {name}
        </h3>

        {/* Description */}
        <p
          className="
            mt-3
            text-xs
            sm:text-sm
            text-muted-foreground
            leading-relaxed
          "
        >
          {description}
        </p>
      </div>
    </motion.article>
  );
}