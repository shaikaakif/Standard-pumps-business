import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import { site, whatsappUrl } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Page not found",
  description:
    "The page you requested is not available. Start from the Standard Pumps & Borewells home page, products, services or contact page.",
  path: "/404",
});

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="container">
        <p className="eyebrow">
          <span className="eyebrow-line" aria-hidden="true" />
          404
        </p>
        <h1>That page is not here.</h1>
        <p className="page-lead">
          The page may have moved, or the link may be incomplete. Start from one
          of the pages below, or contact the shop directly.
        </p>
        <div className="page-actions">
          <Link className="button button-primary" href="/">
            Go to the home page
          </Link>
          <a className="button button-secondary" href={site.phoneHref}>
            <Phone aria-hidden="true" size={18} />
            <span>Call the shop</span>
          </a>
          <a
            className="button button-tertiary"
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle aria-hidden="true" size={18} />
            <span>WhatsApp</span>
          </a>
        </div>
        <nav className="not-found-links" aria-label="Site pages">
          <Link href="/products">Products and equipment</Link>
          <Link href="/services">Services and capabilities</Link>
          <Link href="/contact">Contact and location</Link>
        </nav>
      </div>
    </section>
  );
}
