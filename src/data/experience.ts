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
      pl: "Praca nad projektem GreenTransit – platformą do zarządzania transportem (TMS) oraz cyfrowym obiegiem dokumentów CMR/LP.",
      en: "Working on the GreenTransit project – a Transport Management System (TMS) platform for digital CMR/LP document workflows.",
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
          "Projektowanie i rozwój asynchronicznego API w technologii FastAPI (Python) oraz relacyjnej bazy danych PostgreSQL.",
          "Budowa responsywnego interfejsu użytkownika w React 19 i TypeScript z wykorzystaniem Tailwind CSS i komponentów shadcn/ui.",
          "Wdrażanie mechanizmów uwierzytelniania i autoryzacji użytkowników na platformie.",
          "Konfiguracja i implementacja wielojęzyczności (i18n) w aplikacji klienckiej.",
        ],
      },
      en: {
        bullets: [
          "Designing and developing asynchronous APIs with FastAPI (Python) and PostgreSQL database.",
          "Building a responsive user interface in React 19 and TypeScript using Tailwind CSS and shadcn/ui components.",
          "Implementing user authentication and authorization mechanisms on the platform.",
          "Configuring and implementing internationalization (i18n) support in the client application.",
        ],
      },
    },
  },
];
