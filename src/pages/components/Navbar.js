import { Link } from "gatsby"
import React, { useState } from "react"
import { PROFILE } from "../../data/portfolioData"

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <Link to="/" className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 font-mono text-sm font-bold text-slate-950 shadow-lg shadow-emerald-500/20 transition group-hover:scale-105">
            SA
          </div>
          <div>
            <span className="block text-base font-bold tracking-tight text-white group-hover:text-emerald-400 transition">
              {PROFILE.name}
            </span>
            <span className="block font-mono text-xs text-slate-400">
              {PROFILE.handle} • Full-Stack &amp; AI
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          <Link
            to="/"
            className="rounded-lg px-3.5 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-800/70 hover:text-white"
          >
            Home
          </Link>
          <a
            href="/#featured"
            className="rounded-lg px-3.5 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-800/70 hover:text-white"
          >
            Featured
          </a>
          <Link
            to="/project"
            className="rounded-lg px-3.5 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-800/70 hover:text-white"
          >
            All Projects
          </Link>
          <a
            href="/#skills"
            className="rounded-lg px-3.5 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-800/70 hover:text-white"
          >
            Tech Stack
          </a>
          <a
            href="/#contact"
            className="rounded-lg px-3.5 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-800/70 hover:text-white"
          >
            Contact
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com/arumy56/-weather-advisory-bot-"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-semibold text-emerald-300 transition hover:border-emerald-400 hover:bg-emerald-500/20"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            DWAS Weather Bot
          </a>
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:border-slate-500 hover:bg-slate-800"
          >
            <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
            GitHub
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="inline-flex items-center justify-center rounded-lg border border-slate-800 p-2 text-slate-300 hover:bg-slate-800 hover:text-white md:hidden"
          aria-label="Toggle Menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="border-t border-slate-800 bg-slate-950 px-4 pt-3 pb-5 md:hidden space-y-2">
          <Link
            to="/"
            onClick={() => setMobileOpen(false)}
            className="block rounded-lg px-3 py-2 text-base font-medium text-slate-200 hover:bg-slate-800"
          >
            Home
          </Link>
          <Link
            to="/project"
            onClick={() => setMobileOpen(false)}
            className="block rounded-lg px-3 py-2 text-base font-medium text-slate-200 hover:bg-slate-800"
          >
            All Projects ({`10+`})
          </Link>
          <a
            href="/#skills"
            onClick={() => setMobileOpen(false)}
            className="block rounded-lg px-3 py-2 text-base font-medium text-slate-200 hover:bg-slate-800"
          >
            Tech Stack
          </a>
          <a
            href="/#contact"
            onClick={() => setMobileOpen(false)}
            className="block rounded-lg px-3 py-2 text-base font-medium text-slate-200 hover:bg-slate-800"
          >
            Contact
          </a>
          <div className="pt-2 flex flex-col gap-2">
            <a
              href="https://github.com/arumy56/-weather-advisory-bot-"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-2.5 text-sm font-semibold text-emerald-300"
            >
              🌾 View DWAS Weather Advisory Bot
            </a>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl bg-slate-800 px-4 py-2.5 text-sm font-semibold text-white"
            >
              GitHub Profile (@arumy56)
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
