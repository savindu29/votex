/**
 * Image sets read out of public/ at build time — the brand mockups and the
 * printed pieces.
 *
 * Drop a file in and it appears in the case study; delete one and it goes.
 * Anything listed in a captions map gets a written caption and a fixed
 * position; anything else lands at the end with a title derived from its
 * filename, so a new file is never invisible just because nobody has written
 * about it yet.
 */

import fs from "node:fs";
import path from "node:path";
import { imageSize } from "./imageSize";

const EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif", ".gif"]);

type Caption = {
  title: string;
  note: string;
  alt: string;
  /** object-position, for images whose subject is off-centre once cropped. */
  focus?: string;
};

/**
 * The image that opens the page. Named outright rather than taken off the top
 * of the sort, so reordering the captions below can't quietly change the hero.
 */
const HERO_FILE = "Votex_landing_page_UI_design_2K_20260924144800.jpeg";

/** Brand mockups, in the order they should appear. */
const MOCKUPS: Record<string, Caption> = {
  [HERO_FILE]: {
    title: "Brand key visual",
    note: "The wordmark and the line over the range it stands for",
    alt: "Votex key visual: matte black switches and sockets floating over a coil of bare copper cable lit in red, with black and grey cables and connectors below, and the Votex wordmark and the line “Reliability in Every Connection” to the right",
  },
  "Votex_electrical_cables_and_swit…_20260924131528.jpeg": {
    title: "Brand hero",
    note: "The wordmark and the line over the range it stands for",
    alt: "Votex wordmark and the line “Reliability in Every Connection” above a coil of bare copper cable, four brushed switch plates and a copper busbar",
  },
  "Votex_logo_on_cable_reel_20260924123220.jpeg": {
    title: "Reels & enclosures",
    note: "Stamped on the flange, screened on the enclosure door",
    alt: "Votex wordmark on the flange of a cable reel and on a wall-mounted distribution enclosure in a workshop",
  },
  "Votex_logo_on_industrial_switch_20260924122802.jpeg": {
    title: "Boxes & plugs",
    note: "Moulded into the housing, printed on the connector",
    alt: "Votex wordmark moulded into a cast junction box and printed on an industrial plug, on a workbench",
    focus: "center 55%",
  },
  "1-75.webp_20260924123435.jpeg": {
    title: "Wall plate · banner lockup",
    note: "Across the top of the plate, read from across the room",
    alt: "Graphite Votex 13A socket with a USB outlet, the wordmark set in a white band across the top of the plate",
  },
  "1-75.webp_20260924123942.jpeg": {
    title: "Wall plate · corner lockup",
    note: "The quieter option — bottom right, read only up close",
    alt: "The same graphite Votex socket with the wordmark small in the bottom-right corner of the plate",
  },
  "Votex_electrical_products_retail…_20260924131540.jpeg": {
    title: "Retail display",
    note: "Point of sale for the switch, socket and flex range",
    alt: "Backlit Votex retail display carrying switches, sockets, plugs and coiled flex under a NEW ARRIVAL banner",
  },
};

/** Printed pieces, in the order they should appear. */
const PRINT: Record<string, Caption> = {
  "Product_catalogue_spread_layout_20260924134930.jpeg": {
    title: "Catalogue spread",
    note: "Family opener, spec table and the certification strip",
    alt: "Open Votex product catalogue on a concrete surface, showing a switch collection page beside a table of models, ratings, sizes, standards and warranties",
  },
  "Datasheet_mockup_for_building_wire_20260924134935.jpeg": {
    title: "Datasheet · building wire",
    note: "Construction cutaway, ampacity table and ordering codes",
    alt: "VotexFlex THHN/THWN building wire datasheet, with a labelled cable cutaway, technical specification table and ordering information",
  },
  "A5_electrical_installation_guide…_20260924134953.jpeg": {
    title: "Installation guide",
    note: "One wiring diagram a page, torque called out, three languages",
    alt: "A5 Votex installation guide open on a bench beside a screwdriver and wire strippers, showing a wiring and termination diagram captioned in English, Sinhala and Tamil",
  },
  "Votex_printed_materials_displaye…_20260924134958.jpeg": {
    title: "The printed set",
    note: "Catalogue, datasheets and guides sharing one grid",
    alt: "The Votex print family laid out on a desk: a bound catalogue open at a spec table, technical datasheets fanned behind it and a stack of installation guides",
  },
};

/** Package design, in the order they should appear. */
const PACKAGE: Record<string, Caption> = {
  "Votex_Aura_switch_box_packaging_20260924135302.jpeg": {
    title: "Switch box · front",
    note: "Wordmark, rating and standard, read at arm’s length",
    alt: "Front of the Votex Aura switch box: wordmark, 10A 250V rating and AS/NZS 3100 standard above a window showing the matt black switch",
  },
  "Switch_box_back_package_design_20260924135324.jpeg": {
    title: "Switch box · back",
    note: "Wiring diagram, batch code and the QR into the genuine check",
    alt: "Back of the Votex Aura switch box: single-gang installation wiring diagram, electrical ratings, a printed batch code and a QR code labelled scan for verification",
  },
  "Votex_drum_labels_on_cable_20260924135310.jpeg": {
    title: "Cable drum label",
    note: "Type, size, rating, standard and batch code on the flange",
    alt: "Votex Industrial Cables label fixed to the wooden flange of a cable drum in a warehouse, listing type, size, rating, standard and batch code beside a QR code",
  },
  "Retail_shelf_display_with_switch…_20260924135317.jpeg": {
    title: "On the shelf",
    note: "Aura in copper and black, Core in steel and white",
    alt: "Lit retail shelving carrying rows of boxed Votex switches, the Aura Collection above in black and copper and the Core Series below in steel and white",
  },
};

export type Mockup = {
  file: string;
  src: string;
  width: number;
  height: number;
  title: string;
  note: string;
  alt: string;
  focus: string;
};

/**
 * The part of a filename that identifies the picture rather than the export:
 * "Retail_shelf_display_with_switch…_2K_20260924142215.jpeg" and
 * "Retail_shelf_display_with_switch…_20260924135317.jpeg" both reduce to
 * "retail_shelf_display_with_switch…".
 *
 * Captions are matched on this, so re-exporting an image at a new size keeps
 * the caption that was written for it instead of silently losing it.
 */
function stem(file: string) {
  let base = path.basename(file, path.extname(file));
  for (let i = 0; i < 3; i++) {
    base = base
      .replace(/[_-]?\d{8,}$/, "") // the export timestamp
      .replace(/[_-]?(\d+k|@\d+x|\d{3,4}p)$/i, ""); // 2K, @2x, 1080p
  }
  return base.toLowerCase();
}

/** Turns "Votex_logo_on_cable_reel_20260924123220.jpeg" into "Votex logo on cable reel". */
function titleFromFilename(file: string) {
  const base = stem(file)
    .replace(/[_…]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return base ? base.charAt(0).toUpperCase() + base.slice(1) : file;
}

function readFolder(folder: string, captions: Record<string, Caption>): Mockup[] {
  const dir = path.join(process.cwd(), "public", folder);
  const byStem = new Map(
    Object.entries(captions).map(([file, caption]) => [stem(file), caption]),
  );
  const order = Object.keys(captions).map(stem);

  let files: string[];
  try {
    files = fs.readdirSync(dir);
  } catch {
    return []; // no folder yet — the section just renders empty
  }

  const mockups = files
    .filter((f) => EXTENSIONS.has(path.extname(f).toLowerCase()))
    .map((file) => {
      const size = imageSize(fs.readFileSync(path.join(dir, file)));
      if (!size) return null;

      const caption = captions[file] ?? byStem.get(stem(file));
      const title = caption?.title ?? titleFromFilename(file);
      return {
        file,
        // folder and file names both hold characters that need escaping
        src: `/${encodeURIComponent(folder)}/${encodeURIComponent(file)}`,
        width: size.width,
        height: size.height,
        title,
        note: caption?.note ?? "",
        alt: caption?.alt ?? `Votex brand mockup: ${title.toLowerCase()}`,
        focus: caption?.focus ?? "center",
      } satisfies Mockup;
    })
    .filter((m): m is Mockup => m !== null);

  // captioned files first, in the order written above; the rest alphabetically
  return mockups.sort((a, b) => {
    const ai = order.indexOf(stem(a.file));
    const bi = order.indexOf(stem(b.file));
    if (ai !== -1 && bi !== -1) return ai - bi;
    if (ai !== -1) return -1;
    if (bi !== -1) return 1;
    return a.file.localeCompare(b.file);
  });
}

/** Brand mockups from public/mockups. */
export function getMockups(): Mockup[] {
  return readFolder("mockups", MOCKUPS);
}

/** The image that opens the case study, or the first mockup if it is missing. */
export function getHero(): Mockup | undefined {
  const all = getMockups();
  return all.find((m) => stem(m.file) === stem(HERO_FILE)) ?? all[0];
}

/** Printed pieces from public/Catalogue & installation guides. */
export function getPrintWork(): Mockup[] {
  return readFolder("Catalogue & installation guides", PRINT);
}

/** Packaging from public/Package design. */
export function getPackageWork(): Mockup[] {
  return readFolder("Package design", PACKAGE);
}

/**
 * One screen read straight out of a folder, for an image shown on its own
 * rather than in a gallery. Matched on the same stem as the captions, so a
 * re-export at a new size still resolves — and the caller gets the real pixel
 * dimensions, which is what lets the frame around it keep the right shape.
 */
export function getShot(folder: string, file: string): Mockup | undefined {
  return readFolder(folder, {}).find((m) => stem(m.file) === stem(file));
}

/** Every image in a folder under public/, alphabetically. */
export function getFolder(folder: string): Mockup[] {
  return readFolder(folder, {});
}

/**
 * The same image, served through next/image's optimiser.
 *
 * For markup that renders a plain <img> and so can't use the component — the
 * source files here are 2K, and a decorative strip has no business shipping
 * several megabytes of them.
 *
 * `width` must be one of next.config's `images.deviceSizes`/`imageSizes` and
 * `quality` one of `images.qualities`; the optimiser answers 400 for anything
 * else, and the defaults below are the stock allowed values.
 */
export function optimized(src: string, width = 1080, quality = 75) {
  return `/_next/image?url=${encodeURIComponent(src)}&w=${width}&q=${quality}`;
}

/**
 * Packs the gallery into complete rows of a six-column grid.
 *
 * Images are either "wide" (landscape) or "narrow" (portrait, and squares,
 * which stretch badly if given half the grid). Three narrows share a row at
 * 2 + 2 + 2; a wide beside a narrow takes 4 + 2; two wides split 3 + 3; and
 * anything left over runs the full six. Rows always add up, so nothing is left
 * hanging in a half-empty column.
 */
export type PlacedMockup = Mockup & { span: number };

function isWide(m: Mockup) {
  return m.width / m.height > 1.15;
}

export function layoutMockups(items: Mockup[]): PlacedMockup[] {
  const placed: PlacedMockup[] = [];
  let i = 0;

  while (i < items.length) {
    const a = items[i];
    const b = items[i + 1];
    const c = items[i + 2];

    if (!b) {
      placed.push({ ...a, span: 6 }); // an odd one out runs full width
      i += 1;
      continue;
    }

    // two narrow images leave room for a third rather than being blown up
    if (!isWide(a) && !isWide(b) && c) {
      placed.push({ ...a, span: 2 }, { ...b, span: 2 }, { ...c, span: 2 });
      i += 3;
      continue;
    }

    if (isWide(a) !== isWide(b)) {
      placed.push(
        { ...a, span: isWide(a) ? 4 : 2 },
        { ...b, span: isWide(b) ? 4 : 2 },
      );
    } else {
      placed.push({ ...a, span: 3 }, { ...b, span: 3 });
    }
    i += 2;
  }

  return placed;
}
