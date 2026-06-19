import { Send } from 'lucide-react'

export default function Hero() {
  return (
    <>
      <section id="home" className="bg-white">
        <div className="mx-auto max-w-7xl px-3 pt-4 sm:px-6 sm:pt-6 lg:px-8">
          <img
            src="/featured-yono-apps.png"
            alt="Featured Yono app collection"
            width="958"
            height="818"
            fetchPriority="high"
            decoding="async"
            className="mx-auto block h-auto w-full max-w-6xl object-contain"
          />
        </div>
      </section>

      <section className="bg-white px-3 pb-5 pt-3 sm:px-6 sm:pb-7 sm:pt-4">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 rounded-xl border border-blue-200 bg-blue-50 px-4 py-4 sm:flex-row sm:px-6">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#229ED9] text-white shadow-sm">
              <Send size={20} fill="currentColor" aria-hidden="true" />
            </span>
            <p className="text-sm font-extrabold text-slate-800 sm:text-base">
              Join Our Telegram Channel
            </p>
          </div>

          <a
            href="#telegram"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#123b70] px-5 py-3 text-sm font-extrabold text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-[#0c2f5d] hover:shadow-md sm:w-auto"
          >
            <Send size={17} fill="currentColor" aria-hidden="true" />
            Join Now
          </a>
        </div>
      </section>

    </>
  )
}
