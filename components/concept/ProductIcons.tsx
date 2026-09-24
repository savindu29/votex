/**
 * Inline sprite for the product-family icons.
 * Rendered once per page; referenced with <Icon name="coil" />.
 */

export type IconName =
  | "coil"
  | "fire"
  | "tower"
  | "solar"
  | "switch"
  | "mcb"
  | "fan"
  | "pellet";

export function Icon({ name, size }: { name: IconName; size?: number }) {
  return (
    <svg width={size} height={size} aria-hidden="true">
      <use href={`#vx-${name}`} />
    </svg>
  );
}

export function ProductIconSprite() {
  return (
    <svg
      width="0"
      height="0"
      style={{ position: "absolute" }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="vx-plate" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#E7EBF0" />
        </linearGradient>
        <linearGradient id="vx-cu" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#F0B98A" />
          <stop offset=".5" stopColor="#C47843" />
          <stop offset="1" stopColor="#8E4F26" />
        </linearGradient>
        <linearGradient id="vx-rock" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#F7F9FB" />
          <stop offset="1" stopColor="#D6DCE3" />
        </linearGradient>
        <linearGradient id="vx-redg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#E94A3C" />
          <stop offset="1" stopColor="#B8241A" />
        </linearGradient>
        <linearGradient id="vx-blade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#2A3E56" />
          <stop offset="1" stopColor="#4A6482" />
        </linearGradient>
      </defs>

      {/* flexible cable coil */}
      <symbol id="vx-coil" viewBox="0 0 100 100">
        <g fill="none" strokeLinecap="round">
          <circle cx="50" cy="50" r="34" stroke="#14202E" strokeWidth="9" />
          <circle cx="50" cy="50" r="22" stroke="#2A3B4F" strokeWidth="9" />
          <path
            d="M84 50 C92 62 92 78 80 90"
            stroke="#14202E"
            strokeWidth="9"
          />
        </g>
        <circle cx="80" cy="90" r="5" fill="url(#vx-cu)" />
      </symbol>

      {/* fire-safe cable */}
      <symbol id="vx-fire" viewBox="0 0 100 100">
        <rect x="6" y="58" width="88" height="18" rx="9" fill="#14202E" />
        <circle cx="15" cy="67" r="7" fill="url(#vx-cu)" />
        <path
          d="M56 54 C40 50 40 34 50 22 C50 32 58 32 58 24 C70 34 70 50 56 54z"
          fill="url(#vx-redg)"
        />
        <path
          d="M55 52 C49 50 48 42 53 36 C54 42 58 42 59 38 C62 44 61 50 55 52z"
          fill="#F4B042"
        />
      </symbol>

      {/* transmission pylon */}
      <symbol id="vx-tower" viewBox="0 0 100 100">
        <g
          fill="none"
          stroke="#14202E"
          strokeWidth="2.6"
          strokeLinejoin="round"
        >
          <path d="M38 94 L50 10 L62 94" />
          <path d="M28 30 H72" />
          <path d="M22 48 H78" />
          <path d="M42 60 L58 76" />
          <path d="M58 60 L42 76" />
          <path d="M45 36 L55 48" />
          <path d="M55 36 L45 48" />
        </g>
        <path
          d="M2 34 Q14 40 28 30 M72 30 Q86 40 98 34"
          fill="none"
          stroke="#B8683A"
          strokeWidth="2"
        />
      </symbol>

      {/* solar panel */}
      <symbol id="vx-solar" viewBox="0 0 100 100">
        <path
          d="M18 28 H82 L92 76 H8 Z"
          fill="#1F4E86"
          stroke="#14202E"
          strokeWidth="2"
        />
        <g stroke="#7FA7D6" strokeWidth="1.2">
          <path d="M34 28 L29 76" />
          <path d="M50 28 V76" />
          <path d="M66 28 L71 76" />
          <path d="M14 44 H86" />
          <path d="M11 60 H89" />
        </g>
        <path
          d="M60 76 C62 88 78 88 82 94"
          fill="none"
          stroke="#D52B1E"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </symbol>

      {/* 2-gang wall switch */}
      <symbol id="vx-switch" viewBox="0 0 100 100">
        <rect
          x="8"
          y="8"
          width="84"
          height="84"
          rx="14"
          fill="url(#vx-plate)"
          stroke="#CDD4DC"
          strokeWidth="1.5"
        />
        <rect
          x="22"
          y="22"
          width="25"
          height="56"
          rx="6"
          fill="url(#vx-rock)"
          stroke="#C4CCD5"
        />
        <rect
          x="53"
          y="22"
          width="25"
          height="56"
          rx="6"
          fill="url(#vx-rock)"
          stroke="#C4CCD5"
        />
        <rect x="30" y="28" width="9" height="3" rx="1.5" fill="#D52B1E" />
        <rect x="61" y="28" width="9" height="3" rx="1.5" fill="#D52B1E" />
      </symbol>

      {/* miniature circuit breaker */}
      <symbol id="vx-mcb" viewBox="0 0 100 100">
        <rect
          x="30"
          y="6"
          width="40"
          height="88"
          rx="5"
          fill="url(#vx-plate)"
          stroke="#C4CCD5"
          strokeWidth="1.5"
        />
        <rect x="30" y="18" width="40" height="3" fill="#DDE2E8" />
        <rect x="30" y="79" width="40" height="3" fill="#DDE2E8" />
        <rect
          x="40"
          y="30"
          width="20"
          height="30"
          rx="3"
          fill="#E8ECF0"
          stroke="#C4CCD5"
        />
        <rect
          x="42"
          y="32"
          width="16"
          height="13"
          rx="2.5"
          fill="url(#vx-redg)"
        />
        <text
          x="50"
          y="72"
          style={{ fontFamily: "var(--mono)" }}
          fontSize="7"
          fill="#14202E"
          textAnchor="middle"
          fontWeight="600"
        >
          C16
        </text>
        <circle cx="50" cy="12" r="2.4" fill="#B6BFC9" />
        <circle cx="50" cy="88" r="2.4" fill="#B6BFC9" />
      </symbol>

      {/* ceiling fan */}
      <symbol id="vx-fan" viewBox="0 0 100 100">
        <rect x="47" y="4" width="6" height="20" rx="2" fill="#6B7A8B" />
        <g fill="url(#vx-blade)">
          <path d="M50 50 C58 44 84 40 94 46 C88 54 62 56 50 50z" />
          <path d="M50 50 C49 60 36 84 26 88 C24 78 40 58 50 50z" />
          <path d="M50 50 C41 45 20 30 16 20 C26 20 46 38 50 50z" />
        </g>
        <circle
          cx="50"
          cy="50"
          r="10"
          fill="#DDE2E8"
          stroke="#9AA6B3"
          strokeWidth="1.5"
        />
        <circle cx="50" cy="50" r="3.5" fill="#B8683A" />
      </symbol>

      {/* PVC compound pellets */}
      <symbol id="vx-pellet" viewBox="0 0 100 100">
        <ellipse
          cx="34"
          cy="62"
          rx="14"
          ry="10"
          fill="#E4E9EF"
          stroke="#B9C3CE"
        />
        <ellipse cx="60" cy="68" rx="14" ry="10" fill="#D52B1E" />
        <ellipse cx="50" cy="44" rx="14" ry="10" fill="#2F6DB5" />
        <ellipse cx="72" cy="44" rx="11" ry="8" fill="#3E8E3A" />
        <ellipse cx="28" cy="40" rx="10" ry="7" fill="#14202E" />
      </symbol>

    </svg>
  );
}
