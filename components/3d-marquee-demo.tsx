"use client";

import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import { cn } from "@/lib/utils";

/** The marquee splits its list four ways, so it wants a full grid to fill. */
const COLUMNS = 4;
const PER_COLUMN = 8;

/**
 * The 3D marquee, filled from whatever screens it is handed.
 *
 * A short list would leave the grid nearly empty, so the images are tiled up
 * to a full one and each column is rotated by a step — otherwise all four
 * columns run the same order and the drift reads as a single flat sheet.
 */
export default function ThreeDMarqueeDemo({
  images,
  className,
  /**
   * How much of the drifting plane shows through. The marquee's own default is
   * a flat `h-[600px]`; this scales with the viewport instead, and twMerge
   * lets it replace both that and the component's `max-sm` height.
   */
  height = "h-[clamp(520px,64vw,1060px)] max-sm:h-[440px]",
  /**
   * The marquee ships lying well back at 55°. Standing it up puts more of each
   * screen face-on to the reader, and easing the twist runs the columns closer
   * to vertical instead of across the band.
   */
  rotateX = 40,
  rotateZ = -34,
}: {
  images: string[];
  className?: string;
  height?: string;
  rotateX?: number;
  rotateZ?: number;
}) {
  if (images.length === 0) return null;

  const tiled = Array.from({ length: COLUMNS * PER_COLUMN }, (_, i) => {
    const column = Math.floor(i / PER_COLUMN);
    const row = i % PER_COLUMN;
    return images[(row + column) % images.length];
  });

  return (
    <div
      className={cn(
        "rounded-[var(--r-img)] bg-[var(--soft)] p-2 ring-1 ring-[var(--line)]",
        className,
      )}
    >
      <ThreeDMarquee
        images={tiled}
        className={height}
        rotateX={rotateX}
        rotateZ={rotateZ}
      />
    </div>
  );
}
