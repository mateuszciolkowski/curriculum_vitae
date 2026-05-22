import { type ReactElement, useState, useEffect } from "react";
import { TECH_CATEGORIES } from "../constants/technologies";
import { HOBBIES } from "../constants/hobbies";
import { PROJECTS } from "../data/projects";
import { HACKATHONS } from "../data/hackathons";
import { FaLinkedin, FaDownload, FaArrowRight } from "react-icons/fa";
import { HiSun, HiMoon } from "react-icons/hi";
import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";
import { translations } from "../constants/translations";
import cvPdfPL from "../assets/cv/CV_MATEUSZ_CIOLKOWSKI_PL.pdf";
import cvPdfEN from "../assets/cv/CV_MATEUSZ_CIOLKOWSKI_ENG.pdf";

type CvPageProps = {
  onHackathonsClick: (id?: string) => void;
  onProjectsClick: (id?: string) => void;
};

// Kolory motywu editorial / warm paper. Trzymamy jako stałe, żeby utrzymać
// spójność i ułatwić ewentualną podmianę palety.
const PAPER_BG = "bg-[#f4ecdc] dark:bg-[#1b1712]";
const PAPER_BG_TRANSLUCENT = "bg-[#f4ecdc]/85 dark:bg-[#1b1712]/85";

export function CvPage({ onHackathonsClick, onProjectsClick }: CvPageProps): ReactElement {
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [selectedHobby, setSelectedHobby] = useState<(typeof HOBBIES)[number] | null>(null);
  const [activeHobbySlide, setActiveHobbySlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [highlightedSection, setHighlightedSection] = useState<string | null>(null);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } });
    }, { threshold: 0.05, rootMargin: "0px" });
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (selectedHobby) {
      const timer = setTimeout(() => setShowModal(true), 10);
      return () => clearTimeout(timer);
    } else {
      setShowModal(false);
    }
  }, [selectedHobby]);

  const cvPdf = language === "pl" ? cvPdfPL : cvPdfEN;

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setHighlightedSection(id);
    setTimeout(() => setHighlightedSection(null), 1800);
  };

  const sectionLabel = (id: string) =>
    `text-[10px] font-bold uppercase tracking-[0.35em] transition-colors duration-500 ${
      highlightedSection === id ? "text-orange-700" : "text-stone-500 dark:text-stone-400"
    }`;

  const defaultTech = [
    { name: "Node.js", icon: "devicon-nodejs-plain" },
    { name: "React.js", icon: "devicon-react-original" },
    { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
    { name: "Docker", icon: "devicon-docker-plain" },
  ];

  const minSwipeDistance = 50;
  const onTouchStart = (e: React.TouchEvent) => { setTouchEnd(null); setTouchStart(e.targetTouches[0].clientX); };
  const onTouchMove = (e: React.TouchEvent) => { setTouchEnd(e.targetTouches[0].clientX); };
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd || !selectedHobby) return;
    const d = touchStart - touchEnd;
    if (d > minSwipeDistance) setActiveHobbySlide((p) => (p + 1) % selectedHobby.images.length);
    else if (d < -minSwipeDistance) setActiveHobbySlide((p) => (p - 1 + selectedHobby.images.length) % selectedHobby.images.length);
  };

  const navSections = [
    { label: t(translations.aboutMe), id: "about" },
    { label: t(translations.education), id: "education" },
    { label: "Stack", id: "technologies" },
    { label: t(translations.achievements), id: "achievements" },
    { label: language === "pl" ? "Projekty" : "Projects", id: "projects" },
    { label: t(translations.hackathons), id: "hackathons" },
    { label: t(translations.hobbies), id: "hobbies" },
  ];

  return (
    <div className={`${PAPER_BG} min-h-screen text-stone-900 dark:text-stone-100 antialiased selection:bg-orange-700/20`}>
      {/* ─── NAVBAR ─── */}
      <nav className={`sticky top-0 z-40 w-full border-b border-stone-300/60 dark:border-stone-700/60 ${PAPER_BG_TRANSLUCENT} backdrop-blur-md`}>
        <div className="mx-auto flex h-14 max-w-screen-lg items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
          {/* Center: section anchor links */}
          <div className="hidden items-center gap-1 lg:flex">
            {navSections.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`rounded-md px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] transition-all ${
                  highlightedSection === id
                    ? "text-orange-700"
                    : "text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Right */}
          <div className="flex shrink-0 items-center gap-2">
            <button
              onClick={toggleTheme}
              className="rounded-md border border-stone-300 dark:border-stone-600 bg-stone-100 dark:bg-[#2a2320] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-stone-700 dark:text-stone-200 transition-all hover:bg-stone-200 dark:hover:bg-[#3d3530]"
              aria-label="Toggle dark mode"
            >
              {theme === "light" ? <HiMoon className="text-sm" /> : <HiSun className="text-sm" />}
            </button>
            <button
              onClick={() => setLanguage(language === "pl" ? "en" : "pl")}
              className="rounded-md border border-stone-300 dark:border-stone-600 bg-stone-100 dark:bg-[#2a2320] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-stone-700 dark:text-stone-200 transition-all hover:bg-stone-200 dark:hover:bg-[#3d3530]"
            >
              {language === "pl" ? "EN" : "PL"}
            </button>
            <a
              href={cvPdf}
              download={`CV_Mateusz_Ciolkowski_${language === "pl" ? "PL" : "EN"}.pdf`}
              className="flex items-center gap-1.5 rounded-md bg-orange-700 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] !text-white transition-all hover:bg-orange-800"
            >
              <FaDownload className="text-[10px]" />
              <span className="hidden sm:inline">CV</span>
            </a>
          </div>
        </div>
      </nav>

      {/* ─── EDITORIAL CONTENT ─── */}
      <main
        className={`mx-auto max-w-screen-lg px-6 sm:px-8 lg:px-12 transition-opacity duration-1000 ease-[var(--ease-out)] ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* ── HERO ── */}
        <header className="pt-16 pb-12 lg:pt-24 lg:pb-16">
          <p className={`text-[10px] font-bold uppercase tracking-[0.4em] text-orange-700 transition-all duration-700 ease-[var(--ease-out)] ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            {t(translations.jobTitle)}
          </p>
          <h1 className={`mt-4 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight transition-all duration-1000 delay-150 ease-[var(--ease-out)] ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            Mateusz<br />Ciołkowski
          </h1>
          <p className={`mt-10 max-w-2xl text-lg sm:text-xl leading-relaxed text-stone-700 dark:text-stone-300 transition-all duration-1000 delay-300 ease-[var(--ease-out)] ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            {language === "pl"
              ? "Projektuję i tworzę aplikacje od A do Z. Tworzę strony internetowe oraz aplikacje mobilne, w których estetyczny wygląd idzie w parze z niezawodnym działaniem. Dbając o każdy detal, łączę technologie frontendowe i backendowe z przemyślanym designem, tworząc rozwiązania, z których korzysta się z przyjemnością."
              : "I design and build applications from A to Z. I create websites and mobile apps where aesthetic design goes hand in hand with reliable performance. Paying attention to every detail, I combine frontend and backend technologies with thoughtful design, creating solutions that are a pleasure to use."}
          </p>

          {/* Contact links — inline, hairline-separated */}
          <div className={`mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm transition-all duration-1000 delay-500 ease-[var(--ease-out)] ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <a
              href="mailto:ciolkowski.m1@gmail.com"
              className="group flex items-center gap-2 font-medium text-stone-700 dark:text-stone-300 transition-colors hover:text-orange-700"
            >
              <i className="devicon-google-plain text-base" />
              <span className="border-b border-stone-300 dark:border-stone-600 pb-0.5 group-hover:border-orange-700">ciolkowski.m1@gmail.com</span>
            </a>
            <a href="https://github.com/mateuszciolkowski" className="group flex items-center gap-2 font-medium text-stone-700 dark:text-stone-300 transition-colors hover:text-orange-700">
              <i className="devicon-github-original text-base" />
              <span className="border-b border-stone-300 dark:border-stone-600 pb-0.5 group-hover:border-orange-700">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/mateuszciolkowski" className="group flex items-center gap-2 font-medium text-stone-700 dark:text-stone-300 transition-colors hover:text-orange-700">
              <FaLinkedin className="text-sm" />
              <span className="border-b border-stone-300 dark:border-stone-600 pb-0.5 group-hover:border-orange-700">LinkedIn</span>
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={() => onProjectsClick()}
              className="group inline-flex items-center gap-2 rounded-md border border-stone-300 dark:border-stone-600 bg-stone-100 dark:bg-[#2a2320] px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-stone-700 dark:text-stone-200 transition-all hover:border-orange-700 hover:text-orange-700"
            >
              {language === "pl" ? "Projekty" : "Projects"}
              <FaArrowRight className="text-[10px] transition-transform group-hover:translate-x-0.5" />
            </button>
            <button
              onClick={() => onHackathonsClick()}
              className="group inline-flex items-center gap-2 rounded-md border border-stone-300 dark:border-stone-600 bg-stone-100 dark:bg-[#2a2320] px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-stone-700 dark:text-stone-200 transition-all hover:border-orange-700 hover:text-orange-700"
            >
              {t(translations.hackathons)}
              <FaArrowRight className="text-[10px] transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </header>

        <hr className="border-stone-300/70 dark:border-stone-700/50" />

        {/* ── ABOUT ── */}
        <section id="about" className="reveal grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 py-14 scroll-mt-20">
          <h2 className={`lg:col-span-3 ${sectionLabel("about")}`}>
            {t(translations.aboutMe)}
          </h2>
          <div className="lg:col-span-9">
            <p className="text-base sm:text-lg leading-relaxed text-stone-700 dark:text-stone-300 max-w-3xl">
              {language === "pl"
                ? "Na co dzień studiuję informatykę stosowaną na Politechnice Łódzkiej i rozwijam się w kierunku technologii webowych. Poza uczelnią tworzę własne strony i aplikacje. Zależy mi na tym, żeby moje projekty były po prostu użyteczne, dlatego projektuję narzędzia, z których sam chętnie korzystam. To właśnie praktyczne zastosowanie kodu daje mi największego kopa do nauki i stałego podnoszenia poprzeczki."
                : "I study Applied Computer Science at Łódź University of Technology and focus on web technologies. Outside of university, I build my own websites and applications. I care about making my projects genuinely useful, so I design tools that I myself enjoy using. It's the practical application of code that gives me the biggest drive to learn and constantly raise the bar."}
            </p>
          </div>
        </section>

        <hr className="border-stone-300/70 dark:border-stone-700/50" />

        {/* ── EDUCATION ── */}
        <section id="education" className="reveal grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 py-14 scroll-mt-20">
          <h2 className={`lg:col-span-3 ${sectionLabel("education")}`}>
            {t(translations.education)}
          </h2>
          <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6">
            {[
              { school: translations.eduUniversity, faculty: translations.eduUniversityFaculty, field: translations.eduUniversityField, date: "10/2023 – 03/2027" },
              { school: translations.eduSchool, faculty: undefined, field: translations.eduSchoolField, date: "09/2019 – 06/2023" },
            ].map((edu) => (
              <div key={edu.date} className="flex flex-col gap-1">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-orange-700">{edu.date}</p>
                <p className="mt-1 text-base font-semibold leading-snug text-stone-900 dark:text-stone-100">{t(edu.school)}</p>
                {edu.faculty && <p className="text-sm text-stone-600 dark:text-stone-400">{t(edu.faculty)}</p>}
                <p className="text-sm text-stone-700 dark:text-stone-300">{t(edu.field)}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-stone-300/70 dark:border-stone-700/50" />

        {/* ── STACK / TECHNOLOGIES ── */}
        <section id="technologies" className="reveal grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 py-14 scroll-mt-20">
          <h2 className={`lg:col-span-3 ${sectionLabel("technologies")}`}>
            Stack
          </h2>
          <div className="lg:col-span-9 flex flex-col gap-6">
            {TECH_CATEGORIES.map((group, gIdx) => (
              <div key={group.key} className="relative grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 pl-3">
                {/* pionowy pasek-akcent po lewej */}
                <span className={`absolute left-0 top-1 bottom-1 w-[2px] rounded-full ${group.color.bar}`} />

                {/* etykieta kategorii */}
                <div className="sm:col-span-3 flex items-center gap-2">
                  <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${group.color.dot}`} />
                  <span className={`text-[10px] font-bold uppercase tracking-[0.3em] ${group.color.text}`}>
                    {language === "pl" ? group.label.pl : group.label.en}
                  </span>
                </div>

                {/* chipy */}
                <div className="sm:col-span-9 flex flex-wrap gap-1.5">
                  {group.items.map((tech, idx) => (
                    <div
                      key={tech.name}
                      style={{ transitionDelay: `${100 + gIdx * 70 + idx * 20}ms` }}
                      className={`group flex items-center gap-1.5 rounded-md bg-white dark:bg-[#2a2320] px-2.5 py-1.5 ring-1 ring-stone-200 dark:ring-[#3d3530] shadow-sm transition-all duration-400 ease-[var(--ease-out)] hover:scale-105 ${group.color.chipHoverRing} ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
                    >
                      {tech.imageSrc ? <img src={tech.imageSrc} alt={tech.name} className="h-3.5 w-3.5 transition-transform group-hover:scale-110" /> : <i className={`${tech.className} text-sm transition-transform group-hover:scale-110 ${tech.name === "Python" ? "text-[#3776AB]" : ""}`} />}
                      <span className="text-[10px] font-bold uppercase tracking-tight text-stone-700 dark:text-stone-200">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-stone-300/70 dark:border-stone-700/50" />

        {/* ── LANGUAGES ── */}
        <section id="skills" className="reveal grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 py-14 scroll-mt-20">
          <h2 className={`lg:col-span-3 ${sectionLabel("skills")}`}>
            {t(translations.languages)}
          </h2>
          <div className="lg:col-span-9">
            <div className="flex flex-col gap-5 max-w-sm">
              {[
                { labelKey: translations.langPolish, level: t(translations.langNative), percent: 100 },
                { labelKey: translations.langEnglish, level: "B2", percent: 72 },
              ].map(({ labelKey, level, percent }) => (
                <div key={level} className="flex flex-col gap-1.5">
                  <div className="flex items-baseline justify-between">
                    <span className="text-sm font-semibold text-stone-900 dark:text-stone-100">{t(labelKey)}</span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-700">{level}</span>
                  </div>
                  <div className="h-[3px] w-full rounded-full bg-stone-200 dark:bg-stone-700">
                    <div
                      className="h-[3px] rounded-full bg-orange-700 transition-all duration-1000"
                      style={{ width: mounted ? `${percent}%` : "0%" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <hr className="border-stone-300/70 dark:border-stone-700/50" />

        {/* ── ACHIEVEMENTS ── */}
        <section id="achievements" className="reveal grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 py-14 scroll-mt-20">
          <h2 className={`lg:col-span-3 ${sectionLabel("achievements")}`}>
            {t(translations.achievements)}
          </h2>
          <div className="lg:col-span-9 flex flex-col">
            {[
              { emoji: "🥇", label: t(translations.firstPlace), text: t(translations.achievement1), href: "https://www.linkedin.com/posts/lodzki-klaster-ict_lodzabrhack-activity-7402673072841039872-Arxh", hackathonId: "fintech" },
              { emoji: "🥈", label: t(translations.secondPlace), text: t(translations.achievement2), href: "https://www.linkedin.com/posts/p4_play-weplaybetter-hackandplay-activity-7389296147665874944-shiH", hackathonId: "pharmaradar" },
              { emoji: "🥈", label: t(translations.secondPlace), text: t(translations.achievement3), href: "https://www.linkedin.com/posts/wiktor-kopczy%C5%84ski-cs_ubihack-hackathon-agkaejdaho-ugcPost-7396910253503565825-KA2m", hackathonId: "synaptis" },
              { emoji: "🎓", label: t(translations.scholarship), text: t(translations.achievement4), href: undefined, hackathonId: undefined },
            ].map(({ emoji, label, text, href, hackathonId }, idx, arr) => (
              <div
                key={text}
                onClick={() => hackathonId && onHackathonsClick(hackathonId)}
                className={`flex items-start gap-4 py-4 ${idx < arr.length - 1 ? "border-b border-stone-200 dark:border-stone-700/50" : ""} ${hackathonId ? "cursor-pointer transition-colors hover:bg-stone-50 dark:hover:bg-[#2a2320] -mx-3 px-3 rounded-md" : ""}`}
              >
                <span className="shrink-0 text-2xl leading-none">{emoji}</span>
                <div className="min-w-0 flex-1">
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.25em] text-orange-700">{label}</p>
                  <p className="text-sm leading-relaxed text-stone-800 dark:text-stone-300">{text}</p>
                </div>
                {href && (
                  <a href={href} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="ml-auto flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-stone-100 dark:bg-[#2a2320] text-stone-500 dark:text-stone-400 transition-all hover:bg-stone-900 hover:text-[#f4ecdc]">
                    <FaLinkedin className="text-xs" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        <hr className="border-stone-300/70 dark:border-stone-700/50" />

        {/* ── PROJECTS ── */}
        <section id="projects" className="reveal grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 py-14 scroll-mt-20">
          <h2 className={`lg:col-span-3 ${sectionLabel("projects")}`}>
            {language === "pl" ? "Projekty" : "Projects"}
          </h2>
          <div className="lg:col-span-9 flex flex-col gap-3">
            {PROJECTS.map((project) => (
              <button
                key={project.id}
                onClick={() => onProjectsClick(project.id)}
                className="group flex items-center gap-4 border-b border-stone-200 dark:border-stone-700/50 py-4 text-left transition-colors hover:border-orange-700"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-baseline gap-2">
                    <span className="text-base font-bold uppercase tracking-tight text-stone-900 dark:text-stone-100">{project.name}</span>
                    {project.status && (
                      <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-orange-700">
                        · {project.status[language]}
                      </span>
                    )}
                  </div>
                  <p className="mt-0.5 text-xs text-stone-500 dark:text-stone-400">{t(project.role)}</p>
                </div>
                <div className="hidden sm:flex shrink-0 gap-1">
                  {(project.technologies ?? defaultTech).slice(0, 4).map((tech) => (
                    <i key={tech.name} className={`${tech.icon} text-base text-stone-500`} />
                  ))}
                </div>
                <FaArrowRight className="text-xs text-stone-400 transition-all group-hover:translate-x-1 group-hover:text-orange-700" />
              </button>
            ))}
          </div>
        </section>

        <hr className="border-stone-300/70 dark:border-stone-700/50" />

        {/* ── HACKATHONS ── */}
        <section id="hackathons" className="reveal grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 py-14 scroll-mt-20">
          <h2 className={`lg:col-span-3 ${sectionLabel("hackathons")}`}>
            {t(translations.hackathons)}
          </h2>
          <div className="lg:col-span-9 flex flex-col gap-3">
            {HACKATHONS.map((hack) => (
              <button
                key={hack.id}
                onClick={() => onHackathonsClick(hack.id)}
                className="group flex items-center gap-4 border-b border-stone-200 dark:border-stone-700/50 py-4 text-left transition-colors hover:border-orange-700"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-baseline gap-2">
                    <span className="text-base font-bold uppercase tracking-tight text-stone-900 dark:text-stone-100">{hack.name}</span>
                    {hack.inProgress && (
                      <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-orange-700">
                        · {language === "pl" ? "W trakcie" : "In Progress"}
                      </span>
                    )}
                  </div>
                  <p className="mt-0.5 text-xs text-stone-500 dark:text-stone-400">{t(hack.role)}</p>
                </div>
                <div className="hidden sm:flex shrink-0 gap-1">
                  {(hack.technologies ?? []).slice(0, 4).map((tech) => (
                    <i key={tech.name} className={`${tech.icon} text-base text-stone-500`} />
                  ))}
                </div>
                <FaArrowRight className="text-xs text-stone-400 transition-all group-hover:translate-x-1 group-hover:text-orange-700" />
              </button>
            ))}
          </div>
        </section>

        <hr className="border-stone-300/70 dark:border-stone-700/50" />

        {/* ── HOBBIES ── */}
        <section id="hobbies" className="reveal grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 py-14 scroll-mt-20">
          <h2 className={`lg:col-span-3 ${sectionLabel("hobbies")}`}>
            {t(translations.hobbies)}
          </h2>
          <div className="lg:col-span-9 flex flex-wrap gap-3">
            {HOBBIES.map((hobby, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedHobby(hobby)}
                className="group flex items-center gap-3 rounded-md bg-white dark:bg-[#2a2320] px-4 py-3 ring-1 ring-stone-200 dark:ring-[#3d3530] shadow-sm transition-all hover:ring-orange-700/50 hover:scale-[1.02] hover-lift"
              >
                <span className="text-sm font-medium text-stone-800 dark:text-stone-200 transition-colors group-hover:text-orange-700">{t(hobby.label)}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-stone-300/70 dark:border-stone-700/50 py-10 text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-500">
            © Mateusz Ciołkowski
          </p>
        </footer>
      </main>

      {/* ─── HOBBY MODAL ─── */}
      {selectedHobby && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-stone-900/80 p-4 backdrop-blur-sm transition-all duration-300 ease-[var(--ease-out)] ${showModal ? "opacity-100" : "opacity-0"}`}
          onClick={() => { setSelectedHobby(null); setActiveHobbySlide(0); }}
        >
          <div
            className={`relative max-w-4xl max-h-[90vh] w-full transition-all duration-500 ease-[var(--ease-out)] ${showModal ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-4"}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => { setSelectedHobby(null); setActiveHobbySlide(0); }}
              className="absolute -top-12 right-0 z-10 rounded-md bg-orange-700 px-4 py-2 text-[12px] font-bold uppercase tracking-[0.2em] text-[#f4ecdc] shadow-lg transition-all hover:bg-orange-800 hover:scale-105 active:scale-95"
            >
              {language === "pl" ? "Zamknij" : "Close"}
            </button>
            <div className="rounded-2xl border border-stone-300 bg-[#f4ecdc] p-8 shadow-2xl">
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                {selectedHobby.images.length > 0 ? (
                  <div className="relative w-80 h-80 lg:w-96 lg:h-96" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
                    <img src={selectedHobby.images[activeHobbySlide]} alt={t(selectedHobby.label)} className="w-full h-full object-cover rounded-xl shadow-2xl ring-2 ring-orange-700/20 select-none" />
                    {selectedHobby.images.length > 1 && (
                      <>
                        <button onClick={() => setActiveHobbySlide((p) => (p - 1 + selectedHobby.images.length) % selectedHobby.images.length)} className="absolute left-2 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-stone-900/70 text-2xl text-[#f4ecdc] shadow-lg transition-all hover:bg-orange-700 active:scale-90">‹</button>
                        <button onClick={() => setActiveHobbySlide((p) => (p + 1) % selectedHobby.images.length)} className="absolute right-2 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-stone-900/70 text-2xl text-[#f4ecdc] shadow-lg transition-all hover:bg-orange-700 active:scale-90">›</button>
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                          {selectedHobby.images.map((_, i) => (
                            <button key={i} onClick={() => setActiveHobbySlide(i)} className={`h-2 rounded-full transition-all duration-300 ease-[var(--ease-out)] active:scale-90 ${i === activeHobbySlide ? "w-6 bg-orange-700" : "w-2 bg-stone-400 hover:bg-stone-500"}`} />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                ) : (
                  <div className="flex h-80 w-80 items-center justify-center rounded-xl bg-stone-100 shadow-2xl ring-2 ring-orange-700/20 lg:h-96 lg:w-96">
                    <span className="animate-pulse text-8xl">{selectedHobby.icon}</span>
                  </div>
                )}
                <div className="text-center lg:text-left">
                  <div className="mb-4 text-4xl lg:text-5xl">{selectedHobby.icon}</div>
                  <h3 className="mb-4 text-2xl font-bold uppercase tracking-[0.2em] text-orange-700">{t(selectedHobby.label)}</h3>
                  <p className="max-w-md leading-relaxed text-stone-700">{language === "pl" ? selectedHobby.description.pl : selectedHobby.description.en}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
