export interface Hackathon {
  id: string;
  name: string;
  role: string;
  description: string;
  images: string[];
  links?: {
    github?: string;
    linkedin?: string;
    live?: string;
    demo?: string;
    article?: string;
  };
}

export const HACKATHONS: Hackathon[] = [
  {
    id: "fintech",
    name: "Moje osiedle",
    role: "Frontend",
    description: `Moduł do aplikacji "Karta Łodzianina" gamifikujący życie miejskie poprzez punktowanie ekologicznych wyborów, udziału w wydarzeniach lokalnych i codziennych wyzwań generowanych przez AI. Wprowadza ranking osiedli oraz użytkowników, wzmacniając zaangażowanie mieszkańców. Projekt zdobył 1. miejsce podczas hackathonu ŁÓDŹ_HACK. Użyte technologie: React, Docker`,
    images: [
      "/src/assets/images/fintech/kartalodz.png",
      "/src/assets/images/fintech/stronaglowna.png",
      "/src/assets/images/fintech/ranking.png",
      "/src/assets/images/fintech/wydarzenia.png",
      "/src/assets/images/fintech/fintech_1.jpeg",
      "/src/assets/images/fintech/fintech_2.jpeg",
      "/src/assets/images/fintech/fintech_3.jpeg",
    ],
    links: {
      // article: "https://fintechcentral.pl/2025/12/19/lodz_hack-podsumowanie/",
      linkedin:
        "https://www.linkedin.com/posts/lodzki-klaster-ict_lodzabrhack-activity-7402673072841039872-Arxh?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFlnawQBqCw9Q6vwOQL1mDH2epMRoqNzHp8",
      github: "https://github.com/mateuszciolkowski/HACKATHON_MOJE_OSIEDLE",
    },
  },
  {
    id: "pharmaradar",
    name: "PharmaRadar",
    role: "Backend",
    description:
      "Daily tracker dla branży farmaceutycznej, dostarcza farmaceutom powiadomienia o nowych i wycofanych lekach oraz zmianach prawnych, eliminując potrzebę ręcznego przeglądania wielu źródeł. Projekt zajął 2. miejsce na hackathonie HackAndPlay. Użyte technologie: Django, React, Docker, Postgresql",
    images: [
      "/src/assets/images/pharmaradar/Landing.png",
      "/src/assets/images/pharmaradar/News.png",
      "/src/assets/images/pharmaradar/pharmaradar_1.jpg",
      "/src/assets/images/pharmaradar/pharmaradar_2.jpeg",
      "/src/assets/images/pharmaradar/pharmaradar_3.jpg",
    ],
    links: {
      linkedin:
        "https://www.linkedin.com/posts/p4_play-weplaybetter-hackandplay-activity-7389296147665874944-shiH?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFlnawQBqCw9Q6vwOQL1mDH2epMRoqNzHp8",
      github: "https://github.com/mateuszciolkowski/HACKATHON_PHARMARADAR",
    },
  },
  {
    id: "wellness",
    name: "Wellness",
    role: "Backend/DevOps",
    description:
      "Aplikacja webowa wykorzystująca AI do analizy wpisów dziennikowych, oceniająca samopoczucie użytkowników i identyfikująca trendy emocjonalne na podstawie regularnych notatek. Automatyzuje proces monitoringu zdrowia psychicznego. Użyte technologie: FastAPI, React, Docker.",
    images: [
      "/src/assets/images/wellness/powitalna.png",
      "/src/assets/images/wellness/pytania.png",
      "/src/assets/images/wellness/chat.png",
      "/src/assets/images/wellness/wykres.png",
      "/src/assets/images/wellness/wellness_1.jpeg",
      "/src/assets/images/wellness/wellness_2.jpeg",
    ],
    links: {
      github: "https://github.com/mateuszciolkowski/HACKATHON_WELLNESS",
    },
  },
  {
    id: "synaptis",
    name: "Synaptis",
    role: "Backend/DevOps",
    description:
      "Aplikacja webowa do analizy emocji pacjentów na podstawie danych biometrycznych z opaski, wizualizująca poziom stresu oraz emocji w trakcje sesji terapeutycznej. Projekt zdobył 2. miejsce na hackathonie UBIHACK 2.0. Użyte technologie : Django, React, Postgresql, Docker. ",
    images: [
      "/src/assets/images/synaptis/landing.png",
      "/src/assets/images/synaptis/1.png",
      "/src/assets/images/synaptis/2.png",
      "/src/assets/images/synaptis/3.png",
    ],
    links: {
      linkedin:
        "https://www.linkedin.com/posts/wiktor-kopczy%C5%84ski-cs_ubihack-hackathon-agkaejdaho-ugcPost-7396910253503565825-KA2m?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFlnawQBqCw9Q6vwOQL1mDH2epMRoqNzHp8",
      github: "https://github.com/mateuszciolkowski/HACKATHON_SYNAPTIS",
    },
  },
];
