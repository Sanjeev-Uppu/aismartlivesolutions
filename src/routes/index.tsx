import { createFileRoute, Link } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { ProductCard } from "@/components/site/ProductCard";
import { ProcessTimeline } from "@/components/site/ProcessTimeline";
import { FeatureGrid } from "@/components/site/FeatureGrid";
import { CTA } from "@/components/site/CTA";
import { products } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import Clients from "./clients";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AISmartLive — Next-Gen AI Solutions for Enterprise" },
      {
        name: "description",
        content:
          "Enterprise-grade AI products and custom solutions to help businesses automate, create, and learn.",
      },
      {
        property: "og:title",
        content: "AISmartLive — Next-Gen AI Solutions",
      },
      {
        property: "og:description",
        content:
          "We craft intelligent products like Sense Minds 360, Alankara AI, and AstraVidya AI.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />

      {/* Products Section */}
      <Section
        id="products"
        eyebrow="Our Products"
        title={
          <>
            Intelligent products, built for{" "}
            <span className="text-gradient">real businesses</span>
          </>
        }
        description="A growing suite of AI products powering retail, education, and intelligent sensing."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <ProductCard key={p.name} {...p} index={i} />
          ))}
        </div>

        <div className="mt-10">
          <Link to="/products">
            <Button variant="outline" className="gap-2">
              All products
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </Section>

      {/* Process Section */}
      <Section
        eyebrow="Our Process"
        title={
          <>
            A clear path from{" "}
            <span className="text-gradient">idea to impact</span>
          </>
        }
        description="Four focused phases designed to ship value fast and keep improving."
      >
        <ProcessTimeline />
      </Section>

      {/* Features Section */}
      <Section
        eyebrow="Why AISmartLive"
        title={
          <>
            Enterprise capabilities,{" "}
            <span className="text-gradient">startup speed</span>
          </>
        }
        description="Everything you need to deploy production AI with confidence."
      >
        <FeatureGrid />
      </Section>

      {/* Clients Section */}
      <Clients />

      {/* CTA Section */}
      <CTA />
    </>
  );
}