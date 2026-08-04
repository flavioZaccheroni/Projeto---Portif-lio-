import Link from "next/link";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="bg-[#17324D] py-12 text-white">
      <Container className="grid gap-8 sm:grid-cols-2 sm:items-end">
        <div>
          <p className="text-xl font-extrabold">Flávio Henrique Zacaroni</p>
          <p className="mt-2 max-w-md text-sm leading-6 text-blue-100">
            Logística, análise de processos e desenvolvimento de sistemas para
            problemas reais de negócio.
          </p>
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
          </div>
          <p className="mt-4 text-xs text-blue-200">
            © {new Date().getFullYear()} Flávio Henrique. Todos os direitos
            reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}
