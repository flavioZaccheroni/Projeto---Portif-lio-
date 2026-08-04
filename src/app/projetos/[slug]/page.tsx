import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  ImageIcon,
  Layers3,
  Lightbulb,
  ShieldCheck,
  Target,
} from "lucide-react";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { StatusBadge } from "@/components/ui/status-badge";
import { TechnologyBadge } from "@/components/ui/technology-badge";
import { getProjectBySlug, projects } from "@/data/projects";
import type { ProjectDetail } from "@/types/project";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return { title: project.name, description: project.shortDescription };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const actions = [
    project.demoUrl
      ? { href: project.demoUrl, label: "Abrir demonstração" }
      : null,
    project.repositoryUrl
      ? { href: project.repositoryUrl, label: "Ver repositório" }
      : null,
    project.downloadUrl
      ? { href: project.downloadUrl, label: "Baixar versão de teste" }
      : null,
  ].filter((action): action is { href: string; label: string } =>
    Boolean(action),
  );

  return (
    <main>
      <section className="relative overflow-hidden bg-[#0f2538] py-14 text-white sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(37,99,235,0.32),transparent_34%)]" />
        <Container className="relative">
          <Link
            href="/projetos"
            className="inline-flex items-center gap-2 rounded-md text-sm font-bold text-blue-200 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300"
          >
            <ArrowLeft aria-hidden="true" className="h-4 w-4" /> Todos os
            projetos
          </Link>
          <div className="mt-10 grid items-end gap-10 lg:grid-cols-[1fr_22rem]">
            <div className="max-w-4xl">
              <div className="flex flex-wrap items-center gap-3">
                <StatusBadge status={project.status} />
                <span className="text-sm font-bold text-blue-200">
                  {project.category}
                </span>
                <span className="text-sm text-slate-400">
                  Estudo de caso {String(currentIndex + 1).padStart(2, "0")}/
                  {String(projects.length).padStart(2, "0")}
                </span>
              </div>
              <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-balance sm:text-6xl">
                {project.name}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                {project.description}
              </p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur">
              <p className="text-xs font-bold tracking-[0.16em] text-blue-200 uppercase">
                Estágio atual
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                {project.currentStage}
              </p>
            </div>
          </div>
          {actions.length ? (
            <div className="mt-8 flex flex-wrap gap-3">
              {actions.map((action) => (
                <a
                  key={action.href}
                  href={action.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-blue-600 px-5 font-bold hover:bg-blue-500"
                >
                  {action.label}
                  <ExternalLink aria-hidden="true" className="h-4 w-4" />
                </a>
              ))}
            </div>
          ) : null}
        </Container>
      </section>

      <section className="border-b border-slate-200 bg-[#F4F7FB] py-8">
        <Container>
          <dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr]">
            <div>
              <dt className="text-xs font-bold tracking-wider text-slate-500 uppercase">
                Público
              </dt>
              <dd className="mt-2 leading-6 font-semibold text-slate-800">
                {project.audience}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-bold tracking-wider text-slate-500 uppercase">
                Tecnologias
              </dt>
              <dd className="mt-2 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <TechnologyBadge key={technology}>
                    {technology}
                  </TechnologyBadge>
                ))}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-bold tracking-wider text-slate-500 uppercase">
                Materiais públicos
              </dt>
              <dd className="mt-2 text-sm leading-6 text-slate-700">
                {actions.length
                  ? "Links disponíveis no início da página."
                  : "Em preparação para uma versão segura de demonstração."}
              </dd>
            </div>
          </dl>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <NarrativeBlock
              icon={Target}
              eyebrow="Contexto"
              title="O problema observado"
              text={project.problem}
            />
            <NarrativeBlock
              icon={CheckCircle2}
              eyebrow="Objetivo"
              title="O resultado buscado"
              text={project.objective}
            />
          </div>

          <div className="mt-16 rounded-3xl bg-[#17324D] p-7 text-white sm:p-10">
            <p className="text-sm font-bold tracking-[0.16em] text-blue-300 uppercase">
              Solução proposta
            </p>
            <p className="mt-4 max-w-4xl text-2xl leading-10 font-bold text-balance sm:text-3xl">
              {project.solution}
            </p>
          </div>

          <CaseSection
            eyebrow="Arquitetura"
            title="Como a solução foi organizada"
            description="A estrutura separa responsabilidades para permitir evolução sem concentrar toda a lógica na interface."
          >
            <div className="grid gap-4 lg:grid-cols-3">
              {project.architecture.map((item, index) => (
                <article
                  key={item.title}
                  className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <span className="text-sm font-extrabold text-blue-600">
                    0{index + 1}
                  </span>
                  <h3 className="mt-8 text-xl font-bold text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    {item.description}
                  </p>
                  {index < project.architecture.length - 1 ? (
                    <ArrowRight
                      aria-hidden="true"
                      className="absolute top-1/2 -right-3 z-10 hidden h-6 w-6 rounded-full bg-blue-600 p-1 text-white lg:block"
                    />
                  ) : null}
                </article>
              ))}
            </div>
          </CaseSection>

          <CaseSection
            eyebrow="Entregas atuais"
            title="O que já pode ser apresentado"
            description="Os resultados abaixo respeitam o estágio real do projeto e não representam funcionalidades futuras como concluídas."
          >
            <ul className="grid gap-3 sm:grid-cols-2">
              {project.results.map((result) => (
                <li
                  key={result}
                  className="flex gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 leading-6 font-semibold text-emerald-950"
                >
                  <CheckCircle2
                    aria-hidden="true"
                    className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700"
                  />
                  {result}
                </li>
              ))}
            </ul>
          </CaseSection>

          <CaseSection
            eyebrow="Evidências visuais"
            title="Telas e demonstrações"
            description="As imagens desta seção precisam mostrar o sistema real com dados seguros para publicação."
          >
            {project.screenshots.length ? (
              <div className="grid gap-6 md:grid-cols-2">
                {project.screenshots.map((screenshot) => (
                  <figure
                    key={screenshot.src}
                    className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                  >
                    <Image
                      src={screenshot.src}
                      alt={screenshot.alt}
                      width={1440}
                      height={900}
                      className="h-auto w-full"
                    />
                    <figcaption className="border-t border-slate-200 p-4 text-sm leading-6 text-slate-600">
                      {screenshot.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-blue-300 bg-blue-50 p-7 sm:p-10">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white">
                    <ImageIcon aria-hidden="true" className="h-7 w-7" />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-slate-950">
                      Capturas reais em preparação
                    </h3>
                    <p className="mt-2 max-w-3xl leading-7 text-slate-700">
                      {project.evidenceNote}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </CaseSection>

          <div className="mt-20 grid gap-8 lg:grid-cols-2">
            <DetailPanel
              icon={Layers3}
              title="Decisões de projeto"
              items={project.decisions}
            />
            <BulletPanel
              icon={ShieldCheck}
              title="Desafios técnicos"
              items={project.challenges}
            />
            <BulletPanel
              icon={Lightbulb}
              title="Aprendizados"
              items={project.learnings}
            />
            <div className="rounded-2xl bg-[#F4F7FB] p-7 sm:p-8">
              <h2 className="text-2xl font-bold text-slate-950">
                Próximos passos
              </h2>
              <ol className="mt-6 space-y-5">
                {project.nextSteps.map((step, index) => (
                  <li key={step} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-extrabold text-white">
                      {index + 1}
                    </span>
                    <span className="pt-1 leading-6 font-semibold text-slate-700">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-slate-200 bg-[#F4F7FB] py-14">
        <Container className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold tracking-[0.16em] text-blue-700 uppercase">
              Próximo estudo de caso
            </p>
            <h2 className="mt-2 max-w-2xl text-2xl font-bold text-slate-950 sm:text-3xl">
              {nextProject.name}
            </h2>
          </div>
          <Link
            href={`/projetos/${nextProject.slug}`}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 font-bold text-white hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
          >
            Continuar explorando
            <ArrowRight aria-hidden="true" className="h-5 w-5" />
          </Link>
        </Container>
      </section>
    </main>
  );
}

function NarrativeBlock({
  icon: Icon,
  eyebrow,
  title,
  text,
}: {
  icon: typeof Target;
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <article>
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
        <Icon aria-hidden="true" className="h-5 w-5" />
      </span>
      <p className="mt-6 text-sm font-bold tracking-[0.16em] text-blue-700 uppercase">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-2xl font-bold text-slate-950">{title}</h2>
      <p className="mt-4 text-lg leading-8 text-slate-600">{text}</p>
    </article>
  );
}

function CaseSection({
  eyebrow,
  title,
  description,
  children,
}: React.PropsWithChildren<{
  eyebrow: string;
  title: string;
  description: string;
}>) {
  return (
    <section className="mt-20">
      <p className="text-sm font-bold tracking-[0.16em] text-blue-700 uppercase">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
        {title}
      </h2>
      <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
        {description}
      </p>
      <div className="mt-8">{children}</div>
    </section>
  );
}

function DetailPanel({
  icon: Icon,
  title,
  items,
}: {
  icon: typeof Layers3;
  title: string;
  items: ProjectDetail[];
}) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
      <Icon aria-hidden="true" className="h-7 w-7 text-blue-600" />
      <h2 className="mt-6 text-2xl font-bold text-slate-950">{title}</h2>
      <div className="mt-6 space-y-6">
        {items.map((item) => (
          <article key={item.title}>
            <h3 className="font-bold text-slate-900">{item.title}</h3>
            <p className="mt-2 leading-7 text-slate-600">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function BulletPanel({
  icon: Icon,
  title,
  items,
}: {
  icon: typeof ShieldCheck;
  title: string;
  items: string[];
}) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
      <Icon aria-hidden="true" className="h-7 w-7 text-blue-600" />
      <h2 className="mt-6 text-2xl font-bold text-slate-950">{title}</h2>
      <ul className="mt-6 space-y-4">
        {items.map((item) => (
          <li key={item} className="flex gap-3 leading-7 text-slate-600">
            <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
