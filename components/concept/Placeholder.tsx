/**
 * A reserved frame for a screen that is still to be designed.
 *
 * Each one holds the slot at roughly the finished size and says what belongs
 * there, so the case study reads end to end while the UI work is pending.
 * Drop the real screen in by replacing the <Placeholder /> with the component.
 */

type PlaceholderProps = {
  /** What goes here, e.g. "Landing page concept". */
  name: string;
  /** Intended canvas, e.g. "1440 × 900". */
  size?: string;
  /** One line on what the screen has to do. */
  note?: string;
  /** Frame proportion, e.g. "16 / 10". Ignored when `phone` is set. */
  ratio?: string;
  /** Use the phone silhouette instead of a rectangle. */
  phone?: boolean;
};

export function Placeholder({
  name,
  size,
  note,
  ratio,
  phone = false,
}: PlaceholderProps) {
  return (
    <div
      className={phone ? "ph phone" : "ph"}
      style={ratio && !phone ? { aspectRatio: ratio } : undefined}
      role="img"
      aria-label={`Reserved space for the ${name} screen${
        size ? `, ${size}` : ""
      }`}
    >
      <span className="ph-tag">Reserved</span>
      <span className="ph-name">{name}</span>
      {size && <span className="ph-size">{size}</span>}
      {note && <p className="ph-note">{note}</p>}
    </div>
  );
}

/** A reserved frame with a caption underneath, for use in a figure list. */
export function PlaceholderFigure({
  caption,
  captionNote,
  ...frame
}: PlaceholderProps & { caption: string; captionNote?: string }) {
  return (
    <figure style={{ margin: 0 }}>
      <Placeholder {...frame} />
      <figcaption className="ph-cap">
        <b>{caption}</b>
        {captionNote}
      </figcaption>
    </figure>
  );
}
