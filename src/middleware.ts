import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Inject header so RootLayout can pick the right chrome:
  //  - admin  → Payload renderiza o seu próprio <html>/<body>
  //  - home   → landing clara/self-contained (sem header/rodapé escuros)
  //  - public → páginas internas com header/rodapé
  const group = pathname.startsWith("/admin") ? "admin" : pathname === "/" ? "home" : "public";
  const response = NextResponse.next();
  response.headers.set("x-route-group", group);
  return response;
}

export const config = {
  matcher: "/((?!_next|api|favicon).*)",
};
