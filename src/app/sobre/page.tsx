import Image from 'next/image';
import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import StatsBar from '@/components/StatsBar';
import ProcessSection from '@/components/ProcessSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';

export const metadata = {
  title: 'Sobre Mim | Studio Aguena',
  description: 'Conheça Felipe Aguena, desenvolvedor front-end e especialista em design estratégico.',
};

export default function SobrePage() {
  return (
    <div className="pt-24 pb-0 bg-white dark:bg-slate-950 transition-colors duration-300">
      
      {/* 1. Seção Hero Sobre */}
      <section className="container mx-auto max-w-6xl px-4 mb-20">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2">
            <FadeIn direction="left" delay={0.1}>
              <div className="relative w-full aspect-square md:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl bg-slate-100 dark:bg-slate-800">
                <Image 
                  src="/felipe.jpg" 
                  alt="Felipe Aguena trabalhando" 
                  fill 
                  className="object-cover hover:scale-105 transition-transform duration-700" 
                  priority 
                />
              </div>
            </FadeIn>
          </div>

          <div className="lg:w-1/2 flex flex-col gap-6">
            <FadeIn direction="up" delay={0.2}>
              <h2 className="text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-widest text-sm">Muito prazer</h2>
            </FadeIn>
            <FadeIn direction="up" delay={0.3}>
              <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 dark:text-white leading-tight">
                Eu sou o Felipe Aguena. A mente por trás do <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">Studio Aguena.</span>
              </h1>
            </FadeIn>
            <FadeIn direction="up" delay={0.4}>
              <div className="text-lg text-slate-600 dark:text-slate-300 space-y-4 leading-relaxed">
                <p>
                  Sou Desenvolvedor Front-end e Especialista em Design e Social Media. 
                  Minha missão é ajudar marcas e profissionais a construírem uma presença digital forte, profissional e altamente voltada para conversão.
                </p>
                <p>
                  Não crio apenas "sites bonitos" ou "postagens de Instagram". Eu crio **ecossistemas digitais**. 
                  Entendo que o design precisa atrair e o código precisa converter. 
                  A união dessas duas habilidades me permite entregar soluções completas, desde a identidade visual até a landing page de alta performance.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.5}>
              <div className="pt-6">
                <Link href="/projetos" className="inline-block bg-slate-900 hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-colors shadow-lg mr-4 mb-4">
                  Ver meu Portfólio
                </Link>
                <Link href="/contato" className="inline-block border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-semibold px-8 py-4 rounded-xl hover:border-slate-300 dark:hover:border-slate-500 transition-colors mb-4">
                  Entrar em Contato
                </Link>
              </div>
            </FadeIn>
          </div>

        </div>
      </section>

      <StatsBar />

      {/* 3. Seção Experiência / Valores */}
      <section className="bg-slate-50 dark:bg-slate-900/30 py-20 px-4 transition-colors duration-300">
        <div className="container mx-auto max-w-6xl">
          <FadeIn direction="up" delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 dark:text-white mb-4">Os pilares do meu trabalho</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                No Studio Aguena, todo projeto é guiado por três princípios inegociáveis.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {[
              {
                title: "Design Estratégico",
                desc: "A estética serve a um propósito. Cada cor, tipografia e espaçamento é pensado para guiar o olhar do seu cliente e gerar mais vendas.",
                icon: "🎯"
              },
              {
                title: "Código Limpo e Rápido",
                desc: "Utilizo as tecnologias mais modernas do mercado (Next.js, React) para garantir que seu site carregue rápido e performe bem no Google.",
                icon: "⚡"
              },
              {
                title: "Foco em Conversão",
                desc: "Um site que não vende é apenas um panfleto caro. Estruturo toda a jornada do usuário para transformar visitantes em clientes reais.",
                icon: "📈"
              }
            ].map((item, i) => (
              <FadeIn key={i} direction="up" delay={0.2 + (i * 0.1)}>
                <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm h-full hover:shadow-md transition-shadow">
                  <div className="text-4xl mb-6">{item.icon}</div>
                  <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">{item.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Currículo e Experiência */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* 1ª Coluna: Hard Skills & Ferramentas (Sticky) */}
            <div className="lg:sticky lg:top-28 self-start space-y-8">
              <FadeIn direction="up" delay={0.1}>
                <div className="bg-white dark:bg-slate-900/80 backdrop-blur-md p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800">
                  <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6 flex items-center">
                    <svg className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                    Hard Skills & Ferramentas
                  </h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-3">Desenvolvimento & Código</h4>
                      <div className="flex flex-wrap gap-2">
                        {['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'JavaScript (ES6+)', 'HTML5 / CSS3', 'Git/GitHub', 'APIs REST'].map((skill, i) => (
                          <span key={i} className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 px-3.5 py-1.5 rounded-xl text-sm font-medium hover:bg-blue-600 hover:text-white transition-colors cursor-default">{skill}</span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-3 pt-2">Design & UI/UX</h4>
                      <div className="flex flex-wrap gap-2">
                        {['Figma', 'UI/UX Design', 'Design Systems', 'Adobe Photoshop', 'Adobe Illustrator', 'CapCut / Premiere', 'Motion Básico'].map((skill, i) => (
                          <span key={i} className="bg-indigo-50 dark:bg-indigo-950/60 text-indigo-800 dark:text-indigo-300 px-3.5 py-1.5 rounded-xl text-sm font-medium hover:bg-indigo-600 hover:text-white transition-colors cursor-default">{skill}</span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-3 pt-2">Performance & Conversão</h4>
                      <div className="flex flex-wrap gap-2">
                        {['SEO Técnico', 'Core Web Vitals', 'CRO / Copywriting', 'Google Analytics', 'Otimização de Performance'].map((skill, i) => (
                          <span key={i} className="bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 px-3.5 py-1.5 rounded-xl text-sm font-medium hover:bg-emerald-600 hover:text-white transition-colors cursor-default">{skill}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* 2ª Coluna: Trajetória Profissional (Timeline) */}
            <div>
              <FadeIn direction="up" delay={0.1}>
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-8 flex items-center">
                  <svg className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  Trajetória Profissional
                </h3>
              </FadeIn>

              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-6 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blue-600 before:to-slate-200 dark:before:to-slate-800">
                
                <FadeIn direction="up" delay={0.2}>
                  <div className="relative pl-14">
                    <div className="absolute left-0 top-1 w-11 h-11 bg-white dark:bg-slate-900 border-4 border-blue-600 rounded-full flex items-center justify-center shadow-sm">
                      <div className="w-2.5 h-2.5 bg-blue-600 rounded-full animate-ping"></div>
                    </div>
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
                      <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-wider uppercase mb-1 block">2023 - Presente</span>
                      <h4 className="text-xl font-semibold text-slate-900 dark:text-white">Fundador & Desenvolvedor Full/Front-end</h4>
                      <p className="text-slate-500 dark:text-slate-400 font-medium mb-4">Studio Aguena</p>
                      <p className="text-slate-600 dark:text-slate-300">Fundação do estúdio focado na criação de sites, landing pages de alta conversão e estratégias de social media. Gerenciamento de projetos end-to-end com Next.js, React e Figma.</p>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn direction="up" delay={0.3}>
                  <div className="relative pl-14">
                    <div className="absolute left-2 top-2 w-7 h-7 bg-white dark:bg-slate-900 border-4 border-slate-300 dark:border-slate-700 rounded-full flex items-center justify-center"></div>
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
                      <span className="text-sm font-semibold text-slate-500 dark:text-slate-400 tracking-wider uppercase mb-1 block">2021 - 2023</span>
                      <h4 className="text-xl font-semibold text-slate-900 dark:text-white">Web Designer & Desenvolvedor Front-end</h4>
                      <p className="text-slate-500 dark:text-slate-400 font-medium mb-4">Agência Digital & Projetos Corporativos</p>
                      <p className="text-slate-600 dark:text-slate-300">Desenvolvimento de interfaces UI/UX e implementação de sites corporativos de alto desempenho. Aumento substancial na retenção de usuários nos projetos desenvolvidos.</p>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn direction="up" delay={0.4}>
                  <div className="relative pl-14">
                    <div className="absolute left-2 top-2 w-7 h-7 bg-white dark:bg-slate-900 border-4 border-slate-300 dark:border-slate-700 rounded-full flex items-center justify-center"></div>
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
                      <span className="text-sm font-semibold text-slate-500 dark:text-slate-400 tracking-wider uppercase mb-1 block">2020 - 2021</span>
                      <h4 className="text-xl font-semibold text-slate-900 dark:text-white">UI/UX Designer & Criador de Conteúdo</h4>
                      <p className="text-slate-500 dark:text-slate-400 font-medium mb-4">Atuação Autônoma & Consultoria Digital</p>
                      <p className="text-slate-600 dark:text-slate-300">Criação de identidades visuais completas, prototipagem no Figma e produção de criativos estratégicos para campanhas de mídia paga e redes sociais.</p>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn direction="up" delay={0.5}>
                  <div className="relative pl-14">
                    <div className="absolute left-2 top-2 w-7 h-7 bg-white dark:bg-slate-900 border-4 border-slate-300 dark:border-slate-700 rounded-full flex items-center justify-center"></div>
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
                      <span className="text-sm font-semibold text-slate-500 dark:text-slate-400 tracking-wider uppercase mb-1 block">2018 - 2020</span>
                      <h4 className="text-xl font-semibold text-slate-900 dark:text-white">Designer Gráfico & Social Media</h4>
                      <p className="text-slate-500 dark:text-slate-400 font-medium mb-4">Início da Carreira no Design Digital</p>
                      <p className="text-slate-600 dark:text-slate-300">Produção de peças gráficas para marcas, gestão visual de redes sociais e estruturação de layouts para impressão e mídias digitais.</p>
                    </div>
                  </div>
                </FadeIn>

              </div>
            </div>

          </div>

        </div>
      </section>

      <ProcessSection />

      {/* 5. Seção Realizações e Automações */}
      <section className="py-20 px-4 bg-slate-50 dark:bg-slate-900/30  border-slate-200  transition-colors duration-300">
        <div className="container mx-auto max-w-6xl">
          <FadeIn direction="up" delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 dark:text-white mb-4">Principais Realizações & Automações</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Casos reais onde design, código e automação se uniram para resolver gargalos e escalar resultados.
              </p>
            </div>
          </FadeIn>

          <div className="space-y-24">
            {/* Realização 1 */}
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <FadeIn direction="right" delay={0.2}>
                  <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-xl bg-slate-100 dark:bg-slate-800">
                    <Image src="/projetos/web-2/mockup-saas.jpg" alt="Plataforma SaaS Automática" fill className="object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                </FadeIn>
              </div>
              <div className="md:w-1/2 flex flex-col gap-4">
                <FadeIn direction="left" delay={0.3}>
                  <div className="inline-block bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 px-3 py-1 rounded-full text-sm font-semibold uppercase tracking-wider w-max mb-2">Automação Web</div>
                  <h3 className="text-3xl font-semibold text-slate-900 dark:text-white">Plataforma de Leads com Disparo Automático</h3>
                  <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                    Desenvolvimento de um sistema completo onde a landing page captura o lead e o integra automaticamente via webhook (n8n/Make) diretamente para o CRM do cliente.
                  </p>
                  <ul className="space-y-2 mt-2">
                    <li className="flex items-center text-slate-700 dark:text-slate-300">
                      <svg className="w-5 h-5 text-emerald-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      Redução de 80% do trabalho manual da equipe de vendas.
                    </li>
                    <li className="flex items-center text-slate-700 dark:text-slate-300">
                      <svg className="w-5 h-5 text-emerald-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      Tempo de resposta ao cliente caiu de horas para 5 minutos.
                    </li>
                  </ul>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection className="bg-white dark:bg-slate-950" />

      {/* CTA Final */}
      <CTASection />

    </div>
  );
}
