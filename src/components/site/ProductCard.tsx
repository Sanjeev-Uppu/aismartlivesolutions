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
        scale: 0.7,
      }}
      animate={{
        opacity: 1,

        // RIGHT → CENTER → HOLD → LEFT → RETURN
        x: [350, 0, 0, -350, 0],

        // SMOOTH ORBIT CURVE
        y: [40, -20, -20, 40, 0],

        // 3D ROTATION
        rotateY: [25, 0, 0, -25, 0],
        rotateX: [8, 0, 0, 8, 0],

        scale: [0.8, 1, 1, 0.9, 1],
      }}
      transition={{
        duration: 12,

        // STOP AT CENTER FOR 2 SECONDS
        times: [0, 0.25, 0.42, 0.75, 1],

        repeat: Infinity,
        ease: "easeInOut",

        delay: index * 1.5,
      }}
      whileHover={{
        scale: 1.05,
        y: -10,
        transition: {
          duration: 0.3,
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
        h-full
      "
    >
      {/* MOVING GLOW */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          -inset-2
          rounded-[32px]
          bg-gradient-to-r
          from-cyan-500
          via-purple-500
          to-pink-500
          opacity-30
          blur-2xl
        "
      />

      {/* MAIN CARD */}
      <div
        className="
          relative
          rounded-3xl
          overflow-hidden
          border
          border-white/10
          bg-black/55
          backdrop-blur-xl
          transition-all
          duration-500
          group-hover:border-cyan-400/60
          group-hover:shadow-[0_0_70px_rgba(34,211,238,0.35)]
        "
      >
        {/* IMAGE */}
        <div className="overflow-hidden w-full bg-black/20">
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
              group-hover:scale-110
            "
          />
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
          <div
            className="
              text-[10px]
              sm:text-xs
              uppercase
              tracking-[0.2em]
              text-cyan-400
            "
          >
            {tagline}
          </div>

          {/* TITLE */}
          <h3
            className="
              mt-2
              text-lg
              sm:text-xl
              md:text-2xl
              font-bold
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
              text-gray-300
              leading-relaxed
            "
          >
            {description}
          </p>
        </div>
      </div>
    </motion.article>
  );
}