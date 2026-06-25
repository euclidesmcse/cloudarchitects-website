export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export const navLinks: NavLink[] = [
  { label: "Início", href: "/" },
  {
    label: "Serviços",
    href: "/servicos",
    children: [
      { label: "Cloud & Infraestrutura", href: "/servicos/cloud-infra" },
      { label: "DevOps & Automação", href: "/servicos/devops-automacao" },
      { label: "Agentes de IA", href: "/servicos/agentes-ia" },
      { label: "Consultoria Técnica", href: "/servicos/consultoria" },
    ],
  },
  { label: "Soluções", href: "/solucoes" },
  { label: "Sobre", href: "/sobre" },
  { label: "Blog", href: "/blog" },
  { label: "Contacto", href: "/contacto" },
];

export const footerLinks = {
  servicos: {
    title: "Serviços",
    links: [
      { label: "Cloud & Infraestrutura", href: "/servicos/cloud-infra" },
      { label: "DevOps & Automação", href: "/servicos/devops-automacao" },
      { label: "Agentes de IA", href: "/servicos/agentes-ia" },
      { label: "Consultoria Técnica", href: "/servicos/consultoria" },
    ],
  },
  empresa: {
    title: "Empresa",
    links: [
      { label: "Sobre Nós", href: "/sobre" },
      { label: "Soluções", href: "/solucoes" },
      { label: "Blog", href: "/blog" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  contacto: {
    title: "Contacto",
    links: [
      { label: "Fale Connosco", href: "/contacto" },
      { label: "Área Cliente", href: "/area-cliente" },
      { label: "Suporte", href: "/contacto#suporte" },
    ],
  },
  social: {
    title: "Redes",
    links: [
      { label: "LinkedIn", href: "#" },
      { label: "GitHub", href: "https://github.com/cloudarchitects" },
      { label: "YouTube", href: "#" },
    ],
  },
};
