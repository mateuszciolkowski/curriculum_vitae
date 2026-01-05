export const SKILLS = [
  { pl: "Projektowanie API REST", en: "REST API Design" },
  { pl: "Modelowanie baz danych SQL", en: "SQL Database Modeling" },
  { pl: "Konteneryzacja Docker", en: "Docker Containerization" },
  { pl: "Integracja frontend-backend", en: "Frontend-Backend Integration" },
  { pl: "Testy jednostkowe", en: "Unit Testing" },
  {
    pl: "Deployment w chmurze (Coolify, Oracle Cloud)",
    en: "Cloud Deployment (Coolify, Oracle Cloud)",
  },
] as const;

export type Skill = (typeof SKILLS)[number];
