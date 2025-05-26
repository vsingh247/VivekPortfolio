export interface Education {
  degree: string;
  institution: string;
  location: string;
  year: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  description?: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'technical' | 'soft' | 'language';
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  link?: string;
}

export interface Language {
  name: string;
  level: string;
  proficiency: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}