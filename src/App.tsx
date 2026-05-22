import { useState } from "react";
import { CvPage } from "./components/CvPage";
import { HackathonsPage } from "./components/HackathonsPage";
import { ProjectsPage } from "./components/ProjectsPage";
import { LanguageProvider } from "./contexts/LanguageContext";
import { ThemeProvider } from "./contexts/ThemeContext";

type View = "cv" | "hackathons" | "projects";

export default function App() {
  const [view, setView] = useState<View>("cv");
  const [initialProjectId, setInitialProjectId] = useState<string | undefined>();
  const [initialHackathonId, setInitialHackathonId] = useState<string | undefined>();

  const goToProjects = (id?: string) => { setInitialProjectId(id); setView("projects"); window.scrollTo(0, 0); };
  const goToHackathons = (id?: string) => { setInitialHackathonId(id); setView("hackathons"); window.scrollTo(0, 0); };

  return (
    <ThemeProvider>
      <LanguageProvider>
        {view === "hackathons" ? (
          <HackathonsPage onBackToCv={() => setView("cv")} initialHackathonId={initialHackathonId} />
        ) : view === "projects" ? (
          <ProjectsPage onBackToCv={() => setView("cv")} initialProjectId={initialProjectId} />
        ) : (
          <CvPage
            onHackathonsClick={goToHackathons}
            onProjectsClick={goToProjects}
          />
        )}
      </LanguageProvider>
    </ThemeProvider>
  );
}
