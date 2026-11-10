import React, { useState } from "react"
import Layout from "../components/Layout"
import { PROJECTS, PROFILE } from "../../data/portfolioData"

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const categories = ["All", "AI & Bots", "FinTech & Web", "Mobile & UI/UX"]

  const filteredProjects = PROJECTS.filter((project) => {
    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory
    const q = searchQuery.trim().toLowerCase()
    const matchesSearch =
      !q ||
      project.title.toLowerCase().includes(q) ||
      project.description.toLowerCase().includes(q) ||
      project.tech.some((t) => t.toLowerCase().includes(q))
    return matchesCategory && matchesSearch
  })

  return (
    <Layout>
      <section className="mx-auto max-w-6xl px-4 pt-12 pb-20 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-emerald-400">
            Engineering Portfolio &amp; Open Source
          </span>
          <h1 className="mt-2 text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Projects &amp; Case Studies
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            A curated directory of production systems, AI &amp; conversational
            advisory bots, fintech logistics platforms, and cross-platform
            mobile apps built by{" "}
            <span className="text-white font-semibold">{PROFILE.name}</span> (
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:underline font-mono"
            >
              {PROFILE.handle}
            </a>
            ).
          </p>
        </div>

        {/* Filter & Search Controls */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-slate-800/80 pb-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-xl px-4 py-2 text-xs font-semibold transition ${
                  selectedCategory === cat
                    ? "bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20"
                    : "border border-slate-800 bg-slate-900/70 text-slate-300 hover:border-slate-700 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-72">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by tech or keyword..."
              className="w-full rounded-xl border border-slate-800 bg-slate-900/90 px-4 py-2 text-sm text-white placeholder-slate-500 focus:border-emerald-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className={`group flex flex-col justify-between rounded-2xl border border-slate-800/90 bg-slate-900/60 p-6 sm:p-7 transition duration-300 ${project.borderAccent} hover:bg-slate-900/90`}
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-xs font-medium text-emerald-300">
                    {project.badge}
                  </span>
                  <span className="font-mono text-xs text-slate-500">
                    {project.year}
                  </span>
                </div>

                <h2 className="mt-4 text-xl font-bold text-white group-hover:text-emerald-300 transition">
                  {project.title}
                </h2>
                <p className="mt-1 text-xs font-medium text-slate-400">
                  {project.subtitle}
                </p>

                <p className="mt-3.5 text-sm leading-relaxed text-slate-300">
                  {project.description}
                </p>

                {project.highlights && (
                  <ul className="mt-4 space-y-1.5 text-xs text-slate-400">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-emerald-400 mt-0.5">▹</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="mt-6 pt-5 border-t border-slate-800/80">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="rounded-md bg-slate-950/90 border border-slate-800 px-2.5 py-1 font-mono text-[11px] text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-slate-800 px-3.5 py-2 text-xs font-semibold text-white transition hover:bg-emerald-500 hover:text-slate-950"
                  >
                    <span>GitHub Repo</span>
                    <span>↗</span>
                  </a>

                  {project.secondaryGithub && (
                    <a
                      href={project.secondaryGithub}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 px-3 py-2 text-xs font-medium text-slate-300 transition hover:border-slate-500 hover:text-white"
                    >
                      <span>Secondary Repo ↗</span>
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

        {/* GitHub Banner */}
        <div className="mt-14 rounded-2xl border border-slate-800 bg-slate-900/70 p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white">
              Explore More on GitHub
            </h3>
            <p className="mt-1 text-sm text-slate-400">
              View all 20+ public repositories, commits, and ongoing open-source
              work under <span className="font-mono text-emerald-400">@arumy56</span>.
            </p>
          </div>
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-emerald-400 shrink-0"
          >
            Visit github.com/arumy56 ↗
          </a>
        </div>
      </section>
    </Layout>
  )
}

export const Head = () => (
  <>
    <title>Projects Portfolio | Suhaib Ali Ahmed (@arumy56)</title>
    <meta
      name="description"
      content="Complete engineering portfolio of Suhaib Ali Ahmed (@arumy56) including the DWAS Weather Advisory Bot, Kenyan Bill of Rights AI, CargoPay, CoreSync, and Al-Hikma."
    />
  </>
)
