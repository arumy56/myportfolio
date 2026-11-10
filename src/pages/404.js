import React from "react"
import { Link } from "gatsby"
import Layout from "./components/Layout"

export default function NotFound() {
  return (
    <Layout>
      <div className="mx-auto max-w-2xl px-4 py-28 text-center">
        <span className="font-mono text-sm font-semibold uppercase tracking-widest text-emerald-400">
          Error 404
        </span>
        <h1 className="mt-3 text-4xl font-extrabold text-white sm:text-5xl">
          Page Not Found
        </h1>
        <p className="mt-4 text-base text-slate-400">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Link
            to="/"
            className="rounded-xl bg-emerald-500 px-5 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-emerald-400"
          >
            Back to Home
          </Link>
          <Link
            to="/project"
            className="rounded-xl border border-slate-700 bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            View Projects
          </Link>
        </div>
      </div>
    </Layout>
  )
}
