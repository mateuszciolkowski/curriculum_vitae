import { type ReactElement, useState } from "react";
import { TECHNOLOGIES } from "../constants/technologies";
import { SKILLS } from "../constants/skills";
import { HOBBIES } from "../constants/hobbies";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import cvPdf from "../assets/cv/CV_MATUSZ_CIOLKOWSKI_PL.pdf";

type CvPageProps = {
  onHackathonsClick: () => void;
};

export function CvPage({ onHackathonsClick }: CvPageProps): ReactElement {
  const [selectedHobby, setSelectedHobby] = useState<
    (typeof HOBBIES)[number] | null
  >(null);
  const [activeHobbySlide, setActiveHobbySlide] = useState(0);

  return (
    <>
      <div className="min-h-screen text-slate-100 font-sans antialiased overflow-x-hidden">
        <div className="mx-auto flex flex-col gap-4 px-4 py-4 lg:flex-row max-w-[95%] lg:px-6 lg:py-5">
          {/* LEWY PASEK */}
          <aside className="w-full shrink-0 rounded-3xl bg-slate-900/60 p-3 shadow-2xl ring-1 ring-slate-800/80 backdrop-blur-xl lg:w-70">
            <div className="text-center pt-2">
              <button
                onClick={onHackathonsClick}
                className="w-[calc(100%+10px)] -ml-1.25 rounded-xl bg-cyan-500 py-3 text-s font-black text-slate-950 uppercase tracking-widest shadow-lg transition-all hover:scale-105 mb-7"
              >
                Hackathony
              </button>
            </div>
            <h2 className="mb-5 px-2 text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-400 border-l-2 border-cyan-500 pl-4">
              Narzędzia i Technologie
            </h2>
            <div className="grid grid-cols-4 gap-2 mb-8">
              {TECHNOLOGIES.map((tech) => (
                <div
                  key={tech.name}
                  className="flex flex-col items-center justify-center gap-1 rounded-xl bg-slate-800/40 p-1.5 transition hover:bg-slate-700/60 aspect-square"
                >
                  <i
                    className={`${tech.className} text-lg sm:text-xl ${
                      tech.name === "Python" ? "text-[#3776AB]" : ""
                    }`}
                  />
                  <span className="text-[8px] font-bold text-slate-400 uppercase tracking-tighter truncate w-full text-center">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>

            <h2 className="mb-5 px-2 text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-400 border-l-2 border-cyan-500 pl-4">
              Umiejętności
            </h2>
            <div className="flex flex-col gap-3 px-2 mb-8">
              {SKILLS.map((skill) => (
                <div key={skill} className="flex items-center gap-2 group">
                  <span className="h-1 w-1 shrink-0 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.6)]" />
                  <span className="text-xs md:text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>

            <h2 className="mb-5 px-2 text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-400 border-l-2 border-cyan-500 pl-4">
              Hobby
            </h2>
            <div className="flex flex-col gap-3 px-2">
              {HOBBIES.map((hobby) => (
                <button
                  key={hobby.label}
                  onClick={() => setSelectedHobby(hobby)}
                  className="flex items-center gap-2 w-full text-left p-2 rounded-xl bg-slate-800/30 hover:bg-slate-700/60 transition-all group ring-1 ring-transparent hover:ring-cyan-500/50 hover:shadow-[0_0_12px_rgba(6,182,212,0.3)]"
                >
                  <span className="text-xl group-hover:scale-110 transition-transform">
                    {hobby.icon}
                  </span>
                  <span className="text-xs md:text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                    {hobby.label}
                  </span>
                </button>
              ))}
            </div>
          </aside>

          {/* PRAWA STRONA CV - reszta bez zmian */}
          <main className="w-full flex-1 rounded-3xl bg-linear-to-br from-slate-900/90 via-slate-900/60 to-slate-900/90 p-4 md:p-6 shadow-2xl ring-1 ring-slate-800/80 backdrop-blur-md">
            <div className="space-y-4">
              <header className="space-y-1.5 text-center lg:text-left">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="space-y-1">
                    <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-cyan-400">
                      Fullstack Developer
                    </p>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter leading-none uppercase">
                      Mateusz <br className="sm:hidden" />
                      <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">
                        Ciołkowski
                      </span>
                    </h1>
                  </div>

                  <div className="flex flex-col items-center lg:items-end gap-2 lg:border-l lg:border-slate-700/50 lg:pl-6">
                    <a
                      href={cvPdf}
                      download="CV_Mateusz_Ciolkowski.pdf"
                      className="flex items-center justify-center gap-2 rounded-lg bg-slate-800/50 px-4 py-2 text-xs font-bold text-slate-200 uppercase tracking-wider shadow-lg transition-all hover:bg-slate-700 hover:text-white ring-1 ring-slate-700/50"
                    >
                      <FaDownload className="text-xs" />
                      Curriculum Vitae
                    </a>
                  </div>
                </div>
                <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-slate-400 border-y border-slate-800/30 py-4">
                  <a
                    href="mailto:ciolkowski.m1@gmail.com "
                    className="flex items-center gap-2 text-[10px] font-bold hover:text-cyan-400 transition-all uppercase tracking-widest group"
                  >
                    <i className="devicon-google-plain text-xs group-hover:text-cyan-400" />
                    Email
                  </a>
                  <a
                    href="https://github.com/mateuszciolkowski "
                    className="flex items-center gap-2 text-[10px] font-bold hover:text-cyan-400 transition-all uppercase tracking-widest group"
                  >
                    <i className="devicon-github-original text-xs group-hover:text-cyan-400" />
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mateuszciolkowski"
                    className="flex items-center gap-2 text-[10px] font-bold hover:text-cyan-400 transition-all uppercase tracking-widest group"
                  >
                    <i className="devicon-linkedin-plain text-xs group-hover:text-cyan-400" />
                    LinkedIn
                  </a>
                </div>
                <p className="mx-auto lg:mx-0 max-w-2xl text-xs md:text-sm text-slate-300 leading-relaxed">
                  Projektuję i tworzę aplikacje webowe od podstaw, rozwijając
                  swoje umiejętności głównie w technologiach takich jak{" "}
                  <span className="font-semibold text-white">
                    Node.js, Django
                  </span>{" "}
                  oraz{" "}
                  <span className="font-semibold text-white">React.js</span>.
                  Pracuję z różnymi narzędziami, budując funkcjonalne
                  rozwiązania i zdobywając praktyczne doświadczenie w każdym
                  projekcie.
                </p>
              </header>

              <section className="space-y-1.5 text-center lg:text-left">
                <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-200">
                  O mnie
                </h2>
                <p className="max-w-4xl text-xs md:text-sm text-slate-400 leading-relaxed">
                  Jestem studentem informatyki stosowanej na{" "}
                  <span className="font-semibold text-white">
                    Politechnice Łódzkiej
                  </span>{" "}
                  i specjalizuję się w tworzeniu aplikacji webowych. Interesuję
                  się również sztuczną inteligencją i jej zastosowaniem w
                  praktycznych rozwiązaniach. Aktywnie uczestniczę w{" "}
                  <span className="font-semibold text-white">hackathonach</span>{" "}
                  , które pokazały mi jak wygląda praca nad rzeczywistymi
                  problemami i zmotywowały do dalszego rozwijania swoich
                  umiejętności – obok przygotowałem sekcję z moimi osiągnięciami
                  w tych konkursach :)
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-200 text-center lg:text-left">
                  Aktualne projekty
                </h2>

                <div className="group rounded-2xl border border-slate-800 bg-slate-800/20 p-3 transition-all hover:border-cyan-500/50">
                  <div className="flex flex-col gap-2 mb-2">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-lg font-black italic text-white group-hover:text-cyan-400 transition-colors uppercase tracking-tight pr-6">
                          GYMGATE
                        </h3>

                        <div className="flex gap-1.5 items-center">
                          <span className="flex items-center h-4 text-[8px] px-1.5 bg-cyan-500/10 text-cyan-400 rounded border border-cyan-500/20 uppercase font-bold tracking-widest">
                            Node.js
                          </span>
                          <span className="flex items-center h-4 text-[8px] px-1.5 bg-cyan-500/10 text-cyan-400 rounded border border-cyan-500/20 uppercase font-bold tracking-widest">
                            React.js
                          </span>
                          <span className="flex items-center h-4 text-[8px] px-1.5 bg-cyan-500/10 text-cyan-400 rounded border border-cyan-500/20 uppercase font-bold tracking-widest">
                            Postgresql
                          </span>
                          <span className="flex items-center h-4 text-[8px] px-1.5 bg-cyan-500/10 text-cyan-400 rounded border border-cyan-500/20 uppercase font-bold tracking-widest">
                            Docker
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <a
                          href="https://github.com/mateuszciolkowski/gymgate"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-8 h-8 bg-slate-800/50 hover:bg-slate-700 rounded-lg transition-all ring-1 ring-slate-700/50 hover:ring-slate-600"
                          title="GitHub"
                        >
                          <FaGithub className="text-base text-slate-300 hover:text-white" />
                        </a>
                        <span className="flex items-center h-4 text-[8px] px-1.5 bg-amber-500/10 text-amber-500 rounded border border-amber-500/20 uppercase font-bold tracking-widest whitespace-nowrap">
                          In Progress
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs md:text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors text-center lg:text-left">
                    Intuicyjna platforma treningowa umożliwiająca użytkownikom
                    precyzyjne śledzenie serii, powtórzeń oraz objętości
                    treningowej w czasie rzeczywistym. System pozwala na
                    archiwizację wyników i monitorowanie progresu.
                  </p>
                </div>
              </section>

              <section className="space-y-2.5">
                <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-200 text-center lg:text-left">
                  Osiągnięcia
                </h2>

                <div className="space-y-2">
                  <div className="group rounded-xl border border-slate-800 bg-slate-800/20 p-3 transition-all hover:border-yellow-500/50 text-center lg:text-left">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2">
                      <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-3">
                        <span className="inline-flex items-center justify-center h-6 px-3 bg-yellow-500/20 text-yellow-400 rounded-lg border border-yellow-500/30 text-[10px] font-black uppercase tracking-widest">
                          🥇 1. miejsce
                        </span>
                        <span className="text-xs md:text-sm text-slate-300 font-medium">
                          Hackathon{" "}
                          <span className="font-bold text-white">
                            #ŁÓDŹ_HACK
                          </span>{" "}
                          – Moduł MOJE OSIEDLE dla Karty Łodzianina
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
                        <span className="inline-flex items-center justify-center h-6 px-3 bg-slate-500/20 text-slate-300 rounded-lg border border-slate-500/30 text-[10px] font-black uppercase tracking-widest">
                          🥈 2. miejsce
                        </span>
                        <span className="text-xs md:text-sm text-slate-300 font-medium">
                          Hackathon{" "}
                          <span className="font-bold text-white">
                            HackAndPlay
                          </span>{" "}
                          – Aplikacja PharmaRadar
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
                        <span className="inline-flex items-center justify-center h-6 px-3 bg-slate-500/20 text-slate-300 rounded-lg border border-slate-500/30 text-[10px] font-black uppercase tracking-widest">
                          🥈 2. miejsce
                        </span>
                        <span className="text-xs md:text-sm text-slate-300 font-medium">
                          Hackathon{" "}
                          <span className="font-bold text-white">
                            UBIHACK 2.0
                          </span>{" "}
                          – Aplikacja Synaptis
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
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>

      {/* HOBBY MODAL */}
      {selectedHobby && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
          onClick={() => {
            setSelectedHobby(null);
            setActiveHobbySlide(0);
          }}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button
              onClick={() => {
                setSelectedHobby(null);
                setActiveHobbySlide(0);
              }}
              className="absolute -top-12 right-0 text-white text-[14px] font-bold uppercase tracking-widest bg-cyan-500/90 hover:bg-cyan-600 px-4 py-2 rounded-xl transition-all shadow-lg z-10"
            >
              Zamknij
            </button>

            <div
              className="bg-slate-900/50 rounded-3xl p-8 border border-slate-700/50 backdrop-blur-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                {selectedHobby.images.length > 0 ? (
                  <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                    <img
                      src={selectedHobby.images[activeHobbySlide]}
                      alt={selectedHobby.label}
                      className="w-full h-full object-cover rounded-2xl shadow-2xl ring-2 ring-cyan-500/30"
                    />
                    {selectedHobby.images.length > 1 && (
                      <>
                        <button
                          onClick={() =>
                            setActiveHobbySlide(
                              (prev) =>
                                (prev - 1 + selectedHobby.images.length) %
                                selectedHobby.images.length
                            )
                          }
                          className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-slate-800/80 text-white text-2xl hover:bg-cyan-500 transition-all shadow-lg"
                        >
                          ‹
                        </button>
                        <button
                          onClick={() =>
                            setActiveHobbySlide(
                              (prev) => (prev + 1) % selectedHobby.images.length
                            )
                          }
                          className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-slate-800/80 text-white text-2xl hover:bg-cyan-500 transition-all shadow-lg"
                        >
                          ›
                        </button>
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                          {selectedHobby.images.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={() => setActiveHobbySlide(idx)}
                              className={`w-2 h-2 rounded-full transition-all ${
                                idx === activeHobbySlide
                                  ? "bg-cyan-500 w-6"
                                  : "bg-slate-500"
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                ) : (
                  <div className="w-80 h-80 lg:w-96 lg:h-96 flex items-center justify-center rounded-2xl shadow-2xl ring-2 ring-cyan-500/30 bg-slate-800/50">
                    <span className="text-8xl">{selectedHobby.icon}</span>
                  </div>
                )}
                <div className="text-center lg:text-left">
                  <div className="text-4xl lg:text-5xl mb-4">
                    {selectedHobby.icon}
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-wider text-cyan-400 mb-4">
                    {selectedHobby.label}
                  </h3>
                  <p className="text-slate-300 leading-relaxed max-w-md">
                    Moje największe pasje poza programowaniem. Tutaj znajduję
                    równowagę i energię do tworzenia kolejnych projektów.
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
