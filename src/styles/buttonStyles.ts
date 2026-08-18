// Globalne style przycisków dla całej aplikacji
export const buttonStyles = {
  // Warianty Warm Paper & Terracotta
  primary:
    "flex items-center justify-center gap-2 rounded-lg bg-orange-700 dark:bg-orange-600 px-4 py-2 text-xs font-semibold !text-white shadow-sm transition-all hover:bg-orange-800 dark:hover:bg-orange-500",
  ghost:
    "flex items-center justify-center gap-2 rounded-lg border border-stone-300 dark:border-stone-700 bg-stone-100/90 dark:bg-stone-800/90 px-4 py-2 text-xs font-semibold text-stone-800 dark:text-stone-200 transition-all hover:border-stone-400 dark:hover:border-stone-600 hover:text-orange-700 dark:hover:text-orange-400",
  paperPrimary:
    "flex items-center justify-center gap-2 rounded-lg bg-stone-900 dark:bg-stone-100 px-4 py-2 text-xs font-semibold text-white dark:text-stone-900 transition-all hover:bg-orange-700 dark:hover:bg-orange-400 dark:hover:text-stone-950 shadow-sm",
  paperGhost:
    "flex items-center justify-center gap-2 rounded-lg border border-stone-300 dark:border-stone-700 bg-transparent px-4 py-2 text-xs font-semibold text-stone-700 dark:text-stone-200 transition-all hover:border-orange-700 dark:hover:border-orange-400 hover:text-orange-700 dark:hover:text-orange-400",
  paperPrimarySmall:
    "flex items-center justify-center gap-1.5 rounded-lg bg-stone-900 dark:bg-stone-100 px-3 py-1.5 text-xs font-semibold text-white dark:text-stone-900 transition-all hover:bg-orange-700 dark:hover:bg-orange-400 dark:hover:text-stone-950",
  paperGhostSmall:
    "flex items-center justify-center gap-1.5 rounded-lg border border-stone-300 dark:border-stone-700 bg-stone-100/80 dark:bg-stone-800/80 px-3 py-1.5 text-xs font-semibold text-stone-700 dark:text-stone-300 transition-all hover:border-orange-700 dark:hover:border-orange-400 hover:text-orange-700 dark:hover:text-orange-400",

  // Kompatybilność wsteczna
  cyan: "flex items-center justify-center gap-2 rounded-lg bg-orange-700 dark:bg-orange-600 px-4 py-2 text-xs font-semibold !text-white shadow-sm transition-all hover:bg-orange-800 dark:hover:bg-orange-500",
  dark: "flex items-center justify-center gap-2 rounded-lg border border-stone-300 dark:border-stone-700 bg-stone-100/90 dark:bg-stone-800/90 px-4 py-2 text-xs font-semibold text-stone-800 dark:text-stone-200 transition-all hover:border-stone-400 dark:hover:border-stone-600 hover:text-orange-700 dark:hover:text-orange-400",
  cyanSmall:
    "flex items-center justify-center gap-1.5 rounded-lg bg-orange-700 dark:bg-orange-600 px-3 py-1.5 text-xs font-semibold !text-white shadow-sm transition-all hover:bg-orange-800 dark:hover:bg-orange-500",
  darkSmall:
    "flex items-center justify-center gap-1.5 rounded-lg border border-stone-300 dark:border-stone-700 bg-stone-100/80 dark:bg-stone-800/80 px-3 py-1.5 text-xs font-semibold text-stone-700 dark:text-stone-300 transition-all hover:border-orange-700 dark:hover:border-orange-400 hover:text-orange-700 dark:hover:text-orange-400",
} as const;
