// Globalne style przycisków dla całej aplikacji
// Używaj tych klas aby zapewnić spójność w całej aplikacji

export const buttonStyles = {
  // Przyciski z jasnym tłem (cyan)
  cyan: "flex items-center justify-center gap-2 rounded-lg bg-cyan-500 px-4 py-2 !text-xs !font-bold !text-slate-950 uppercase !tracking-wider shadow-lg transition-all hover:bg-cyan-600 !leading-tight",

  // Przyciski z ciemnym tłem (slate)
  dark: "flex items-center justify-center gap-2 rounded-xl bg-slate-800/50 px-4 py-2 text-xs font-bold text-cyan-400 ring-1 ring-slate-700/50 transition hover:bg-slate-700 hover:text-white",

  // Warianty dla różnych rozmiarów
  cyanSmall:
    "flex items-center justify-center gap-1.5 rounded-lg bg-cyan-500 px-3 py-1.5 text-[10px] font-bold !text-slate-950 uppercase tracking-wider shadow-lg transition-all hover:bg-cyan-600",

  darkSmall:
    "flex items-center justify-center gap-1.5 rounded-lg bg-slate-800/50 px-3 py-1.5 text-[10px] font-bold text-cyan-400 ring-1 ring-slate-700/50 transition hover:bg-slate-700 hover:text-white",
} as const;
