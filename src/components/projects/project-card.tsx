import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { StatusBadge } from "@/components/ui/status-badge";
import { TechnologyBadge } from "@/components/ui/technology-badge";
import type { Project } from "@/types/project";

export function ProjectCard({ project }: { project: Project }) {
  const coverImage = project.screenshots[1] ?? project.screenshots[0];

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative flex min-h-48 items-end overflow-hidden bg-gradient-to-br from-[#17324D] via-[#1d4f7a] to-blue-600 p-6 text-white">
        {coverImage ? (
          <Image
            src={coverImage.src}
            alt={coverImage.alt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <>
            <div className="absolute -top-10 -right-8 h-36 w-36 rounded-full border border-white/20" />
            <div className="absolute -top-4 -right-2 h-20 w-20 rounded-full bg-white/10" />
          </>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f2538]/95 via-[#0f2538]/20 to-transparent" />
        <p className="relative text-sm font-bold tracking-[0.16em] text-blue-100 uppercase">
          {project.category}
        </p>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4">
          <StatusBadge status={project.status} />
        </div>
        <h3 className="text-xl font-bold tracking-tight text-slate-950">
          {project.name}
        </h3>
        <p className="mt-3 flex-1 leading-7 text-slate-600">
          {project.shortDescription}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((technology) => (
            <TechnologyBadge key={technology}>{technology}</TechnologyBadge>
          ))}
        </div>
        <Link
          href={`/projetos/${project.slug}`}
          className="mt-6 inline-flex w-fit items-center gap-2 rounded-md font-bold text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
        >
          Ver estudo de caso{" "}
          <ArrowUpRight
            aria-hidden="true"
            className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      </div>
    </article>
  );
}
