import { ArrowRight, CheckCircle2 } from 'lucide-react'
import Header from './components/Header'
import Hero from './components/Hero'
import AppDirectory from './components/AppDirectory'
import InfoMarquee from './components/InfoMarquee'
import SectionTitle from './components/SectionTitle'
import Faq from './components/Faq'
import Footer from './components/Footer'
import { categories } from './data'

const features = [
  ['Free Bonus', 'Welcome reward highlights for new users.'],
  ['Fast Download', 'Simple access with clear download actions.'],
  ['Updated Apps', 'A growing list of fresh and popular options.'],
  ['Easy Withdrawal', 'Find apps offering convenient wallet features.'],
]

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AppDirectory />
        <InfoMarquee />

        <section id="categories" className="bg-white py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle
              eyebrow="Explore by type"
              title="Find Your Favourite Category"
              description="Jump straight to the kind of app you are looking for."
            />
            <div className="grid gap-4 md:grid-cols-3 md:gap-6">
              {categories.map((category) => (
                <article
                  key={category.title}
                  className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${category.style} p-6 text-white shadow-card sm:p-7`}
                >
                  <span className="absolute -right-5 -top-10 text-[130px] font-black leading-none text-white/10">
                    {category.icon}
                  </span>
                  <span className="relative grid h-11 w-11 place-items-center rounded-xl bg-white/20 text-xl font-black backdrop-blur">
                    {category.icon}
                  </span>
                  <h3 className="relative mt-7 text-xl font-extrabold">{category.title}</h3>
                  <p className="relative mt-2 max-w-xs text-sm leading-6 text-white/80">
                    {category.description}
                  </p>
                  <a
                    href="#apps"
                    className="relative mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-xs font-extrabold text-brand-900 transition group-hover:gap-3"
                  >
                    Get Here <ArrowRight size={15} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-14 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:px-8">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand-600">Your app guide</p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-brand-900 sm:text-4xl">
                All Yono App Download
              </h2>
              <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600 sm:text-base">
                <p>
                  All Yono App is a simple place to explore a variety of mobile
                  entertainment apps in one organized directory. Visitors can
                  compare names, discover promotional highlights and quickly
                  locate the app they want.
                </p>
                <p>
                  Our homepage is designed to make Yono app discovery clear and
                  convenient on every screen. The latest listings appear in a
                  responsive grid, with search built in for faster browsing.
                </p>
                <p>
                  App offers and availability may change over time. Before you
                  download, check the app publisher, permissions, bonus terms and
                  withdrawal rules so you can make an informed choice.
                </p>
                <p id="download-notice">
                  We aim to keep information easy to understand and regularly
                  refreshed. Always use third-party apps responsibly and follow
                  the laws and age requirements that apply in your location.
                </p>
              </div>
            </div>
            <div className="rounded-3xl bg-brand-900 p-5 shadow-card sm:p-7">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {features.map(([title, text]) => (
                  <div key={title} className="rounded-2xl bg-white/[0.07] p-4 sm:p-5">
                    <CheckCircle2 className="text-blue-300" size={22} />
                    <h3 className="mt-4 text-sm font-extrabold text-white sm:text-base">{title}</h3>
                    <p className="mt-2 text-[11px] leading-5 text-slate-300 sm:text-xs">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Faq />

        <section id="contact" className="px-4 py-12 sm:px-6 sm:py-16">
          <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 rounded-3xl bg-brand-600 px-6 py-9 text-center shadow-soft sm:px-10 md:flex-row md:text-left">
            <div>
              <h2 className="text-2xl font-extrabold text-white">Can’t find the app you want?</h2>
              <p className="mt-2 text-sm text-blue-100">Send us a suggestion and we’ll consider it for a future update.</p>
            </div>
            <a href="mailto:hello@example.com" className="shrink-0 rounded-xl bg-white px-5 py-3 text-sm font-extrabold text-brand-700 transition hover:-translate-y-0.5">
              Contact Us
            </a>
          </div>
        </section>

        <div className="sr-only">
          <span id="privacy">Privacy Policy</span>
          <span id="terms">Terms and Conditions</span>
          <span id="disclaimer">Disclaimer</span>
          <span id="social">Social links</span>
          <span id="telegram">Telegram channel</span>
        </div>
      </main>
      <Footer />
    </>
  )
}
