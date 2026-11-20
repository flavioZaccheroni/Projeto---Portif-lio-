import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { ProjectCard } from "@/components/projects/project-card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projetos",
  description: "Conheça os sistemas desenvolvidos por Flávio H. Zaccheroni.",
};

const githubProjects = [
  {
    name: "Nutri Clinic Pro",
    description:
      "Aplicativo desktop para atendimento nutricional, com camadas separadas de domínio, serviços, repositórios e interface, trilha de auditoria, recursos de LGPD (consentimento, portabilidade e anonimização), backup com checksum, gráficos de evolução e relatórios em PDF.",
    technologies: ["Python", "PySide6", "SQLite", "pytest", "GitHub Actions"],
    href: "https://github.com/flavioZaccheroni/Projeto---Sistema-para-nutricionistas-",
  },
  {
    name: "Conferência de Holerite",
    description:
      "PWA que confere o holerite contra o ponto eletrônico. Pode ser instalado no celular e guarda os dados somente no aparelho de quem usa.",
    technologies: ["HTML", "Service Worker", "PWA"],
    href: "https://github.com/flavioZaccheroni/conferencia-holerite",
  },
];

export default function ProjectsPage() {
  return (
    <main className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Portfólio"
          title="Projetos e estudos de caso"
          description="Projetos de portfólio para demonstração e testes. Cada um mostra o contexto, as escolhas técnicas e o estágio real da entrega."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <section className="mt-20" aria-labelledby="github-titulo">
          <h2
            id="github-titulo"
            className="text-2xl font-bold text-slate-950 dark:text-white"
          >
            Outros projetos no GitHub
          </h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-600 dark:text-slate-400">
            Projetos com código aberto, sem estudo de caso detalhado nesta
            página.
          </p>
          <ul className="mt-6 grid gap-5 md:grid-cols-2">
            {githubProjects.map((item) => (
              <li
                key={item.name}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
              >
                <h3 className="text-lg font-bold text-slate-950 dark:text-white">
                  {item.name}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {item.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 dark:text-blue-400"
                >
                  Ver repositório no GitHub
                  <ExternalLink aria-hidden="true" className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </section>
      </Container>
    </main>
  );
}
