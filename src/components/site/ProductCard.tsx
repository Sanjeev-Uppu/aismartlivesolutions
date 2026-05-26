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
      initial={{
        opacity: 0,
        x: 450,
        scale: 0.9,
      }}
      animate={{
        // VISIBILITY
        opacity: [0, 1, 1, 1, 0],

        // RIGHT -> CENTER -> HOLD -> LEFT
        x: [450, 0, 0, 0, -450],

        // FLOATING EFFECT
        y: [20, -10, -10, -10, 20],

        // 3D EFFECT
        rotateY: [15, 0, 0, 0, -15],

        // SCALE
        scale: [0.9, 1, 1, 1, 0.9],
      }}
      transition={{
        duration: 12,

        // HOLD AT CENTER FOR 4 SECONDS
        times: [0, 0.18, 0.55, 0.75, 1],

        repeat: Infinity,
        ease: "linear",

        // CARD BY CARD FLOW
        delay: index * 2,
      }}
      whileHover={{
        scale: 1.04,
        y: -10,
        transition: {
          duration: 0.25,
        },
      }}
      style={{
        transformStyle: "preserve-3d",
        perspective: 2000,
      }}
      className="
        relative
        group
        rounded-3xl
        overflow-hidden
        w-full
        max-w-[420px]
        mx-auto
      "
    >
      {/* ROTATING GLOW */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          -inset-2
          rounded-[34px]
          bg-gradient-to-r
          from-cyan-500
          via-violet-500
          to-pink-500
          opacity-30
          blur-2xl
        "
      />

      {/* MAIN CARD */}
      <div
        className="
          relative
          overflow-hidden
          rounded-3xl
          border
          border-white/10
          bg-black/55
          backdrop-blur-2xl
          transition-all
          duration-500
          group-hover:border-cyan-400/50
          group-hover:shadow-[0_0_80px_rgba(34,211,238,0.28)]
        "
      >
        {/* IMAGE */}
        <div className="relative overflow-hidden bg-black/20">
          <motion.img
            src={image}
            alt={`${name} — ${tagline}`}
            width={800}
            height={600}
            loading="lazy"
            whileHover={{
              scale: 1.08,
            }}
            transition={{
              duration: 0.5,
            }}
            className="
              w-full
              h-[180px]
              sm:h-[220px]
              md:h-[250px]
              lg:h-[260px]
              object-cover
            "
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </div>

        {/* CONTENT */}
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
          {/* TAGLINE */}
          <motion.div
            animate={{
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: index * 0.3,
            }}
            className="
              text-[10px]
              sm:text-xs
              uppercase
              tracking-[0.22em]
              text-cyan-400
            "
          >
            {tagline}
          </motion.div>

          {/* TITLE */}
          <h3
            className="
              mt-2
              text-lg
              sm:text-xl
              md:text-2xl
              font-black
              tracking-tight
              text-white
            "
          >
            {name}
          </h3>

          {/* DESCRIPTION */}
          <p
            className="
              mt-3
              text-xs
              sm:text-sm
              leading-relaxed
              text-gray-300
            "
          >
            {description}
          </p>
        </div>
      </div>
    </motion.article>
  );
}