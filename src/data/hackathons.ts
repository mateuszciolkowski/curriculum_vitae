export interface Hackathon {
  id: string;
  name: string;
  role: string;
  description: string;
  images: string[];
  links?: {
    github?: string;
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
    description:
      "Aplikacja fintech do porównywania kart oraz rankingów z ekranami rankingów, wydarzeń i strony głównej.",
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
      article:
        "https://www.linkedin.com/posts/lodzki-klaster-ict_lodzabrhack-activity-7402673072841039872-Arxh?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFlnawQBqCw9Q6vwOQL1mDH2epMRoqNzHp8",
    },
  },
  {
    id: "pharmaradar",
    name: "PharmaRadar",
    role: "Backend",
    description:
      "Platforma do śledzenia newsów farmaceutycznych, z landing page, listą newsów i ekranem analitycznym.",
    images: [
      "/src/assets/images/pharmaradar/Landing.png",
      "/src/assets/images/pharmaradar/News.png",
      "/src/assets/images/pharmaradar/pharmaradar_1.jpg",
      "/src/assets/images/pharmaradar/pharmaradar_2.jpeg",
      "/src/assets/images/pharmaradar/pharmaradar_3.jpg",
    ],
    links: {
      article:
        "https://www.linkedin.com/posts/p4_play-weplaybetter-hackandplay-activity-7389296147665874944-shiH?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFlnawQBqCw9Q6vwOQL1mDH2epMRoqNzHp8",
    },
  },
  {
    id: "wellness",
    name: "Wellness",
    role: "Backend/DevOps",
    description:
      "Aplikacja wellness do monitorowania nastroju, dziennika, czatu oraz wizualizacji danych stresu.",
    images: [
      "/src/assets/images/wellness/powitalna.png",
      "/src/assets/images/wellness/pytania.png",
      "/src/assets/images/wellness/chat.png",
      "/src/assets/images/wellness/wykres.png",
      "/src/assets/images/wellness/wellness_1.jpeg",
      "/src/assets/images/wellness/wellness_2.jpeg",
    ],
  },
  {
    id: "synaptis",
    name: "Synaptis",
    role: "Backend/DevOps",
    description:
      "Projekt z dopracowanym landingiem i kilkoma ekranami aplikacji, skupiony na prostym, czytelnym UX.",
    images: [
      "/src/assets/images/synaptis/landing.png",
      "/src/assets/images/synaptis/1.png",
      "/src/assets/images/synaptis/2.png",
      "/src/assets/images/synaptis/3.png",
    ],
    links: {
      article:
        "https://www.linkedin.com/posts/wiktor-kopczy%C5%84ski-cs_ubihack-hackathon-agkaejdaho-ugcPost-7396910253503565825-KA2m?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFlnawQBqCw9Q6vwOQL1mDH2epMRoqNzHp8",
    },
  },
];
