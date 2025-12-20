import { useState } from "react";
import { CvPage } from "./components/CvPage";
import { HackathonsPage } from "./components/HackathonsPage";

type View = "cv" | "hackathons";

export default function App() {
  const [view, setView] = useState<View>("cv");

  if (view === "hackathons") {
    return <HackathonsPage onBackToCv={() => setView("cv")} />;
  }

  return <CvPage onHackathonsClick={() => setView("hackathons")} />;
}
