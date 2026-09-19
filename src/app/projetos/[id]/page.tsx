import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import FadeIn from '@/components/FadeIn';
import CTASection from '@/components/CTASection';

export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  // O Next.js 15+ espera que params seja aguardado.
  const resolvedParams = await params;
  const { id } = resolvedParams;

  const projectsFilePath = path.join(process.cwd(), 'data', 'projects.json');
  const projectsFile = fs.readFileSync(projectsFilePath, 'utf8');
  const { web, social } = JSON.parse(projectsFile);
  
  const allProjects = [...web, ...social];
  const project = allProjects.find((p: any) => p.id === id);
  
  if (!project) return notFound();

  return (
    <div className="pt-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* Botão Voltar */}
      <div className="container mx-auto max-w-5xl px-4 mb-8">
        <Link href="/projetos" className="inline-flex items-center text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Voltar para Projetos
        </Link>
      </div>

      {/* Hero do Projeto */}
      <header className="container mx-auto max-w-5xl px-4 mb-12 sm:mb-16">
        <div className="flex flex-col md:flex-row gap-8 items-start md:items-end justify-between pb-8 sm:pb-12">
          <div className="md:w-2/3">
            <FadeIn direction="up" delay={0.1}>
              <p className="text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-widest text-sm mb-4">{project.category}</p>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold text-slate-900 dark:text-white leading-tight mb-6 break-words">
                {project.title}
              </h1>
            </FadeIn>
            <FadeIn direction="up" delay={0.3}>
              <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.description}
              </p>
            </FadeIn>
          </div>
          
          <div className="md:w-1/3 flex flex-col gap-6 md:text-right bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl w-full">
            <FadeIn direction="left" delay={0.2}>
              <div>
                <h4 className="text-sm font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">Cliente</h4>
                <p className="text-lg font-semibold text-slate-900 dark:text-white">{project.client}</p>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.3}>
              <div>
                <h4 className="text-sm font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">Ano</h4>
                <p className="text-lg font-semibold text-slate-900 dark:text-white">{project.year}</p>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.4}>
              <div>
                <h4 className="text-sm font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">Tecnologias</h4>
                <p className="text-base text-slate-700 dark:text-slate-300 font-medium">{project.technologies.join(', ')}</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </header>

      {/* Imagem Principal */}
      <section className="container mx-auto max-w-6xl px-4 mb-20">
        <FadeIn direction="up" delay={0.2}>
          <div className="w-full h-[240px] sm:h-[400px] md:h-[600px] bg-slate-200 dark:bg-slate-800 rounded-3xl overflow-hidden relative shadow-2xl">
             <Image src={project.imageUrl} alt={project.title} fill className="object-cover" priority />
          </div>
        </FadeIn>
      </section>

      {/* Desafio e Solução */}
      <section className="container mx-auto max-w-5xl px-4 mb-20">
        <div className="grid md:grid-cols-2 gap-16">
          <FadeIn direction="up" delay={0.1}>
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-red-100 dark:bg-red-950/60 text-red-600 dark:text-red-400 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                </div>
                <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">O Desafio</h2>
              </div>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">{project.challenge}</p>
            </div>
          </FadeIn>
          <FadeIn direction="up" delay={0.3}>
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">A Solução</h2>
              </div>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">{project.solution}</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Resultados */}
      <section className="bg-slate-900 dark:bg-slate-900/60 py-20 px-4 mb-20 text-white  border-slate-800">
        <div className="container mx-auto max-w-5xl text-center">
          <FadeIn direction="up" delay={0.1}>
            <h2 className="text-3xl font-semibold mb-12">Resultados Alcançados</h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8">
            {project.results.map((res: string, i: number) => (
              <FadeIn key={i} direction="up" delay={0.2 + (i * 0.1)}>
                <div className="p-8 border border-slate-800 rounded-2xl bg-slate-800/50 backdrop-blur-sm h-full">
                  <div className="text-blue-400 mb-4">
                    <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <p className="text-xl font-medium">{res}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Galeria de Detalhes (2 Colunas) */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="container mx-auto max-w-6xl px-4 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.gallery.map((img: string, i: number) => (
              <FadeIn key={i} direction="up" delay={0.1}>
                <div className="w-full rounded-3xl overflow-hidden shadow-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-neutral-900/50  flex items-center justify-center">
                  <Image 
                    src={img} 
                    alt={`Detalhe do projeto ${i + 1}`} 
                    width={1200} 
                    height={1200} 
                    className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500" 
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </section>
      )}

      {/* CTA Final */}
      <CTASection />
      
    </div>
  );
}
