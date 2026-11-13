import type { Project } from "@/types/project";

export const TEST_PERIOD_DAYS = 30;
export const CONTACT_EMAIL = "contato@flaviozaccheroni.com.br";

const erpImages = "/projects/erp-crm-autopecas";

export const projects: Project[] = [
  {
    slug: "erp-crm-autopecas",
    name: "ERP/CRM para Autopeças e Serviços",
    category: "Gestão empresarial",
    shortDescription:
      "Sistema desktop de gestão para autopeças e oficinas, do cadastro ao financeiro.",
    description:
      "Aplicativo Windows que reúne cadastros, estoque, compras, vendas com orçamento, ordens de serviço, financeiro e relatórios em um só lugar, com controle de acesso por perfil, auditoria e backup.",
    problem:
      "Em autopeças e oficinas, clientes, peças, estoque, serviços e contas ficam em planilhas e cadernos separados. Falta rastreio do que entrou e saiu, e qualquer pessoa vê tudo.",
    solution:
      "Um único sistema em que os módulos conversam: a compra entra no estoque e gera a conta a pagar; a venda baixa o estoque e gera a conta a receber; a ordem de serviço baixa as peças e lança o financeiro. Cada perfil só enxerga e faz o que lhe cabe.",
    objective:
      "Centralizar a rotina da empresa e reduzir retrabalho e erro, com um histórico confiável de clientes, produtos, serviços e valores.",
    audience:
      "Autopeças, oficinas e pequenos prestadores de serviços automotivos.",
    currentStage:
      "Versão 3.0 concluída e testada, pronta para avaliação com dados de demonstração. Próximos passos: assinatura digital do executável e instalador.",
    status: "disponivel-para-teste",
    technologies: [
      "Python",
      "PySide6 (Qt)",
      "SQLAlchemy",
      "SQLite",
      "Alembic",
      "PyInstaller",
      "pytest",
      "GitHub Actions",
    ],
    features: [
      "Cadastros de clientes, veículos, fornecedores, categorias, marcas e produtos, com validação de CPF/CNPJ, placa, UF e telefone",
      "Estoque com histórico de movimentações e alerta de estoque mínimo",
      "Compras com entrada no estoque e conta a pagar parcelável; cancelamento com estorno",
      "Vendas: orçamento, aprovação e venda, com desconto e acréscimo (limite por perfil), parcelamento, forma de pagamento e PDF de orçamento e comprovante",
      "Ordens de serviço com peças, catálogo de serviços e mecânico responsável, finalização com baixa e financeiro, impressão em PDF com logo da empresa",
      "Financeiro: contas a pagar e a receber, baixa, estorno e caixa",
      "Relatórios em PDF e Excel",
      "Dashboard com indicadores e gráficos; tema claro e escuro; paleta de comandos (Ctrl+K)",
      "Segurança: perfis e permissões, troca de senha obrigatória, bloqueio por tentativas, auditoria, backup automático (com cópia em outra pasta) e restauração validados",
    ],
    challenges: [
      "Manter estoque e financeiro consistentes quando uma venda, compra ou OS é criada, alterada ou cancelada.",
      "Aplicar permissões e auditoria em toda escrita, sem depender da tela.",
      "Trocar toda a interface (Tkinter para PySide6) sem mexer nas regras de negócio.",
      "Empacotar um executável Windows que realmente abre: o v2.0.0 teve esse problema e o v2.0.1 passou a ter autoteste no CI.",
    ],
    architecture: [
      {
        title: "Interface",
        description:
          "PySide6 com tema claro e escuro, componentes reutilizáveis, formulários por especificação e páginas por módulo. Não contém regra de negócio.",
      },
      {
        title: "Controllers e serviços",
        description:
          "Controllers aplicam permissão, auditoria e transação; serviços guardam as regras de estoque, financeiro, vendas, OS e compras.",
      },
      {
        title: "Dados",
        description:
          "Repositórios sobre SQLAlchemy e SQLite, com migrações versionadas pelo Alembic e valores monetários em Decimal.",
      },
    ],
    decisions: [
      {
        title: "Interface separada das regras",
        description:
          "Como a interface não tem regra de negócio, foi possível trocar o Tkinter pelo PySide6 sem alterar as camadas de baixo.",
      },
      {
        title: "Migrações sem perda de dados",
        description:
          "Bancos de versões antigas são atualizados automaticamente pelo Alembic ao abrir o sistema.",
      },
      {
        title: "Segurança no controller",
        description:
          "Permissões e auditoria ficam em decorators dos controllers, valendo para qualquer interface; senhas usam PBKDF2.",
      },
      {
        title: "Executável validado no CI",
        description:
          "O build roda no GitHub Actions e o .exe é aberto em um autoteste (banco via Alembic e Qt iniciando) antes de ser publicado.",
      },
    ],
    results: [
      "136 testes automatizados, lint com ruff e CI no GitHub Actions",
      "6 releases publicados, de v2.0.0 a v3.2.0",
      "Interface totalmente nova em PySide6, com tema claro e escuro",
      "Pacote Windows com base de demonstração fictícia incluída",
    ],
    learnings: [
      "Testar o executável empacotado, e não só o código.",
      "Separar a interface das regras compensa quando é hora de redesenhar.",
      "Testes de interface precisam cuidar do ciclo de vida dos widgets Qt.",
    ],
    nextSteps: [
      "Assinatura de código do executável",
      "Instalador para Windows e licença com período de teste",
      "Uso em rede com vários usuários",
    ],
    screenshots: [
      {
        src: `${erpImages}/01-login.png`,
        alt: "Tela de login do ERP com painel de apresentação",
        caption: "Login com apresentação do sistema.",
      },
      {
        src: `${erpImages}/02-dashboard.png`,
        alt: "Dashboard do ERP com indicadores, gráfico de faturamento e alertas",
        caption: "Dashboard com faturamento, ordens em aberto, saldo e alertas.",
      },
      {
        src: `${erpImages}/03-dashboard-escuro.png`,
        alt: "Dashboard do ERP no tema escuro",
        caption: "O mesmo dashboard no tema escuro.",
      },
      {
        src: `${erpImages}/04-clientes.png`,
        alt: "Listagem de clientes com busca e exportação",
        caption: "Cadastros com busca que ignora acentos, ordenação e exportação CSV.",
      },
      {
        src: `${erpImages}/05-produtos.png`,
        alt: "Cadastro de produto com painel lateral de edição",
        caption: "Cadastro de produtos com painel lateral e validação de campos.",
      },
      {
        src: `${erpImages}/06-estoque.png`,
        alt: "Controle de estoque com saldo e movimentações",
        caption: "Saldo, movimentações e alerta de estoque mínimo.",
      },
      {
        src: `${erpImages}/07-compras.png`,
        alt: "Tela de compras com itens e etapas",
        caption: "Compras com recebimento, entrada no estoque e conta a pagar.",
      },
      {
        src: `${erpImages}/08-vendas.png`,
        alt: "Tela de vendas com orçamento, itens e etapas",
        caption: "Do orçamento à venda finalizada, com itens e etapas.",
      },
      {
        src: `${erpImages}/09-ordem-de-servico.png`,
        alt: "Ordem de serviço com peças, mão de obra e status",
        caption: "Ordens de serviço com peças, mão de obra e acompanhamento de status.",
      },
      {
        src: `${erpImages}/10-financeiro.png`,
        alt: "Financeiro com contas a pagar e a receber e caixa",
        caption: "Contas a pagar e a receber, baixa, estorno e caixa.",
      },
      {
        src: `${erpImages}/11-seguranca-backup.png`,
        alt: "Tela de segurança com backup e restauração",
        caption: "Backup e restauração validados, com auditoria.",
      },
      {
        src: `${erpImages}/12-permissoes.png`,
        alt: "Matriz de permissões por perfil e módulo",
        caption: "Permissões por perfil e módulo (ver, criar, editar, excluir).",
      },
    ],
    demo: {
      src: "/videos/erp-demonstracao.gif",
      alt: "Demonstração animada do ERP: login, dashboard, cadastros, estoque, vendas, ordem de serviço, financeiro, backup e tema escuro",
      caption:
        "Passeio de cerca de 20 segundos: login, dashboard, cadastros, estoque, vendas, ordem de serviço, financeiro, backup e tema escuro.",
    },
    evidenceNote:
      "Todas as imagens usam a base de demonstração, com dados 100% fictícios.",
    repositoryUrl:
      "https://github.com/flavioZaccheroni/Projeto-CRM---Autopecas-e-Servicos",
    test: {
      version: "3.2.0",
      downloadUrl:
        "https://github.com/flavioZaccheroni/Projeto-CRM---Autopecas-e-Servicos/releases/download/v3.2.0/ERP_Autopecas_3.2.0_windows.zip",
      releaseUrl:
        "https://github.com/flavioZaccheroni/Projeto-CRM---Autopecas-e-Servicos/releases/tag/v3.2.0",
      fileName: "ERP_Autopecas_3.2.0_windows.zip",
      sizeLabel: "cerca de 49 MB",
      logins: [
        { profile: "Administrador", user: "admin", password: "Demo@1234" },
        {
          profile: "Vendedor (perfil restrito)",
          user: "vendedor",
          password: "Demo@1234",
        },
      ],
      requirements: [
        "Windows 10 ou 11",
        "Sem instalação: basta extrair a pasta",
      ],
      steps: [
        "Baixe o arquivo e extraia a pasta ERP_Autopecas.",
        "Abra ERP_Autopecas.exe.",
        "Entre com um dos acessos de demonstração.",
      ],
    },
    featured: true,
  },
  {
    slug: "kit-saas-brasil",
    name: "Kit SaaS em Português",
    category: "Produto de software",
    shortDescription:
      "Base para lançar um SaaS no Brasil: login, painel, cobrança com Pix e LGPD.",
    description:
      "Projeto base em Next.js que reúne o que quase todo SaaS brasileiro precisa antes do primeiro cliente: autenticação, painel, cobrança recorrente com Pix e cartão, páginas e fluxos de LGPD, e-mail e deploy, com guia em português.",
    problem:
      "Quem lança um SaaS para o Brasil gasta semanas refazendo o mesmo trabalho: login e papéis, cobrança em Pix (com avisos repetidos e fora de ordem), LGPD e deploy.",
    solution:
      "Um projeto base organizado e documentado, com a cobrança brasileira e a LGPD já resolvidas, para o desenvolvedor focar no que é único do produto dele.",
    objective:
      "Reduzir de semanas para dias o caminho entre a ideia e o primeiro cliente pagante de um SaaS no mercado brasileiro.",
    audience:
      "Desenvolvedores e freelancers que vão lançar um SaaS para o mercado brasileiro.",
    currentStage:
      "Em desenvolvimento, com documentação em 8 guias e fase de validação. Sem versão para download.",
    status: "em-desenvolvimento",
    technologies: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "Supabase",
      "Tailwind",
      "Asaas",
    ],
    features: [
      "Login, cadastro e recuperação de senha, com papéis",
      "Esquema de banco de dados e migrações",
      "Assinatura recorrente com Pix e cartão (Asaas), com webhooks idempotentes",
      "Modelos de LGPD: consentimento, exportação de dados e exclusão de conta",
      "Painel com tema claro e escuro",
      "E-mails transacionais",
      "Landing page em português",
      "Guia de deploy (Vercel e Supabase)",
    ],
    challenges: [
      "Cobrança recorrente em Pix: status que chegam fora de ordem e avisos repetidos.",
      "Autorização feita na aplicação, com o banco como segunda camada de segurança.",
      "Manter o código simples de ler e de adaptar.",
    ],
    architecture: [
      {
        title: "Aplicação",
        description:
          "Next.js (App Router) e TypeScript, com rotas públicas, área autenticada e rotas de API para webhooks.",
      },
      {
        title: "Dados e autenticação",
        description:
          "Prisma sobre Postgres e Supabase Auth, com políticas de segurança do banco como camada extra.",
      },
      {
        title: "Cobrança e e-mail",
        description:
          "Integração com o Asaas para Pix e cartão e envio de e-mails transacionais pelo Resend.",
      },
    ],
    decisions: [
      {
        title: "Webhooks idempotentes",
        description:
          "O mesmo aviso de pagamento nunca é processado duas vezes, e a assinatura do aviso é validada.",
      },
      {
        title: "Textos legais como modelos",
        description:
          "Política de privacidade e termos acompanham o projeto como modelos para revisão jurídica, não como aconselhamento.",
      },
      {
        title: "Dependências fixadas",
        description:
          "As versões são fixas para que o projeto continue reproduzível ao longo do tempo.",
      },
    ],
    results: [
      "Guia em português com 8 partes, do primeiro passo ao deploy",
      "Testes automatizados de exemplo",
      "Estrutura pronta para cobrança, LGPD e e-mail",
    ],
    learnings: [
      "A cobrança em Pix tem armadilhas que só aparecem com avisos repetidos e fora de ordem.",
      "Documentar em português reduz a barreira para quem está começando.",
    ],
    nextSteps: [
      "Concluir a validação com testadores",
      "Revisar a documentação a partir do retorno",
      "Preparar o lançamento",
    ],
    screenshots: [],
    evidenceNote:
      "Capturas do painel e da página inicial serão adicionadas quando houver uma versão pronta para mostrar.",
    codeNote:
      "O código ainda não é público. Se quiser conhecer o projeto, entre em contato.",
    featured: true,
  },
  {
    slug: "app-do-caminhoneiro",
    name: "App do Caminhoneiro (Frete + MEI)",
    category: "Aplicativo móvel",
    shortDescription:
      "App Android que mostra ao caminhoneiro autônomo quanto sobrou de cada viagem e avisa quando o MEI precisa de atenção.",
    description:
      "Aplicativo para o caminhoneiro autônomo registrar viagens e despesas, ver o lucro por viagem e por quilômetro, simular se um frete compensa e acompanhar o faturamento do MEI, funcionando mesmo sem internet.",
    problem:
      "O motorista autônomo costuma saber quanto recebeu, mas não quanto sobrou depois de diesel, pedágio e manutenção, e corre o risco de estourar o limite do MEI sem perceber.",
    solution:
      "Lançamento de gastos em poucos toques, resultado calculado por viagem, simulador de frete contra o custo por km do motorista e alertas de limite do MEI e de vencimentos.",
    objective:
      "Dar ao caminhoneiro autônomo clareza sobre o resultado de cada viagem e sobre a situação do MEI, mesmo sem sinal de internet.",
    audience: "Caminhoneiros autônomos, principalmente MEI.",
    currentStage:
      "Fase inicial (fundação): estrutura do aplicativo e esquema do banco local prontos. Telas e fluxos ainda em construção. Sem versão para teste.",
    extraNotice:
      "As informações do app são estimativas e não substituem um contador.",
    status: "em-desenvolvimento",
    technologies: ["Expo (React Native)", "TypeScript", "SQLite", "Supabase"],
    features: [
      "Viagens e despesas (diesel, pedágio, alimentação, manutenção), com foto opcional do comprovante",
      "Resultado da viagem e lucro por quilômetro",
      "Simulador de frete",
      "Painel do mês",
      "MEI: faturamento acumulado, percentual do limite e lembretes de DAS e declaração",
      "Histórico e relatórios",
      "Funcionamento offline, com sincronização quando houver internet",
    ],
    challenges: [
      "Funcionar offline e sincronizar depois, sem perder lançamentos.",
      "Dinheiro em centavos e lucro sempre calculado, nunca gravado.",
      "Regras do MEI configuráveis e vindas de fonte oficial.",
      "Privacidade: nenhum dado de localização é coletado.",
    ],
    architecture: [
      {
        title: "Aplicativo",
        description:
          "Expo (React Native) com TypeScript, pensado primeiro para Android.",
      },
      {
        title: "Banco no celular",
        description:
          "SQLite como fonte de leitura e escrita da interface, para funcionar sem internet.",
      },
      {
        title: "Servidor",
        description:
          "Supabase (autenticação, Postgres e arquivos) com segurança por linha: cada usuário só acessa os próprios dados.",
      },
    ],
    decisions: [
      {
        title: "Offline primeiro",
        description:
          "Toda leitura e escrita da interface é no SQLite do aparelho; a sincronização acontece depois.",
      },
      {
        title: "Ids e exclusão lógica",
        description:
          "Identificadores gerados no celular e exclusão lógica, para sincronizar sem conflitos.",
      },
      {
        title: "Escopo enxuto",
        description:
          "O MVP deixa de fora, de propósito, busca de fretes, GPS, integração bancária e versão para iOS.",
      },
    ],
    results: [
      "Escopo do MVP, modelo de dados e etapas definidos",
      "Projeto Expo configurado, com o esquema do banco local",
    ],
    learnings: [
      "Definir o que fica fora do MVP é tão importante quanto o que entra.",
      "Regras fiscais precisam vir de fonte oficial e ficar configuráveis.",
    ],
    nextSteps: [
      "Login e gravação offline",
      "Viagem e despesas",
      "Resultado e painel do mês",
      "Módulo MEI",
      "Sincronização e teste com motoristas",
    ],
    screenshots: [],
    evidenceNote:
      "Ainda não há telas para mostrar: o aplicativo está na fase de fundação.",
    codeNote:
      "O código ainda não é público. Se quiser conhecer o projeto, entre em contato.",
    featured: true,
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
