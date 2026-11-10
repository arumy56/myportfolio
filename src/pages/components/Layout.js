import React from "react"
import { Link } from "gatsby"
import Navbar from "./Navbar"
import "../styles/global.css"
import { PROFILE } from "../../data/portfolioData"

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col relative selection:bg-emerald-500/30 selection:text-emerald-200">
      {/* Subtle Ambient Background Glows */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
        <div className="absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute top-1/3 -right-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-grid-pattern opacity-60" />
      </div>

      <Navbar />

      <main className="relative z-10 flex-grow">{children}</main>

      <footer className="relative z-10 border-t border-slate-800/80 bg-slate-950/90 mt-24">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Brand Column */}
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-500 font-mono text-xs font-bold text-slate-950">
                  SA
                </div>
                <span className="text-lg font-bold text-white">
                  {PROFILE.name}
                </span>
              </div>
              <p className="mt-3 text-sm text-slate-400 leading-relaxed max-w-sm">
                {PROFILE.tagline}
              </p>
              <p className="mt-4 font-mono text-xs text-emerald-400">
                ● {PROFILE.availability}
              </p>
            </div>

            {/* Quick Navigation */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                Navigation &amp; Highlighted Repos
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-400">
                <li>
                  <Link to="/" className="hover:text-emerald-400 transition">
                    Home Overview
                  </Link>
                </li>
                <li>
                  <Link
                    to="/project"
                    className="hover:text-emerald-400 transition"
                  >
                    Full Projects Directory
                  </Link>
                </li>
                <li>
                  <a
                    href="https://github.com/arumy56/-weather-advisory-bot-"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-400 transition"
                  >
                    DWAS Weather Advisory Bot (Python / Open-Meteo)
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/arumy56/billofrights"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-400 transition"
                  >
                    Kenyan Bill of Rights AI (RAG / LegalTech)
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/arumy56/cargopay"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-400 transition"
                  >
                    CargoPay Shipping &amp; Payment System
                  </a>
                </li>
              </ul>
            </div>

            {/* Direct Contact */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                Connect
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-400">
                <li>
                  <a
                    href={`mailto:${PROFILE.email}`}
                    className="hover:text-emerald-400 transition"
                  >
                    ✉️ {PROFILE.email}
                  </a>
                </li>
                <li>
                  <a
                    href={PROFILE.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-400 transition"
                  >
                    💻 github.com/arumy56
                  </a>
                </li>
                <li>
                  <a
                    href={PROFILE.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-400 transition"
                  >
                    🐦 @arumy56
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 border-t border-slate-800/70 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
            <p>
              &copy; {new Date().getFullYear()} {PROFILE.name} ({PROFILE.handle}).
              All rights reserved.
            </p>
            <p className="mt-2 sm:mt-0 font-mono">
              Built with React, Gatsby &amp; Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
