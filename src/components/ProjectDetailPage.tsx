import { useState } from "react";
import { PROJECTS } from "../data/projects";
import { FaGithub, FaGlobe } from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../constants/translations";
import { buttonStyles } from "../styles/buttonStyles";

type ProjectDetailPageProps = {
  projectId: string;
  onBackToCv: () => void;
};

export function ProjectDetailPage({
  projectId,
  onBackToCv,
}: ProjectDetailPageProps) {
  const { language, setLanguage, t } = useLanguage();
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [fullscreenSrc, setFullscreenSrc] = useState<string | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const project = PROJECTS.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-100">
        <p>Project not found</p>
      </div>
    );
  }

  const technologies = [
    { name: "Node.js", icon: "devicon-nodejs-plain" },
    { name: "React.js", icon: "devicon-react-original" },
    { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
    { name: "Docker", icon: "devicon-docker-plain" },
  ];

  const totalSlides = project.images.length;
  const hasImages = totalSlides > 0;

  const goPrevSlide = () =>
    setActiveSlideIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  const goNextSlide = () =>
    setActiveSlideIndex((prev) => (prev + 1) % totalSlides);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) goNextSlide();
    else if (distance < -50) goPrevSlide();
  };

  return (
    <div className="min-h-screen text-slate-100 font-sans antialiased overflow-x-hidden bg-[#050816]">
      <div className="mx-auto flex flex-col gap-4 px-3 py-4 lg:flex-row max-w-[95%] lg:px-6 lg:py-6">
        {/* TOP BAR - Mobile only */}
        <div className="w-full flex gap-2 lg:hidden">
          <button
            onClick={onBackToCv}
            className={`flex-1 ${buttonStyles.dark}`}
          >
            ← {t(translations.backToCv)}
          </button>

          {project.links?.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-[2] ${buttonStyles.cyan}`}
            >
              <FaGlobe />
              {t(translations.viewApp)}
            </a>
          )}

          <button
            onClick={() => setLanguage(language === "pl" ? "en" : "pl")}
            className={buttonStyles.cyan}
          >
            {language === "pl" ? "EN" : "PL"}
          </button>
        </div>

        {/* MAIN CONTENT */}
        <main className="w-full flex-1 rounded-3xl bg-linear-to-br from-slate-900/90 via-slate-900/60 to-slate-900/90 p-3 md:p-5 lg:p-6 shadow-2xl ring-1 ring-slate-800/80 backdrop-blur-md lg:min-h-[calc(100vh-3rem)] order-1 lg:order-2">
          <div className="space-y-4">
            <section className="bg-slate-800/40 p-3 md:p-4 rounded-2xl ring-1 ring-slate-700/50">
              <div className="flex flex-col lg:flex-row gap-3 lg:gap-4 lg:items-center">
                <div className="shrink-0">
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-black tracking-tighter uppercase leading-tight text-white whitespace-nowrap">
                    {project.name}
                  </h1>
                  <div className="mt-2 h-1 w-16 bg-cyan-500 rounded-full" />
                </div>
                <div className="flex-1 lg:border-l lg:border-slate-700/50 lg:pl-4">
                  <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-medium">
                    {t(project.description)}
                  </p>
                </div>
                <div className="flex gap-2 shrink-0 lg:border-l lg:border-slate-700/50 lg:pl-4">
                  {project.links?.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-9 h-9 bg-slate-800/50 hover:bg-slate-700 rounded-xl transition-all ring-1 ring-slate-700/50"
                    >
                      <FaGithub className="text-lg text-slate-300 hover:text-white" />
                    </a>
                  )}
                </div>
              </div>
            </section>

            {hasImages && (
              <section className="space-y-3">
                <div className="flex items-center gap-2 md:gap-3">
                  <button
                    onClick={goPrevSlide}
                    className="flex h-10 w-10 md:h-12 md:w-12 shrink-0 items-center justify-center rounded-xl bg-slate-800/50 text-xl text-slate-400 ring-1 ring-slate-700 hover:bg-cyan-500 hover:text-slate-950 transition-all shadow-lg"
                  >
                    ‹
                  </button>
                  <div
                    className="relative flex-1 overflow-hidden rounded-4xl border-4 border-slate-800/50 bg-slate-950/50 shadow-2xl"
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                  >
                    <div className="flex h-full w-full items-center justify-center p-3 sm:p-5">
                      <img
                        src={project.images[activeSlideIndex]}
                        alt="Preview"
                        onClick={() =>
                          setFullscreenSrc(project.images[activeSlideIndex])
                        }
                        className="max-h-140 w-full cursor-zoom-in object-contain rounded-lg transition-transform hover:scale-[1.01] duration-500 select-none"
                      />
                    </div>
                  </div>
                  <button
                    onClick={goNextSlide}
                    className="flex h-10 w-10 md:h-12 md:w-12 shrink-0 items-center justify-center rounded-xl bg-slate-800/50 text-xl text-slate-400 ring-1 ring-slate-700 hover:bg-cyan-500 hover:text-slate-950 transition-all shadow-lg"
                  >
                    ›
                  </button>
                </div>
              </section>
            )}
          </div>
        </main>

        {/* SIDEBAR */}
        <aside className="w-full shrink-0 rounded-3xl bg-slate-900/80 p-3 shadow-2xl ring-1 ring-slate-800/80 backdrop-blur-xl lg:w-65 lg:min-h-[calc(100vh-3rem)] flex flex-col order-2 lg:order-1">
          <div className="hidden lg:flex gap-2 mb-4">
            <button
              onClick={onBackToCv}
              className={`flex-1 ${buttonStyles.dark}`}
            >
              ← {t(translations.backToCv)}
            </button>
            <button
              onClick={() => setLanguage(language === "pl" ? "en" : "pl")}
              className={buttonStyles.cyan}
            >
              {language === "pl" ? "EN" : "PL"}
            </button>
          </div>

          {project.links?.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full mb-6 ${buttonStyles.cyan}`}
            >
              <FaGlobe />
              {t(translations.viewApp)}
            </a>
          )}

          <h2 className="mb-4 px-2 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 border-l-2 border-slate-700 pl-4">
            {t(translations.technologies)}
          </h2>
          <div className="grid grid-cols-4 gap-2 mb-6">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col items-center justify-center gap-1 rounded-xl bg-slate-800/40 p-2.5 transition hover:bg-slate-700/60 ring-1 ring-slate-700/30 aspect-square"
                title={tech.name}
              >
                <i className={`${tech.icon} text-2xl text-slate-300`} />
              </div>
            ))}
          </div>

          {project.features && (
            <>
              <h2 className="mb-4 px-2 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 border-l-2 border-slate-700 pl-4">
                {t(translations.keyFeatures)}
              </h2>
              <div className="mb-6 space-y-2">
                {project.features[language].map(
                  (feature: string, index: number) => (
                    <div
                      key={index}
                      className="flex items-start gap-2 rounded-lg bg-slate-800/30 p-2.5 ring-1 ring-slate-700/30"
                    >
                      <span className="text-cyan-400 text-xs mt-0.5">•</span>
                      <span className="text-[11px] text-slate-300 leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ),
                )}
              </div>
            </>
          )}
          <div className="flex-1" />
        </aside>
      </div>

      {/* FULLSCREEN MODAL */}
      {fullscreenSrc && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
          onClick={() => setFullscreenSrc(null)}
        >
          <button className="absolute top-6 right-6 text-white text-[10px] font-bold uppercase tracking-widest bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition-all">
            {language === "pl" ? "Zamknij" : "Close"} ✕
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
