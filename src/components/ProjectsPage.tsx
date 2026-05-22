import { useState, useEffect } from "react";
import { PROJECTS } from "../data/projects";
import { FaGithub, FaGlobe, FaArrowLeft } from "react-icons/fa";
import { HiSun, HiMoon } from "react-icons/hi";
import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";
import { translations } from "../constants/translations";
import { buttonStyles } from "../styles/buttonStyles";

type ProjectsPageProps = {
  onBackToCv: () => void;
  initialProjectId?: string;
};

const PAPER_BG = "bg-[#f4ecdc] dark:bg-[#1b1712]";

export function ProjectsPage({ onBackToCv, initialProjectId }: ProjectsPageProps) {
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [activeProjectId, setActiveProjectId] = useState<string>(
    initialProjectId ?? PROJECTS[0].id,
  );
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [fullscreenSrc, setFullscreenSrc] = useState<string | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const [isChangingSlide, setIsChangingSlide] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } });
    }, { threshold: 0.05 });
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [activeProjectId]);

  const activeProject = PROJECTS.find((p) => p.id === activeProjectId)!;
  const totalSlides = activeProject.images.length;

  const goPrevSlide = () => {
    setIsChangingSlide(true);
    setTimeout(() => {
      setActiveSlideIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
      setIsChangingSlide(false);
    }, 150);
  };
  const goNextSlide = () => {
    setIsChangingSlide(true);
    setTimeout(() => {
      setActiveSlideIndex((prev) => (prev + 1) % totalSlides);
      setIsChangingSlide(false);
    }, 150);
  };

  const minSwipeDistance = 50;
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const d = touchStart - touchEnd;
    if (d > minSwipeDistance) goNextSlide();
    else if (d < -minSwipeDistance) goPrevSlide();
  };

  const defaultTech = [
    { name: "Node.js", icon: "devicon-nodejs-plain" },
    { name: "React.js", icon: "devicon-react-original" },
    { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
    { name: "Docker", icon: "devicon-docker-plain" },
  ];

  return (
    <div
      className={`${PAPER_BG} min-h-screen text-stone-900 dark:text-stone-100 antialiased selection:bg-orange-700/20`}
    >
      {/* ── TOP BAR ── */}
      <div className={`border-b border-stone-300/70 dark:border-stone-700/60 bg-[#f4ecdc]/85 dark:bg-[#1b1712]/85 sticky top-0 z-30 backdrop-blur-md`}>
        <div className="mx-auto flex h-14 max-w-screen-xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
          <button onClick={onBackToCv} className={buttonStyles.paperGhostSmall}>
            <FaArrowLeft className="text-[10px]" />
            {t(translations.backToCv)}
          </button>

          <div className="hidden items-center gap-1 sm:flex">
            {[
              { label: "Stack", id: "proj-stack" },
              { label: language === "pl" ? "O projekcie" : "About", id: "proj-about" },
              { label: t(translations.gallery), id: "proj-gallery" },
            ].map(({ label, id }) => (
              <button
                key={id}
                onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })}
                className="rounded-md px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-stone-500 dark:text-stone-400 transition-all hover:text-stone-900 dark:hover:text-stone-100"
              >
                {label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="rounded-md border border-stone-300 dark:border-stone-600 bg-stone-100 dark:bg-[#2a2320] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-stone-700 dark:text-stone-200 transition-all hover:bg-stone-200 dark:hover:bg-[#3d3530]"
              aria-label="Toggle dark mode"
            >
              {theme === "light" ? <HiMoon className="text-sm" /> : <HiSun className="text-sm" />}
            </button>
            <button
              onClick={() => setLanguage(language === "pl" ? "en" : "pl")}
              className="rounded-md border border-stone-300 dark:border-stone-600 bg-stone-100 dark:bg-[#2a2320] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-stone-700 dark:text-stone-200 transition-all hover:bg-stone-200 dark:hover:bg-[#3d3530]"
            >
              {language === "pl" ? "EN" : "PL"}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`mx-auto flex max-w-screen-xl flex-col gap-8 px-4 py-10 sm:px-6 lg:flex-row lg:gap-12 lg:px-8 lg:py-14 transition-all duration-800 ease-[var(--ease-out)] ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* ── SIDEBAR (Table of Contents) ── */}
        <aside className="w-full shrink-0 lg:w-64 lg:sticky lg:top-20 lg:self-start">
          <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.35em] text-stone-500">
            {language === "pl" ? "Projekty" : "Projects"}
          </p>

          <ol className="flex flex-col">
            {PROJECTS.map((project, idx) => {
              const isActive = activeProjectId === project.id;
              return (
                <li key={project.id}>
                  <button
                    onClick={() => {
                      setActiveProjectId(project.id);
                      setActiveSlideIndex(0);
                    }}
                    className={`group relative w-full border-t border-stone-200 dark:border-stone-700/50 py-3 text-left transition-colors ${
                      idx === PROJECTS.length - 1 ? "border-b" : ""
                    } ${isActive ? "" : "hover:bg-stone-100/60 dark:hover:bg-[#2a2320]/60"}`}
                  >
                    <span
                      className={`absolute left-0 top-2 bottom-2 w-[2px] rounded-full transition-all ${
                        isActive ? "bg-orange-700" : "bg-transparent"
                      }`}
                    />
                    <div className="pl-3">
                      <p
                        className={`text-[10px] font-bold uppercase tracking-[0.25em] mb-1 ${
                          isActive ? "text-orange-700" : "text-stone-500"
                        }`}
                      >
                        {String(idx + 1).padStart(2, "0")} · {t(project.role)}
                      </p>
                      <div className="flex flex-wrap items-baseline gap-2">
                        <span
                          className={`text-sm font-bold uppercase tracking-tight leading-tight ${
                            isActive
                              ? "text-stone-900 dark:text-stone-100"
                              : "text-stone-700 dark:text-stone-300 group-hover:text-stone-900 dark:group-hover:text-stone-100"
                          }`}
                        >
                          {project.name}
                        </span>
                        {project.status && (
                          <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-orange-700">
                            · {project.status[language]}
                          </span>
                        )}
                      </div>
                    </div>
                  </button>
                </li>
              );
            })}
          </ol>
        </aside>

        {/* ── MAIN CONTENT ── */}
        <main className="w-full flex-1 min-w-0">
          {/* Header */}
          <header className="pb-8 border-b border-stone-300/70 dark:border-stone-700/50">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-orange-700">
                  {t(activeProject.role)}
                </p>
                <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[0.95] tracking-tight text-stone-900 dark:text-stone-100">
                  {activeProject.name}
                </h1>
              </div>

              {/* Links */}
              <div className="flex shrink-0 gap-2">
                {activeProject.links?.live && (
                  <a
                    href={activeProject.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Live"
                    className="flex h-10 w-10 items-center justify-center rounded-md bg-stone-100 dark:bg-[#2a2320] text-stone-600 dark:text-stone-300 ring-1 ring-stone-200 dark:ring-stone-600 transition-all hover:bg-orange-700 hover:text-[#f4ecdc] hover:ring-orange-700"
                  >
                    <FaGlobe className="text-base" />
                  </a>
                )}
                {activeProject.links?.github && (
                  <a
                    href={activeProject.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub"
                    className="flex h-10 w-10 items-center justify-center rounded-md bg-stone-100 dark:bg-[#2a2320] text-stone-600 dark:text-stone-300 ring-1 ring-stone-200 dark:ring-stone-600 transition-all hover:bg-stone-900 hover:text-[#f4ecdc] hover:ring-stone-900"
                  >
                    <FaGithub className="text-base" />
                  </a>
                )}
              </div>
            </div>
          </header>

          {/* Stack */}
          <section id="proj-stack" className="reveal flex items-baseline gap-4 sm:gap-8 lg:gap-12 py-10">
            <h2 className="shrink-0 text-[10px] font-bold uppercase tracking-[0.35em] text-stone-500">
              {language === "pl" ? "Stack" : "Stack"}
            </h2>
            <div className="flex flex-wrap gap-1.5">
              {(activeProject.technologies ?? defaultTech).map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-1.5 rounded-md bg-white dark:bg-[#2a2320] px-2.5 py-1.5 ring-1 ring-stone-200 dark:ring-[#3d3530] shadow-sm"
                >
                  <i className={`${tech.icon} text-sm`} />
                  <span className="text-[10px] font-bold uppercase tracking-tight text-stone-700 dark:text-stone-200">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <hr className="border-stone-300/70 dark:border-stone-700/50" />

          {/* Description */}
          <section id="proj-about" className="reveal flex items-baseline gap-4 sm:gap-8 lg:gap-12 py-10">
            <h2 className="shrink-0 text-[10px] font-bold uppercase tracking-[0.35em] text-stone-500">
              {language === "pl" ? "O projekcie" : "About"}
            </h2>
            <div className="max-w-3xl">
              <p className="text-base sm:text-lg leading-relaxed text-stone-700 dark:text-stone-300">
                {t(activeProject.description)}
              </p>
              {activeProject.features && (
                <ul className="mt-6 flex flex-col gap-2">
                  {activeProject.features[language].map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-stone-700 dark:text-stone-300">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-700" />
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </section>

          {activeProject.techDescription && (
            <>
              <hr className="border-stone-300/70 dark:border-stone-700/50" />
              <section className="flex items-baseline gap-4 sm:gap-8 lg:gap-12 py-10">
                <h2 className="shrink-0 text-[10px] font-bold uppercase tracking-[0.35em] text-stone-500">
                  {language === "pl" ? "Techniczny opis" : "Technical overview"}
                </h2>
                <div className="max-w-3xl">
                  <p className="text-sm sm:text-base leading-relaxed text-stone-600 dark:text-stone-400">
                    {t(activeProject.techDescription)}
                  </p>
                </div>
              </section>
            </>
          )}

          <hr className="border-stone-300/70 dark:border-stone-700/50" />

          {/* Gallery */}
          <section id="proj-gallery" className="reveal py-10">
            <div className="flex items-baseline gap-4 sm:gap-8 lg:gap-12 mb-6">
              <h2 className="shrink-0 text-[10px] font-bold uppercase tracking-[0.35em] text-stone-500">
                {t(translations.gallery)}
              </h2>
            </div>
            <div className="flex flex-col items-center gap-4 w-full max-w-4xl mx-auto">
              {activeProject.images.length === 0 ? (
                <div className="flex flex-col items-center justify-center gap-4 rounded-md border-2 border-dashed border-stone-300 dark:border-stone-600 bg-stone-50 dark:bg-[#2a2320] py-20">
                  <span className="text-5xl">🚧</span>
                  <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-stone-500">
                    {language === "pl"
                      ? "Zdjęcia wkrótce – projekt w trakcie"
                      : "Photos coming soon – project in progress"}
                  </p>
                </div>
              ) : (
                <>
                  <div className="flex w-full items-center gap-2 md:gap-3">
                    <button
                      onClick={goPrevSlide}
                      className="flex h-10 w-10 md:h-12 md:w-12 shrink-0 items-center justify-center rounded-md bg-white text-xl text-stone-600 ring-1 ring-stone-200 transition-all hover:bg-orange-700 hover:text-[#f4ecdc] hover:ring-orange-700 shadow-sm"
                    >
                      ‹
                    </button>

                    <div
                      className="relative flex-1 overflow-hidden rounded-md"
                      onTouchStart={onTouchStart}
                      onTouchMove={onTouchMove}
                      onTouchEnd={onTouchEnd}
                    >
                      <div
                        className={`flex h-full w-full items-center justify-center transition-all duration-300 ease-[var(--ease-out)] ${
                          isChangingSlide
                            ? "opacity-40 blur-sm scale-95"
                            : "opacity-100 blur-0 scale-100"
                        }`}
                      >
                        <img
                          src={activeProject.images[activeSlideIndex]}
                          alt="Preview"
                          onClick={() =>
                            setFullscreenSrc(
                              activeProject.images[activeSlideIndex],
                            )
                          }
                          className="max-h-130 w-full cursor-zoom-in object-contain rounded-lg transition-transform hover:scale-[1.01] duration-500 select-none"
                        />
                      </div>

                      <div className="absolute top-4 right-4 rounded-md bg-stone-900/80 backdrop-blur-md px-3 py-1 text-[10px] font-bold tracking-[0.15em] text-[#f4ecdc]">
                        {activeSlideIndex + 1} / {totalSlides}
                      </div>
                    </div>

                    <button
                      onClick={goNextSlide}
                      className="flex h-10 w-10 md:h-12 md:w-12 shrink-0 items-center justify-center rounded-md bg-white text-xl text-stone-600 ring-1 ring-stone-200 transition-all hover:bg-orange-700 hover:text-[#f4ecdc] hover:ring-orange-700 shadow-sm"
                    >
                      ›
                    </button>
                  </div>

                  <div className="flex justify-center gap-2 pt-2">
                    {activeProject.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveSlideIndex(index)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          index === activeSlideIndex
                            ? "w-10 bg-orange-700"
                            : "w-2 bg-stone-300 hover:bg-stone-400"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </section>
        </main>
      </div>

      {/* Fullscreen modal */}
      {fullscreenSrc && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/90 p-4 backdrop-blur-sm"
          onClick={() => setFullscreenSrc(null)}
        >
          <button className="absolute top-6 right-6 rounded-md bg-orange-700 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#f4ecdc] transition-all hover:bg-orange-800 active:scale-95">
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
