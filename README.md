# Portfólio profissional — Flávio H. Zaccheroni

Primeira versão do portfólio descrito no manual de desenvolvimento. O projeto apresenta a transição de Logística para Análise e Desenvolvimento de Sistemas por meio de estudos de caso.

## Ambiente

- Node.js 20.9 ou superior (desenvolvido com Node.js 22)
- pnpm 11
- Visual Studio Code com as extensões recomendadas pelo workspace

No PowerShell deste computador, prefira `pnpm`. O atalho `npm.ps1` pode ser bloqueado pela política de execução do Windows, embora `npm.cmd` continue disponível.

## Início rápido

```powershell
Copy-Item .env.example .env.local
pnpm install
pnpm dev
```

Acesse `http://localhost:3000`.

## Validação

```powershell
pnpm lint
pnpm build
pnpm start
```

## Estrutura

- `src/app`: páginas, layout, SEO, sitemap e robots
- `src/components`: componentes de layout, projetos e interface
- `src/data/projects.ts`: fonte única do catálogo
- `src/types/project.ts`: contrato tipado de cada projeto
- `public/images/projects`: capturas de tela futuras
- `public/documents`: currículo e outros documentos públicos futuros

## Conteúdo pendente antes da publicação

1. Confirmar e-mail profissional, LinkedIn e GitHub.
2. Adicionar currículo em PDF.
3. Inserir capturas de tela com dados fictícios e textos alternativos.
4. Publicar URLs oficiais de repositório, demonstração e download.
5. Definir `NEXT_PUBLIC_SITE_URL` com o domínio de produção.

Não publique bancos, arquivos `.env`, chaves, tokens, credenciais ou dados reais de clientes.
