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
pnpm preview
```

`pnpm build` gera o site estático em `out/`. `pnpm preview` sobe um servidor local só para conferir esse resultado exportado antes de publicar (é o mesmo tipo de arquivo estático que vai para a Hostinger).

## Estrutura

- `src/app`: páginas, layout, SEO, sitemap e robots
- `src/components`: componentes de layout, projetos e interface
- `src/data/projects.ts`: fonte única do catálogo
- `src/types/project.ts`: contrato tipado de cada projeto
- `public/images/projects`: capturas de tela futuras
- `public/documents`: currículo e outros documentos públicos futuros
- `public/.htaccess`: configuração do Apache (HTTPS, cache e página 404) usada na Hostinger

## Conteúdo pendente antes da publicação

1. Confirmar e-mail profissional, LinkedIn e GitHub.
2. Adicionar currículo em PDF.
3. Inserir capturas de tela com dados fictícios e textos alternativos.
4. Publicar URLs oficiais de repositório, demonstração e download.
5. Definir `NEXT_PUBLIC_SITE_URL` com o domínio de produção.

Não publique bancos, arquivos `.env`, chaves, tokens, credenciais ou dados reais de clientes.

## Deploy na Hostinger

Este projeto é 100% estático (sem API, sem banco, sem login), então ele é exportado como HTML/CSS/JS puro com `next build` e publicado como um site estático — funciona em qualquer plano de hospedagem da Hostinger, sem precisar do plano com Node.js.

### 1. Configurar a URL de produção

Antes de gerar o build final, crie um arquivo `.env.production.local` na raiz do projeto (`portfolio-flavio/`) com o domínio real:

```
NEXT_PUBLIC_SITE_URL=https://seudominio.com.br
```

Esse valor é usado no sitemap, no robots.txt e nas metatags de Open Graph. Sem ele, essas páginas apontam para `localhost`.

### 2. Gerar o build estático

```powershell
pnpm install
pnpm build
```

O resultado fica na pasta `out/`. É exatamente essa pasta (o conteúdo dela, não a pasta em si) que vai para a Hostinger.

### 3. Publicar no hPanel da Hostinger

1. Acesse o **hPanel** da Hostinger e entre em **Sites → Gerenciar → Gerenciador de Arquivos**.
2. Abra a pasta `public_html` do domínio (ou subpasta, se for um subdomínio).
3. Apague o conteúdo padrão (ex.: `default.php`, `index.html` de exemplo), se houver.
4. Faça upload de **todo o conteúdo de dentro de `out/`** (não a pasta `out` em si) para dentro de `public_html`. O jeito mais rápido é compactar o conteúdo de `out/` em um `.zip` localmente, enviar esse `.zip` pelo Gerenciador de Arquivos e usar a opção "Extrair" lá dentro.
5. Confirme que o arquivo `.htaccess` (arquivo oculto) também foi enviado — ative "Mostrar arquivos ocultos" no Gerenciador de Arquivos para verificar.

Alternativa via FTP: use as credenciais de FTP do hPanel (**Contas FTP**) com um cliente como FileZilla e envie o conteúdo de `out/` para `public_html`.

### 4. Domínio e SSL

- Se o domínio já foi comprado na Hostinger, ele é apontado automaticamente para a hospedagem.
- Se o domínio é externo, aponte os nameservers da Hostinger no registrador do domínio (a Hostinger mostra os nameservers exatos no hPanel).
- Em **Sites → SSL**, ative o certificado SSL gratuito (Let's Encrypt) — pode levar alguns minutos para propagar. O `.htaccess` já força redirecionamento para HTTPS.

### 5. Sempre que o conteúdo mudar

Repita os passos 2 e 3: rode `pnpm build` de novo e reenvie o conteúdo atualizado de `out/` para `public_html`.

> Este projeto não depende de servidor Node.js em produção. Se um dia forem necessárias funcionalidades de servidor (formulário de contato com envio de e-mail, área logada, etc.), aí sim valeria migrar para um plano da Hostinger com suporte a Node.js ou outro host com esse suporte nativo.
