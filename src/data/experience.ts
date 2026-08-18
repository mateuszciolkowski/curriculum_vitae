export type Experience = {
  id: string;
  company: string;
  role: { pl: string; en: string };
  date: { pl: string; en: string };
  description: { pl: string; en: string };
  technologies?: { name: string; icon?: string }[];
  details?: {
    pl: { bullets: string[] };
    en: { bullets: string[] };
  };
};

export const EXPERIENCE: Experience[] = [
  {
    id: "shm",
    company: "SHM Sp. z o.o.",
    role: {
      pl: "Full-Stack Developer",
      en: "Full-Stack Developer",
    },
    date: {
      pl: "06/2026 – Obecnie",
      en: "06/2026 – Present",
    },
    description: {
      pl: "Praca nad projektem GreenTransit – platformą do zarządzania transportem (TMS) oraz cyfrowym obiegiem dokumentów przewozowych.",
      en: "Working on the GreenTransit project – a Transport Management System (TMS) platform for digital transport document workflows.",
    },
    technologies: [
      { name: "React", icon: "devicon-react-original" },
      { name: "TypeScript", icon: "devicon-typescript-plain" },
      { name: "Python", icon: "devicon-python-plain" },
      { name: "FastAPI", icon: "devicon-fastapi-plain" },
      { name: "SQLAlchemy", icon: "devicon-sqlalchemy-plain" },
      { name: "Alembic", icon: "devicon-sqlalchemy-plain" },
      { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
      { name: "Pytest", icon: "devicon-pytest-plain" },
      { name: "Vitest", icon: "devicon-vitest-plain" },
      { name: "Docker", icon: "devicon-docker-plain" },
    ],
    details: {
      pl: {
        bullets: [
          "Projektowanie i rozwój systemu TMS wraz z konfiguratorem cyfrowych dokumentów przewozowych, w tym generowanie dokumentów PDF na bazie szablonów Jinja2.",
          "Rozwój asynchronicznego API w FastAPI z bazą PostgreSQL, obejmującego logikę biznesową transportu.",
          "Wdrożenie aplikacji jako PWA działającej offline dzięki cache'owaniu danych po stronie klienta.",
          "Budowa responsywnego, wielojęzycznego interfejsu w React 19 i TypeScript (Tailwind CSS, shadcn/ui) na podstawie makiet UI/UX.",
          "Konfiguracja pipeline'u CI/CD: automatyczne testy (pytest, Vitest), budowanie obrazów Docker i automatyczny deploy.",
        ],
      },
      en: {
        bullets: [
          "Designing and developing a TMS system with a digital transport document configurator, including PDF generation using Jinja2 templates.",
          "Developing an asynchronous FastAPI API with a PostgreSQL database, covering transport business logic.",
          "Implementing the application as a PWA that works offline via client-side data caching.",
          "Building a responsive, multilingual interface in React 19 and TypeScript (Tailwind CSS, shadcn/ui) based on UI/UX mockups.",
          "Configuring the CI/CD pipeline: automated tests (pytest, Vitest), Docker image builds, and automatic deployment.",
        ],
      },
    },
  },
];
