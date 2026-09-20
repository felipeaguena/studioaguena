import { ReactNode } from 'react';
import FadeIn from './FadeIn';
import ScrollIndicator from './ScrollIndicator';

interface PageHeroProps {
  badge?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
  className?: string;
  hasBorder?: boolean;
  showScrollIndicator?: boolean;
  targetId?: string;
}

export default function PageHero({
  badge,
  title,
  subtitle,
  children,
  className = "",
  hasBorder = false,
  showScrollIndicator = true,
  targetId,
}: PageHeroProps) {
  return (
    <section
      className={`relative overflow-hidden pt-8 sm:pt-12 pb-20 sm:pb-28 px-4 text-center ${
        hasBorder ? "border-b border-blue-200/80" : ""
      } transition-colors duration-300 ${className}`}
    >
      {/* Efeito de iluminação ambiental no fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[500px] md:w-[700px] h-[250px] sm:h-[350px] bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-blue-500/10 dark:from-blue-600/15 dark:via-indigo-600/15 dark:to-blue-600/15 blur-[100px] sm:blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-5xl relative z-10">
        {badge && (
          <FadeIn direction="up" delay={0.1}>
            <span className="inline-block bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 font-semibold px-3.5 py-1.5 rounded-full text-xs uppercase tracking-widest mb-6 border border-blue-200/60 dark:border-blue-800/50">
              {badge}
            </span>
          </FadeIn>
        )}

        <FadeIn direction="up" delay={0.2}>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-slate-900 dark:text-white tracking-tight leading-[1.15] mb-6 break-words">
            {title}
          </h1>
        </FadeIn>

        {subtitle && (
          <FadeIn direction="up" delay={0.3}>
            <p className="text-base sm:text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-10 font-normal">
              {subtitle}
            </p>
          </FadeIn>
        )}

        {children && (
          <FadeIn direction="up" delay={0.4}>
            {children}
          </FadeIn>
        )}
      </div>

      {showScrollIndicator && (
        <ScrollIndicator targetId={targetId} />
      )}
    </section>
  );
}
