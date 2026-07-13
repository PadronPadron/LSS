import { AuditForm } from "./AuditForm";

const services = [
  {
    title: "Website that sells",
    text: "A fast, mobile-first site that makes it easy for customers to call, request service, and trust the business.",
  },
  {
    title: "Request flow",
    text: "A simple path from visitor to real request, with instant owner alerts and every inquiry saved for follow-up.",
  },
  {
    title: "Ready for ads",
    text: "Pages and request steps prepared before ad spend, so paid traffic has somewhere strong to land.",
  },
  {
    title: "Service and city pages",
    text: "Dedicated pages for the work you do and the areas you serve, written for local customers who are ready to hire.",
  },
];

const packages = [
  {
    name: "Website Rescue",
    price: "from $2,500",
    description: "For old sites that look dated, load slowly, or fail to turn mobile visitors into calls.",
    features: ["1-5 core pages", "Mobile call buttons", "Request form", "Search basics", "Domain connection"],
  },
  {
    name: "Request System",
    price: "from $4,500",
    description: "The main setup for local service businesses that want more requests and cleaner follow-up.",
    features: [
      "Website rebuild",
      "Service pages",
      "After-request step",
      "Instant owner alerts",
      "Simple client list",
      "Request source clarity",
    ],
    highlighted: true,
  },
  {
    name: "Growth Setup",
    price: "from $8,500",
    description: "A complete growth foundation for businesses ready to improve search presence and launch ads.",
    features: [
      "Full request-ready website",
      "Local service pages",
      "Simple owner view",
      "Ad launch setup",
      "Creative direction",
      "First month support",
    ],
  },
];

const cases = [
  {
    name: "Home Service Website",
    type: "Contractor request system",
    text: "A focused site that turns service-area traffic into calls, online requests, and clear follow-up.",
  },
  {
    name: "Website Rescue",
    type: "Local contractor rebuild",
    text: "Old-site replacement with stronger mobile calls, clearer services, and a smoother request path.",
  },
  {
    name: "Growth Website",
    type: "Advertising-ready site",
    text: "A site prepared for paid traffic, with service pages, customer requests, and follow-up in one place.",
  },
];

const auditChecks = [
  "Mobile call clarity",
  "Request friction",
  "Lost inquiry points",
  "Service-area gaps",
  "Follow-up flow",
  "Ad readiness",
];

export default function Home() {
  return (
    <main>
      <nav className="topbar" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Lead Systems Studio home">
          <span className="brand-mark" aria-hidden="true">
            <span>L</span>
            <span>S</span>
            <span>S</span>
          </span>
          <span>Lead Systems Studio</span>
        </a>
        <div className="nav-links">
          <a className="nav-button" href="#services">Services</a>
          <a className="nav-button" href="#cases">Cases</a>
          <a className="nav-button" href="#packages">Packages</a>
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
            We build websites that help local businesses look stronger, capture
            more requests, follow up faster, and turn ad traffic into real jobs.
          </p>
          <div className="hero-actions" aria-label="Primary actions">
            <a className="button primary" href="#audit">
              Get free audit
            </a>
            <a className="button secondary" href="#cases">
              See cases
            </a>
          </div>
          <div className="hero-proof" aria-label="Key capabilities">
            <span>Site</span>
            <span>Leads</span>
            <span>Calls</span>
            <span>Clients</span>
            <span>Ads</span>
          </div>
        </div>

        <div className="pipeline-panel" aria-label="Customer request preview">
          <div className="panel-header">
            <span>Customer request flow</span>
            <strong>Always on</strong>
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
              <p>Clear call buttons, short request form, fast mobile experience.</p>
            </div>
            <div className="pipeline-step">
              <span className="step-number">03</span>
              <strong>Instant alert</strong>
              <p>Telegram or email alert goes to the owner or dispatcher.</p>
            </div>
            <div className="pipeline-step">
              <span className="step-number">04</span>
              <strong>Client list</strong>
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
          <h2>Not just a prettier website. A better way to win jobs.</h2>
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

      <section className="case-section" id="cases">
        <div className="case-copy">
          <p className="eyebrow">Selected cases</p>
          <h2>Sites built to win jobs, not sit online quietly.</h2>
          <p>
            The case section is built to show practical before-and-after work:
            sharper websites, clearer services, easier requests, and a business
            owner who can see where new jobs are coming from.
          </p>
          <div className="case-stats">
            <div>
              <strong>6</strong>
              <span>core pages and request steps</span>
            </div>
            <div>
              <strong>24/7</strong>
              <span>request intake foundation</span>
            </div>
            <div>
              <strong>1</strong>
              <span>simple owner view</span>
            </div>
          </div>
        </div>
        <div className="case-board" aria-label="Case previews">
          {cases.map((item, index) => (
            <article className={index === 0 ? "case-item active" : "case-item"} key={item.name}>
              <span>{item.type}</span>
              <strong>{item.name}</strong>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section packages-section" id="packages">
        <div className="section-heading compact">
          <p className="eyebrow">Packages</p>
          <h2>Start with the right setup for getting more requests.</h2>
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
          <span>Monthly advertising management starts at $1,500/month.</span>
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
          <p>Create the website and request path.</p>
        </div>
        <div>
          <span>03</span>
          <strong>Connect</strong>
          <p>Connect alerts, client list, and follow-up.</p>
        </div>
        <div>
          <span>04</span>
          <strong>Launch</strong>
          <p>Send traffic to a site ready to turn interest into jobs.</p>
        </div>
      </section>

      <section className="audit-section" id="audit">
        <div className="audit-copy">
          <p className="eyebrow">Free website audit</p>
          <h2>Send your site. We will show where requests are leaking.</h2>
          <p>
            Best fit: HVAC, plumbing, electricians, remodelers, roofing companies,
            and local contractors with an active service area.
          </p>
          <div className="audit-list">
            {auditChecks.map((check) => (
              <span key={check}>{check}</span>
            ))}
          </div>
        </div>
        <AuditForm />
      </section>
    </main>
  );
}
