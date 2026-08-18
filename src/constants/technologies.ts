// Stack pogrupowany kategoriami — harmonijna, czytelna paleta editorial.
import anthropicIcon from "../assets/images/anthropic.png";

export type TechItem = {
  name: string;
  className: string;
  imageSrc?: string;
};

export type TechCategoryKey =
  | "frontend"
  | "backend"
  | "databases"
  | "devops"
  | "testing";

export type TechCategory = {
  key: TechCategoryKey;
  label: { pl: string; en: string };
  badgeBg: string;
  badgeText: string;
  dotColor: string;
  items: readonly TechItem[];
};

export const TECH_CATEGORIES: readonly TechCategory[] = [
  {
    key: "backend",
    label: { pl: "Backend & Architektura", en: "Backend & Architecture" },
    badgeBg: "bg-emerald-950/10 dark:bg-emerald-400/10",
    badgeText: "text-emerald-900 dark:text-emerald-300",
    dotColor: "bg-emerald-600 dark:bg-emerald-400",
    items: [
      { name: "Python", className: "devicon-python-plain" },
      { name: "FastAPI", className: "devicon-fastapi-plain colored" },
      { name: "Node.js", className: "devicon-nodejs-plain colored" },
      { name: "Django", className: "devicon-django-plain colored" },
      { name: "Java", className: "devicon-java-plain colored" },
      { name: "Spring", className: "devicon-spring-original colored" },
    ],
  },
  {
    key: "frontend",
    label: { pl: "Frontend & UI", en: "Frontend & UI" },
    badgeBg: "bg-orange-950/10 dark:bg-orange-400/10",
    badgeText: "text-orange-900 dark:text-orange-300",
    dotColor: "bg-orange-600 dark:bg-orange-400",
    items: [
      { name: "React 19", className: "devicon-react-original colored" },
      { name: "TypeScript", className: "devicon-typescript-plain colored" },
      { name: "Tailwind CSS", className: "devicon-tailwindcss-original colored" },
      { name: "HTML5", className: "devicon-html5-plain colored" },
      { name: "CSS3", className: "devicon-css3-plain colored" },
      { name: "PWA", className: "devicon-chrome-plain colored" },
    ],
  },
  {
    key: "databases",
    label: { pl: "Bazy danych & Storage", en: "Databases & Storage" },
    badgeBg: "bg-rose-950/10 dark:bg-rose-400/10",
    badgeText: "text-rose-900 dark:text-rose-300",
    dotColor: "bg-rose-600 dark:bg-rose-400",
    items: [
      { name: "PostgreSQL", className: "devicon-postgresql-plain colored" },
      { name: "SQL Server", className: "devicon-microsoftsqlserver-plain colored" },
      { name: "MongoDB", className: "devicon-mongodb-plain colored" },
      { name: "Redis", className: "devicon-redis-plain colored" },
      { name: "Alembic", className: "devicon-sqlalchemy-plain" },
      { name: "SQLAlchemy", className: "devicon-sqlalchemy-plain" },
    ],
  },
  {
    key: "devops",
    label: { pl: "DevOps & Cloud", en: "DevOps & Cloud" },
    badgeBg: "bg-sky-950/10 dark:bg-sky-400/10",
    badgeText: "text-sky-900 dark:text-sky-300",
    dotColor: "bg-sky-600 dark:bg-sky-400",
    items: [
      { name: "Docker", className: "devicon-docker-plain colored" },
      { name: "Git", className: "devicon-git-plain colored" },
      { name: "GitHub Actions", className: "devicon-githubactions-plain colored" },
      { name: "Azure", className: "devicon-azure-plain colored" },
      { name: "Vercel", className: "devicon-vercel-original" },
      { name: "Railway", className: "devicon-railway-original" },
      { name: "Supabase", className: "devicon-supabase-plain colored" },
    ],
  },
  {
    key: "testing",
    label: { pl: "Testowanie & Narzędzia", en: "Testing & Tools" },
    badgeBg: "bg-violet-950/10 dark:bg-violet-400/10",
    badgeText: "text-violet-900 dark:text-violet-300",
    dotColor: "bg-violet-600 dark:bg-violet-400",
    items: [
      { name: "Pytest", className: "devicon-pytest-plain colored" },
      { name: "Vitest", className: "devicon-vitest-plain colored" },
      { name: "Postman", className: "devicon-postman-plain colored" },
      { name: "Claude Code", className: "", imageSrc: anthropicIcon },
      { name: "GitHub Copilot", className: "devicon-github-original" },
    ],
  },
] as const;

export const TECHNOLOGIES = TECH_CATEGORIES.flatMap((c) => c.items);
export type Technology = (typeof TECHNOLOGIES)[number];
