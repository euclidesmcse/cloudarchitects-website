import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/site/legal-page";

export const metadata: Metadata = {
  title: "Política de Cookies — Cloud Architects",
  description: "Política de cookies da Cloud Architects. Que cookies utilizamos e como os pode gerir.",
};

export default function CookiesPage() {
  return (
    <LegalPage
      title="Política de Cookies"
      updated="Última actualização: Junho de 2026"
      footer={
        <div className="flex flex-wrap gap-6 font-mono text-[0.8rem]">
          <Link href="/privacidade" className="text-accent-400 hover:text-accent-300">Política de Privacidade</Link>
          <Link href="/termos" className="text-accent-400 hover:text-accent-300">Termos de Uso</Link>
        </div>
      }
    >
      <section>
        <h2>1. O Que São Cookies</h2>
        <p>Cookies são pequenos ficheiros de texto armazenados no seu dispositivo quando visita um site. Servem para lembrar preferências, autenticar sessões e recolher estatísticas anónimas de navegação.</p>
      </section>
      <section>
        <h2>2. Cookies que Utilizamos</h2>
        <ul>
          <li><strong>Cookies essenciais:</strong> necessários para o funcionamento do site (ex.: sessão, segurança). Não podem ser desactivados.</li>
          <li><strong>Cookies de analytics:</strong> recolhem dados anónimos sobre como os visitantes usam o site, para nos ajudar a melhorar a experiência.</li>
        </ul>
      </section>
      <section>
        <h2>3. Gestão de Cookies</h2>
        <p>Pode configurar o seu browser para recusar cookies ou alertar quando estes são enviados. Note que desactivar cookies essenciais pode afectar o funcionamento do site.</p>
      </section>
      <section>
        <h2>4. Alterações</h2>
        <p>Reservamo-nos o direito de alterar esta política a qualquer momento. Consulte esta página regularmente.</p>
      </section>
    </LegalPage>
  );
}
