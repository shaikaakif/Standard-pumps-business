export const site = {
  name: "Standard Pumps & Borewells",
  shortName: "Standard Pumps",
  tagline: "Your Need, Our Solution.",
  phoneDisplay: "+91 9110704747",
  phoneHref: "tel:+919110704747",
  phoneRaw: "+919110704747",
  whatsappBase: "https://wa.me/919110704747",
  facebook:
    "https://www.facebook.com/people/Standard-Pumps-Borewell/",
  instagram: "https://www.instagram.com/standard_pumps_and_borewell",
  maps: "https://www.google.com/maps/search/?api=1&query=Standard+Pumps+%26+Borewells%2C+Attapur+Ring+Road%2C+Hyderabad",
  address: {
    street: "Attapur Ring Road",
    locality: "Hyderabad",
    region: "Telangana",
    country: "IN",
    countryName: "India",
    display: "Attapur Ring Road, Hyderabad, Telangana, India",
  },
  whatsappMessage:
    "Hello Standard Pumps & Borewells, I would like to enquire about a pump or borewell service. Could you help me with my requirement?",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
] as const;

export function whatsappUrl(message: string = site.whatsappMessage) {
  return `${site.whatsappBase}?text=${encodeURIComponent(message)}`;
}

export function askAbout(requirement: string) {
  return whatsappUrl(
    `Hello Standard Pumps & Borewells, I would like to enquire about ${requirement}. Could you tell me what details you need?`,
  );
}
