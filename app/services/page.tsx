import Link from "next/link";
import { ArrowUpRight, MessageCircle, Phone } from "lucide-react";
import { processSteps, services } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { askAbout, site, whatsappUrl } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Pump installation, repair and borewell service",
  description:
    "Pump installation, removal, repair, motor rewinding, borewell flushing and on-site pump selection support from Standard Pumps & Borewells in Attapur, Hyderabad. Confirm the scope for your site.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero" aria-labelledby="services-title">
        <div className="container page-hero-grid">
          <div>
            <p className="eyebrow">
              <span className="eyebrow-line" aria-hidden="true" />
              Service capabilities
            </p>
            <h1 id="services-title">
              Installation, repair and borewell service, explained plainly.
            </h1>
            <p className="page-lead">
              The service side covers the work around a pump: putting it in,
              taking it out, repairing it and checking the site. Each
              description below is specific about what is confirmed and what
              depends on your pump, borewell or site.
            </p>
            <div className="page-actions">
              <a
                className="button button-primary"
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle aria-hidden="true" size={18} />
                <span>WhatsApp the requirement</span>
              </a>
              <a className="button button-secondary" href={site.phoneHref}>
                <Phone aria-hidden="true" size={18} />
                <span>Call the shop</span>
              </a>
            </div>
          </div>

          <aside className="page-hero-aside" aria-labelledby="service-help">
            <p className="aside-label" id="service-help">
              What helps when you message
            </p>
            <ul className="aside-list">
              <li>The pump type or make, if known</li>
              <li>Borewell depth or water level, if known</li>
              <li>The issue or the water requirement</li>
              <li>Your area or a nearby landmark</li>
            </ul>
            <p className="aside-note">
              You do not need every detail to start. Send what you have and ask
              what else is needed.
            </p>
          </aside>
        </div>
      </section>

      <section className="services-body" aria-label="Service capabilities">
        <div className="container services-layout">
          <aside className="services-sidebar">
            <p className="aside-label">On this page</p>
            <nav aria-label="Services on this page">
              {services.map((service) => (
                <a href={`#${service.id}`} key={service.id}>
                  <span className="index-number" aria-hidden="true">
                    {service.number}
                  </span>
                  <span>{service.name}</span>
                </a>
              ))}
            </nav>
            <div className="sidebar-contact">
              <p className="aside-label">Not sure which service?</p>
              <p>
                Send the symptom or the requirement. The shop can help identify
                the next step.
              </p>
              <a
                className="text-link"
                href={askAbout("a pump or borewell service")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle aria-hidden="true" size={16} />
                Ask on WhatsApp
              </a>
            </div>
          </aside>

          <div className="services-list">
            {services.map((service) => (
              <article
                className="service-entry"
                id={service.id}
                key={service.id}
              >
                <div className="service-entry-heading">
                  <span className="service-number" aria-hidden="true">
                    {service.number}
                  </span>
                  <h2>{service.name}</h2>
                </div>
                <p className="service-entry-summary">{service.summary}</p>
                <p>{service.detail}</p>
                {service.note ? (
                  <p className="scope-note">
                    <span>Scope note</span> {service.note}
                  </p>
                ) : null}
                <a
                  className="service-entry-link"
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
        </div>
      </section>

      <section
        className="section process-section"
        aria-labelledby="process-heading"
        data-reveal
      >
        <div className="container">
          <div className="split-heading">
            <div>
              <p className="eyebrow">
                <span className="eyebrow-index">Process</span> How a job usually
                moves
              </p>
              <h2 id="process-heading">
                From the first message to the final check.
              </h2>
            </div>
            <div className="section-intro">
              <p>
                The exact steps depend on the job. This is a general guide to
                what the conversation and the work can involve.
              </p>
            </div>
          </div>

          <ol className="process-list">
            {processSteps.map((step, index) => (
              <li key={step.title}>
                <span className="process-number" aria-hidden="true">
                  0{index + 1}
                </span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
          <p className="section-note">
            Scope, equipment and timing are confirmed for each job. Nothing on
            this page is a guarantee of a particular result or response time.
          </p>
        </div>
      </section>

      <section className="section closing-cta" aria-labelledby="services-cta">
        <div className="container closing-cta-grid">
          <div>
            <p className="eyebrow">
              <span className="eyebrow-line" aria-hidden="true" />
              Next step
            </p>
            <h2 id="services-cta">Tell us what the pump is doing.</h2>
            <p>
              Send the symptom, the pump type and the location. That is enough
              to start the conversation.
            </p>
          </div>
          <div className="closing-cta-actions">
            <a
              className="button button-primary"
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle aria-hidden="true" size={18} />
              <span>WhatsApp the requirement</span>
            </a>
            <a className="button button-secondary" href={site.phoneHref}>
              <Phone aria-hidden="true" size={18} />
              <span>Call the shop</span>
            </a>
            <Link className="text-link" href="/products">
              See pumps and equipment
              <ArrowUpRight aria-hidden="true" size={15} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
