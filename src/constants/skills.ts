export const SKILLS = [
  "Projektowanie API REST",
  "Modelowanie baz danych SQL",
  "Konteneryzacja Docker",
  "Architektura Full-stack",
  "Zarządzanie stanem TS",
  "Deployment i CI/CD",
] as const;

export type Skill = (typeof SKILLS)[number];
