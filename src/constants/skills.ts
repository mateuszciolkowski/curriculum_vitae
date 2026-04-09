export const SKILLS = [
  { pl: "Projektowanie API REST", en: "REST API Design" },
  { pl: "Modelowanie baz danych SQL", en: "SQL Database Modeling" },
  { pl: "Konteneryzacja Docker", en: "Docker Containerization" },
  { pl: "Integracja frontend-backend", en: "Frontend-Backend Integration" },
  { pl: "System kontroli wersji Git", en: "Git Version Control" },
  { pl: "Testy jednostkowe", en: "Unit Testing" },
  { pl: "Testowanie E2E (Postman)", en: "E2E Testing (Postman)" },
  { pl: "CI/CD (GitHub Actions)", en: "CI/CD (GitHub Actions)" },
  {
    pl: "Coolify, Oracle Cloud, Vercel, Railway, Supabase, Render",
    en: "Coolify, Oracle Cloud, Vercel, Railway, Supabase, Render",
  },
  {
    pl: "Programowanie agentowe (GitHub Copilot, Gemini CLI)",
    en: "Agentic Programming (GitHub Copilot, Gemini CLI)",
  },
] as const;

export type Skill = (typeof SKILLS)[number];
