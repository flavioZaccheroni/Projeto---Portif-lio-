import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { CONTACT_EMAIL, TEST_PERIOD_DAYS } from "@/data/projects";

export const metadata: Metadata = {
  title: "Termos de teste",
  description:
    "Regras de uso das versões de demonstração disponibilizadas neste portfólio.",
};

const terms = [
  {
    title: "O que são",
    text: "Os projetos disponíveis neste site são demonstrações de portfólio de Flávio H. Zaccheroni. Servem apenas para avaliação e teste.",
  },
  {
    title: "Prazo",
    text: `Você pode usar a versão baixada por até ${TEST_PERIOD_DAYS} dias a partir do download. Depois desse período, remova o programa. Se tiver interesse em continuar usando ou em uma solução sob medida, entre em contato.`,
  },
  {
    title: "Uso permitido",
    text: "Testar, explorar e avaliar o funcionamento, usando os dados de demonstração.",
  },
  {
    title: "Não é permitido",
    text: "Usar em produção ou no dia a dia de um negócio; inserir dados reais de clientes, fornecedores ou financeiros; fazer uso comercial; redistribuir o programa.",
  },
  {
    title: "Sem garantia nem suporte",
    text: 'O programa é fornecido "como está", sem garantia de funcionamento, de adequação a um fim específico ou suporte. O autor não responde por perdas decorrentes do uso.',
  },
  {
    title: "Executável não assinado",
    text: "O Windows pode exibir alertas ou bloquear o programa, porque ele ainda não possui assinatura digital. Baixe apenas por este site ou pelo GitHub oficial do autor.",
  },
  {
    title: "Dados",
    text: "As bases de demonstração são fictícias. O programa guarda os dados no seu computador; o autor não recebe nenhuma informação sobre o seu uso.",
  },
];

export default function TermsPage() {
  return (
    <main className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Termos de teste"
          title="Termos de teste dos projetos de portfólio"
          description={`Todas as versões para download valem por ${TEST_PERIOD_DAYS} dias de avaliação, sem dados reais e sem uso comercial.`}
        />
        <ol className="mt-12 max-w-3xl space-y-8">
          {terms.map((term, index) => (
            <li key={term.title} className="flex gap-4">
              <span
                aria-hidden="true"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-extrabold text-white"
              >
                {index + 1}
              </span>
              <div>
                <h2 className="text-xl font-bold text-slate-950 dark:text-white">
                  {term.title}
                </h2>
                <p className="mt-2 text-lg leading-8 text-slate-600 dark:text-slate-400">
                  {term.text}
                </p>
              </div>
            </li>
          ))}
          <li className="flex gap-4">
            <span
              aria-hidden="true"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-extrabold text-white"
            >
              {terms.length + 1}
            </span>
            <div>
              <h2 className="text-xl font-bold text-slate-950 dark:text-white">
                Contato
              </h2>
              <p className="mt-2 text-lg leading-8 text-slate-600 dark:text-slate-400">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="font-bold text-blue-700 underline underline-offset-2 dark:text-blue-400"
                >
                  {CONTACT_EMAIL}
                </a>
              </p>
            </div>
          </li>
        </ol>
        <p className="mt-12 max-w-3xl rounded-xl border border-slate-200 bg-[#F4F7FB] p-4 text-sm leading-6 text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">
          Estes termos são um modelo simples de uso para demonstração e não
          constituem aconselhamento jurídico.
        </p>
      </Container>
    </main>
  );
}
