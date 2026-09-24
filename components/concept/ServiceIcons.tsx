/** Line glyphs for the services list. Stroke-based so they take currentColor. */

export type ServiceIcon =
  | "research"
  | "identity"
  | "interface"
  | "system"
  | "commerce"
  | "prototype";

const PATHS: Record<ServiceIcon, React.ReactNode> = {
  research: (
    <>
      <circle cx="10" cy="10" r="6.5" />
      <path d="M14.8 14.8 L20 20" />
    </>
  ),
  identity: (
    <>
      <path d="M3 18 L9 5 L15 18" />
      <path d="M5.4 13.4 H12.6" />
      <path d="M17 11 h4 M19 9 v4" />
    </>
  ),
  interface: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2.5" />
      <path d="M3 9 H21" />
      <path d="M9 9 V20" />
    </>
  ),
  system: (
    <>
      <rect x="3" y="3" width="7.5" height="7.5" rx="1.8" />
      <rect x="13.5" y="3" width="7.5" height="7.5" rx="1.8" />
      <rect x="3" y="13.5" width="7.5" height="7.5" rx="1.8" />
      <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.8" />
    </>
  ),
  commerce: (
    <>
      <path d="M3 4 h2.5 l2.2 10.5 h9.6 L19 7.5 H6.2" />
      <circle cx="9" cy="19" r="1.6" />
      <circle cx="17" cy="19" r="1.6" />
    </>
  ),
  prototype: (
    <>
      <path d="M4 3 L18 11 L11.5 12.5 L9.5 19 Z" />
      <path d="M14 15 L20 21" />
    </>
  ),
};

export function SvcIcon({ name }: { name: ServiceIcon }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {PATHS[name]}
    </svg>
  );
}
