// Stack pogrupowany kategoriami — paleta editorial/jewel-tones na ciepłym tle.
// Klasy Tailwind muszą być pełnymi stringami (JIT nie skleja dynamicznych nazw),
// więc trzymamy je jawnie.

export type TechItem = {
  name: string;
  className: string;
};

export type TechCategoryKey =
  | "frontend"
  | "backend"
  | "databases"
  | "devops"
  | "testing";

export type TechCategoryColor = {
  /** kropka */
  dot: string;
  /** pionowy pasek-akcent po lewej grupy */
  bar: string;
  /** tekst nagłówka kategorii */
  text: string;
  /** ring chipa po hoverze */
  chipHoverRing: string;
};

export type TechCategory = {
  key: TechCategoryKey;
  label: { pl: string; en: string };
  color: TechCategoryColor;
  items: readonly TechItem[];
};

export const TECH_CATEGORIES: readonly TechCategory[] = [
  {
    key: "frontend",
    label: { pl: "Frontend", en: "Frontend" },
    color: {
      dot: "bg-orange-700",
      bar: "bg-gradient-to-b from-orange-700 via-orange-700/40 to-transparent",
      text: "text-orange-800",
      chipHoverRing: "hover:ring-orange-700/50",
    },
    items: [
      { name: "React", className: "devicon-react-original colored" },
      { name: "TypeScript", className: "devicon-typescript-plain colored" },
      { name: "Tailwind", className: "devicon-tailwindcss-original colored" },
      { name: "HTML", className: "devicon-html5-plain colored" },
      { name: "CSS", className: "devicon-css3-plain colored" },
      { name: "PWA", className: "devicon-chrome-plain colored" },
    ],
  },
  {
    key: "backend",
    label: { pl: "Backend", en: "Backend" },
    color: {
      dot: "bg-emerald-700",
      bar: "bg-gradient-to-b from-emerald-700 via-emerald-700/40 to-transparent",
      text: "text-emerald-800",
      chipHoverRing: "hover:ring-emerald-700/50",
    },
    items: [
      { name: "Node.js", className: "devicon-nodejs-plain colored" },
      { name: "Python", className: "devicon-python-plain" },
      { name: "FastAPI", className: "devicon-fastapi-plain colored" },
      { name: "Django", className: "devicon-django-plain colored" },
      { name: "Java", className: "devicon-java-plain colored" },
      { name: "Spring", className: "devicon-spring-original colored" },
    ],
  },
  {
    key: "databases",
    label: { pl: "Bazy danych", en: "Databases" },
    color: {
      dot: "bg-rose-800",
      bar: "bg-gradient-to-b from-rose-800 via-rose-800/40 to-transparent",
      text: "text-rose-900",
      chipHoverRing: "hover:ring-rose-800/50",
    },
    items: [
      { name: "Postgres", className: "devicon-postgresql-plain colored" },
      { name: "SQL Server", className: "devicon-microsoftsqlserver-plain colored" },
      { name: "MongoDB", className: "devicon-mongodb-plain colored" },
      { name: "Redis", className: "devicon-redis-plain colored" },
      { name: "Hibernate", className: "devicon-hibernate-plain colored" },
      { name: "Alembic", className: "devicon-sqlalchemy-plain" },
    ],
  },
  {
    key: "devops",
    label: { pl: "DevOps / CI/CD", en: "DevOps / CI/CD" },
    color: {
      dot: "bg-blue-900",
      bar: "bg-gradient-to-b from-blue-900 via-blue-900/40 to-transparent",
      text: "text-blue-900",
      chipHoverRing: "hover:ring-blue-900/50",
    },
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
    label: { pl: "Testowanie i narzędzia", en: "Testing & Tools" },
    color: {
      dot: "bg-violet-700",
      bar: "bg-gradient-to-b from-violet-700 via-violet-700/40 to-transparent",
      text: "text-violet-800",
      chipHoverRing: "hover:ring-violet-700/50",
    },
    items: [
      { name: "pytest", className: "devicon-pytest-plain colored" },
      { name: "Unit Testing", className: "devicon-junit-plain colored" },
      { name: "Integration Testing", className: "devicon-postman-plain colored" },
      { name: "Postman", className: "devicon-postman-plain colored" },
      { name: "Claude Code", className: "devicon-anthropic-plain" },
      { name: "GitHub Copilot", className: "devicon-github-original" },
    ],
  },
] as const;

// Płaska lista — zostaje, gdyby coś innego z niej korzystało.
export const TECHNOLOGIES = TECH_CATEGORIES.flatMap((c) => c.items);

export type Technology = (typeof TECHNOLOGIES)[number];
