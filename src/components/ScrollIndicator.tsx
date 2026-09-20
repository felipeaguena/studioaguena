"use client";

interface ScrollIndicatorProps {
  targetId?: string;
  className?: string;
  label?: string;
}

export default function ScrollIndicator({
  targetId,
  className = "",
  label = "Rolar para baixo",
}: ScrollIndicatorProps) {
  const handleScroll = () => {
    if (targetId) {
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    // Caso nenhum target seja passado ou encontrado, rola uma altura de tela para baixo
    window.scrollBy({
      top: window.innerHeight * 0.75,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={`absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center justify-center cursor-pointer group select-none transition-all duration-300 ${className}`}
      onClick={handleScroll}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleScroll();
        }
      }}
      aria-label={label}
    >
      {/* Ícone Estilo Mouse com Roda Animada */}
      <div className="w-5 h-8 rounded-full border-2 border-slate-300 dark:border-slate-700 group-hover:border-blue-500 dark:group-hover:border-blue-400 transition-colors flex items-start justify-center p-1 shadow-xs bg-white/40 dark:bg-slate-900/40 backdrop-blur-xs">
        <div className="w-1 h-2 bg-slate-400 dark:bg-slate-400 group-hover:bg-blue-600 dark:group-hover:bg-blue-400 rounded-full animate-bounce transition-colors" />
      </div>

      {/* Seta Chevron Animada */}
      <svg
        className="w-4 h-4 text-slate-400 dark:text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors -mt-0.5 animate-pulse"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.5}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </div>
  );
}
