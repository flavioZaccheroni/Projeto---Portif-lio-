import type { Metadata } from "next";
import { BriefcaseBusiness, GraduationCap, Workflow } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Conheça a trajetória profissional de Flávio H. Zaccheroni.",
};

const story = [
  {
    icon: BriefcaseBusiness,
    title: "Experiência em Logística",
    text: "A vivência operacional trouxe atenção a prazos, estoque, fluxo de informação e impacto de pequenas falhas na rotina de um negócio.",
  },
  {
    icon: GraduationCap,
    title: "Transição para tecnologia",
    text: "A formação em Análise e Desenvolvimento de Sistemas adicionou ferramentas para modelar dados, automatizar tarefas e construir produtos digitais.",
  },
  {
    icon: Workflow,
    title: "Combinação prática",
    text: "Hoje aplico as duas perspectivas: começo entendendo o processo e desenvolvo a solução em etapas que possam ser testadas e evoluídas.",
  },
];

export default function AboutPage() {
  return (
    <main className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Sobre mim"
          title="Da operação para o desenvolvimento"
          description="Minha trajetória une conhecimento de processos e construção de software com propósito prático."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {story.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <item.icon aria-hidden="true" className="h-8 w-8 text-blue-600" />
              <h2 className="mt-8 text-xl font-bold text-slate-950">
                {item.title}
              </h2>
              <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
        <section className="mt-16 rounded-3xl bg-[#F4F7FB] p-7 sm:p-10">
          <h2 className="text-2xl font-bold text-slate-950">
            O que procuro construir
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            Sistemas claros, seguros e úteis — principalmente em contextos onde
            organizar informação pode reduzir retrabalho, apoiar decisões e
            melhorar a experiência de quem executa o processo todos os dias.
          </p>
        </section>
      </Container>
    </main>
  );
}
