import { motion, AnimatePresence } from "framer-motion";
import {
  Brain,
  Sparkles,
  Code2,
  BriefcaseBusiness,
  Video,
  PenTool,
  Mail,
  ArrowUpRight,
  ArrowLeft,
  Clock3,
  GraduationCap,
  BadgeIndianRupee,
} from "lucide-react";

import { useState } from "react";

const careers = [
  {
    icon: Brain,
    role: "AI/ML Intern",
    duration: "6 Months Internship",
    stipend: "Up to ₹10K/month",
    type: "Fresher Friendly",
    gradient:
      "from-cyan-400 via-blue-500 to-indigo-500",

    skills: [
      "Python",
      "Machine Learning",
      "Deep Learning",
      "TensorFlow",
      "Data Analysis",
    ],

    short:
      "Build intelligent AI systems.",

    description:
      "Work on real-world AI models, automation systems, predictive analytics, and intelligent applications with experienced engineers.",

    jd: [
      "Build and train ML models",
      "Work with datasets and preprocessing",
      "Develop AI automation workflows",
      "Collaborate with AI engineering team",
      "Research modern AI technologies",
    ],
  },

  {
    icon: Sparkles,
    role: "Generative AI Intern",
    duration: "6 Months Internship",
    stipend: "Up to ₹10K/month",
    type: "Fresher Friendly",
    gradient:
      "from-fuchsia-500 via-pink-500 to-rose-500",

    skills: [
      "LLMs",
      "LangChain",
      "RAG",
      "Prompt Engineering",
      "OpenAI APIs",
    ],

    short:
      "Create modern GenAI applications.",

    description:
      "Build enterprise-grade AI assistants, AI agents, RAG systems, and modern GenAI workflows using LLM ecosystems.",

    jd: [
      "Build RAG pipelines",
      "Integrate OpenAI APIs",
      "Create AI agents",
      "Prompt engineering",
      "Optimize LLM workflows",
    ],
  },

  {
    icon: Code2,
    role: "Full Stack Intern",
    duration: "6 Months Internship",
    stipend: "Up to ₹10K/month",
    type: "Fresher Friendly",
    gradient:
      "from-emerald-400 via-green-500 to-lime-500",

    skills: [
      "React",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "REST APIs",
    ],

    short:
      "Develop scalable AI platforms.",

    description:
      "Create production-grade full stack applications, APIs, dashboards, and modern interfaces for AI-driven products.",

    jd: [
      "Build frontend interfaces",
      "Develop backend APIs",
      "Database integration",
      "Deploy scalable systems",
      "Optimize application performance",
    ],
  },

  {
    icon: PenTool,
    role: "UI/UX Designer",
    duration: "6 Months Internship",
    stipend: "Up to ₹10K/month",
    type: "Fresher Friendly",
    gradient:
      "from-orange-400 via-pink-500 to-rose-500",

    skills: [
      "Figma",
      "Wireframing",
      "Design Systems",
      "User Research",
      "Prototyping",
    ],

    short:
      "Design next-level AI interfaces.",

    description:
      "Craft premium UI/UX experiences and modern design systems for AI-driven web and mobile platforms.",

    jd: [
      "Design modern interfaces",
      "Create design systems",
      "Build interactive prototypes",
      "Improve user experience",
      "Collaborate with developers",
    ],
  },
];

export default function Careers() {
  const [selectedRole, setSelectedRole] =
    useState<(typeof careers)[0] | null>(null);

  return (
    <section className="relative overflow-hidden py-20 sm:py-28">

      {/* Ambient Lights */}
      <div className="absolute left-[10%] top-[10%] h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute right-[10%] top-[30%] h-72 w-72 rounded-full bg-fuchsia-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">

        {/* ================= HERO ================= */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
          }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-xs text-white/70 backdrop-blur-xl sm:text-sm">
            
            <div className="h-2 w-2 rounded-full bg-emerald-400" />

            Careers at AISmartLive
          </div>

          <h2 className="mx-auto mt-7 max-w-5xl text-4xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">
            Start your
            <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-lime-400 bg-clip-text text-transparent">
              {" "}AI career{" "}
            </span>
            journey
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-sm leading-8 text-white/70 sm:text-base md:text-lg">
            Explore internship opportunities and gain real-world
            experience building intelligent AI systems and products.
          </p>
        </motion.div>

        {/* ================= CONTENT ================= */}
        <AnimatePresence mode="wait">

          {!selectedRole ? (

            /* ================= GRID ================= */
            <motion.div
              key="grid"
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              className="mt-20 grid grid-cols-2 gap-4 md:grid-cols-2 xl:grid-cols-4"
            >

              {careers.map((career, index) => {
                const Icon = career.icon;

                return (
                  <motion.div
                    key={career.role}
                    initial={{
                      opacity: 0,
                      y: 30,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.07,
                    }}
                    whileHover={{
                      y: -5,
                    }}
                    className="group relative overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.03] p-[1px]"
                  >

                    {/* Border */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${career.gradient} opacity-60`}
                    />

                    {/* Inner */}
                    <div className="relative h-full rounded-[25px] bg-[#050816]/95 p-4 sm:p-5">

                      {/* Glow */}
                      <div
                        className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${career.gradient} opacity-20 blur-3xl`}
                      />

                      {/* Top */}
                      <div className="relative flex items-start justify-between">

                        {/* Icon */}
                        <div
                          className={`flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${career.gradient}`}
                        >
                          <Icon className="h-6 w-6 text-white" />
                        </div>

                        {/* Arrow */}
                        <button
                          onClick={() =>
                            setSelectedRole(career)
                          }
                          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:scale-105"
                        >
                          <ArrowUpRight className="h-5 w-5 text-white/80" />
                        </button>
                      </div>

                      {/* Content */}
                      <div className="relative mt-6">

                        <h3 className="text-lg font-black leading-tight text-white sm:text-2xl">
                          {career.role}
                        </h3>

                        <p className="mt-3 text-xs leading-6 text-white/70 sm:text-sm">
                          {career.short}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

          ) : (

            /* ================= DETAILS PAGE ================= */
            <motion.div
              key="details"
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              transition={{
                duration: 0.45,
              }}
              className="mx-auto mt-20 max-w-5xl"
            >

              <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] p-[1px]">

                {/* Border */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${selectedRole.gradient} opacity-60`}
                />

                {/* Inner */}
                <div className="relative rounded-[35px] bg-[#050816]/95 p-6 sm:p-10">

                  {/* Glow */}
                  <div
                    className={`absolute right-0 top-0 h-72 w-72 rounded-full bg-gradient-to-br ${selectedRole.gradient} opacity-20 blur-[120px]`}
                  />

                  {/* Back Button */}
                  <button
                    onClick={() =>
                      setSelectedRole(null)
                    }
                    className="relative mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/70 transition-all duration-300 hover:bg-white/[0.05]"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Back
                  </button>

                  {/* Header */}
                  <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

                    <div className="flex items-center gap-5">

                      {/* Icon */}
                      <div
                        className={`flex h-20 w-20 items-center justify-center rounded-[28px] bg-gradient-to-br ${selectedRole.gradient}`}
                      >
                        <selectedRole.icon className="h-10 w-10 text-white" />
                      </div>

                      {/* Title */}
                      <div>

                        <h2 className="text-3xl font-black text-white sm:text-5xl">
                          {selectedRole.role}
                        </h2>

                        <p className="mt-2 text-sm text-cyan-300 sm:text-base">
                          {selectedRole.type}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Meta */}
                  <div className="relative mt-10 grid gap-4 sm:grid-cols-3">

                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                      <Clock3 className="h-5 w-5 text-cyan-300" />

                      <p className="mt-3 text-sm text-white/60">
                        Duration
                      </p>

                      <h4 className="mt-1 text-lg font-bold text-white">
                        {selectedRole.duration}
                      </h4>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                      <BadgeIndianRupee className="h-5 w-5 text-lime-300" />

                      <p className="mt-3 text-sm text-white/60">
                        Stipend
                      </p>

                      <h4 className="mt-1 text-lg font-bold text-white">
                        {selectedRole.stipend}
                      </h4>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                      <GraduationCap className="h-5 w-5 text-fuchsia-300" />

                      <p className="mt-3 text-sm text-white/60">
                        Eligibility
                      </p>

                      <h4 className="mt-1 text-lg font-bold text-white">
                        Freshers
                      </h4>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="relative mt-10">

                    <h3 className="text-2xl font-bold text-white">
                      Role Overview
                    </h3>

                    <p className="mt-5 text-base leading-8 text-white/70">
                      {selectedRole.description}
                    </p>
                  </div>

                  {/* JD */}
                  <div className="relative mt-12">

                    <h3 className="text-2xl font-bold text-white">
                      Responsibilities
                    </h3>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2">

                      {selectedRole.jd.map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4"
                        >
                          <div
                            className={`h-3 w-3 rounded-full bg-gradient-to-br ${selectedRole.gradient}`}
                          />

                          <p className="text-sm text-white/75">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="relative mt-12">

                    <h3 className="text-2xl font-bold text-white">
                      Required Skills
                    </h3>

                    <div className="mt-6 flex flex-wrap gap-3">

                      {selectedRole.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/75"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Apply */}
                  <div className="relative mt-14 overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-6 sm:p-8">

                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${selectedRole.gradient} opacity-10`}
                    />

                    <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                      <div>
                        <h3 className="text-2xl font-black text-white">
                          Apply for this role
                        </h3>

                        <p className="mt-3 text-sm leading-7 text-white/70">
                          Send your resume and portfolio to
                        </p>

                        <p className="mt-2 text-lg font-bold text-cyan-300">
                          future@aismartlive.com
                        </p>
                      </div>

                      <div
                        className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${selectedRole.gradient}`}
                      >
                        <Mail className="h-8 w-8 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}