import Link from 'next/link';
import FadeIn from '@/components/FadeIn';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 px-4 pt-20 transition-colors duration-300">
      <div className="max-w-2xl w-full text-center">
        
        <FadeIn direction="down" delay={0.1}>
          <h1 className="text-[150px] md:text-[200px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 leading-none select-none">
            404
          </h1>
        </FadeIn>
        
        <FadeIn direction="up" delay={0.2}>
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 dark:text-white mb-6">
            Ops! Página não encontrada
          </h2>
        </FadeIn>
        
        <FadeIn direction="up" delay={0.3}>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-lg mx-auto">
            Parece que você acessou um link quebrado ou a página que você estava procurando foi movida para outro lugar.
          </p>
        </FadeIn>
        
        <FadeIn direction="up" delay={0.4}>
          <Link href="/" className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-200">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Voltar para a Página Inicial
          </Link>
        </FadeIn>

      </div>
    </div>
  );
}
