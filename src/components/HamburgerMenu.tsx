"use client";

import Link from 'next/link';
import { useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

export default function HamburgerMenu({ isOpen, onClose, navData }: { isOpen: boolean, onClose: () => void, navData: any }) {
  useEffect(() => {
    // Trava o scroll da página quando o menu estiver aberto
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] bg-slate-950/95 backdrop-blur-xl flex flex-col justify-center items-center animate-in fade-in duration-200">
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 p-2 text-slate-300 hover:text-white transition-colors"
        aria-label="Fechar menu"
      >
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <nav className="flex flex-col items-center gap-8 mb-8">
        {navData.headerLinks.map((link: any, index: number) => (
          <Link 
            key={index} 
            href={link.href} 
            onClick={onClose}
            className="text-4xl font-semibold text-slate-200 hover:text-blue-400 transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="mb-10 flex items-center gap-3">
        <span className="text-sm font-semibold text-slate-400">Alternar tema:</span>
        <ThemeToggle />
      </div>

      <div className="absolute bottom-10 flex gap-6">
        {navData.socialLinks.map((social: any, index: number) => (
          <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
            {social.platform}
          </a>
        ))}
      </div>
    </div>
  );
}
