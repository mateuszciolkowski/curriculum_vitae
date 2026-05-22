// Globalne style przycisków dla całej aplikacji
// Używaj tych klas aby zapewnić spójność w całej aplikacji

export const buttonStyles = {
  // ── Stare warianty (dark/cyan) — zostają na wypadek użycia gdzieś indziej ──
  cyan: "flex items-center justify-center gap-2 rounded-lg bg-cyan-500 px-4 py-2 !text-xs !font-bold !text-slate-950 uppercase !tracking-wider shadow-lg transition-all hover:bg-cyan-600 !leading-tight",
  dark: "flex items-center justify-center gap-2 rounded-xl bg-slate-800/50 px-4 py-2 text-xs font-bold text-cyan-400 ring-1 ring-slate-700/50 transition hover:bg-slate-700 hover:text-white",
  cyanSmall:
    "flex items-center justify-center gap-1.5 rounded-lg bg-cyan-500 px-3 py-1.5 text-[10px] font-bold !text-slate-950 uppercase tracking-wider shadow-lg transition-all hover:bg-cyan-600",
  darkSmall:
    "flex items-center justify-center gap-1.5 rounded-lg bg-slate-800/50 px-3 py-1.5 text-[10px] font-bold text-cyan-400 ring-1 ring-slate-700/50 transition hover:bg-slate-700 hover:text-white",

  // ── Editorial / warm-paper warianty ──
  paperPrimary:
    "flex items-center justify-center gap-2 rounded-md bg-stone-900 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#f4ecdc] transition-all hover:bg-orange-700",
  paperGhost:
    "flex items-center justify-center gap-2 rounded-md border border-stone-300 bg-transparent px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-stone-700 transition-all hover:border-orange-700 hover:text-orange-700",
  paperPrimarySmall:
    "flex items-center justify-center gap-1.5 rounded-md bg-stone-900 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#f4ecdc] transition-all hover:bg-orange-700",
  paperGhostSmall:
    "flex items-center justify-center gap-1.5 rounded-md border border-stone-300 bg-transparent px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-stone-700 transition-all hover:border-orange-700 hover:text-orange-700",
} as const;
