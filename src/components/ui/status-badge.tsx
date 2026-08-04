import type { ProjectStatus } from "@/types/project";

const statusConfig: Record<
  ProjectStatus,
  { label: string; className: string }
> = {
  "em-desenvolvimento": {
    label: "Em desenvolvimento",
    className: "bg-amber-50 text-amber-800 ring-amber-200",
  },
  "em-testes": {
    label: "Em testes",
    className: "bg-blue-50 text-blue-800 ring-blue-200",
  },
  concluido: {
    label: "Concluído",
    className: "bg-emerald-50 text-emerald-800 ring-emerald-200",
  },
};

export function StatusBadge({ status }: { status: ProjectStatus }) {
  const config = statusConfig[status];
  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ring-1 ring-inset ${config.className}`}
    >
      {config.label}
    </span>
  );
}
