"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, MessageCircle, Phone, X } from "lucide-react";
import { navLinks, site, whatsappUrl } from "@/lib/site";

function isCurrent(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href;
}

export function SiteHeader() {
  const pathname = usePathname();
  const [menu, setMenu] = useState({ open: false, path: pathname });
  const menuOpen = menu.open && menu.path === pathname;
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const closeMenu = () => setMenu({ open: false, path: pathname });

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenu({ open: false, path: pathname });
        toggleRef.current?.focus();
      }
    };

    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (panelRef.current?.contains(target)) return;
      if (toggleRef.current?.contains(target)) return;
      setMenu({ open: false, path: pathname });
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [menuOpen, pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const firstLink = panelRef.current?.querySelector<HTMLAnchorElement>("a");
    firstLink?.focus();
  }, [menuOpen]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => {
      if (desktop.matches) {
        setMenu((current) => ({ ...current, open: false }));
      }
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link
          className="brand"
          href="/"
          onClick={closeMenu}
        >
          <Image
            className="brand-logo"
            src="/images/brand/standard-pumps-logo.png"
            alt=""
            width={56}
            height={56}
            priority
            sizes="56px"
          />
          <span className="brand-text">
            <span className="brand-name">Standard</span>
            <span className="brand-sub">Pumps &amp; Borewells</span>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navLinks.map((link) => {
            const current = isCurrent(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link"
                aria-current={current ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="header-actions">
          <a className="header-call" href={site.phoneHref}>
            <Phone aria-hidden="true" size={17} strokeWidth={2} />
            <span>
              Call <span className="header-phone">{site.phoneDisplay}</span>
            </span>
          </a>
          <a
            className="button button-primary button-small header-whatsapp"
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp with Standard Pumps & Borewells"
          >
            <MessageCircle aria-hidden="true" size={17} strokeWidth={2} />
            <span>WhatsApp</span>
          </a>
          <button
            ref={toggleRef}
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls={menuOpen ? "mobile-menu" : undefined}
            onClick={() => setMenu({ open: !menuOpen, path: pathname })}
          >
            <span>{menuOpen ? "Close" : "Menu"}</span>
            {menuOpen ? (
              <X aria-hidden="true" size={22} />
            ) : (
              <Menu aria-hidden="true" size={22} />
            )}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="mobile-panel" ref={panelRef}>
          <nav id="mobile-menu" aria-label="Mobile navigation">
            {navLinks.map((link) => {
              const current = isCurrent(pathname, link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="mobile-nav-link"
                  aria-current={current ? "page" : undefined}
                  onClick={closeMenu}
                >
                  <span>{link.label}</span>
                  <span className="mobile-nav-index" aria-hidden="true">
                    0{navLinks.indexOf(link) + 1}
                  </span>
                </Link>
              );
            })}
          </nav>
          <div className="mobile-panel-contact">
            <p>{site.address.display}</p>
            <div className="mobile-panel-actions">
              <a className="button button-primary" href={site.phoneHref}>
                <Phone aria-hidden="true" size={18} />
                <span>Call the shop</span>
              </a>
              <a
                className="button button-secondary"
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle aria-hidden="true" size={18} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
