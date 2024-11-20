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

const contact: Contact = {
  email: "adrianejames27@gmail.com",
  github: "lonewanderer27",
  linkedin: "jay-puzon",
  phone: "+639983082814",
};

const languages: string[] = [];

const education: Education[] = [
  {
    institute: "Adamson University",
    degree: "B.S. Computer Science",
  },
];

const references: Reference[] = [
  {
    name: "Eboy Samonte",
    role: "IT Officer",
    contactNo: "0916997158",
  },
];

const certificates: Certificate[] = [
  {
    title: "Learn React",
    link: "https://v2.scrimba.com/certificate-cert2CsEjr6BTPCjR2r6GqCgcfc4y5MpTb6twi",
    issuer: "Scrimba",
    date: "Sep 2024",
  },
  {
    title: "JavaScript Deep Dive",
    link: "https://scrimba.com/certificate/u2Nz6eAV/gjavascript",
    issuer: "Scrimba",
    date: "Nov 2022",
  },
];

const skills: Skill[] = [
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

const careerProfile: CareerProfile = {
  title: "Ian James Puzon",
  description:
    "As a Front-End Web Developer with one year of experience, I specialize in creating responsive and interactive web and mobile applications. I am highly adaptable and can learn any required technology with minimal supervision. I am also a team player who collaborates effectively yet can also work independently, prioritizing efficiency and timeliness in my tasks.",
};

const experiences: Experience[] = [
  {
    role: "Full-Stack Web Developer",
    startDate: "Nov 2022",
    endDate: "Jan 2023",
    company: "OMP Security",
    companyLink: "https://ompsecurity.com/",
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
      "Developed social media like features including commenting, liking, and tagging",
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
    company: "ARSIA Inc.",
    companyLong: "ABC-RMO Security and Investigation Agency Inc.",
    companyLink: "https://abcrmosecurity.com/",
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

const projects: Project[] = [
  {
    title: "The Coffee Lounge",
    link: "https://coffee-lounge.vercel.app",
    details:
      "Coffee ordering app developed using Ionic React and Firebase. Features a unique 3D View functionality allowing customers to virtually explore the cafe using their mobile devices.",
  },
  // {
  //   title: "JAMMA",
  //   link: "https://jamma-shop.vercel.app",
  //   details:
  //     "A comprehensive shop platform designed for Multimedia Arts students, developed using React and powered by Supabase.",
  // },
];

const volunteering: Volunteering[] = [
  // {
  //   startDate: "August 2024",
  //   endDate: "Present",
  //   role: "SBD Web & Mobile Development Mentor",
  //   company: "AWS Cloud Clubs - Adamson University",
  //   details: [
  //     "Mentored students in web and mobile development",
  //     "Assisted in the development of the club's website",
  //     "Conducted workshops on React, NextJS, and React Native",
  //   ],
  // },
  {
    startDate: "August 2022",
    endDate: "May 2024",
    role: "Research Director",
    company: "ACOMSS",
    companyLong: "Adamson University Computer Science Society",
    details: [
      "Led the technical setup for a Capture The Flag (CTF) competition, including configuring Docker and hosting it on a local server with ngrok for external access of participants.",
      "Provided technical support for ACOMSS events, including managing event presentations, recording, live streaming, and assisting with registration and manpower coordination."
    ],
  },
];

export {
  contact,
  languages,
  education,
  references,
  skills,
  careerProfile,
  certificates,
  experiences,
  projects,
  volunteering,
};
