import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="card-gradient-border relative overflow-hidden p-10 md:p-14 text-center">
          <div
            className="absolute inset-0 opacity-60 pointer-events-none"
            style={{ background: "radial-gradient(60% 80% at 50% 0%, oklch(0.62 0.235 295 / 0.35), transparent 70%)" }}
            aria-hidden
          />
          <div className="relative">
            <h3 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Ready to <span className="text-gradient">build with AI?</span>
            </h3>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Book a discovery call and see how AISmartLive can deliver measurable value
              for your business in weeks, not quarters.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-primary shadow-glow gap-2">
                  Book a Call <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/products">
                <Button size="lg" variant="outline">Explore Products</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
