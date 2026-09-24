import type { Metadata } from "next";
import Image from "next/image";
import { PrimaryLogo, ReversedLogo } from "@/components/concept/BrandMockups";
import { LiveLink, SiteFooter } from "@/components/concept/SiteChrome";
import { SvcIcon, type ServiceIcon } from "@/components/concept/ServiceIcons";
import { GalleryHead, MockupGrid } from "@/components/concept/MockupGrid";
import {
  getFolder,
  getHero,
  getPackageWork,
  getPrintWork,
  getShot,
  layoutMockups,
  optimized,
} from "@/lib/mockups";
import ThreeDMarqueeDemo from "@/components/3d-marquee-demo";
import { Placeholder } from "@/components/concept/Placeholder";
import { BrowserMockupCard } from "@/components/ui/BrowserMockupCard";
import { LaptopMockupCard } from "@/components/ui/LaptopMockupCard";
import {
  Icon,
  ProductIconSprite,
  type IconName,
} from "@/components/concept/ProductIcons";
import "./case-study.css";

export const metadata: Metadata = {
  title: "Votex — case study",
  description:
    "Concept case study: one website, online shop and trade portal for a Sri Lankan electrical group making cables, wall switches, plugs and circuit protection.",
};

/* -------------------------------------------------------------------------- */
/* content                                                                     */
/* -------------------------------------------------------------------------- */

const PILLS: [string, string][] = [
  ["Year", "2026"],
  ["Industry", "Electrical manufacturing"],
  ["Region", "Sri Lanka"],
  ["Timeline", "8 weeks"],
];

const FAMILIES: [IconName, string, string][] = [
  ["coil", "Votex Cables", "Building · armoured · flexible · control · telecom"],
  ["fire", "Votex FireSafe", "LSHF · FRLS · fire-resistant"],
  ["tower", "Votex Grid", "Overhead · AAC · AAAC · ACSR"],
  ["solar", "Votex Solar", "DC solar cables · TÜV tested"],
  ["switch", "Aura & Core", "Switches & sockets · premium and everyday"],
  ["mcb", "Votex Shield", "MCB · RCCB · isolators · DBs"],
  ["fan", "Votex Breeze", "Ceiling fans · energy star rated"],
  ["pellet", "Votex Plastics", "PVC compounds · binding wire"],
];

const SERVICES: [string, string][] = [
  ["Projects", "Utilities, hotels, factories and commercial buildings"],
  ["Electricians Club", "NVQ training, rewards card, insurance and scholarships"],
  ["Quality & R&D", "In-house test labs, SLS, ISO and IEC"],
  ["Shop online", "Island-wide delivery through 900+ dealers"],
];

const CHALLENGES: [string, string, string][] = [
  [
    "Scattered brands",
    "Cables, switches, breakers and fans each had their own brochure, so few buyers knew one group made them all.",
    "One brand, one menu",
  ],
  [
    "Paperwork for projects",
    "Consultants and contractors emailed sales staff for every datasheet and test report.",
    "Self-serve datasheet library",
  ],
  [
    "Fake products",
    "Copies of cables and switches sold under the brand name, with no way for buyers to check.",
    "Batch code check on every product",
  ],
  [
    "Offline club",
    "Electricians Club sign-ups, points and training ran on paper forms and phone calls.",
    "Club portal in the app",
  ],
];

const PROCESS: [string, string, string, string][] = [
  [
    "Phase 1",
    "Discover",
    "Weeks 1–2",
    "Interviewed electricians, dealers, contractors, project consultants and homeowners. Audited every brochure and competitor site.",
  ],
  [
    "Phase 2",
    "Define",
    "Week 3",
    "Four personas: the Site Electrician, the Project Buyer, the Hardware Dealer and the Homeowner. Grouped all product families into one navigation.",
  ],
  [
    "Phase 3",
    "Design",
    "Weeks 4–6",
    "Product finder across all families, datasheet library, online shop, genuine-product check and the Electricians Club portal.",
  ],
  [
    "Phase 4",
    "Validate",
    "Weeks 7–8",
    "Tested with electricians on site and buyers at their desks. Added Sinhala and Tamil and a “Send to dealer” option on WhatsApp.",
  ],
];

const FILTER_SPECS = [
  "Cable: 1.0–400 mm² · Cu / Al",
  "Voltage: 450/750V · 0.6/1kV",
  "Sockets: 5A · 13A · 15A",
  "Breakers: 6–63A · B / C curve",
  "RCCB: 30mA · 100mA",
  "Fans: 56″ · energy stars",
];

const PROBLEM: [string, string][] = [
  [
    "3 calls",
    "Average number of calls a consultant made to the sales desk to get one datasheet.",
  ],
  [
    "4 in 5",
    "Homeowners who did not know one group made the cables, the switches and the fans.",
  ],
  [
    "#1 worry",
    "Dealers’ top concern: counterfeit cable with under-gauge copper sold under the brand.",
  ],
];

const SOLUTION: [string, string][] = [
  [
    "< 60 sec",
    "To reach the right cable, breaker or socket through the product finder.",
  ],
  [
    "Instant",
    "Datasheets, test reports and certificates downloaded without phoning anyone.",
  ],
  [
    "5 sec",
    "To prove a product is genuine from the batch code printed on it.",
  ],
];

const QUOTES: [string, string][] = [
  [
    "On site I have one hand free and the sun on my screen. If I can’t read the size in two seconds, I call the shop.",
    "Site electrician, Gampaha · persona: the Site Electrician",
  ],
  [
    "Customers ask me if it’s the real one. I have no way to show them.",
    "Hardware dealer, Kurunegala · persona: the Hardware Dealer",
  ],
];

/** Swatch, what it is, and what it is for. `on` is the text colour it carries. */
const PALETTE: { hex: string; name: string; role: string; on: string }[] = [
  {
    hex: "#D52B1E",
    name: "Signal Red",
    role: "Action, the x, anything that has to be found first",
    on: "#ffffff",
  },
  {
    hex: "#14202E",
    name: "Navy",
    role: "Text, headings and dark surfaces",
    on: "#ffffff",
  },
  {
    hex: "#FFFFFF",
    name: "White",
    role: "The page itself — most of it",
    on: "#14202E",
  },
  {
    hex: "#B8683A",
    name: "Copper",
    role: "The conductor inside every product",
    on: "#ffffff",
  },
  {
    hex: "#2F6DB5",
    name: "Neutral Blue",
    role: "Links, focus and information",
    on: "#ffffff",
  },
  {
    hex: "#F6F8FA",
    name: "Surface",
    role: "Wells, panels and table rows",
    on: "#14202E",
  },
];

const IR_FACTS: [string, string][] = [
  ["1978", "Founded"],
  ["3", "Manufacturing plants"],
  ["1,400", "Employees"],
  ["900+", "Authorised dealers"],
  ["8", "Product families"],
  ["12", "Export markets"],
];

const GOALS: [string, string][] = [
  ["One brand", "every product family reachable from one menu"],
  ["< 60 sec", "to find the right cable, breaker or socket"],
  ["Self-serve docs", "datasheets and test reports without emailing sales"],
  ["Buy genuine", "batch code check, dealer map and online shop"],
];

const SERVICES_PROVIDED: [ServiceIcon, string, string][] = [
  ["research", "UX research", "24 interviews, dealer visits and a week shadowing electricians on site"],
  ["identity", "Brand identity", "Wordmark, palette, typography and the voice that goes with them"],
  ["interface", "UI design", "Public site, online shop, trade portal and the Electricians Club app"],
  ["system", "Design system", "One component kit shared by every surface, light and dark"],
  ["commerce", "E-commerce & trade", "Product finder, BOQ matching, dealer stock and checkout"],
  ["prototype", "Prototype & testing", "Clickable build tested on site and at buyers’ desks"],
];

/** Measured against the old brochure-and-phone route. Illustrative figures. */
const OUTCOMES: [string, string, string, string, string][] = [
  ["Finding a product", "6 min", "paging through brochures", "< 60 sec", "in the product finder"],
  ["Getting a datasheet", "3 calls", "and up to two days’ wait", "Instant", "self-serve download"],
  ["Checking it’s genuine", "No way", "to verify at the counter", "5 sec", "batch code or QR scan"],
  ["Joining the club", "Paper form", "posted from the dealer", "2 min", "in the app, points live"],
];

/* -------------------------------------------------------------------------- */
/* page                                                                        */
/* -------------------------------------------------------------------------- */

export default function CaseStudy() {
  const hero = getHero();

  // the marquee renders plain <img> tags, so hand it optimiser URLs
  const ui = getFolder("ui");
  const uiScreens = ui.map((m) => optimized(m.src));
  // matched on a fragment rather than the whole filename, which carries an
  // ellipsis and an export stamp
  const screen = (needle: string) =>
    ui.find((m) => m.file.toLowerCase().includes(needle));
  const about = screen("corporate_about");
  const laptops = [
    [screen("industrial_web_portal"), "Trade & projects portal", "Bulk ordering, stock and delivery tracking"],
    [screen("checkout"), "Checkout", "Bulk order and quote request in one flow"],
    [screen("investor_relations"), "Investor dashboard", "Key financials, filings and reports"],
  ] as const;
  const dashboard = getShot(
    "trade",
    "Financial_dashboard_UI_design_2K_20260924145637.jpeg",
  );
  const printWork = layoutMockups(getPrintWork());
  const packageWork = layoutMockups(getPackageWork());

  const [red, navy, white, ...restPalette] = PALETTE;

  return (
    <>
      <ProductIconSprite />

     

      <main className="wrap cs-main">
        {/* title ----------------------------------------------------------- */}
        <header className="cs-header">
          <p className="crumbs">
            <span>Cases</span>
            <span>Manufacturing</span>
            <span>Web platform</span>
            <span>Votex</span>
          </p>

          <h1 className="cs-title">
            Votex — <em>cables, switches and circuit protection</em>
            <span className="plain">
              {" "}
              specified, proven and bought in one place
            </span>
          </h1>

          <div className="pills">
            <span className="pill accent">Concept project</span>
            {PILLS.map(([k, v]) => (
              <span className="pill" key={k}>
                <i>{k}</i>
                {v}
              </span>
            ))}
          </div>

          <div className="cs-actions">
            <LiveLink />
            <span className="note">votex.lk</span>
          </div>
        </header>

        {/* ---------------------------------------------------------------- */}
        {/* 01 — case study                                                   */}
        {/* ---------------------------------------------------------------- */}
        <div className="chap" id="overview">
          <span className="chap-n">01</span>
          <h2 className="chap-t">Case study</h2>
          <p>
            Who Votex is, what it makes, and why its old web presence held it
            back.
          </p>
        </div>

        <section>
          <h2 className="eyebrow">About the product</h2>
          <div className="prose">
            <p>
              Votex is a Sri Lankan electrical group that makes cables, wall
              switches, plugs, circuit breakers, fans, solar cables and PVC
              compounds, and supplies large projects island-wide. Everything a
              home circuit needs comes out of its own three plants and its own
              test labs.
            </p>
            <p>
              This case study covers the complete multidisciplinary creation:
              brand identity, web design, the online shop, the trade and
              projects portal, packaging and print. The aim was one experience
              joining the counter, the building site and the specifier’s desk —
              so the product a buyer reads about online is the one they can
              prove is genuine in their hand.
            </p>
          </div>
        </section>

        <section>
          <h2 className="eyebrow">Product families</h2>
          <div className="iconrow four">
            {FAMILIES.map(([icon, name, detail]) => (
              <div className="it product" key={name}>
                <Icon name={icon} />
                <b>{name}</b>
                <span className="mono-note">{detail}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="eyebrow">Services under the same brand</h2>
          <div className="figs four small">
            {SERVICES.map(([name, detail]) => (
              <div className="fig" key={name}>
                <b>{name}</b>
                <p>{detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="eyebrow">Services provided</h2>
          <div className="iconrow">
            {SERVICES_PROVIDED.map(([icon, name, detail]) => (
              <div className="it" key={name}>
                <SvcIcon name={icon} />
                <b>{name}</b>
                <p>{detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="eyebrow">Our process</h2>
          <div className="steps">
            {PROCESS.map(([phase, title, weeks, body]) => (
              <div className="step" key={phase}>
                <p className="num">{phase}</p>
                <h3>{title}</h3>
                <span className="label">{weeks}</span>
                <p>{body}</p>
              </div>
            ))}
          </div>
          <div
            className="specs"
            aria-label="Attributes the product finder filters on"
          >
            <span className="label">Finder filters on</span>
            {FILTER_SPECS.map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* 02 — problem & solution                                           */}
        {/* ---------------------------------------------------------------- */}
        <div className="chap" id="research">
          <span className="chap-n">02</span>
          <h2 className="chap-t">Problem &amp; solution</h2>
          <p>
            What buyers, electricians and dealers were up against, and what the
            new route costs them instead.
          </p>
        </div>

        <section>
          <h2 className="eyebrow">Problem</h2>
          <div className="figs">
            {PROBLEM.map(([stat, body]) => (
              <div className="fig" key={stat}>
                <b>{stat}</b>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <p className="statement">
            Buyers needed one place to <em>find the right product</em>, see that
            it meets the standard, and <em>check it is genuine</em> — without
            phoning the sales desk or trusting a shelf.
          </p>
        </section>

        <section>
          <h2 className="eyebrow">Solution</h2>
          <div className="figs solved">
            {SOLUTION.map(([stat, body]) => (
              <div className="fig" key={stat}>
                <b>{stat}</b>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="eyebrow">What that cost the group</h2>
          <div className="pairs">
            {CHALLENGES.map(([title, body, response], i) => (
              <div key={title}>
                <span className="n">{String(i + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{body}</p>
                <span className="resp">{response}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="eyebrow">In their words</h2>
          <div className="quotes">
            {QUOTES.map(([quote, source]) => (
              <blockquote key={source}>
                <p>“{quote}”</p>
                <cite>{source}</cite>
              </blockquote>
            ))}
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* 03 — brand                                                        */}
        {/* ---------------------------------------------------------------- */}
        <div className="chap" id="brand">
          <span className="chap-n">03</span>
          <h2 className="chap-t">Brand</h2>
          <p>
            The wordmark, the way it behaves on a product, and the printed
            pieces that carry it off the screen.
          </p>
        </div>

        <section>
          <h2 className="eyebrow">Brand concept</h2>
          <p className="statement">
            <em>“Every connection, built to last.”</em>
          </p>
          <div className="prose" style={{ marginTop: "var(--s8)" }}>
            <p>
              Wiring, switches and breakers stay inside a home for decades, so
              buyers choose on trust. Votex answers three questions at the
              counter and on the site: is it right for the job, does it meet the
              standard, and is it genuine. The identity is the word alone —
              “vote” in navy, “x” in red — with no symbol, so the x doubles as
              the graphic device wherever a mark is wanted.
            </p>
          </div>
        </section>

        <section>
          <div className="band full">
            <div className="panel light">
              <PrimaryLogo />
              <span className="band-cap ink">
                Primary wordmark · clear space set by the x
              </span>
            </div>
            <div className="panel">
              <ReversedLogo />
              <span className="band-cap">Reversed · app icon</span>
            </div>
          </div>
        </section>

        <section>
          <h2 className="eyebrow">Typography</h2>
          <div className="spec">
            <div className="face">
              <span className="aa" aria-hidden="true">
                Aa
              </span>
              <dl>
                <dt>Primary</dt>
                <dd>Bricolage Grotesque</dd>
                <dt>Weights</dt>
                <dd>
                  <span className="off">Regular Medium </span>
                  <em>Bold ExtraBold</em>
                </dd>
                <dt>Set for</dt>
                <dd>Headings, figures and the wordmark</dd>
              </dl>
            </div>

            <div className="face secondary">
              <span className="aa" aria-hidden="true">
                Aa
              </span>
              <dl>
                <dt>Secondary</dt>
                <dd>IBM Plex Sans</dd>
                <dt>Weights</dt>
                <dd>
                  <span className="off">Regular </span>
                  <em>Medium SemiBold</em>
                </dd>
                <dt>Specs in</dt>
                <dd className="mono">Plex Mono · 2.5 mm²</dd>
              </dl>
            </div>

            <div className="voice-card">
              <span className="label">Voice</span>
              <div className="line say">
                <b>Say</b>
                <p>
                  “2.5 mm² twin and earth, 450/750V. Right for 13A socket
                  circuits. Datasheet and test report below.”
                </p>
              </div>
              <div className="line avoid">
                <b>Avoid</b>
                <p>
                  “Revolutionary world-class energy solutions for a smarter
                  tomorrow.”
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="eyebrow">Palette</h2>
          <div className="pal full">
            <div className="pal-row two">
              {[red, navy].map((c) => (
                <div
                  className="chipx"
                  key={c.hex}
                  style={{ background: c.hex, color: c.on }}
                >
                  <span>
                    <strong>{c.name}</strong>
                    {c.hex}
                    <small>{c.role}</small>
                  </span>
                </div>
              ))}
            </div>
            <div className="pal-row mixed">
              <div
                className="chipx light"
                style={{ background: white.hex, color: white.on }}
              >
                <span>
                  <strong>{white.name}</strong>
                  {white.hex}
                  <small>{white.role}</small>
                </span>
              </div>
              {restPalette.map((c) => (
                <div
                  className={c.hex === "#F6F8FA" ? "chipx light" : "chipx"}
                  key={c.hex}
                  style={{ background: c.hex, color: c.on }}
                >
                  <span>
                    <strong>{c.name}</strong>
                    {c.hex}
                    <small>{c.role}</small>
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="prose2" style={{ marginTop: "var(--s7)" }}>
            <p>
              White space with red for action, navy for text and copper for the
              conductor inside every product. Red is never used decoratively:
              if it is red, it is the thing to press or the thing to read first.
            </p>
            <p>
              Blue carries links, focus rings and information, so it never
              competes with red for attention, and the two greys behind them do
              all the separating that borders would otherwise have to do.
            </p>
          </div>
        </section>

        <section>
          <h2 className="eyebrow">Catalogue &amp; installation guides</h2>
          <div className="prose2">
            <p>
              A 96-page product catalogue and a set of installation guides were
              drawn up alongside the site, covering every family from building
              wire to ceiling fans. Each entry carries the same fields in the
              same order as the web product page — rating, size, standard,
              warranty — so a spec read on paper matches the one read online.
            </p>
            <p>
              The guides are written for the person holding the screwdriver: one
              wiring diagram per page, torque called out in red, and Sinhala and
              Tamil set from the same layout as the English.
            </p>
          </div>
          <GalleryHead
            title="The printed set"
            count={printWork.length}
            unit="piece"
          />
          <MockupGrid items={printWork} />
        </section>

        <section>
          <h2 className="eyebrow">Package design</h2>
          <div className="prose2">
            <p>
              Packaging for the Aura and Core switch, socket and plug ranges, and
              the drum and coil labels for cable. The front does one job at arm’s
              length on a dealer’s shelf: the wordmark, the rating and the
              standard, in that order, with the finish shown through a window.
            </p>
            <p>
              The back carries the wiring diagram, the batch code and the QR that
              opens the genuine-product check — the same code printed on the drum
              label and every metre along the sheath, so the box and the product
              always agree.
            </p>
          </div>
          <GalleryHead
            title="On the shelf"
            count={packageWork.length}
            unit="piece"
          />
          <MockupGrid items={packageWork} />
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* 04 — UI design                                                    */}
        {/* ---------------------------------------------------------------- */}
        <div className="chap" id="ui">
          <span className="chap-n">04</span>
          <h2 className="chap-t">UI design</h2>
          <p>
            The corporate site, the trade portal, checkout and the investor
            dashboard — one component kit across all four.
          </p>
        </div>

        <section>
          <h2 className="eyebrow">The screens</h2>
          <ThreeDMarqueeDemo className="full" images={uiScreens} />
        </section>

        <section>
          <h2 className="eyebrow">Corporate site</h2>
          <figure className="mockup">
            <BrowserMockupCard url="https://votex.lk/about" contentClassName="h-auto">
              {about ? (
                <Image
                  src={about.src}
                  alt="Votex corporate about page: an Empowering the Grid hero over a photograph of technicians on the factory floor, a Votex by the Numbers strip, and Our Legacy and Vision beside the executive leadership team"
                  width={about.width}
                  height={about.height}
                  sizes="(max-width: 640px) 100vw, 1200px"
                  className="block h-auto w-full"
                />
              ) : (
                <Placeholder name="Corporate site" ratio="16 / 9" />
              )}
            </BrowserMockupCard>
            <figcaption className="ph-cap">
              <b>About Votex</b>The public face of the group, on the shared
              component kit
            </figcaption>
          </figure>
        </section>

        <section>
          <h2 className="eyebrow">Across the platform</h2>
          <div className="laptops wide">
            {laptops.map(([shot, title, note]) => (
              <figure key={title}>
                <LaptopMockupCard variant="titanium">
                  {shot && (
                    <Image
                      src={shot.src}
                      alt={`Votex ${title.toLowerCase()} screen`}
                      fill
                      sizes="(max-width: 768px) 280px, 384px"
                      className="object-cover object-top"
                    />
                  )}
                </LaptopMockupCard>
                <figcaption className="ph-cap">
                  <b>{title}</b>
                  {note}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* 05 — results                                                      */}
        {/* ---------------------------------------------------------------- */}
        <div className="chap" id="results">
          <span className="chap-n">05</span>
          <h2 className="chap-t">Results</h2>
          <p>
            What the four goals were, and what the new route costs a buyer
            compared with the old one.
          </p>
        </div>

        <section>
          <h2 className="eyebrow">Design goals</h2>
          <div className="goals">
            {GOALS.map(([title, body]) => (
              <div key={title}>
                <b>{title}</b>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="eyebrow">
            Before &amp; after — figures are illustrative for this concept
          </h2>
          <div className="out">
            {OUTCOMES.map(([job, was, wasNote, now, nowNote]) => (
              <div key={job}>
                <span className="label">{job}</span>
                <p className="out-before">
                  <b>{was}</b> {wasNote}
                </p>
                <div className="out-rule" />
                <p className="out-after">
                  {now}
                  <span>{nowNote}</span>
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* 06 — investor relations                                           */}
        {/* ---------------------------------------------------------------- */}
        <div className="chap">
          <span className="chap-n">06</span>
          <h2 className="chap-t">Investor relations</h2>
          <p>
            A clear home for the listed group: company overview, share price,
            board and reports.
          </p>
        </div>

        <section id="investors">
          <h2 className="eyebrow">Company overview</h2>
          <div className="ir-over">
            <p className="statement" style={{ margin: 0 }}>
              Wiring Sri Lanka <em>since 1978.</em>
            </p>
            <div className="ir-facts">
              {IR_FACTS.map(([value, label]) => (
                <div key={label}>
                  <b>{value}</b>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="prose2" style={{ marginTop: "var(--s8)" }}>
            <p>
              Votex Group makes cables, wiring devices, circuit protection, fans
              and PVC compounds across three plants, and supplies utilities,
              contractors and more than 900 dealers island-wide.
            </p>
            <p>
              The group is listed on the Colombo Stock Exchange, so the site
              carries the share price, the board, the reports library and the
              filings calendar on one page.
            </p>
          </div>
          <figure className="mockup" style={{ marginTop: "var(--s9)" }}>
            <BrowserMockupCard
              theme="dark"
              url="https://votex.lk/investors/market-data"
              contentClassName={
                dashboard ? "h-auto" : undefined /* the image sets the shape */
              }
            >
              {dashboard ? (
                <Image
                  src={dashboard.src}
                  alt="Votex market data page on a dark background: a VOTX candlestick chart with moving averages and a volume histogram in the centre, a token overview, social sentiment gauge and top movers down the left, and market cap, 24-hour volume and a live trade history table down the right"
                  width={dashboard.width}
                  height={dashboard.height}
                  sizes="(max-width: 640px) 100vw, 1200px"
                  className="block h-auto w-full"
                />
              ) : (
                <Placeholder
                  name="Investor relations page"
                  size="1440 × 1600"
                  note="Share price chart, board of directors and the reports library."
                />
              )}
            </BrowserMockupCard>
            <figcaption className="ph-cap">
              <b>Market data</b>Share price, market cap, volume and live trade
              history on one page
            </figcaption>
          </figure>
        </section>

        <section>
          <div className="cs-outro full">
            <div>
              <p className="label" style={{ color: "#8FA3B8" }}>
                Thank you for scrolling
              </p>
              <h2>See it running</h2>
              <p>
                The Votex site itself — the same brand, navigation and component
                kit put to work.
              </p>
            </div>
            <LiveLink>Open the live site</LiveLink>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
