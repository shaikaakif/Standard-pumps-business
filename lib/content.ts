export type ProductCategory = {
  id: string;
  number: string;
  name: string;
  homeSummary: string;
};

export const productCategories: ProductCategory[] = [
  {
    id: "pumps",
    number: "01",
    name: "Water pumps and motors",
    homeSummary:
      "Submersible, open-well, monoblock and booster options, including V4 and V6 submersible series.",
  },
  {
    id: "pipes",
    number: "02",
    name: "Borewell column pipes",
    homeSummary:
      "Rigid PVC column pipe options, with profile-listed 10 KG, 12.5 KG and 16 KG classes.",
  },
  {
    id: "cables",
    number: "03",
    name: "Submersible cables",
    homeSummary:
      "Three-core flat cable options in profile-listed 1.5, 2.5 and 4.0 sqmm sizes.",
  },
  {
    id: "starters",
    number: "04",
    name: "Starters and control panels",
    homeSummary:
      "Manual starters, metered starters, dry-run panels and three-phase control panels.",
  },
  {
    id: "fittings",
    number: "05",
    name: "Fittings and accessories",
    homeSummary:
      "Caps, clamps, adaptors, non-return valves, bends, ropes and other installation accessories.",
  },
];

export const pumpTypes = [
  {
    name: "Submersible pumps and motors",
    text: "For borewells and deeper water sources. V4 and V6 submersible series are part of the profile-listed range.",
  },
  {
    name: "Open-well submersible pumps",
    text: "For open wells, where the pump is lowered into the water rather than a narrow borewell.",
  },
  {
    name: "Domestic monoblock pumps",
    text: "A common category for household water supply and pressure work around a home.",
  },
  {
    name: "Booster pumps",
    text: "For increasing water pressure or moving water between tanks and floors in a building.",
  },
];

export const pumpBrands = [
  "Crompton",
  "Kirloskar",
  "Texmo",
  "CRI",
  "Lubi",
  "Falcon",
  "Venus Gold",
];

export const pipeClasses = ["10 KG", "12.5 KG", "16 KG"];

export const cableSizes = ["1.5 sqmm", "2.5 sqmm", "4.0 sqmm"];

export const starterTypes = [
  {
    name: "Manual capacitor-run starters",
    text: "A manual starting option for single-phase pump installations.",
  },
  {
    name: "Starters with voltmeter and ammeter",
    text: "Metered starters that show voltage and current while the pump is running.",
  },
  {
    name: "Automatic dry-run prevention panels",
    text: "Panels designed to stop a pump when it runs without water.",
  },
  {
    name: "Timer panels",
    text: "Panels that can switch pump operation according to a set time.",
  },
  {
    name: "Three-phase digital control panels",
    text: "Control panels for three-phase pump installations, with digital monitoring.",
  },
];

export const fittings = [
  "Cast-iron borewell casing caps",
  "Heavy PVC casing caps",
  "Safety clamps",
  "GI adaptors",
  "Stainless-steel adaptors",
  "Nipples",
  "Non-return valves (NRV)",
  "Bends",
  "Brass fittings",
  "Nylon safety lowering ropes",
  "Other installation accessories",
];

export type Service = {
  id: string;
  number: string;
  name: string;
  summary: string;
  detail: string;
  note?: string;
  ask: string;
};

export const services: Service[] = [
  {
    id: "installation",
    number: "01",
    name: "Pump installation",
    summary:
      "Lowering, connecting and setting up a submersible or other water-pump system.",
    detail:
      "Installation can include lowering the pump, connecting the column pipe and cable, and setting up the mechanical installation. The installation can then be operated and checked, with the exact checks depending on the job.",
    ask: "pump installation",
  },
  {
    id: "removal",
    number: "02",
    name: "Pump removal and extraction",
    summary:
      "Retrieving a pump from a borewell for inspection, repair or replacement.",
    detail:
      "If a pump needs to come out for inspection, repair or replacement, the removal is planned around the borewell and the installation. Ask about the arrangement available for your site.",
    ask: "pump removal",
  },
  {
    id: "repair",
    number: "03",
    name: "Pump repair and servicing",
    summary:
      "Troubleshooting, servicing and replacement of worn pump and motor components.",
    detail:
      "Repair and servicing can cover pumps and motors. The work described in the business profile includes troubleshooting, replacement of worn components and pump overhauls. The scope is confirmed once the pump and the problem are known.",
    ask: "pump repair and servicing",
  },
  {
    id: "rewinding",
    number: "04",
    name: "Motor rewinding",
    summary:
      "Motor repair and rewinding, with the motor type and scope confirmed first.",
    detail:
      "Motor repair and rewinding are listed as part of the service work. Ask about the motor type and the scope before bringing it in, so the work can be assessed correctly.",
    note: "The exact types of motors handled and whether all rewinding is done in-house are not confirmed.",
    ask: "motor rewinding",
  },
  {
    id: "flushing",
    number: "05",
    name: "Borewell flushing and cleaning",
    summary:
      "Cleaning to help remove silt, mud and accumulated material from a borewell.",
    detail:
      "Borewell flushing and cleaning are listed to help remove silt, mud and other accumulated material. The business profile mentions air-compressor flushing; the equipment and scope for your borewell are confirmed on enquiry.",
    note: "Confirm the flushing equipment and service scope for your borewell before scheduling.",
    ask: "borewell flushing and cleaning",
  },
  {
    id: "inspection",
    number: "06",
    name: "On-site inspection and pump selection",
    summary:
      "A site conversation about the borewell, the water requirement and the right equipment.",
    detail:
      "Pump selection can take in the borewell depth, water level, available power supply and intended use. An on-site inspection can help when the requirement is not clear from a phone description.",
    ask: "an on-site inspection and pump selection",
  },
  {
    id: "deep-bore",
    number: "07",
    name: "Deep-bore lifting and installation support",
    summary:
      "Lifting and lowering support for deep-bore pump work, arranged around the site.",
    detail:
      "For deep-bore pump work, ask about the lifting and lowering arrangement available for the site. This can be discussed as part of an installation or removal.",
    note: "Exact lifting equipment, depth limits and whether any work is arranged through external operators are not confirmed.",
    ask: "deep-bore pump lifting and installation",
  },
];

export const processSteps = [
  {
    title: "Share the requirement",
    text: "Say whether you need a new pump, an installation, a repair, a removal or a site inspection.",
  },
  {
    title: "Describe the site",
    text: "Useful details include the borewell depth if known, water level, available power supply and what the water is used for.",
  },
  {
    title: "Discuss the options",
    text: "Pump, pipe, cable, starter and fitting options are considered together, along with the scope of work.",
  },
  {
    title: "Supply and install",
    text: "Where installation is needed, the relevant equipment is taken to the site and set up for the agreed scope.",
  },
  {
    title: "Check and hand over",
    text: "The installation is operated and checked. The checks can vary with the job; ask what applies to yours.",
  },
];

export const requirementRoutes = [
  {
    title: "A new pump or equipment",
    text: "Start with the equipment categories and note what the pump needs to do.",
    href: "/products",
    cta: "See the equipment range",
  },
  {
    title: "Installation, repair or removal",
    text: "See how the service work is described, then ask about your pump.",
    href: "/services",
    cta: "See the service capabilities",
  },
  {
    title: "A site inspection or selection help",
    text: "Send the site details and the requirement directly to the shop.",
    href: "/contact",
    cta: "Contact the shop",
  },
];
