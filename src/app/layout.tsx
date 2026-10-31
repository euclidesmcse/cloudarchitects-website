import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { headers } from "next/headers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const outfit = Outfit({ variable: "--font-outfit", subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: {
    default: "Cloud Architects — Cloud, DevOps & Agentes de IA",
    template: "%s | Cloud Architects",
  },
  description:
    "Empresa portuguesa especializada em cloud computing, DevOps, automação e agentes de inteligência artificial.",
  keywords: [
    "cloud",
    "devops",
    "automação",
    "agentes de IA",
    "cloud computing",
    "portugal",
    "infraestrutura",
  ],
  authors: [{ name: "Cloud Architects" }],
  openGraph: {
    type: "website",
    locale: "pt_PT",
    siteName: "Cloud Architects",
    title: "Cloud Architects — Cloud, DevOps & Agentes de IA",
    description:
      "Empresa portuguesa especializada em cloud computing, DevOps, automação e agentes de inteligência artificial.",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Detectar rotas do Payload admin sem depender de headers (que são frágeis)
  // Payload RootLayout já renderiza seu próprio <html> e <body> — não podemos
  // aninhar tags HTML/BODY, senão React produz erro de hidratação #418.
  const headersList = await headers();
  const routeGroup = headersList.get("x-route-group") || "";
  const isPayloadRoute = routeGroup === "admin";

  if (isPayloadRoute) {
    // Payload RootLayout já renderiza <html>/<body> completos.
    // Retornamos children SEM wrapper — evita nested <html>/<body>.
    return children;
  }

  const isHome = routeGroup === "home";

  // Site público: usamos nosso próprio <html>/<body>
  return (
    <html
      lang="pt"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      {isHome ? (
        // Landing clara e auto-contida (traz a sua própria navbar + rodapé)
        <body className="ca-font-sans min-h-full bg-[#f7f8fb] text-slate-900">{children}</body>
      ) : (
        <body className="ca-font-sans flex min-h-full flex-col bg-[#f7f8fb] text-slate-900">
          <Header />
          <main className="flex flex-1 flex-col pt-16">{children}</main>
          <Footer />
        </body>
      )}
    </html>
  );
}
