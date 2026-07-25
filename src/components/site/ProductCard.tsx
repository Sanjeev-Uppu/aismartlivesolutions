type ProductCardProps = {
  name: string;
  tagline: string;
  description: string;
  image: string;
};

export function ProductCard({
  name,
  tagline,
  description,
  image,
}: ProductCardProps) {
  return (
    <section className="w-full rounded-3xl border border-white/10 bg-white/[0.02] overflow-hidden">
      <div className="grid lg:grid-cols-2 items-center gap-12 p-8 lg:p-14">
        {/* Left */}
        <div>
          <p className="uppercase tracking-[0.25em] text-cyan-400 text-xs font-semibold">
            {tagline}
          </p>

          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-white">
            {name}
          </h2>

          <div className="w-20 h-1 rounded-full bg-cyan-500 mt-6 mb-8" />

          <p className="text-gray-300 leading-8 text-lg">
            {description}
          </p>
        </div>

        {/* Right */}
        <div>
          <img
            src={image}
            alt={name}
            className="w-full rounded-2xl object-cover shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}