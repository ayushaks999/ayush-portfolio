import React, { useMemo, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import {
  ArrowUpRight,
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  ExternalLink,
  GraduationCap,
  Mail,
  Menu,
  Server,
  Sparkles,
  Trophy,
  X,
  TerminalSquare,
  Layers3,
  Orbit,
  Zap,
} from "lucide-react";

function GitHubIcon({ size = 18, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.32 9.32 0 0 1 12 7.01c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9 0 1.38-.01 2.49-.01 2.83 0 .27.18.6.69.49A10.08 10.08 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

function LinkedInIcon({ size = 18, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.27 8h4.46v14H.27V8Zm7.28 0h4.27v1.91h.06c.59-1.12 2.04-2.31 4.2-2.31 4.49 0 5.32 2.95 5.32 6.79V22h-4.46v-6.76c0-1.61-.03-3.69-2.25-3.69-2.25 0-2.59 1.76-2.59 3.57V22H7.55V8Z" />
    </svg>
  );
}

function LeetCodeIcon({ size = 18, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M16 4 7 13l9 7" />
      <path d="M8 13h10" />
    </svg>
  );
}

function CodeforcesIcon({ size = 18, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="10" width="4" height="10" rx="1" />
      <rect x="10" y="5" width="4" height="15" rx="1" />
      <rect x="17" y="8" width="4" height="12" rx="1" />
    </svg>
  );
}

const profile = {
  name: "Ayush Kumar Shaw",
  role: "Software Engineer · AI/ML · Agentic RAG",
  subtitle:
    "Computer Science undergraduate at NIT Durgapur building production-grade backend systems, GenAI applications, RAG pipelines, and applied ML solutions.",
  email: "ayushaks099@gmail.com",
  github: "https://github.com/ayushaks999",
  linkedin: "https://linkedin.com/in/ayush-shaw-231b86325",
  leetcode: "https://leetcode.com/u/ayushaks9999/",
  codeforces: "https://codeforces.com/profile/ayushaks999",
};

const navItems = ["Home", "About", "Skills", "Projects", "Achievements", "Contact"];

const stats = [
  { value: "1851+", label: "LeetCode Max Rating" },
  { value: "Knight", label: "LeetCode Level" },
  { value: "1400+", label: "Codeforces Rating" },
  { value: "1000+", label: "DSA Problems Solved" },
];

const skillGroups = [
  {
    title: "Languages",
    icon: Code2,
    items: ["Python", "C++", "SQL", "Bash"],
  },
  {
    title: "AI / ML",
    icon: BrainCircuit,
    items: [
      "LLMs",
      "RAG",
      "LangChain",
      "LangGraph",
      "AutoGen",
      "Transformers",
      "Hugging Face",
      "Scikit-learn",
      "TensorFlow",
      "XGBoost",
      "LightGBM",
    ],
  },
  {
    title: "Backend & APIs",
    icon: Server,
    items: ["Flask", "FastAPI", "REST APIs", "SQLAlchemy", "Authentication", "Streaming"],
  },
  {
    title: "Databases",
    icon: Database,
    items: ["SQLite", "PostgreSQL", "MongoDB", "ChromaDB", "Vector Databases"],
  },
  {
    title: "Cloud / DevOps",
    icon: Cloud,
    items: ["Docker", "Azure", "GitHub Actions", "Git", "Linux", "CI/CD"],
  },
  {
    title: "CS Core",
    icon: Trophy,
    items: ["Data Structures", "Algorithms", "System Design", "OOP", "Competitive Programming"],
  },
];

const skillCloud = [
  { label: "Generative AI", top: "8%", left: "54%", size: "text-4xl" },
  { label: "LangChain", top: "18%", left: "24%", size: "text-2xl" },
  { label: "RAG", top: "18%", left: "73%", size: "text-3xl" },
  { label: "Python", top: "30%", left: "12%", size: "text-3xl" },
  { label: "ChromaDB", top: "30%", left: "50%", size: "text-2xl" },
  { label: "Docker", top: "32%", left: "80%", size: "text-2xl" },
  { label: "Transformers", top: "43%", left: "28%", size: "text-2xl" },
  { label: "FastAPI", top: "43%", left: "66%", size: "text-2xl" },
  { label: "Azure", top: "56%", left: "18%", size: "text-3xl" },
  { label: "SQL", top: "57%", left: "48%", size: "text-2xl" },
  { label: "XGBoost", top: "56%", left: "76%", size: "text-2xl" },
  { label: "System Design", top: "71%", left: "14%", size: "text-2xl" },
  { label: "GitHub Actions", top: "71%", left: "47%", size: "text-xl" },
  { label: "TensorFlow", top: "72%", left: "78%", size: "text-2xl" },
  { label: "Streamlit", top: "84%", left: "34%", size: "text-2xl" },
  { label: "PostgreSQL", top: "84%", left: "68%", size: "text-xl" },
];

const projects = [
  {
    title: "Agentic Multi-PDF RAG System",
    category: "Production AI Systems",
    description:
      "Production-ready multi-user RAG chatbot with authentication, semantic retrieval, hybrid reranking, streaming answers, feedback-driven learning, Docker support, and Azure deployment readiness.",
    tech: ["Python", "Streamlit", "LangChain", "Gemini", "ChromaDB", "SQLite", "Docker", "Azure"],
    repo: "https://github.com/ayushaks999/RaG_Chatbot",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=90",
  },
  {
    title: "AI Sales & Marketing Report Generator",
    category: "Production AI Systems",
    description:
      "Agentic business intelligence system that converts raw sales and marketing data into executive-ready reports with charts, provenance, structured LLM outputs, and automated delivery.",
    tech: ["Python", "Streamlit", "AutoGen", "RAG", "ChromaDB", "SQLite", "Docker"],
    repo: "https://github.com/ayushaks999/Report_Generator",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=90",
  },
  {
    title: "ARGO RAG Explorer",
    category: "Applied ML",
    description:
      "Oceanographic ML + RAG platform for ARGO NetCDF ingestion, semantic retrieval, scientific visualization, retrieval traces, and predictive ML workflows.",
    tech: ["Python", "Streamlit", "LangChain", "ChromaDB", "SQLAlchemy", "XGBoost", "LightGBM"],
    repo: "https://github.com/ayushaks999/OceanForge_AI",
    image:
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=1400&q=90",
  },
  {
    title: "AI Meeting Summarizer",
    category: "Desktop AI Systems",
    description:
      "Desktop meeting intelligence app that records meetings, transcribes audio in real time, generates AI summaries, extracts action items, stores data locally, and integrates with productivity workflows.",
    tech: ["Electron", "Flask", "Flask-SocketIO", "SQLite", "SQLAlchemy", "Deepgram", "Socket.IO"],
    repo: "https://github.com/ayushaks999/AI-Meeting-Summarizer",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=90",
  },
  {
    title: "Voice Assistant Project",
    category: "Automation Systems",
    description:
      "Voice assistant with speech interaction, general Q&A, YouTube music playback, weather updates, reminders with notifications, and a real-time Flask chat UI.",
    tech: ["Python", "Flask", "Groq API", "Open-Meteo API", "yt-dlp", "VLC", "Speech Recognition"],
    repo: "https://github.com/ayushaks999/Assistant#voice-assistant-project",
    image:
      "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?auto=format&fit=crop&w=1400&q=90",
  },
  {
    title: "Malaria Detection Pipeline",
    category: "Deep Learning",
    description:
      "Image-based malaria detection system with preprocessing, CNN training, evaluation, and reusable deep learning pipeline structure.",
    tech: ["Python", "TensorFlow", "CNN", "OpenCV", "Computer Vision"],
    repo: "https://github.com/ayushaks999/Malaria_Prediction",
    image:
      "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=1400&q=90",
  },
];

const filters = [
  "All",
  "Production AI Systems",
  "Applied ML",
  "Desktop AI Systems",
  "Automation Systems",
  "Deep Learning",
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

function scrollToSection(id) {
  const el = document.getElementById(id.toLowerCase().replace(/\s+/g, "-"));
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function SectionHeader({ eyebrow, title, desc }) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="mb-12"
    >
      <motion.p variants={itemVariants} className="mb-3 text-xs uppercase tracking-[0.28em] text-red-300">
        {eyebrow}
      </motion.p>
      <motion.h2 variants={itemVariants} className="font-serif text-4xl italic leading-tight text-white md:text-6xl">
        {title}
      </motion.h2>
      {desc ? (
        <motion.p variants={itemVariants} className="mt-5 max-w-3xl text-base leading-8 text-slate-400">
          {desc}
        </motion.p>
      ) : null}
    </motion.div>
  );
}

function useMouseGlow() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  function onMove(e) {
    x.set(e.clientX);
    y.set(e.clientY);
  }

  const background = useMotionTemplate`radial-gradient(600px circle at ${x}px ${y}px, rgba(239,68,68,0.12), transparent 40%)`;
  return { onMove, background };
}

function MagneticButton({ children, className = "", href, onClick, external = false }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 200, damping: 18, mass: 0.4 });

  function handleMove(e) {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    x.set(dx * 0.18);
    y.set(dy * 0.18);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  const shared = {
    ref,
    onMouseMove: handleMove,
    onMouseLeave: reset,
    style: { x: springX, y: springY },
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.98 },
    className,
  };

  if (href) {
    return (
      <motion.a href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} {...shared}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button onClick={onClick} {...shared}>
      {children}
    </motion.button>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 180, damping: 30, mass: 0.3 });

  return (
    <>
      <motion.div
        className="fixed left-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-red-400 via-red-500 to-red-300"
        style={{ scaleX }}
      />

      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-red-500/10 bg-black/60 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <MagneticButton onClick={() => scrollToSection("Home")} className="text-left">
            <p className="font-serif text-xl italic text-white md:text-2xl">{profile.name}</p>
            <p className="text-[10px] uppercase tracking-[0.24em] text-slate-500">Portfolio</p>
          </MagneticButton>

          <div className="hidden items-center gap-2 rounded-full border border-red-500/10 bg-white/[0.04] p-2 md:flex">
            {navItems.map((item) => (
              <motion.button
                key={item}
                whileHover={{ y: -2, scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => scrollToSection(item)}
                className="rounded-full px-4 py-2 text-sm text-slate-300 transition hover:bg-red-500/10 hover:text-white"
              >
                {item}
              </motion.button>
            ))}
          </div>

          <motion.button
            whileTap={{ scale: 0.92 }}
            className="rounded-2xl border border-red-500/10 bg-white/[0.04] p-3 text-white md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </motion.button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -12, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -12, height: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="overflow-hidden border-t border-red-500/10 bg-black px-5 py-4 md:hidden"
            >
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      scrollToSection(item);
                      setOpen(false);
                    }}
                    className="rounded-2xl border border-red-500/10 bg-white/[0.04] px-4 py-3 text-left text-white"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}

function AmbientFX() {
  const reduceMotion = useReducedMotion();
  const { background, onMove } = useMouseGlow();

  return (
    <div onMouseMove={onMove} className="pointer-events-none fixed inset-0 z-[1]">
      <motion.div style={{ background }} className="absolute inset-0 opacity-100" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(153,27,27,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(127,29,29,0.12),transparent_26%),linear-gradient(to_bottom,rgba(255,255,255,0.018),transparent_20%,transparent_80%,rgba(255,255,255,0.018))]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.16] [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]" />

      <motion.div
        aria-hidden
        animate={reduceMotion ? {} : { x: [0, 22, 0], y: [0, -16, 0] }}
        transition={reduceMotion ? {} : { duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[-6rem] top-[8rem] h-72 w-72 rounded-full bg-red-500/8 blur-3xl"
      />
      <motion.div
        aria-hidden
        animate={reduceMotion ? {} : { x: [0, -18, 0], y: [0, 18, 0] }}
        transition={reduceMotion ? {} : { duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[-5rem] top-[18rem] h-80 w-80 rounded-full bg-red-950/20 blur-3xl"
      />
      <motion.div
        aria-hidden
        animate={reduceMotion ? {} : { rotate: [0, 360] }}
        transition={reduceMotion ? {} : { duration: 22, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[10%] left-[8%] h-56 w-56 rounded-full border border-white/5 blur-[1px]"
      />
    </div>
  );
}

function Hero() {
  const reduceMotion = useReducedMotion();
  const scroll = useScroll();
  const heroY = useTransform(scroll.scrollYProgress, [0, 0.22], [0, -120]);
  const heroOpacity = useTransform(scroll.scrollYProgress, [0, 0.18], [1, 0.6]);

  return (
    <section id="home" className="relative overflow-hidden bg-[#050505] px-5 pb-24 pt-32 text-white">
      <AmbientFX />

      <motion.div
        style={reduceMotion ? undefined : { y: heroY, opacity: heroOpacity }}
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.08fr_0.92fr]"
      >
        <div className="relative">
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 rounded-full border border-red-500/10 bg-white/[0.04] px-4 py-2 text-xs text-slate-300 backdrop-blur-xl">
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.8)]" />
            Open to SDE internships, AI/ML roles, backend systems, and GenAI work
          </motion.div>

          <motion.p variants={itemVariants} className="mt-6 text-xs uppercase tracking-[0.28em] text-red-300">
            Software Engineering · AI/ML
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="mt-5 max-w-3xl font-serif text-5xl italic leading-[0.92] text-white md:text-7xl"
          >
            Building products that feel intelligent.
          </motion.h1>

          <motion.p variants={itemVariants} className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            {profile.subtitle}
          </motion.p>

          <motion.div variants={containerVariants} className="mt-10 grid gap-4 sm:grid-cols-2">
            {stats.map((item, index) => (
              <motion.div
                key={item.label}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 250, damping: 18 }}
                className="group relative overflow-hidden rounded-[1.4rem] border border-red-500/10 bg-white/[0.04] p-5 backdrop-blur-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                <p className="font-serif text-3xl italic text-white">{item.value}</p>
                <p className="mt-2 text-sm text-slate-400">{item.label}</p>
                <div className="mt-4 h-[1px] w-full bg-gradient-to-r from-red-300/20 to-transparent" />
                <p className="mt-3 text-[11px] uppercase tracking-[0.22em] text-slate-500">Signal {index + 1}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="mt-10 flex flex-wrap gap-4">
            <MagneticButton
              href={profile.github}
              external
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:bg-red-50"
            >
              <GitHubIcon size={18} />
              GitHub
            </MagneticButton>
            <MagneticButton
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-red-500/15 bg-white/[0.04] px-6 py-3 font-semibold text-white transition hover:border-red-300/60 hover:bg-red-500/10"
            >
              <Mail size={18} />
              Contact
            </MagneticButton>
            <MagneticButton
              onClick={() => scrollToSection("projects")}
              className="inline-flex items-center gap-2 rounded-full border border-red-500/15 bg-black/30 px-6 py-3 font-semibold text-slate-200 transition hover:border-red-300/60 hover:bg-red-500/10"
            >
              <ArrowUpRight size={18} />
              View Work
            </MagneticButton>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          initial={{ opacity: 0, scale: 0.95, y: 28 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative"
        >
          <motion.div
            whileHover={{ y: -10, rotate: -0.4, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 150, damping: 18 }}
            className="relative overflow-hidden rounded-[2rem] border border-red-500/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.075),rgba(127,29,29,0.04),rgba(255,255,255,0.025))] p-7 shadow-[0_0_60px_rgba(127,29,29,0.14)]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(185,28,28,0.14),transparent_31%),radial-gradient(circle_at_bottom_left,rgba(127,29,29,0.10),transparent_34%)]" />
            <div className="relative flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-red-300">Quick Profile</p>
                <h3 className="mt-4 font-serif text-3xl italic text-white">Ayush Kumar Shaw</h3>
              </div>
              <div className="rounded-2xl border border-red-500/10 bg-white/[0.04] p-3 text-red-300">
                <Sparkles size={20} />
              </div>
            </div>

            <div className="relative mt-8 overflow-hidden rounded-[1.6rem] border border-red-500/10 bg-black/35 p-5">
              <div className="mb-4 flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-slate-500">
                <TerminalSquare size={14} />
                System profile
              </div>
              <div className="space-y-2 font-mono text-[12px] leading-7 text-slate-300">
                <p><span className="text-emerald-300">&gt;</span> role: {profile.role}</p>
                <p><span className="text-emerald-300">&gt;</span> stack: backend · GenAI · RAG · ML</p>
                <p><span className="text-emerald-300">&gt;</span> focus: scalable, production-grade products</p>
                <p><span className="text-emerald-300">&gt;</span> mode: shipping, iterating, optimizing</p>
              </div>
              <motion.div
                animate={reduceMotion ? {} : { opacity: [0.2, 1, 0.2] }}
                transition={reduceMotion ? {} : { duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-red-500/8 to-transparent"
              />
            </div>

            <p className="relative mt-6 text-base leading-7 text-slate-400">
              B.Tech CSE student at NIT Durgapur (2023–2027), focused on backend-heavy systems, Agentic RAG, applied ML, and strong competitive programming fundamentals.
            </p>

            <div className="relative mt-8 space-y-4">
              {[
                ["Current Focus", "Production AI systems, RAG pipelines, backend engineering, and ML applications"],
                ["Education", "NIT Durgapur · B.Tech CSE"],
                ["Open To", "SDE internships, AI/ML roles, GenAI projects, backend systems"],
              ].map(([label, value], index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + index * 0.12, duration: 0.55 }}
                  whileHover={{ x: 6 }}
                  className="rounded-2xl border border-red-500/10 bg-black/30 p-4"
                >
                  <p className="text-sm text-slate-400">{label}</p>
                  <p className="mt-1 font-medium text-white">{value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        animate={reduceMotion ? {} : { y: [0, 8, 0] }}
        transition={reduceMotion ? {} : { duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-center"
      >
        <div className="mx-auto mb-2 h-10 w-[1px] bg-gradient-to-b from-red-300/0 via-red-300 to-red-300/0" />
        <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500">Scroll</p>
      </motion.div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-[#050505] px-5 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="About"
          title="Engineer first. AI-powered when it matters."
          desc="I focus on building real systems — clean APIs, reliable retrieval pipelines, scalable data workflows, practical ML systems, and production-oriented project architecture."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 md:grid-cols-3"
        >
          {[
            {
              icon: Server,
              title: "Backend & Systems",
              text:
                "I build backend-heavy applications with APIs, storage, auth, modular project structure, and deployment-focused thinking.",
            },
            {
              icon: BrainCircuit,
              title: "GenAI & RAG",
              text:
                "I work on RAG, LLM orchestration, vector search, retrieval quality, streaming answers, structured outputs, and agentic workflows.",
            },
            {
              icon: Trophy,
              title: "Problem Solving",
              text:
                "My competitive programming background improves my ability to debug, optimize, and reason about edge cases and system behavior.",
            },
          ].map((card) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className="rounded-[1.6rem] border border-red-500/10 bg-white/[0.04] p-6"
              >
                <div className="mb-4 inline-flex rounded-2xl border border-red-500/10 bg-black/30 p-3">
                  <Icon className="text-red-300" size={20} />
                </div>
                <h3 className="font-serif text-2xl italic text-white">{card.title}</h3>
                <p className="mt-4 leading-7 text-slate-400">{card.text}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="bg-[#050505] px-5 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Skills"
          title="Strong foundations across engineering and AI."
          desc="Structured core skills on the left, with a visually rich skill universe on the right — built to feel alive and high-end."
        />

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-4"
          >
            {skillGroups.map((group) => {
              const Icon = group.icon;
              return (
                <motion.div
                  key={group.title}
                  variants={itemVariants}
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 220, damping: 18 }}
                  className="rounded-[1.5rem] border border-red-500/10 bg-white/[0.04] p-5"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div className="rounded-2xl border border-red-500/10 bg-black/30 p-3">
                      <Icon className="text-red-300" size={18} />
                    </div>
                    <h3 className="font-serif text-2xl italic text-white">{group.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <motion.span
                        key={item}
                        whileHover={{ y: -2, scale: 1.04 }}
                        className="rounded-full border border-red-500/10 bg-black/40 px-3 py-1.5 text-sm text-slate-300"
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            className="rounded-[1.8rem] border border-red-500/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.04),rgba(127,29,29,0.03),rgba(255,255,255,0.015))] p-6"
          >
            <div className="mb-5 flex items-center justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-red-300">Skill Map</p>
                <h3 className="mt-2 font-serif text-3xl italic text-white">Technology Landscape</h3>
              </div>
              <div className="rounded-2xl border border-red-500/10 bg-white/[0.04] p-3 text-red-300">
                <Orbit size={18} />
              </div>
            </div>

            <div className="relative hidden h-[560px] overflow-hidden rounded-[1.5rem] border border-red-500/10 bg-black/30 lg:block">
              <motion.div
                aria-hidden
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
                className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5"
              />
              <motion.div
                aria-hidden
                animate={{ rotate: [360, 0] }}
                transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-red-300/10"
              />
              <motion.div
                aria-hidden
                animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/12 blur-2xl"
              />
              <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-red-500/10 bg-black/55 shadow-[0_0_60px_rgba(127,29,29,0.18)]">
                <Layers3 className="text-red-300" size={30} />
              </div>
              {skillCloud.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.8, y: 16 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.05, duration: 0.55 }}
                  whileHover={{ scale: 1.12, rotate: -1 }}
                  className={`absolute rounded-full border border-red-500/10 bg-white/[0.04] px-3 py-1.5 font-semibold text-white/90 ${item.size} shadow-[0_0_16px_rgba(255,255,255,0.06)] hover:text-red-300`}
                  style={{ top: item.top, left: item.left }}
                >
                  {item.label}
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 lg:hidden">
              {skillCloud.map((item) => (
                <motion.span
                  key={item.label}
                  whileHover={{ y: -3, scale: 1.04 }}
                  className="rounded-full border border-red-500/10 bg-black/40 px-4 py-2 text-sm text-slate-300"
                >
                  {item.label}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TiltCard({ children, className = "" }) {
  const ref = useRef(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  function handleMove(e) {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    rotateX.set((0.5 - py) * 9);
    rotateY.set((px - 0.5) * 10);
  }

  function reset() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      whileHover={{ scale: 1.01 }}
      transition={{ type: "spring", stiffness: 160, damping: 18 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects" className="bg-[#050505] px-5 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Projects"
          title="Selected engineering work."
          desc="A focused collection of backend systems, GenAI applications, RAG platforms, desktop AI products, and ML pipelines."
        />

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-10 flex flex-wrap gap-3"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              whileHover={{ y: -2, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                activeFilter === filter
                  ? "border-red-300/60 bg-red-500/12 text-white"
                  : "border-red-500/10 bg-white/[0.04] text-slate-300 hover:border-red-300/60 hover:bg-red-500/10"
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        <motion.div layout className="grid gap-8 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <TiltCard key={project.title} className="[perspective:1400px]">
                <motion.article
                  layout
                  initial={{ opacity: 0, y: 28, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 18, scale: 0.98 }}
                  transition={{ duration: 0.45, delay: index * 0.03 }}
                  whileHover={{ y: -8 }}
                  className="group overflow-hidden rounded-[1.7rem] border border-red-500/10 bg-white/[0.04] transition hover:border-red-300/50"
                >
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="h-72 w-full object-cover"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/25 to-transparent" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,transparent_0%,rgba(255,255,255,0.08)_120%)] opacity-0 transition duration-300 group-hover:opacity-100" />
                    <motion.p
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute bottom-4 left-4 rounded-full border border-red-500/10 bg-black/60 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-slate-300"
                    >
                      {project.category}
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      className="absolute right-4 top-4 rounded-full border border-red-500/10 bg-black/55 p-3 text-red-300 backdrop-blur-xl"
                    >
                      <Zap size={16} />
                    </motion.div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-serif text-3xl italic text-white">{project.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-slate-400">{project.description}</p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tech.map((item) => (
                        <motion.span
                          key={item}
                          whileHover={{ y: -2, scale: 1.04 }}
                          className="rounded-lg border border-red-500/10 bg-black/40 px-2.5 py-1 text-xs text-slate-300"
                        >
                          {item}
                        </motion.span>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-wrap items-center gap-4">
                      <MagneticButton
                        href={project.repo}
                        external
                        className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 font-semibold text-black transition hover:bg-red-50"
                      >
                        <GitHubIcon size={16} />
                        View Code
                      </MagneticButton>
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-red-300"
                      >
                        Open Repository <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </motion.article>
              </TiltCard>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function Achievements() {
  return (
    <section id="achievements" className="bg-[#050505] px-5 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Achievements"
          title="Competitive programming and academics."
          desc="Strong algorithmic foundation combined with practical software engineering and AI project work."
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="grid gap-5 sm:grid-cols-2"
          >
            {[
              {
                icon: Trophy,
                title: "LeetCode Knight",
                text: "Max Rating: 1851+ · Top 4% globally",
              },
              {
                icon: Trophy,
                title: "Codeforces Specialist",
                text: "1400+ rating with strong contest experience",
              },
              {
                icon: Code2,
                title: "1000+ Problems",
                text: "Solved across arrays, graphs, DP, trees, greedy, binary search, and advanced structures",
              },
              {
                icon: GraduationCap,
                title: "Academics",
                text: "NIT Durgapur · B.Tech CSE",
              },
            ].map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.07, duration: 0.55 }}
                  whileHover={{ y: -6, scale: 1.01 }}
                  className="rounded-[1.6rem] border border-red-500/10 bg-white/[0.04] p-6"
                >
                  <Icon className="text-red-300" size={22} />
                  <h3 className="mt-4 font-serif text-3xl italic text-white">{card.title}</h3>
                  <p className="mt-3 text-slate-400">{card.text}</p>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -6 }}
            className="rounded-[1.8rem] border border-red-500/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.05),rgba(127,29,29,0.035),rgba(255,255,255,0.02))] p-7"
          >
            <p className="text-xs uppercase tracking-[0.24em] text-red-300">Education</p>
            <h3 className="mt-3 font-serif text-4xl italic text-white">Academic Background</h3>

            <div className="mt-8 space-y-6">
              <motion.div whileHover={{ x: 4 }} className="rounded-2xl border border-red-500/10 bg-black/30 p-5">
                <p className="text-sm text-slate-400">Aug 2023 – Jun 2027</p>
                <h4 className="mt-2 text-xl font-semibold text-white">
                  National Institute of Technology, Durgapur
                </h4>
                <p className="mt-2 text-slate-400">B.Tech in Computer Science and Engineering</p>
              </motion.div>

              <motion.div whileHover={{ x: 4 }} className="rounded-2xl border border-red-500/10 bg-black/30 p-5">
                <p className="text-sm text-slate-400">Graduated: May 2022</p>
                <h4 className="mt-2 text-xl font-semibold text-white">Delhi Public School, Durgapur</h4>
                <p className="mt-2 text-slate-400">School Education</p>
              </motion.div>

              <motion.div whileHover={{ x: 4 }} className="rounded-2xl border border-red-500/10 bg-black/30 p-5">
                <h4 className="text-xl font-semibold text-white">Current Direction</h4>
                <p className="mt-2 leading-7 text-slate-400">
                  Actively building a profile that combines strong SDE fundamentals with applied AI/ML,
                  especially in RAG systems, backend architecture, and intelligent product development.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-[#050505] px-5 py-24 text-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 24 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-5xl rounded-[2rem] border border-red-500/10 bg-[radial-gradient(circle_at_top,rgba(185,28,28,0.16),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.95),transparent_42%),linear-gradient(135deg,rgba(255,255,255,0.055),rgba(127,29,29,0.045),rgba(255,255,255,0.018))] p-8 text-center shadow-[0_0_70px_rgba(127,29,29,0.14)] md:p-14"
      >
        <SectionHeader
          eyebrow="Contact"
          title="Let’s build something unforgettable."
          desc="Open to SDE internships, AI/ML roles, GenAI projects, backend systems, and engineering collaborations."
        />

        <div className="mt-8 grid gap-4 rounded-[1.6rem] border border-red-500/10 bg-black/35 p-5 text-left shadow-inner shadow-red-950/10 md:grid-cols-2 md:p-6">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-red-200/70">Status</p>
            <p className="mt-2 text-lg text-white">Available for serious engineering opportunities.</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-red-200/70">Mindset</p>
            <p className="mt-2 text-lg text-white">Build fast, ship clean, iterate with intention.</p>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <MagneticButton
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:bg-red-50"
          >
            <Mail size={18} />
            Email Me
          </MagneticButton>

          <MagneticButton
            href={profile.linkedin}
            external
            className="rounded-full border border-red-500/15 bg-white/[0.04] px-6 py-3 text-slate-200 transition hover:border-red-300/60 hover:bg-red-500/10 hover:text-white"
          >
            <span className="inline-flex items-center gap-2"><LinkedInIcon size={18} /> LinkedIn</span>
          </MagneticButton>

          <MagneticButton
            href={profile.github}
            external
            className="rounded-full border border-red-500/15 bg-white/[0.04] px-6 py-3 text-slate-200 transition hover:border-red-300/60 hover:bg-red-500/10 hover:text-white"
          >
            <span className="inline-flex items-center gap-2"><GitHubIcon size={18} /> GitHub</span>
          </MagneticButton>

          <MagneticButton
            href={profile.leetcode}
            external
            className="rounded-full border border-red-500/15 bg-white/[0.04] px-6 py-3 text-slate-200 transition hover:border-red-300/60 hover:bg-red-500/10 hover:text-white"
          >
            <span className="inline-flex items-center gap-2"><LeetCodeIcon size={18} /> LeetCode</span>
          </MagneticButton>

          <MagneticButton
            href={profile.codeforces}
            external
            className="rounded-full border border-red-500/15 bg-white/[0.04] px-6 py-3 text-slate-200 transition hover:border-red-300/60 hover:bg-red-500/10 hover:text-white"
          >
            <span className="inline-flex items-center gap-2"><CodeforcesIcon size={18} /> Codeforces</span>
          </MagneticButton>
        </div>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-red-500/10 bg-black px-5 py-8 text-center text-sm text-slate-500">
      © {new Date().getFullYear()} Ayush Kumar Shaw · Built with React, Tailwind CSS, and premium motion design.
    </footer>
  );
}

export default function App() {
  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-red-600 selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />

      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[2] h-24 bg-gradient-to-t from-black to-transparent" />
    </main>
  );
}









