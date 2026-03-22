export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">
          The Story
        </h2>
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="w-32 h-32 rounded-full bg-bg-card border-2 border-accent/30 flex items-center justify-center shrink-0 mx-auto md:mx-0">
            <span className="text-text-muted text-sm">Photo</span>
          </div>
          <div className="space-y-4 text-lg text-text-secondary leading-relaxed">
            <p>
              I&apos;ve been building in crypto since before most people knew
              what a blockchain was. From ICO tokenomics in 2017 to chain
              abstraction in 2025, I&apos;ve been at the frontier of every
              major Web3 wave.
            </p>
            <p>
              As the <span className="text-text-primary font-medium">first growth hire at CoinDCX</span>,
              I helped scale India&apos;s largest crypto exchange from a
              scrappy startup to a{" "}
              <span className="text-text-primary font-medium">$1.1B unicorn</span>.
              I built the INR trading market from zero, led the campaign
              that acquired 10M users, and created frameworks still used
              company-wide today.
            </p>
            <p>
              Now I lead{" "}
              <span className="text-text-primary font-medium">Okto</span> &mdash;
              CoinDCX&apos;s chain abstraction platform &mdash; across
              product, growth, BD, and marketing. Together with the team, I
              helped drive $3B+ in volume, made Okto the #1 Hyperliquid wallet,
              and built it into a Top 5 global chain abstraction brand in 6
              months.
            </p>
            <p className="text-accent-light font-medium">
              I&apos;m looking for my next 0&rarr;1.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
