import { createElement } from 'react'
import { Link } from 'react-router-dom'
import {
  ContactRound,
  Facebook,
  Instagram,
  LogIn,
  Phone,
  ShieldCheck,
  TriangleAlert,
  UserRound,
  Youtube,
} from 'lucide-react'

const socialLinks = [
  { label: 'YouTube', icon: Youtube },
  { label: 'Instagram', icon: Instagram },
  { label: 'Facebook', icon: Facebook },
]

const footerLinks = [
  { label: 'About Us', href: '#about', icon: UserRound },
  { label: 'Contact Us', href: '#contact', icon: Phone },
  { label: 'Privacy Policy', href: '#privacy', icon: ShieldCheck },
  { label: 'Terms & Conditions', href: '#terms', icon: ContactRound },
  { label: 'Disclaimer', href: '#disclaimer', icon: TriangleAlert },
]

export default function Footer() {
  return (
    <footer className="bg-[#181818] text-white">
      <div className="px-4 pb-7 pt-8 text-center sm:pb-8 sm:pt-9">
        <h2 className="font-serif text-base font-medium uppercase sm:text-lg">
          Connect With Us
        </h2>

        <div className="mt-6 flex items-center justify-center gap-3">
          {socialLinks.map(({ label, icon }) => (
            <a
              key={label}
              href="#social"
              aria-label={label}
              className="grid h-11 w-11 place-items-center rounded-full bg-white text-[#181818] shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-200 sm:h-12 sm:w-12"
            >
              {createElement(icon, { size: 25, strokeWidth: 2.7 })}
            </a>
          ))}
          <a
            href="#social"
            aria-label="X / Twitter"
            className="grid h-11 w-11 place-items-center rounded-full bg-white font-serif text-2xl font-medium text-[#181818] shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-200 sm:h-12 sm:w-12"
          >
            𝕏
          </a>
        </div>
      </div>

      <div className="border-y border-slate-500/70 px-4 py-6">
        <nav
          className="mx-auto flex max-w-4xl flex-wrap justify-center gap-3"
          aria-label="Footer navigation"
        >
          {footerLinks.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              className="inline-flex min-w-[145px] items-center justify-center gap-2 rounded-lg border border-slate-300 px-4 py-2 text-sm font-extrabold text-white transition hover:bg-white hover:text-[#181818] sm:min-w-[220px] sm:text-lg"
            >
              {createElement(icon, { size: 20, strokeWidth: 2.5 })}
              {label}
            </a>
          ))}
        </nav>
      </div>

      <div className="px-4 py-5 text-center">
        <p className="text-base font-semibold sm:text-2xl">
          Copyright © All Yono App All Rights Reserved
        </p>
        <Link
          to="/admin-login"
          className="mt-4 inline-flex items-center gap-2 rounded-lg border border-slate-500 px-3 py-2 text-xs font-bold text-slate-300 transition hover:border-white hover:text-white"
        >
          <LogIn size={15} />
          Login as Admin
        </Link>
      </div>
    </footer>
  )
}
