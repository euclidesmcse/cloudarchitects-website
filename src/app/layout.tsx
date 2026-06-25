import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  // Não renderizar Header/Footer nas rotas do Payload admin
  const headersList = await headers();
  const routeGroup = headersList.get("x-route-group") || "";
  const isPayloadRoute = routeGroup === "admin";

  return (
    <html
      lang="pt"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-surface-950 text-surface-100">
        {!isPayloadRoute && <Header />}
        {isPayloadRoute ? (
          children
        ) : (
          <main className="flex flex-1 flex-col pt-16">{children}</main>
        )}
        {!isPayloadRoute && <Footer />}
      </body>
    </html>
  );
}
