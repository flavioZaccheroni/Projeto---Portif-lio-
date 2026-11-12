import Link from "next/link";
import { FlaskConical } from "lucide-react";
import { TEST_PERIOD_DAYS } from "@/data/projects";

/** Faixa fixa das páginas de projeto: deixa claro que tudo é só para avaliação. */
export function TestNotice() {
  return (
    <div
      role="note"
      className="border-b border-amber-200 bg-amber-50 text-amber-950 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-100"
    >
      <div className="mx-auto flex w-full max-w-7xl items-start gap-3 px-5 py-3 text-sm leading-6 sm:px-8">
        <FlaskConical
          aria-hidden="true"
          className="mt-0.5 h-5 w-5 shrink-0 text-amber-700 dark:text-amber-300"
        />
        <p>
          <strong>Projetos de portfólio, apenas para demonstração e testes.</strong>{" "}
          As versões disponíveis para download valem por {TEST_PERIOD_DAYS} dias
          de avaliação, sem uso comercial.{" "}
          <Link
            href="/termos-de-teste"
            className="font-bold underline underline-offset-2 hover:no-underline"
          >
            Ver termos de teste
          </Link>
        </p>
      </div>
    </div>
  );
}
