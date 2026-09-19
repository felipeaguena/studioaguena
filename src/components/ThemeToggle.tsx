"use client";

import { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={`w-10 h-10 rounded-xl border border-slate-200 dark:border-neutral-900  bg-slate-100/50 dark:bg-slate-800/50 ${className}`} />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
      title={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
      className={`relative p-2.5 rounded-full border transition-all duration-300 flex items-center justify-center group ${
        isDark
          ? "bg-slate-800 border-slate-700 text-amber-400 hover:bg-slate-700 hover:border-amber-400/40"
          : "bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200 hover:border-slate-300"
      } ${className}`}
    >
      {isDark ? (
        // Ícone Sol (Modo Claro)
        <svg
          className="w-5 h-5 transform transition-transform duration-500 rotate-0 hover:rotate-90"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ) : (
        // Ícone Lua (Modo Escuro)
        <svg
          className="w-5 h-5 transform transition-transform duration-500 -rotate-12 group-hover:rotate-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      )}
    </button>
  );
}
