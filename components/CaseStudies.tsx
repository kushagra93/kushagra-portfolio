const caseStudies = [
  {
    title: "Okto: 0 to 1 Chain Abstraction",
    company: "CoinDCX",
    period: "2023 - Present",
    metrics: ["$3B+ volume", "Top 5 brand globally", "#1 Hyperliquid wallet", "16K to 100K+ Twitter"],
    description:
      "Led Okto from zero market presence to a Top 5 global chain abstraction brand. Owned product, growth, BD, and marketing across the team. Launched India's first compliant DeFi product, driving $0 to $14M monthly volume.",
    links: [
      { label: "Okto", url: "https://okto.tech" },
      { label: "The Defiant", url: "https://thedefiant.io/news/defi/okto-the-phantom-of-hyperliquid" },
      { label: "Milk Road", url: "https://milkroad.com/sponsored/okto-wallet/" },
    ],
    tags: ["Chain Abstraction", "DeFi", "Growth", "Product"],
  },
  {
    title: "Arbitrum LTIPP Grant",
    company: "Arbitrum Foundation",
    period: "2024",
    metrics: ["50,000 ARB secured", "Sole author", "5x volume growth post-grant"],
    description:
      "Wrote and won the LTIPP grant application single-handedly from the Arbitrum Foundation. Delivered 5x volume growth on the Arbitrum ecosystem and improved user retention by 40% through UX redesign.",
    links: [
      { label: "Grant Application", url: "https://forum.arbitrum.foundation/t/okto-ltipp-application-final/21633" },
    ],
    tags: ["Grants", "DeFi", "Ecosystem Growth"],
  },
  {
    title: "First Hyperliquid-Native Wallet",
    company: "Okto x Hyperliquid",
    period: "2024",
    metrics: ["#1 market share", "Pre-airdrop integration", "First-mover advantage"],
    description:
      "Identified Hyperliquid as the next big DeFi ecosystem before the airdrop. Built the integration that made Okto the first Hyperliquid-native mobile wallet, capturing #1 wallet market share.",
    links: [
      { label: "The Defiant", url: "https://thedefiant.io/news/defi/okto-the-phantom-of-hyperliquid" },
      { label: "PR Newswire", url: "https://www.prnewswire.co.uk/news-releases/okto-becomes-go-to-defi-trading-app-in-korea-with-hyperliquid-spot--futures-integration-hyperevm-launching-soon-302435299.html" },
    ],
    tags: ["DeFi", "Product", "First-Mover"],
  },
  {
    title: "CoinDCX Futures: $0 to $600M Daily",
    company: "CoinDCX",
    period: "2023",
    metrics: ["$0 to $20M daily in 90 days", "$500M campaign volume", "5,000+ participants"],
    description:
      "Helped launch CoinDCX's futures trading platform in India. Created the 'Trading Premier League' \u2014 India's largest trader campaign with 5,000+ participants. Built influencer and affiliate engine from zero budget.",
    links: [],
    tags: ["Futures", "Growth", "Campaigns"],
  },
  {
    title: "Bitcoin Liya Kya? \u2014 10M Users",
    company: "CoinDCX",
    period: "2019 - 2022",
    metrics: ["10M user acquisitions", "$1.1B unicorn", "India's #1 INR/crypto market"],
    description:
      "Led India's most successful crypto campaign as the first growth hire. Built the INR trading market from zero, created the 7M Token Listing Framework (now the company standard), and helped scale CoinDCX from startup to unicorn.",
    links: [],
    tags: ["User Acquisition", "0 to 1", "Market Building"],
  },
  {
    title: "Gitopia: Decentralized GitHub",
    company: "Gitopia",
    period: "2022 - 2023",
    metrics: ["10K+ developers", "$1.15M raised", "#1 in Cosmos ecosystem"],
    description:
      "Built the world's first decentralized code collaboration platform on Cosmos. Grew a 10,000+ developer community from scratch with zero paid spend as the sole growth resource.",
    links: [
      { label: "Gitopia", url: "https://gitopia.com" },
    ],
    tags: ["Developer Community", "Cosmos", "0 to 1"],
  },
  {
    title: "Unfold: India's Largest Web3 Hackathon",
    company: "CoinDCX",
    period: "2024",
    metrics: ["1,500+ attendees", "600+ developers", "$100K bounties", "$1M startup funding"],
    description:
      "Organized India's largest Web3 hackathon. Brought together 60+ global Web3 leaders including founders from Polygon, Aptos, and CoinDCX. Featured Demo Day with $1M in startup funding opportunities.",
    links: [
      { label: "Unfold 2024", url: "https://unfoldweb3.com" },
    ],
    tags: ["Events", "Hackathons", "Ecosystem"],
  },
];

export default function CaseStudies() {
  return (
    <section id="work" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
          Proof of Work
        </h2>
        <p className="text-text-secondary mb-12 text-lg">
          Not claims. Receipts.
        </p>

        <div className="space-y-8">
          {caseStudies.map((cs) => (
            <div key={cs.title} className="glass-card p-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-text-primary">
                    {cs.title}
                  </h3>
                  <p className="text-accent text-sm">
                    {cs.company} &middot; {cs.period}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mb-4">
                {cs.metrics.map((m) => (
                  <span
                    key={m}
                    className="px-3 py-1 bg-accent/10 text-accent-light text-sm rounded-full border border-accent/20"
                  >
                    {m}
                  </span>
                ))}
              </div>

              <p className="text-text-secondary mb-4 leading-relaxed">
                {cs.description}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                {cs.links.map((l) => (
                  <a
                    key={l.url}
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent-light text-sm font-medium transition-colors flex items-center gap-1"
                  >
                    {l.label}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                    </svg>
                  </a>
                ))}
                <div className="flex flex-wrap gap-2 ml-auto">
                  {cs.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-xs text-text-muted border border-border-subtle rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
