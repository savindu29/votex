/**
 * Pixel dimensions straight from an image file's header.
 *
 * `next/image` needs a width and a height for anything that isn't a static
 * import, and the mockups are discovered at build time rather than imported by
 * name — so we read the header ourselves instead of taking on a dependency.
 * JPEG, PNG and WebP cover everything the folder holds.
 */

export type Size = { width: number; height: number };

/** JPEG start-of-frame markers, which are the ones carrying the dimensions. */
function isStartOfFrame(marker: number) {
  return (
    marker >= 0xc0 &&
    marker <= 0xcf &&
    marker !== 0xc4 && // define Huffman table
    marker !== 0xc8 && // JPEG extensions
    marker !== 0xcc // define arithmetic coding conditioning
  );
}

function jpegSize(buf: Buffer): Size | null {
  let offset = 2; // skip SOI
  while (offset + 9 < buf.length) {
    if (buf[offset] !== 0xff) {
      offset++; // resync on padding between segments
      continue;
    }
    const marker = buf[offset + 1];

    // markers that carry no payload
    if (marker === 0xff || marker === 0x01 || (marker >= 0xd0 && marker <= 0xd9)) {
      offset += 2;
      continue;
    }
    if (isStartOfFrame(marker)) {
      return {
        height: buf.readUInt16BE(offset + 5),
        width: buf.readUInt16BE(offset + 7),
      };
    }
    const length = buf.readUInt16BE(offset + 2);
    if (length < 2) return null;
    offset += 2 + length;
  }
  return null;
}

function pngSize(buf: Buffer): Size | null {
  if (buf.length < 24 || buf.toString("ascii", 12, 16) !== "IHDR") return null;
  return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
}

function webpSize(buf: Buffer): Size | null {
  if (buf.length < 30) return null;
  const chunk = buf.toString("ascii", 12, 16);

  if (chunk === "VP8X") {
    // 24-bit canvas size, stored minus one
    const w = buf.readUIntLE(24, 3) + 1;
    const h = buf.readUIntLE(27, 3) + 1;
    return { width: w, height: h };
  }
  if (chunk === "VP8 ") {
    return {
      width: buf.readUInt16LE(26) & 0x3fff,
      height: buf.readUInt16LE(28) & 0x3fff,
    };
  }
  if (chunk === "VP8L") {
    const bits = buf.readUInt32LE(21);
    return {
      width: (bits & 0x3fff) + 1,
      height: ((bits >> 14) & 0x3fff) + 1,
    };
  }
  return null;
}

/** Reads the dimensions out of an image buffer, or null if unrecognised. */
export function imageSize(buf: Buffer): Size | null {
  if (buf.length < 24) return null;

  if (buf[0] === 0xff && buf[1] === 0xd8) return jpegSize(buf);
  if (buf.readUInt32BE(0) === 0x89504e47) return pngSize(buf);
  if (
    buf.toString("ascii", 0, 4) === "RIFF" &&
    buf.toString("ascii", 8, 12) === "WEBP"
  ) {
    return webpSize(buf);
  }
  return null;
}
