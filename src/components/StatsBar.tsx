import FadeIn from './FadeIn';

export default function StatsBar() {
  return (
    <section className="bg-white dark:bg-slate-950 pt-12 py-12 px-4 transition-colors duration-300">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:divide-x divide-slate-200 dark:divide-slate-800">
          <FadeIn direction="up" delay={0.1}>
            <div className="px-2">
              <h3 className="text-4xl md:text-5xl font-semibold text-blue-600 dark:text-blue-400 mb-2">5+</h3>
              <p className="text-slate-600 dark:text-slate-400 font-medium uppercase tracking-wider text-xs md:text-sm">Anos de Experiência</p>
            </div>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <div className="px-2">
              <h3 className="text-4xl md:text-5xl font-semibold text-blue-600 dark:text-blue-400 mb-2">40+</h3>
              <p className="text-slate-600 dark:text-slate-400 font-medium uppercase tracking-wider text-xs md:text-sm">Projetos Entregues</p>
            </div>
          </FadeIn>
          <FadeIn direction="up" delay={0.3}>
            <div className="px-2">
              <h3 className="text-4xl md:text-5xl font-semibold text-blue-600 dark:text-blue-400 mb-2">100%</h3>
              <p className="text-slate-600 dark:text-slate-400 font-medium uppercase tracking-wider text-xs md:text-sm">Foco em Resultados</p>
            </div>
          </FadeIn>
          <FadeIn direction="up" delay={0.4}>
            <div className="px-2">
              <h3 className="text-4xl md:text-5xl font-semibold text-blue-600 dark:text-blue-400 mb-2">12+</h3>
              <p className="text-slate-600 dark:text-slate-400 font-medium uppercase tracking-wider text-xs md:text-sm">Nichos Atendidos</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
