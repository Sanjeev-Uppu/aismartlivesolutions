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
import eswarImg from "@/assets/team/eswar.png";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

const stats = [
  { v: "3+", l: "AI Products" },
  { v: "50+", l: "Clients" },
  { v: "12+", l: "Industries" },
  { v: "99.9%", l: "Uptime" },
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
  {
    name: "Eswar",
    role: "GenAI Engineer",
    image: eswarImg,
  },


];

function AboutPage() {
  return (
    <>
      <Section
        eyebrow="About AISmartLive"
        title={
          <>
            Building the{" "}
            <span className="text-gradient">
              future of AI
            </span>
          </>
        }
        description="Next-generation AI products, automation systems, and intelligent enterprise solutions."
      >

        {/* ================= HERO ================= */}
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-4 sm:p-6 lg:p-10">

          {/* Ambient Lights */}
          <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
          <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-[120px]" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">

            {/* LEFT */}
            <div>

              {/* Label */}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs sm:text-sm text-white/70 backdrop-blur-xl">
                <div className="h-2 w-2 rounded-full bg-emerald-400" />
                AI Smart Live Solutions
              </div>

              {/* Heading */}
              <h2 className="mt-6 max-w-2xl text-3xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
                Designing the
                <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-lime-400 bg-clip-text text-transparent">
                  {" "}future{" "}
                </span>
                of intelligent business
              </h2>

              {/* Description */}
              <p className="mt-6 max-w-xl text-sm leading-7 text-white/70 sm:text-base md:text-lg md:leading-8">
                We build AI-powered products, enterprise solutions,
                and intelligent systems that automate workflows,
                improve efficiency, and accelerate growth.
              </p>

              {/* Stats */}
              <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">

                {stats.map((s) => (
                  <div
                    key={s.l}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-center backdrop-blur-xl sm:px-5 sm:py-5"
                  >
                    <div className="text-2xl font-black text-white sm:text-3xl">
                      {s.v}
                    </div>

                    <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/50 sm:text-xs">
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative">

              {/* Glow */}
              <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-cyan-500/20 via-fuchsia-500/10 to-lime-500/20 blur-3xl" />

              {/* Image */}
              <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-2 backdrop-blur-xl">

                <img
                  src={aboutImg}
                  alt="AI Team"
                  loading="lazy"
                  className="h-full w-full rounded-[24px] object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Floating Card */}
                <div className="absolute bottom-4 left-4 rounded-2xl border border-white/10 bg-black/30 px-4 py-3 backdrop-blur-xl sm:bottom-6 sm:left-6 sm:px-5 sm:py-4">

                  <div className="text-xs text-white/60 sm:text-sm">
                    Powered by
                  </div>

                  <div className="mt-1 text-lg font-bold text-white sm:text-xl">
                    AI + Innovation
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= TEAM ================= */}
        <div className="mt-24 sm:mt-28">

          {/* Heading */}
          <div className="text-center">

            <div className="inline-flex rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-xs text-white/70 backdrop-blur-xl sm:text-sm">
              Our Team
            </div>

            <h2 className="mt-6 text-3xl font-black text-white sm:text-5xl md:text-6xl">
              Minds Behind
              <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-lime-400 bg-clip-text text-transparent">
                {" "}AISmartLive
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/70 sm:text-base md:text-lg md:leading-8">
              A passionate team of AI engineers, developers,
              researchers, and creators building intelligent systems.
            </p>
          </div>

          {/* Team Grid */}
          <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 xl:grid-cols-4">

            {teamMembers.map((member, i) => (
              <div
                key={member.name}
                className={`group relative overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.03] backdrop-blur-xl ${
                  i % 2 === 0
                    ? "xl:mt-10"
                    : ""
                }`}
              >

                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-fuchsia-500/0 to-lime-500/0 opacity-0 transition-all duration-500 group-hover:from-cyan-500/10 group-hover:via-fuchsia-500/10 group-hover:to-lime-500/10 group-hover:opacity-100" />

                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="
                      aspect-[0.85]
                      w-full
                      object-cover
                      object-top
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    "
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="relative p-4 sm:p-5">

                  <h3 className="text-sm font-bold text-white sm:text-lg md:text-xl">
                    {member.name}
                  </h3>

                  <p className="mt-1 text-[11px] text-cyan-300 sm:text-sm">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <CTA />
    </>
  );
}