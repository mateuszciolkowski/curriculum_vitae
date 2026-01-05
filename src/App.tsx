import { useState } from "react";
import { CvPage } from "./components/CvPage";
import { HackathonsPage } from "./components/HackathonsPage";
import { LanguageProvider } from "./contexts/LanguageContext";

type View = "cv" | "hackathons";

export default function App() {
  const [view, setView] = useState<View>("cv");

  return (
    <LanguageProvider>
      {view === "hackathons" ? (
        <HackathonsPage onBackToCv={() => setView("cv")} />
      ) : (
        <CvPage onHackathonsClick={() => setView("hackathons")} />
      )}
    </LanguageProvider>
  );
}
