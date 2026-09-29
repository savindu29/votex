import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SkyPass Live",
  description:
    "SkyPass Live: a concept for booking live events in Sri Lanka the way you board a flight.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
