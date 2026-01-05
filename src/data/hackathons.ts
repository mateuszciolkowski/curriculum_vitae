export interface Hackathon {
  id: string;
  name: string;
  role: { pl: string; en: string };
  description: { pl: string; en: string };
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
    role: { pl: "Frontend", en: "Frontend" },
    description: {
      pl: `Moduł do aplikacji "Karta Łodzianina" gamifikujący życie miejskie poprzez punktowanie ekologicznych wyborów, udziału w wydarzeniach lokalnych i codziennych wyzwań generowanych przez AI. Wprowadza ranking osiedli oraz użytkowników, wzmacniając zaangażowanie mieszkańców. Projekt zdobył 1. miejsce podczas hackathonu ŁÓDŹ_HACK. Użyte technologie: React, Docker`,
      en: `A module for the "Lodz Citizen Card" app that gamifies urban life by awarding points for eco-friendly choices, participation in local events, and daily AI-generated challenges. It introduces rankings for neighborhoods and users, strengthening community engagement. The project won 1st place at the ŁÓDŹ_HACK hackathon. Technologies used: React, Docker`,
    },
    images: [
      new URL("../assets/images/fintech/kartalodz.png", import.meta.url).href,
      new URL("../assets/images/fintech/stronaglowna.png", import.meta.url)
        .href,
      new URL("../assets/images/fintech/ranking.png", import.meta.url).href,
      new URL("../assets/images/fintech/wydarzenia.png", import.meta.url).href,
      new URL("../assets/images/fintech/fintech_1.jpeg", import.meta.url).href,
      new URL("../assets/images/fintech/fintech_2.jpeg", import.meta.url).href,
      new URL("../assets/images/fintech/fintech_3.jpeg", import.meta.url).href,
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
    role: { pl: "Backend", en: "Backend" },
    description: {
      pl: "Daily tracker dla branży farmaceutycznej, dostarcza farmaceutom powiadomienia o nowych i wycofanych lekach oraz zmianach prawnych, eliminując potrzebę ręcznego przeglądania wielu źródeł. Projekt zajął 2. miejsce na hackathonie HackAndPlay. Użyte technologie: Django, React, Docker, Postgresql",
      en: "A daily tracker for the pharmaceutical industry that provides pharmacists with notifications about new and withdrawn medications, as well as legal changes, eliminating the need to manually browse multiple sources. The project won 2nd place at the HackAndPlay hackathon. Technologies used: Django, React, Docker, PostgreSQL",
    },
    images: [
      new URL("../assets/images/pharmaradar/Landing.png", import.meta.url).href,
      new URL("../assets/images/pharmaradar/News.png", import.meta.url).href,
      new URL("../assets/images/pharmaradar/pharmaradar_1.jpg", import.meta.url)
        .href,
      new URL(
        "../assets/images/pharmaradar/pharmaradar_2.jpeg",
        import.meta.url
      ).href,
      new URL("../assets/images/pharmaradar/pharmaradar_3.jpg", import.meta.url)
        .href,
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
    role: { pl: "Backend/DevOps", en: "Backend/DevOps" },
    description: {
      pl: "Aplikacja webowa wykorzystująca AI do analizy wpisów dziennikowych, oceniająca samopoczucie użytkowników i identyfikująca trendy emocjonalne na podstawie regularnych notatek. Automatyzuje proces monitoringu zdrowia psychicznego. Użyte technologie: FastAPI, React, Docker.",
      en: "A web application that uses AI to analyze journal entries, evaluating users' well-being and identifying emotional trends based on regular notes. It automates the mental health monitoring process. Technologies used: FastAPI, React, Docker.",
    },
    images: [
      new URL("../assets/images/wellness/powitalna.png", import.meta.url).href,
      new URL("../assets/images/wellness/pytania.png", import.meta.url).href,
      new URL("../assets/images/wellness/chat.png", import.meta.url).href,
      new URL("../assets/images/wellness/wykres.png", import.meta.url).href,
      new URL("../assets/images/wellness/wellness_1.jpeg", import.meta.url)
        .href,
      new URL("../assets/images/wellness/wellness_2.jpeg", import.meta.url)
        .href,
    ],
    links: {
      github: "https://github.com/mateuszciolkowski/HACKATHON_WELLNESS",
    },
  },
  {
    id: "synaptis",
    name: "Synaptis",
    role: { pl: "Backend/DevOps", en: "Backend/DevOps" },
    description: {
      pl: "Aplikacja webowa do analizy emocji pacjentów na podstawie danych biometrycznych z opaski, wizualizująca poziom stresu oraz emocji w trakcje sesji terapeutycznej. Projekt zdobył 2. miejsce na hackathonie UBIHACK 2.0. Użyte technologie: Django, React, Postgresql, Docker.",
      en: "A web application for analyzing patient emotions based on biometric data from a wristband, visualizing stress levels and emotions during therapeutic sessions. The project won 2nd place at the UBIHACK 2.0 hackathon. Technologies used: Django, React, PostgreSQL, Docker.",
    },
    images: [
      new URL("../assets/images/synaptis/landing.png", import.meta.url).href,
      new URL("../assets/images/synaptis/1.png", import.meta.url).href,
      new URL("../assets/images/synaptis/2.png", import.meta.url).href,
      new URL("../assets/images/synaptis/3.png", import.meta.url).href,
    ],
    links: {
      linkedin:
        "https://www.linkedin.com/posts/wiktor-kopczy%C5%84ski-cs_ubihack-hackathon-agkaejdaho-ugcPost-7396910253503565825-KA2m?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFlnawQBqCw9Q6vwOQL1mDH2epMRoqNzHp8",
      github: "https://github.com/mateuszciolkowski/HACKATHON_SYNAPTIS",
    },
  },
];
