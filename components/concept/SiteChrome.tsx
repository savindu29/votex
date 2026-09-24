import Link from "next/link";

/** Sections the footer links to. */
export const SECTIONS: [string, string][] = [
  ["#overview", "Overview"],
  ["#research", "Research"],
  ["#brand", "Brand"],
  ["#ui", "UI design"],
  ["#results", "Results"],
  ["#investors", "Investors"],
];

function Wordmark({ className = "logo" }: { className?: string }) {
  return (
    <span className={className}>
      vote<i>x</i>
    </span>
  );
}

/** Link out to the running site. */
export function LiveLink({
  children = "View live project",
  ghost = false,
}: {
  children?: string;
  ghost?: boolean;
}) {
  return (
    <Link className={ghost ? "cta ghost" : "cta"} href="/website">
      {children}
      <i aria-hidden="true">↗</i>
    </Link>
  );
}

export function SiteFooter() {
  return (
    <footer className="cs-footer">
      <div className="wrap">
        <div className="cs-foot">
          <div>
            <Wordmark />
            <p>
              A concept study for a Sri Lankan electrical group — cables, wall
              switches, plugs and circuit protection under one brand.
            </p>
            <LiveLink ghost>Open the live site</LiveLink>
          </div>

          <div>
            <h3>Case study</h3>
            <ul>
              {SECTIONS.map(([href, label]) => (
                <li key={href}>
                  <a href={href}>{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>The project</h3>
            <ul>
              <li>
                <Link href="/website">Votex website</Link>
              </li>
              <li>
                <a href="#brand">Brand assets</a>
              </li>
              <li>
                <a href="#ui">Screens</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="cs-legal">
          <span>
            Votex is a concept brand. Prices, names, figures and codes on this
            page are sample data.
          </span>
          <span className="mono">© 2026</span>
        </div>
      </div>
    </footer>
  );
}
