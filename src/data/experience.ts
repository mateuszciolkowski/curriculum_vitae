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
    id: "hrk",
    company: "HRK S.A.",
    role: {
      pl: "Młodszy specjalista ds. rozwoju oprogramowania i automatyzacji procesów biznesowych",
      en: "Junior Software Development and Business Process Automation Specialist",
    },
    date: {
      pl: "09/2026 – Obecnie",
      en: "09/2026 – Present",
    },
    description: {
      pl: "Rozwój wewnętrznych aplikacji webowych oraz integracji między systemami firmowymi, wspierających automatyzację procesów biznesowych.",
      en: "Developing internal web applications and integrations between company systems that support business process automation.",
    },
    technologies: [
      { name: "Python", icon: "devicon-python-plain" },
      { name: "FastAPI", icon: "devicon-fastapi-plain" },
      { name: "SQLAlchemy", icon: "devicon-sqlalchemy-plain" },
      { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
      { name: "React", icon: "devicon-react-original" },
      { name: "TypeScript", icon: "devicon-typescript-plain" },
      { name: "Docker", icon: "devicon-docker-plain" },
    ],
    details: {
      pl: {
        bullets: [
          "Budowa i rozwój wewnętrznych aplikacji webowych w React i TypeScript, usprawniających codzienną pracę zespołów.",
          "Tworzenie API w FastAPI (Python) obsługujących logikę biznesową i wymianę danych między systemami.",
          "Integracje z systemami firmowymi przez REST API – synchronizacja i przetwarzanie danych.",
          "Automatyzacja powtarzalnych procesów biznesowych, ograniczająca pracę ręczną.",
        ],
      },
      en: {
        bullets: [
          "Building and developing internal web applications in React and TypeScript that streamline daily team work.",
          "Creating FastAPI (Python) APIs handling business logic and data exchange between systems.",
          "Integrating company systems via REST APIs – data synchronisation and processing.",
          "Automating repetitive business processes to reduce manual work.",
        ],
      },
    },
  },
  {
    id: "shm",
    company: "SHM Sp. z o.o.",
    role: {
      pl: "Full-Stack Developer",
      en: "Full-Stack Developer",
    },
    date: {
      pl: "06/2026 – 08/2026",
      en: "06/2026 – 08/2026",
    },
    description: {
      pl: "Praca nad projektem GreenTransit – platformą do zarządzania transportem (TMS) oraz cyfrowym obiegiem dokumentów przewozowych.",
      en: "Worked on the GreenTransit project – a Transport Management System (TMS) platform for digital transport document workflows.",
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
