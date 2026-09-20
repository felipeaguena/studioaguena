import Link from 'next/link';
import Image from 'next/image';

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  category?: string;
}

interface ProjectCardProps {
  project: Project;
  hoverColor?: string; // 'blue' para web, 'indigo' para social
}

export default function ProjectCard({ project, hoverColor = 'blue' }: ProjectCardProps) {
  // Configurando a cor do texto do hover dependendo da categoria
  const hoverTextColorClass = hoverColor === 'indigo' 
    ? 'group-hover:text-indigo-600 dark:group-hover:text-indigo-400' 
    : 'group-hover:text-blue-600 dark:group-hover:text-blue-400';

  return (
    <Link 
      href={project.link} 
      className="group block rounded-2xl overflow-hidden bg-white dark:bg-slate-900 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full cursor-pointer"
    >
      {/* Imagem do Projeto */}
      <div className="h-56 bg-slate-200 dark:bg-slate-800 relative overflow-hidden">
        <Image src={project.imageUrl} alt={project.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" quality={80} loading="eager" className="object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
      
      {/* Conteúdo */}
      <div className="p-8 flex-1 flex flex-col">
        {project.category && (
          <p className={`text-xs font-semibold uppercase tracking-wider mb-2 text-slate-400 dark:text-slate-500 ${hoverTextColorClass} transition-colors`}>
            {project.category}
          </p>
        )}
        <h3 className={`text-2xl font-semibold text-slate-800 dark:text-slate-100 mb-2 ${hoverTextColorClass} transition-colors`}>
          {project.title}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 mb-6 flex-1">{project.description}</p>
        
        {/* Botão Fake visual */}
        <div className={`inline-flex items-center text-slate-900 dark:text-slate-200 font-semibold ${hoverTextColorClass} transition-colors mt-auto`}>
          Ver Projeto 
          <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
