import Image from "next/image";
import type { PlacedMockup } from "@/lib/mockups";

/**
 * The image grid used by every gallery on the page.
 *
 * Galleries run to the edges of the screen while the text around them stays in
 * the reading column. Tiles keep the span the layout gave them, and the CSS
 * gives every tile in a row the same height — so the gallery reads as rows
 * rather than as a ragged mosaic, whatever proportions the source images have.
 */

/** What the browser should download, given how wide the tile actually gets. */
function sizesFor(span: number) {
  const wide = Math.round((span / 6) * 100);
  return `(max-width: 640px) 100vw, (max-width: 900px) 50vw, ${wide}vw`;
}

export function MockupGrid({ items }: { items: PlacedMockup[] }) {
  return (
    <div className="mk-gallery full">
      {items.map((m) => (
        <figure className={`mk-tile mk-s${m.span}`} key={m.file}>
          <div className="mk-art">
            <Image
              src={m.src}
              alt={m.alt}
              width={m.width}
              height={m.height}
              sizes={sizesFor(m.span)}
              style={{ objectPosition: m.focus }}
            />
          </div>
          <figcaption>
            <b>{m.title}</b>
            {m.note}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

/** The head that sits above a gallery: a title on the left, a count on the right. */
export function GalleryHead({
  title,
  count,
  unit = "mockup",
}: {
  title: string;
  count: number;
  unit?: string;
}) {
  return (
    <div className="mk-head">
      <h3>{title}</h3>
      <span className="label">
        {count} {unit}
        {count === 1 ? "" : "s"}
      </span>
    </div>
  );
}
