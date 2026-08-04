import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "erp-crm-autopecas",
    name: "ERP/CRM para Autopeças e Serviços",
    category: "Gestão empresarial",
    shortDescription:
      "Gestão integrada de clientes, estoque, serviços e financeiro.",
    description:
      "Aplicação desktop modular para organizar a operação de empresas de serviços automotivos em um único ambiente.",
    problem:
      "Informações de clientes, peças, estoque, serviços e financeiro ficam espalhadas em controles separados, dificultando decisões e aumentando o risco de erros.",
    solution:
      "Uma aplicação desktop em módulos, com persistência local e fluxos conectados entre ordem de serviço, estoque e visão gerencial.",
    audience:
      "Autopeças, oficinas e pequenos prestadores de serviços automotivos.",
    status: "em-desenvolvimento",
    technologies: ["Python", "Tkinter", "SQLAlchemy", "SQLite"],
    features: [
      "Cadastro e histórico de clientes",
      "Controle de produtos e estoque",
      "Ordens de serviço com baixa automática",
      "Dashboard operacional e financeiro",
    ],
    challenges: [
      "Sincronizar itens das ordens de serviço com o estoque",
      "Evoluir o esquema do banco sem comprometer dados existentes",
      "Manter telas e regras de negócio desacopladas",
    ],
    nextSteps: [
      "Fornecedores e compras",
      "Relatórios e permissões",
      "Pacote demonstrativo com dados fictícios",
    ],
    screenshots: [],
    featured: true,
  },
  {
    slug: "sistema-nutricionistas",
    name: "Sistema para Nutricionistas",
    category: "Saúde e acompanhamento",
    shortDescription:
      "Pacientes, avaliações e planos alimentares em uma experiência integrada.",
    description:
      "Solução multiplataforma para apoiar nutricionistas no acompanhamento organizado da evolução de seus pacientes.",
    problem:
      "Dados clínicos, avaliações e planos alimentares distribuídos em ferramentas diferentes tornam o acompanhamento lento e pouco consistente.",
    solution:
      "Centralização do histórico do paciente, avaliações e planejamento alimentar com acesso seguro em diferentes dispositivos.",
    audience: "Nutricionistas autônomos e pequenas clínicas.",
    status: "em-desenvolvimento",
    technologies: ["Flutter", "Dart", "Supabase", "PostgreSQL"],
    features: [
      "Cadastro e histórico de pacientes",
      "Avaliações antropométricas",
      "Planos alimentares",
      "Acompanhamento de evolução",
    ],
    challenges: [
      "Modelar dados clínicos com clareza",
      "Criar uma interface eficiente em telas diferentes",
      "Proteger informações sensíveis",
    ],
    nextSteps: [
      "Autenticação por perfis",
      "Relatórios de evolução",
      "Versão de testes",
    ],
    screenshots: [],
    featured: true,
  },
  {
    slug: "logistica-pequenos-negocios",
    name: "Logística para Pequenos Negócios",
    category: "Logística e operações",
    shortDescription:
      "Apoio ao controle de entregas, estoque e rotina operacional local.",
    description:
      "Projeto que transforma experiência prática em logística em uma ferramenta simples para acompanhar operações de pequenos negócios.",
    problem:
      "Operações locais costumam depender de anotações e planilhas desconectadas, reduzindo a visibilidade de estoque e entregas.",
    solution:
      "Um fluxo direto para registrar movimentações, acompanhar entregas e visualizar prioridades da operação.",
    audience: "Pequenos comércios e operações locais de distribuição.",
    status: "em-testes",
    technologies: ["JavaScript", "TypeScript", "SQL", "UX"],
    features: [
      "Controle de entradas e saídas",
      "Acompanhamento de entregas",
      "Visão de pendências",
      "Indicadores operacionais",
    ],
    challenges: [
      "Traduzir processos reais em fluxos simples",
      "Priorizar informação sem sobrecarregar a tela",
    ],
    nextSteps: [
      "Testes com cenários reais",
      "Indicadores de prazo",
      "Versão web demonstrável",
    ],
    screenshots: [],
    featured: true,
  },
  {
    slug: "agente-ia-programacao",
    name: "Agente de IA para Programação",
    category: "Inteligência artificial",
    shortDescription:
      "Assistente de código para Python e JavaScript com interface de conversa.",
    description:
      "Experimento aplicado de IA para apoiar análise, explicação e melhoria de código em um fluxo conversacional.",
    problem:
      "Buscar contexto em várias fontes interrompe o desenvolvimento e dificulta transformar uma dúvida em uma ação concreta no código.",
    solution:
      "Uma interface de chat que organiza contexto, instruções e respostas técnicas orientadas a tarefas de programação.",
    audience:
      "Estudantes e desenvolvedores que trabalham com Python e JavaScript.",
    status: "em-desenvolvimento",
    technologies: ["Python", "APIs de IA", "JavaScript", "Prompt engineering"],
    features: [
      "Conversa contextual",
      "Explicação de código",
      "Sugestões de melhoria",
      "Suporte a múltiplas linguagens",
    ],
    challenges: [
      "Controlar contexto e custo das requisições",
      "Apresentar limitações com transparência",
      "Evitar exposição de chaves e dados privados",
    ],
    nextSteps: [
      "Histórico local",
      "Avaliação de respostas",
      "Demonstração com limites de uso",
    ],
    screenshots: [],
    featured: true,
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
