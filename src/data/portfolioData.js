// ============================================================================
// PERSONAL DATA CONFIG
// This is the ONLY file you should need to edit to make this portfolio yours.
// Every section (Hero, About, Skills, Projects, Experience,
// Certifications, Contact, Footer) reads from the objects below.
//
// Anything in [BRACKETS] is a placeholder — replace it with your real
// information. Do not leave brackets in the live site.
// ============================================================================

export const personalInfo = {
  name: "Prathiksha R",
  title: "Aspiring Full-Stack Web Developer",
  tagline:
    "A 3rd-year engineering student building web applications from front to back, with a growing interest in AI/ML. I enjoy turning practical, real-world problems into working software and continuously strengthening my core computer science fundamentals.",
  availability: "Open to internship and project opportunities",
  email: "rprathiksha6@gmail.com",
  phone: "", // optional — leave blank to hide
  location: "Mangaluru, Karnataka, India", // e.g. "Mangaluru, Karnataka, India"
  github: "https://github.com/rprathiksha6", // e.g. "https://github.com/rprathiksha6"
  linkedin: "https://www.linkedin.com/in/prathiksha-r-800363326/", // e.g. "https://www.linkedin.com/in/prathiksha-r-800363326?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
};

// Shown in the About section's small stats row. Leave a stat out of the
// array entirely if you don't have a real number for it yet — do not
// invent figures.
export const highlights = [
  { label: "Hackathon award", value: "3rd Runner-Up" },
  { label: "PBL awards", value: "2" },
  { label: "Currently learning", value: "DSA & DBMS" },
];

export const about = {
  bio: "I'm a 3rd-year engineering student at St Joseph Engineering College, learning full-stack web development alongside data structures, algorithms, and databases. I enjoy building projects that solve real, everyday problems — from public-service tools to AI-driven ideas — and I'm currently focused on strengthening my core CS fundamentals while getting comfortable across the stack.",
  education: "St Joseph Engineering College — 3rd Year",
  currentlyLearning: "Data Structures & Algorithms, DBMS, and full-stack development",
  goals:
    "Building a strong foundation across the stack — from front-end interfaces to back-end logic and databases — while deepening my understanding of data structures, algorithms, and system design through hands-on projects.",
};

// Group skills by category. Only list technologies you can genuinely speak
// to in an interview — no invented skills, and no fake percentage bars.
export const skills = [
  {
    category: "Frontend",
    items: ["HTML", "CSS", "JavaScript"],
  },
  {
    category: "Languages",
    items: ["Python (basics)", "Java (basics)"],
  },
  {
    category: "Computer Science Fundamentals",
    items: ["DBMS", "Data Structures & Algorithms"],
  },
];

// Replace with your real projects. Each project supports an optional
// case-study `details` field — omit it and the "Details" button is hidden.
export const projects = [
  {
    id: "nagarvoice",
    title: "NagarVoice — Public Complaint Management System",
    description:
      "A course-level project-based learning (PBL) system for DBMS, built to let citizens log and track public complaints. Won 2nd prize at St Joseph Engineering College's course-level PBL.",
    image: "/FUTURE_FS_01/Projects/DBMSProject.jpeg",",
    tech: ["DBMS", "SQL"],
    githubUrl: "",
    liveUrl: "",
    details: "",
  },
  {
    id: "complaint-management-dsa",
    title: "Public Complaint Management System (DSA)",
    description:
      "A data-structures-focused implementation of a public complaint management system, built for a course-level PBL in DSA. Won 3rd prize at St Joseph Engineering College's course-level PBL.",
    image: "/FUTURE_FS_01/Projects/DSAProject.jpeg",",
    tech: ["Data Structures", "Java"],
    githubUrl: "",
    liveUrl: "",
    details: "",
  },
];

// A single chronological list, newest first. `type` drives the icon shown
// on the timeline: "education" | "experience" | "certification" | "milestone".
export const timeline = [
  {
    type: "experience",
    title: "Full Stack Web Development Intern",
    org: "Future Interns",
    period: "2026",
    description:
      "Building a personal portfolio website as Task 1 of a self-directed, remote internship.",
  },
  {
    type: "milestone",
    title: "3rd Runner-Up, Gen AI Exchange Hackathon 2025",
    org: "Google Cloud, powered by Hack2Skill",
    period: "2025",
    description:
      "Competed under the \"Generative AI for Youth Wellness\" problem statement.",
  },
  {
    type: "milestone",
    title: "2nd Prize, Course-Level PBL (DBMS) in 4th Semester",
    org: "St Joseph Engineering College",
    period: "2025",
    description: "For NagarVoice — a public complaint management system.",
  },
  {
    type: "milestone",
    title: "3rd Prize, Course-Level PBL (DSA) in 3th Semester",
    org: "St Joseph Engineering College",
    period: "2025",
    description: "For a public complaint management system built with data structures.",
  },
  {
    type: "education",
    title: "B.E. (in progress) — 3rd Year",
    org: "St Joseph Engineering College",
    period: "In progress",
    description: "Currently strengthening skills in DBMS, DSA, and full-stack web development.",
  },
  {
    type: "education",
    title: "Pre-University (PUC)",
    org: "St Agnes Pre University College",
    period: "",
    description: "",
  },
  {
    type: "education",
    title: "Schooling",
    org: "Shubhodaya Vidyalaya",
    period: "",
    description: "",
  },
];

// Certifications, courses, and achievements. Only include real ones.
export const certifications = [
  {
    title: "3rd Runner-Up — Gen AI Exchange Hackathon 2025",
    issuer: "Google Cloud, powered by Hack2Skill",
    date: "2025",
    url: "",
  },
  {
    title: "2nd Prize — Course-Level PBL, DBMS (NagarVoice)",
    issuer: "St Joseph Engineering College",
    date: "2025",
    url: "",
  },
  {
    title: "3rd Prize — Course-Level PBL, DSA",
    issuer: "St Joseph Engineering College",
    date: "2025",
    url: "",
  },
];

export const socialLinks = [
  { label: "GitHub", href: personalInfo.github, icon: "github" },
  { label: "LinkedIn", href: personalInfo.linkedin, icon: "linkedin" },
  { label: "Email", href: `mailto:${personalInfo.email}`, icon: "mail" },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
