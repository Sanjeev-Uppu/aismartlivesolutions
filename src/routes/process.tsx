import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { ProcessTimeline } from "@/components/site/ProcessTimeline";
import { CTA } from "@/components/site/CTA";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Process — AISmartLive" },
      { name: "description", content: "How we ship AI: Smart Analyzing, AI Development, Seamless Integration, and Continuous Optimization." },
      { property: "og:title", content: "Process — AISmartLive" },
      { property: "og:description", content: "Our four-step approach to delivering enterprise AI." },
      { property: "og:url", content: "/process" },
    ],
    links: [{ rel: "canonical", href: "/process" }],
  }),
  component: ProcessPage,
});

function ProcessPage() {
  return (
    <>
      <Section
        eyebrow="How We Work"
        title={<>A clear path from <span className="text-gradient">idea to impact</span></>}
        description="Four focused phases designed to ship value fast — and keep getting smarter."
      >
        <ProcessTimeline />
      </Section>
      <CTA />
    </>
  );
}
