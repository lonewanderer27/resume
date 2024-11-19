export type Config = {
  name: string;
  siteTitle: string;
  supportDarkMode: boolean;
  description: string;
  url: string;
  // themeSkin: string;
};

export type Contact = {
  email?: string;
  github?: string;
  linkedin?: string;
  phone?: string;
  gitlab?: string;
  twitter?: string;
  website?: string;
};

export type Education = {
  institute: string;
  degree: string;
  date?: string; // Optional for expected graduation date
};

export type Certificate = {
  title: string;
  link: string;
  issuer: string;
  date: string;
};

export enum SkillCategory {
  Frontend = "Frontend",
  Backend = "Backend",
  Database = "Database",
  MobileApp = "Mobile App",
  DevOps = "DevOps",
}

export type Skill = {
  category: string | SkillCategory;
  skills: string[];
};

export type Reference = {
  name: string;
  role?: string;
  company?: string;
  relationship?: string;
  email?: string;
  contactNo: string;
};

export type Experience = {
  role: string;
  roleLong?: string;
  startDate: string;
  endDate?: string; // Optional for ongoing roles
  company?: string;
  companyLong?: string;
  freelance?: boolean; // Optional for freelance roles
  companyLink?: string;
  details: string[];
  technologies: string[];
  // references?: Reference[];
};

export type Project = {
  title: string;
  link: string;
  details: string;
};

export type Publication = {
  title: string;
  link: string;
  authors: string;
  conference: string;
};

export type Volunteering = {
  startDate: string;
  endDate?: string; // Optional for ongoing roles
  role: string;
  roleLong?: string;
  company: string;
  companyLong?: string;
  details: string[];
};
