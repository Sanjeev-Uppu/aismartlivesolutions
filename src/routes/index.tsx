import { createFileRoute, Link } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { ProductCard } from "@/components/site/ProductCard";
import { ProcessTimeline } from "@/components/site/ProcessTimeline";
import { FeatureGrid } from "@/components/site/FeatureGrid";
import { CTA } from "@/components/site/CTA";
import { products } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Clients from "./clients";

import homeImg from "@/assets/home.png";
import senseBro from "@/assets/sensebro.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "AISmartLive — Next-Gen AI Solutions for Enterprise",
      },
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
          "We craft intelligent products like SenseMinds 360, Alankara AI, and AstraVidya AI.",
      },
      {
        property: "og:url",
        content: "/",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "/",
      },
    ],
  }),

  component: Index,
});

function Index() {
  return (
    <>
      {/* =====================================================
          HOME / HERO IMAGE
          Large centered card - responsive and no overflow
          ===================================================== */}
      <section className="w-full px-4 py-6 sm:px-6 md:py-8 lg:px-8 lg:py-10">
  <div className="mx-auto w-full max-w-5xl overflow-hidden rounded-2xl border border-border/60 bg-background shadow-2xl">
    <img
      src={homeImg}
      alt="AISmartLive — Next-Generation AI Solutions"
      className="block h-auto w-full object-contain"
      loading="eager"
      fetchPriority="high"
      decoding="async"
    />
  </div>
</section>

      {/* =====================================================
          PRODUCTS
          ===================================================== */}
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
        <div className="space-y-16">
          {/* Featured Product */}
          <ProductCard {...products[0]} />

          {/* SenseMinds 360 Product Brochure */}
          <div className="mx-auto w-full max-w-6xl">
            <div className="overflow-hidden rounded-2xl border border-border/60 bg-background shadow-xl">
              <img
                src={senseBro}
                alt="SenseMinds 360 AI-Powered Industrial Predictive Maintenance and Smart Monitoring Platform"
                className="block h-auto w-full object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>

        {/* Explore More Button */}
        <div className="mt-12 flex justify-center">
          <Link to="/products">
            <Button size="lg" className="gap-2">
              Explore More
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </Section>

      {/* =====================================================
          PROCESS
          ===================================================== */}
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

      {/* =====================================================
          FEATURES
          ===================================================== */}
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

      {/* =====================================================
          CLIENTS
          ===================================================== */}
      <Clients />

      {/* =====================================================
          CTA
          ===================================================== */}
      <CTA />
    </>
  );
}