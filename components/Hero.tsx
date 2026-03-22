const metrics = [
  { value: "$3B+", label: "Transaction Volume" },
  { value: "10M+", label: "Users Acquired" },
  { value: "50+", label: "Hackathons Led" },
  { value: "10K+", label: "Dev Community" },
];

export default function Hero() {
  return (
    <section className="hero-gradient relative min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 animate-fade-in-up">
          Kushagra Singh
        </h1>
        <p className="text-xl md:text-2xl text-accent-light mb-2 animate-fade-in-up animate-delay-100">
          Web3 Growth & Product Leader
        </p>
        <p className="text-lg text-text-secondary mb-12 animate-fade-in-up animate-delay-200">
          0&rarr;1 Builder &middot; DeFi &middot; Chain Abstraction &middot;
          Community
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 animate-fade-in-up animate-delay-300">
          {metrics.map((m) => (
            <div key={m.label} className="glass-card p-6">
              <div className="text-3xl md:text-4xl font-bold gradient-text">
                {m.value}
              </div>
              <div className="text-sm text-text-muted mt-1">{m.label}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-400">
          <a
            href="/Kushagra_Singh_Resume.pdf"
            target="_blank"
            className="px-8 py-3 bg-accent hover:bg-accent-light text-white font-semibold rounded-lg transition-colors"
          >
            View Resume
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-accent text-accent hover:bg-accent/10 font-semibold rounded-lg transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-text-muted hover:text-accent transition-colors">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </a>
      </div>
    </section>
  );
}
