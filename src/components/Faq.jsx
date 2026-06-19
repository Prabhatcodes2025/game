import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { faqs } from '../data'
import SectionTitle from './SectionTitle'

export default function Faq() {
  const [active, setActive] = useState(0)

  return (
    <section className="bg-white py-14 sm:py-20" id="faq">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionTitle
          eyebrow="Need help?"
          title="Frequently Asked Questions"
          description="Quick answers to the questions visitors ask most often."
        />
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const open = active === index
            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-2xl border bg-white transition ${
                  open ? 'border-blue-200 shadow-soft' : 'border-slate-200'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setActive(open ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                  aria-expanded={open}
                >
                  <span className="text-sm font-bold text-brand-900 sm:text-base">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={19}
                    className={`shrink-0 text-brand-600 transition-transform ${
                      open ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-7 text-slate-600 sm:px-6">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
