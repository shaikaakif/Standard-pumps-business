import Link from "next/link";
import { ArrowUpRight, MessageCircle, Phone } from "lucide-react";
import { BorewellDiagram } from "@/components/borewell-diagram";
import { HeroVideo } from "@/components/hero-video";
import { productCategories, requirementRoutes, services } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { askAbout, site, whatsappUrl } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Pump sales and service in Attapur, Hyderabad",
  description:
    "Standard Pumps & Borewells supplies water pumps, borewell equipment, pipes, cables, starters and fittings, with installation, repair, removal and on-site support in Attapur, Hyderabad.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <section className="hero" aria-labelledby="home-title">
        <div className="container hero-grid">
          <div className="hero-media">
            <HeroVideo />
          </div>

          <div className="hero-copy">
            <p className="eyebrow">
              <span className="eyebrow-line" aria-hidden="true" />
              Attapur Ring Road, Hyderabad
            </p>
            <h1 id="home-title">
              The pump, the borewell, and the service between them.
            </h1>
            <p className="hero-lead">
              Standard Pumps &amp; Borewells is a local sales-and-service
              business for homes, apartments, farms, commercial premises and
              construction sites. Water pumps and equipment, plus the
              installation, repair and borewell support around them.
            </p>

            <div className="hero-actions">
              <a
                className="button button-primary"
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle aria-hidden="true" size={18} />
                <span>WhatsApp your requirement</span>
              </a>
              <a className="button button-secondary" href={site.phoneHref}>
                <Phone aria-hidden="true" size={18} />
                <span>Call {site.phoneDisplay}</span>
              </a>
            </div>

            <p className="hero-follow">
              Planning a new installation?{" "}
              <Link href="/products">See the equipment range</Link>
            </p>

            <ul className="hero-facts" aria-label="Business strengths">
              <li>
                <span className="fact-mark" aria-hidden="true" />
                Reliable pump sales
              </li>
              <li>
                <span className="fact-mark" aria-hidden="true" />
                Genuine products
              </li>
              <li>
                <span className="fact-mark" aria-hidden="true" />
                Sales and service under one roof
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section
        className="section products-preview"
        aria-labelledby="products-heading"
        data-reveal
      >
        <div className="container split-heading">
          <div>
            <p className="eyebrow">
              <span className="eyebrow-index">01</span> Products
            </p>
            <h2 id="products-heading">
              Everything between the borewell and the tap.
            </h2>
          </div>
          <div className="section-intro">
            <p>
              The pump is the centre of the system, but it needs the right
              pipe, cable, starter and fittings. These are the categories the
              shop works with, so a requirement can be discussed as a whole.
            </p>
            <Link className="text-link" href="/products">
              See the full equipment range
            </Link>
          </div>
        </div>

        <div className="container">
          <ul className="category-list">
            {productCategories.map((category) => (
              <li key={category.id}>
                <Link
                  className="category-row"
                  href={`/products#${category.id}`}
                >
                  <span className="category-number" aria-hidden="true">
                    {category.number}
                  </span>
                  <span className="category-copy">
                    <span className="category-name">{category.name}</span>
                    <span className="category-desc">
                      {category.homeSummary}
                    </span>
                  </span>
                  <ArrowUpRight
                    className="category-arrow"
                    aria-hidden="true"
                    size={18}
                  />
                </Link>
              </li>
            ))}
          </ul>
          <p className="section-note">
            Exact models, ratings and stock are confirmed when you enquire.
          </p>
        </div>
      </section>

      <section
        className="section section-dark system-section"
        aria-labelledby="system-heading"
        data-reveal
      >
        <div className="container system-grid">
          <div className="system-copy">
            <p className="eyebrow eyebrow-on-dark">
              <span className="eyebrow-index">02</span> Sales and service
            </p>
            <h2 id="system-heading">Buy the equipment. Keep it running.</h2>
            <p className="lead-on-dark">
              A pump is one part of the system. The column pipe, cable, starter
              and fittings all have a job to do, and the service work starts
              after the sale. Standard Pumps &amp; Borewells works on both
              sides of that.
            </p>

            <div className="system-columns">
              <div>
                <h3>Sales</h3>
                <ul className="plain-list">
                  <li>Pumps and motors</li>
                  <li>Column pipes and cables</li>
                  <li>Starters and control panels</li>
                  <li>Fittings and installation accessories</li>
                </ul>
                <Link className="text-link text-link-on-dark" href="/products">
                  See products and equipment
                </Link>
              </div>
              <div>
                <h3>Service</h3>
                <ul className="plain-list">
                  <li>Installation and removal</li>
                  <li>Repair and motor rewinding</li>
                  <li>Borewell flushing and cleaning</li>
                  <li>On-site inspection and selection help</li>
                </ul>
                <Link className="text-link text-link-on-dark" href="/services">
                  See the service capabilities
                </Link>
              </div>
            </div>
          </div>

          <BorewellDiagram />
        </div>
      </section>

      <section
        className="section services-preview"
        aria-labelledby="services-heading"
        data-reveal
      >
        <div className="container split-heading">
          <div>
            <p className="eyebrow">
              <span className="eyebrow-index">03</span> Service
            </p>
            <h2 id="services-heading">
              When the pump needs attention, start here.
            </h2>
          </div>
          <div className="section-intro">
            <p>
              The service page explains what is confirmed, what depends on the
              site, and what to ask before scheduling. These are the three
              starting points.
            </p>
            <Link className="text-link" href="/services">
              See the full service list
            </Link>
          </div>
        </div>

        <div className="container service-preview-list">
          {services.slice(0, 3).map((service) => (
            <article className="service-row" key={service.id}>
              <span className="service-number" aria-hidden="true">
                {service.number}
              </span>
              <div className="service-row-copy">
                <h3>{service.name}</h3>
                <p>{service.summary}</p>
              </div>
              <a
                className="service-row-link"
                href={askAbout(service.ask)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle aria-hidden="true" size={16} />
                <span>Ask about {service.ask}</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section
        className="section requirement-section"
        aria-labelledby="requirement-heading"
        data-reveal
      >
        <div className="container">
          <div className="requirement-heading">
            <p className="eyebrow">
              <span className="eyebrow-index">04</span> Start with your
              requirement
            </p>
            <h2 id="requirement-heading">What are you trying to solve?</h2>
          </div>
          <div className="requirement-grid">
            {requirementRoutes.map((route) => (
              <Link className="requirement-item" href={route.href} key={route.href}>
                <span className="requirement-title">{route.title}</span>
                <span className="requirement-text">{route.text}</span>
                <span className="requirement-cta">
                  {route.cta}
                  <ArrowUpRight aria-hidden="true" size={15} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section location-section"
        aria-labelledby="location-heading"
        data-reveal
      >
        <div className="container location-grid">
          <div className="location-copy">
            <p className="eyebrow">
              <span className="eyebrow-index">05</span> Visit or message
            </p>
            <h2 id="location-heading">
              Based at Attapur Ring Road, Hyderabad.
            </h2>
            <p>
              Call or message with the pump or borewell requirement, the
              location and any details you already know. The shop can take it
              from there.
            </p>
            <div className="location-actions">
              <a
                className="button button-primary"
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle aria-hidden="true" size={18} />
                <span>WhatsApp your requirement</span>
              </a>
              <a className="button button-secondary" href={site.phoneHref}>
                <Phone aria-hidden="true" size={18} />
                <span>Call the shop</span>
              </a>
            </div>
          </div>

          <div className="location-panel">
            <p className="aside-label">The shop</p>
            <address>
              {site.address.street}
              <br />
              {site.address.locality}, {site.address.region}
              <br />
              {site.address.countryName}
            </address>
            <a
              className="location-link"
              href={site.maps}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Find us on Google Maps</span>
              <ArrowUpRight aria-hidden="true" size={16} />
            </a>
            <p className="location-note">
              Opens a Google Maps search for the business name and address. It
              is not a confirmed place pin.
            </p>

            <div className="location-social">
              <span className="aside-label">Social</span>
              <div>
                <a
                  href={site.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                  <ArrowUpRight aria-hidden="true" size={14} />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                  <ArrowUpRight aria-hidden="true" size={14} />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container tagline-band">
          <span className="tagline-mark" aria-hidden="true" />
          <p>Your Need, Our Solution.</p>
          <span>Standard Pumps &amp; Borewells, Attapur Ring Road</span>
        </div>
      </section>
    </>
  );
}
