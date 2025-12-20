import { type ReactElement } from "react";

type CvPageProps = {
  onHackathonsClick: () => void;
};

export function CvPage({ onHackathonsClick }: CvPageProps): ReactElement {
  const techTiles = [
    { name: "React", className: "devicon-react-original colored" },
    { name: "Django", className: "devicon-django-plain colored" },
    { name: "Node.js", className: "devicon-nodejs-plain colored" },
    { name: "TS", className: "devicon-typescript-plain colored" },
    { name: "JS", className: "devicon-javascript-plain colored" },
    { name: "Python", className: "devicon-python-plain" },
    { name: "Postgres", className: "devicon-postgresql-plain colored" },
    { name: "SQL Ser", className: "devicon-microsoftsqlserver-plain colored" },
    { name: "Docker", className: "devicon-docker-plain colored" },
    { name: "Java", className: "devicon-java-plain colored" },
    { name: "Redis", className: "devicon-redis-plain colored" },
    { name: "Git", className: "devicon-git-plain colored" },
    { name: "HTML", className: "devicon-html5-plain colored" },
    { name: "CSS", className: "devicon-css3-plain colored" },
    { name: "Tailwind", className: "devicon-tailwindcss-plain colored" },
    { name: "MongoDB", className: "devicon-mongodb-plain colored" },
  ];

  const skills = [
    "Projektowanie API REST",
    "Modelowanie baz danych SQL",
    "Konteneryzacja Docker",
    "Architektura Full-stack",
    "Zarządzanie stanem TS",
    "Deployment i CI/CD",
  ];

  return (
    <div className="min-h-screen text-slate-100 font-sans antialiased overflow-x-hidden">
      <div className="mx-auto flex flex-col gap-6 px-4 py-8 lg:flex-row max-w-[95%] lg:px-8 lg:py-12">
        {/* LEWY PASEK */}
        <aside className="w-full shrink-0 rounded-3xl bg-slate-900/60 p-5 shadow-2xl ring-1 ring-slate-800/80 backdrop-blur-xl lg:w-[280px]">
          <h2 className="mb-5 px-2 text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-400 border-l-2 border-cyan-500 pl-4">
            Technologie
          </h2>
          <div className="grid grid-cols-4 gap-2 mb-8">
            {techTiles.map((tech) => (
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
            {skills.map((skill) => (
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
            <div className="flex items-center gap-2 text-xs md:text-sm text-slate-300 font-medium">
              <span>🎣</span> Wędkarstwo
            </div>
            <div className="flex items-center gap-2 text-xs md:text-sm text-slate-300 font-medium">
              <span>🏋️</span> Siłownia
            </div>
          </div>
        </aside>

        {/* PRAWA STRONA CV */}
        <main className="w-full flex-1 rounded-3xl bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-slate-900/90 p-6 md:p-10 shadow-2xl ring-1 ring-slate-800/80 backdrop-blur-md">
          <div className="space-y-10">
            <header className="space-y-4 text-center lg:text-left">
              <div className="space-y-1">
                <p className="text-xs md:text-sm font-bold uppercase tracking-[0.4em] text-cyan-400">
                  Fullstack Developer
                </p>
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter leading-none uppercase">
                  Mateusz <br className="sm:hidden" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
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
                Projektuję i wdrażam aplikacje webowe{" "}
                <span className="font-semibold text-white">end-to-end</span>.
                Łączę stabilność backendu (Django, Node.js) z nowoczesnością
                frontendu (React, Next.js).
              </p>
            </header>

            <section className="space-y-3 text-center lg:text-left">
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-200">
                O mnie
              </h2>
              <p className="max-w-4xl text-sm md:text-base text-slate-400 leading-relaxed">
                Jestem studentem informatyki skoncentrowanym na budowaniu
                skalowalnych systemów. W moich projektach biorę pełną
                odpowiedzialność za cykl życia produktu – od optymalizacji
                zapytań SQL po konfigurację procesów deploymentu.
              </p>
            </section>

            <section className="space-y-5">
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-200 text-center lg:text-left">
                Aktualne projekty
              </h2>
              <div className="group rounded-2xl border border-slate-800 bg-slate-800/20 p-6 transition-all hover:border-cyan-500/50">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-black italic text-white group-hover:text-cyan-400 transition-colors">
                    GYMGATE
                  </h3>
                  <span className="text-[9px] px-2 py-0.5 bg-cyan-500/10 text-cyan-400 rounded border border-cyan-500/20 uppercase font-bold tracking-widest">
                    In Progress
                  </span>
                </div>
                <p className="text-sm md:text-base text-slate-400 leading-relaxed">
                  Intuicyjna platforma treningowa umożliwiająca użytkownikom
                  precyzyjne śledzenie serii, powtórzeń oraz objętości
                  treningowej w czasie rzeczywistym. System pozwala na
                  archiwizację wyników i monitorowanie progresu.
                </p>
              </div>
            </section>

            <div className="text-center pt-2">
              <button
                onClick={onHackathonsClick}
                className="rounded-xl bg-cyan-500 px-8 py-3.5 text-xs font-black text-slate-950 uppercase tracking-widest shadow-lg transition-all hover:scale-105"
              >
                Eksploruj Hackathony
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
