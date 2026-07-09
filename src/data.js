import xoraLogo from "../src/public/xora.png";
import MIT from "../src/public/mitwhite.png";

export const profile = {
  name: "Mohit Saini",
  role: "Full Stack Developer",
  location: "Kotputli, Jaipur, Rajasthan",
  email: "mohitsaini80800@gmail.com",
  phone: "+91 7023897266",
  linkedin: "www.linkedin.com/in/mohit-saini-470364318",
  github: "https://github.com/mohitsaini7023",
  summary:
    "Frontend-focused full stack developer who builds responsive, production-minded apps with React, Next.js and the MERN stack — from REST APIs and auth systems to the interfaces that sit on top of them.",
  stack: ["React.js", "Next.js", "React Native", "Node.js", "Express.js", "MongoDB"],
}

export const projects = [
  {
    method: "GET",
    path: "/malhotra-it",
    link: "https://malhotrait.in/",
    status: 200,
    image: MIT,
    logo: MIT,
    title: "Malhotra IT Innovation",
    role: "Frontend UI Developer",
    description:
      "A responsive marketing site for an IT institute — courses and placements, tuned for speed on any device.",
    points: [
      "Engineered a responsive platform to showcase courses and placements",
      "Built dynamic, interactive layouts with Bootstrap for fluid cross-device viewports",
      "Optimized navigation and assets for fast loading and a modern flow",
    ],
    stack: ["HTML5", "CSS3", "Bootstrap", "React.js"],
  },
  {
    method: "GET",
    path: "/XORA",
    logo: xoraLogo,
    link: "/public/xora.apk",
    status: 200,
    image: xoraLogo,
    title: "XORA App",
    role: "Frontend UI Developer",
    description:
      "A responsive marketing site for an IT institute — courses and placements, tuned for speed on any device.",
    points: [
      "Engineered a responsive platform to showcase courses and placements",
      "Built dynamic, interactive layouts with Bootstrap for fluid cross-device viewports",
      "Optimized navigation and assets for fast loading and a modern flow",
    ],
    stack: ["React Native", "Erlang", "MySQL", "Firebase Cloud Messaging","JWT","Cloud Storage"],
  },
]

export const skills = [
  {
    category: "frontend",
    items: ["HTML5", "CSS3", "Bootstrap", "React.js", "Next.js", "React Native", "Redux", "Redux Toolkit"],
  },
  {
    category: "backend",
    items: ["Node.js", "Express.js", "REST API Development", "Authentication & Authorization"],
  },
  {
    category: "language",
    items: ["JavaScript (ES6+)"],
  },
  {
    category: "database",
    items: ["MongoDB", "MongoDB Compass"],
  },
  {
    category: "tools",
    items: ["Git", "GitHub", "VS Code", "Postman"],
  },
]

export const education = [
  {
    hash: "a3f9c1e",
    date: "2025 — 2028",
    title: "Bachelor of Computer Applications (BCA)",
    org: "Manipal University, Jaipur",
    status: "in-progress",
    points: [
      "Building strong foundations in programming, data structures and DBMS",
      "Developing practical skills through MERN stack projects",
    ],
  },
  {
    hash: "7d20b6a",
    date: "2024 — 2026",
    title: "Diploma in Full Stack Development",
    org: "TIPS-G Institute, Kotputli",
    status: "merged",
    points: [
      "Hands-on full-stack engineering: responsive interfaces and data pipelines",
      "Backend integration, server deployment and version control workflows",
    ],
  },
]
