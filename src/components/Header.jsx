import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  ['Home', '#home'],
  ['Categories', '#categories'],
  ['Contact Us', '#contact'],
  ['About Us', '#about'],
  ['Privacy Policy', '#privacy'],
  ['Terms & Conditions', '#terms'],
  ['Disclaimer', '#disclaimer'],
]

export default function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const close = () => setOpen(false)
    window.addEventListener('resize', close)
    return () => window.removeEventListener('resize', close)
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-[72px] lg:px-8">
        <a href="#home" className="group flex items-center gap-2.5" aria-label="All Yono App home">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-600 text-sm font-extrabold text-white shadow-soft transition-transform group-hover:-rotate-3">
            AY
          </span>
          <span className="text-[17px] font-extrabold tracking-tight text-brand-900 sm:text-lg">
            All Yono <span className="text-brand-600">App</span>
          </span>
        </a>

        <nav className="hidden items-center gap-5 xl:flex" aria-label="Main navigation">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-[13px] font-semibold text-slate-600 transition-colors hover:text-brand-600"
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          href="#apps"
          className="hidden rounded-lg bg-brand-600 px-4 py-2.5 text-xs font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-brand-700 lg:inline-flex xl:hidden"
        >
          Browse Apps
        </a>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-lg border border-slate-200 text-slate-700 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {open ? <X size={21} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          className="border-t border-slate-100 bg-white px-4 py-3 shadow-xl lg:hidden"
          aria-label="Mobile navigation"
        >
          <div className="mx-auto grid max-w-7xl gap-1">
            {links.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-brand-50 hover:text-brand-600"
              >
                {label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
