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
  email: "ian.james.puzon@gmail.com",
  github: "lonewanderer27",
  linkedin: "jay-puzon",
  phone: "09924471033",
};

const languages: string[] = [];

const education: Education[] = [
  {
    institute: "Adamson University",
    degree: "B.S. Computer Science",
  },
];

const references: Reference[] = [
  // {
  //   name: "Eboy Samonte",
  //   role: "I.T. Officer",
  //   contactNo: "0916997158",
  // },
];

const certificates: Certificate[] = [
  {
    title: "Flutter & Dart",
    link: "https://raw.githubusercontent.com/lonewanderer27/resume/master/cert-udemy-flutter-adriane-james-puzon.pdf",
    issuer: "Udemy",
    date: "Mar 2025",
  },
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
  }
];

const skills: Skill[] = [
  {
    category: SkillCategory.MobileApp,
    skills: ["Flutter, React Native", "Ionic, Capacitor, Cordova", "Android Studio"],
  },
  {
    category: SkillCategory.DevOps,
    skills: ["Bash, Powershell", "GNU / Linux", "Docker", "Git"],
  },
  {
    category: SkillCategory.Frontend,
    skills: ["React, NextJS", "Tailwind, Bootstrap", "Jekyll, Astro", "Svelte"],
  },
  {
    category: SkillCategory.Backend,
    skills: ["WordPress, Laravel", ".NET, .NET Core", "FastAPI, Flask", "Express"],
  },
  {
    category: "Languages",
    skills: ["Dart, JavaScript, TypeScript", "HTML, CSS, SCSS", "PHP, Java, Kotlin", "Python, C#",],
  },
  {
    category: SkillCategory.Database,
    skills: ["PostgreSQL, MySQL", "MongoDB"],
  },
];

const careerProfile: CareerProfile = {
  title: "Ian James Puzon",
  description:
    "As a Full-Stack Web Developer with one year of experience, I specialize in creating responsive and interactive web and mobile applications. I am highly adaptable and can learn any required technology with minimal supervision. I am also a team player who collaborates effectively yet can also work independently, prioritizing efficiency and timeliness in my tasks.",
};

const experiences: Experience[] = [
  {
    role: "Software Engineer I",
    startDate: "Feb 2025",
    endDate: "May 2025",
    company: "Stratpoint Global Outsourcing Inc.",
    companyLink: "https://stratpoint.com",
    details: [
      "Collaborated with senior developers in porting a production internal workspace booking app from native to Flutter, contributing over 300 feature commits, and 180 bug fixes.",
      "Completed an intensive 8-week Flutter bootcamp, learning industry practices in cross-platform mobile development and building 7 mini-projects.",
      "Presented a final project—a Netflix app clone—to HR and project heads to demonstrate skills acquired during the program."
    ],
    technologies: [
      "Flutter",
      "Clean Architecture",
      "Domain-Driven Design",
    ]
  },
  {
    role: "Front-End Web Developer",
    startDate: "Nov 2022",
    endDate: "Feb 2023",
    freelance: true,
    details: [
      "Implemented a company dashboard for sending and receiving gift cards.",
      "Integrated a AWS Payment Gateway for purchasing gift cards.",
      "Developed social media features including commenting, liking, and tagging.",
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
    endDate: "January 2023",
    company: "ABC-RMO Security & Investigation Agency Inc. (ARSIA)",
    companyLink: "https://abcrmosecurity.com/",
    details: [
      "Developed a responsive admin interface for publishing security announcements, streamline internal communication.",
      "Implemented a job application form to simplify security personnel recruitment.",
      "Led the agency’s first digital presence strategy, improving search visibility and increasing site traffic.",
      "Spearheaded email system integration, replacing Yahoo Mail with a more robust custom email solution.",
      "Conducted comprehensive training sessions for approximately 70 employees on using the admin dashboard and email system effectively.",
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
    company: "Adamson University Computer Science Society",
    companyLong: "Adamson University Computer Science Society",
    details: [
      "Provided technical support for org events, including managing event presentations, recording, live streaming, and assisting with registration and manpower coordination.",
      "Led the technical setup for a Capture The Flag (CTF) competition, including configuring a Docker instance and hosting it on a local server with ngrok for external access of users.",
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
