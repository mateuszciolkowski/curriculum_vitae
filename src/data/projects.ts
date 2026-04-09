import gymgate1 from "../assets/images/gymgate/gymgate1.png";
import gymgate2 from "../assets/images/gymgate/gymgate2.png";
import gymgate3 from "../assets/images/gymgate/gymgate3.png";
import gymgate4 from "../assets/images/gymgate/gymgate4.png";
import gymgate5 from "../assets/images/gymgate/gymgate5.png";
import gymgate6 from "../assets/images/gymgate/gymgate6.png";
import gymgate7 from "../assets/images/gymgate/gymgate7.png";

export interface Project {
  id: string;
  name: string;
  role: { pl: string; en: string };
  description: { pl: string; en: string };
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
      pl: "GymGate to inteligentny asystent treningowy, który pamięta każdy Twój trening, automatycznie zapisuje użyte ciężary i pomaga osiągać nowe rekordy osobiste. Dzięki zaawansowanemu systemowi statystyk możesz analizować swoje wyniki, obserwować progres i optymalizować plan treningowy.",
      en: "GymGate is an intelligent training assistant that remembers every workout, automatically saves your weights, and helps you achieve new personal records. With an advanced statistics system, you can analyze your results, observe progress, and optimize your training plan.",
    },
    features: {
      pl: [
        "Automatyczne zapamiętywanie ostatnio użytych ciężarów dla każdego ćwiczenia",
        "Śledzenie rekordów osobistych (PR) i historii postępów",
        "Tworzenie spersonalizowanych planów treningowych",
        "Definiowanie własnych ćwiczeń i kategorii",
        "Szczegółowe statystyki i wykresy postępów",
        "Intuicyjny interfejs do szybkiego logowania treningów",
      ],
      en: [
        "Automatic memory of last used weights for each exercise",
        "Personal records (PR) tracking and progress history",
        "Creating personalized training plans",
        "Defining custom exercises and categories",
        "Detailed statistics and progress charts",
        "Intuitive interface for quick workout logging",
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
