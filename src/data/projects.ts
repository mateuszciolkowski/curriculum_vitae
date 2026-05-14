import gymgate1 from "../assets/images/gymgate/gymgate1.png";
import gymgate2 from "../assets/images/gymgate/gymgate2.png";
import gymgate3 from "../assets/images/gymgate/gymgate3.png";
import gymgate4 from "../assets/images/gymgate/gymgate4.png";
import gymgate5 from "../assets/images/gymgate/gymgate5.png";
import gymgate6 from "../assets/images/gymgate/gymgate6.png";
import gymgate7 from "../assets/images/gymgate/gymgate7.png";
import gymgate11 from "../assets/images/gymgate/gymgate11.png";

export interface Project {
  id: string;
  name: string;
  role: { pl: string; en: string };
  description: { pl: string; en: string };
  techDescription?: { pl: string; en: string };
  status?: { pl: string; en: string };
  technologies?: { name: string; icon: string }[];
  features?: { pl: string[]; en: string[] };
  images: string[];
  links?: {
    github?: string;
    live?: string;
    demo?: string;
  };
}

const zzpjDescription = {
  pl: "Fin-Insight to projekt grupowy realizowany na studiach w ramach przedmiotu Zaawansowane Zagadnienia Projektowania w Javie. Aplikacja wspiera inwestora w analizie portfela oraz agregacji danych rynkowych (akcje, krypto, FX), a backend działa jako zestaw mikroserwisów opartych o Java + Spring Boot/Spring Cloud, z centralną konfiguracją przez Config Server, odkrywaniem usług przez Eureka Server, zabezpieczeniami opartymi o Keycloak oraz kontraktami API tworzonymi w standardzie OpenAPI.",
  en: "Fin-Insight is a group university project delivered as part of the Advanced Java Design Topics course. The platform supports portfolio analysis and market data aggregation (stocks, crypto, FX), while the backend runs as a Java + Spring Boot/Spring Cloud microservices ecosystem with centralized configuration via Config Server, service discovery through Eureka Server, security powered by Keycloak, and API contracts documented with OpenAPI.",
};

const zzpjStatus = {
  pl: "W trakcie",
  en: "In Progress",
};

const zzpjFeatures = {
  pl: [
    "Analiza portfela inwestycyjnego oraz monitorowanie zmian wartości aktywów",
    "Agregacja danych rynkowych dla akcji, krypto i FX",
    "Architektura mikroserwisowa ze Spring Boot i Spring Cloud",
    "Bezpieczeństwo oparte o Keycloak oraz dokumentacja API w OpenAPI",
    "Centralna konfiguracja i discovery usług przez Config Server oraz Eureka Server",
  ],
  en: [
    "Portfolio analysis and investment asset value monitoring",
    "Market data aggregation for stocks, crypto, and FX",
    "Microservices architecture with Spring Boot and Spring Cloud",
    "Security powered by Keycloak and API documentation with OpenAPI",
    "Centralized configuration and service discovery via Config Server and Eureka Server",
  ],
};

export const PROJECTS: Project[] = [
  {
    id: "gymgate",
    name: "GymGate",
    role: {
      pl: "Fullstack Developer",
      en: "Fullstack Developer",
    },
    description: {
      pl: "GymGate to aplikacja do śledzenia treningów siłowych. Umożliwia szybkie rozpoczęcie sesji, logowanie ćwiczeń z seriami i ciężarami oraz automatyczną aktualizację statystyk po każdym ukończonym treningu. Interfejs reaguje natychmiast — aplikacja działa płynnie również offline.",
      en: "GymGate is a strength training tracker. It enables quick session start, logging exercises with sets and weights, and automatic statistics updates after each completed workout. The interface responds instantly — the app works smoothly offline as well.",
    },
    techDescription: {
      pl: "Backend to REST API oparte na Node.js + Express + TypeScript z Prisma ORM i PostgreSQL. Frontend zbudowano w React 19 + TypeScript + Tailwind CSS. Kluczowy wybór projektowy to architektura offline-first: UI i lokalny IndexedDB aktualizowane są natychmiast (optimistic update), a wywołanie API trafia do serwera w tle. Gdy połączenie jest niedostępne, operacje trafiają do kolejki i są odtwarzane przez syncManager po jego przywróceniu. Statystyki są przebudowywane w całości z ukończonych sesji po każdej zmianie. JWT w httpOnly cookie zapewnia ochronę przed XSS.",
      en: "The backend is a REST API built with Node.js + Express + TypeScript, Prisma ORM, and PostgreSQL. The frontend is built with React 19 + TypeScript + Tailwind CSS. The key design decision is an offline-first architecture: the UI and local IndexedDB update immediately (optimistic update) while the API call happens in the background. When the connection is unavailable, writes are queued and replayed by syncManager on reconnect. Statistics are fully rebuilt from completed sessions on every change. JWT in an httpOnly cookie provides XSS protection.",
    },
    features: {
      pl: [
        "Szybkie rozpoczęcie sesji treningowej i zamknięcie jej po skończeniu",
        "Logowanie serii, ciężarów i powtórzeń dla każdego ćwiczenia",
        "Statystyki per ćwiczenie: maksymalny ciężar, ostatnie wykonanie, liczba sesji",
        "Notatki do ćwiczeń z automatycznym przeniesieniem do kolejnej sesji",
        "Biblioteka ćwiczeń z kategoriami mięśniowymi i obsługą własnych pozycji",
        "Tryb offline — zmiany zapisywane lokalnie i synchronizowane w tle",
      ],
      en: [
        "Quick session start and close on completion",
        "Logging sets, weights, and reps for every exercise",
        "Per-exercise stats: max weight, last performance, total sessions",
        "Exercise notes with automatic carry-over to the next session",
        "Exercise library organized by muscle group with custom exercise support",
        "Offline mode — changes saved locally and synced in the background",
      ],
    },
    images: [
      gymgate1,
      gymgate2,
      gymgate3,
      gymgate4,
      gymgate5,
      gymgate6,
      gymgate7,
      gymgate11,
    ],
    links: {
      github: "https://github.com/mateuszciolkowski/gymgate",
      live: "https://gymgate.vercel.app/",
    },
  },
  {
    id: "fin-insight-zzpj",
    name: "Fin-Insight",
    role: {
      pl: "Fullstack Developer (projekt zespołowy)",
      en: "Fullstack Developer (team project)",
    },
    description: zzpjDescription,
    status: zzpjStatus,
    technologies: [
      { name: "Java", icon: "devicon-java-plain" },
      { name: "Spring", icon: "devicon-spring-original" },
      { name: "React", icon: "devicon-react-original" },
      { name: "Docker", icon: "devicon-docker-plain" },
      { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
    ],
    features: zzpjFeatures,
    images: [],
    links: {
      github: "https://github.com/AlfaTeam67/ZZPJ",
    },
  },
];
