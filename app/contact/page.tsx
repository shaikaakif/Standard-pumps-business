import Link from "next/link";
import {
  ArrowUpRight,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { EnquiryForm } from "@/components/enquiry-form";
import { pageMetadata } from "@/lib/seo";
import { site, whatsappUrl } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Contact and location",
  description:
    "Call or WhatsApp Standard Pumps & Borewells at +91 9110704747. Find the shop at Attapur Ring Road, Hyderabad, Telangana, or open a Google Maps search for the business.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section className="page-hero contact-hero" aria-labelledby="contact-title">
        <div className="container">
          <p className="eyebrow">
            <span className="eyebrow-line" aria-hidden="true" />
            Contact Standard Pumps &amp; Borewells
          </p>
          <h1 id="contact-title">
            Tell us what the pump or borewell needs.
          </h1>
          <p className="page-lead contact-lead">
            Call or message the shop with the requirement, the location and any
            details you already know. The actions below go directly to the
            business.
          </p>
          <div className="page-actions">
            <a
              className="button button-primary"
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle aria-hidden="true" size={18} />
              <span>Chat on WhatsApp</span>
            </a>
            <a className="button button-secondary" href={site.phoneHref}>
              <Phone aria-hidden="true" size={18} />
              <span>Call {site.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </section>

      <section className="contact-main" aria-label="Contact details and enquiry">
        <div className="container contact-grid">
          <div className="contact-details">
            <div className="contact-block">
              <p className="aside-label">Call the shop</p>
              <a className="contact-phone" href={site.phoneHref}>
                {site.phoneDisplay}
              </a>
              <p>
                Tap the number to call. If you prefer to write, use WhatsApp and
                include the pump or borewell details.
              </p>
            </div>

            <div className="contact-block">
              <p className="aside-label">WhatsApp</p>
              <a
                className="text-link"
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle aria-hidden="true" size={16} />
                Chat on WhatsApp
              </a>
              <p>
                The message is prefilled with a general enquiry. You can add the
                details before sending it.
              </p>
            </div>

            <div className="contact-block">
              <p className="aside-label">Visit</p>
              <address>
                {site.address.street}
                <br />
                {site.address.locality}, {site.address.region}
                <br />
                {site.address.countryName}
              </address>
              <a
                className="text-link"
                href={site.maps}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin aria-hidden="true" size={16} />
                Find us on Google Maps
                <ArrowUpRight aria-hidden="true" size={14} />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              <p className="contact-note">
                Opens a Google Maps search for the business name and address. It
                is not a confirmed place pin.
              </p>
            </div>

            <div className="contact-block">
              <p className="aside-label">Social</p>
              <div className="contact-social">
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

            <p className="contact-back">
              Looking for a category or service first?{" "}
              <Link href="/products">See products and equipment</Link> or{" "}
              <Link href="/services">read about the service work</Link>.
            </p>
          </div>

          <EnquiryForm />
        </div>
      </section>
    </>
  );
}
