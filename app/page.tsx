const services = [
  {
    title: "Conversion website",
    text: "A fast, mobile-first site with service pages, clear calls to action, and no dead-end traffic.",
  },
  {
    title: "Lead capture system",
    text: "Forms, thank-you page logic, Telegram or email notifications, and a customer base your team can use.",
  },
  {
    title: "Ads-ready tracking",
    text: "Meta and Google structure, conversion events, campaign landing pages, and clean reporting foundations.",
  },
  {
    title: "Local SEO pages",
    text: "City and service pages built around how local customers actually search for contractors.",
  },
];

const packages = [
  {
    name: "Website Rescue",
    price: "$1,500-$2,500",
    description: "For old sites that look dated, load slowly, or fail to turn mobile visitors into calls.",
    features: ["1-5 core pages", "Mobile CTA cleanup", "Lead form", "Basic SEO", "Domain connection"],
  },
  {
    name: "Lead System",
    price: "$3,500-$6,000",
    description: "The main setup for local service businesses that want a real request pipeline.",
    features: [
      "Website rebuild",
      "SEO service pages",
      "Thank-you page",
      "Telegram/email leads",
      "Simple client database",
      "Ad tracking structure",
    ],
    highlighted: true,
  },
  {
    name: "Growth Setup",
    price: "$7,500-$12,000",
    description: "A complete growth foundation for businesses ready to launch ads and local SEO together.",
    features: [
      "Full lead website",
      "Local SEO pages",
      "CRM/admin view",
      "Meta Ads setup",
      "Creative direction",
      "First month support",
    ],
  },
];

const auditChecks = [
  "Mobile CTA clarity",
  "Lead form friction",
  "Tracking gaps",
  "Service-area SEO",
  "Thank-you page logic",
  "Ads-readiness",
];

export default function Home() {
  return (
    <main>
      <nav className="topbar" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Lead Systems Studio home">
          <span className="brand-mark">LS</span>
          <span>Lead Systems Studio</span>
        </a>
        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#apex">Apex case</a>
          <a href="#packages">Packages</a>
          <a className="nav-cta" href="#audit">
            Free audit
          </a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-content">
          <p className="eyebrow">For HVAC and home service companies</p>
          <h1>Websites that turn local traffic into booked jobs.</h1>
          <p className="hero-copy">
            We build the full lead system: site, forms, tracking, thank-you page,
            notifications, customer base, and ad-ready structure for contractors.
          </p>
          <div className="hero-actions" aria-label="Primary actions">
            <a className="button primary" href="#audit">
              Get free audit
            </a>
            <a className="button secondary" href="#apex">
              See Apex case
            </a>
          </div>
          <div className="hero-proof" aria-label="Key capabilities">
            <span>Site</span>
            <span>Leads</span>
            <span>Tracking</span>
            <span>CRM</span>
            <span>Ads</span>
          </div>
        </div>

        <div className="pipeline-panel" aria-label="Lead system preview">
          <div className="panel-header">
            <span>Lead operating system</span>
            <strong>Live flow</strong>
          </div>
          <div className="pipeline">
            <div className="pipeline-step">
              <span className="step-number">01</span>
              <strong>Ad or search click</strong>
              <p>Customer lands on the right service page.</p>
            </div>
            <div className="pipeline-step">
              <span className="step-number">02</span>
              <strong>Website request</strong>
              <p>Clear CTA, short form, fast mobile experience.</p>
            </div>
            <div className="pipeline-step">
              <span className="step-number">03</span>
              <strong>Instant notification</strong>
              <p>Telegram or email alert goes to the owner or dispatcher.</p>
            </div>
            <div className="pipeline-step">
              <span className="step-number">04</span>
              <strong>Customer base</strong>
              <p>Every request is stored for follow-up and reporting.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="logos-band" aria-label="Best fit industries">
        <span>HVAC</span>
        <span>Plumbing</span>
        <span>Electricians</span>
        <span>Roofing</span>
        <span>Remodeling</span>
        <span>Local contractors</span>
      </section>

      <section className="section" id="services">
        <div className="section-heading">
          <p className="eyebrow">What we build</p>
          <h2>Not just a prettier website. A system that catches demand.</h2>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <span className="card-line" />
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="case-section" id="apex">
        <div className="case-copy">
          <p className="eyebrow">First packaged case</p>
          <h2>Apex: from contractor website to lead system.</h2>
          <p>
            Apex is packaged as the proof of work for local service businesses:
            a focused site structure, request flow, lead notifications, simple
            database, SEO pages, thank-you page, and campaign-ready tracking.
          </p>
          <div className="case-stats">
            <div>
              <strong>6</strong>
              <span>core conversion assets</span>
            </div>
            <div>
              <strong>24/7</strong>
              <span>lead intake foundation</span>
            </div>
            <div>
              <strong>1</strong>
              <span>clean owner dashboard</span>
            </div>
          </div>
        </div>
        <div className="case-board" aria-label="Apex system components">
          <div className="board-row active">
            <span>Website</span>
            <strong>Service pages + mobile CTA</strong>
          </div>
          <div className="board-row">
            <span>Requests</span>
            <strong>Form + thank-you page</strong>
          </div>
          <div className="board-row">
            <span>Alerts</span>
            <strong>Telegram/email handoff</strong>
          </div>
          <div className="board-row">
            <span>Database</span>
            <strong>Every lead stored</strong>
          </div>
          <div className="board-row">
            <span>Growth</span>
            <strong>Meta/Google-ready tracking</strong>
          </div>
        </div>
      </section>

      <section className="section packages-section" id="packages">
        <div className="section-heading compact">
          <p className="eyebrow">Packages</p>
          <h2>Start with the right level of lead infrastructure.</h2>
        </div>
        <div className="package-grid">
          {packages.map((item) => (
            <article
              className={item.highlighted ? "package-card featured" : "package-card"}
              key={item.name}
            >
              <div>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
              <strong className="price">{item.price}</strong>
              <ul>
                {item.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="retainer-note">
          <span>Monthly ads management starts at $750-$1,500/month.</span>
          <strong>Ad budget is separate.</strong>
        </div>
      </section>

      <section className="process-band">
        <div>
          <span>01</span>
          <strong>Audit</strong>
          <p>Find where the site is losing requests.</p>
        </div>
        <div>
          <span>02</span>
          <strong>Build</strong>
          <p>Create the website and conversion flow.</p>
        </div>
        <div>
          <span>03</span>
          <strong>Connect</strong>
          <p>Wire notifications, database, and tracking.</p>
        </div>
        <div>
          <span>04</span>
          <strong>Launch</strong>
          <p>Send traffic into a system that can measure leads.</p>
        </div>
      </section>

      <section className="audit-section" id="audit">
        <div className="audit-copy">
          <p className="eyebrow">Free website audit</p>
          <h2>Send your site. We will show where leads are leaking.</h2>
          <p>
            Best fit: HVAC, plumbing, electricians, remodelers, roofing companies,
            and local contractors with an active service area.
          </p>
          <a
            className="button primary"
            href="mailto:strategy@leadsystemstudio.com?subject=Free%20website%20audit&body=Website%3A%0AService%20area%3A%0AMain%20service%3A%0AWhat%20you%20want%20to%20improve%3A"
          >
            Request audit
          </a>
        </div>
        <div className="audit-card" aria-label="Audit checklist">
          <h3>Audit snapshot</h3>
          <div className="audit-list">
            {auditChecks.map((check) => (
              <span key={check}>{check}</span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
