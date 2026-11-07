import type { Metadata, Viewport } from "next";
import { Archivo, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { ContactDock } from "@/components/contact-dock";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { defaultDescription, metadataBase, siteUrl } from "@/lib/seo";
import { site } from "@/lib/site";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: "Water pumps and borewell service in Attapur, Hyderabad",
    template: "%s | Standard Pumps & Borewells",
  },
  description: defaultDescription,
  applicationName: site.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: site.name,
    title: "Standard Pumps & Borewells, Attapur, Hyderabad",
    description: defaultDescription,
    images: [
      {
        url: "/images/brand/standard-pumps-og.png",
        width: 1200,
        height: 630,
        alt: "Standard Pumps & Borewells, pump sales and service at Attapur Ring Road, Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Standard Pumps & Borewells, Attapur, Hyderabad",
    description: defaultDescription,
    images: ["/images/brand/standard-pumps-og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFDF8",
  colorScheme: "light",
};

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  telephone: site.phoneRaw,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    addressCountry: site.address.country,
  },
  ...(siteUrl ? { url: siteUrl } : {}),
  sameAs: [site.facebook, site.instagram],
};

const structuredData = JSON.stringify(localBusiness).replace(/</g, "\\u003c");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${archivo.variable} ${sourceSans.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <SiteHeader />
        <ContactDock />
        <main id="main-content" tabIndex={-1}>{children}</main>
        <SiteFooter />
        <ScrollReveal />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: structuredData }}
        />
      </body>
    </html>
  );
}
