import { type ReactElement, useState, useEffect } from "react";
import { TECHNOLOGIES } from "../constants/technologies";
import { SKILLS } from "../constants/skills";
import { HOBBIES } from "../constants/hobbies";
import { PROJECTS } from "../data/projects";
import { FaGithub, FaLinkedin, FaDownload, FaGlobe } from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../constants/translations";
import { buttonStyles } from "../styles/buttonStyles";
import cvPdfPL from "../assets/cv/CV_MATEUSZ_CIOLKOWSKI_PL.pdf";
import cvPdfEN from "../assets/cv/CV_MATEUSZ_CIOLKOWSKI_ENG.pdf";

type CvPageProps = {
  onHackathonsClick: () => void;
  onProjectClick: (projectId: string) => void;
};

export function CvPage({
  onHackathonsClick,
  onProjectClick,
}: CvPageProps): ReactElement {
  const { language, setLanguage, t } = useLanguage();
  const [selectedHobby, setSelectedHobby] = useState<
    (typeof HOBBIES)[number] | null
  >(null);
  const [activeHobbySlide, setActiveHobbySlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (selectedHobby) {
      // Small delay to trigger the transition after mounting
      const timer = setTimeout(() => setShowModal(true), 10);
      return () => clearTimeout(timer);
    } else {
      setShowModal(false);
    }
  }, [selectedHobby]);

  const cvPdf = language === "pl" ? cvPdfPL : cvPdfEN;
  const defaultProjectTechnologies = [
    { name: "Node.js", icon: "devicon-nodejs-plain" },
    { name: "React.js", icon: "devicon-react-original" },
    { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
    { name: "Docker", icon: "devicon-docker-plain" },
  ];

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
    if (!touchStart || !touchEnd || !selectedHobby) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      setActiveHobbySlide((prev) => (prev + 1) % selectedHobby.images.length);
    } else if (isRightSwipe) {
      setActiveHobbySlide(
        (prev) =>
          (prev - 1 + selectedHobby.images.length) %
          selectedHobby.images.length,
      );
    }
  };

  return (
    <>
      <div className="min-h-screen text-slate-100 font-sans antialiased overflow-x-hidden">
        <div
          className={`flex flex-col gap-4 px-4 py-4 sm:px-6 sm:py-5 lg:flex-row lg:px-8 lg:py-6 xl:px-12 xl:py-8 2xl:px-20 2xl:py-10 lg:gap-6 xl:gap-8 transition-all duration-1000 ease-[var(--ease-out)] ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {/* LEWA STRONA (SIDEBAR) - na mobile druga */}
          <aside
            className={`w-full lg:w-80 xl:w-96 lg:shrink-0 rounded-3xl bg-linear-to-br from-slate-900/90 via-slate-900/60 to-slate-900/90 p-4 xl:p-6 shadow-2xl ring-1 ring-slate-800/80 backdrop-blur-md order-2 lg:order-1 transition-all duration-700 delay-300 ease-[var(--ease-out)] ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
          >
            <div className="text-center pt-2">
              <button
                onClick={onHackathonsClick}
                className={`w-full mb-4 py-4 ${buttonStyles.cyan}`}
              >
                {t(translations.hackathons)}
              </button>
            </div>

            <h2 className="mb-5 px-2 text-xs font-bold uppercase tracking-[0.3em] text-cyan-400 border-l-2 border-cyan-500 pl-4">
              {t(translations.toolsAndTech)}
            </h2>
            <div className="grid grid-cols-4 gap-2 mb-8">
              {TECHNOLOGIES.map((tech, idx) => (
                <div
                  key={tech.name}
                  style={{ transitionDelay: `${400 + idx * 40}ms` }}
                  className={`flex flex-col items-center justify-center gap-1.5 rounded-xl bg-slate-800/40 p-2 transition-all duration-500 ease-[var(--ease-out)] hover:bg-slate-700/60 aspect-square hover:scale-105 active:scale-95 cursor-default group ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                >
                  <i
                    className={`${tech.className} text-xl xl:text-2xl transition-transform duration-300 ease-[var(--ease-out)] group-hover:scale-110 ${
                      tech.name === "Python" ? "text-[#3776AB]" : ""
                    }`}
                  />
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter truncate w-full text-center">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>

            <h2 className="mb-5 px-2 text-xs font-bold uppercase tracking-[0.3em] text-cyan-400 border-l-2 border-cyan-500 pl-4">
              {t(translations.skills)}
            </h2>
            <div className="flex flex-col gap-3 px-2 mb-8">
              {SKILLS.map((skill, idx) => (
                "category" in skill ? (
                  <div
                    key={idx}
                    style={{ transitionDelay: `${600 + idx * 50}ms` }}
                    className={`flex flex-col gap-1.5 transition-all duration-500 ease-[var(--ease-out)] ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="h-1 w-1 shrink-0 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.6)]" />
                      <span className="text-xs md:text-sm font-medium text-slate-300">
                        {t(skill.category)}
                      </span>
                    </div>
                    <div className="flex flex-col gap-1 pl-5">
                      {t(skill).split(", ").map((item) => (
                        <div key={item} className="flex items-center gap-2">
                          <span className="h-px w-2 shrink-0 bg-slate-600" />
                          <span className="text-xs text-slate-400">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div
                    key={idx}
                    style={{ transitionDelay: `${600 + idx * 50}ms` }}
                    className={`flex items-center gap-2 group transition-all duration-500 ease-[var(--ease-out)] ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                  >
                    <span className="h-1 w-1 shrink-0 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.6)]" />
                    <span className="text-xs md:text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                      {t(skill)}
                    </span>
                  </div>
                )
              ))}
            </div>

            <h2 className="mb-5 px-2 text-xs font-bold uppercase tracking-[0.3em] text-cyan-400 border-l-2 border-cyan-500 pl-4">
              {t(translations.languages)}
            </h2>
            <div className="flex flex-col gap-3 px-2 mb-8">
              {[
                { labelKey: translations.langPolish, level: t(translations.langNative), percent: 100 },
                { labelKey: translations.langEnglish, level: "B2", percent: 72 },
              ].map(({ labelKey, level, percent }) => (
                <div key={level} className="flex flex-col gap-1">
                  <div className="flex justify-between items-center">
                    <span className="text-xs md:text-sm font-medium text-slate-300">{t(labelKey)}</span>
                    <span className="text-xs font-black uppercase tracking-widest text-cyan-400">{level}</span>
                  </div>
                  <div className="h-1 w-full rounded-full bg-slate-800">
                    <div
                      className="h-1 rounded-full bg-linear-to-r from-cyan-500 to-blue-500 shadow-[0_0_6px_rgba(6,182,212,0.5)] transition-all duration-1000"
                      style={{ width: mounted ? `${percent}%` : "0%" }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <h2 className="mb-5 px-2 text-xs font-bold uppercase tracking-[0.3em] text-cyan-400 border-l-2 border-cyan-500 pl-4">
              {t(translations.hobbies)}
            </h2>
            <div className="flex flex-col gap-3 px-2">
              {HOBBIES.map((hobby, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedHobby(hobby)}
                  className="flex items-center gap-2 w-full text-left p-2 rounded-xl bg-slate-800/30 hover:bg-slate-700/60 transition-all group ring-1 ring-transparent hover:ring-cyan-500/50 hover:shadow-[0_0_12px_rgba(6,182,212,0.3)]"
                >
                  <span className="text-xl group-hover:scale-110 transition-transform">
                    {hobby.icon}
                  </span>
                  <span className="text-xs md:text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                    {t(hobby.label)}
                  </span>
                </button>
              ))}
            </div>
          </aside>

          {/* PRAWA STRONA (MAIN CONTENT) - na mobile pierwsza */}
          <main
            className={`w-full flex-1 rounded-3xl bg-linear-to-br from-slate-900/90 via-slate-900/60 to-slate-900/90 p-4 md:p-6 xl:p-8 shadow-2xl ring-1 ring-slate-800/80 backdrop-blur-md order-1 lg:order-2 transition-all duration-700 delay-150 ease-[var(--ease-out)] ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          >
            <div className="space-y-5 lg:space-y-6">
              <header className="space-y-2 text-center lg:text-left">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="space-y-1">
                    <p className="text-xs font-bold uppercase tracking-[0.4em] text-cyan-400">
                      {t(translations.jobTitle)}
                    </p>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-black tracking-tighter leading-none uppercase">
                      Mateusz <br className="sm:hidden" />
                      <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">
                        Ciołkowski
                      </span>
                    </h1>
                  </div>

                  <div className="flex flex-col items-center lg:items-end gap-2 lg:border-l lg:border-slate-700/50 lg:pl-6">
                    <div className="flex gap-2">
                      <a
                        href={cvPdf}
                        download={`CV_Mateusz_Ciolkowski_${
                          language === "pl" ? "PL" : "EN"
                        }.pdf`}
                        className="flex items-center justify-center gap-2 rounded-lg bg-slate-800/50 px-4 py-2 text-xs font-bold text-slate-200 uppercase tracking-wider shadow-lg transition-all hover:bg-slate-700 hover:text-white ring-1 ring-slate-700/50"
                      >
                        <FaDownload className="text-xs" />
                        {t(translations.downloadCv)}
                      </a>
                      <button
                        onClick={() =>
                          setLanguage(language === "pl" ? "en" : "pl")
                        }
                        className={buttonStyles.cyan}
                      >
                        {language === "pl" ? "EN" : "PL"}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 text-slate-400 border-y border-slate-800/30 py-4">
                  <a
                    href="mailto:ciolkowski.m1@gmail.com"
                    className="flex items-center gap-2 text-xs font-bold hover:text-cyan-400 transition-all uppercase tracking-widest group"
                  >
                    <i className="devicon-google-plain text-sm group-hover:text-cyan-400" />
                    {t(translations.email)}
                  </a>
                  <a
                    href="https://github.com/mateuszciolkowski"
                    className="flex items-center gap-2 text-xs font-bold hover:text-cyan-400 transition-all uppercase tracking-widest group"
                  >
                    <i className="devicon-github-original text-sm group-hover:text-cyan-400" />
                    {t(translations.github)}
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mateuszciolkowski"
                    className="flex items-center gap-2 text-xs font-bold hover:text-cyan-400 transition-all uppercase tracking-widest group"
                  >
                    <i className="devicon-linkedin-plain text-sm group-hover:text-cyan-400" />
                    {t(translations.linkedin)}
                  </a>
                </div>
                <p className="mx-auto lg:mx-0 max-w-2xl text-sm text-slate-300 leading-relaxed">
                  {t(translations.aboutIntro)}{" "}
                  <span className="font-semibold text-white">
                    Java, Python, JavaScript
                  </span>
                  {t(translations.aboutIntro2)}{" "}
                  <span className="font-semibold text-white">Spring, Django, FastAPI, React.js</span>
                  {t(translations.aboutIntro3)}
                </p>
              </header>

              <section className="space-y-2 text-center lg:text-left">
                <h2 className="text-xs lg:text-sm font-bold uppercase tracking-[0.2em] text-slate-200">
                  {t(translations.aboutMe)}
                </h2>
                <p className="max-w-4xl text-sm text-slate-400 leading-relaxed">
                  {t(translations.aboutMe1)}{" "}
                  <span className="font-semibold text-white">
                    {t(translations.university)}
                  </span>{" "}
                  {t(translations.aboutMe2)}{" "}
                  <span className="font-semibold text-white">
                    {t(translations.hackathonsWord)}
                  </span>
                  {t(translations.aboutMe3)}
                </p>
              </section>

              <section className="space-y-2.5">
                <h2 className="text-xs lg:text-sm font-bold uppercase tracking-[0.2em] text-slate-200 text-center lg:text-left">
                  {t(translations.education)}
                </h2>
                <div className="space-y-2">
                  {[
                    {
                      school: translations.eduUniversity,
                      faculty: translations.eduUniversityFaculty,
                      field: translations.eduUniversityField,
                      date: "10/2023 – 03/2027",
                      icon: "🎓",
                    },
                    {
                      school: translations.eduSchool,
                      faculty: undefined,
                      field: translations.eduSchoolField,
                      date: "09/2019 – 06/2023",
                      icon: "🏫",
                    },
                  ].map((edu) => (
                    <div key={edu.date} className="rounded-xl border border-slate-800 bg-slate-800/20 p-3 flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-4 text-center lg:text-left">
                      <span className="text-2xl hidden lg:block">{edu.icon}</span>
                      <div className="flex-1">
                        <p className="text-sm font-black text-white uppercase tracking-tight">{t(edu.school)}</p>
                        {edu.faculty && (
                          <p className="text-xs text-cyan-400/80 font-semibold mt-0.5">{t(edu.faculty)}</p>
                        )}
                        <p className="text-xs text-slate-400 font-medium mt-0.5">{t(edu.field)}</p>
                      </div>
                      <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest whitespace-nowrap">{edu.date}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="space-y-3">
                <h2 className="text-xs lg:text-sm font-bold uppercase tracking-[0.2em] text-slate-200 text-center lg:text-left">
                  {t(translations.currentProjects)}
                </h2>

                {PROJECTS.map((project, idx) => (
                  <div
                    key={project.id}
                    style={{ transitionDelay: `${400 + idx * 100}ms` }}
                    className={`group rounded-2xl border border-slate-800 bg-slate-800/20 p-3 transition-all duration-500 ease-[var(--ease-out)] hover:border-cyan-500/50 hover:bg-slate-800/30 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                  >
                    <div className="flex flex-col gap-3">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-3">
                        <div className="flex-1">
                          <div className="mb-2 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
                            <h3 className="text-lg font-black italic text-white group-hover:text-cyan-400 transition-colors uppercase tracking-tight text-center lg:text-left">
                              {project.name}
                            </h3>
                            {project.status && (
                              <span className="inline-flex items-center justify-center whitespace-nowrap h-5 px-2 bg-cyan-500/15 text-cyan-300 rounded border border-cyan-500/30 text-[9px] font-black uppercase tracking-widest">
                                {project.status[language]}
                              </span>
                            )}
                          </div>

                          {/* Technology badges */}
                          <div className="flex gap-1.5 items-center flex-wrap justify-center lg:justify-start mb-2">
                            {(
                              project.technologies ?? defaultProjectTechnologies
                            ).map((tech) => (
                              <div
                                key={`${project.id}-${tech.name}`}
                                className="flex items-center gap-1 h-5 px-2 bg-slate-800/40 rounded border border-slate-700/30"
                              >
                                <i
                                  className={`${tech.icon} text-xs text-slate-300`}
                                />
                                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">
                                  {tech.name}
                                </span>
                              </div>
                            ))}
                          </div>
                          <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors text-center lg:text-left">
                            {t(project.description)}
                          </p>
                        </div>

                        <div className="flex items-center gap-2 justify-center lg:justify-end shrink-0">
                          <a
                            href={project.links?.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-8 h-8 bg-slate-800/50 hover:bg-slate-700 rounded-lg transition-all ring-1 ring-slate-700/50 hover:ring-slate-600"
                            title="GitHub"
                          >
                            <FaGithub className="text-base text-slate-300 hover:text-white" />
                          </a>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-2 justify-center lg:justify-start">
                        <button
                          onClick={() => onProjectClick(project.id)}
                          className={buttonStyles.cyan}
                        >
                          {t(translations.seeMore)}
                        </button>
                        {project.links?.live && (
                          <a
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={buttonStyles.cyan}
                          >
                            <FaGlobe />
                            {t(translations.viewApp)}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </section>

              <section className="space-y-2.5">
                <h2 className="text-xs lg:text-sm font-bold uppercase tracking-[0.2em] text-slate-200 text-center lg:text-left">
                  {t(translations.achievements)}
                </h2>

                <div className="space-y-2">
                  <div className="group rounded-xl border border-slate-800 bg-slate-800/20 p-3 transition-all hover:border-yellow-500/50 text-center lg:text-left">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2">
                      <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-3">
                        <span className="inline-flex items-center justify-center whitespace-nowrap h-6 px-3 bg-yellow-500/20 text-yellow-400 rounded-lg border border-yellow-500/30 text-xs font-black uppercase tracking-widest">
                          🥇 {t(translations.firstPlace)}
                        </span>
                        <span className="text-sm text-slate-300 font-medium">
                          {t(translations.achievement1)}
                        </span>
                      </div>
                      <a
                        href="https://www.linkedin.com/posts/lodzki-klaster-ict_lodzabrhack-activity-7402673072841039872-Arxh?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFlnawQBqCw9Q6vwOQL1mDH2epMRoqNzHp8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-8 h-8 bg-slate-800/50 hover:bg-blue-600 rounded-lg transition-all ring-1 ring-slate-700/50 hover:ring-blue-500 mx-auto lg:mx-0"
                        title="LinkedIn"
                      >
                        <FaLinkedin className="text-base text-slate-300 hover:text-white" />
                      </a>
                    </div>
                  </div>

                  <div className="group rounded-xl border border-slate-800 bg-slate-800/20 p-3 transition-all hover:border-slate-400/50 text-center lg:text-left">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2">
                      <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-3">
                        <span className="inline-flex items-center justify-center whitespace-nowrap h-6 px-3 bg-slate-500/20 text-slate-300 rounded-lg border border-slate-500/30 text-xs font-black uppercase tracking-widest">
                          🥈 {t(translations.secondPlace)}
                        </span>
                        <span className="text-sm text-slate-300 font-medium">
                          {t(translations.achievement2)}
                        </span>
                      </div>
                      <a
                        href="https://www.linkedin.com/posts/p4_play-weplaybetter-hackandplay-activity-7389296147665874944-shiH?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFlnawQBqCw9Q6vwOQL1mDH2epMRoqNzHp8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-8 h-8 bg-slate-800/50 hover:bg-blue-600 rounded-lg transition-all ring-1 ring-slate-700/50 hover:ring-blue-500 mx-auto lg:mx-0"
                        title="LinkedIn"
                      >
                        <FaLinkedin className="text-base text-slate-300 hover:text-white" />
                      </a>
                    </div>
                  </div>

                  <div className="group rounded-xl border border-slate-800 bg-slate-800/20 p-3 transition-all hover:border-slate-400/50 text-center lg:text-left">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2">
                      <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-3">
                        <span className="inline-flex items-center justify-center whitespace-nowrap h-6 px-3 bg-slate-500/20 text-slate-300 rounded-lg border border-slate-500/30 text-xs font-black uppercase tracking-widest">
                          🥈 {t(translations.secondPlace)}
                        </span>
                        <span className="text-sm text-slate-300 font-medium">
                          {t(translations.achievement3)}
                        </span>
                      </div>
                      <a
                        href="https://www.linkedin.com/posts/wiktor-kopczy%C5%84ski-cs_ubihack-hackathon-agkaejdaho-ugcPost-7396910253503565825-KA2m?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFlnawQBqCw9Q6vwOQL1mDH2epMRoqNzHp8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-8 h-8 bg-slate-800/50 hover:bg-blue-600 rounded-lg transition-all ring-1 ring-slate-700/50 hover:ring-blue-500 mx-auto lg:mx-0"
                        title="LinkedIn"
                      >
                        <FaLinkedin className="text-base text-slate-300 hover:text-white" />
                      </a>
                    </div>
                  </div>

                  <div className="group rounded-xl border border-slate-800 bg-slate-800/20 p-3 transition-all hover:border-purple-400/50 text-center lg:text-left">
                    <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-3">
                      <span className="inline-flex items-center justify-center whitespace-nowrap h-6 px-3 bg-purple-500/20 text-purple-300 rounded-lg border border-purple-500/30 text-xs font-black uppercase tracking-widest">
                        🎓 {t(translations.scholarship)}
                      </span>
                      <span className="text-xs md:text-sm text-slate-300 font-medium">
                        {t(translations.achievement4)}
                      </span>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>

      {/* HOBBY MODAL */}
      {selectedHobby && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm transition-all duration-300 ease-[var(--ease-out)] ${showModal ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => {
            setSelectedHobby(null);
            setActiveHobbySlide(0);
          }}
        >
          <div 
            className={`relative max-w-4xl max-h-[90vh] w-full transition-all duration-500 ease-[var(--ease-out)] ${showModal ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => {
                setSelectedHobby(null);
                setActiveHobbySlide(0);
              }}
              className="absolute -top-12 right-0 text-white text-[14px] font-bold uppercase tracking-widest bg-cyan-500/90 hover:bg-cyan-600 px-4 py-2 rounded-xl transition-all shadow-lg z-10 hover:scale-105 active:scale-95"
            >
              {language === "pl" ? "Zamknij" : "Close"}
            </button>

            <div
              className="bg-slate-900/50 rounded-3xl p-8 border border-slate-700/50 backdrop-blur-xl shadow-2xl"
            >
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                {selectedHobby.images.length > 0 ? (
                  <div
                    className="relative w-80 h-80 lg:w-96 lg:h-96"
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                  >
                    <img
                      src={selectedHobby.images[activeHobbySlide]}
                      alt={t(selectedHobby.label)}
                      className="w-full h-full object-cover rounded-2xl shadow-2xl ring-2 ring-cyan-500/30 select-none transition-all duration-500 ease-[var(--ease-out)]"
                    />
                    {selectedHobby.images.length > 1 && (
                      <>
                        <button
                          onClick={() =>
                            setActiveHobbySlide(
                              (prev) =>
                                (prev - 1 + selectedHobby.images.length) %
                                selectedHobby.images.length,
                            )
                          }
                          className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-slate-800/80 text-white text-2xl hover:bg-cyan-500 transition-all shadow-lg active:scale-90"
                        >
                          ‹
                        </button>
                        <button
                          onClick={() =>
                            setActiveHobbySlide(
                              (prev) =>
                                (prev + 1) % selectedHobby.images.length,
                            )
                          }
                          className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-slate-800/80 text-white text-2xl hover:bg-cyan-500 transition-all shadow-lg active:scale-90"
                        >
                          ›
                        </button>
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                          {selectedHobby.images.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={() => setActiveHobbySlide(idx)}
                              className={`h-2 rounded-full transition-all duration-300 ease-[var(--ease-out)] active:scale-90 ${
                                idx === activeHobbySlide
                                  ? "bg-cyan-500 w-6"
                                  : "bg-slate-500 w-2 hover:bg-slate-400"
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                ) : (
                  <div className="w-80 h-80 lg:w-96 lg:h-96 flex items-center justify-center rounded-2xl shadow-2xl ring-2 ring-cyan-500/30 bg-slate-800/50">
                    <span className="text-8xl animate-pulse">{selectedHobby.icon}</span>
                  </div>
                )}
                <div className="text-center lg:text-left">
                  <div className="text-4xl lg:text-5xl mb-4">
                    {selectedHobby.icon}
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-wider text-cyan-400 mb-4">
                    {t(selectedHobby.label)}
                  </h3>
                  <p className="text-slate-300 leading-relaxed max-w-md">
                    {language === "pl"
                      ? selectedHobby.description.pl
                      : selectedHobby.description.en}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
