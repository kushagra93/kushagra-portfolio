const milestones = [
  {
    year: "2016",
    title: "Started in Tech",
    description: "Built DateMe DUDE at ITH Technology. First exposure to decentralized concepts.",
    highlight: false,
  },
  {
    year: "2017",
    title: "ICO Era",
    description: "Strategy Consultant at Neptune Blockchains. Built tokenomics and GTM for ICO launches. Organized 100+ hackathons with Venturesity.",
    highlight: false,
  },
  {
    year: "2019",
    title: "CoinDCX: First Growth Hire",
    description: "Joined as the first growth team member. No INR trading market existed yet.",
    highlight: true,
  },
  {
    year: "2020",
    title: "Built INR Markets from Zero",
    description: "Set up OTC, scaled to $10M/day autopilot volume. Created the 7M Token Listing Framework.",
    highlight: true,
  },
  {
    year: "2021",
    title: "Bitcoin Liya Kya? \u2014 10M Users",
    description: "Led India's most successful crypto campaign. CoinDCX became a $1.1B unicorn.",
    highlight: true,
  },
  {
    year: "2022",
    title: "Gitopia: Decentralized GitHub",
    description: "Left to build the world's first decentralized code collaboration platform. Raised $1.15M. Built 10K+ dev community.",
    highlight: true,
  },
  {
    year: "2023",
    title: "Back to CoinDCX: Futures + Okto",
    description: "Launched futures trading ($0 to $600M daily). Started building Okto from scratch. Won Arbitrum LTIPP grant.",
    highlight: true,
  },
  {
    year: "2024",
    title: "Okto: Top 5 Chain Abstraction Brand",
    description: "$3B+ volume. #1 Hyperliquid wallet. ETH Denver speaker. Unfold hackathon organizer. CoinDCX Web3 mode launch.",
    highlight: true,
  },
  {
    year: "2025",
    title: "What's Next?",
    description: "ETH Denver judge. Building GTM engineering at the intersection of crypto, finance, and AI. Looking for the next 0\u21921.",
    highlight: true,
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 gradient-text">
          Journey
        </h2>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-accent/20" />

          {milestones.map((m, i) => (
            <div
              key={m.year}
              className={`relative flex flex-col md:flex-row items-start mb-12 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div
                className={`absolute left-4 md:left-1/2 w-3 h-3 rounded-full -translate-x-1/2 mt-1.5 ${
                  m.highlight ? "bg-accent shadow-[0_0_12px_rgba(46,117,182,0.5)]" : "bg-border-subtle"
                }`}
              />

              <div
                className={`ml-10 md:ml-0 md:w-[45%] ${
                  i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                }`}
              >
                <span className="text-accent font-mono text-sm font-bold">
                  {m.year}
                </span>
                <h3 className="text-lg font-bold text-text-primary mt-1">
                  {m.title}
                </h3>
                <p className="text-text-secondary text-sm mt-1 leading-relaxed">
                  {m.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
