import { useState } from 'react'

const hackathons = [
  {
    id: 'fintech',
    name: 'Fintech Hackathon',
    role: 'Full‑stack / Backend',
    description:
      'Aplikacja fintech do porównywania kart oraz rankingów z ekranami rankingów, wydarzeń i strony głównej.',
    images: [
      '/src/assets/images/fintech/stronaglowna.png',
      '/src/assets/images/fintech/ranking.png',
      '/src/assets/images/fintech/wydarzenia.png',
      '/src/assets/images/fintech/kartalodz.png',
    ],
  },
  {
    id: 'pharmaradar',
    name: 'PharmaRadar',
    role: 'Backend / Data',
    description:
      'Platforma do śledzenia newsów farmaceutycznych, z landing page, listą newsów i ekranem analitycznym.',
    images: [
      '/src/assets/images/pharmaradar/Landing.png',
      '/src/assets/images/pharmaradar/News.png',
      '/src/assets/images/pharmaradar/Pharma.png',
    ],
  },
  {
    id: 'wellness',
    name: 'Wellness Tracker',
    role: 'Full‑stack',
    description:
      'Aplikacja wellness do monitorowania nastroju, dziennika, czatu oraz wizualizacji danych stresu.',
    images: [
      '/src/assets/images/wellness/powitalna.png',
      '/src/assets/images/wellness/pytania.png',
      '/src/assets/images/wellness/chat.png',
      '/src/assets/images/wellness/wykres.png',
    ],
  },
  {
    id: 'synaptis',
    name: 'Synaptis',
    role: 'Frontend / UX',
    description:
      'Projekt z dopracowanym landingiem i kilkoma ekranami aplikacji, skupiony na prostym, czytelnym UX.',
    images: [
      '/src/assets/images/synaptis/landing.png',
      '/src/assets/images/synaptis/1.png',
      '/src/assets/images/synaptis/2.png',
      '/src/assets/images/synaptis/3.png',
    ],
  },
]

type HackathonsPageProps = {
  onBackToCv: () => void
}

export function HackathonsPage({ onBackToCv }: HackathonsPageProps) {
  const [activeHackathonId, setActiveHackathonId] = useState<string>('fintech')
  const [activeSlideIndex, setActiveSlideIndex] = useState(0)
  const [fullscreenSrc, setFullscreenSrc] = useState<string | null>(null)

  const activeHackathon = hackathons.find((h) => h.id === activeHackathonId)!
  const totalSlides = activeHackathon.images.length

  const goPrevSlide = () => {
    setActiveSlideIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const goNextSlide = () => {
    setActiveSlideIndex((prev) => (prev + 1) % totalSlides)
  }

  const currentImageSrc = activeHackathon.images[activeSlideIndex]

  return (
    <div className="min-h-screen bg-[#050816] text-slate-100">
      <div className="flex min-h-screen w-full flex-col gap-4 px-3 py-4 lg:flex-row lg:gap-6 lg:px-4 lg:py-6">
        {/* LEWY PASEK – lista hackathonów */}
        <aside className="w-full rounded-3xl bg-slate-900/60 p-3 shadow-xl ring-1 ring-slate-800/80 backdrop-blur lg:w-1/4">
  <button
    type="button"
    onClick={onBackToCv}
    className="mb-3 inline-flex items-center rounded-full bg-slate-800 px-3 py-1 text-[11px] font-medium text-slate-200 hover:bg-slate-700"
  >
    ← Wróć do CV
  </button>


          <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
            Hackathony
          </h2>
          <div className="space-y-2">
            {hackathons.map((hack) => (
              <button
                key={hack.id}
                onClick={() => {
                  setActiveHackathonId(hack.id)
                  setActiveSlideIndex(0)
                }}
                className={`w-full rounded-2xl px-3 py-2 text-left text-xs transition ${
                  activeHackathonId === hack.id
                    ? 'bg-cyan-500/90 text-slate-900 shadow-md'
                    : 'bg-slate-800/90 text-slate-200 hover:bg-slate-700'
                }`}
              >
                <p className="text-[10px] uppercase tracking-[0.16em] text-slate-300">
                  {hack.role}
                </p>
                <p className="text-xs font-semibold text-slate-100">{hack.name}</p>
              </button>
            ))}
          </div>
        </aside>

        {/* PRAWA STRONA – opis + galeria */}
        <main className="w-full flex-1 rounded-3xl bg-gradient-to-br from-slate-900/80 via-slate-900/40 to-slate-900/90 p-4 shadow-xl ring-1 ring-slate-800/80 backdrop-blur">
          <div className="space-y-8">
            {/* HEADER */}
            <header className="space-y-2 text-center">
              <p className="text-[11px] uppercase tracking-[0.35em] text-slate-500">
                Hackathony
              </p>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-[0.25em] leading-tight">
                {activeHackathon.name}
              </h1>
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                {activeHackathon.role}
              </p>
            </header>

            {/* OPIS */}
            <section className="text-center">
              <p className="mx-auto max-w-3xl text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed">
                {activeHackathon.description}
              </p>
            </section>

            {/* GALERIA / SLIDER – adaptacja do orientacji + klik na full screen */}
            <section className="space-y-4">
  {/* kontener na strzałki + obraz – pełna szerokość maina */}
  <div className="flex items-center gap-3">
    <button
      onClick={goPrevSlide}
      className="hidden sm:inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-600 bg-slate-900/80 text-slate-200 hover:border-cyan-400 hover:text-cyan-300 transition"
      aria-label="Poprzednie zdjęcie"
    >
      ‹
    </button>

    <div className="relative flex-1 overflow-hidden rounded-2xl border border-slate-700 bg-slate-900/70 py-4">
      <div className="flex h-full w-full items-center justify-center px-2 sm:px-4">
       <img
  src={currentImageSrc}
  alt={`${activeHackathon.name} screenshot ${activeSlideIndex + 1}`}
  onClick={() => setFullscreenSrc(currentImageSrc)}
  className="max-h-[600px] w-full cursor-zoom-in object-contain"
 />
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-black/25 via-transparent to-black/10" />
      <div className="absolute bottom-2 right-3 rounded-full bg-black/60 px-3 py-1 text-[11px] text-slate-100">
        {activeSlideIndex + 1}/{totalSlides}
      </div>
    </div>

    <button
      onClick={goNextSlide}
      className="hidden sm:inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-600 bg-slate-900/80 text-slate-200 hover:border-cyan-400 hover:text-cyan-300 transition"
      aria-label="Następne zdjęcie"
    >
      ›
    </button>
  </div>

  {/* kropki pod całą szerokością sekcji */}
  <div className="flex justify-center gap-2">
    {activeHackathon.images.map((_, index) => (
      <button
        key={index}
        onClick={() => setActiveSlideIndex(index)}
        className={`h-1.5 w-4 rounded-full transition ${
          index === activeSlideIndex ? 'bg-cyan-400' : 'bg-slate-600'
        }`}
        aria-label={`Przejdź do zdjęcia ${index + 1}`}
      />
    ))}
  </div>
</section>
          </div>
        </main>
      </div>

      {/* FULLSCREEN MODAL – kliknięte zdjęcie na cały ekran */}
      {fullscreenSrc && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={() => setFullscreenSrc(null)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-slate-100 hover:bg-black/80"
          >
            Zamknij
          </button>
          <img
            src={fullscreenSrc}
            alt="Fullscreen preview"
            className="max-h-[95vh] max-w-[95vw] object-contain"
          />
        </div>
      )}
    </div>
  )
}
