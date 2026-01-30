import { useState } from "react";
import { CvPage } from "./components/CvPage";
import { HackathonsPage } from "./components/HackathonsPage";
import { ProjectDetailPage } from "./components/ProjectDetailPage";
import { LanguageProvider } from "./contexts/LanguageContext";

type View = "cv" | "hackathons" | "project-detail";

export default function App() {
  const [view, setView] = useState<View>("cv");
  const [activeProjectId, setActiveProjectId] = useState<string>("gymgate");

  const handleProjectClick = (projectId: string) => {
    setActiveProjectId(projectId);
    setView("project-detail");
  };

  return (
    <LanguageProvider>
      {view === "hackathons" ? (
        <HackathonsPage onBackToCv={() => setView("cv")} />
      ) : view === "project-detail" ? (
        <ProjectDetailPage
          projectId={activeProjectId}
          onBackToCv={() => setView("cv")}
        />
      ) : (
        <CvPage
          onHackathonsClick={() => setView("hackathons")}
          onProjectClick={handleProjectClick}
        />
      )}
    </LanguageProvider>
  );
}
