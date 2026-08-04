import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: {
    default: "Flávio H. Zaccheroni | Desenvolvedor de Sistemas",
    template: "%s | Flávio H. Zaccheroni",
  },
  description:
    "Portfólio de sistemas para logística, autopeças, nutrição e automação.",
  keywords: [
    "desenvolvimento de sistemas",
    "logística",
    "Next.js",
    "Python",
    "Flutter",
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
        url: "/brand/identidade-flavio-zaccheroni.png",
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
    images: ["/brand/identidade-flavio-zaccheroni.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <a
          href="#conteudo"
          className="sr-only z-[100] rounded-md bg-white px-4 py-3 font-bold text-blue-700 focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
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
