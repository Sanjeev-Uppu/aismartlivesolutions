import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { ProductCard } from "@/components/site/ProductCard";
import { CTA } from "@/components/site/CTA";
import { products } from "@/lib/site-data";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — AISmartLive" },
      { name: "description", content: "Explore Alankara AI, AstraVidya AI, and SenseMinds 360 — production-ready AI products from AISmartLive." },
      { property: "og:title", content: "Products — AISmartLive" },
      { property: "og:description", content: "A growing suite of AI products built for the enterprise." },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <>
      <Section
        eyebrow="Our Products"
        title={<>Intelligent products, <span className="text-gradient">production ready</span></>}
        description="Each product is built on the same enterprise-grade foundation — secure, scalable, and easy to integrate."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <ProductCard key={p.name} {...p} index={i} />
          ))}
        </div>
      </Section>
      <CTA />
    </>
  );
}
