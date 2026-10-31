import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LegalPage } from "@/components/site/legal-page";

export const metadata: Metadata = {
  title: "Termos de Uso — Cloud Architects",
  description: "Termos e condições de utilização do site e serviços da Cloud Architects.",
};

export default function TermosPage() {
  return (
    <LegalPage
      title="Termos de Uso"
      updated="Última actualização: Junho de 2026"
      footer={
        <Link href="/contacto" className="ca-font-sans inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-[#0a1b33] shadow-sm transition-all hover:border-slate-300">
          Contactar <ArrowRight className="h-4 w-4" />
        </Link>
      }
    >
      <section>
        <h2>1. Aceitação</h2>
        <p>Ao aceder e utilizar este site, aceita estes Termos de Uso. Se não concordar, não utilize o site.</p>
      </section>
      <section>
        <h2>2. Serviços</h2>
        <p>A Cloud Architects fornece serviços de consultoria em cloud computing, DevOps, automação e agentes de IA. As descrições neste site são informativas e não constituem uma oferta vinculativa.</p>
      </section>
      <section>
        <h2>3. Propriedade Intelectual</h2>
        <p>Todo o conteúdo do site — textos, imagens, logótipos e código — é propriedade da Cloud Architects ou dos seus licenciadores e está protegido por direitos de autor.</p>
      </section>
      <section>
        <h2>4. Limitação de Responsabilidade</h2>
        <p>A Cloud Architects não se responsabiliza por danos decorrentes da utilização do site ou da impossibilidade de o utilizar. O site é fornecido &quot;tal como está&quot;.</p>
      </section>
      <section>
        <h2>5. Lei Aplicável</h2>
        <p>Estes termos são regidos pela lei portuguesa. Qualquer litígio será submetido aos tribunais da comarca de Aveiro.</p>
      </section>
    </LegalPage>
  );
}
