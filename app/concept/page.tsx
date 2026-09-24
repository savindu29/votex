import { redirect } from "next/navigation";

/** The case study moved to the site root; keep the old path working. */
export default function ConceptRedirect() {
  redirect("/");
}
