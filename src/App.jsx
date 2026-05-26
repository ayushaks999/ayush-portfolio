import React, { useMemo, useState } from "react";
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
  Trophy,
  X,
} from "lucide-react";

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

function scrollToSection(id) {
  const el = document.getElementById(id.toLowerCase().replace(/\s+/g, "-"));
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function SectionHeader({ eyebrow, title, desc }) {
  return (
    <div className="mb-12">
      <p className="mb-3 text-xs uppercase tracking-[0.28em] text-red-300">{eyebrow}</p>
      <h2 className="font-serif text-4xl italic leading-tight text-white md:text-6xl">{title}</h2>
      {desc ? <p className="mt-5 max-w-3xl text-base leading-8 text-slate-400">{desc}</p> : null}
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <button onClick={() => scrollToSection("Home")} className="text-left">
          <p className="font-serif text-xl italic text-white md:text-2xl">{profile.name}</p>
          <p className="text-[10px] uppercase tracking-[0.24em] text-slate-500">Portfolio</p>
        </button>

        <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 p-2 md:flex">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="rounded-full px-4 py-2 text-sm text-slate-300 transition hover:bg-white hover:text-black"
            >
              {item}
            </button>
          ))}
        </div>

        <button
          className="rounded-2xl border border-white/10 bg-white/5 p-3 text-white md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-black px-5 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  scrollToSection(item);
                  setOpen(false);
                }}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left text-white"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#050505] px-5 pb-24 pt-32 text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(220,38,38,0.16),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.10),transparent_24%)]" />
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative z-10">
          <p className="text-xs uppercase tracking-[0.28em] text-red-300">Software Engineering · AI/ML</p>
          <h1 className="mt-5 max-w-3xl font-serif text-5xl italic leading-[0.95] text-white md:text-7xl">
            Building products that feel intelligent.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">{profile.subtitle}</p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-[1.4rem] border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
              >
                <p className="font-serif text-3xl italic text-white">{item.value}</p>
                <p className="mt-2 text-sm text-slate-400">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:bg-red-100"
            >
              <Code2 size={18} />
              GitHub
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white transition hover:border-red-400"
            >
              <Mail size={18} />
              Contact
            </a>
          </div>
        </div>

        <div className="relative z-10">
          <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-7 shadow-[0_0_60px_rgba(127,29,29,0.18)]">
            <p className="text-xs uppercase tracking-[0.24em] text-red-300">Quick Profile</p>
            <h3 className="mt-4 font-serif text-3xl italic text-white">Ayush Kumar Shaw</h3>
            <p className="mt-3 text-base leading-7 text-slate-400">
              B.Tech CSE student at NIT Durgapur (2023–2027), focused on backend-heavy systems,
              Agentic RAG, applied ML, and strong competitive programming fundamentals.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                <p className="text-sm text-slate-400">Current Focus</p>
                <p className="mt-1 font-medium text-white">
                  Production AI systems, RAG pipelines, backend engineering, and ML applications
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                <p className="text-sm text-slate-400">Education</p>
                <p className="mt-1 font-medium text-white">NIT Durgapur · B.Tech CSE </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                <p className="text-sm text-slate-400">Open To</p>
                <p className="mt-1 font-medium text-white">
                  SDE internships, AI/ML roles, GenAI projects, backend systems
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
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

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-6">
            <div className="mb-4 inline-flex rounded-2xl border border-white/10 bg-black/30 p-3">
              <Server className="text-red-300" size={20} />
            </div>
            <h3 className="font-serif text-2xl italic text-white">Backend & Systems</h3>
            <p className="mt-4 leading-7 text-slate-400">
              I build backend-heavy applications with APIs, storage, auth, modular project structure,
              and deployment-focused thinking.
            </p>
          </div>

          <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-6">
            <div className="mb-4 inline-flex rounded-2xl border border-white/10 bg-black/30 p-3">
              <BrainCircuit className="text-red-300" size={20} />
            </div>
            <h3 className="font-serif text-2xl italic text-white">GenAI & RAG</h3>
            <p className="mt-4 leading-7 text-slate-400">
              I work on RAG, LLM orchestration, vector search, retrieval quality, streaming answers,
              structured outputs, and agentic workflows.
            </p>
          </div>

          <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-6">
            <div className="mb-4 inline-flex rounded-2xl border border-white/10 bg-black/30 p-3">
              <Trophy className="text-red-300" size={20} />
            </div>
            <h3 className="font-serif text-2xl italic text-white">Problem Solving</h3>
            <p className="mt-4 leading-7 text-slate-400">
              My competitive programming background improves my ability to debug, optimize, and reason
              about edge cases and system behavior.
            </p>
          </div>
        </div>
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
          desc="This section is inspired by the skill-layout style you shared: structured core skills on the left, with a cleaner visual skill map on the right."
        />

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-4">
            {skillGroups.map((group) => {
              const Icon = group.icon;
              return (
                <div
                  key={group.title}
                  className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div className="rounded-2xl border border-white/10 bg-black/30 p-3">
                      <Icon className="text-red-300" size={18} />
                    </div>
                    <h3 className="font-serif text-2xl italic text-white">{group.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-sm text-slate-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="rounded-[1.8rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-6">
            <div className="mb-5">
              <p className="text-xs uppercase tracking-[0.24em] text-red-300">Skill Map</p>
              <h3 className="mt-2 font-serif text-3xl italic text-white">Technology Landscape</h3>
            </div>

            <div className="relative hidden h-[560px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/30 lg:block">
              {skillCloud.map((item) => (
                <div
                  key={item.label}
                  className={`absolute font-semibold text-white/90 transition hover:text-red-300 ${item.size}`}
                  style={{ top: item.top, left: item.left }}
                >
                  {item.label}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 lg:hidden">
              {skillCloud.map((item) => (
                <span
                  key={item.label}
                  className="rounded-full border border-white/10 bg-black/40 px-4 py-2 text-sm text-slate-300"
                >
                  {item.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
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

        <div className="mb-10 flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                activeFilter === filter
                  ? "border-red-400 bg-red-500/15 text-white"
                  : "border-white/10 bg-white/5 text-slate-300 hover:border-red-400"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {filteredProjects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-[1.7rem] border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-red-400/50"
            >
              <div className="relative">
                <img src={project.image} alt={project.title} className="h-72 w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <p className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-black/60 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-slate-300">
                  {project.category}
                </p>
              </div>

              <div className="p-6">
                <h3 className="font-serif text-3xl italic text-white">{project.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-400">{project.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-white/10 bg-black/40 px-2.5 py-1 text-xs text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 font-semibold text-black transition hover:bg-red-100"
                  >
                    <Code2 size={16} />
                    View Code
                  </a>
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
            </article>
          ))}
        </div>
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
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-6">
              <Trophy className="text-red-300" size={22} />
              <h3 className="mt-4 font-serif text-3xl italic text-white">LeetCode Knight</h3>
              <p className="mt-3 text-slate-400">Max Rating: 1851+ · Top 4% globally</p>
            </div>

            <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-6">
              <Trophy className="text-red-300" size={22} />
              <h3 className="mt-4 font-serif text-3xl italic text-white">Codeforces Specialist</h3>
              <p className="mt-3 text-slate-400">1400+ rating with strong contest experience</p>
            </div>

            <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-6">
              <Code2 className="text-red-300" size={22} />
              <h3 className="mt-4 font-serif text-3xl italic text-white">1000+ Problems</h3>
              <p className="mt-3 text-slate-400">
                Solved across arrays, graphs, DP, trees, greedy, binary search, and advanced structures
              </p>
            </div>

            <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-6">
              <GraduationCap className="text-red-300" size={22} />
              <h3 className="mt-4 font-serif text-3xl italic text-white">Academics</h3>
              <p className="mt-3 text-slate-400">NIT Durgapur · B.Tech CSE </p>
            </div>
          </div>

          <div className="rounded-[1.8rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-7">
            <p className="text-xs uppercase tracking-[0.24em] text-red-300">Education</p>
            <h3 className="mt-3 font-serif text-4xl italic text-white">Academic Background</h3>

            <div className="mt-8 space-y-6">
              <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                <p className="text-sm text-slate-400">Aug 2023 – Jun 2027</p>
                <h4 className="mt-2 text-xl font-semibold text-white">
                  National Institute of Technology, Durgapur
                </h4>
                <p className="mt-2 text-slate-400">B.Tech in Computer Science and Engineering</p>
                <p className="mt-2 text-slate-300"> / 10</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                <p className="text-sm text-slate-400">Graduated: May 2022</p>
                <h4 className="mt-2 text-xl font-semibold text-white">Delhi Public School, Durgapur</h4>
                <p className="mt-2 text-slate-400">School Education</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                <h4 className="text-xl font-semibold text-white">Current Direction</h4>
                <p className="mt-2 leading-7 text-slate-400">
                  Actively building a profile that combines strong SDE fundamentals with applied AI/ML,
                  especially in RAG systems, backend architecture, and intelligent product development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-[#050505] px-5 py-24 text-white">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(220,38,38,0.14),transparent_35%),linear-gradient(135deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-8 text-center shadow-[0_0_70px_rgba(127,29,29,0.18)] md:p-14">
        <SectionHeader
          eyebrow="Contact"
          title="Let’s build something impactful."
          desc="Open to SDE internships, AI/ML roles, GenAI projects, backend systems, and engineering collaborations."
        />

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:bg-red-100"
          >
            <Mail size={18} />
            Email Me
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-slate-200 transition hover:border-red-400"
          >
            LinkedIn
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-slate-200 transition hover:border-red-400"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
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

      <footer className="border-t border-white/10 bg-black px-5 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Ayush Kumar Shaw · Built with React, Tailwind CSS, and a premium portfolio UI.
      </footer>
    </main>
  );
}