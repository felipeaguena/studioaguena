import Link from 'next/link';

export default function Footer({ navData }: { navData: any }) {
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 py-12 text-center   /80 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <Link href="/" className="inline-block text-2xl font-semibold text-slate-900 dark:text-white mb-6 tracking-tight hover:opacity-90 transition-opacity">
          Studio Aguena<span className="text-blue-600">.</span>
        </Link>
        <div className="flex justify-center flex-wrap gap-6 mb-8">
          {navData.socialLinks.map((social: any, index: number) => (
            <a 
              key={index} 
              href={social.href} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {social.platform}
            </a>
          ))}
        </div>
        <p className="text-sm text-slate-500 dark:text-slate-400">© {new Date().getFullYear()} Studio Aguena. Todos os direitos reservados.</p>
        <p className="mt-2 text-xs text-slate-400 dark:text-slate-500">Design e Desenvolvimento por Felipe Aguena</p>
      </div>
    </footer>
  );
}
