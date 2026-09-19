import FadeIn from './FadeIn';

export default function TestimonialsSection({ className = "bg-slate-50 dark:bg-slate-900/40" }: { className?: string }) {
  return (
    <section className={`py-20 px-4 transition-colors duration-300 ${className}`}>
      <div className="container mx-auto max-w-6xl">
        <FadeIn direction="up" delay={0.1}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 dark:text-white mb-4">O que dizem sobre mim</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Não acredite apenas nas minhas palavras. Veja a experiência de quem já trabalhou comigo.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8">
          <FadeIn direction="up" delay={0.2}>
            <div className="bg-white dark:bg-slate-900 p-8 md:p-10 rounded-3xl shadow-sm relative h-full">
              <svg className="w-10 h-10 text-blue-100 dark:text-blue-900/30 absolute top-6 right-8" fill="currentColor" viewBox="0 0 32 32"><path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.896 3.456-8.352 9.12-8.352 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"/></svg>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-xl shadow-md">MC</div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">Marcos Costa</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">CEO da Agência Evolut</p>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed italic">
                "O Felipe entendeu exatamente o que a gente precisava. Nosso site antigo era lento e espantava os clientes. Com o novo ecossistema construído por ele, nossas vendas dobraram no primeiro mês."
              </p>
            </div>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.3}>
            <div className="bg-white dark:bg-slate-900 p-8 md:p-10 rounded-3xl shadow-sm relative h-full">
              <svg className="w-10 h-10 text-blue-100 dark:text-blue-900/30 absolute top-6 right-8" fill="currentColor" viewBox="0 0 32 32"><path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.896 3.456-8.352 9.12-8.352 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"/></svg>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-indigo-600 rounded-full flex items-center justify-center text-white font-semibold text-xl shadow-md">AS</div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">Ana Souza</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Fundadora da Souza Clínicas</p>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed italic">
                "O trabalho de Design e Social Media do Studio Aguena transformou nossa marca. Elevou muito o nosso posicionamento no mercado e trouxe clientes que realmente valorizam nosso serviço."
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
