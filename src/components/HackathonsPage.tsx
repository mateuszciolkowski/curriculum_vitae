import { useState } from "react";
import { HACKATHONS } from "../data/hackathons";

type HackathonsPageProps = {
  onBackToCv: () => void;
};

export function HackathonsPage({ onBackToCv }: HackathonsPageProps) {
  const [activeHackathonId, setActiveHackathonId] = useState<string>("fintech");
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [fullscreenSrc, setFullscreenSrc] = useState<string | null>(null);

  const activeHackathon = HACKATHONS.find((h) => h.id === activeHackathonId)!;
  const totalSlides = activeHackathon.images.length;

  const goPrevSlide = () =>
    setActiveSlideIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  const goNextSlide = () =>
    setActiveSlideIndex((prev) => (prev + 1) % totalSlides);

  return (
    <div className="min-h-screen text-slate-100 font-sans antialiased overflow-x-hidden bg-[#050816]">
      <div className="mx-auto flex flex-col gap-6 px-4 py-8 lg:flex-row max-w-[95%] lg:px-8 lg:py-12">
        {/* SIDEBAR */}
        <aside className="w-full shrink-0 rounded-3xl bg-slate-900/60 p-5 shadow-2xl ring-1 ring-slate-800/80 backdrop-blur-xl lg:w-65">
          <button
            onClick={onBackToCv}
            className="group mb-6 inline-flex items-center gap-2 rounded-xl bg-slate-800/50 px-4 py-2 text-[15px] font-bold text-cyan-400 ring-1 ring-slate-700/50 transition hover:bg-slate-700 hover:text-white"
          >
            ← Powrót do CV
          </button>

          <h2 className="mb-4 px-2 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 border-l-2 border-slate-700 pl-4">
            Projekty
          </h2>

          <div className="space-y-3">
            {HACKATHONS.map((hack) => (
              <button
                key={hack.id}
                onClick={() => {
                  setActiveHackathonId(hack.id);
                  setActiveSlideIndex(0);
                }}
                className={`w-full rounded-2xl p-5 text-left transition-all duration-300 ${
                  activeHackathonId === hack.id
                    ? "bg-cyan-500 text-slate-950 shadow-md scale-[1.02]"
                    : "bg-slate-800/40 text-slate-200 hover:bg-slate-800 ring-1 ring-slate-700/30"
                }`}
              >
                <p
                  className={`text-[10px] uppercase tracking-widest font-black mb-2 ${
                    activeHackathonId === hack.id
                      ? "text-slate-950/60"
                      : "text-cyan-500"
                  }`}
                >
                  {hack.role}
                </p>
                <p className="text-sm md:text-base font-black uppercase leading-tight">
                  {hack.name}
                </p>
              </button>
            ))}
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="w-full flex-1 rounded-3xl bg-linear-to-br from-slate-900/90 via-slate-900/60 to-slate-900/90 p-5 md:p-8 lg:p-10 shadow-2xl ring-1 ring-slate-800/80 backdrop-blur-md">
          <div className="space-y-8">
            {/* SEKCJA: Tytuł po lewej + Opis po prawej */}
            <section className="bg-slate-800/10 p-6 md:p-8 rounded-2xl ring-1 ring-slate-800/50">
              <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 lg:items-center">
                {/* Lewa strona - Tytuł (auto-width) */}
                <div className="shrink-0">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter uppercase leading-tight text-white whitespace-nowrap">
                    {activeHackathon.name}
                  </h1>
                  <div className="mt-3 h-1 w-20 bg-cyan-500 rounded-full" />
                </div>

                {/* Prawa strona - Opis */}
                <div className="flex-1 lg:border-l lg:border-slate-700/50 lg:pl-6">
                  <p className="text-sm md:text-base text-slate-300 leading-relaxed font-medium">
                    {activeHackathon.description}
                  </p>
                </div>
              </div>
            </section>

            {/* LINKI DO PROJEKTU */}
            {activeHackathon.links && (
              <div className="flex flex-wrap gap-3">
                {activeHackathon.links.github && (
                  <a
                    href={activeHackathon.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 hover:bg-slate-700 text-cyan-400 hover:text-white rounded-xl text-sm font-bold transition-all ring-1 ring-slate-700/50 hover:ring-cyan-500/50"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
                )}

                {activeHackathon.links.live && (
                  <a
                    href={activeHackathon.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-slate-950 rounded-xl text-sm font-bold transition-all shadow-lg hover:shadow-cyan-500/50"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    Live Demo
                  </a>
                )}

                {activeHackathon.links.article && (
                  <a
                    href={activeHackathon.links.article}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#0A66C2] hover:bg-[#004182] text-white rounded-xl text-sm font-bold transition-all shadow-lg"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    Artykuł
                  </a>
                )}

                {activeHackathon.links.demo && (
                  <a
                    href={activeHackathon.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 hover:bg-slate-700 text-cyan-400 hover:text-white rounded-xl text-sm font-bold transition-all ring-1 ring-slate-700/50 hover:ring-cyan-500/50"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                    Video Demo
                  </a>
                )}
              </div>
            )}

            {/* GALLERY */}
            <section className="space-y-5">
              <div className="flex items-center gap-3">
                <button
                  onClick={goPrevSlide}
                  className="hidden md:flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-800/50 text-xl text-slate-400 ring-1 ring-slate-700 hover:bg-cyan-500 hover:text-slate-950 transition-all shadow-lg"
                >
                  ‹
                </button>

                <div className="relative flex-1 overflow-hidden rounded-4xl border-4 border-slate-800/50 bg-slate-950/50 shadow-2xl">
                  <div className="flex h-full w-full items-center justify-center p-3 sm:p-5">
                    <img
                      src={activeHackathon.images[activeSlideIndex]}
                      alt="Preview"
                      onClick={() =>
                        setFullscreenSrc(
                          activeHackathon.images[activeSlideIndex]
                        )
                      }
                      className="max-h-137.5 w-full cursor-zoom-in object-contain rounded-lg transition-transform hover:scale-[1.01] duration-500"
                    />
                  </div>

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
