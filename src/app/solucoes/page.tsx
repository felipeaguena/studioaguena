import Image from 'next/image';
import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import PageHero from '@/components/PageHero';
import ProcessSection from '@/components/ProcessSection';
import CTASection from '@/components/CTASection';

export const metadata = {
  title: 'Soluções | Studio Aguena',
  description: 'Soluções completas de desenvolvimento web de alta performance e design estratégico para redes sociais.',
};

export default function SolucoesPage() {
  const webFeatures = [
    {
      title: "Landing Pages de Alta Conversão",
      desc: "Páginas desenhadas com psicologia de vendas, carregamento em menos de 1 segundo e CTAs posicionados estrategicamente para converter tráfego em vendas.",
      badge: "Performance Máxima"
    },
    {
      title: "Sites Institucionais & Portais",
      desc: "Presença digital de nível enterprise com Next.js e React. Arquitetura moderna que transmite máxima autoridade e credibilidade imediata.",
      badge: "Autoridade Digital"
    },
    {
      title: "E-commerces & Plataformas",
      desc: "Lojas virtuais com checkout fluido, integrações de pagamentos seguras e gestão de catálogo rápida para nunca perder uma compra por lentidão.",
      badge: "Escalabilidade"
    },
    {
      title: "SEO Técnico & Core Web Vitals",
      desc: "Otimização profunda de indexação para o Google, pontuação 95+ no PageSpeed e acessibilidade para dominar as primeiras posições da busca orgânica.",
      badge: "Tráfego Orgânico"
    },
    {
      title: "Integrações & Automações",
      desc: "Conexão direta de formulários com WhatsApp, CRMs (HubSpot, RD Station, Notion) e ferramentas de automação (n8n, Make) sem trabalho manual.",
      badge: "Produtividade"
    },
    {
      title: "Design Responsivo & Mobile-First",
      desc: "Experiência impecável em smartphones, tablets e desktops. Mais de 80% do tráfego vem do celular e seu site estará pronto para encantar.",
      badge: "100% Responsivo"
    }
  ];

  const socialFeatures = [
    {
      title: "Identidade Visual & Branding",
      desc: "Construção de uma linguagem visual proprietária, paleta de cores magnética, tipografia marcante e manual de marca para tornar seu negócio inconfundível.",
      badge: "Branding"
    },
    {
      title: "Design de Feeds & Carrosséis Estratégicos",
      desc: "Posts que param o scroll e transmitem autoridade. Carrosséis com storytelling persuasivo que retêm a atenção e geram milhares de salvamentos e compartilhamentos.",
      badge: "Engajamento"
    },
    {
      title: "Criativos para Tráfego Pago (Ads)",
      desc: "Peças publicitárias desenvolvidas exclusivamente para converter em campanhas de Meta Ads (Instagram/Facebook) e Google, reduzindo o custo por lead (CPL).",
      badge: "ROI & Vendas"
    },
    {
      title: "Templates Dinâmicos & Stories",
      desc: "Sistemas visuais padronizados no Figma para sua equipe publicar com consistência e rapidez mantendo sempre o mais alto padrão estético.",
      badge: "Agilidade"
    },
    {
      title: "Materiais Corporativos & PDFs Interativos",
      desc: "Apresentações comerciais, catálogos digitais e mídia kits com links clicáveis que valorizam seu serviço em reuniões com clientes premium.",
      badge: "Posicionamento"
    },
    {
      title: "Animações & Motion Básico",
      desc: "Transições sutis e vinhetas dinâmicas para vídeos curtos (Reels e TikTok) garantindo os primeiros 3 segundos de retenção máxima.",
      badge: "Retenção"
    }
  ];

  const faqs = [
    {
      q: "Qual a diferença entre um site desenvolvido sob medida e um no WordPress/Wix?",
      a: "Sites feitos sob medida com Next.js e React são até 10x mais rápidos, extremamente seguros (sem plugins vulneráveis), imunes a travamentos em picos de tráfego e pontuam muito melhor no Google. É a mesma tecnologia usada por gigantes como Nike, Netflix e Nubank."
    },
    {
      q: "Vocês cuidam tanto da criação do design quanto da programação?",
      a: "Sim! Esse é o maior diferencial do Studio Aguena. Você não precisa contratar um designer de um lado e um programador do outro para depois vê-los em conflito. Aqui a visão visual e a execução técnica nascem juntas em harmonia perfeita."
    },
    {
      q: "Como funciona a entrega das artes de Social Media?",
      a: "Entregamos todos os arquivos prontos para publicação em alta definição, além de arquivos organizados e templates editáveis caso sua equipe queira manter o fluxo interno."
    },
    {
      q: "Qual o prazo médio de entrega de um projeto?",
      a: "Landing pages costumam ser entregues entre 7 e 15 dias úteis. Sites institucionais e plataformas completas variam de 3 a 5 semanas, sempre seguindo cronograma transparente e reuniões de alinhamento."
    }
  ];

  return (
    <div className="pt-24 pb-0 bg-white dark:bg-slate-950 transition-colors duration-300">
      
      {/* 1. Hero da Página de Soluções */}
      <PageHero
        badge="Soluções Digitais de Ponta a Ponta"
        title={
          <>
            Desenvolvimento Web e Design Estratégico para marcas que querem{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              liderar seus mercados.
            </span>
          </>
        }
        subtitle="Eliminamos a distância entre uma marca comum e uma marca inesquecível. Unimos código moderno, ultra velocidade e design refinado para gerar autoridade e vendas reais."
      >
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="#desenvolvimento-web" 
            className="bg-slate-900 hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 transform duration-200"
          >
            Desenvolvimento Web
          </a>
          <a 
            href="#design-social-media" 
            className="bg-white dark:bg-slate-900 border-2 border-slate-200  hover:border-slate-400 dark:hover:border-slate-700 text-slate-800 dark:text-slate-200 font-semibold px-8 py-4 rounded-xl transition-all shadow-sm hover:-translate-y-0.5 transform duration-200"
          >
            Social Media & Design
          </a>
        </div>
      </PageHero>

      {/* 2. SOLUÇÃO 1: DESENVOLVIMENTO WEB */}
      <section id="desenvolvimento-web" className="py-20 px-4 bg-slate-50 dark:bg-slate-900/30  border-slate-200  scroll-mt-20 transition-colors duration-300">
        <div className="container mx-auto max-w-6xl">
          
          <div className="flex flex-col lg:flex-row items-center gap-16 mb-16">
            <div className="lg:w-1/2">
              <FadeIn direction="right" delay={0.1}>
                <span className="text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-widest text-sm mb-3 block">
                  Solução 01 • Engenharia de Front-end
                </span>
                <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 dark:text-white mb-6 leading-tight">
                  Sites ultrarrápidos projetados para converter cada clique.
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  Se o seu site demora mais de 3 segundos para carregar, você já perdeu metade dos seus clientes. 
                  No Studio Aguena, desenvolvemos produtos digitais utilizando a stack mais avançada do planeta: <strong>Next.js, React e Tailwind CSS</strong>.
                </p>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                  O resultado? Páginas que abrem num piscar de olhos, nota máxima no Google PageSpeed, experiência fluida em smartphones e arquitetura otimizada para capturar leads no piloto automático.
                </p>
                
                <div className="flex items-center gap-6">
                  <Link href="/contato" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-colors shadow-lg hover:shadow-xl inline-flex items-center">
                    Solicitar Proposta de Site
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </Link>
                  <Link href="/projetos" className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-semibold underline transition-colors">
                    Ver cases de sites
                  </Link>
                </div>
              </FadeIn>
            </div>

            <div className="lg:w-1/2">
              <FadeIn direction="left" delay={0.2}>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-neutral-900 ">
                  <div className="relative w-full aspect-[4/3]">
                    <Image 
                      src="/projetos/web-2/mockup-saas.jpg" 
                      alt="Solução em Desenvolvimento Web" 
                      fill 
                      className="object-cover" 
                    />
                  </div>
                  {/* Badge Flutuante de Performance */}
                  <div className="absolute bottom-6 left-6 bg-slate-900/90 dark:bg-slate-950/90 backdrop-blur-md text-white p-4 rounded-2xl shadow-xl flex items-center gap-4 border border-slate-700">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-semibold text-xl">
                      99
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Google PageSpeed</p>
                      <p className="text-sm font-semibold">Velocidade & SEO Nota Máxima</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Grid de Recursos Web */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
            {webFeatures.map((item, index) => (
              <FadeIn key={index} direction="up" delay={0.1 * index}>
                <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm  hover:shadow-md hover:border-blue-200 dark:hover:border-blue-500/40 transition-all h-full flex flex-col justify-between">
                  <div>
                    <span className="inline-block bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 font-semibold text-xs uppercase tracking-wider px-3 py-1 rounded-lg mb-4">
                      {item.badge}
                    </span>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">{item.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

        </div>
      </section>

      {/* 3. SOLUÇÃO 2: DESIGN E SOCIAL MEDIA */}
      <section id="design-social-media" className="py-20 px-4 bg-white dark:bg-slate-950  border-slate-200  scroll-mt-20 transition-colors duration-300">
        <div className="container mx-auto max-w-6xl">
          
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16 mb-16">
            <div className="lg:w-1/2">
              <FadeIn direction="left" delay={0.1}>
                <span className="text-indigo-600 dark:text-indigo-400 font-semibold uppercase tracking-widest text-sm mb-3 block">
                  Solução 02 • Posicionamento Visual & Social
                </span>
                <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 dark:text-white mb-6 leading-tight">
                  Design magnético que prende a atenção e vende a sua autoridade.
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  O feed da sua empresa é a vitrine que o seu cliente analisa antes de fechar contrato. Um visual amador ou sem identidade afasta clientes de alto valor.
                </p>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                  Desenvolvemos identidades visuais impactantes e criativos estratégicos que param o scroll do usuário no Instagram e LinkedIn, convertendo curiosos em compradores fiéis.
                </p>
                
                <div className="flex items-center gap-6">
                  <Link href="/contato" className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-4 rounded-xl transition-colors shadow-lg hover:shadow-xl inline-flex items-center">
                    Solicitar Proposta de Design
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </Link>
                  <Link href="/projetos" className="text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-semibold underline transition-colors">
                    Ver cases de design
                  </Link>
                </div>
              </FadeIn>
            </div>

            <div className="lg:w-1/2">
              <FadeIn direction="right" delay={0.2}>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-neutral-900 ">
                  <div className="relative w-full aspect-[4/3]">
                    <Image 
                      src="/projetos/soc-2/social-ads.jpg" 
                      alt="Solução em Design e Social Media" 
                      fill 
                      className="object-cover" 
                    />
                  </div>
                  {/* Badge Flutuante de Engajamento */}
                  <div className="absolute bottom-6 left-6 bg-slate-900/90 dark:bg-slate-950/90 backdrop-blur-md text-white p-4 rounded-2xl shadow-xl flex items-center gap-4 border border-slate-700">
                    <div className="w-12 h-12 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-semibold text-xl">
                      ✦
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Retenção de Audiência</p>
                      <p className="text-sm font-semibold">Identidade Única & Conversão</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Grid de Recursos Social Media */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
            {socialFeatures.map((item, index) => (
              <FadeIn key={index} direction="up" delay={0.1 * index}>
                <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl shadow-sm  hover:shadow-md hover:border-indigo-200 dark:hover:border-indigo-500/40 transition-all h-full flex flex-col justify-between">
                  <div>
                    <span className="inline-block bg-indigo-100 dark:bg-indigo-950/60 text-indigo-800 dark:text-indigo-300 font-semibold text-xs uppercase tracking-wider px-3 py-1 rounded-lg mb-4">
                      {item.badge}
                    </span>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">{item.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

        </div>
      </section>

      {/* 4. A Sinergia: Por que unir Design + Código no mesmo parceiro */}
      <section className="py-20 px-4 bg-slate-50 dark:bg-slate-900/40   /80 transition-colors duration-300">
        <div className="container mx-auto max-w-6xl">
          <FadeIn direction="up" delay={0.1}>
            <div className="text-center mb-16">
              <span className="text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-widest text-xs mb-2 block">
                O Diferencial Studio Aguena
              </span>
              <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 dark:text-white mb-6">
                O Ecossistema Completo para sua Empresa
              </h2>
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                A maioria das empresas sofre contratando um designer que não entende de código, ou um programador que não tem senso estético.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            <FadeIn direction="up" delay={0.2}>
              <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm  hover:shadow-md hover:border-blue-300/60 dark:hover:border-blue-500/40 transition-all h-full">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center text-xl font-semibold mb-6 border border-blue-200/50 dark:border-blue-800/50">
                  01
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Sem Conflitos Técnicos</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  O que é desenhado no Figma é exatamente o que é programado no código. Sem surpresas desagradáveis ou limitações inesperadas.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
              <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm  hover:shadow-md hover:border-blue-300/60 dark:hover:border-blue-500/40 transition-all h-full">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center text-xl font-semibold mb-6 border border-blue-200/50 dark:border-blue-800/50">
                  02
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Coerência em Todos os Pontos</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Seu anúncio no Instagram conversa perfeitamente com a Landing Page do seu site, gerando uma experiência fluida que multiplica o fechamento de vendas.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.4}>
              <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm  hover:shadow-md hover:border-blue-300/60 dark:hover:border-blue-500/40 transition-all h-full">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center text-xl font-semibold mb-6 border border-blue-200/50 dark:border-blue-800/50">
                  03
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Economia de Tempo e Verba</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Um único ponto de contato, comunicação direta pelo WhatsApp e entregas integradas sem a burocracia de grandes agências tradicionais.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 5. Processo de Trabalho */}
      <ProcessSection />

      {/* 6. FAQ (Perguntas Frequentes) */}
      <section className="py-20 px-4 bg-slate-50 dark:bg-slate-900/30  border-slate-200  transition-colors duration-300">
        <div className="container mx-auto max-w-4xl">
          <FadeIn direction="up" delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 dark:text-white mb-4">Perguntas Frequentes</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">Tire suas dúvidas antes de iniciarmos sua jornada digital.</p>
            </div>
          </FadeIn>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <FadeIn key={index} direction="up" delay={0.1 * index}>
                <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm ">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">{faq.q}</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{faq.a}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA Final */}
      <CTASection />

    </div>
  );
}
