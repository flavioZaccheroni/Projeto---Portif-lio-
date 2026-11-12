export type ProjectStatus = "disponivel-para-teste" | "em-desenvolvimento";

export interface ProjectDetail {
  title: string;
  description: string;
}

export interface ProjectScreenshot {
  src: string;
  alt: string;
  caption: string;
}

export interface DemoLogin {
  profile: string;
  user: string;
  password: string;
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
  /** GIF curto mostrando o fluxo do sistema. */
  demo?: { src: string; alt: string; caption: string };
  /** Texto mostrado quando não há link público do código. */
  codeNote?: string;
  /** Aviso adicional exibido junto ao estágio (ex.: estimativas fiscais). */
  extraNotice?: string;
  repositoryUrl?: string;
  /** Presente só em projetos disponíveis para teste. */
  test?: {
    version: string;
    downloadUrl: string;
    releaseUrl: string;
    fileName: string;
    sizeLabel: string;
    logins: DemoLogin[];
    requirements: string[];
    steps: string[];
  };
  featured: boolean;
}
