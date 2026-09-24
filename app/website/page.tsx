import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Votex — website",
  description:
    "The Votex company website: cables, wall switches, plugs and circuit protection, made in Sri Lanka.",
};

/**
 * Stub for the Votex marketing site. The screens are designed in the case
 * study first; build them out here.
 */
export default function Website() {
  return (
    <main className="wrap" style={{ paddingBlock: "96px 64px" }}>
      <p className="label">votex.lk</p>
      <h1 style={{ marginTop: 12 }}>Website</h1>
      <p className="sub" style={{ fontSize: 17 }}>
        Nothing here yet. This route is reserved for the Votex company site —
        hero, product families, projects, Electricians Club, quality and
        investors.
      </p>
      <p style={{ marginTop: 28 }}>
        <Link href="/" style={{ color: "var(--red)", fontWeight: 600 }}>
          ← Back to the case study
        </Link>
      </p>
    </main>
  );
}
