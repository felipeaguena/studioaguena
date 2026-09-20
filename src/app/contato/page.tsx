import FadeIn from '@/components/FadeIn';
import PageHero from '@/components/PageHero';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contato',
  description: 'Entre em contato com o Studio Aguena para orçamentos, parcerias e desenvolvimento de projetos digitais.',
  openGraph: {
    title: 'Contato | Studio Aguena',
    description: 'Entre em contato com o Studio Aguena para orçamentos, parcerias e desenvolvimento de projetos digitais.',
    url: 'https://studioaguena.com.br/contato',
  },
  alternates: {
    canonical: 'https://studioaguena.com.br/contato',
  }
};

export default function ContatoPage() {
  return (
    <div className="pt-24 pb-20 bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors duration-300">
      
      {/* 1. Cabeçalho / Hero da Página de Contato */}
      <PageHero
        badge="Inicie seu Projeto • Studio Aguena"
        targetId="#contato-form"
        title={
          <>
            Vamos construir algo{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 dark:from-blue-400 dark:via-indigo-300 dark:to-blue-400">
              incrível juntos?
            </span>
          </>
        }
        subtitle="Seja para um novo site de alta conversão, uma identidade visual marcante ou uma consultoria estratégica: me conte sobre seu negócio e receba uma proposta sob medida."
        className="mb-12 sm:mb-16"
      >
        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-2.5 sm:gap-4 text-xs md:text-sm font-medium text-slate-600 dark:text-slate-400 w-full">
          <span className="w-full sm:w-auto inline-flex items-center justify-center bg-white dark:bg-slate-900 px-4 py-2.5 rounded-xl shadow-xs border border-slate-100 dark:border-slate-800">
            <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2.5 animate-pulse"></span>
            Disponível para novos projetos
          </span>
          <span className="w-full sm:w-auto inline-flex items-center justify-center bg-white dark:bg-slate-900 px-4 py-2.5 rounded-xl shadow-xs border border-slate-100 dark:border-slate-800">
            <svg className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            Resposta em até 24h úteis
          </span>
          <span className="w-full sm:w-auto inline-flex items-center justify-center bg-white dark:bg-slate-900 px-4 py-2.5 rounded-xl shadow-xs border border-slate-100 dark:border-slate-800">
            <svg className="w-4 h-4 text-indigo-600 dark:text-indigo-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            Atendimento direto sem burocracia
          </span>
        </div>
      </PageHero>

      {/* 2. Conteúdo Principal: Informações e Formulário */}
      <div id="contato-form" className="container mx-auto max-w-6xl px-4 scroll-mt-24">
        <div className="flex flex-col lg:flex-row gap-12 max-w-5xl mx-auto">
          
          {/* Informações de Contato */}
          <div className="lg:w-1/3 space-y-8">
            <FadeIn direction="right" delay={0.2}>
              <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm ">
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">Fale Diretamente</h3>
                
                <div className="space-y-6 text-slate-600 dark:text-slate-300">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">WhatsApp</p>
                      <a href="https://wa.me/5511963563013" target="_blank" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">+55 (11) 96356-3013</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">E-mail</p>
                      <a href="mailto:ola@studioaguena.com.br" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">ola@studioaguena.com.br</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">Localização</p>
                      <p>São Paulo, SP - Brasil<br/>Atendimento Global Remoto</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Formulário */}
          <div className="lg:w-2/3">
            <FadeIn direction="up" delay={0.3}>
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 shadow-xl ">
                <form className="flex flex-col gap-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Seu Nome</label>
                      <input type="text" className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-neutral-900 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all" placeholder="Como gosta de ser chamado?" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">E-mail ou WhatsApp</label>
                      <input type="text" className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-neutral-900 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all" placeholder="Onde posso te responder?" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Solução Desejada</label>
                    <select className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-neutral-900 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-slate-700 dark:text-slate-200">
                      <option value="">Selecione uma opção</option>
                      <option value="web">Desenvolvimento de Site / E-commerce</option>
                      <option value="landing">Landing Page de Alta Conversão</option>
                      <option value="social">Design para Redes Sociais</option>
                      <option value="id">Identidade Visual</option>
                      <option value="other">Outro / Parceria</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Sobre o Projeto</label>
                    <textarea rows={5} className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-neutral-900 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all" placeholder="Do que você precisa? Conte-me um pouco sobre seus objetivos e o seu negócio."></textarea>
                  </div>
                  
                  <button type="button" className="w-full bg-blue-600 hover:bg-blue-700 text-white p-5 rounded-xl font-semibold text-lg transition-colors mt-2 shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-200">
                    Enviar Mensagem
                  </button>
                </form>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </div>
  );
}
