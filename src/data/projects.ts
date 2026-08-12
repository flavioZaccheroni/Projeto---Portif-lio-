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
      "Uma aplicação desktop dividida em módulos, com persistência local e fluxos conectados entre ordem de serviço, estoque e visão gerencial.",
    objective:
      "Centralizar a rotina da empresa e reduzir retrabalho, mantendo o histórico de clientes, produtos e serviços em uma única base.",
    audience:
      "Autopeças, oficinas e pequenos prestadores de serviços automotivos.",
    currentStage:
      "Os fluxos centrais já podem ser demonstrados. A próxima etapa é preparar uma distribuição segura com dados fictícios.",
    status: "em-desenvolvimento",
    technologies: ["Python", "Tkinter", "SQLAlchemy", "SQLite"],
    features: [
      "Cadastro e histórico de clientes",
      "Controle de produtos e estoque",
      "Ordens de serviço com baixa automática",
      "Dashboard operacional e financeiro",
    ],
    architecture: [
      {
        title: "Interface desktop",
        description:
          "Telas em Tkinter organizadas por área operacional e conectadas aos serviços da aplicação.",
      },
      {
        title: "Regras de negócio",
        description:
          "Fluxos de clientes, produtos e ordens de serviço mantidos fora da camada visual.",
      },
      {
        title: "Persistência local",
        description:
          "SQLAlchemy centraliza o acesso ao SQLite e prepara a evolução do modelo de dados.",
      },
    ],
    decisions: [
      {
        title: "Aplicação desktop primeiro",
        description:
          "A operação precisa funcionar localmente e com baixa dependência de infraestrutura externa.",
      },
      {
        title: "Dados relacionais",
        description:
          "Clientes, produtos, itens e ordens exigem consistência e relacionamentos explícitos.",
      },
    ],
    results: [
      "CRUD de clientes disponível para demonstração",
      "Ordem de serviço conectada aos itens utilizados",
      "Baixa automática de estoque no fluxo da OS",
      "Dashboard com visão resumida da operação",
    ],
    challenges: [
      "Sincronizar itens das ordens de serviço com o estoque",
      "Evoluir o esquema do banco sem comprometer dados existentes",
      "Manter telas e regras de negócio desacopladas",
    ],
    learnings: [
      "Regras críticas precisam estar protegidas da lógica das telas.",
      "Alterações no banco exigem planejamento mesmo em aplicações locais.",
      "Dados de demonstração devem ser separados dos dados usados no desenvolvimento.",
    ],
    nextSteps: [
      "Adicionar fornecedores e compras",
      "Criar relatórios, autenticação e permissões",
      "Gerar pacote demonstrativo com dados fictícios",
    ],
    screenshots: [
      {
        src: "/projects/erp-crm-autopecas/01-login.png",
        alt: "Tela de acesso do ERP/CRM para autopeças e serviços",
        caption: "Acesso inicial ao ambiente de gestão.",
      },
      {
        src: "/projects/erp-crm-autopecas/02-dashboard.png",
        alt: "Dashboard operacional do ERP/CRM",
        caption: "Visão geral dos principais indicadores da operação.",
      },
      {
        src: "/projects/erp-crm-autopecas/03-produtos.png",
        alt: "Tela de cadastro e consulta de produtos",
        caption: "Gestão do catálogo de produtos e peças.",
      },
      {
        src: "/projects/erp-crm-autopecas/04-estoque.png",
        alt: "Tela de controle de estoque do ERP/CRM",
        caption: "Acompanhamento das quantidades e movimentações de estoque.",
      },
      {
        src: "/projects/erp-crm-autopecas/05-vendas.png",
        alt: "Tela de vendas do ERP/CRM",
        caption: "Registro e acompanhamento das vendas realizadas.",
      },
      {
        src: "/projects/erp-crm-autopecas/06-ordem-de-servico.png",
        alt: "Tela de ordem de serviço do ERP/CRM",
        caption: "Organização dos serviços, itens utilizados e valores.",
      },
      {
        src: "/projects/erp-crm-autopecas/07-relatorios.png",
        alt: "Tela de relatórios gerenciais do ERP/CRM",
        caption: "Relatórios para apoiar o acompanhamento da empresa.",
      },
    ],
    evidenceNote:
      "As capturas reais do dashboard, clientes e ordem de serviço serão adicionadas depois da anonimização dos dados.",
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
    objective:
      "Oferecer ao profissional uma visão contínua da evolução do paciente, reduzindo a fragmentação de informações entre consultas.",
    audience: "Nutricionistas autônomos e pequenas clínicas.",
    currentStage:
      "O domínio, os principais módulos e a arquitetura foram definidos. As rotinas clínicas seguem em desenvolvimento e validação.",
    status: "em-desenvolvimento",
    technologies: ["Flutter", "Dart", "Supabase", "PostgreSQL"],
    features: [
      "Cadastro e histórico de pacientes",
      "Avaliações antropométricas",
      "Planos alimentares",
      "Acompanhamento de evolução",
    ],
    architecture: [
      {
        title: "Aplicação Flutter",
        description:
          "Uma base de interface compartilhada para evoluir a experiência em diferentes dispositivos.",
      },
      {
        title: "Serviços de domínio",
        description:
          "Regras de avaliações, acompanhamento e planos separadas dos componentes visuais.",
      },
      {
        title: "Supabase",
        description:
          "PostgreSQL, autenticação e políticas de acesso planejados como infraestrutura do produto.",
      },
    ],
    decisions: [
      {
        title: "Multiplataforma",
        description:
          "Flutter reduz duplicação e permite testar a experiência em mais de um formato de tela.",
      },
      {
        title: "Privacidade desde o modelo",
        description:
          "Informações clínicas exigem autenticação, separação por profissional e políticas de acesso restritivas.",
      },
    ],
    results: [
      "Escopo dos módulos clínicos organizado",
      "Fluxo de acompanhamento do paciente definido",
      "Modelo inicial de avaliações e planos estruturado",
      "Diretrizes de privacidade incorporadas à arquitetura",
    ],
    challenges: [
      "Modelar dados clínicos com clareza",
      "Criar uma interface eficiente em telas diferentes",
      "Proteger informações sensíveis",
    ],
    learnings: [
      "O histórico precisa ser fácil de consultar durante a rotina profissional.",
      "Dados clínicos não devem ser usados em demonstrações públicas.",
      "O modelo de permissões precisa nascer junto com o modelo de dados.",
    ],
    nextSteps: [
      "Implementar autenticação por perfis",
      "Concluir relatórios de evolução",
      "Preparar versão de testes com pacientes fictícios",
    ],
    screenshots: [
      {
        src: "/projects/sistema-nutricionistas/01-login.png",
        alt: "Tela de acesso do Nutri Clinic Pro",
        caption: "Entrada segura no ambiente de acompanhamento nutricional.",
      },
      {
        src: "/projects/sistema-nutricionistas/02-dashboard.png",
        alt: "Dashboard do Nutri Clinic Pro",
        caption: "Resumo da rotina clínica e dos acompanhamentos.",
      },
      {
        src: "/projects/sistema-nutricionistas/03-pacientes.png",
        alt: "Tela de pacientes do Nutri Clinic Pro",
        caption: "Cadastro e consulta dos pacientes acompanhados.",
      },
      {
        src: "/projects/sistema-nutricionistas/04-agenda.png",
        alt: "Agenda de atendimentos do Nutri Clinic Pro",
        caption: "Organização das consultas e dos compromissos clínicos.",
      },
      {
        src: "/projects/sistema-nutricionistas/05-antropometria.png",
        alt: "Tela de avaliação antropométrica do Nutri Clinic Pro",
        caption:
          "Registro das medidas utilizadas no acompanhamento da evolução.",
      },
      {
        src: "/projects/sistema-nutricionistas/06-plano-alimentar.png",
        alt: "Tela de plano alimentar do Nutri Clinic Pro",
        caption: "Montagem e organização do planejamento alimentar.",
      },
      {
        src: "/projects/sistema-nutricionistas/07-protocolos-clinicos.png",
        alt: "Tela de protocolos clínicos do Nutri Clinic Pro",
        caption: "Consulta e aplicação dos protocolos de acompanhamento.",
      },
    ],
    evidenceNote:
      "As telas serão publicadas somente com perfis e avaliações inteiramente fictícios.",
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
    objective:
      "Dar visibilidade ao que entrou, ao que precisa ser entregue e às pendências que exigem ação durante o dia.",
    audience: "Pequenos comércios e operações locais de distribuição.",
    currentStage:
      "O fluxo acadêmico está em testes com cenários operacionais. Os indicadores e a versão web ainda serão evoluídos.",
    status: "em-testes",
    technologies: ["JavaScript", "TypeScript", "SQL", "UX"],
    features: [
      "Controle de entradas e saídas",
      "Acompanhamento de entregas",
      "Visão de pendências",
      "Indicadores operacionais",
    ],
    architecture: [
      {
        title: "Registro operacional",
        description:
          "Entradas, saídas e entregas formam a base de dados do acompanhamento diário.",
      },
      {
        title: "Camada de serviço",
        description:
          "Regras de status e prioridade transformam registros em informações acionáveis.",
      },
      {
        title: "Visão gerencial",
        description:
          "Painéis resumem pendências e ajudam a identificar riscos de prazo.",
      },
    ],
    decisions: [
      {
        title: "Fluxos curtos",
        description:
          "A ferramenta precisa funcionar durante a operação, sem exigir preenchimentos extensos.",
      },
      {
        title: "Indicadores acionáveis",
        description:
          "A prioridade é mostrar pendências e prazos, não acumular gráficos sem decisão associada.",
      },
    ],
    results: [
      "Processo de entradas e saídas mapeado",
      "Estados de entrega e pendência definidos",
      "Cenários acadêmicos preparados para testes",
      "Indicadores prioritários identificados",
    ],
    challenges: [
      "Traduzir processos reais em fluxos simples",
      "Priorizar informação sem sobrecarregar a tela",
      "Manter o registro rápido durante a rotina operacional",
    ],
    learnings: [
      "Um indicador só é útil quando orienta uma ação.",
      "A experiência operacional ajuda a identificar exceções antes da implementação.",
      "Pequenos negócios precisam de adoção simples e baixo custo de operação.",
    ],
    nextSteps: [
      "Ampliar testes com cenários reais anonimizados",
      "Implementar indicadores de prazo",
      "Preparar uma versão web demonstrável",
    ],
    screenshots: [],
    evidenceNote:
      "Os exemplos visuais serão produzidos com uma operação fictícia, sem dados comerciais reais.",
    featured: true,
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
