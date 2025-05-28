export interface NavLink {
  id: string;
  title: string;
}

export interface SocialLink {
  id: string;
  icon: string;
  url: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface Experience {
  title: string;
  company: string;
  duration: string;
  description: string;
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  url: string;
}

export interface Contact {
  email: string;
  phone: string;
  location: string;
}

export interface Publication {
  title: string;
  publisher: string;
  date: string;
  url: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  url: string;
}