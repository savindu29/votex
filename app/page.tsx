import { redirect } from "next/navigation";

/** The site opens on the SkyPass case study. */
export default function Home() {
  redirect("/concept");
}
