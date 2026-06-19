import { Download } from 'lucide-react'
import { useApps } from '../appStore'

function AppGridCard({ app }) {
  return (
    <article className="group flex min-w-0 flex-col items-center rounded-xl border border-slate-200 bg-white p-3 text-center shadow-[0_3px_10px_rgba(0,0,0,0.08)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_16px_rgba(0,0,0,0.12)] sm:p-4">
      <div className="flex min-w-0 flex-col items-center">
        {app.icon ? (
          <img
            src={app.icon}
            alt={`${app.name} app icon`}
            width="78"
            height="78"
            loading="lazy"
            decoding="async"
            className="h-[76px] w-[76px] rounded-xl object-contain shadow-sm sm:h-20 sm:w-20"
          />
        ) : (
          <div
            className={`grid h-[76px] w-[76px] place-items-center rounded-xl bg-gradient-to-br ${app.gradient} text-sm font-black text-white shadow-sm sm:h-20 sm:w-20`}
            aria-hidden="true"
          >
            <span className="rounded-md border border-white/30 bg-black/20 px-2 py-1">
              {app.initials}
            </span>
          </div>
        )}

        <div className="mt-3 min-w-0">
          <h3 className="truncate text-sm font-extrabold text-slate-800 sm:text-[15px]">
            {app.name}
          </h3>
          <p className="mt-1 text-[10px] font-bold text-orange-600 sm:text-[11px]">
            Signup Bonus: {app.bonus}
          </p>
          <p className="mt-0.5 text-[10px] font-bold text-green-700 sm:text-[11px]">
            Min Withdrawal: {app.withdrawal}
          </p>
        </div>
      </div>

      <a
        href={app.downloadUrl}
        target={app.downloadUrl.startsWith('http') ? '_blank' : undefined}
        rel={app.downloadUrl.startsWith('http') ? 'noreferrer' : undefined}
        className="mt-3 inline-flex w-full items-center justify-center gap-1.5 rounded-md bg-green-600 px-2 py-2.5 text-[11px] font-extrabold text-white transition hover:bg-green-700 sm:text-xs"
        aria-label={`Download ${app.name}`}
      >
        <Download size={14} strokeWidth={3} />
        Download Now
      </a>
    </article>
  )
}

function SectionHeading({ children }) {
  return (
    <div className="mb-5 flex items-center justify-center gap-2.5 sm:mb-7">
      <span className="h-px w-12 bg-violet-800 sm:w-24" />
      <span className="h-0 w-0 border-b-[8px] border-l-[8px] border-b-violet-800 border-l-transparent" />
      <h2 className="whitespace-nowrap text-base font-extrabold italic tracking-[0.08em] text-violet-900 sm:text-xl">
        {children}
      </h2>
      <span className="h-0 w-0 border-b-[8px] border-r-[8px] border-b-violet-800 border-r-transparent" />
      <span className="h-px w-12 bg-violet-800 sm:w-24" />
    </div>
  )
}

export default function AppDirectory() {
  const apps = useApps()
  const allApps = apps.filter((app) => app.section === 'all')
  const newApps = apps.filter((app) => app.section === 'new')

  return (
    <div className="bg-white">
      <section id="apps" className="pb-9 pt-4 sm:pb-12 sm:pt-6">
        <div className="mx-auto max-w-6xl px-3 sm:px-6">
          <SectionHeading>ALL APPS</SectionHeading>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5">
            {allApps.map((app) => (
              <AppGridCard key={app.name} app={app} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-100 bg-[#f8f9fa] py-9 sm:py-12">
        <div className="mx-auto max-w-6xl px-3 sm:px-6">
          <SectionHeading>NEW APPS</SectionHeading>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5">
            {newApps.map((app) => (
              <AppGridCard key={`new-${app.name}`} app={app} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
