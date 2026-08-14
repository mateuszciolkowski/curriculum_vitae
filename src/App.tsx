import { useEffect, useRef, useState } from "react";
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
  const savedScrollY = useRef(0);

  const goToProjects = (id?: string) => {
    savedScrollY.current = window.scrollY;
    setInitialProjectId(id);
    setView("projects");
    window.scrollTo(0, 0);
  };
  const goToHackathons = (id?: string) => {
    savedScrollY.current = window.scrollY;
    setInitialHackathonId(id);
    setView("hackathons");
    window.scrollTo(0, 0);
  };
  const goBackToCv = () => setView("cv");

  useEffect(() => {
    if (view === "cv" && savedScrollY.current > 0) {
      const y = savedScrollY.current;
      savedScrollY.current = 0;
      requestAnimationFrame(() => requestAnimationFrame(() => window.scrollTo(0, y)));
    }
  }, [view]);

  return (
    <ThemeProvider>
      <LanguageProvider>
        {view === "hackathons" ? (
          <HackathonsPage onBackToCv={goBackToCv} initialHackathonId={initialHackathonId} />
        ) : view === "projects" ? (
          <ProjectsPage onBackToCv={goBackToCv} initialProjectId={initialProjectId} />
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
