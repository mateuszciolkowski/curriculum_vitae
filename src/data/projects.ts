import gymgate83 from "../assets/images/gymgate/gymgate83.jpg";
import gymgate79 from "../assets/images/gymgate/gymgate79.jpg";
import gymgate80 from "../assets/images/gymgate/gymgate80.jpg";
import gymgate81 from "../assets/images/gymgate/gymgate81.jpg";
import gymgate82 from "../assets/images/gymgate/gymgate82.jpg";
import fininsight1 from "../assets/images/fininsight/fininsight1.png";
import fininsight2 from "../assets/images/fininsight/fininsight2.png";
import fininsight3 from "../assets/images/fininsight/fininsight3.png";
import fininsight4 from "../assets/images/fininsight/fininsight4.png";
import fininsight5 from "../assets/images/fininsight/fininsight5.png";
import fininsight6 from "../assets/images/fininsight/fininsight6.png";
import hrk1 from "../assets/images/hrk/hrk1.png";
import hrk2 from "../assets/images/hrk/hrk2.png";
import hrk3 from "../assets/images/hrk/hrk3.png";
import hrk4 from "../assets/images/hrk/hrk4.png";
import hrk5 from "../assets/images/hrk/hrk5.png";
import hrkCert from "../assets/images/hrk/hrk.png";
import holicatch1 from "../assets/images/holicatch/holicatch1.png";
import holicatch2 from "../assets/images/holicatch/holicatch2.png";
import holicatch3 from "../assets/images/holicatch/holicatch3.png";
import holicatch4 from "../assets/images/holicatch/holicatch4.png";
import holicatch5 from "../assets/images/holicatch/holicatch5.png";
import holicatch6 from "../assets/images/holicatch/holicatch6.png";

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

const finInsightDescription = {
  pl: "Fin-Insight to webowy asystent inwestora do zarządzania portfelami, śledzenia aktywów oraz analizy danych rynkowych. Aplikacja łączy mikroserwisowy backend w Spring Boot/Spring Cloud z panelem React, a moduł AI Advisor wykorzystuje LLM do generowania rekomendacji na podstawie składu portfela i historii cen. Bezpieczeństwo oparto o OAuth2/OIDC w Keycloak, JWT oraz separację usług za API Gateway.",
  en: "Fin-Insight is a web-based investor assistant for portfolio management, asset tracking, and market data analysis. The application combines a Spring Boot/Spring Cloud microservices backend with a React dashboard, while the AI Advisor module uses LLMs to generate recommendations based on portfolio composition and price history. Security is built around OAuth2/OIDC with Keycloak, JWT, and service isolation behind an API Gateway.",
};

const finInsightTechDescription = {
  pl: "System został zaprojektowany jako zestaw usług: Portfolio Manager, Market Data, AI Advisor, API Gateway, Config Server oraz Eureka. Każdy obszar ma własną bazę PostgreSQL, migracje Flyway i kontrakty REST. Frontend korzysta z React, TypeScript, React Query i Redux Toolkit, a środowisko developerskie działa w Docker Compose z Keycloakiem, Redisem i bazami per service.",
  en: "The system is designed as a set of services: Portfolio Manager, Market Data, AI Advisor, API Gateway, Config Server, and Eureka. Each domain has its own PostgreSQL database, Flyway migrations, and REST contracts. The frontend uses React, TypeScript, React Query, and Redux Toolkit, while the development environment runs on Docker Compose with Keycloak, Redis, and database-per-service setup.",
};

const finInsightFeatures = {
  pl: [
    "Tworzenie portfeli inwestycyjnych oraz zarządzanie aktywami i transakcjami",
    "Agregacja danych rynkowych dla akcji, kryptowalut i innych symboli",
    "AI Advisor generujący rekomendacje na podstawie zawartości portfela",
    "Logowanie i autoryzacja przez Keycloak w standardzie OAuth2/OIDC",
    "Mikroserwisy ze Spring Cloud, service discovery, gatewayem i centralną konfiguracją",
    "Docker Compose z osobnymi bazami PostgreSQL oraz cache Redis",
  ],
  en: [
    "Creating investment portfolios and managing assets and transactions",
    "Market data aggregation for stocks, cryptocurrencies, and other symbols",
    "AI Advisor generating recommendations based on portfolio contents",
    "Authentication and authorization through Keycloak using OAuth2/OIDC",
    "Spring Cloud microservices with service discovery, gateway, and centralized configuration",
    "Docker Compose setup with separate PostgreSQL databases and Redis cache",
  ],
};

const hrkDescription = {
  pl: "HRK CRM to system tworzony dla HRK Payroll Consulting, który porządkuje obsługę klientów, kontraktów i procesów waloryzacji stawek. Aplikacja centralizuje kartę klienta, historię współpracy, dokumenty oraz zadania operacyjne, a warstwa AI/RAG pomaga szybko analizować treść umów i odnajdywać kontekst w dokumentach. W projekcie odpowiadałem za architekturę rozwiązania AI opartą o Bielik 4.5B v3.0, pgvector i lokalne uruchamianie modeli przez Ollama.",
  en: "HRK CRM is a system built for HRK Payroll Consulting to organize customer handling, contract workflows, and rate valorization processes. The application centralizes customer profiles, collaboration history, documents, and operational tasks, while the AI/RAG layer helps analyze contract content and retrieve document context quickly. In the project, I was responsible for the AI architecture based on Bielik 4.5B v3.0, pgvector, and local model execution through Ollama.",
};

const hrkTechDescription = {
  pl: "Backend powstaje w Pythonie i FastAPI, z PostgreSQL jako bazą relacyjną oraz pgvector do wyszukiwania semantycznego. Dokumenty są dzielone na chunki, osadzane embeddingami i przeszukiwane w modelu RAG, a tryb AI syntetyzuje odpowiedzi z wykorzystaniem polskiego modelu Bielik uruchamianego lokalnie przez Ollama. Projekt zakłada integrację z Active Directory, audyt zmian i bezpieczne przechowywanie dokumentów.",
  en: "The backend is built with Python and FastAPI, using PostgreSQL as the relational database and pgvector for semantic search. Documents are split into chunks, embedded, and searched through a RAG pipeline, while the AI mode synthesizes answers with the Polish Bielik model running locally via Ollama. The project assumes Active Directory integration, change auditing, and secure document storage.",
};

const hrkFeatures = {
  pl: [
    "Karta klienta z opiekunami, historią działań, dokumentami i szybkim podsumowaniem",
    "Obsługa umów, stawek, usług oraz procesu waloryzacji",
    "Alerty 90/60/30 dni przed końcem umowy i przypomnienia o zaległych działaniach",
    "Raporty KPI oraz dashboard operacyjny dla pracy zespołu HRK",
    "RAG po dokumentach z wyszukiwaniem semantycznym w PostgreSQL + pgvector",
    "Tryb AI z Bielik 4.5B v3.0 uruchamianym lokalnie przez Ollama",
  ],
  en: [
    "Customer profile with owners, activity history, documents, and quick summaries",
    "Contract, rate, service, and valorization workflow management",
    "90/60/30-day contract expiration alerts and reminders for overdue actions",
    "KPI reports and an operational dashboard for the HRK team",
    "Document RAG with semantic search in PostgreSQL + pgvector",
    "AI mode powered by Bielik 4.5B v3.0 running locally through Ollama",
  ],
};

const holicatchDescription = {
  pl: "Holicatch to aplikacja webowa tworzona w ramach pracy inżynierskiej, która automatyzuje wyszukiwanie ofert wakacyjnych i Last Minute. System agreguje oferty z różnych źródeł, porównuje je z alertami użytkownika i pokazuje dopasowanie w czytelnej skali X/6. Główną ideą projektu jest model „set & forget” — użytkownik raz definiuje preferencje, a aplikacja monitoruje rynek w tle i wysyła powiadomienie, gdy pojawi się trafna oferta.",
  en: "Holicatch is a web application developed as part of my engineering thesis, focused on automating holiday and Last Minute offer discovery. The system aggregates travel deals from multiple sources, compares them with user alerts, and presents the match score in a clear X/6 format. The core idea is a set-and-forget model: the user defines preferences once, while the application monitors the market in the background and sends a notification when a relevant offer appears.",
};

const holicatchTechDescription = {
  pl: "Architektura opiera się na kilku modułach: ETL/scheduler pobiera oferty cyklicznie, backend FastAPI normalizuje dane i liczy dopasowania alertów, PostgreSQL przechowuje oferty oraz historię cen, a Redis Streams obsługuje zdarzenia dla serwisu powiadomień e-mail. Frontend w React + TypeScript jest responsywny i wspiera discovery-first onboarding — użytkownik może najpierw przeglądać oferty, a dopiero później założyć konto i tworzyć alerty.",
  en: "The architecture is split into several modules: an ETL/scheduler periodically collects offers, the FastAPI backend normalizes data and calculates alert matches, PostgreSQL stores offers and price history, and Redis Streams handles events for the email notification service. The React + TypeScript frontend is responsive and supports discovery-first onboarding — users can browse offers first, then create an account and configure alerts later.",
};

const holicatchFeatures = {
  pl: [
    "Agregacja ofert turystycznych z wielu źródeł w ujednoliconym modelu danych",
    "Alerty użytkownika oparte o 6 kryteriów: destynacja, wylot, daty, budżet, długość pobytu i liczba osób",
    "Tryby dopasowania STRICT, FLEXIBLE i RELAXED z wynikiem X/6 widocznym przy ofertach",
    "Ważony ranking ofert rozstrzygający kolejność przy takim samym poziomie dopasowania",
    "Historia cen ofert pomagająca ocenić, czy promocja jest realnie atrakcyjna",
    "Powiadomienia e-mail przez Resend, obsługiwane zdarzeniowo z użyciem Redis Streams",
  ],
  en: [
    "Aggregating travel offers from multiple sources into a unified data model",
    "User alerts based on 6 criteria: destination, departure city, dates, budget, stay duration, and number of people",
    "STRICT, FLEXIBLE, and RELAXED matching modes with an X/6 score displayed next to offers",
    "Weighted offer ranking used to resolve ordering within the same match level",
    "Offer price history to help verify whether a deal is genuinely attractive",
    "Email notifications through Resend, handled event-driven with Redis Streams",
  ],
};

export const PROJECTS: Project[] = [
  {
    id: "gymgate",
    name: "GymGate",
    role: {
      pl: "Full-Stack Developer",
      en: "Full-Stack Developer",
    },
    description: {
      pl: "GymGate to aplikacja do śledzenia treningów siłowych. Umożliwia szybkie rozpoczęcie sesji, logowanie ćwiczeń z seriami i ciężarami oraz automatyczną aktualizację statystyk po każdym ukończonym treningu. Możesz korzystać z gotowych planów treningowych, kopiować plany innych użytkowników lub tworzyć własne — aplikacja prowadzi przez trening krok po kroku i sugeruje ciężary na podstawie historii. Interfejs reaguje natychmiast — aplikacja działa płynnie również offline.",
      en: "GymGate is a strength training tracker. It enables quick session start, logging exercises with sets and weights, and automatic statistics updates after each completed workout. You can use built-in workout plans, copy plans from other users, or create your own — the app guides you through each session step by step and suggests weights based on your history. The interface responds instantly — the app works smoothly offline as well.",
    },
    techDescription: {
      pl: "Backend to REST API oparte na Node.js + Express + TypeScript z Prisma ORM i PostgreSQL. Frontend zbudowano w React 19 + TypeScript + Tailwind CSS. Kluczowy wybór projektowy to architektura offline-first: UI i lokalny IndexedDB aktualizowane są natychmiast (optimistic update), a wywołanie API trafia do serwera w tle. Gdy połączenie jest niedostępne, operacje trafiają do kolejki i są odtwarzane przez syncManager po jego przywróceniu. Statystyki są przebudowywane w całości z ukończonych sesji po każdej zmianie. JWT w httpOnly cookie zapewnia ochronę przed XSS.",
      en: "The backend is a REST API built with Node.js + Express + TypeScript, Prisma ORM, and PostgreSQL. The frontend is built with React 19 + TypeScript + Tailwind CSS. The key design decision is an offline-first architecture: the UI and local IndexedDB update immediately (optimistic update) while the API call happens in the background. When the connection is unavailable, writes are queued and replayed by syncManager on reconnect. Statistics are fully rebuilt from completed sessions on every change. JWT in an httpOnly cookie provides XSS protection.",
    },
    features: {
      pl: [
        "Szybkie rozpoczęcie sesji treningowej i zamknięcie jej po skończeniu",
        "Logowanie serii, ciężarów i powtórzeń dla każdego ćwiczenia",
        "Plany treningowe: gotowe (seed), własne z pełnym CRUD oraz kopiowanie planów innych użytkowników",
        "Prowadzenie przez trening krok po kroku z sugestią ciężarów na podstawie historii",
        "Statystyki per ćwiczenie: maksymalny ciężar, ostatnie wykonanie, liczba sesji",
        "Notatki do ćwiczeń z automatycznym przeniesieniem do kolejnej sesji",
        "Biblioteka ćwiczeń z kategoriami mięśniowymi i obsługą własnych pozycji",
        "Tryb offline — zmiany zapisywane lokalnie i synchronizowane w tle",
      ],
      en: [
        "Quick session start and close on completion",
        "Logging sets, weights, and reps for every exercise",
        "Workout plans: built-in (seeded), custom with full CRUD, and copying plans from other users",
        "Step-by-step guided workout with weight suggestions based on personal history",
        "Per-exercise stats: max weight, last performance, total sessions",
        "Exercise notes with automatic carry-over to the next session",
        "Exercise library organized by muscle group with custom exercise support",
        "Offline mode — changes saved locally and synced in the background",
      ],
    },
    images: [gymgate83, gymgate79, gymgate80, gymgate81, gymgate82],
    links: {
      github: "https://github.com/mateuszciolkowski/gymgate",
      live: "https://gymgate.vercel.app/",
    },
  },
  {
    id: "holicatch",
    name: "Holicatch",
    role: {
      pl: "Full-Stack Developer",
      en: "Full-Stack Developer",
    },
    description: holicatchDescription,
    techDescription: holicatchTechDescription,
    technologies: [
      { name: "React", icon: "devicon-react-original" },
      { name: "TypeScript", icon: "devicon-typescript-plain" },
      { name: "Python", icon: "devicon-python-plain" },
      { name: "FastAPI", icon: "devicon-fastapi-plain" },
      { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
      { name: "Redis", icon: "devicon-redis-plain" },
      { name: "Docker", icon: "devicon-docker-plain" },
    ],
    features: holicatchFeatures,
    images: [
      holicatch1,
      holicatch2,
      holicatch3,
      holicatch4,
      holicatch5,
      holicatch6,
    ],
    links: {
      live: "https://holicatch.pl/",
    },
  },
  {
    id: "fin-insight",
    name: "Fin-Insight",
    role: {
      pl: "Full-Stack Developer",
      en: "Full-Stack Developer",
    },
    description: finInsightDescription,
    techDescription: finInsightTechDescription,

    technologies: [
      { name: "Java", icon: "devicon-java-plain" },
      { name: "Spring", icon: "devicon-spring-original" },
      { name: "React", icon: "devicon-react-original" },
      { name: "TypeScript", icon: "devicon-typescript-plain" },
      { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
      { name: "Docker", icon: "devicon-docker-plain" },
    ],
    features: finInsightFeatures,
    images: [
      fininsight1,
      fininsight2,
      fininsight3,
      fininsight4,
      fininsight5,
      fininsight6,
    ],
    links: {
      github: "https://github.com/AlfaTeam67/ZZPJ",
    },
  },
  {
    id: "hrk-crm",
    name: "HRK CRM",
    role: {
      pl: "Full-Stack Developer",
      en: "Full-Stack Developer",
    },
    description: hrkDescription,
    techDescription: hrkTechDescription,

    technologies: [
      { name: "React", icon: "devicon-react-original" },
      { name: "TypeScript", icon: "devicon-typescript-plain" },
      { name: "Python", icon: "devicon-python-plain" },
      { name: "FastAPI", icon: "devicon-fastapi-plain" },
      { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
      { name: "Docker", icon: "devicon-docker-plain" },
    ],
    features: hrkFeatures,
    images: [hrk1, hrk2, hrk3, hrk4, hrk5, hrkCert],
    links: {
      github: "https://github.com/AlfaTeam67/HRK",
    },
  },
];
