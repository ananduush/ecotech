import { defineRouting } from "next-intl/routing";
import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const routing = defineRouting({
	locales: ["mn", "en"],

	// Used when no locale matches
	defaultLocale: "mn",
});

export const { Link, redirect, usePathname, useRouter } =
	createSharedPathnamesNavigation(routing);
