import Link from "next/link";
import { ArrowUpRight, MessageCircle, Phone } from "lucide-react";
import {
  cableSizes,
  fittings,
  pipeClasses,
  productCategories,
  pumpBrands,
  pumpTypes,
  starterTypes,
} from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { askAbout, site, whatsappUrl } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Pumps, pipes and borewell equipment",
  description:
    "Water pumps and motors, borewell column pipes, submersible cables, starters, control panels, fittings and accessories through Standard Pumps & Borewells, Attapur, Hyderabad. Confirm models and stock on enquiry.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <>
      <section className="page-hero" aria-labelledby="products-title">
        <div className="container page-hero-grid">
          <div>
            <p className="eyebrow">
              <span className="eyebrow-line" aria-hidden="true" />
              Products and equipment
            </p>
            <h1 id="products-title">
              Pumps, pipes and the parts that complete the system.
            </h1>
            <p className="page-lead">
              The shop supplies water-pumping equipment and the components
              around it. Exact models, ratings and stock are confirmed when you
              enquire. This page explains the categories so you know what to
              ask about.
            </p>
            <div className="page-actions">
              <a
                className="button button-primary"
                href={askAbout("pumps and equipment")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle aria-hidden="true" size={18} />
                <span>Ask about equipment</span>
              </a>
              <a className="button button-secondary" href={site.phoneHref}>
                <Phone aria-hidden="true" size={18} />
                <span>Call the shop</span>
              </a>
            </div>
          </div>

          <aside className="page-hero-aside" aria-labelledby="equipment-index">
            <p className="aside-label" id="equipment-index">
              Equipment index
            </p>
            <nav aria-label="Equipment categories">
              {productCategories.map((category) => (
                <a href={`#${category.id}`} key={category.id}>
                  <span className="index-number" aria-hidden="true">
                    {category.number}
                  </span>
                  <span>{category.name}</span>
                </a>
              ))}
            </nav>
            <p className="aside-note">
              Ask with the borewell depth if known, the available power supply
              and what the water is used for.
            </p>
          </aside>
        </div>
      </section>

      <section
        className="catalog-section"
        id="pumps"
        aria-labelledby="pumps-heading"
        data-reveal
      >
        <div className="container catalog-grid">
          <div className="catalog-heading">
            <p className="eyebrow">
              <span className="eyebrow-index">01</span> Pumps and motors
            </p>
            <h2 id="pumps-heading">Water pumps for homes, farms and buildings.</h2>
            <p>
              Pump options are matched to the borewell, water level, power
              supply and intended use. The range includes four main
              categories.
            </p>
          </div>
          <div className="catalog-body">
            <div className="pump-grid">
              {pumpTypes.map((pump) => (
                <article className="catalog-item" key={pump.name}>
                  <h3>{pump.name}</h3>
                  <p>{pump.text}</p>
                </article>
              ))}
            </div>
            <p className="section-note">
              Single-phase and three-phase options are part of the range. Share
              the site details so the rating can be discussed.
            </p>
            <div className="brand-note">
              <p className="brand-note-label">
                Brand options in the business profile
              </p>
              <p>{pumpBrands.join(", ")}.</p>
              <p>Ask what is currently available.</p>
            </div>
            <a
              className="text-link"
              href={askAbout("water pumps and motors")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle aria-hidden="true" size={16} />
              Ask about pumps and motors
            </a>
          </div>
        </div>
      </section>

      <section
        className="catalog-section catalog-section-alt"
        id="pipes"
        aria-labelledby="pipes-heading"
        data-reveal
      >
        <div className="container catalog-grid">
          <div className="catalog-heading">
            <p className="eyebrow">
              <span className="eyebrow-index">02</span> Column pipes
            </p>
            <h2 id="pipes-heading">Borewell column pipes.</h2>
          </div>
          <div className="catalog-body">
            <p className="catalog-lead">
              Rigid PVC submersible column pipes are part of the range. The
              supplied business profile lists three pressure classes and names
              Sudhakar Pipes. The right class and length depend on the borewell
              and the installation.
            </p>
            <dl className="spec-strip">
              <div>
                <dt>Type</dt>
                <dd>Rigid PVC submersible column pipe</dd>
              </div>
              <div>
                <dt>Profile-listed classes</dt>
                <dd>{pipeClasses.join(" / ")}</dd>
              </div>
              <div>
                <dt>Confirm with the shop</dt>
                <dd>Class, length and fittings for your borewell</dd>
              </div>
            </dl>
            <p className="section-note">
              Pressure classes are profile-supplied. Confirm suitability for
              your borewell before ordering.
            </p>
            <a
              className="text-link"
              href={askAbout("borewell column pipes")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle aria-hidden="true" size={16} />
              Ask about column pipes
            </a>
          </div>
        </div>
      </section>

      <section
        className="catalog-section"
        id="cables"
        aria-labelledby="cables-heading"
        data-reveal
      >
        <div className="container catalog-grid">
          <div className="catalog-heading">
            <p className="eyebrow">
              <span className="eyebrow-index">03</span> Submersible cables
            </p>
            <h2 id="cables-heading">Submersible cables.</h2>
          </div>
          <div className="catalog-body">
            <p className="catalog-lead">
              Three-core flat submersible cable is used to supply power to a
              submersible pump. The business profile lists three conductor
              sizes. The right size depends on the pump and the installation.
            </p>
            <div className="cable-sizes" aria-label="Profile-listed cable sizes">
              {cableSizes.map((size) => (
                <div key={size}>
                  <span className="cable-size">{size}</span>
                  <span>Three-core flat cable option</span>
                </div>
              ))}
            </div>
            <p className="section-note">
              Confirm the cable size against the pump rating and the
              installation.
            </p>
            <a
              className="text-link"
              href={askAbout("submersible cables")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle aria-hidden="true" size={16} />
              Ask about submersible cables
            </a>
          </div>
        </div>
      </section>

      <section
        className="catalog-section catalog-section-alt"
        id="starters"
        aria-labelledby="starters-heading"
        data-reveal
      >
        <div className="container catalog-grid">
          <div className="catalog-heading">
            <p className="eyebrow">
              <span className="eyebrow-index">04</span> Starters and panels
            </p>
            <h2 id="starters-heading">Starters and control panels.</h2>
            <p>
              Starting and controlling a pump is a separate part of the system.
              The profile lists manual and automatic options.
            </p>
          </div>
          <div className="catalog-body">
            <div className="starter-list">
              {starterTypes.map((starter) => (
                <article className="catalog-item" key={starter.name}>
                  <h3>{starter.name}</h3>
                  <p>{starter.text}</p>
                </article>
              ))}
            </div>
            <div className="brand-note">
              <p className="brand-note-label">Profile-listed names</p>
              <p>
                Sunshine and Venus Gold are named in the business profile for
                starter and control-panel products.
              </p>
              <p>Ask what is currently available.</p>
            </div>
            <p className="section-note">
              Ask which starter or panel suits your pump and power supply.
              Exact functions, brands and models are confirmed on enquiry.
            </p>
            <a
              className="text-link"
              href={askAbout("starters and control panels")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle aria-hidden="true" size={16} />
              Ask about starters and panels
            </a>
          </div>
        </div>
      </section>

      <section
        className="catalog-section"
        id="fittings"
        aria-labelledby="fittings-heading"
        data-reveal
      >
        <div className="container catalog-grid">
          <div className="catalog-heading">
            <p className="eyebrow">
              <span className="eyebrow-index">05</span> Fittings and accessories
            </p>
            <h2 id="fittings-heading">
              Fittings, caps and installation accessories.
            </h2>
          </div>
          <div className="catalog-body">
            <p className="catalog-lead">
              These are the small components that help the pump sit, seal and
              lower into the borewell. The profile-listed range includes:
            </p>
            <ul className="fitting-list">
              {fittings.map((fitting) => (
                <li key={fitting}>
                  <span className="list-mark" aria-hidden="true" />
                  {fitting}
                </li>
              ))}
            </ul>
            <p className="section-note">
              Availability and exact sizes are confirmed on enquiry.
            </p>
            <a
              className="text-link"
              href={askAbout("fittings and installation accessories")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle aria-hidden="true" size={16} />
              Ask about a fitting
            </a>
          </div>
        </div>
      </section>

      <section className="section closing-cta" aria-labelledby="products-cta">
        <div className="container closing-cta-grid">
          <div>
            <p className="eyebrow">
              <span className="eyebrow-line" aria-hidden="true" />
              Next step
            </p>
            <h2 id="products-cta">Not sure where your requirement fits?</h2>
            <p>
              Send the pump type, borewell details and what the water is used
              for. The shop can point you to the right category.
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
            <Link className="text-link" href="/services">
              See installation and repair
              <ArrowUpRight aria-hidden="true" size={15} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
