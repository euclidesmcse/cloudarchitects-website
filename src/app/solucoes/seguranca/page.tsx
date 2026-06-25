import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function SolucoesSegurançaCloudPage() {
  return (
    <>
      <Section noBottom>
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="outline" className="mb-4">Cloud Security & Compliance</Badge>
            <h1 className="text-4xl font-bold tracking-tight text-surface-100 sm:text-5xl">
              Segurança Cloud
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-surface-400">
              Defesa em profundidade para proteger identidades, dados e workloads na nuvem.
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="mx-auto max-w-4xl">
            <p className="text-lg leading-relaxed text-surface-300 mb-12">
              Implementamos controles de segurança multicamada com monitoramento contínuo de ameaças. Da arquitetura Zero Trust à automação de compliance, sua infraestrutura fica protegida contra o cenário de ameaças em constante evolução.
            </p>

            <div className="grid gap-6 md:grid-cols-1">
          <div className="rounded-xl border border-surface-700/50 bg-surface-900/30 p-6 hover:border-surface-600/50 transition-colors">
            <h3 className="text-lg font-semibold text-surface-100 mb-2">Zero Trust Architecture</h3>
            <p className="text-sm text-surface-400 leading-relaxed">Modelo de segurança que elimina confiança implícita. Cada acesso é autenticado, autorizado e criptografado — independentemente da origem. Implementação com Azure AD, Okta ou AWS IAM Identity Center.</p>
          </div>
          <div className="rounded-xl border border-surface-700/50 bg-surface-900/30 p-6 hover:border-surface-600/50 transition-colors">
            <h3 className="text-lg font-semibold text-surface-100 mb-2">Proteção de Dados & DLP</h3>
            <p className="text-sm text-surface-400 leading-relaxed">Criptografia em repouso e em trânsito com gestão centralizada de chaves (KMS/HSM). Data Loss Prevention com classificação automática de dados sensíveis e políticas de retenção.</p>
          </div>
          <div className="rounded-xl border border-surface-700/50 bg-surface-900/30 p-6 hover:border-surface-600/50 transition-colors">
            <h3 className="text-lg font-semibold text-surface-100 mb-2">Security Operations Center</h3>
            <p className="text-sm text-surface-400 leading-relaxed">SIEM (Microsoft Sentinel, Splunk) + SOAR para detecção e resposta automatizada a incidentes. Threat Hunting proativo com inteligência de ameaças atualizada em tempo real.</p>
          </div>
          <div className="rounded-xl border border-surface-700/50 bg-surface-900/30 p-6 hover:border-surface-600/50 transition-colors">
            <h3 className="text-lg font-semibold text-surface-100 mb-2">Compliance Automatizado</h3>
            <p className="text-sm text-surface-400 leading-relaxed">Validação contínua de conformidade com LGPD, ISO 27001, SOC 2 e PCI-DSS. Políticas como código (Rego/OPA) que bloqueiam automaticamente recursos não-conformes antes do deploy.</p>
          </div>
          <div className="rounded-xl border border-surface-700/50 bg-surface-900/30 p-6 hover:border-surface-600/50 transition-colors">
            <h3 className="text-lg font-semibold text-surface-100 mb-2">Container & Supply Chain Security</h3>
            <p className="text-sm text-surface-400 leading-relaxed">Scanning de vulnerabilidades em imagens de container (Trivy, Grype), assinatura de artefatos (Cosign/Sigstore) e SBOM para rastreabilidade completa da cadeia de software.</p>
          </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section muted noTop>
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold text-surface-100">
              Pronto para implementar?
            </h2>
            <p className="mt-3 text-surface-400">
              Agende uma conversa com nossos especialistas e descubra como
              aplicar estas soluções no seu contexto.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contacto" className="inline-flex items-center justify-center rounded-lg bg-brand-600 px-8 py-3 text-base font-medium text-white shadow-sm hover:bg-brand-500 transition-colors">
                Fale com um arquiteto
              </Link>
              <Link href="/solucoes" className="inline-flex items-center gap-2 text-sm font-medium text-surface-400 hover:text-surface-200 transition-colors">
                <ArrowRight className="h-4 w-4 rotate-180" />
                Voltar para soluções
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
