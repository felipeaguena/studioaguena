import { ReactNode } from "react";
import FadeIn from "./FadeIn";

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, title, subtitle, children, className = "" }: SectionProps) {
  return (
    <FadeIn key={id} direction="up" delay={0.1}>
    <section id={id} className={`py-20 px-4 transition-colors duration-300 ${className}`}>
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 dark:text-white mb-4">{title}</h2>
          {subtitle && <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">{subtitle}</p>}
        </div>
        <div>{children}</div>
      </div>
    </section>
    </FadeIn>
  );
}
