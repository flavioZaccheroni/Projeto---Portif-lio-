import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { BrandLogo } from "@/components/brand/brand-logo";
import { Container } from "@/components/ui/container";

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/flavio-h-zaccheroni-99101365",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/flavioZaccheroni",
  },
];

export function Footer() {
  return (
    <footer className="bg-[#17324D] py-12 text-white">
      <Container className="grid gap-8 sm:grid-cols-2 sm:items-end">
        <div>
          <p>
            <BrandLogo inverse className="text-xl" />
          </p>
          <p className="mt-2 max-w-md text-sm leading-6 text-blue-100">
            Logística, análise de processos e desenvolvimento de sistemas para
            problemas reais de negócio.
          </p>
          <div className="mt-4 flex gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/20 text-blue-100 transition hover:border-white/40 hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300"
              >
                <social.icon aria-hidden="true" className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div className="sm:text-right">
          <div className="flex flex-wrap gap-4 text-sm font-semibold sm:justify-end">
            <Link href="/projetos" className="hover:text-blue-200">
              Projetos
            </Link>
            <Link href="/sobre" className="hover:text-blue-200">
              Sobre
            </Link>
            <Link href="/contato" className="hover:text-blue-200">
              Contato
            </Link>
            <Link href="/termos-de-teste" className="hover:text-blue-200">
              Termos de teste
            </Link>
          </div>
          <p className="mt-4 text-xs text-blue-200">
            © {new Date().getFullYear()} Flávio H. Zaccheroni. Todos os direitos
            reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}
