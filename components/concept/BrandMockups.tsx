/**
 * The wordmark lockups: the primary lockup with its clear-space rule, and the
 * reversed lockup with the app icon. Drawn as SVG so they stay crisp at any
 * size — the photographed applications live in public/mockups.
 *
 * The identity is the word alone — "vote" in navy, "x" in red. There is no
 * symbol, so the x doubles as the graphic device wherever a mark is wanted.
 *
 * Text pulls its family from the CSS tokens rather than naming a font: the
 * faces are loaded through next/font, which registers them under generated
 * family names.
 */

const DISPLAY = { fontFamily: "var(--display)" } as const;
const MONO = { fontFamily: "var(--mono)" } as const;

/** The wordmark as SVG text, for use inside a mockup. */
function Wordmark({
  x,
  y,
  size,
  ink = "#14202E",
  accent = "#D52B1E",
  anchor = "middle",
}: {
  x: number;
  y: number;
  size: number;
  ink?: string;
  accent?: string;
  anchor?: "start" | "middle" | "end";
}) {
  return (
    <text
      x={x}
      y={y}
      textAnchor={anchor}
      style={DISPLAY}
      fontWeight="800"
      fontSize={size}
      letterSpacing={-size * 0.045}
      fill={ink}
    >
      vote<tspan fill={accent}>x</tspan>
    </text>
  );
}

export function PrimaryLogo() {
  return (
    <svg viewBox="0 0 640 300" role="img" aria-label="Votex primary wordmark">
      {/* clear space = the height of the x */}
      <rect
        x="96"
        y="72"
        width="448"
        height="156"
        fill="none"
        stroke="#CBD2DA"
        strokeDasharray="3 4"
      />
      <Wordmark x={320} y={192} size={150} />
      <g style={MONO} fontSize="11" fill="#8B96A3">
        <text x="96" y="60">
          WORDMARK
        </text>
        <text x="96" y="248">
          CLEAR SPACE = HEIGHT OF THE X
        </text>
      </g>
    </svg>
  );
}

export function ReversedLogo() {
  return (
    <svg
      viewBox="0 0 320 300"
      role="img"
      aria-label="Votex reversed wordmark and app icon"
    >
      <defs>
        <linearGradient id="lgIcon" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#E23A2C" />
          <stop offset="1" stopColor="#B51F14" />
        </linearGradient>
      </defs>

      {/* app icon: the x on its own */}
      <rect x="110" y="40" width="100" height="100" rx="24" fill="url(#lgIcon)" />
      <text
        x="160"
        y="113"
        textAnchor="middle"
        style={DISPLAY}
        fontWeight="800"
        fontSize="76"
        letterSpacing="-3"
        fill="#fff"
      >
        x
      </text>

      <Wordmark x={160} y={240} size={52} ink="#fff" accent="#FF5A4C" />
    </svg>
  );
}
