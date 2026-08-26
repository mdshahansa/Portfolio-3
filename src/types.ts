export interface SkillItem {
  id: string;
  name: string;
  category: 'languages' | 'web' | 'database' | 'tools';
  level: string; // e.g. "Proficient", "Intermediate", "Hands-on"
  percent: number;
  description: string;
  iconName: string;
  featured?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  keyFeatures: string[];
  githubUrl: string;
  liveDemoUrl: string;
  category: string;
  featured?: boolean;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  status: string;
  description: string;
  coursework: string[];
  achievements?: string[];
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialUrl?: string;
  description: string;
  skills: string[];
  isPlaceholder?: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export interface StudentProfile {
  name: string;
  role: string;
  course: string;
  university: string;
  location: string;
  bio: string;
  email: string;
  linkedin: string;
  github: string;
  status: string;
}
