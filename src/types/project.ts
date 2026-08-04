export type ProjectStatus = "em-desenvolvimento" | "em-testes" | "concluido";

export interface Project {
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  description: string;
  problem: string;
  solution: string;
  audience: string;
  status: ProjectStatus;
  technologies: string[];
  features: string[];
  challenges: string[];
  nextSteps: string[];
  screenshots: string[];
  repositoryUrl?: string;
  demoUrl?: string;
  downloadUrl?: string;
  featured: boolean;
}
