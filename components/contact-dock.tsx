import { MessageCircle, Phone } from "lucide-react";
import { site, whatsappUrl } from "@/lib/site";

export function ContactDock() {
  return (
    <nav className="contact-dock" aria-label="Quick contact">
      <a
        className="dock-action dock-whatsapp"
        href={whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Standard Pumps & Borewells"
      >
        <MessageCircle aria-hidden="true" size={21} strokeWidth={2} />
        <span>WhatsApp</span>
      </a>
      <a
        className="dock-action dock-call"
        href={site.phoneHref}
        aria-label="Call Standard Pumps & Borewells at +91 9110704747"
      >
        <Phone aria-hidden="true" size={20} strokeWidth={2} />
        <span>Call</span>
      </a>
    </nav>
  );
}
