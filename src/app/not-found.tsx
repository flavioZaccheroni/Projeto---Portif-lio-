import Link from "next/link";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] items-center py-20">
      <Container className="text-center">
        <p className="text-sm font-extrabold tracking-[0.2em] text-blue-700 uppercase">
          Erro 404
        </p>
        <h1 className="mt-3 text-4xl font-extrabold text-slate-950">
          Página não encontrada
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-lg leading-8 text-slate-600">
          O endereço pode ter mudado ou ainda não está disponível.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex min-h-12 items-center rounded-lg bg-blue-600 px-6 font-bold text-white hover:bg-blue-700"
        >
          Voltar ao início
        </Link>
      </Container>
    </main>
  );
}
