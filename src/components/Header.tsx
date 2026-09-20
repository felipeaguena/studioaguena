"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import HamburgerMenu from './HamburgerMenu';
import ThemeToggle from './ThemeToggle';

interface HeaderNavContentProps {
  navData: any;
  pathname: string;
  onOpenMenu: () => void;
}

function HeaderNavContent({ navData, pathname, onOpenMenu }: HeaderNavContentProps) {
  return (
    <>
      {/* Logotipo */}
      <Link 
        href="/" 
        className="text-xl sm:text-2xl font-semibold text-slate-900 dark:text-white tracking-tight flex items-center gap-1 group shrink-0"
      >
        <span>Studio Aguena</span>
        <span className="text-blue-600 transition-transform duration-300 group-hover:scale-125">.</span>
      </Link>
      
      {/* Navegação Desktop */}
      <div className="hidden md:flex items-center gap-6 lg:gap-8">
        <nav className="flex items-center gap-6 lg:gap-8">
          {navData.headerLinks.map((link: any, index: number) => {
            const isContact = link.href === '/contato' || link.label.toLowerCase() === 'contato';
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));

            if (isContact) {
              return (
                <Link
                  key={index}
                  href={link.href}
                  className={`inline-flex items-center justify-center px-5 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-200 shadow-sm ${
                    isActive
                      ? 'bg-blue-600 text-white ring-2 ring-blue-500/50 shadow-md shadow-blue-500/25 scale-100'
                      : 'bg-blue-600 hover:bg-blue-500 text-white hover:shadow-md hover:shadow-blue-500/20 hover:-translate-y-0.5 active:translate-y-0'
                  }`}
                >
                  {link.label}
                </Link>
              );
            }

            return (
              <Link
                key={index}
                href={link.href}
                className={`text-sm tracking-wider uppercase transition-colors duration-200 relative py-1 ${
                  isActive
                    ? 'text-blue-600 dark:text-blue-400 font-bold'
                    : 'text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-semibold'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>
        <div className="pl-2 border-l border-slate-200/80 dark:border-slate-800/80">
          <ThemeToggle />
        </div>
      </div>

      {/* Botões Mobile (Tema + Menu Hamburger) */}
      <div className="md:hidden flex items-center gap-1.5">
        <ThemeToggle />
        <button 
          className="p-2 text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          onClick={onOpenMenu}
          aria-label="Abrir menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </>
  );
}

export default function Header({ navData }: { navData: any }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* 1. Header Largura Total no Topo (com fade-out suave ao rolar) */}
      <div 
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-out ${
          isScrolled 
            ? 'opacity-0 -translate-y-3 pointer-events-none' 
            : 'opacity-100 translate-y-0 pointer-events-auto'
        }`}
        aria-hidden={isScrolled}
      >
        <header className="w-full bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-300">
          <div className="w-full px-6 sm:px-10 lg:px-12 h-16 sm:h-20 flex items-center justify-between">
            <HeaderNavContent 
              navData={navData} 
              pathname={pathname} 
              onOpenMenu={() => setIsMenuOpen(true)} 
            />
          </div>
        </header>
      </div>

      {/* 2. Header Flutuante / Desgrudado das Bordas (com fade-in suave e slide ao rolar) */}
      <div 
        className={`fixed top-3 sm:top-4 inset-x-0 z-50 flex justify-center px-4 sm:px-6 pointer-events-none transition-all duration-500 ease-out ${
          isScrolled 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 -translate-y-4'
        }`}
        aria-hidden={!isScrolled}
      >
        <header className={`w-full max-w-6xl h-16 rounded-2xl sm:rounded-full bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border border-slate-200/80 dark:border-slate-800/80 shadow-lg shadow-black/5 dark:shadow-black/30 px-4 sm:px-6 flex items-center justify-between transition-colors duration-300 ${
          isScrolled ? 'pointer-events-auto' : 'pointer-events-none'
        }`}>
          <HeaderNavContent 
            navData={navData} 
            pathname={pathname} 
            onOpenMenu={() => setIsMenuOpen(true)} 
          />
        </header>
      </div>

      <HamburgerMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} navData={navData} />
    </>
  );
}
