// pages/[locale]/404.tsx
import { unstable_setRequestLocale } from "next-intl/server";

export async function generateStaticParams() {
  // Set the locale statically here for static page generation
  unstable_setRequestLocale("en"); // or another locale dynamically
  return [
    { locale: "en" },
    { locale: "mn" },
    // Add any other locales you're supporting
  ];
}
