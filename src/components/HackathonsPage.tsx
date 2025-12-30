import { useState } from "react";
import { HACKATHONS } from "../data/hackathons";
import { FaLinkedin, FaGithub } from "react-icons/fa";

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
      <div className="mx-auto flex flex-col gap-4 px-3 py-4 lg:flex-row max-w-[95%] lg:px-6 lg:py-6">
        {/* SIDEBAR */}
        <aside className="w-full shrink-0 rounded-3xl bg-slate-900/60 p-3 shadow-2xl ring-1 ring-slate-800/80 backdrop-blur-xl lg:w-65">
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
                className={`w-full rounded-2xl p-3 text-left transition-all duration-300 ${
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
        <main className="w-full flex-1 rounded-3xl bg-linear-to-br from-slate-900/90 via-slate-900/60 to-slate-900/90 p-3 md:p-5 lg:p-6 shadow-2xl ring-1 ring-slate-800/80 backdrop-blur-md">
          <div className="space-y-4">
            {/* SEKCJA: Tytuł po lewej + Opis po prawej */}
            <section className="bg-slate-800/10 p-3 md:p-4 rounded-2xl ring-1 ring-slate-800/50">
              <div className="flex flex-col lg:flex-row gap-3 lg:gap-4 lg:items-center">
                {/* Lewa strona - Tytuł (auto-width) */}
                <div className="shrink-0">
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-black tracking-tighter uppercase leading-tight text-white whitespace-nowrap">
                    {activeHackathon.name}
                  </h1>
                  <div className="mt-2 h-1 w-16 bg-cyan-500 rounded-full" />
                </div>

                {/* Prawa strona - Opis */}
                <div className="flex-1 lg:border-l lg:border-slate-700/50 lg:pl-4">
                  <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-medium">
                    {activeHackathon.description}
                  </p>
                </div>

                {/* Ikony po prawej */}
                <div className="flex flex-row lg:flex-col gap-2 shrink-0 lg:border-l lg:border-slate-700/50 lg:pl-4">
                  {activeHackathon.links?.github && (
                    <a
                      href={activeHackathon.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-9 h-9 bg-slate-800/50 hover:bg-slate-700 rounded-xl transition-all ring-1 ring-slate-700/50 hover:ring-slate-600"
                      title="GitHub"
                    >
                      <FaGithub className="text-lg text-slate-300 hover:text-white" />
                    </a>
                  )}
                  {(activeHackathon.links?.linkedin ||
                    activeHackathon.links?.article) && (
                    <a
                      href={
                        activeHackathon.links.linkedin ||
                        activeHackathon.links.article
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-9 h-9 bg-slate-800/50 hover:bg-blue-600 rounded-xl transition-all ring-1 ring-slate-700/50 hover:ring-blue-500"
                      title="LinkedIn"
                    >
                      <FaLinkedin className="text-lg text-slate-300 hover:text-white" />
                    </a>
                  )}
                </div>
              </div>
            </section>

            {/* GALLERY */}
            <section className="space-y-3">
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
                      className="max-h-130 w-full cursor-zoom-in object-contain rounded-lg transition-transform hover:scale-[1.01] duration-500"
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
