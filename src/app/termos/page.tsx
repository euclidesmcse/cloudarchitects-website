import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Termos de Uso — Cloud Architects",
  description: "Termos e condições de utilização do site e serviços da Cloud Architects.",
};

export default function TermosPage() {
  return (
    <Section className="pt-24">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-surface-50 sm:text-5xl">Termos de Uso</h1>
          <p className="mt-2 text-sm text-surface-500">Última actualização: Junho de 2026</p>

          <div className="mt-10 space-y-8 text-surface-300 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-surface-100">1. Aceitação</h2>
              <p className="mt-3">Ao aceder e utilizar este site, aceita estes Termos de Uso. Se não concordar, não utilize o site.</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-surface-100">2. Serviços</h2>
              <p className="mt-3">A Cloud Architects fornece serviços de consultoria em cloud computing, DevOps, automação e agentes de IA. As descrições neste site são informativas e não constituem uma oferta vinculativa.</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-surface-100">3. Propriedade Intelectual</h2>
              <p className="mt-3">Todo o conteúdo do site — textos, imagens, logótipos e código — é propriedade da Cloud Architects ou dos seus licenciadores e está protegido por direitos de autor.</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-surface-100">4. Limitação de Responsabilidade</h2>
              <p className="mt-3">A Cloud Architects não se responsabiliza por danos decorrentes da utilização do site ou da impossibilidade de o utilizar. O site é fornecido "tal como está".</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-surface-100">5. Lei Aplicável</h2>
              <p className="mt-3">Estes termos são regidos pela lei portuguesa. Qualquer litígio será submetido aos tribunais da comarca de Aveiro.</p>
            </section>
          </div>
          <div className="mt-12 border-t border-surface-800 pt-8">
            <Link href="/contacto"><Button variant="outline">Contactar <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
