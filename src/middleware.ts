import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Inject header so RootLayout can skip public Header/Footer on admin routes
  const response = NextResponse.next();
  response.headers.set("x-route-group", pathname.startsWith("/admin") ? "admin" : "public");
  return response;
}

export const config = {
  matcher: "/((?!_next|api|favicon).*)",
};
