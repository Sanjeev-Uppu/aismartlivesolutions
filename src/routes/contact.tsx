import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Section } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
} from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — AISmartLive" },
      {
        name: "description",
        content:
          "Get in touch with AISmartLive. Book a call or send us a message.",
      },
      { property: "og:title", content: "Contact — AISmartLive" },
      {
        property: "og:description",
        content: "Book a call or send us a message.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSending(true);

    setTimeout(() => {
      setSending(false);

      toast.success(
        "Message sent — we'll get back to you shortly."
      );

      (e.target as HTMLFormElement).reset();
    }, 700);
  };

  return (
    <>
      <Section
        eyebrow="Contact"
        title={
          <>
            Let's build something{" "}
            <span className="text-gradient">
              intelligent
            </span>
          </>
        }
        description="Tell us about your goals. We'll get back within one business day."
      >
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Form */}
          <form
            onSubmit={onSubmit}
            className="card-gradient-border p-6 md:p-8 lg:col-span-3 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>

                <Input
                  id="name"
                  required
                  placeholder="Jane Doe"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>

                <Input
                  id="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="company">Company</Label>

              <Input
                id="company"
                placeholder="Acme Inc."
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">
                How can we help?
              </Label>

              <Textarea
                id="message"
                required
                rows={5}
                placeholder="Tell us about your project…"
              />
            </div>

            <div className="flex flex-wrap gap-3">
              {/* Send Message */}
              <Button
                type="submit"
                disabled={sending}
                className="bg-gradient-primary shadow-glow"
              >
                {sending ? "Sending…" : "Send Message"}
              </Button>

              {/* Mail Communication */}
              <a href="mailto:aismartlivesolutions5@gmail.com">
                <Button
                  type="button"
                  variant="outline"
                  className="gap-2 border-border"
                >
                  <Mail className="h-4 w-4" />
                  Mail Us
                </Button>
              </a>

              {/* Call Button */}
              <a href="tel:+919494165326">
                <Button
                  type="button"
                  variant="outline"
                  className="gap-2 border-border"
                >
                  <Phone className="h-4 w-4" />
                  Call Now
                </Button>
              </a>
            </div>
          </form>

          {/* Contact Details */}
          <div className="lg:col-span-2 space-y-5">
            <div className="card-gradient-border p-6 space-y-5">
              {[
                {
                  Icon: Mail,
                  label: "Email",
                  value:
                    "aismartlivesolutions5@gmail.com",
                  link:
                    "mailto:aismartlivesolutions5@gmail.com",
                },
                {
                  Icon: Phone,
                  label: "Phone",
                  value: "+91 94941 65326",
                  link: "tel:+919494165326",
                },
                {
                  Icon: MapPin,
                  label: "Office",
                  value:
                    "50-121-36/1, TPT Colony, Balayya Sastri Layout, Seethammadara, Visakhapatnam, Andhra Pradesh 530013",
                  link:
                    "https://maps.google.com/?q=50-121-36/1,TPT+Colony,Balayya+Sastri+Layout,Seethammadara,Visakhapatnam,Andhra+Pradesh+530013",
                },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.link}
                  target={
                    c.label === "Office"
                      ? "_blank"
                      : undefined
                  }
                  rel="noreferrer"
                  className="flex items-start gap-3 transition hover:opacity-90"
                >
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-surface-elevated border border-border text-primary shrink-0">
                    <c.Icon className="h-4 w-4" />
                  </div>

                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">
                      {c.label}
                    </div>

                    <div className="text-sm mt-1 leading-relaxed">
                      {c.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Office Card */}
            <div className="card-gradient-border overflow-hidden">
              <div className="aspect-[4/3] relative grid-pattern">
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <div className="text-center">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary shadow-glow mx-auto">
                      <MapPin className="h-5 w-5 text-primary-foreground" />
                    </div>

                    <div className="mt-4 text-base font-semibold">
                      AISMARTLIVE SOLUTIONS
                    </div>

                    <div className="mt-2 text-xs md:text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                      Visakhapatnam, Andhra Pradesh,
                      India
                    </div>

                    <a
                      href="https://maps.google.com/?q=50-121-36/1,TPT+Colony,Balayya+Sastri+Layout,Seethammadara,Visakhapatnam,Andhra+Pradesh+530013"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Button
                        size="sm"
                        className="mt-5 bg-gradient-primary"
                      >
                        Open Location
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}