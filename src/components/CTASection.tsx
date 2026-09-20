import Link from 'next/link';
import FadeIn from './FadeIn';
import Button from './Button';

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
            <Button 
              href="/contato" 
              variant="solid-blue"
              size="xl"
              className="w-full sm:w-auto"
            >
              Iniciar meu Projeto
            </Button>
            <Button 
              href="https://wa.me/5511999999999" 
              target="_blank" 
              variant="outline-alt"
              size="xl"
              className="w-full sm:w-auto"
            >
              Falar pelo WhatsApp
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
