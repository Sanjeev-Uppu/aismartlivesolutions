import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { CTA } from "@/components/site/CTA";
import aboutImg from "@/assets/about-team.jpg";

import akashImg from "@/assets/team/akash.png";
import gowthamImg from "@/assets/team/gowtham.png";
import jashwanthiImg from "@/assets/team/jashwanthi.png";
import suryaImg from "@/assets/team/surya.png";
import vineelaImg from "@/assets/team/vineela.png";
import yashwanthImg from "@/assets/team/yashwanth.png";
import rohitImg from "@/assets/team/rohit.png";
import hemanthImg from "@/assets/team/hemanth.png";
import sanjeevImg from "@/assets/team/sanjeev.png";
import mohanImg from "@/assets/team/mohan.png";

import { Target, Eye, Lightbulb, Rocket } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — AISmartLive" },
      {
        name: "description",
        content:
          "AI Smart Live Solutions Pvt Ltd is on a mission to bring next-gen AI to every business.",
      },
      { property: "og:title", content: "About — AISmartLive" },
      {
        property: "og:description",
        content: "Our mission, vision, and approach to AI transformation.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const pillars = [
  {
    icon: Target,
    title: "Mission",
    text: "Make enterprise-grade AI practical, ethical, and accessible for every business.",
  },
  {
    icon: Eye,
    title: "Vision",
    text: "A world where intelligent software amplifies every team and unlocks new possibilities.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    text: "We bet on bold ideas — and ship them in production, not slide decks.",
  },
  {
    icon: Rocket,
    title: "Transformation",
    text: "We partner end-to-end: from discovery to deployment to continuous optimization.",
  },
];

const stats = [
  { v: "3+", l: "Flagship AI Products" },
  { v: "50+", l: "Enterprise Clients" },
  { v: "12+", l: "Industries Served" },
  { v: "99.9%", l: "Production Uptime" },
];

const teamMembers = [
  {
    name: "Mohana Rao",
    role: "CTO",
    image: mohanImg,
  },
  {
    name: "Yashwanth",
    role: "AI & ML Engineer",
    image: yashwanthImg,
  },
  {
    name: "Akash",
    role: "AI & ML Engineer",
    image: akashImg,
  },
  {
    name: "Gowtham",
    role: "Data Scientist",
    image: gowthamImg,
  },
  {
    name: "Jashwanthi",
    role: "AI & ML Engineer",
    image: jashwanthiImg,
  },
  {
    name: "Surya",
    role: "Software Developer",
    image: suryaImg,
  },
  {
    name: "Vineela",
    role: "Business Associate",
    image: vineelaImg,
  },
  {
    name: "Rohit",
    role: "GenAI Engineer",
    image: rohitImg,
  },
  {
    name: "Hemanth",
    role: "GenAI Engineer",
    image: hemanthImg,
  },
  {
    name: "Sanjeev",
    role: "GenAI Engineer",
    image: sanjeevImg,
  },
];

function AboutPage() {
  return (
    <>
      <Section
        eyebrow="About AISmartLive"
        title={
          <>
            Building the <span className="text-gradient">AI fabric</span> of
            modern business
          </>
        }
        description="AI Smart Live Solutions Pvt Ltd designs and ships AI products and bespoke solutions that move the needle — measured in revenue, time saved, and customers delighted."
      >
        {/* About Section */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="card-gradient-border overflow-hidden">
            <img
              src={aboutImg}
              alt="AI engineering team"
              width={1200}
              height={800}
              loading="lazy"
              className="w-full h-auto"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {pillars.map((p) => (
              <div key={p.title} className="card-gradient-border p-6">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-primary shadow-glow">
                  <p.icon className="h-5 w-5 text-primary-foreground" />
                </div>

                <h3 className="mt-4 font-semibold">{p.title}</h3>

                <p className="mt-1.5 text-sm text-muted-foreground">
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-5">
          {stats.map((s) => (
            <div
              key={s.l}
              className="card-gradient-border p-5 md:p-6 text-center"
            >
              <div className="text-2xl md:text-4xl font-semibold text-gradient">
                {s.v}
              </div>

              <div className="mt-1 text-[10px] md:text-xs uppercase tracking-wider text-muted-foreground">
                {s.l}
              </div>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div className="mt-20 md:mt-24">
          <div className="text-center mb-10 md:mb-12">
            <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-primary">
              Our Team
            </p>

            <h2 className="mt-3 text-2xl md:text-4xl font-bold">
              The Minds Behind The Innovation
            </h2>

            <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
              Meet the passionate team driving AI innovation, building smart
              solutions, and transforming ideas into impactful products.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="card-gradient-border p-3 md:p-4 text-center group"
              >
                <div className="relative aspect-square overflow-hidden rounded-2xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="
                      w-full
                      h-full
                      object-cover
                      object-top
                      transition-transform
                      duration-500
                      group-hover:scale-105
                    "
                  />
                </div>

                <h3 className="mt-3 text-sm md:text-lg font-semibold leading-tight">
                  {member.name}
                </h3>

                <p className="mt-1 text-[11px] md:text-sm text-primary leading-tight">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <CTA />
    </>
  );
}