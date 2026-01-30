export interface Project {
  id: string;
  name: string;
  role: { pl: string; en: string };
  description: { pl: string; en: string };
  features?: { pl: string[]; en: string[] };
  images: string[];
  links?: {
    github?: string;
    live?: string;
    demo?: string;
  };
}

export const PROJECTS: Project[] = [
  {
    id: "gymgate",
    name: "GymGate",
    role: {
      pl: "Fullstack Developer",
      en: "Fullstack Developer",
    },
    description: {
      pl: "Kompleksowa aplikacja do śledzenia treningów siłowych, która rewolucjonizuje sposób monitorowania postępów na siłowni. GymGate to inteligentny asystent treningowy, który pamięta każdy Twój trening, automatycznie zapisuje użyte ciężary i pomaga osiągać nowe rekordy osobiste. Dzięki zaawansowanemu systemowi statystyk możesz analizować swoje wyniki, obserwować progres i optymalizować plan treningowy.",
      en: "A comprehensive strength training tracking application that revolutionizes the way you monitor your gym progress. GymGate is an intelligent training assistant that remembers every workout, automatically saves your weights, and helps you achieve new personal records. With an advanced statistics system, you can analyze your results, observe progress, and optimize your training plan.",
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
      new URL("../assets/images/gymgate/gymgate1.PNG", import.meta.url).href,
      new URL("../assets/images/gymgate/gymgate2.PNG", import.meta.url).href,
      new URL("../assets/images/gymgate/gymgate3.PNG", import.meta.url).href,
      new URL("../assets/images/gymgate/gymgate4.PNG", import.meta.url).href,
      new URL("../assets/images/gymgate/gymgate5.PNG", import.meta.url).href,
      new URL("../assets/images/gymgate/gymgate6.PNG", import.meta.url).href,
      new URL("../assets/images/gymgate/gymgate7.PNG", import.meta.url).href,
    ],
    links: {
      github: "https://github.com/mateuszciolkowski/gymgate",
      live: "https://gymgate.vercel.app/",
    },
  },
];
