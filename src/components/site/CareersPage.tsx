import { motion } from "framer-motion";
import {
  Brain,
  Sparkles,
  Code2,
  BriefcaseBusiness,
  Video,
  PenTool,
  Mail,
} from "lucide-react";

const careers = [
  {
    icon: Brain,
    role: "AI/ML Intern",
    duration: "6 Months Internship",
    stipend: "Performance-based stipend up to ₹10K/month",
    skills: [
      "Python",
      "Machine Learning",
      "Deep Learning",
      "TensorFlow",
      "Data Analysis",
    ],
    description:
      "Work on real-world AI models, intelligent automation systems, and predictive analytics solutions. Collaborate with experienced engineers and gain hands-on industry exposure.",
  },
  {
    icon: Sparkles,
    role: "Generative AI Intern",
    duration: "6 Months Internship",
    stipend: "Performance-based stipend up to ₹10K/month",
    skills: [
      "LLMs",
      "Prompt Engineering",
      "OpenAI APIs",
      "LangChain",
      "RAG",
    ],
    description:
      "Build modern GenAI applications using large language models, AI agents, and intelligent workflows for enterprise solutions.",
  },
  {
    icon: Code2,
    role: "Full Stack Developer Intern",
    duration: "6 Months Internship",
    stipend: "Performance-based stipend up to ₹10K/month",
    skills: [
      "React",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "REST APIs",
    ],
    description:
      "Develop scalable web applications, responsive user interfaces, and backend APIs while working on production-grade AI platforms.",
  },
  {
    icon: BriefcaseBusiness,
    role: "Business Associate",
    duration: "6 Months Internship",
    stipend: "Performance-based stipend up to ₹5K/month",
    skills: [
      "Communication",
      "Marketing",
      "Client Handling",
      "Sales",
      "Presentation Skills",
    ],
    description:
      "Support business growth through market research, client communication, partnerships, and operational coordination.",
  },
  {
    icon: Video,
    role: "Video Editor",
    duration: "6 Months Internship",
    stipend: "Performance-based stipend up to ₹5K/month",
    skills: [
      "Premiere Pro",
      "After Effects",
      "Motion Graphics",
      "Content Editing",
      "Storytelling",
    ],
    description:
      "Create engaging promotional videos, social media content, reels, and brand storytelling visuals for AISmartLive products.",
  },
  {
    icon: PenTool,
    role: "UI/UX Designer",
    duration: "6 Months Internship",
    stipend: "Performance-based stipend up to ₹10K/month",
    skills: [
      "Figma",
      "Wireframing",
      "Prototyping",
      "Design Systems",
      "User Research",
    ],
    description:
      "Design intuitive user experiences and modern interfaces for AI-driven web and mobile applications.",
  },
];

export default function Careers() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1 text-sm font-medium text-muted-foreground">
            Careers at AISmartLive
          </span>

          <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Start Your Career With{" "}
            <span className="text-gradient">AISmartLive</span>
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-muted-foreground text-base md:text-lg leading-relaxed">
            We are hiring passionate freshers and graduates who are eager
            to learn, innovate, and build impactful AI-driven solutions.
            Gain hands-on industry experience while working with modern
            technologies and real-world projects.
          </p>
        </motion.div>

        {/* Career Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {careers.map((career, index) => {
            const Icon = career.icon;

            return (
              <motion.div
                key={career.role}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-3xl border border-border bg-card p-7 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* Icon */}
                <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-primary/10 mb-5">
                  <Icon className="h-7 w-7 text-primary" />
                </div>

                {/* Role */}
                <h3 className="text-2xl font-semibold">
                  {career.role}
                </h3>

                {/* Internship Details */}
                <div className="mt-3 space-y-1 text-sm text-muted-foreground">
                  <p>{career.duration}</p>
                  <p>{career.stipend}</p>
                </div>

                {/* Description */}
                <p className="mt-5 text-muted-foreground leading-relaxed">
                  {career.description}
                </p>

                {/* Skills */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {career.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Email Section */}
                <div className="mt-8 rounded-2xl border border-border bg-muted/30 p-4">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary mt-0.5" />

                    <div>
                      <p className="font-medium">
                        Interested in this role?
                      </p>

                      <p className="mt-1 text-sm text-muted-foreground">
                        Drop your resume to{" "}
                        <span className="font-semibold text-foreground">
                          future@aismartlive.com
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}