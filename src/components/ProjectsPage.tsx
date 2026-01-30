import { type ReactElement, useState } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowLeft,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../constants/translations";
import { PROJECTS } from "../data/projects";

type ProjectsPageProps = {
  onBackToCv: () => void;
};

export function ProjectsPage({ onBackToCv }: ProjectsPageProps): ReactElement {
  const { language, setLanguage, t } = useLanguage();
  const [activeSlide, setActiveSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const project = PROJECTS[0]; // Na razie tylko GymGate
  const hasImages = project.images.length > 0;

  // Swipe handlers
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
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && activeSlide < project.images.length - 1) {
      setActiveSlide((prev) => prev + 1);
    }
    if (isRightSwipe && activeSlide > 0) {
      setActiveSlide((prev) => prev - 1);
    }
  };

  return (
    <div className="min-h-screen text-slate-100 font-sans antialiased overflow-x-hidden">
      <div className="mx-auto max-w-6xl px-4 py-6 lg:px-8 lg:py-10">
        {/* Header */}
        <header className="mb-8 space-y-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="space-y-2">
              <button
                onClick={onBackToCv}
                className="flex items-center gap-2 text-xs font-bold text-cyan-400 uppercase tracking-widest hover:text-cyan-300 transition-colors group"
              >
                <FaArrowLeft className="text-xs group-hover:-translate-x-1 transition-transform" />
                {t(translations.backToCv)}
              </button>
              <h1 className="text-4xl md:text-5xl font-black tracking-tighter leading-none uppercase">
                {t(translations.myPersonalProjects)}
              </h1>
            </div>
            <button
              onClick={() => setLanguage(language === "pl" ? "en" : "pl")}
              className="flex items-center justify-center rounded-lg bg-cyan-500 px-4 py-2 text-xs font-bold text-slate-950 uppercase tracking-wider shadow-lg transition-all hover:bg-cyan-600 w-fit"
            >
              {language === "pl" ? "EN" : "PL"}
            </button>
          </div>
        </header>

        {/* Project Card */}
        <div className="rounded-3xl bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-slate-900/90 p-6 md:p-8 shadow-2xl ring-1 ring-slate-800/80 backdrop-blur-md">
          <div className="space-y-6">
            {/* Project Header */}
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3 flex-wrap">
                  <h2 className="text-3xl md:text-4xl font-black italic text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 uppercase tracking-tight">
                    {project.name}
                  </h2>
                  <span
                    className={`flex items-center h-6 text-xs px-3 rounded-lg border font-bold uppercase tracking-widest ${
                      project.status === "in-progress"
                        ? "bg-amber-500/10 text-amber-500 border-amber-500/20"
                        : "bg-green-500/10 text-green-500 border-green-500/20"
                    }`}
                  >
                    {project.status === "in-progress"
                      ? t(translations.inProgress)
                      : t(translations.completed)}
                  </span>
                </div>
                <p className="text-sm text-slate-400 uppercase tracking-wider">
                  <span className="text-cyan-400 font-bold">
                    {t(translations.role)}:
                  </span>{" "}
                  {t(project.role)}
                </p>
              </div>

              {/* Links */}
              <div className="flex gap-2">
                {project.links?.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-slate-800/50 hover:bg-slate-700 rounded-lg transition-all ring-1 ring-slate-700/50 hover:ring-slate-600 text-sm font-bold uppercase tracking-wider"
                  >
                    <FaGithub />
                    GitHub
                  </a>
                )}
                {project.links?.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-slate-950 rounded-lg transition-all text-sm font-bold uppercase tracking-wider"
                  >
                    <FaExternalLinkAlt />
                    {t(translations.liveDemo)}
                  </a>
                )}
              </div>
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="flex items-center h-7 text-xs px-3 bg-cyan-500/10 text-cyan-400 rounded-lg border border-cyan-500/20 uppercase font-bold tracking-widest"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Description */}
            <div className="space-y-2">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-200">
                {t(translations.projectDetails)}
              </h3>
              <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                {t(project.description)}
              </p>
            </div>

            {/* Gallery Section */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-200">
                {t(translations.gallery)}
              </h3>

              {hasImages ? (
                <div className="relative">
                  {/* Image Slider */}
                  <div
                    className="relative w-full aspect-video bg-slate-800/50 rounded-2xl overflow-hidden ring-1 ring-slate-700/50"
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                  >
                    <img
                      src={project.images[activeSlide]}
                      alt={`${project.name} - ${activeSlide + 1}`}
                      className="w-full h-full object-cover"
                    />

                    {/* Navigation Arrows */}
                    {project.images.length > 1 && (
                      <>
                        <button
                          onClick={() =>
                            setActiveSlide((prev) => Math.max(0, prev - 1))
                          }
                          disabled={activeSlide === 0}
                          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center justify-center ring-1 ring-slate-700/50"
                        >
                          <FaChevronLeft className="text-white" />
                        </button>
                        <button
                          onClick={() =>
                            setActiveSlide((prev) =>
                              Math.min(project.images.length - 1, prev + 1),
                            )
                          }
                          disabled={activeSlide === project.images.length - 1}
                          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center justify-center ring-1 ring-slate-700/50"
                        >
                          <FaChevronRight className="text-white" />
                        </button>
                      </>
                    )}

                    {/* Slide Counter */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-slate-900/80 text-xs font-bold text-white">
                      {activeSlide + 1} / {project.images.length}
                    </div>
                  </div>

                  {/* Thumbnails */}
                  {project.images.length > 1 && (
                    <div className="flex gap-2 mt-3 overflow-x-auto pb-2">
                      {project.images.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveSlide(idx)}
                          className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden ring-2 transition-all ${
                            idx === activeSlide
                              ? "ring-cyan-500 scale-105"
                              : "ring-slate-700/50 opacity-60 hover:opacity-100"
                          }`}
                        >
                          <img
                            src={img}
                            alt={`Thumbnail ${idx + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div className="w-full aspect-video bg-slate-800/50 rounded-2xl ring-1 ring-slate-700/50 flex items-center justify-center">
                  <p className="text-slate-400 text-sm italic">
                    {t(translations.noImages)}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
