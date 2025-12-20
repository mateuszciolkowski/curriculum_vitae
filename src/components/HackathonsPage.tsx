import { useState } from "react";

const hackathons = [
  {
    id: "fintech",
    name: "Fintech Hackathon",
    role: "Full‑stack / Backend",
    description:
      "Aplikacja fintech do porównywania kart oraz rankingów z ekranami rankingów, wydarzeń i strony głównej.",
    images: [
      "/src/assets/images/fintech/stronaglowna.png",
      "/src/assets/images/fintech/ranking.png",
      "/src/assets/images/fintech/wydarzenia.png",
      "/src/assets/images/fintech/kartalodz.png",
    ],
  },
  {
    id: "pharmaradar",
    name: "PharmaRadar",
    role: "Backend / Data",
    description:
      "Platforma do śledzenia newsów farmaceutycznych, z landing page, listą newsów i ekranem analitycznym.",
    images: [
      "/src/assets/images/pharmaradar/Landing.png",
      "/src/assets/images/pharmaradar/News.png",
      "/src/assets/images/pharmaradar/Pharma.png",
    ],
  },
  {
    id: "wellness",
    name: "Wellness Tracker",
    role: "Full‑stack",
    description:
      "Aplikacja wellness do monitorowania nastroju, dziennika, czatu oraz wizualizacji danych stresu.",
    images: [
      "/src/assets/images/wellness/powitalna.png",
      "/src/assets/images/wellness/pytania.png",
      "/src/assets/images/wellness/chat.png",
      "/src/assets/images/wellness/wykres.png",
    ],
  },
  {
    id: "synaptis",
    name: "Synaptis",
    role: "Frontend / UX",
    description:
      "Projekt z dopracowanym landingiem i kilkoma ekranami aplikacji, skupiony na prostym, czytelnym UX.",
    images: [
      "/src/assets/images/synaptis/landing.png",
      "/src/assets/images/synaptis/1.png",
      "/src/assets/images/synaptis/2.png",
      "/src/assets/images/synaptis/3.png",
    ],
  },
];

type HackathonsPageProps = {
  onBackToCv: () => void;
};

export function HackathonsPage({ onBackToCv }: HackathonsPageProps) {
  const [activeHackathonId, setActiveHackathonId] = useState<string>("fintech");
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [fullscreenSrc, setFullscreenSrc] = useState<string | null>(null);

  const activeHackathon = hackathons.find((h) => h.id === activeHackathonId)!;
  const totalSlides = activeHackathon.images.length;

  const goPrevSlide = () =>
    setActiveSlideIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  const goNextSlide = () =>
    setActiveSlideIndex((prev) => (prev + 1) % totalSlides);

  return (
    <div className="min-h-screen text-slate-100 font-sans antialiased overflow-x-hidden bg-[#050816]">
      {/* Kontener dopasowany do CvPage: max-w-[98%] i mniejsze paddingi */}
      <div className="mx-auto flex flex-col gap-5 px-2 py-4 lg:flex-row lg:max-w-[98%] xl:max-w-[1600px] lg:px-4 lg:py-6">
        {/* SIDEBAR - Szerokość 260px jak w CvPage */}
        <aside className="w-full shrink-0 rounded-3xl bg-slate-900/60 p-5 shadow-2xl ring-1 ring-slate-800/80 backdrop-blur-xl lg:w-[260px]">
          <button
            onClick={onBackToCv}
            className="group mb-6 inline-flex items-center gap-2 rounded-xl bg-slate-800/50 px-4 py-2 text-[10px] font-bold text-cyan-400 ring-1 ring-slate-700/50 transition hover:bg-slate-700 hover:text-white"
          >
            ← Powrót do CV
          </button>

          <h2 className="mb-4 px-2 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 border-l-2 border-slate-700 pl-4">
            Projekty
          </h2>

          <div className="space-y-3">
            {hackathons.map((hack) => (
              <button
                key={hack.id}
                onClick={() => {
                  setActiveHackathonId(hack.id);
                  setActiveSlideIndex(0);
                }}
                className={`w-full rounded-2xl p-4 text-left transition-all duration-300 ${
                  activeHackathonId === hack.id
                    ? "bg-cyan-500 text-slate-950 shadow-md scale-[1.02]"
                    : "bg-slate-800/40 text-slate-200 hover:bg-slate-800 ring-1 ring-slate-700/30"
                }`}
              >
                <p
                  className={`text-[8px] uppercase tracking-widest font-black mb-1 ${
                    activeHackathonId === hack.id
                      ? "text-slate-950/60"
                      : "text-cyan-500"
                  }`}
                >
                  {hack.role}
                </p>
                <p className="text-xs font-black uppercase leading-tight">
                  {hack.name}
                </p>
              </button>
            ))}
          </div>
        </aside>

        {/* MAIN CONTENT - Rozszerzony flex-1 */}
        <main className="w-full flex-1 rounded-3xl bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-slate-900/90 p-5 md:p-8 lg:p-10 shadow-2xl ring-1 ring-slate-800/80 backdrop-blur-md">
          <div className="space-y-8">
            <header className="space-y-2 text-center">
              <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-cyan-400">
                Case Study
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter uppercase leading-none">
                {activeHackathon.name}
              </h1>
              <div className="mx-auto h-0.5 w-16 bg-cyan-500 rounded-full" />
            </header>

            <section className="text-center bg-slate-800/10 p-6 rounded-2xl ring-1 ring-slate-800/50">
              <p className="mx-auto max-w-4xl text-sm md:text-base text-slate-300 leading-relaxed font-medium">
                {activeHackathon.description}
              </p>
            </section>

            {/* GALLERY - Dopasowana do szerszego układu */}
            <section className="space-y-5">
              <div className="flex items-center gap-3">
                <button
                  onClick={goPrevSlide}
                  className="hidden md:flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-800/50 text-xl text-slate-400 ring-1 ring-slate-700 hover:bg-cyan-500 hover:text-slate-950 transition-all shadow-lg"
                >
                  ‹
                </button>

                <div className="relative flex-1 overflow-hidden rounded-[2rem] border-4 border-slate-800/50 bg-slate-950/50 shadow-2xl">
                  <div className="flex h-full w-full items-center justify-center p-3 sm:p-5">
                    <img
                      src={activeHackathon.images[activeSlideIndex]}
                      alt="Preview"
                      onClick={() =>
                        setFullscreenSrc(
                          activeHackathon.images[activeSlideIndex]
                        )
                      }
                      className="max-h-[550px] w-full cursor-zoom-in object-contain rounded-lg transition-transform hover:scale-[1.01] duration-500"
                    />
                  </div>

                  {/* Badge licznika */}
                  <div className="absolute top-5 right-5 rounded-lg bg-black/60 backdrop-blur-md px-3 py-1.5 text-[10px] font-bold text-white ring-1 ring-white/10">
                    {activeSlideIndex + 1} / {totalSlides}
                  </div>
                </div>

                <button
                  onClick={goNextSlide}
                  className="hidden md:flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-800/50 text-xl text-slate-400 ring-1 ring-slate-700 hover:bg-cyan-500 hover:text-slate-950 transition-all shadow-lg"
                >
                  ›
                </button>
              </div>

              {/* Nawigacja dolna (paski) */}
              <div className="flex justify-center gap-2">
                {activeHackathon.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveSlideIndex(index)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      index === activeSlideIndex
                        ? "w-10 bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.4)]"
                        : "w-2 bg-slate-700 hover:bg-slate-600"
                    }`}
                  />
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>

      {/* FULLSCREEN MODAL */}
      {fullscreenSrc && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
          onClick={() => setFullscreenSrc(null)}
        >
          <button className="absolute top-6 right-6 text-white text-[10px] font-bold uppercase tracking-widest bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition-all">
            Zamknij ✕
          </button>
          <img
            src={fullscreenSrc}
            className="max-h-full max-w-full object-contain shadow-2xl"
            alt="Fullscreen"
          />
        </div>
      )}
    </div>
  );
}
