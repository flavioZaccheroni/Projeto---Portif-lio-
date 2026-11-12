import type { ProjectStatus } from "@/types/project";

const statusConfig: Record<
  ProjectStatus,
  { label: string; className: string }
> = {
  "disponivel-para-teste": {
    label: "Disponível para teste",
    className:
      "bg-emerald-50 text-emerald-800 ring-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-300 dark:ring-emerald-500/30",
  },
  "em-desenvolvimento": {
    label: "Em desenvolvimento",
    className:
      "bg-amber-50 text-amber-800 ring-amber-200 dark:bg-amber-500/10 dark:text-amber-300 dark:ring-amber-500/30",
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
