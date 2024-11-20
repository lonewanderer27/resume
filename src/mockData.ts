import {
  type Education,
  type Certificate,
  type Skill,
  SkillCategory,
  type Experience,
  type Project,
  type Contact,
  type Volunteering,
  type Reference,
  type CareerProfile,
} from "./types";

const contactMock: Contact = {
  email: "alanturing@outlook.com",
  github: "alanturing",
  linkedin: "alan-turing",
  phone: "+1234567890",
};

const languagesMock: string[] = [];

const educationMock: Education[] = [
  {
    institute: "Example University",
    degree: "B.S. Computer Science",
  },
];

const referencesMock: Reference[] = [
  {
    name: "Reference Name",
    role: "I.T. Officer",
    contactNo: "+1234567890",
  },
];

const certificatesMock: Certificate[] = [
  {
    title: "Learn React",
    link: "https://example.com/certificate/react",
    issuer: "Example Platform",
    date: "Sep 2024",
  },
  {
    title: "JavaScript Deep Dive",
    link: "https://example.com/certificate/js",
    issuer: "Example Platform",
    date: "Nov 2022",
  },
];

const skillsMock: Skill[] = [
  {
    category: "Languages",
    skills: ["JavaScript, TypeScript", "HTML, CSS, SCSS", "Python", "PHP"],
  },
  {
    category: SkillCategory.Frontend,
    skills: ["React, NextJS", "Tailwind, Bootstrap", "Jekyll, Astro", "Svelte"],
  },
  {
    category: SkillCategory.Backend,
    skills: ["FastAPI, Flask", "WordPress", "Laravel", "Express"],
  },
  {
    category: SkillCategory.Database,
    skills: ["MySQL, PostgreSQL", "MongoDB"],
  },
  {
    category: SkillCategory.MobileApp,
    skills: ["Ionic Capacitor, Cordova", "Android Studio", "React Native"],
  },
  {
    category: SkillCategory.DevOps,
    skills: ["GNU / Linux", "Docker", "Git"],
  },
];

const careerProfileMock: CareerProfile = {
  title: "Alan Turing",
  description:
    "As a Front-End Web Developer with one year of experience, I specialize in creating responsive and interactive web and mobile applications. I am highly adaptable and can learn any required technology with minimal supervision. I am also a team player who collaborates effectively yet can also work independently, prioritizing efficiency and timeliness in my tasks.",
};

const experiencesMock: Experience[] = [
  {
    role: "Full-Stack Web Developer",
    startDate: "Nov 2022",
    endDate: "Jan 2023",
    company: "Example Company",
    companyLink: "https://example.com/",
    details: [
      "Revamped the existing website to enhance user experience and design",
      "Developed and maintained custom WordPress themes and plugins",
      "Optimized website performance and security, ensuring reliable uptime",
      "Conducted training sessions for staff on effective use of the admin dashboard",
    ],
    technologies: [
      "PHP",
      "WordPress",
      "MySQL",
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
    ],
  },
  {
    role: "Front-End Web Developer",
    startDate: "Nov 2022",
    endDate: "Feb 2023",
    freelance: true,
    details: [
      "Implemented a company dashboard for sending and receiving gift cards",
      "Integrated a payment gateway for purchasing gift cards",
      "Developed social media-like features including commenting, liking, and tagging",
    ],
    technologies: [
      "MongoDB",
      "MySQL",
      "Laravel",
      "Express",
      "React",
      "Bootstrap",
      "SASS",
    ],
  },
  {
    role: "Full-Stack Web Developer",
    startDate: "June 2022",
    endDate: "Oct 2022",
    company: "Example Company",
    companyLink: "https://example.com/",
    details: [
      "Developed an admin interface for publishing security announcements",
      "Implemented a job application form for potential applicants",
      "Built a responsive website ensuring accessibility on both mobile and desktop devices",
      "Improved the agency's visibility and click rate on Google",
      "Managed the migration from Yahoo Mail to a custom email solution",
      "Conducted training sessions for company employees on effective admin dashboard usage",
    ],
    technologies: [
      "PHP",
      "MySQL",
      "WordPress",
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
    ],
  },
];

const projectsMock: Project[] = [
  {
    title: "Coffee App",
    link: "https://example.com",
    details:
      "Coffee ordering app developed using Ionic React and Firebase. Features a unique 3D View functionality allowing customers to virtually explore the cafe using their mobile devices.",
  },
];

const volunteeringMock: Volunteering[] = [
  {
    startDate: "August 2023",
    endDate: "May 2024",
    role: "Org Leader",
    company: "Student Organization",
    details: [
      "Facilitated a Capture The Flag competition for Computer Science students",
      "Helped with technical support for the department's events.",
    ],
  },
];

export {
  contactMock,
  languagesMock,
  educationMock,
  referencesMock,
  skillsMock,
  careerProfileMock,
  certificatesMock,
  experiencesMock,
  projectsMock,
  volunteeringMock,
};
