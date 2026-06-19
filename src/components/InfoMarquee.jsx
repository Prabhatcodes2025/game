const sliderText =
  'All Yono App 2024, New Yono Apps 2023, All Yono Game 2024, Teen Patti Gold 51 Bonus, Yono Rummy, Yono Games, Yono Slots, All Rummy App 2024, New Rummy Apps 2024, Rummy 365, Spin 777, Yono VIP, Bingo 101, Ind Slots, Dragon Vs Tiger, Top Yono App, Best Rummy App'

export default function InfoMarquee() {
  return (
    <section
      className="marquee-shell border-y border-dashed border-blue-300 bg-[#1148a5] py-2.5 text-white"
      aria-label="Popular app keywords"
    >
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <span
            key={copy}
            className="marquee-copy pr-12 text-sm font-extrabold uppercase tracking-wide sm:text-xl"
            aria-hidden={copy === 1}
          >
            {sliderText}
          </span>
        ))}
      </div>
    </section>
  )
}
