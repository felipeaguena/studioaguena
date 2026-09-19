import FadeIn from './FadeIn';

export default function ProcessSection() {
  return (
    <section className="py-20 px-4 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto max-w-6xl">
        <FadeIn direction="up" delay={0.1}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 dark:text-white mb-4">Como eu trabalho</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Meu processo foi refinado para ser transparente, ágil e garantir que o resultado final supere as expectativas.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            { step: "01", title: "Discovery", desc: "Reunião profunda para entender seu negócio, público, dores e objetivos." },
            { step: "02", title: "Estratégia & UX", desc: "Desenho da jornada do usuário, wireframes e planejamento de conversão." },
            { step: "03", title: "UI & Código", desc: "Criação do visual de alto impacto e programação com tecnologia de ponta." },
            { step: "04", title: "Lançamento", desc: "Testes finais, otimização de SEO/Performance e entrega com treinamento." }
          ].map((phase, index) => (
            <FadeIn key={index} direction="up" delay={0.2 + (index * 0.1)}>
              <div className="relative pt-8">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">{phase.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{phase.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
