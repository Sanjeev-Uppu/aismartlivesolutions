import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { ProductDetails } from "@/components/site/ProductDetails";
import { CTA } from "@/components/site/CTA";
import { products } from "@/lib/site-data";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      {
        title: "SenseMinds 360 — AISmartLive",
      },
      {
        name: "description",
        content:
          "Explore SenseMinds 360, an enterprise-grade Industrial AI Intelligence Platform for predictive maintenance, industrial safety, AI analytics, and real-time monitoring.",
      },
      {
        property: "og:title",
        content: "SenseMinds 360 — AISmartLive",
      },
      {
        property: "og:description",
        content:
          "Enterprise Industrial Intelligence Platform powered by AI.",
      },
      {
        property: "og:url",
        content: "/products",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "/products",
      },
    ],
  }),

  component: ProductsPage,
});

function ProductsPage() {
  return (
    <>
      <Section>

        <ProductDetails
          name={products[0].name}
          tagline={products[0].tagline}
          description={products[0].description}
        />

      </Section>

      <CTA />
    </>
  );
}