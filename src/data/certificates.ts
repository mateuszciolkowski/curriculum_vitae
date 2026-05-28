import bielikImg from "../assets/certificates/bielik.png";

export type Certificate = {
  id: string;
  name: { pl: string; en: string };
  issuer: string;
  date: string;
  description: { pl: string; en: string };
  image?: string;
  pdf?: string;
  url?: string;
  details?: {
    pl: { bullets: string[] };
    en: { bullets: string[] };
  };
};

export const CERTIFICATES: Certificate[] = [
  {
    id: "eskadra-bielika-rag",
    name: {
      pl: "Eskadra Bielika – Budowanie RAG na Google Cloud Platform",
      en: "Eskadra Bielika – Building RAG on Google Cloud Platform",
    },
    issuer: "Eskadra Bielika",
    date: "2025",
    description: {
      pl: "Warsztaty hands-on z budowania systemów RAG w oparciu o model Bielik i GCP. Praca na pełnym przepływie: przygotowanie danych, embeddingi, projektowanie agentów AI, orkiestracja (MCP), integracja z BigQuery oraz tworzenie UI.",
      en: "Hands-on workshop on building RAG systems using the Bielik model and GCP. Full pipeline: data preparation, embeddings, AI agent design, orchestration (MCP), BigQuery integration, and UI development.",
    },
    image: bielikImg,
    details: {
      pl: {
        bullets: [
          "Budowanie systemów RAG – dane, embeddingi, jakość odpowiedzi",
          "Projektowanie agentów AI i orkiestracja (MCP) zintegrowana z GCP i BigQuery",
          "Tworzenie UI oraz praca na realnych scenariuszach wdrożeniowych",
          "Nacisk na decyzje architektoniczne: koszty, wydajność i konsekwencje organizacyjne",
        ],
      },
      en: {
        bullets: [
          "Building RAG systems – data pipeline, embeddings, answer quality",
          "AI agent design and orchestration (MCP) integrated with GCP and BigQuery",
          "UI development and work on real-world deployment scenarios",
          "Focus on architectural decisions: costs, performance, and organizational impact",
        ],
      },
    },
  },
];
