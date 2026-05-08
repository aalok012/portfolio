/* ---- Resume types (existing) ---- */

export interface SkillCategory {
  icon: string;
  title: string;
  items: string[];
}

export interface WorkExperience {
  role: string;
  company: string;
  period: string;
  bullets: string[];
}

export interface Project {
  title: string;
  description: string;
  highlights: string[];
  stack: string[];
  github?: string;
  live?: string;
}

export interface Education {
  school: string;
  degree: string;
  minor: string;
  gpa: string;
  courses: string[];
}

export interface Contact {
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
}

export interface ResumeData {
  name: { first: string; last: string };
  title: string;
  tagline: string;
  description: string;
  contact: Contact;
  skills: SkillCategory[];
  experience: WorkExperience[];
  projects: Project[];
  education: Education;
}

/* ---- 3D Portfolio types ---- */

export type SectionId = 'hero' | 'about' | 'skills' | 'projects' | 'experience' | 'contact';

export type LucyAnimation = 'idle' | 'wave' | 'point' | 'walk' | 'sit' | 'talk';

export interface CameraTarget {
  position: [number, number, number];
  target: [number, number, number];
  fov: number;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  streaming?: boolean;
}

export interface SectionConfig {
  id: SectionId;
  label: string;
  camera: CameraTarget;
  lucyAnimation: LucyAnimation;
  speech: string;
}
