import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Política de Privacidade — Cloud Architects",
  description: "Política de privacidade da Cloud Architects. Como recolhemos, usamos e protegemos os seus dados pessoais.",
};

export default function PrivacidadePage() {
  return (
    <Section className="pt-24">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-surface-50 sm:text-5xl">Política de Privacidade</h1>
          <p className="mt-2 text-sm text-surface-500">Última actualização: Junho de 2026</p>

          <div className="mt-10 space-y-8 text-surface-300 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-surface-100">1. Introdução</h2>
              <p className="mt-3">A Cloud Architects está comprometida com a proteção dos seus dados pessoais. Esta política descreve como recolhemos, utilizamos e protegemos a sua informação quando visita o nosso site ou utiliza os nossos serviços.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-surface-100">2. Dados que Recolhemos</h2>
              <ul className="mt-3 list-disc pl-5 space-y-2">
                <li><strong>Dados de contacto:</strong> nome, email, telefone e empresa quando preenche o formulário de contacto.</li>
                <li><strong>Dados de navegação:</strong> endereço IP, tipo de browser, páginas visitadas e tempo de permanência.</li>
                <li><strong>Cookies:</strong> utilizamos cookies essenciais para o funcionamento do site. Consulte a nossa Política de Cookies.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-surface-100">3. Finalidade do Tratamento</h2>
              <p className="mt-3">Utilizamos os seus dados para:</p>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                <li>Responder a pedidos de contacto e orçamentos</li>
                <li>Melhorar a experiência de navegação no site</li>
                <li>Cumprir obrigações legais e regulatórias</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-surface-100">4. Partilha de Dados</h2>
              <p className="mt-3">Não vendemos nem partilhamos os seus dados pessoais com terceiros, exceto quando exigido por lei ou para a prestação dos nossos serviços (ex.: fornecedores de infraestrutura cloud).</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-surface-100">5. Direitos do Titular</h2>
              <p className="mt-3">Nos termos do RGPD, tem direito a aceder, rectificar, eliminar e portar os seus dados, bem como a opor-se ao tratamento. Para exercer estes direitos, contacte-nos através de <a href="mailto:privacidade@cloudarchitect.com.br" className="text-brand-400 hover:text-brand-300">privacidade@cloudarchitect.com.br</a>.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-surface-100">6. Contacto</h2>
              <p className="mt-3">Para questões sobre esta política: Cloud Architects, Aveiro, Portugal — <a href="mailto:privacidade@cloudarchitect.com.br" className="text-brand-400 hover:text-brand-300">privacidade@cloudarchitect.com.br</a>.</p>
            </section>
          </div>

          <div className="mt-12 border-t border-surface-800 pt-8">
            <Link href="/contacto"><Button variant="outline">Fale Connosco <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
