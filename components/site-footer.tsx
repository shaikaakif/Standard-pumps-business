import Link from "next/link";
import { ArrowUpRight, MapPin, MessageCircle, Phone } from "lucide-react";
import { navLinks, site, whatsappUrl } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <p className="footer-name">Standard Pumps &amp; Borewells</p>
          <p className="footer-tagline">{site.tagline}</p>
          <p className="footer-intro">
            Pump sales, installation, repair and borewell support at Attapur
            Ring Road, Hyderabad.
          </p>
          <div className="footer-brand-actions">
            <a className="footer-strong-link" href={site.phoneHref}>
              <Phone aria-hidden="true" size={17} />
              <span>{site.phoneDisplay}</span>
            </a>
            <a
              className="footer-strong-link"
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle aria-hidden="true" size={17} />
              <span>WhatsApp the shop</span>
            </a>
          </div>
        </div>

        <div className="footer-columns">
          <div className="footer-column">
            <h2>Visit</h2>
            <address>
              {site.address.street}
              <br />
              {site.address.locality}, {site.address.region}
              <br />
              {site.address.countryName}
            </address>
            <a
              className="footer-link"
              href={site.maps}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MapPin aria-hidden="true" size={16} />
              <span>Find us on Google Maps</span>
              <ExternalMark />
            </a>
          </div>

          <div className="footer-column">
            <h2>Talk</h2>
            <a className="footer-link" href={site.phoneHref}>
              <Phone aria-hidden="true" size={16} />
              <span>{site.phoneDisplay}</span>
            </a>
            <a
              className="footer-link"
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle aria-hidden="true" size={16} />
              <span>Chat on WhatsApp</span>
              <ExternalMark />
            </a>
            <a
              className="footer-link"
              href={site.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Facebook</span>
              <ExternalMark />
            </a>
            <a
              className="footer-link"
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Instagram</span>
              <ExternalMark />
            </a>
          </div>

          <div className="footer-column">
            <h2>Pages</h2>
            {navLinks.map((link) => (
              <Link className="footer-link" key={link.href} href={link.href}>
                <span>{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>
          © {year} Standard Pumps &amp; Borewells
        </p>
        <p>Product availability and service scope are confirmed on enquiry.</p>
      </div>
    </footer>
  );
}

function ExternalMark() {
  return (
    <>
      <ArrowUpRight
        className="external-mark"
        aria-hidden="true"
        size={14}
      />
      <span className="sr-only"> (opens in a new tab)</span>
    </>
  );
}
