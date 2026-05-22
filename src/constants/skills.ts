export const SKILLS = [
  { pl: "Integracja frontend-backend", en: "Frontend-Backend Integration" },
  { pl: "Modelowanie baz danych SQL", en: "SQL Database Modeling" },
  {
    category: { pl: "Rozwiązania chmurowe", en: "Cloud Solutions" },
    pl: "Coolify, Oracle Cloud, Vercel, Railway, Supabase, Render",
    en: "Coolify, Oracle Cloud, Vercel, Railway, Supabase, Render",
  },
] as const;

export type Skill = (typeof SKILLS)[number];
