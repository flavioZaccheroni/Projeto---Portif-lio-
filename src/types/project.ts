export type ProjectStatus = "em-desenvolvimento" | "em-testes" | "concluido";

export interface ProjectDetail {
  title: string;
  description: string;
}

export interface ProjectScreenshot {
  src: string;
  alt: string;
  caption: string;
}

export interface Project {
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  description: string;
  problem: string;
  solution: string;
  objective: string;
  audience: string;
  currentStage: string;
  status: ProjectStatus;
  technologies: string[];
  features: string[];
  challenges: string[];
  architecture: ProjectDetail[];
  decisions: ProjectDetail[];
  results: string[];
  learnings: string[];
  nextSteps: string[];
  screenshots: ProjectScreenshot[];
  evidenceNote: string;
  repositoryUrl?: string;
  demoUrl?: string;
  downloadUrl?: string;
  featured: boolean;
}
