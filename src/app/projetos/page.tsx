import Section from "@/components/Section";
import fs from 'fs';
import path from 'path';
import ProjectCard from "@/components/ProjectCard";
import FadeIn from "@/components/FadeIn";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: 'Projetos | Studio Aguena',
  description: 'Conheça meus trabalhos em Desenvolvimento Web e Social Media.',
};

export default function ProjetosPage() {
  // Lendo os dados dos projetos de forma segura no servidor
  const projectsFilePath = path.join(process.cwd(), 'data', 'projects.json');
  const projectsFile = fs.readFileSync(projectsFilePath, 'utf8');
  const { web, social } = JSON.parse(projectsFile);

  return (
    <div className="pt-24 pb-0 bg-white dark:bg-slate-950 transition-colors duration-300">
      
      {/* Cabeçalho da página */}
      <PageHero
        badge="Cases de Sucesso & Portfólio"
        title={
          <>
            Projetos reais construídos para gerar{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 dark:from-blue-400 dark:via-indigo-300 dark:to-blue-400">
              resultados extraordinários.
            </span>
          </>
        }
        subtitle="Explore nossos cases de desenvolvimento web de alta performance e design estratégico. Cada entrega une estética refinada, velocidade extrema e foco em conversão."
      >
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 w-full sm:w-auto">
          <a 
            href="#web" 
            className="w-full sm:w-auto inline-flex items-center justify-center bg-slate-900 hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-500 text-white font-semibold px-7 py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 transform duration-200"
          >
            <svg className="w-5 h-5 mr-2 text-blue-400 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Desenvolvimento Web ({web.length})
          </a>
          <a 
            href="#social" 
            className="w-full sm:w-auto inline-flex items-center justify-center bg-white dark:bg-slate-900 border-2 border-slate-200 hover:border-slate-300 dark:hover:border-slate-700 text-slate-800 dark:text-slate-200 font-semibold px-7 py-3.5 rounded-xl transition-all shadow-sm hover:-translate-y-0.5 transform duration-200"
          >
            <svg className="w-5 h-5 mr-2 text-indigo-500 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Social Media & Design ({social.length})
          </a>
        </div>
      </PageHero>

      {/* Seção 1: Desenvolvimento Web */}
      <Section id="web" title="Desenvolvimento Web" subtitle="Sites de alta performance, Landing Pages focadas em conversão e E-commerces rápidos construídos com as melhores tecnologias." className="scroll-mt-20 bg-white dark:bg-slate-950">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {web.map((proj: any, index: number) => (
            <FadeIn key={proj.id} direction="up" delay={0.1 * index}>
              <ProjectCard project={proj} hoverColor="blue" />
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Seção 2: Social Media e Design */}
      <Section id="social" title="Social Media & Design" subtitle="Identidades visuais marcantes, criativos de alta conversão para tráfego pago e gestão estratégica de redes sociais." className="scroll-mt-20 bg-slate-50 dark:bg-slate-900/40">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {social.map((proj: any, index: number) => (
            <FadeIn key={proj.id} direction="up" delay={0.1 * index}>
              <ProjectCard project={proj} hoverColor="indigo" />
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* CTA Final */}
      <CTASection />

    </div>
  );
}
