"use client";

import { useState } from 'react';
import Link from 'next/link';
import HamburgerMenu from './HamburgerMenu';
import ThemeToggle from './ThemeToggle';

export default function Header({ navData }: { navData: any }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed w-full top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xs transition-colors duration-300">
        <div className="container mx-auto px-4 h-15 flex items-center justify-between max-w-6xl">
          <Link href="/" className="text-2xl font-semibold text-slate-900 dark:text-white tracking-tight">
            Studio Aguena<span className="text-blue-600">.</span>
          </Link>
          
          {/* Navegação Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex gap-8">
              {navData.headerLinks.map((link: any, index: number) => (
                <Link key={index} href={link.href} className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors uppercase tracking-wider">
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="pl-2 border-l border-slate-200 dark:border-slate-700">
              <ThemeToggle />
            </div>
          </div>

          {/* Botões Mobile (Tema + Menu Hamburger) */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button 
              className="p-2 text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Abrir menu"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <HamburgerMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} navData={navData} />
    </>
  );
}
