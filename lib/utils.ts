import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Joins class names and lets a later Tailwind utility win over an earlier one
 * in the same group, so a caller's `className` can override a component's
 * defaults without fighting specificity.
 *
 * shadcn generates this file as `export { cn } from "cn"`, which drops the
 * tailwind-merge step — the components here rely on it, so it is spelled out.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
