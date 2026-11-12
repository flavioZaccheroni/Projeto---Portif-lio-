import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var dark = stored
      ? stored === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (dark) document.documentElement.classList.add("dark");
  } catch (e) {}
})();
`;

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: {
    default: "Flávio H. Zaccheroni | Desenvolvedor de Sistemas",
    template: "%s | Flávio H. Zaccheroni",
  },
  description:
    "Portfólio de sistemas de Flávio H. Zaccheroni: ERP para autopeças, kit para SaaS e aplicativo para caminhoneiros. Projetos para demonstração e testes.",
  keywords: [
    "desenvolvimento de sistemas",
    "logística",
    "ERP",
    "Next.js",
    "Python",
    "Três Lagoas",
  ],
  openGraph: {
    title: "Flávio H. Zaccheroni | Desenvolvedor de Sistemas",
    description:
      "Soluções digitais para processos operacionais e problemas reais de negócio.",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/brand/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Flávio H. Zaccheroni — Logística e Desenvolvimento de Sistemas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flávio H. Zaccheroni | Desenvolvedor de Sistemas",
    description:
      "Soluções digitais para processos operacionais e problemas reais de negócio.",
    images: ["/brand/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`h-full antialiased ${manrope.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="flex min-h-full flex-col bg-white text-slate-950 dark:bg-slate-950 dark:text-slate-100">
        <a
          href="#conteudo"
          className="sr-only z-[100] rounded-md bg-white px-4 py-3 font-bold text-blue-700 focus:not-sr-only focus:fixed focus:top-4 focus:left-4 dark:bg-slate-900 dark:text-blue-400"
        >
          Pular para o conteúdo
        </a>
        <Header />
        <div id="conteudo" className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
