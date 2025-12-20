import { useState } from 'react'
import './App.css'
import { HackathonsPage } from './components/HackathonsPage'
type View = 'cv' | 'hackathons'

const techTiles = [
  { name: 'React', className: 'devicon-react-original colored' },
  { name: 'Django', className: 'devicon-django-plain colored' },
  { name: 'Node.js', className: 'devicon-nodejs-plain colored' },
  { name: 'TypeScript', className: 'devicon-typescript-plain colored' },
  { name: 'JavaScript', className: 'devicon-javascript-plain colored' },
  { name: 'Python', className: 'devicon-python-plain' },
  { name: 'PostgreSQL', className: 'devicon-postgresql-plain colored' },
  { name: 'SQL Server', className: 'devicon-microsoftsqlserver-plain colored' },
  { name: 'Docker', className: 'devicon-docker-plain colored' },
  { name: 'Java', className: 'devicon-java-plain colored' },
  { name: 'Redis', className: 'devicon-redis-plain colored' },
  { name: 'MongoDB', className: 'devicon-mongodb-plain colored' },
  { name: 'Git', className: 'devicon-git-plain colored' },
  { name: 'HTML', className: 'devicon-html5-plain colored' },
  { name: 'CSS', className: 'devicon-css3-plain colored' },
]

function App() {
  const [view, setView] = useState<View>('cv')

  // osobny ekran hackathonów
 if (view === 'hackathons') {
  return <HackathonsPage onBackToCv={() => setView('cv')} />
}

  // ekran CV
  return (
    <div className="min-h-screen bg-[#050816] text-slate-100">
      <div className="flex min-h-screen w-full flex-col gap-4 px-3 py-4 lg:flex-row lg:gap-6 lg:px-4 lg:py-6">
        {/* LEWY PASEK – technologie */}
        <aside className="w-full rounded-3xl bg-slate-900/60 p-3 shadow-xl ring-1 ring-slate-800/80 backdrop-blur lg:w-1/4">
          <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
            Technologie
          </h2>
          <div className="grid grid-cols-3 gap-3">
            {techTiles.map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col items-center justify-center gap-[2px] rounded-2xl bg-slate-800/80 text-center shadow-md ring-1 ring-slate-700 transition hover:translate-y-[1px] hover:bg-slate-800 aspect-square px-0.5 py-0.5"
              >
                <i
                  className={`${tech.className} text-[1.9rem] sm:text-[2.2rem] ${
                    tech.name === 'Python' ? 'text-[#3776AB]' : ''
                  }`}
                />
                <span className="text-[8px] sm:text-[9px] font-medium text-slate-100">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </aside>

        {/* PRAWA STRONA – CV */}
        <main className="w-full flex-1 rounded-3xl bg-gradient-to-br from-slate-900/80 via-slate-900/40 to-slate-900/90 p-4 shadow-xl ring-1 ring-slate-800/80 backdrop-blur">
          <div className="space-y-8">
            {/* HEADER */}
            <header className="space-y-4 text-center">
              <p className="text-[11px] uppercase tracking-[0.35em] text-slate-500">
                Full‑stack / Backend Developer
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-[0.25em] leading-tight">
                MATEUSZ <span className="text-cyan-400">CIOŁKOWSKI</span>
              </h1>
              <p className="mx-auto max-w-2xl text-xs sm:text-sm md:text-base text-slate-300">
                Tworzę aplikacje webowe end‑to‑end: backend w Django/Node.js/Python, bazy danych
                PostgreSQL i SQL Server oraz nowoczesny frontend w React/Next.js, TypeScript
                i JavaScript.
              </p>
            </header>

            {/* O MNIE */}
            <section className="space-y-3 text-center">
              <h2 className="text-sm sm:text-base font-semibold uppercase tracking-[0.18em] text-slate-200">
                O mnie
              </h2>
              <p className="mx-auto max-w-3xl text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed">
                Jestem studentem informatyki i developerem, który lubi projektować architekturę
                systemów, optymalizować zapytania do baz danych i tworzyć wygodne interfejsy
                użytkownika. Pracuję głównie z projektami webowymi, w których łączę backend,
                frontend i elementy DevOps.
              </p>
            </section>

            {/* PROJEKTY */}
            <section className="space-y-4 text-center">
              <h2 className="text-sm sm:text-base font-semibold uppercase tracking-[0.18em] text-slate-200">
                Wybrane projekty
              </h2>
              <div className="space-y-3 text-xs sm:text-sm md:text-base text-slate-300">
                <div>
                  <h3 className="font-medium text-slate-100">Projekt 1</h3>
                  <p className="mx-auto max-w-2xl">
                    Krótki opis projektu (np. aplikacja do śledzenia treningów, panel admina,
                    dashboard analityczny itp.).
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-slate-100">Projekt 2</h3>
                  <p className="mx-auto max-w-2xl">
                    Kolejny projekt, w którym używasz np. Django + React + PostgreSQL / Docker.
                  </p>
                </div>
              </div>
            </section>

            {/* przycisk do strony hackathonów – zmiana widoku w aplikacji */}
            <div className="pt-2 text-center">
              <button
                onClick={() => setView('hackathons')}
                className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-5 py-2 text-xs font-semibold text-slate-900 shadow-md transition hover:bg-cyan-400"
              >
                Zobacz hackathony
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
