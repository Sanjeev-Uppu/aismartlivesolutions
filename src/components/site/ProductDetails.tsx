import product1 from "@/assets/product1.png";

import {
  Gauge,
  ShieldCheck,
  Layers3,
  TrendingUp,
  Radar,
  Zap,
  Database,
  LayoutDashboard,
  BarChart3,
  HeartPulse,
  Flame,
  Bot,
  Cpu,
  MonitorCog,
  Radio,
  BrainCircuit,
  Cloud,
  Factory,
  Fuel,
  FlaskConical,
  Pill,
  Mountain,
  Hammer,
  UtensilsCrossed,
  Building2,
  Car,
  BellRing,
  PiggyBank,
  TimerOff,
  Eye,
  Lock,
  Network,
  Clock,
  Target,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

type ProductDetailsProps = {
  name: string;
  tagline: string;
  description: string;
};

type AccentKey =
  | "cyan"
  | "blue"
  | "violet"
  | "fuchsia"
  | "amber"
  | "emerald"
  | "rose"
  | "teal";

const accent: Record<
  AccentKey,
  {
    grad: string;
    shadow: string;
    text: string;
    border: string;
    chipBg: string;
    glow: string;
  }
> = {
  cyan: {
    grad: "from-cyan-300 via-cyan-400 to-blue-600",
    shadow: "shadow-[0_8px_24px_-6px_rgba(34,211,238,0.45)]",
    text: "text-cyan-300",
    border: "border-cyan-400/25",
    chipBg: "bg-cyan-400/10",
    glow: "bg-cyan-500/20",
  },
  blue: {
    grad: "from-blue-300 via-blue-500 to-indigo-700",
    shadow: "shadow-[0_8px_24px_-6px_rgba(59,130,246,0.45)]",
    text: "text-blue-300",
    border: "border-blue-400/25",
    chipBg: "bg-blue-400/10",
    glow: "bg-blue-500/20",
  },
  violet: {
    grad: "from-violet-300 via-violet-500 to-purple-700",
    shadow: "shadow-[0_8px_24px_-6px_rgba(139,92,246,0.45)]",
    text: "text-violet-300",
    border: "border-violet-400/25",
    chipBg: "bg-violet-400/10",
    glow: "bg-violet-500/20",
  },
  fuchsia: {
    grad: "from-fuchsia-300 via-fuchsia-500 to-pink-700",
    shadow: "shadow-[0_8px_24px_-6px_rgba(217,70,239,0.45)]",
    text: "text-fuchsia-300",
    border: "border-fuchsia-400/25",
    chipBg: "bg-fuchsia-400/10",
    glow: "bg-fuchsia-500/20",
  },
  amber: {
    grad: "from-amber-200 via-amber-400 to-orange-600",
    shadow: "shadow-[0_8px_24px_-6px_rgba(245,158,11,0.45)]",
    text: "text-amber-300",
    border: "border-amber-400/25",
    chipBg: "bg-amber-400/10",
    glow: "bg-amber-500/20",
  },
  emerald: {
    grad: "from-emerald-300 via-emerald-500 to-teal-700",
    shadow: "shadow-[0_8px_24px_-6px_rgba(16,185,129,0.45)]",
    text: "text-emerald-300",
    border: "border-emerald-400/25",
    chipBg: "bg-emerald-400/10",
    glow: "bg-emerald-500/20",
  },
  rose: {
    grad: "from-rose-300 via-rose-500 to-red-700",
    shadow: "shadow-[0_8px_24px_-6px_rgba(244,63,94,0.45)]",
    text: "text-rose-300",
    border: "border-rose-400/25",
    chipBg: "bg-rose-400/10",
    glow: "bg-rose-500/20",
  },
  teal: {
    grad: "from-teal-300 via-teal-500 to-cyan-700",
    shadow: "shadow-[0_8px_24px_-6px_rgba(20,184,166,0.45)]",
    text: "text-teal-300",
    border: "border-teal-400/25",
    chipBg: "bg-teal-400/10",
    glow: "bg-teal-500/20",
  },
};

const accentOrder: AccentKey[] = [
  "cyan",
  "violet",
  "amber",
  "emerald",
  "blue",
  "fuchsia",
  "rose",
  "teal",
];

/** Renders a colorful, layered "3D" icon badge — gradient fill, glow, inner highlight, and a drop shadow. */
function IconBadge({
  icon: Icon,
  color,
  size = "md",
}: {
  icon: LucideIcon;
  color: AccentKey;
  size?: "sm" | "md" | "lg";
}) {
  const a = accent[color];
  const dims =
    size === "lg" ? "h-16 w-16" : size === "sm" ? "h-11 w-11" : "h-14 w-14";
  const iconDims =
    size === "lg" ? "h-7 w-7" : size === "sm" ? "h-5 w-5" : "h-6 w-6";

  return (
    <div className="relative">
      <div
        className={`absolute inset-0 rounded-2xl ${a.glow} blur-lg opacity-70`}
        aria-hidden
      />
      <div
        className={`relative ${dims} rounded-2xl bg-gradient-to-br ${a.grad} ${a.shadow} flex items-center justify-center overflow-hidden`}
      >
        <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/40 to-transparent" />
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/20" />
        <Icon
          className={`relative ${iconDims} text-white drop-shadow-[0_2px_3px_rgba(0,0,0,0.35)]`}
          strokeWidth={1.8}
        />
      </div>
    </div>
  );
}

type Feature = { title: string; desc: string; icon: LucideIcon };
type FlowStep = { label: string; sub: string; icon: LucideIcon };
type Industry = { name: string; icon: LucideIcon };
type Benefit = { label: string; desc: string; icon: LucideIcon };
type Stat = { value: string; label: string; icon: LucideIcon };

const features: Feature[] = [
  {
    title: "AI-Powered Predictive Maintenance",
    desc: "Predict equipment failures before breakdowns using AI-driven analytics and machine learning models trained on live asset data.",
    icon: Gauge,
  },
  {
    title: "Industrial Safety Intelligence",
    desc: "Monitor gas leaks, fire hazards, PPE compliance and safety incidents across every facility in real time.",
    icon: ShieldCheck,
  },
  {
    title: "Digital Twin Solutions",
    desc: "Create a live digital representation of industrial assets for monitoring, simulation and optimization.",
    icon: Layers3,
  },
  {
    title: "AI Risk Forecasting",
    desc: "Forecast equipment and operational risks before they affect production schedules or safety margins.",
    icon: TrendingUp,
  },
  {
    title: "Drone-Based Industrial Inspection",
    desc: "Automate inspections using AI-powered drone vision and thermal analysis across hard-to-reach assets.",
    icon: Radar,
  },
  {
    title: "Energy & Utility Monitoring",
    desc: "Track energy consumption and improve operational efficiency across power, water and utility networks.",
    icon: Zap,
  },
  {
    title: "Real-Time Industrial Data Ingestion",
    desc: "Collect live PLC, SCADA, IoT and sensor data into a single unified operational platform.",
    icon: Database,
  },
  {
    title: "Central Command & Control Dashboard",
    desc: "One command center for operations, safety, assets and production across your entire enterprise.",
    icon: LayoutDashboard,
  },
  {
    title: "Industrial Analytics & Decision Intelligence",
    desc: "Turn raw operational data into decision-ready intelligence with configurable analytics engines.",
    icon: BarChart3,
  },
  {
    title: "Asset Health Monitoring",
    desc: "Continuously monitor equipment health, vibration, temperature and maintenance KPIs.",
    icon: HeartPulse,
  },
  {
    title: "Gas Data Safety Analytics",
    desc: "Advanced analytics for industrial gas monitoring, leak detection and safety compliance reporting.",
    icon: Flame,
  },
  {
    title: "AI Plant Copilot",
    desc: "A conversational AI copilot that answers operational questions and recommends next-best actions.",
    icon: Bot,
  },
];

const flow: FlowStep[] = [
  { label: "PLC", sub: "Programmable Logic Controllers", icon: Cpu },
  { label: "SCADA", sub: "Supervisory Control Systems", icon: MonitorCog },
  { label: "IoT Sensors", sub: "Field-Level Data Capture", icon: Radio },
  { label: "Edge AI", sub: "On-Site Inference", icon: BrainCircuit },
  { label: "Cloud AI", sub: "Model Training & Scaling", icon: Cloud },
  { label: "Analytics Engine", sub: "Pattern & Risk Detection", icon: BarChart3 },
  { label: "Command Center", sub: "Unified Operations View", icon: LayoutDashboard },
  { label: "AI Copilot", sub: "Recommended Actions", icon: Bot },
];

const industries: Industry[] = [
  { name: "Manufacturing", icon: Factory },
  { name: "Oil & Gas", icon: Fuel },
  { name: "Power & Utilities", icon: Zap },
  { name: "Chemical", icon: FlaskConical },
  { name: "Pharmaceutical", icon: Pill },
  { name: "Mining", icon: Mountain },
  { name: "Steel", icon: Hammer },
  { name: "Food & Beverage", icon: UtensilsCrossed },
  { name: "Cement", icon: Building2 },
  { name: "Automotive", icon: Car },
];

const benefits: Benefit[] = [
  { label: "99.9% Uptime", desc: "Enterprise-grade reliability across every deployment.", icon: ShieldCheck },
  { label: "Predictive Alerts", desc: "Get ahead of failures with early-warning signals.", icon: BellRing },
  { label: "Lower Maintenance Cost", desc: "Reduce unplanned spend with condition-based servicing.", icon: PiggyBank },
  { label: "Reduce Downtime", desc: "Minimize unplanned stoppages across production lines.", icon: TimerOff },
  { label: "Increase Productivity", desc: "Keep assets running at optimal operating conditions.", icon: TrendingUp },
  { label: "Real-Time Monitoring", desc: "Live visibility into every asset, sensor and process.", icon: Eye },
  { label: "Enterprise Security", desc: "Role-based access and end-to-end data protection.", icon: Lock },
  { label: "Scalable Architecture", desc: "From a single plant to a global operations network.", icon: Network },
];

const stats: Stat[] = [
  { value: "24x7", label: "Monitoring", icon: Clock },
  { value: "99%", label: "Prediction Accuracy", icon: Target },
  { value: "500K+", label: "Sensor Readings", icon: Database },
  { value: "100+", label: "Industrial Assets", icon: Factory },
  { value: "50+", label: "Dashboards", icon: LayoutDashboard },
  { value: "12", label: "AI Modules", icon: Cpu },
];

export function ProductDetails({ name, tagline, description }: ProductDetailsProps) {
  return (
    <section className="relative bg-[#050B14] text-slate-200 overflow-hidden">
      {/* ================= HERO ================= */}
      <div className="relative border-b border-white/5">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1626] via-[#050B14] to-[#050B14]" />
          <div className="absolute -top-24 -left-24 h-[460px] w-[460px] rounded-full bg-cyan-500/15 blur-[130px]" />
          <div className="absolute top-10 right-0 h-[420px] w-[420px] rounded-full bg-violet-500/10 blur-[130px]" />
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-16 lg:pt-20 lg:pb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-1.5 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_2px_rgba(34,211,238,0.6)]" />
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-cyan-300">
              {tagline}
            </span>
          </div>

          <h1 className="mt-7 text-5xl sm:text-6xl lg:text-[64px] font-semibold tracking-tight text-white leading-[1.05]">
            {name}
          </h1>

          <p className="mt-7 max-w-4xl text-lg leading-8 text-slate-400">
            {description}
          </p>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 font-mono text-xs uppercase tracking-widest text-slate-500">
            <span className="flex items-center gap-2">
              <span className="h-px w-6 bg-cyan-500/60" /> Industrial AI Platform
            </span>
            <span className="flex items-center gap-2">
              <span className="h-px w-6 bg-violet-500/60" /> Enterprise Grade
            </span>
            <span className="flex items-center gap-2">
              <span className="h-px w-6 bg-amber-500/60" /> Cloud &amp; Edge Ready
            </span>
          </div>
        </div>
      </div>

      {/* ================= GALLERY ================= */}
      <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-24">
        <div className="rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_60px_-15px_rgba(34,211,238,0.15)]">
          <img
            src={product1}
            alt="Platform overview"
            className="w-full h-[320px] sm:h-[420px] lg:h-[540px] object-cover"
          />
        </div>
      </div>

      {/* ================= CAPABILITIES (bento layout) ================= */}
      <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <div className="max-w-2xl mb-14">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-400">
            Platform Capabilities
          </p>
          <h2 className="mt-4 text-3xl lg:text-4xl font-semibold text-white">
            Everything an industrial enterprise needs, in one platform
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[1fr]">
          {features.map((item, idx) => {
            const color = accentOrder[idx % accentOrder.length];
            const a = accent[color];
            const isFeatured = idx === 0;
            return (
              <div
                key={item.title}
                className={`group relative rounded-2xl border ${a.border} bg-white/[0.03] backdrop-blur-sm p-7 transition hover:bg-white/[0.05] hover:-translate-y-1 ${
                  isFeatured ? "lg:col-span-2 lg:row-span-1 flex flex-col justify-center" : ""
                }`}
              >
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${a.chipBg} to-transparent opacity-0 group-hover:opacity-100 transition`}
                />
                <div className="relative">
                  <IconBadge icon={item.icon} color={color} size={isFeatured ? "lg" : "md"} />

                  <h3
                    className={`mt-6 font-semibold text-white ${
                      isFeatured ? "text-2xl" : "text-lg"
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`mt-3 leading-6 text-slate-400 ${
                      isFeatured ? "text-base max-w-xl" : "text-sm"
                    }`}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ================= ARCHITECTURE ================= */}
      <div className="relative border-y border-white/5 bg-gradient-to-b from-[#070E1A] to-[#050B14]">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <div className="max-w-2xl mb-16">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-400">
              System Architecture
            </p>
            <h2 className="mt-4 text-3xl lg:text-4xl font-semibold text-white">
              How SenseMinds360 Works
            </h2>
            <p className="mt-4 text-slate-400 leading-7">
              A single data pipeline connecting plant-floor equipment to enterprise
              decision-making, in real time.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-stretch gap-3">
            {flow.map((step, idx) => {
              const color = accentOrder[idx % accentOrder.length];
              const a = accent[color];
              const isLast = idx === flow.length - 1;
              return (
                <div
                  key={step.label}
                  className="flex-1 flex flex-col lg:flex-row items-center gap-3"
                >
                  <div
                    className={`w-full rounded-2xl border ${a.border} bg-white/[0.03] backdrop-blur-sm p-6 text-center hover:bg-white/[0.06] transition`}
                  >
                    <div className="flex justify-center">
                      <IconBadge icon={step.icon} color={color} size="sm" />
                    </div>
                    <p className="mt-4 text-sm font-semibold text-white">
                      {step.label}
                    </p>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-slate-500 leading-4">
                      {step.sub}
                    </p>
                  </div>

                  {!isLast && (
                    <div className="flex items-center justify-center shrink-0 text-slate-600">
                      <div className="lg:hidden h-6 w-px bg-gradient-to-b from-cyan-500/60 to-transparent" />
                      <ArrowRight className="hidden lg:block h-4 w-4" strokeWidth={2} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ================= INDUSTRIES (circular badges) ================= */}
      <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <div className="max-w-2xl mb-14">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-400">
            Industries We Serve
          </p>
          <h2 className="mt-4 text-3xl lg:text-4xl font-semibold text-white">
            Built for heavy industry, deployed at scale
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {industries.map((industry, idx) => {
            const color = accentOrder[idx % accentOrder.length];
            return (
              <div
                key={industry.name}
                className="flex flex-col items-center text-center rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.05] hover:-translate-y-1 transition"
              >
                <IconBadge icon={industry.icon} color={color} size="md" />
                <p className="mt-4 text-sm font-medium text-slate-200">
                  {industry.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* ================= BENEFITS (horizontal rows) ================= */}
      <div className="relative border-y border-white/5 bg-gradient-to-b from-[#070E1A] to-[#050B14]">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <div className="max-w-2xl mb-14">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-400">
              Key Benefits
            </p>
            <h2 className="mt-4 text-3xl lg:text-4xl font-semibold text-white">
              Outcomes that matter to the business
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-3">
            {benefits.map((item, idx) => {
              const color = accentOrder[idx % accentOrder.length];
              return (
                <div
                  key={item.label}
                  className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5 hover:bg-white/[0.05] hover:border-white/20 transition"
                >
                  <IconBadge icon={item.icon} color={color} size="sm" />
                  <div>
                    <p className="text-base font-semibold text-white">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slate-400">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ================= STATISTICS ================= */}
      <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] via-white/[0.02] to-white/[0.04] backdrop-blur-sm p-8 lg:p-12">
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-8">
            {stats.map((stat, idx) => {
              const color = accentOrder[idx % accentOrder.length];
              return (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="flex justify-center lg:justify-start">
                    <IconBadge icon={stat.icon} color={color} size="sm" />
                  </div>
                  <p className="mt-4 text-3xl lg:text-4xl font-semibold text-white font-mono">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-slate-400">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}