import { type ReactElement, useState } from "react";
import { TECHNOLOGIES } from "../constants/technologies";
import { SKILLS } from "../constants/skills";
import { HOBBIES } from "../constants/hobbies";

type CvPageProps = {
  onHackathonsClick: () => void;
};

export function CvPage({ onHackathonsClick }: CvPageProps): ReactElement {
  const [selectedHobby, setSelectedHobby] = useState<
    (typeof HOBBIES)[number] | null
  >(null);

  return (
    <>
      <div className="min-h-screen text-slate-100 font-sans antialiased overflow-x-hidden">
        <div className="mx-auto flex flex-col gap-6 px-4 py-8 lg:flex-row max-w-[95%] lg:px-8 lg:py-12">
          {/* LEWY PASEK */}
          <aside className="w-full shrink-0 rounded-3xl bg-slate-900/60 p-5 shadow-2xl ring-1 ring-slate-800/80 backdrop-blur-xl lg:w-70">
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
          <main className="w-full flex-1 rounded-3xl bg-linear-to-br from-slate-900/90 via-slate-900/60 to-slate-900/90 p-6 md:p-10 shadow-2xl ring-1 ring-slate-800/80 backdrop-blur-md">
            <div className="space-y-10">
              <header className="space-y-4 text-center lg:text-left">
                <div className="space-y-1">
                  <p className="text-xs md:text-sm font-bold uppercase tracking-[0.4em] text-cyan-400">
                    Fullstack Developer
                  </p>
                  <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter leading-none uppercase">
                    Mateusz <br className="sm:hidden" />
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">
                      Ciołkowski
                    </span>
                  </h1>
                </div>
                <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-slate-400 border-y border-slate-800/30 py-4">
                  <a
                    href="mailto:kontakt@twojmail.com"
                    className="flex items-center gap-2 text-[10px] font-bold hover:text-cyan-400 transition-all uppercase tracking-widest group"
                  >
                    <i className="devicon-google-plain text-xs group-hover:text-cyan-400" />
                    Email
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-[10px] font-bold hover:text-cyan-400 transition-all uppercase tracking-widest group"
                  >
                    <i className="devicon-github-original text-xs group-hover:text-cyan-400" />
                    GitHub
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-[10px] font-bold hover:text-cyan-400 transition-all uppercase tracking-widest group"
                  >
                    <i className="devicon-linkedin-plain text-xs group-hover:text-cyan-400" />
                    LinkedIn
                  </a>
                </div>
                <p className="mx-auto lg:mx-0 max-w-2xl text-base md:text-lg text-slate-300 leading-relaxed">
                  Projektuje oraz tworzę aplikacje webowe od podstaw. Z
                  wszystkimi technologiami pokazanymi obok pracowalem mniej lub
                  więcej, ale najbardziej rozwijam się w technologiach{" "}
                  <span className="font-semibold text-white">
                    Node.js, Django
                  </span>{" "}
                  oraz{" "}
                  <span className="font-semibold text-white">React.js</span>.
                </p>
              </header>

              <section className="space-y-3 text-center lg:text-left">
                <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-200">
                  O mnie
                </h2>
                <p className="max-w-4xl text-sm md:text-base text-slate-400 leading-relaxed">
                  Jestem studentem informatyki stosowanej na{" "}
                  <span className="font-semibold text-white">
                    Politechnice Łódzkiej
                  </span>{" "}
                  moim głównym obszarem zainteresowań jest budowanie aplikacji
                  webowych oraz mobilnych. Do moich zainteresowań naleza równiez
                  zagadnienia zwiazane ze sztuczna inteligencja. Oprocz pisania
                  programow jestem aktywnym uczestnikiem{" "}
                  <span className="font-semibold text-white">hackathonów</span>{" "}
                  , które otworzyly mi drzwi oraz zachecily do tworzenia
                  oprogramowania. Na dole stworzyłem zakładke w której pokazuje
                  moje osiągnięcia w tych konkursach:)
                </p>
              </section>

              <section className="space-y-5">
                <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-200 text-center lg:text-left">
                  Aktualne projekty
                </h2>

                <div className="group rounded-2xl border border-slate-800 bg-slate-800/20 p-6 transition-all hover:border-cyan-500/50">
                  <div className="flex flex-col gap-4 mb-4">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-xl font-black italic text-white group-hover:text-cyan-400 transition-colors uppercase tracking-tight pr-8">
                          GYMGATE
                        </h3>

                        <div className="flex gap-2 items-center">
                          <span className="flex items-center h-5 text-[9px] px-2 bg-cyan-500/10 text-cyan-400 rounded border border-cyan-500/20 uppercase font-bold tracking-widest">
                            Node.js
                          </span>
                          <span className="flex items-center h-5 text-[9px] px-2 bg-cyan-500/10 text-cyan-400 rounded border border-cyan-500/20 uppercase font-bold tracking-widest">
                            React.js
                          </span>
                          <span className="flex items-center h-5 text-[9px] px-2 bg-cyan-500/10 text-cyan-400 rounded border border-cyan-500/20 uppercase font-bold tracking-widest">
                            Postgresql
                          </span>
                          <span className="flex items-center h-5 text-[9px] px-2 bg-cyan-500/10 text-cyan-400 rounded border border-cyan-500/20 uppercase font-bold tracking-widest">
                            Docker
                          </span>
                        </div>
                      </div>

                      <span className="flex items-center h-5 text-[9px] px-2 bg-amber-500/10 text-amber-500 rounded border border-amber-500/20 uppercase font-bold tracking-widest whitespace-nowrap">
                        In Progress
                      </span>
                    </div>
                  </div>

                  <p className="text-sm md:text-base text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                    Intuicyjna platforma treningowa umożliwiająca użytkownikom
                    precyzyjne śledzenie serii, powtórzeń oraz objętości
                    treningowej w czasie rzeczywistym. System pozwala na
                    archiwizację wyników i monitorowanie progresu.
                  </p>
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
          onClick={() => setSelectedHobby(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button
              onClick={() => setSelectedHobby(null)}
              className="absolute -top-12 right-0 text-white text-[14px] font-bold uppercase tracking-widest bg-cyan-500/90 hover:bg-cyan-600 px-4 py-2 rounded-xl transition-all shadow-lg z-10"
            >
              Zamknij
            </button>

            <div className="bg-slate-900/50 rounded-3xl p-8 border border-slate-700/50 backdrop-blur-xl shadow-2xl">
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                <img
                  src={selectedHobby.image}
                  alt={selectedHobby.label}
                  className="w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-2xl shadow-2xl ring-2 ring-cyan-500/30"
                />
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
