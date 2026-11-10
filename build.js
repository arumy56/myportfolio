#!/usr/bin/env node
/**
 * Static Site Generator & Gatsby CLI Compatibility Shim for Vercel
 * Generates production-ready static HTML bundles into ./public/
 */

const fs = require("fs");
const path = require("path");

// 1. If invoked with --shim (during npm postinstall), create node_modules/.bin/gatsby
// so that even if Vercel's Framework Preset is locked to "gatsby build", it invokes this builder.
if (process.argv.includes("--shim")) {
  const binDir = path.join(__dirname, "node_modules", ".bin");
  fs.mkdirSync(binDir, { recursive: true });
  const shimPath = path.join(binDir, "gatsby");
  const shimContent = `#!/usr/bin/env node\nrequire("../../build.js");\n`;
  fs.writeFileSync(shimPath, shimContent, { mode: 0o755 });
  console.log("✔ Installed Gatsby CLI compatibility shim at node_modules/.bin/gatsby");
}

const PROFILE = {
  name: "Suhaib Ali Ahmed",
  handle: "@arumy56",
  role: "Full-Stack Software Engineer & UI/UX Designer",
  tagline:
    "Building resilient digital platforms, AI-powered advisory & RAG systems, fintech payment workflows, and cross-platform mobile applications.",
  location: "Kenya",
  email: "asuhaib56@gmail.com",
  github: "https://github.com/arumy56",
  twitter: "https://twitter.com/arumy56",
  availability: "Open to Software Engineering & Full-Stack Roles",
};

const STATS = [
  { label: "Public Repositories", value: "20+" },
  { label: "Core Stacks", value: "Python • Laravel • React • Flutter" },
  { label: "Focus Areas", value: "AgriTech • FinTech • AI/RAG • Mobile" },
  { label: "Languages Spoken", value: "English • Kiswahili • Arabic" },
];

const EXPERIENCE_PILLARS = [
  {
    title: "AgriTech & Conversational Advisory Systems",
    period: "Python • FastAPI • Telegram & WhatsApp APIs",
    description:
      "Designing and prototyping Digital Weather Advisory Services (DWAS) that connect open meteorological data (Open-Meteo) with localized, bilingual (English & Kiswahili) decision support for smallholder farmers.",
  },
  {
    title: "FinTech, Payment Portals & Enterprise Web",
    period: "PHP • Laravel • Livewire • TypeScript",
    description:
      "Building responsive payment gateway interfaces, shipping & cargo billing systems (CargoPay), and resilient backend workflows with clean authentication, case-insensitive identity normalization, and polished UI states.",
  },
  {
    title: "Applied AI, RAG & Cross-Platform Craft",
    period: "RAG / LLMs • Flutter / Dart • React",
    description:
      "Developing retrieval-augmented legal assistants (Kenyan Bill of Rights AI) alongside cross-platform mobile apps (Expenses, CoreSync, Hifdh) that pair solid engineering with thoughtful UI/UX design.",
  },
];

const SKILL_CATEGORIES = [
  {
    title: "Backend, APIs & Data",
    badge: "Server & Architecture",
    skills: [
      "Python",
      "FastAPI",
      "Django",
      "PHP",
      "Laravel",
      "Livewire",
      "RESTful APIs",
      "PostgreSQL / MySQL",
      "SQLite",
      "httpx / AsyncIO",
    ],
  },
  {
    title: "AI, Chatbots & Automation",
    badge: "Intelligent Systems",
    skills: [
      "Telegram Bot API",
      "WhatsApp Cloud API",
      "Twilio Webhooks",
      "LLM & RAG Pipelines",
      "Open-Meteo Geospatial APIs",
      "Rule-Based Decision Engines",
      "Bilingual NLP (EN / SW)",
    ],
  },
  {
    title: "Frontend & Mobile Engineering",
    badge: "Client & Cross-Platform",
    skills: [
      "React.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Next.js / Gatsby",
      "Tailwind CSS",
      "Flutter",
      "Dart",
      "Blade Templates",
      "Responsive UI/UX",
    ],
  },
  {
    title: "DevOps, Quality & Tooling",
    badge: "Delivery & Reliability",
    skills: [
      "Git & GitHub Actions (CI/CD)",
      "Docker & Docker Compose",
      "Pytest & Async Testing",
      "Linux Administration",
      "Vercel & Netlify",
      "Figma & Design Systems",
    ],
  },
];

const PROJECTS = [
  {
    id: "dwas-weather-bot",
    title: "DWAS Weather Advisory Bot",
    subtitle: "Digital Weather Advisory Service (Telegram & WhatsApp)",
    category: "AI & Bots",
    featured: true,
    year: "2026",
    badge: "Featured • AgriTech",
    description:
      "A conversational Digital Weather Advisory Service (DWAS) built for smallholder farmers and agricultural extension officers. Integrates keyless Open-Meteo geocoding and 3-day forecasts with an agronomic rules engine delivering bilingual (English & Kiswahili) guidance on spraying, fertilizer leaching, irrigation, and mulching.",
    highlights: [
      "Dual-channel architecture supporting both Telegram polling and FastAPI WhatsApp Cloud API / Twilio webhooks",
      "Bilingual English (/en) & Kiswahili (/sw) advisories with GPS pin sharing and fuzzy town geocoding",
      "Containerized with Docker Compose and verified by an automated Pytest + GitHub Actions CI matrix",
    ],
    tech: [
      "Python",
      "python-telegram-bot",
      "FastAPI",
      "Open-Meteo API",
      "httpx",
      "Docker",
      "Pytest",
    ],
    github: "https://github.com/arumy56/-weather-advisory-bot-",
    live: null,
  },
  {
    id: "kenyan-bill-of-rights-rag",
    title: "Kenyan Bill of Rights AI",
    subtitle: "Constitutional Law LLM & RAG Assistant",
    category: "AI & Bots",
    featured: true,
    year: "2026",
    badge: "LegalTech • AI / RAG",
    description:
      "An AI legal assistant and Retrieval-Augmented Generation (RAG) system grounded on the Constitution of Kenya's Bill of Rights. Designed to demystify constitutional protections and provide accurate, citation-backed civic awareness.",
    highlights: [
      "Domain-specific retrieval pipeline indexing Kenyan constitutional provisions",
      "Accessible conversational interface tailored for citizens and legal researchers",
      "Built alongside Gradient-RAG-Law experiments for high-recall legal question answering",
    ],
    tech: ["Python", "LLM", "RAG", "Vector Search", "HTML5 / CSS3", "JavaScript"],
    github: "https://github.com/arumy56/billofrights",
    secondaryGithub: "https://github.com/arumy56/Gradient-Rag-law",
    live: null,
  },
  {
    id: "cargopay",
    title: "CargoPay Logistics & Payment System",
    subtitle: "Shipping Agency Settlement & Tracking Platform",
    category: "FinTech & Web",
    featured: true,
    year: "2026",
    badge: "FinTech • Laravel",
    description:
      "A full-stack cargo management and payment processing platform designed for shipping agencies. Streamlines consignment billing, customer invoicing, reactive Livewire state tables, and multi-stage cargo clearance workflows.",
    highlights: [
      "Reactive administrative dashboards powered by Laravel & Livewire",
      "End-to-end tracking of customer shipments, agency fees, and payment settlements",
      "Clean relational database modeling with role-based operational views",
    ],
    tech: ["PHP", "Laravel", "Livewire", "Blade", "SQLite / MySQL", "Tailwind CSS"],
    github: "https://github.com/arumy56/cargopay",
    live: null,
  },
  {
    id: "coresync",
    title: "CoreSync Design System",
    subtitle: "Cross-Platform UI/UX Architecture & Interactive Showcase",
    category: "Mobile & UI/UX",
    featured: true,
    year: "2026",
    badge: "UI/UX • Flutter & Web",
    description:
      "A high-craft UI/UX design showcase built with Dart/Flutter and deployed to the web. Demonstrates modern layout composition, smooth micro-interactions, responsive component tokens, and cohesive visual hierarchy.",
    highlights: [
      "Live interactive web build deployed on Netlify",
      "Reusable design tokens for typography, elevation, and responsive breakpoints",
      "Bridges Figma prototyping with production Dart/Flutter widget trees",
    ],
    tech: ["Dart", "Flutter Web", "UI/UX Design", "Design Systems", "Netlify"],
    github: "https://github.com/arumy56/CoreSync",
    live: "https://coresyncdesign.netlify.app/",
  },
  {
    id: "alhikma",
    title: "Al-Hikma Digital Platform",
    subtitle: "TypeScript Knowledge & Content Portal",
    category: "FinTech & Web",
    featured: true,
    year: "2025",
    badge: "TypeScript • Vercel",
    description:
      "A fast, accessible web platform engineered in TypeScript for structured educational content delivery. Focused on distraction-free reading, responsive navigation, and instant edge rendering.",
    highlights: [
      "Strictly typed TypeScript component architecture",
      "Optimized Core Web Vitals and mobile-first reading experience",
      "Continuous deployment pipeline hosted on Vercel",
    ],
    tech: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Vercel"],
    github: "https://github.com/arumy56/alhikma",
    live: "https://alhikma.vercel.app",
  },
  {
    id: "expenses-tracker",
    title: "Expenses — Smart Budget Tracker",
    subtitle: "Cross-Platform Personal Finance Mobile App",
    category: "Mobile & UI/UX",
    featured: true,
    year: "2026",
    badge: "Mobile • Flutter",
    description:
      "A personal finance and expense tracking mobile application built with Flutter and Dart. Helps users categorize daily spending, visualize budget allocation, and maintain financial discipline on the go.",
    highlights: [
      "Intuitive transaction logging with category breakdown charts",
      "Clean, thumb-friendly mobile UI with dark/light adaptive theming",
      "Reactive state management and local persistence",
    ],
    tech: ["Dart", "Flutter", "Mobile UI", "State Management"],
    github: "https://github.com/arumy56/Expenses",
    live: null,
  },
  {
    id: "hifdh-companion",
    title: "Hifdh Revision Companion",
    subtitle: "Structured Memorization & Progress Tracker",
    category: "Mobile & UI/UX",
    featured: false,
    year: "2026",
    badge: "Mobile • Dart",
    description:
      "A dedicated Flutter application helping students and educators track daily Quran memorization (Hifdh) and revision schedules with clean progress milestones.",
    highlights: [
      "Daily revision queue and milestone tracking",
      "Distraction-free mobile interface crafted in Flutter/Dart",
    ],
    tech: ["Dart", "Flutter", "Mobile App"],
    github: "https://github.com/arumy56/hifdh",
    live: null,
  },
  {
    id: "livewire-suite",
    title: "Laravel Livewire Reactive CRUD Suite",
    subtitle: "Dynamic Data Tables & SQLite State Management",
    category: "FinTech & Web",
    featured: false,
    year: "2026",
    badge: "Backend • Livewire",
    description:
      "A pair of reference implementations demonstrating zero-reload CRUD operations, real-time validation, and SQLite persistence using Laravel Livewire.",
    highlights: [
      "Server-driven reactive components without complex SPA boilerplate",
      "Includes both in-memory array state and relational SQLite persistence patterns",
    ],
    tech: ["PHP", "Laravel", "Livewire", "SQLite"],
    github: "https://github.com/arumy56/livewire_sqlite",
    secondaryGithub: "https://github.com/arumy56/livewire_array",
    live: null,
  },
  {
    id: "eight-and-nordin",
    title: "Eight & Nordin Blog Platforms",
    subtitle: "Modern Jamstack Publishing & Web Experiences",
    category: "FinTech & Web",
    featured: false,
    year: "2023–2024",
    badge: "Frontend • Jamstack",
    description:
      "Fast, responsive web applications and blog publishing platforms built with modern JavaScript and deployed on Vercel's edge network.",
    highlights: [
      "Instant page transitions and responsive typography",
      "Deployed live on Vercel with automated Git previews",
    ],
    tech: ["JavaScript", "React", "CSS3", "Vercel"],
    github: "https://github.com/arumy56/eight",
    secondaryGithub: "https://github.com/arumy56/nordin-blog",
    live: "https://eight-alpha.vercel.app",
  },
  {
    id: "adhkar-counter",
    title: "Adhkar Counter Web Utility",
    subtitle: "Minimalist Daily Dhikr & Tasbih Counter",
    category: "Mobile & UI/UX",
    featured: false,
    year: "2023",
    badge: "Web Utility",
    description:
      "A lightweight, tactile web counter application built with vanilla JavaScript, HTML5, and CSS3 for tracking daily remembrance counts on any device.",
    highlights: [
      "Zero-dependency instant load time",
      "Tactile counter controls deployed on Netlify",
    ],
    tech: ["JavaScript", "HTML5", "CSS3", "Netlify"],
    github: "https://github.com/arumy56/Adhkar-Counter",
    live: "https://incandescent-lebkuchen-8a8d6c.netlify.app/",
  },
];

function renderProjectCard(project) {
  const highlightsHtml = (project.highlights || [])
    .map(
      (h) => `
      <li class="flex items-start gap-2">
        <span class="text-emerald-400 mt-0.5">▹</span>
        <span>${h}</span>
      </li>`
    )
    .join("");

  const techHtml = project.tech
    .map(
      (t) => `
      <span class="rounded-md bg-slate-950/90 border border-slate-800 px-2.5 py-1 font-mono text-[11px] text-slate-300">${t}</span>`
    )
    .join("");

  const secondaryBtn = project.secondaryGithub
    ? `<a href="${project.secondaryGithub}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 px-3 py-2 text-xs font-medium text-slate-300 transition hover:border-slate-500 hover:text-white">Related Repo ↗</a>`
    : "";

  const liveBtn = project.live
    ? `<a href="${project.live}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-3.5 py-2 text-xs font-semibold text-emerald-300 transition hover:bg-emerald-500 hover:text-slate-950">Live Demo ↗</a>`
    : "";

  return `
    <article
      data-category="${project.category}"
      data-featured="${project.featured ? "true" : "false"}"
      data-search="${(project.title + " " + project.subtitle + " " + project.description + " " + project.tech.join(" ")).toLowerCase().replace(/"/g, "")}"
      class="project-card group relative flex flex-col justify-between rounded-2xl border border-slate-800/90 bg-slate-900/60 p-6 sm:p-7 transition duration-300 hover:border-emerald-500/60 hover:bg-slate-900/90"
    >
      <div>
        <div class="flex items-center justify-between gap-2">
          <span class="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-xs font-medium text-emerald-300">
            ${project.badge}
          </span>
          <span class="font-mono text-xs text-slate-500">${project.year}</span>
        </div>

        <h3 class="mt-4 text-xl font-bold text-white group-hover:text-emerald-300 transition">
          ${project.title}
        </h3>
        <p class="mt-1 text-xs font-medium text-slate-400">${project.subtitle}</p>

        <p class="mt-3.5 text-sm leading-relaxed text-slate-300">
          ${project.description}
        </p>

        <ul class="mt-4 space-y-1.5 text-xs text-slate-400">
          ${highlightsHtml}
        </ul>
      </div>

      <div class="mt-6 pt-5 border-t border-slate-800/80">
        <div class="flex flex-wrap gap-1.5 mb-4">
          ${techHtml}
        </div>
        <div class="flex flex-wrap items-center gap-3">
          <a
            href="${project.github}"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1.5 rounded-lg bg-slate-800 px-3.5 py-2 text-xs font-semibold text-white transition hover:bg-emerald-500 hover:text-slate-950"
          >
            <span>Source Code (GitHub)</span>
            <span>↗</span>
          </a>
          ${secondaryBtn}
          ${liveBtn}
        </div>
      </div>
    </article>
  `;
}

function renderShell(title, bodyContent) {
  return `<!DOCTYPE html>
<html lang="en" class="dark scroll-smooth">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title}</title>
  <meta name="description" content="Portfolio of Suhaib Ali Ahmed (@arumy56) — Full-Stack Software Engineer & UI/UX Designer specializing in Python, DWAS Weather Bots, RAG AI, Laravel/Livewire, React, and Flutter." />
  <link rel="icon" href="/favicon.ico" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          fontFamily: {
            sans: ['Inter', 'system-ui', 'sans-serif'],
            mono: ['JetBrains Mono', 'monospace'],
          }
        }
      }
    }
  </script>
  <style>
    body {
      background-color: #020617;
      color: #f8fafc;
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
    }
    .bg-grid-pattern {
      background-size: 40px 40px;
      background-image:
        linear-gradient(to right, rgba(148, 163, 184, 0.05) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(148, 163, 184, 0.05) 1px, transparent 1px);
    }
  </style>
</head>
<body class="min-h-screen bg-slate-950 text-slate-100 flex flex-col relative selection:bg-emerald-500/30 selection:text-emerald-200 overflow-x-hidden">
  <!-- Ambient Background Glows -->
  <div class="pointer-events-none fixed inset-0 overflow-hidden z-0">
    <div class="absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl"></div>
    <div class="absolute top-1/3 -right-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl"></div>
    <div class="absolute inset-0 bg-grid-pattern opacity-60"></div>
  </div>

  <!-- Navbar -->
  <header class="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
    <div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
      <a href="/" class="group flex items-center gap-3">
        <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 font-mono text-sm font-bold text-slate-950 shadow-lg shadow-emerald-500/20 transition group-hover:scale-105">
          SA
        </div>
        <div>
          <span class="block text-base font-bold tracking-tight text-white group-hover:text-emerald-400 transition">
            ${PROFILE.name}
          </span>
          <span class="block font-mono text-xs text-slate-400">
            ${PROFILE.handle} • Full-Stack &amp; AI
          </span>
        </div>
      </a>

      <nav class="hidden md:flex items-center gap-1">
        <a href="/" class="rounded-lg px-3.5 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-800/70 hover:text-white">Home</a>
        <a href="/#featured" class="rounded-lg px-3.5 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-800/70 hover:text-white">Featured</a>
        <a href="/project/" class="rounded-lg px-3.5 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-800/70 hover:text-white">All Projects (${PROJECTS.length})</a>
        <a href="/#skills" class="rounded-lg px-3.5 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-800/70 hover:text-white">Tech Stack</a>
        <a href="/#contact" class="rounded-lg px-3.5 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-800/70 hover:text-white">Contact</a>
      </nav>

      <div class="hidden md:flex items-center gap-3">
        <a
          href="https://github.com/arumy56/-weather-advisory-bot-"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-semibold text-emerald-300 transition hover:border-emerald-400 hover:bg-emerald-500/20"
        >
          <span class="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
          DWAS Weather Bot
        </a>
        <a
          href="${PROFILE.github}"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:border-slate-500 hover:bg-slate-800"
        >
          GitHub ↗
        </a>
      </div>

      <button
        type="button"
        onclick="document.getElementById('mobile-menu').classList.toggle('hidden')"
        class="inline-flex items-center justify-center rounded-lg border border-slate-800 p-2 text-slate-300 hover:bg-slate-800 hover:text-white md:hidden"
        aria-label="Toggle Menu"
      >
        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>

    <div id="mobile-menu" class="hidden border-t border-slate-800 bg-slate-950 px-4 pt-3 pb-5 md:hidden space-y-2">
      <a href="/" class="block rounded-lg px-3 py-2 text-base font-medium text-slate-200 hover:bg-slate-800">Home</a>
      <a href="/project/" class="block rounded-lg px-3 py-2 text-base font-medium text-slate-200 hover:bg-slate-800">All Projects (${PROJECTS.length})</a>
      <a href="/#skills" class="block rounded-lg px-3 py-2 text-base font-medium text-slate-200 hover:bg-slate-800">Tech Stack</a>
      <a href="/#contact" class="block rounded-lg px-3 py-2 text-base font-medium text-slate-200 hover:bg-slate-800">Contact</a>
      <div class="pt-2 flex flex-col gap-2">
        <a href="https://github.com/arumy56/-weather-advisory-bot-" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-2.5 text-sm font-semibold text-emerald-300">
          🌾 View DWAS Weather Advisory Bot
        </a>
        <a href="${PROFILE.github}" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center gap-2 rounded-xl bg-slate-800 px-4 py-2.5 text-sm font-semibold text-white">
          GitHub Profile (@arumy56)
        </a>
      </div>
    </div>
  </header>

  <main class="relative z-10 flex-grow">
    ${bodyContent}
  </main>

  <!-- Footer -->
  <footer class="relative z-10 border-t border-slate-800/80 bg-slate-950/90 mt-24">
    <div class="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div>
          <div class="flex items-center gap-3">
            <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-500 font-mono text-xs font-bold text-slate-950">SA</div>
            <span class="text-lg font-bold text-white">${PROFILE.name}</span>
          </div>
          <p class="mt-3 text-sm text-slate-400 leading-relaxed max-w-sm">${PROFILE.tagline}</p>
          <p class="mt-4 font-mono text-xs text-emerald-400">● ${PROFILE.availability}</p>
        </div>

        <div>
          <h3 class="text-xs font-semibold uppercase tracking-wider text-slate-300">Navigation &amp; Highlighted Repos</h3>
          <ul class="mt-3 space-y-2 text-sm text-slate-400">
            <li><a href="/" class="hover:text-emerald-400 transition">Home Overview</a></li>
            <li><a href="/project/" class="hover:text-emerald-400 transition">Full Projects Directory</a></li>
            <li><a href="https://github.com/arumy56/-weather-advisory-bot-" target="_blank" rel="noopener noreferrer" class="hover:text-emerald-400 transition">DWAS Weather Advisory Bot (Python / Open-Meteo)</a></li>
            <li><a href="https://github.com/arumy56/billofrights" target="_blank" rel="noopener noreferrer" class="hover:text-emerald-400 transition">Kenyan Bill of Rights AI (RAG / LegalTech)</a></li>
            <li><a href="https://github.com/arumy56/cargopay" target="_blank" rel="noopener noreferrer" class="hover:text-emerald-400 transition">CargoPay Shipping &amp; Payment System</a></li>
          </ul>
        </div>

        <div>
          <h3 class="text-xs font-semibold uppercase tracking-wider text-slate-300">Connect</h3>
          <ul class="mt-3 space-y-2 text-sm text-slate-400">
            <li><a href="mailto:${PROFILE.email}" class="hover:text-emerald-400 transition">✉️ ${PROFILE.email}</a></li>
            <li><a href="${PROFILE.github}" target="_blank" rel="noopener noreferrer" class="hover:text-emerald-400 transition">💻 github.com/arumy56</a></li>
            <li><a href="${PROFILE.twitter}" target="_blank" rel="noopener noreferrer" class="hover:text-emerald-400 transition">🐦 @arumy56</a></li>
          </ul>
        </div>
      </div>

      <div class="mt-10 border-t border-slate-800/70 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
        <p>&copy; 2026 ${PROFILE.name} (${PROFILE.handle}). All rights reserved.</p>
        <p class="mt-2 sm:mt-0 font-mono">Engineered with React, Tailwind CSS &amp; Vercel</p>
      </div>
    </div>
  </footer>

  <script>
    function filterProjects(category, btnEl, featuredOnly) {
      document.querySelectorAll('.cat-btn').forEach(b => {
        b.className = 'cat-btn rounded-xl px-3.5 py-2 text-xs font-semibold transition border border-slate-800 bg-slate-900/70 text-slate-300 hover:border-slate-700 hover:text-white';
      });
      if (btnEl) {
        btnEl.className = 'cat-btn rounded-xl px-3.5 py-2 text-xs font-semibold transition bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20';
      }
      window.__activeCategory = category;
      applyProjectFilters(featuredOnly);
    }

    function applyProjectFilters(featuredOnly) {
      const cat = window.__activeCategory || 'All';
      const searchInput = document.getElementById('project-search');
      const query = searchInput ? searchInput.value.trim().toLowerCase() : '';
      document.querySelectorAll('.project-card').forEach(card => {
        const cardCat = card.getAttribute('data-category');
        const isFeatured = card.getAttribute('data-featured') === 'true';
        const searchData = card.getAttribute('data-search') || '';
        const matchCat = cat === 'All' ? (featuredOnly ? isFeatured : true) : cardCat === cat;
        const matchQuery = !query || searchData.includes(query);
        card.style.display = (matchCat && matchQuery) ? 'flex' : 'none';
      });
    }
  </script>
</body>
</html>`;
}

// Build Home Page HTML
const statsHtml = STATS.map(
  (s) => `
  <div class="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-5 backdrop-blur-sm">
    <div class="text-xs font-medium uppercase tracking-wider text-slate-400">${s.label}</div>
    <div class="mt-2 text-base font-bold text-white">${s.value}</div>
  </div>`
).join("");

const pillarsHtml = EXPERIENCE_PILLARS.map(
  (p) => `
  <div class="rounded-2xl border border-slate-800/90 bg-slate-900/50 p-6 transition hover:border-slate-700">
    <div class="inline-block rounded-lg bg-emerald-500/10 px-3 py-1 font-mono text-xs font-medium text-emerald-300">${p.period}</div>
    <h3 class="mt-4 text-lg font-bold text-white">${p.title}</h3>
    <p class="mt-2.5 text-sm leading-relaxed text-slate-400">${p.description}</p>
  </div>`
).join("");

const allProjectCardsHtml = PROJECTS.map(renderProjectCard).join("");

const skillsHtml = SKILL_CATEGORIES.map(
  (group) => `
  <div class="rounded-2xl border border-slate-800/90 bg-slate-900/50 p-6">
    <div class="flex items-center justify-between">
      <h3 class="text-lg font-bold text-white">${group.title}</h3>
      <span class="rounded-full bg-slate-800 px-3 py-1 font-mono text-xs text-emerald-400">${group.badge}</span>
    </div>
    <div class="mt-4 flex flex-wrap gap-2">
      ${group.skills
        .map(
          (skill) =>
            `<span class="rounded-lg border border-slate-800 bg-slate-950/80 px-3 py-1.5 text-xs font-medium text-slate-200 transition hover:border-emerald-500/40 hover:text-emerald-300">${skill}</span>`
        )
        .join("")}
    </div>
  </div>`
).join("");

const homeBody = `
  <!-- HERO SECTION -->
  <section class="mx-auto max-w-6xl px-4 pt-12 pb-16 sm:px-6 lg:px-8 lg:pt-20">
    <div class="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
      <div class="lg:col-span-7">
        <div class="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-medium text-emerald-300">
          <span class="h-2 w-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span>${PROFILE.availability}</span>
        </div>

        <h1 class="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-tight">
          Hi, I'm <span class="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">${PROFILE.name}</span>
        </h1>

        <p class="mt-3 font-mono text-sm sm:text-base text-emerald-400/90">
          ${PROFILE.role} • ${PROFILE.handle}
        </p>

        <p class="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
          ${PROFILE.tagline} Experienced in turning real-world domain challenges—from
          <span class="text-white font-medium">bilingual smallholder farm weather advisories (DWAS)</span> and
          <span class="text-white font-medium">constitutional law RAG assistants</span> to
          <span class="text-white font-medium">reactive Laravel/Livewire payment portals</span>—into clean, tested production software.
        </p>

        <div class="mt-8 flex flex-wrap items-center gap-3.5">
          <a href="#featured" class="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/20 transition hover:brightness-110">
            Explore Featured Work →
          </a>
          <a href="/project/" class="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/90 px-5 py-3 text-sm font-semibold text-white transition hover:border-emerald-500/50 hover:bg-slate-800">
            View All Projects (${PROJECTS.length})
          </a>
          <a href="${PROFILE.github}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm font-medium text-slate-300 transition hover:border-slate-600 hover:text-white">
            GitHub Profile ↗
          </a>
        </div>
      </div>

      <!-- Terminal Showcase -->
      <div class="lg:col-span-5">
        <div class="rounded-2xl border border-slate-800 bg-slate-900/80 shadow-2xl backdrop-blur-md overflow-hidden">
          <div class="flex items-center justify-between border-b border-slate-800 bg-slate-950/80 px-4 py-3">
            <div class="flex items-center gap-2">
              <span class="h-3 w-3 rounded-full bg-rose-500/80"></span>
              <span class="h-3 w-3 rounded-full bg-amber-500/80"></span>
              <span class="h-3 w-3 rounded-full bg-emerald-500/80"></span>
              <span class="ml-2 font-mono text-xs text-slate-400">dwas-weather-bot — bot.py</span>
            </div>
            <a href="https://github.com/arumy56/-weather-advisory-bot-" target="_blank" rel="noopener noreferrer" class="font-mono text-xs text-emerald-400 hover:underline">
              View Repo ↗
            </a>
          </div>
          <div class="p-5 font-mono text-xs leading-relaxed text-slate-300 space-y-3">
            <div class="text-slate-500"># Live Open-Meteo 3-Day Agronomic Advisory (EN &amp; SW)</div>
            <div><span class="text-cyan-400">Farmer &gt;</span> Nakuru</div>
            <div class="rounded-xl border border-emerald-500/20 bg-slate-950/90 p-3.5 text-slate-200 space-y-1.5">
              <div class="font-semibold text-emerald-400">📍 Weather Advisory for Nakuru, Kenya (3 Days)</div>
              <div>• Day 1: 🌡️ Max 23.1°C | 🌧️ Rain: 1.5 mm</div>
              <div>• Day 2: 🌡️ Max 25.0°C | 🌧️ Rain: 3.7 mm</div>
              <div>• Day 3: 🌡️ Max 22.2°C | 🌧️ Rain: 20.6 mm</div>
              <div class="pt-1 text-amber-300 font-medium">🚜 Agronomic Recommendation:</div>
              <div class="text-slate-300">🚨 Heavy Rain Alert: Delay foliar spraying &amp; fertilizer application to prevent chemical runoff and leaching.</div>
            </div>
            <div><span class="text-cyan-400">Farmer &gt;</span> /sw</div>
            <div class="rounded-xl border border-cyan-500/20 bg-slate-950/90 p-3 text-slate-300">
              <span class="text-cyan-300 font-semibold">🌾 Ushauri wa Kilimo (Kiswahili):</span> Tahadhari ya Mvua Kubwa. Ahirisha kupiga dawa na kuweka mbolea ili kuzuia kusombwa na maji.
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      ${statsHtml}
    </div>
  </section>

  <!-- ENGINEERING PILLARS -->
  <section class="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
    <div class="flex flex-col md:flex-row md:items-end justify-between mb-8">
      <div>
        <span class="font-mono text-xs font-semibold uppercase tracking-widest text-emerald-400">What I Build</span>
        <h2 class="mt-2 text-2xl sm:text-3xl font-bold text-white">Core Engineering Domains</h2>
      </div>
      <p class="mt-2 md:mt-0 text-sm text-slate-400 max-w-md">
        Combining backend reliability with thoughtful human-centered interfaces across web, mobile, and messaging channels.
      </p>
    </div>
    <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
      ${pillarsHtml}
    </div>
  </section>

  <!-- FEATURED PROJECTS -->
  <section id="featured" class="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
    <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
      <div>
        <span class="font-mono text-xs font-semibold uppercase tracking-widest text-emerald-400">Selected Portfolio</span>
        <h2 class="mt-2 text-3xl font-bold text-white">Featured Engineering Projects</h2>
      </div>
      <div class="flex flex-wrap gap-2">
        <button type="button" onclick="filterProjects('All', this, true)" class="cat-btn rounded-xl px-3.5 py-2 text-xs font-semibold transition bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20">All</button>
        <button type="button" onclick="filterProjects('AI & Bots', this, true)" class="cat-btn rounded-xl px-3.5 py-2 text-xs font-semibold transition border border-slate-800 bg-slate-900/70 text-slate-300 hover:border-slate-700 hover:text-white">AI &amp; Bots</button>
        <button type="button" onclick="filterProjects('FinTech & Web', this, true)" class="cat-btn rounded-xl px-3.5 py-2 text-xs font-semibold transition border border-slate-800 bg-slate-900/70 text-slate-300 hover:border-slate-700 hover:text-white">FinTech &amp; Web</button>
        <button type="button" onclick="filterProjects('Mobile & UI/UX', this, true)" class="cat-btn rounded-xl px-3.5 py-2 text-xs font-semibold transition border border-slate-800 bg-slate-900/70 text-slate-300 hover:border-slate-700 hover:text-white">Mobile &amp; UI/UX</button>
      </div>
    </div>

    <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
      ${allProjectCardsHtml}
    </div>
    <script>
      // Initially show featured projects on home page
      document.addEventListener('DOMContentLoaded', () => applyProjectFilters(true));
    </script>

    <div class="mt-10 text-center">
      <a href="/project/" class="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:border-emerald-500/60 hover:bg-slate-800">
        Browse Complete Project Archive (${PROJECTS.length} Repositories) →
      </a>
    </div>
  </section>

  <!-- SKILLS MATRIX -->
  <section id="skills" class="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
    <div class="mb-10">
      <span class="font-mono text-xs font-semibold uppercase tracking-widest text-emerald-400">Capabilities &amp; Tooling</span>
      <h2 class="mt-2 text-3xl font-bold text-white">Technical Stack &amp; Engineering Skills</h2>
    </div>
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
      ${skillsHtml}
    </div>
  </section>

  <!-- CONTACT -->
  <section id="contact" class="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
    <div class="rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/40 p-8 sm:p-12 text-center">
      <span class="font-mono text-xs font-semibold uppercase tracking-widest text-emerald-400">Let's Collaborate</span>
      <h2 class="mt-3 text-3xl sm:text-4xl font-bold text-white">Interested in working together?</h2>
      <p class="mx-auto mt-3 max-w-xl text-sm sm:text-base text-slate-300 leading-relaxed">
        Whether you're building digital agricultural advisory systems (DWAS), fintech platforms, or modern web &amp; mobile products, I'd love to connect.
      </p>
      <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
        <a href="mailto:${PROFILE.email}" class="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400">
          ✉️ Email ${PROFILE.email}
        </a>
        <a href="${PROFILE.github}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-slate-500 hover:bg-slate-800">
          💻 GitHub (${PROFILE.handle})
        </a>
      </div>
    </div>
  </section>
`;

const projectsPageBody = `
  <section class="mx-auto max-w-6xl px-4 pt-12 pb-20 sm:px-6 lg:px-8">
    <div class="max-w-3xl">
      <span class="font-mono text-xs font-semibold uppercase tracking-widest text-emerald-400">Engineering Portfolio &amp; Open Source</span>
      <h1 class="mt-2 text-3xl sm:text-5xl font-extrabold tracking-tight text-white">Projects &amp; Case Studies</h1>
      <p class="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
        A curated directory of production systems, AI &amp; conversational advisory bots, fintech logistics platforms, and cross-platform mobile apps built by
        <span class="text-white font-semibold">${PROFILE.name}</span> (<a href="${PROFILE.github}" target="_blank" rel="noopener noreferrer" class="text-emerald-400 hover:underline font-mono">${PROFILE.handle}</a>).
      </p>
    </div>

    <div class="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-slate-800/80 pb-6">
      <div class="flex flex-wrap gap-2">
        <button type="button" onclick="filterProjects('All', this, false)" class="cat-btn rounded-xl px-4 py-2 text-xs font-semibold transition bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20">All (${PROJECTS.length})</button>
        <button type="button" onclick="filterProjects('AI & Bots', this, false)" class="cat-btn rounded-xl px-4 py-2 text-xs font-semibold transition border border-slate-800 bg-slate-900/70 text-slate-300 hover:border-slate-700 hover:text-white">AI &amp; Bots</button>
        <button type="button" onclick="filterProjects('FinTech & Web', this, false)" class="cat-btn rounded-xl px-4 py-2 text-xs font-semibold transition border border-slate-800 bg-slate-900/70 text-slate-300 hover:border-slate-700 hover:text-white">FinTech &amp; Web</button>
        <button type="button" onclick="filterProjects('Mobile & UI/UX', this, false)" class="cat-btn rounded-xl px-4 py-2 text-xs font-semibold transition border border-slate-800 bg-slate-900/70 text-slate-300 hover:border-slate-700 hover:text-white">Mobile &amp; UI/UX</button>
      </div>
      <div class="relative w-full sm:w-72">
        <input
          id="project-search"
          type="text"
          oninput="applyProjectFilters(false)"
          placeholder="Filter by tech or keyword..."
          class="w-full rounded-xl border border-slate-800 bg-slate-900/90 px-4 py-2 text-sm text-white placeholder-slate-500 focus:border-emerald-500 focus:outline-none"
        />
      </div>
    </div>

    <div class="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
      ${allProjectCardsHtml}
    </div>

    <div class="mt-14 rounded-2xl border border-slate-800 bg-slate-900/70 p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
      <div>
        <h3 class="text-xl font-bold text-white">Explore More on GitHub</h3>
        <p class="mt-1 text-sm text-slate-400">
          View all 20+ public repositories, commits, and ongoing open-source work under <span class="font-mono text-emerald-400">@arumy56</span>.
        </p>
      </div>
      <a href="${PROFILE.github}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-emerald-400 shrink-0">
        Visit github.com/arumy56 ↗
      </a>
    </div>
  </section>
`;

const notFoundBody = `
  <div class="mx-auto max-w-2xl px-4 py-28 text-center">
    <span class="font-mono text-sm font-semibold uppercase tracking-widest text-emerald-400">Error 404</span>
    <h1 class="mt-3 text-4xl font-extrabold text-white sm:text-5xl">Page Not Found</h1>
    <p class="mt-4 text-base text-slate-400">The page you are looking for doesn't exist or has been moved.</p>
    <div class="mt-8 flex items-center justify-center gap-4">
      <a href="/" class="rounded-xl bg-emerald-500 px-5 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-emerald-400">Back to Home</a>
      <a href="/project/" class="rounded-xl border border-slate-700 bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800">View Projects</a>
    </div>
  </div>
`;

// Write output files to ./public
const publicDir = path.join(__dirname, "public");
const projectDir = path.join(publicDir, "project");
fs.mkdirSync(projectDir, { recursive: true });

fs.writeFileSync(
  path.join(publicDir, "index.html"),
  renderShell("Suhaib Ali Ahmed (@arumy56) | Full-Stack Software Engineer", homeBody)
);
fs.writeFileSync(
  path.join(projectDir, "index.html"),
  renderShell("Projects Portfolio | Suhaib Ali Ahmed (@arumy56)", projectsPageBody)
);
fs.writeFileSync(
  path.join(publicDir, "404.html"),
  renderShell("404 Not Found | Suhaib Ali Ahmed", notFoundBody)
);

const faviconSrc = path.join(__dirname, "static", "favicon.ico");
if (fs.existsSync(faviconSrc)) {
  fs.copyFileSync(faviconSrc, path.join(publicDir, "favicon.ico"));
}

console.log("✔ Built static portfolio bundle into ./public (index.html, project/index.html, 404.html)");
