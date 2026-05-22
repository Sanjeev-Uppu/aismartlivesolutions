import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { CTA } from "@/components/site/CTA";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/site-data";

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title: "FAQs — AISmartLive" },
      { name: "description", content: "Answers to common questions about working with AISmartLive on AI products and solutions." },
      { property: "og:title", content: "FAQs — AISmartLive" },
      { property: "og:description", content: "Engagement, security, support and more." },
      { property: "og:url", content: "/faqs" },
    ],
    links: [{ rel: "canonical", href: "/faqs" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }),
    }],
  }),
  component: FaqsPage,
});

function FaqsPage() {
  return (
    <>
      <Section
        eyebrow="FAQs"
        title={<>Questions, <span className="text-gradient">answered</span></>}
        description="Everything you need to know before partnering with us."
      >
        <div className="card-gradient-border p-2 md:p-4 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="text-left text-base md:text-lg font-medium hover:no-underline px-4">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground px-4">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>
      <CTA />
    </>
  );
}
