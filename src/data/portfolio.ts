export const profile = {
  name: "Pamal",
  fullName: "Pamal", // TODO
  role: "Full-Stack Developer",
  location: "Sri Lanka",
  tagline:
    "I build reliable web and mobile products, from database design to polished interfaces.",
  about: [
    "I'm a final-year BSc student in Information Systems at Sabaragamuwa University of Sri Lanka, and a full-stack developer who enjoys taking a product from idea to deployment.",
    "My work spans backend APIs with ASP.NET Core and FastAPI, spatial and relational data with PostgreSQL and PostGIS, React and React Native front ends, and cloud and CI/CD tooling. I care about clean structure, clear UX, and code other people can read.",
  ],
  email: "you@example.com", // TODO
  github: "https://github.com/pamal29",
  linkedin: "https://www.linkedin.com/in/your-handle", // TODO
  resumeUrl: "", // TODO: e.g. "/resume.pdf" with the file in /public
};

export type Project = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "NearU",
    description:
      "Capstone campus services platform with a rides and food backend and a mobile client, built by a student team.",
    tech: ["ASP.NET Core", "PostgreSQL", "PostGIS", "React Native"],
    featured: true,
  },
  {
    title: "MealMate",
    description: "Campus food ordering mobile app developed as a group community project.",
    tech: ["React Native", "Expo"],
  },
  {
    title: "PickAFlick",
    description:
      "Movie and TV discovery app with search, watchlists and user accounts, powered by the TMDB API.",
    tech: ["React", "Express", "Supabase", "TMDB API"],
  },
  {
    title: "RepoInsight",
    description:
      "Tool that pulls repository data from the GitHub API and analyses it through a Python backend.",
    tech: ["Python", "FastAPI", "GitHub API"],
  },
  {
    title: "HydroTrack",
    description: "Hydration tracking mobile app built as a personal side project.",
    tech: ["React Native", "TypeScript"],
  },
];

export const skillGroups: { label: string; items: string[] }[] = [
  { label: "Backend", items: ["C#", "ASP.NET Core", "Entity Framework Core", "Python", "FastAPI", "Node.js", "Express"] },
  { label: "Frontend", items: ["React", "TypeScript", "Next.js", "Tailwind CSS"] },
  { label: "Mobile", items: ["React Native", "Expo", "Flutter"] },
  { label: "Data", items: ["PostgreSQL", "PostGIS", "Supabase"] },
  { label: "Cloud & DevOps", items: ["AWS", "Azure", "Docker", "Kubernetes", "GitHub Actions", "Terraform"] },
];

export const education = [
  {
    title: "BSc in Information Systems",
    place: "Sabaragamuwa University of Sri Lanka",
    period: "Third year", // TODO
    note: "Software engineering focus, with team projects across web, mobile and cloud.",
  },
];

export const certifications = [
  { title: "Machine Learning Certifications", issuer: "Coursera" }, // TODO: exact names
];