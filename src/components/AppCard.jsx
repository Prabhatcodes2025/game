import { ArrowDownToLine } from 'lucide-react'

export default function AppCard({ app }) {
  return (
    <article className="group flex min-w-0 flex-col items-center rounded-2xl border border-slate-100 bg-white p-3 text-center shadow-card transition duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-soft sm:p-5">
      <div
        className={`app-icon-shine relative grid h-16 w-16 place-items-center overflow-hidden rounded-[20px] bg-gradient-to-br ${app.gradient} text-lg font-extrabold text-white shadow-lg transition-transform duration-300 group-hover:scale-105 sm:h-20 sm:w-20 sm:text-xl`}
        aria-hidden="true"
      >
        <span className="relative z-10">{app.initials}</span>
      </div>
      <h3 className="mt-3 truncate text-sm font-extrabold text-brand-900 sm:mt-4 sm:text-base">
        {app.name}
      </h3>
      <p className="mt-1 min-h-9 text-[10px] font-semibold leading-4 text-slate-500 sm:text-xs">
        {app.bonus}
      </p>
      <a
        href="#download-notice"
        className="mt-3 inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-brand-600 px-2 py-2.5 text-[10px] font-extrabold text-white transition hover:bg-brand-700 sm:mt-4 sm:py-3 sm:text-xs"
        aria-label={`Download ${app.name}`}
      >
        <ArrowDownToLine size={14} />
        Download Now
      </a>
    </article>
  )
}
