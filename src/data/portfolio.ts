export const profile = {
  name: "Pamal Pahasara",
  fullName: "Pamal Pahasara",
  role: "Full-Stack Developer",
  photo: "/profile.jpg",
  location: "Sri Lanka",
  tagline:
    "I build reliable web and mobile products, from database design to polished interfaces.",
  about: [
    "I'm a final-year BSc student in Information Systems at Sabaragamuwa University of Sri Lanka, and a full-stack developer who enjoys taking a product from idea to deployment.",
    "My work spans backend APIs with ASP.NET Core and FastAPI, spatial and relational data with PostgreSQL and PostGIS, React and React Native front ends, and cloud and CI/CD tooling. I care about clean structure, clear UX, and code other people can read.",
  ],
  email: "pamalpahasara@example.com", 
  github: "https://github.com/pamal29",
  linkedin: "https://www.linkedin.com/in/pamal-pahasara-990ba2324/", 
  whatsapp: "94717324281",
  resumeUrl: "/resume.pdf", 
};

export type Project = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  featured?: boolean;
  image: string;
};

export const projects: Project[] = [
  {
    title: "NearU",
    description:
      "Capstone campus services platform with a rides and food backend and a mobile client, built by a student team.",
    tech: ["ASP.NET Core", "PostgreSQL", "PostGIS", "React Native"],
    featured: true,
    github: "https://github.com/Nearu-Project-SUSL",
    image: "/projects/nearu.png",
  },
  {
    title: "PickAFlick",
    description:
      "Movie and TV discovery app with search, watchlists and user accounts, powered by the TMDB API.",
    tech: ["React", "Express", "Supabase", "TMDB API"],
    github: "https://github.com/pamal29/PickAFlick",
    image: "/projects/pickaflick.png",
  },
  {
    title: "RepoInsight",
    description:
      "Tool that pulls repository data from the GitHub API and analyses it through a Python backend.",
    tech: ["Python", "FastAPI", "GitHub API"],
    github: "https://github.com/pamal29/RepoInsight",
    image: "/projects/repoinsight.png",
  },
  {
    title: "HydroTrack",
    description: "Hydration tracking mobile app built as a personal side project.",
    tech: ["React Native", "TypeScript"],
    github: "https://github.com/pamal29/HydroTrack",
    image: "/projects/hydrotrack.png",
  },
  {
  title: "YouTube Downloader",
  description: "A web application for downloading YouTube videos with a simple and user-friendly interface.",
  tech: ["Your", "Actual", "Technologies"],
  featured: false,
  github: "https://github.com/pamal29/yt_download",
  live: "",
  image: "/projects/ytdownload.png",
  },
  {
  title: "React Portfolio",
  description: "A personal developer portfolio built with React and Tailwind CSS, showcasing projects, technical skills, and social profiles.",
  tech: ["React", "Tailwind CSS,JavaScript"],
  featured: false,
  github: "https://github.com/pamal29/react-portfolio",
  live: "",
  image: "/projects/reactportfolio.png",
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
    title: "BSc (Hons) Computing and Information Systems",
    place: "Sabaragamuwa University of Sri Lanka",
    period: "2022 – Present",
    note: "Undergraduate studies focused on computing, information systems, software engineering, web development, mobile applications and cloud technologies.",
  },
  {
    title: "G.C.E. Advanced Level – Physical Science",
    place: "Richmond College, Galle",
    period: "2021",
    note: "Combined Mathematics (B), Physics (C), Chemistry (C).",
  },
];


export const certifications = [
  {
    title: "Microsoft Back-End Developer Professional Certificate",
    issuer: "Microsoft",
  },
  {
    title: "AWS SimuLearn – Cloud Practitioner",
    issuer: "Amazon Web Services",
  },
  {
    title: "Networking Basics",
    issuer: "Cisco Networking Academy",
  },
];