const skillGroups = [
  {
    category: "Growth & Product",
    skills: [
      "Go-to-Market Strategy",
      "Product-Market Fit",
      "User Acquisition",
      "Viral Growth Loops",
      "Gamification",
      "A/B Testing",
      "GTM Engineering",
    ],
  },
  {
    category: "Blockchain & DeFi",
    skills: [
      "Chain Abstraction",
      "DeFi Protocols",
      "Token Economics",
      "Smart Contract Economics",
      "L1/L2",
      "DEX/Cross-chain",
      "Hyperliquid",
    ],
  },
  {
    category: "Community & Marketing",
    skills: [
      "Developer Relations",
      "Brand Building (0-1)",
      "Event Marketing",
      "Content Strategy",
      "Hackathon Organization",
      "Social Media Growth",
      "Influencer/Affiliate",
    ],
  },
  {
    category: "Tools & Analytics",
    skills: [
      "Dune Analytics",
      "Mixpanel",
      "Google Analytics",
      "HubSpot",
      "SQL",
      "Python",
      "Discord/Telegram",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 gradient-text">
          What I Bring
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <h3 className="text-lg font-bold text-text-primary mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 glass-card text-sm text-text-secondary cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
