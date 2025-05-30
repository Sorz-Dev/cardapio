import { type NextRequest, NextResponse } from "next/server"
import { match } from "@formatjs/intl-localematcher"
import Negotiator from "negotiator"

// List of supported locales
export const locales = ["pt", "en"]
export const defaultLocale = "pt"

// Get the preferred locale from the request
function getLocale(request: NextRequest): string {
  const negotiatorHeaders: Record<string, string> = {}
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

  // Use negotiator and intl-localematcher to get the best locale
  try {
    const languages = new Negotiator({ headers: negotiatorHeaders }).languages()
    return match(languages, locales, defaultLocale)
  } catch (error) {
    // If there's an error in the matching process, return the default locale
    console.error("Error matching locale:", error)
    return defaultLocale
  }
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Check if the pathname is missing a locale
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  )

  // If there is no locale in the pathname
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request)

    // Make sure we have a clean pathname before redirecting
    const cleanPathname = pathname.replace(/\/undefined$/, "")

    // Redirect to the same pathname but with the detected locale
    return NextResponse.redirect(
      new URL(`/${locale}${cleanPathname.startsWith("/") ? "" : "/"}${cleanPathname}`, request.url),
    )
  }
}

export const config = {
  // Match all pathnames except for:
  // - API routes
  // - Static files (e.g. images, fonts, etc.)
  // - Favicon
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
