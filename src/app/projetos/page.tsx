import type { Metadata } from "next";
import { ProjectCard } from "@/components/projects/project-card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projetos",
  description: "Conheça os sistemas desenvolvidos por Flávio H. Zaccheroni.",
};

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
      </Container>
    </main>
  );
}
