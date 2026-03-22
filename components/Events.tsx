const events = [
  {
    name: "ETH Denver 2025",
    role: "Speaker + Judge",
    location: "Denver, USA",
    url: "https://ethdenver.com",
  },
  {
    name: "Token 2049",
    role: "Speaker & Organizer",
    location: "Singapore",
    description: "Organized Consumer Crypto Day side event with Coinbase APAC MD, Jump Capital, Agoric CEO",
    url: "https://luma.com/5yhlxyca",
  },
  {
    name: "Unfold 2024",
    role: "Organizer",
    location: "Bengaluru, India",
    description: "India's largest Web3 hackathon \u2014 1,500+ attendees, 600+ developers, $100K bounties",
    url: "https://unfoldweb3.com",
  },
  {
    name: "ETH India",
    role: "Representative",
    location: "India",
  },
  {
    name: "Consumer Crypto Day",
    role: "Organizer",
    location: "Singapore",
    description: "Hosted with Agoric, Base, and Polygon at Token 2049",
    url: "https://luma.com/5yhlxyca",
  },
];

export default function Events() {
  return (
    <section id="events" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 gradient-text">
          Events & Speaking
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {events.map((e) => (
            <div key={e.name + e.role} className="glass-card p-6">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-bold text-text-primary">
                  {e.name}
                </h3>
                <span className="px-2 py-0.5 bg-accent/10 text-accent text-xs rounded-full shrink-0 ml-2">
                  {e.role}
                </span>
              </div>
              <p className="text-text-muted text-sm mb-2">{e.location}</p>
              {e.description && (
                <p className="text-text-secondary text-sm">{e.description}</p>
              )}
              {e.url && (
                <a
                  href={e.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-accent hover:text-accent-light text-sm mt-3 transition-colors"
                >
                  View Event
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
