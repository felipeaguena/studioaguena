import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import FadeIn from "@/components/FadeIn";
import StatsBar from "@/components/StatsBar";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import ScrollIndicator from "@/components/ScrollIndicator";
import fs from 'fs';
import path from 'path';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const projectsFilePath = path.join(process.cwd(), 'data', 'projects.json');
  const projectsFile = fs.readFileSync(projectsFilePath, 'utf8');
  const { web, social } = JSON.parse(projectsFile);
  
  const recentProjects = [...web.slice(0, 2), ...social.slice(0, 2)];

  return (
    <div className="pt-16">
      
      {/* 1. Hero Section com Imagem de Fundo e Camada Gradiente Adaptativa */}
      <section id="about" className="min-h-[85vh] sm:min-h-[88vh] flex items-center relative overflow-hidden py-16 sm:py-24 pb-20 sm:pb-28 px-4 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
        
        {/* Imagem de Fundo (Camada 0) */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/felipe.jpg" 
            alt="Studio Aguena - Felipe Aguena" 
            fill 
            className="object-cover object-[center_top] md:object-[80%_center] opacity-25 dark:opacity-35 transition-opacity duration-300" 
            priority 
          />
        </div>

        {/* Camadas Gradientes para Alto Contraste e Leitura Clara (Camada 1) */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-slate-50/80 via-slate-50/50 to-slate-50/10 dark:from-slate-950/80 dark:via-slate-950/50 dark:to-slate-950/25 transition-colors duration-300"></div>
        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-slate-50 to-transparent via-transparent dark:from-black to-black/60 dark:to-black/60 transition-colors duration-300"></div>
        <div className="absolute inset-0 z-[1] bg-blue-500/5 dark:bg-blue-600/10 pointer-events-none"></div>

        {/* Conteúdo Central (Camada 2) */}
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="max-w-3xl flex flex-col items-start space-y-6">
            <FadeIn direction="up" delay={0.1}>
              <span className="inline-block bg-blue-100 dark:bg-blue-950/80 border border-blue-200/60 dark:border-blue-800/50 text-blue-700 dark:text-blue-300 font-semibold px-3.5 py-1.5 rounded-full text-xs uppercase tracking-widest backdrop-blur-md">
                Studio Aguena • Desenvolvimento & Design
              </span>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold text-slate-900 dark:text-white leading-tight">
                Olá, eu sou <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 dark:from-blue-400 dark:via-indigo-300 dark:to-blue-400">
                  Felipe Aguena
                </span>
              </h1>
            </FadeIn>
            <FadeIn direction="up" delay={0.3}>
              <p className="text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                Desenvolvedor Front-end e Especialista em Design Estratégico. 
                Transformo ideias em <strong className="text-slate-900 dark:text-white font-semibold">sites de alta conversão</strong> e <strong className="text-slate-900 dark:text-white font-semibold">identidades visuais</strong> que vendem.
              </p>
            </FadeIn>
            <FadeIn direction="up" delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
                <Link href="/projetos" className="w-full sm:w-auto text-center bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-blue-500/25 hover:shadow-xl hover:-translate-y-0.5 transform duration-200">
                  Ver meus Projetos
                </Link>
                <Link href="/contato" className="w-full sm:w-auto text-center border-2 border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 hover:bg-white dark:hover:bg-slate-800 backdrop-blur-md text-slate-800 dark:text-slate-100 px-8 py-4 rounded-xl font-semibold transition-all shadow-sm">
                  Fale Comigo
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Indicador de rolagem animado */}
        <ScrollIndicator targetId="#stats" />
      </section>

      {/* Barra de Números */}
      <div id="stats">
        <StatsBar />
      </div>

      {/* 2. Soluções Resumidas */}
      <Section id="solucoes" title="Soluções Estratégicas" subtitle="Como ajudamos sua marca a se destacar e vender mais no ambiente digital." className="bg-slate-50 dark:bg-slate-900/40">
        <div className="grid md:grid-cols-2 gap-8">
          <FadeIn direction="up" delay={0.1}>
            <Link href="/solucoes#desenvolvimento-web" className="group block bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-500/50 transition-all h-full">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-blue-500 transition-colors">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Desenvolvimento Web</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">Sites institucionais, e-commerces e landing pages focadas em velocidade ultrarrápida e alta conversão utilizando Next.js e React.</p>
              <span className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold group-hover:translate-x-1 transition-transform">
                Explorar Solução Web
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </span>
            </Link>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.2}>
            <Link href="/solucoes#design-social-media" className="group block bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:border-indigo-200 dark:hover:border-indigo-500/50 transition-all h-full">
              <div className="w-14 h-14 bg-indigo-100 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white dark:group-hover:bg-indigo-500 transition-colors">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Social Media & Design</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">Identidades visuais impactantes, criativos magnéticos para anúncios e gestão visual de redes sociais para construir autoridade imediata.</p>
              <span className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-semibold group-hover:translate-x-1 transition-transform">
                Explorar Solução de Design
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </span>
            </Link>
          </FadeIn>
        </div>

        <FadeIn direction="up" delay={0.3}>
          <div className="text-center mt-12">
            <Link href="/solucoes" className="inline-flex items-center bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white font-semibold px-8 py-4 rounded-xl transition-colors shadow-md">
              Ver detalhes de todas as soluções
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </FadeIn>
      </Section>

      {/* 3. Projetos Recentes */}
      <Section id="work" title="Trabalhos Recentes" subtitle="Um pouco do que venho construindo ultimamente.">
        <div className="grid md:grid-cols-2 gap-8">
          {recentProjects.map((project: any, index: number) => (
            <FadeIn key={project.id} direction="up" delay={0.1 * index}>
              <ProjectCard project={project} hoverColor={project.category.includes('Social') ? 'indigo' : 'blue'} />
            </FadeIn>
          ))}
        </div>
        <FadeIn direction="up" delay={0.3}>
          <div className="text-center mt-12">
            <a href="/projetos" className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:underline">
              Ver portfólio completo
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>
        </FadeIn>
      </Section>

      {/* Como eu trabalho (Processo) */}
      <ProcessSection />

      {/* Depoimentos */}
      <TestimonialsSection className="bg-slate-50 dark:bg-slate-900/40" />

      {/* CTA Final */}
      <CTASection />

    </div>
  );
}
