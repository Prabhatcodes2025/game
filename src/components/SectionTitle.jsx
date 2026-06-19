export default function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-10">
      <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand-600">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-brand-900 sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-sm leading-6 text-slate-500 sm:text-base">
          {description}
        </p>
      )}
    </div>
  )
}
