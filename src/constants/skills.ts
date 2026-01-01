export const SKILLS = [
  "Projektowanie API REST",
  "Modelowanie baz danych SQL",
  "Konteneryzacja Docker",
  "Integracja frontend-backend",
  "Testy jednostkowe",
  "Deployment w chmurze (Coolify, Oracle Cloud)",
] as const;

export type Skill = (typeof SKILLS)[number];
