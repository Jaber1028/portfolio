export type ProjectCategory = 'All' | 'Web' | 'Mobile' | 'Systems' | 'Misc';

export interface Project {
  /** Project title */
  title: string;
  /** Project category */
  category: ProjectCategory;
  /** List of technologies used */
  tech: string[];
  /** Project description */
  description: string;
  /** List of project achievements/features */
  achievements: string[];
  /** Project timeline */
  period: string;
  /** Optional GitHub repository name */
  githubRepo?: string;
  /** Optional custom GitHub URL */
  githubUrl?: string;
  /** Optional project image */
  image?: string;
} 