import React, { useState } from "react"
import { Link } from "gatsby"
import Layout from "./components/Layout"
import "./styles/global.css"
import {
  PROFILE,
  STATS,
  SKILL_CATEGORIES,
  PROJECTS,
  EXPERIENCE_PILLARS,
} from "../data/portfolioData"

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("All")
  const categories = ["All", "AI & Bots", "FinTech & Web", "Mobile & UI/UX"]

  const displayedProjects = PROJECTS.filter((project) =>
    activeCategory === "All"
      ? project.featured
      : project.category === activeCategory
  )

  return (
    <Layout>
      {/* HERO SECTION */}
      <section className="mx-auto max-w-6xl px-4 pt-12 pb-16 sm:px-6 lg:px-8 lg:pt-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Intro & CTAs */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-medium text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              <span>{PROFILE.availability}</span>
            </div>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-tight">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                {PROFILE.name}
              </span>
            </h1>

            <p className="mt-3 font-mono text-sm sm:text-base text-emerald-400/90">
              {PROFILE.role} • {PROFILE.handle}
            </p>

            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              {PROFILE.tagline} Experienced in turning real-world domain
              challenges—from{" "}
              <span className="text-white font-medium">
                bilingual smallholder farm weather advisories (DWAS)
              </span>{" "}
              and{" "}
              <span className="text-white font-medium">
                constitutional law RAG assistants
              </span>{" "}
              to{" "}
              <span className="text-white font-medium">
                reactive Laravel/Livewire payment portals
              </span>{" "}
              —into clean, tested production software.
            </p>

            {/* Primary CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href="#featured"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/20 transition hover:brightness-110"
              >
                Explore Featured Work
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>

              <Link
                to="/project"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/90 px-5 py-3 text-sm font-semibold text-white transition hover:border-emerald-500/50 hover:bg-slate-800"
              >
                View All Projects ({PROJECTS.length})
              </Link>

              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm font-medium text-slate-300 transition hover:border-slate-600 hover:text-white"
              >
                GitHub Profile ↗
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Terminal Showcase (DWAS Bot Spotlight) */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 shadow-2xl backdrop-blur-md overflow-hidden">
              {/* Terminal Top Bar */}
              <div className="flex items-center justify-between border-b border-slate-800 bg-slate-950/80 px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                  <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                  <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-xs text-slate-400">
                    dwas-weather-bot — bot.py
                  </span>
                </div>
                <a
                  href="https://github.com/arumy56/-weather-advisory-bot-"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-emerald-400 hover:underline"
                >
                  View Repo ↗
                </a>
              </div>

              {/* Terminal Body */}
              <div className="p-5 font-mono text-xs leading-relaxed text-slate-300 space-y-3">
                <div className="text-slate-500">
                  # Live Open-Meteo 3-Day Agronomic Advisory (EN &amp; SW)
                </div>
                <div>
                  <span className="text-cyan-400">Farmer &gt;</span> Nakuru
                </div>
                <div className="rounded-xl border border-emerald-500/20 bg-slate-950/90 p-3.5 text-slate-200 space-y-1.5">
                  <div className="font-semibold text-emerald-400">
                    📍 Weather Advisory for Nakuru, Kenya (3 Days)
                  </div>
                  <div>• Day 1: 🌡️ Max 23.1°C | 🌧️ Rain: 1.5 mm</div>
                  <div>• Day 2: 🌡️ Max 25.0°C | 🌧️ Rain: 3.7 mm</div>
                  <div>• Day 3: 🌡️ Max 22.2°C | 🌧️ Rain: 20.6 mm</div>
                  <div className="pt-1 text-amber-300 font-medium">
                    🚜 Agronomic Recommendation:
                  </div>
                  <div className="text-slate-300">
                    🚨 Heavy Rain Alert: Delay foliar spraying &amp; fertilizer
                    application to prevent chemical runoff and leaching.
                  </div>
                </div>
                <div>
                  <span className="text-cyan-400">Farmer &gt;</span> /sw
                </div>
                <div className="rounded-xl border border-cyan-500/20 bg-slate-950/90 p-3 text-slate-300">
                  <span className="text-cyan-300 font-semibold">
                    🌾 Ushauri wa Kilimo (Kiswahili):
                  </span>{" "}
                  Tahadhari ya Mvua Kubwa. Ahirisha kupiga dawa na kuweka
                  mbolea ili kuzuia kusombwa na maji.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats Bar */}
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-5 backdrop-blur-sm"
            >
              <div className="text-xs font-medium uppercase tracking-wider text-slate-400">
                {stat.label}
              </div>
              <div className="mt-2 text-base font-bold text-white">
                {stat.value}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ENGINEERING PILLARS */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-emerald-400">
              What I Build
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-white">
              Core Engineering Domains
            </h2>
          </div>
          <p className="mt-2 md:mt-0 text-sm text-slate-400 max-w-md">
            Combining backend reliability with thoughtful human-centered
            interfaces across web, mobile, and messaging channels.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {EXPERIENCE_PILLARS.map((pillar, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-800/90 bg-slate-900/50 p-6 transition hover:border-slate-700"
            >
              <div className="inline-block rounded-lg bg-emerald-500/10 px-3 py-1 font-mono text-xs font-medium text-emerald-300">
                {pillar.period}
              </div>
              <h3 className="mt-4 text-lg font-bold text-white">
                {pillar.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-400">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PROJECTS SECTION */}
      <section
        id="featured"
        className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-emerald-400">
              Selected Portfolio
            </span>
            <h2 className="mt-2 text-3xl font-bold text-white">
              Featured Engineering Projects
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`rounded-xl px-3.5 py-2 text-xs font-semibold transition ${
                  activeCategory === cat
                    ? "bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20"
                    : "border border-slate-800 bg-slate-900/70 text-slate-300 hover:border-slate-700 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {displayedProjects.map((project) => (
            <article
              key={project.id}
              className={`group relative flex flex-col justify-between rounded-2xl border border-slate-800/90 bg-slate-900/60 p-6 sm:p-7 transition duration-300 ${project.borderAccent} hover:bg-slate-900/90`}
            >
              <div>
                {/* Top Badge & Year */}
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-xs font-medium text-emerald-300">
                    {project.badge}
                  </span>
                  <span className="font-mono text-xs text-slate-500">
                    {project.year}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="mt-4 text-xl font-bold text-white group-hover:text-emerald-300 transition">
                  {project.title}
                </h3>
                <p className="mt-1 text-xs font-medium text-slate-400">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="mt-3.5 text-sm leading-relaxed text-slate-300">
                  {project.description}
                </p>

                {/* Key Highlights */}
                {project.highlights && (
                  <ul className="mt-4 space-y-1.5 text-xs text-slate-400">
                    {project.highlights.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-emerald-400 mt-0.5">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="mt-6 pt-5 border-t border-slate-800/80">
                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="rounded-md bg-slate-950/90 border border-slate-800 px-2.5 py-1 font-mono text-[11px] text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-slate-800 px-3.5 py-2 text-xs font-semibold text-white transition hover:bg-emerald-500 hover:text-slate-950"
                  >
                    <span>Source Code (GitHub)</span>
                    <span>↗</span>
                  </a>

                  {project.secondaryGithub && (
                    <a
                      href={project.secondaryGithub}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 px-3 py-2 text-xs font-medium text-slate-300 transition hover:border-slate-500 hover:text-white"
                    >
                      <span>Related Repo ↗</span>
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-3.5 py-2 text-xs font-semibold text-emerald-300 transition hover:bg-emerald-500 hover:text-slate-950"
                    >
                      <span>Live Demo</span>
                      <span>↗</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/project"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:border-emerald-500/60 hover:bg-slate-800"
          >
            Browse Complete Project Archive ({PROJECTS.length} Repositories) →
          </Link>
        </div>
      </section>

      {/* TECHNICAL SKILLS MATRIX */}
      <section
        id="skills"
        className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8"
      >
        <div className="mb-10">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-emerald-400">
            Capabilities &amp; Tooling
          </span>
          <h2 className="mt-2 text-3xl font-bold text-white">
            Technical Stack &amp; Engineering Skills
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {SKILL_CATEGORIES.map((group, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-800/90 bg-slate-900/50 p-6"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-white">{group.title}</h3>
                <span className="rounded-full bg-slate-800 px-3 py-1 font-mono text-xs text-emerald-400">
                  {group.badge}
                </span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="rounded-lg border border-slate-800 bg-slate-950/80 px-3 py-1.5 text-xs font-medium text-slate-200 transition hover:border-emerald-500/40 hover:text-emerald-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT / CALL TO ACTION */}
      <section
        id="contact"
        className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8"
      >
        <div className="rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/40 p-8 sm:p-12 text-center">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-emerald-400">
            Let&apos;s Collaborate
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">
            Interested in working together?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm sm:text-base text-slate-300 leading-relaxed">
            Whether you&apos;re building digital agricultural advisory systems
            (DWAS), fintech platforms, or modern web &amp; mobile products, I&apos;d
            love to connect.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${PROFILE.email}`}
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400"
            >
              ✉️ Email {PROFILE.email}
            </a>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-slate-500 hover:bg-slate-800"
            >
              💻 GitHub ({PROFILE.handle})
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const Head = () => (
  <>
    <title>Suhaib Ali Ahmed (@arumy56) | Full-Stack Software Engineer</title>
    <meta
      name="description"
      content="Portfolio of Suhaib Ali Ahmed (@arumy56) — Full-Stack Software Developer & UI/UX Designer specializing in Python, DWAS Weather Bots, RAG AI, Laravel/Livewire, React, and Flutter."
    />
  </>
)
