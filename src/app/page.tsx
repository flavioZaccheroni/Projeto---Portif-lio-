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
      <section className="relative overflow-hidden bg-[#0f2538] py-20 text-white sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(37,99,235,0.35),transparent_35%)]" />
        <Container className="relative grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="mb-5 text-sm font-bold tracking-[0.2em] text-blue-300 uppercase">
              Logística + desenvolvimento de sistemas
            </p>
            <h1 className="max-w-4xl text-4xl leading-tight font-extrabold tracking-tight text-balance sm:text-6xl">
              Transformo processos operacionais em soluções digitais
              organizadas.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              Minha experiência em Logística e minha formação em Análise e
              Desenvolvimento de Sistemas orientam projetos voltados a problemas
              reais de negócio.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
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
          </div>
          <div className="rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur sm:p-8">
            <p className="text-sm font-bold tracking-[0.16em] text-blue-300 uppercase">
              Em construção
            </p>
            <p className="mt-3 text-3xl font-extrabold">4 soluções</p>
            <p className="mt-2 leading-7 text-slate-300">
              Autopeças, nutrição, logística e inteligência artificial — cada
              projeto apresentado como resposta a um problema.
            </p>
            <dl className="mt-7 grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
              <div>
                <dt className="text-xs tracking-wider text-slate-400 uppercase">
                  Base
                </dt>
                <dd className="mt-1 font-bold">Três Lagoas, MS</dd>
              </div>
              <div>
                <dt className="text-xs tracking-wider text-slate-400 uppercase">
                  Foco
                </dt>
                <dd className="mt-1 font-bold">Sistemas de negócio</dd>
              </div>
            </dl>
          </div>
        </Container>
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
