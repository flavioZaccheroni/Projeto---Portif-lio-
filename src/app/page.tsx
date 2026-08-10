import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Boxes, Code2, Route, TestTube2 } from "lucide-react";
import { ProjectCard } from "@/components/projects/project-card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/data/projects";

const process = [
  {
    icon: Route,
    title: "Entender",
    text: "Mapeio o processo e encontro onde a operação perde tempo ou controle.",
  },
  {
    icon: Boxes,
    title: "Organizar",
    text: "Transformo necessidades reais em módulos, dados e fluxos claros.",
  },
  {
    icon: Code2,
    title: "Desenvolver",
    text: "Construo soluções simples, tipadas e preparadas para evoluir.",
  },
  {
    icon: TestTube2,
    title: "Validar",
    text: "Testo o uso, registro aprendizados e planejo a próxima entrega.",
  },
];

export default function Home() {
  return (
    <main>
      <section
        aria-labelledby="apresentacao"
        className="overflow-hidden bg-[#06172b] text-white"
      >
        <h1 id="apresentacao" className="sr-only">
          Flávio H. Zaccheroni — Logística e Desenvolvimento de Sistemas
        </h1>
        <div className="mx-auto flex max-w-[1920px] items-center justify-center px-4 py-3 sm:px-6 sm:py-4">
          <Image
            src="/brand/identidade-flavio-zaccheroni.png"
            alt="Identidade visual de Flávio H. Zaccheroni para logística e desenvolvimento de sistemas"
            width={1920}
            height={1077}
            priority
            sizes="100vw"
            className="h-auto max-h-[calc(100svh-15rem)] w-auto max-w-full object-contain"
          />
        </div>
        <div className="border-t border-white/10 bg-[#0f2538]">
          <Container className="grid items-center gap-8 py-10 lg:grid-cols-[1fr_auto] lg:py-12">
            <p className="max-w-3xl text-lg leading-8 text-slate-300">
              Minha experiência em Logística e minha formação em Análise e
              Desenvolvimento de Sistemas orientam projetos voltados a problemas
              reais de negócio.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/projetos"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 font-bold text-white transition hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300"
              >
                Conhecer projetos{" "}
                <ArrowRight aria-hidden="true" className="h-5 w-5" />
              </Link>
              <Link
                href="/contato"
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/30 px-6 font-bold text-white transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300"
              >
                Entrar em contato
              </Link>
            </div>
          </Container>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Projetos em destaque"
            title="Sistemas pensados a partir da operação"
            description="Mais do que telas: contexto, decisão técnica, resultado demonstrável e próximos passos."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {projects
              .filter((project) => project.featured)
              .map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#F4F7FB] py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Meu processo"
            title="Da análise à evolução"
            description="Uma abordagem prática para reduzir incerteza e construir em etapas verificáveis."
          />
          <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, index) => (
              <li
                key={step.title}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <div className="flex items-center justify-between">
                  <step.icon
                    aria-hidden="true"
                    className="h-7 w-7 text-blue-600"
                  />
                  <span className="text-sm font-extrabold text-slate-300">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-8 text-lg font-bold text-slate-950">
                  {step.title}
                </h3>
                <p className="mt-2 leading-7 text-slate-600">{step.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-20">
        <Container className="rounded-3xl bg-blue-600 px-6 py-12 text-center text-white sm:px-12">
          <p className="text-sm font-bold tracking-[0.18em] text-blue-100 uppercase">
            Vamos conversar
          </p>
          <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-bold text-balance sm:text-4xl">
            Procuro oportunidades para aplicar tecnologia a desafios reais.
          </h2>
          <Link
            href="/contato"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-lg bg-white px-6 font-bold text-blue-700 transition hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Ver formas de contato
          </Link>
        </Container>
      </section>
    </main>
  );
}
