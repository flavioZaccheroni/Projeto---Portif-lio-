import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { StatusBadge } from "@/components/ui/status-badge";
import { TechnologyBadge } from "@/components/ui/technology-badge";
import { getProjectBySlug, projects } from "@/data/projects";

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
      <section className="bg-[#0f2538] py-14 text-white sm:py-20">
        <Container>
          <Link
            href="/projetos"
            className="inline-flex items-center gap-2 rounded-md text-sm font-bold text-blue-200 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300"
          >
            <ArrowLeft aria-hidden="true" className="h-4 w-4" /> Todos os
            projetos
          </Link>
          <div className="mt-10 max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              <StatusBadge status={project.status} />
              <span className="text-sm font-bold text-blue-200">
                {project.category}
              </span>
            </div>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-balance sm:text-6xl">
              {project.name}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              {project.description}
            </p>
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
            ) : (
              <p className="mt-8 inline-flex rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm font-semibold text-slate-300">
                Demonstração e repositório serão publicados após a validação da
                versão de teste.
              </p>
            )}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.4fr_0.6fr]">
          <div className="space-y-12">
            <section>
              <p className="text-sm font-bold tracking-[0.16em] text-blue-700 uppercase">
                Contexto
              </p>
              <h2 className="mt-2 text-2xl font-bold text-slate-950">
                O problema
              </h2>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
                {project.problem}
              </p>
            </section>
            <section>
              <p className="text-sm font-bold tracking-[0.16em] text-blue-700 uppercase">
                Proposta
              </p>
              <h2 className="mt-2 text-2xl font-bold text-slate-950">
                A solução
              </h2>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
                {project.solution}
              </p>
            </section>
            <ListSection title="Funcionalidades" items={project.features} />
            <ListSection title="Desafios técnicos" items={project.challenges} />
            <ListSection title="Próximos passos" items={project.nextSteps} />
          </div>
          <aside className="h-fit rounded-2xl border border-slate-200 bg-[#F4F7FB] p-6 lg:sticky lg:top-24">
            <h2 className="text-lg font-bold text-slate-950">
              Visão do projeto
            </h2>
            <dl className="mt-6 space-y-5">
              <div>
                <dt className="text-xs font-bold tracking-wider text-slate-500 uppercase">
                  Público
                </dt>
                <dd className="mt-1 leading-6 text-slate-700">
                  {project.audience}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-bold tracking-wider text-slate-500 uppercase">
                  Tecnologias
                </dt>
                <dd className="mt-3 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <TechnologyBadge key={technology}>
                      {technology}
                    </TechnologyBadge>
                  ))}
                </dd>
              </div>
            </dl>
          </aside>
        </Container>
      </section>
    </main>
  );
}

function ListSection({ title, items }: { title: string; items: string[] }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-slate-950">{title}</h2>
      <ul className="mt-5 grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-xl border border-slate-200 bg-white p-4 leading-6 text-slate-700 shadow-sm"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
