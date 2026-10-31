import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LegalPage } from "@/components/site/legal-page";

export const metadata: Metadata = {
  title: "Política de Privacidade — Cloud Architects",
  description: "Política de privacidade da Cloud Architects. Como recolhemos, usamos e protegemos os seus dados pessoais.",
};

export default function PrivacidadePage() {
  return (
    <LegalPage
      title="Política de Privacidade"
      updated="Última actualização: Junho de 2026"
      footer={
        <Link href="/contacto" className="ca-font-sans inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-[#0a1b33] shadow-sm transition-all hover:border-slate-300">
          Fale connosco <ArrowRight className="h-4 w-4" />
        </Link>
      }
    >
      <section>
        <h2>1. Introdução</h2>
        <p>A Cloud Architects está comprometida com a proteção dos seus dados pessoais. Esta política descreve como recolhemos, utilizamos e protegemos a sua informação quando visita o nosso site ou utiliza os nossos serviços.</p>
      </section>
      <section>
        <h2>2. Dados que Recolhemos</h2>
        <ul>
          <li><strong>Dados de contacto:</strong> nome, email, telefone e empresa quando preenche o formulário de contacto.</li>
          <li><strong>Dados de navegação:</strong> endereço IP, tipo de browser, páginas visitadas e tempo de permanência.</li>
          <li><strong>Cookies:</strong> utilizamos cookies essenciais para o funcionamento do site. Consulte a nossa Política de Cookies.</li>
        </ul>
      </section>
      <section>
        <h2>3. Finalidade do Tratamento</h2>
        <p>Utilizamos os seus dados para:</p>
        <ul>
          <li>Responder a pedidos de contacto e orçamentos</li>
          <li>Melhorar a experiência de navegação no site</li>
          <li>Cumprir obrigações legais e regulatórias</li>
        </ul>
      </section>
      <section>
        <h2>4. Partilha de Dados</h2>
        <p>Não vendemos nem partilhamos os seus dados pessoais com terceiros, exceto quando exigido por lei ou para a prestação dos nossos serviços (ex.: fornecedores de infraestrutura cloud).</p>
      </section>
      <section>
        <h2>5. Direitos do Titular</h2>
        <p>Nos termos do RGPD, tem direito a aceder, rectificar, eliminar e portar os seus dados, bem como a opor-se ao tratamento. Para exercer estes direitos, contacte-nos através de <a href="mailto:privacidade@cloudarchitect.com.br">privacidade@cloudarchitect.com.br</a>.</p>
      </section>
      <section>
        <h2>6. Contacto</h2>
        <p>Para questões sobre esta política: Cloud Architects, Aveiro, Portugal — <a href="mailto:privacidade@cloudarchitect.com.br">privacidade@cloudarchitect.com.br</a>.</p>
      </section>
    </LegalPage>
  );
}
