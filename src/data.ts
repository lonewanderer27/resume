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
  phone: "(+63) 9629387161",
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
    title: "Claude Code Workshop: AI-Assisted Development",
    link: "",
    issuer: "Stratpoint Technologies",
    date: "Mar 2026",
  },
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
];

const skills: Skill[] = [
  {
    category: SkillCategory.MobileApp,
    skills: ["Flutter", "Android Studio, XCode"],
  },
  {
    category: SkillCategory.Frontend,
    skills: ["React, Next.JS", "Tailwind, Bootstrap", "Lightning Web Component"],
  },
  {
    category: SkillCategory.Backend,
    skills: ["Node.JS, Deno", "Rest APIs, RPC", "Apex Programming"],
  },
  {
    category: SkillCategory.Database,
    skills: ["PostgreSQL, MySQL", "MongoDB", "SOQL"],
  },
  {
    category: SkillCategory.DevOps,
    skills: ["Docker, Git, CI/CD", "Fastlane, Firebase App Distribution", "TestFlight, App Store Connect"],
  },
  {
    category: "Other",
    skills: ["Python, GNU/Linux", "Clean Architecture, Domain-Driven Design", "Claude Code, Salesforce"],
  },
];

const careerProfile: CareerProfile = {
  title: "Ian James Puzon"
  // description:
  //   "Full Stack Software Engineer experienced in delivering production-grade systems across mobile and web. Demonstrated ability to own features end-to-end from system design, implementation, to deployment and production support. Proven impact in leading platform migrations, improving system performance, and building scalable solutions with a focus on reliability and long-term maintainability.",
};

const experiences: Experience[] = [
  {
    role: "Salesforce Developer",
    startDate: "June 2026",
    endDate: "Present",
    company: "Scape Australia",
    details: [
      "Owned Inspection Manager's PDF report generation module, delivering multi-photo layouts, session timeout handling, and case status synchronization.",
      "Resolved cross-functional, business-critical production defects (payment handler failures, lease termination, template availability), minimizing disruption for Operations and Finance.",
      "Supported compliance-critical e-learning and safety features (bunk bed safety onboarding, gender-based violence), ensuring accurate learner assessment tracking.",
    ],
    technologies: [
      "Apex Programming",
      "Lightning Web Component",
      "SOQL",
      "Salesforce Administration",
      "FormTitan",
      "Jira",
    ],
  },
  {
    role: "Full Stack Engineer",
    startDate: "Feb 2025",
    endDate: "June 2026",
    company: "Stratpoint Technologies",
    companyLink: "https://stratpoint.com",
    details: [
      "Led migration of web admin platform from Next.JS 13 to 16, and improved backend performance by archiving 70,000 records, cutting load times up to 60%.",
      "Launched a Flutter-based seat reservation system and led Group/Event Management systems (mobile + backend), replacing manual workflows.",
      "Led ERD and system design discussions, and conducted code reviews across mobile, backend, and web.",
      "Led QA across 500+ test cases, and introduced dependency-based sprint planning, improving sprint throughput ~25%.",
    ],
    technologies: [
      "Flutter",
      "Next.JS",
      "React",
      "Deno",
      "TypeScript",
      "Supabase",
      "Firebase",
      "PostgreSQL",
      "Clean Architecture",
      "Domain-Driven Design (DDD)",
      "CI/CD",
      "Docker",
      "Git",
      "Agile/Scrum",
    ],
  },
  {
    role: "AI Engineer",
    startDate: "Sep 2025",
    endDate: "Dec 2025",
    company: "Upwork",
    freelance: true,
    details: [
      "Designed an AI-powered chatbot enabling farmers to upload banana crop images for real-time disease detection and treatment recommendations, combining computer vision (EfficientNet) with an LLM-powered RAG system.",
      "Architected a microservices REST API for ML inference and LLM services, containerized with Docker Compose for reproducible deployments.",
    ],
    technologies: [
      "FastAPI",
      "React",
      "Vite",
      "TypeScript",
      "Tailwind",
      "TensorFlow/Keras",
      "EfficientNet",
      "LangChain",
      "Ollama",
      "ChromaDB",
      "RAG",
      "Vector Embeddings",
      "Docker",
      "REST APIs",
      "Python",
    ],
  },
  {
    role: "Full Stack Developer",
    startDate: "June 2022",
    endDate: "January 2023",
    company: "OMP Security Inc, ARSIA Inc.",
    companyLink: "https://abcrmosecurity.com/",
    details: [
      "Led end-to-end development of the company's first digital platform as project lead, managing a team of 2 developers and reporting directly to the CEO.",
      "Built an admin dashboard for security announcements and a job application system; led email system migration and trained ~70 employees on the new tools.",
    ],
    technologies: [
      "PHP",
      "MySQL",
      "WordPress",
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "Advanced Custom Fields",
      "Contact Form 7",
      "FileBird Lite",
      "Members",
      "LiteSpeed Cache",
      "SEOPress",
    ],
  },
];

const projects: Project[] = [
  // {
  //   title: "The Coffee Lounge",
  //   link: "https://coffee-lounge.vercel.app",
  //   details:
  //     "Coffee ordering app developed using Ionic React and Firebase. Features a unique 3D View functionality allowing customers to virtually explore the cafe using their mobile devices.",
  // },
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
  // {
  //   startDate: "August 2022",
  //   endDate: "May 2024",
  //   role: "Research Director",
  //   company: "Adamson University Computer Science Society",
  //   companyLong: "Adamson University Computer Science Society",
  //   details: [
  //     "Provided technical support for org events, including managing event presentations, recording, live streaming, and assisting with registration and manpower coordination.",
  //     "Led the technical setup for a Capture The Flag (CTF) competition, including configuring a Docker instance and hosting it on a local server with ngrok for external access of users.",
  //   ],
  // },
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
