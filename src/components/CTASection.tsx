import Link from 'next/link';
import FadeIn from './FadeIn';

export default function CTASection() {
  return (
    <section className="py-24 px-4 bg-white dark:bg-slate-950 text-center relative overflow-hidden   /80 transition-colors duration-300">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[350px] bg-blue-500/10 dark:bg-blue-600/20 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <FadeIn direction="up" delay={0.1}>
          <h2 className="text-4xl md:text-6xl font-semibold text-slate-900 dark:text-white mb-6 tracking-tight">
            Pronto para decolar seu projeto?
          </h2>
        </FadeIn>
        <FadeIn direction="up" delay={0.2}>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Não deixe sua ideia no papel. Vamos conversar sobre o seu negócio e entender como a tecnologia e o design estratégico podem alavancar suas vendas.
          </p>
        </FadeIn>
        <FadeIn direction="up" delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/contato" 
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-semibold px-10 py-5 rounded-xl transition-all shadow-lg hover:shadow-blue-500/25 hover:shadow-xl hover:-translate-y-0.5 transform duration-200"
            >
              Iniciar meu Projeto
            </Link>
            <Link 
              href="https://wa.me/5511999999999" 
              target="_blank" 
              className="w-full sm:w-auto border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-800 dark:text-white font-semibold px-10 py-5 rounded-xl transition-all shadow-sm hover:-translate-y-0.5 transform duration-200"
            >
              Falar pelo WhatsApp
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
