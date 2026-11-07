import type { Metadata } from "next";
import { site } from "@/lib/site";

const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();

// Set NEXT_PUBLIC_SITE_URL to the full production origin, without a trailing slash.
export const siteUrl = configured ? configured.replace(/\/+$/, "") : null;

export const metadataBase = new URL(siteUrl ?? "http://localhost:3000");

export const socialImage = "/images/brand/standard-pumps-og.png";

export const defaultDescription =
  "Standard Pumps & Borewells sells water pumps and borewell equipment in Attapur, Hyderabad, and provides installation, repair, removal and on-site service support.";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
};

export function pageMetadata({
  title,
  description,
  path,
}: PageMetadataInput): Metadata {
  const url = siteUrl ? `${siteUrl}${path}` : undefined;

  return {
    title,
    description,
    alternates: url ? { canonical: url } : undefined,
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: socialImage,
          width: 1200,
          height: 630,
          alt: "Standard Pumps & Borewells, pump sales and service at Attapur Ring Road, Hyderabad",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage],
    },
  };
}
