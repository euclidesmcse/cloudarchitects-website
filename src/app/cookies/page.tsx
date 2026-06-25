import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Política de Cookies — Cloud Architects",
  description: "Política de cookies da Cloud Architects. Que cookies utilizamos e como os pode gerir.",
};

export default function CookiesPage() {
  return (
    <Section className="pt-24">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-surface-50 sm:text-5xl">Política de Cookies</h1>
          <p className="mt-2 text-sm text-surface-500">Última actualização: Junho de 2026</p>

          <div className="mt-10 space-y-8 text-surface-300 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-surface-100">1. O Que São Cookies</h2>
              <p className="mt-3">Cookies são pequenos ficheiros de texto armazenados no seu dispositivo quando visita um site. Servem para lembrar preferências, autenticar sessões e recolher estatísticas anónimas de navegação.</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-surface-100">2. Cookies que Utilizamos</h2>
              <ul className="mt-3 list-disc pl-5 space-y-2">
                <li><strong>Cookies essenciais:</strong> necessários para o funcionamento do site (ex.: sessão, segurança). Não podem ser desactivados.</li>
                <li><strong>Cookies de analytics:</strong> recolhem dados anónimos sobre como os visitantes usam o site, para nos ajudar a melhorar a experiência.</li>
              </ul>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-surface-100">3. Gestão de Cookies</h2>
              <p className="mt-3">Pode configurar o seu browser para recusar cookies ou alertar quando estes são enviados. Note que desactivar cookies essenciais pode afectar o funcionamento do site.</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-surface-100">4. Alterações</h2>
              <p className="mt-3">Reservamo-nos o direito de alterar esta política a qualquer momento. Consulte esta página regularmente.</p>
            </section>
          </div>
          <div className="mt-12 border-t border-surface-800 pt-8">
            <Link href="/privacidade" className="mr-4 text-sm text-brand-400 hover:text-brand-300">Política de Privacidade</Link>
            <Link href="/termos" className="text-sm text-brand-400 hover:text-brand-300">Termos de Uso</Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
