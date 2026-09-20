"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const WHATSAPP_MESSAGES = {
  institucional: "Olá! Gostaria de começar um projeto de Site Institucional.",
  landingPage: "Olá! Gostaria de começar um projeto de Landing Page.",
  design: "Olá! Gostaria de começar um projeto de Design.",
};

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "5511963563013"; // Substitua pelo número real do WhatsApp

  const handleWhatsAppClick = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="mb-4 w-96 sm:w-[28rem] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden"
          >
            <div className="bg-[#25D366] p-4 flex items-center justify-between">
              <div className="flex items-center gap-3 text-white">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.082 21.166c-1.547-.001-3.061-.397-4.385-1.149l-4.881 1.28 1.3-4.757c-.822-1.353-1.256-2.91-1.255-4.512.002-4.735 3.854-8.587 8.589-8.587 4.733 0 8.585 3.851 8.585 8.585 0 4.736-3.854 8.589-8.588 8.589z"/>
                </svg>
                <span className="font-semibold text-lg">Studio Aguena</span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-green-100 transition-colors p-1 rounded-full hover:bg-black/10 cursor-pointer"
                aria-label="Fechar"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-4 flex flex-col gap-3">
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-2 font-medium">
                Olá! Como podemos ajudar o seu negócio hoje?
              </p>
              
              <button 
                onClick={() => handleWhatsAppClick(WHATSAPP_MESSAGES.institucional)}
                className="flex items-start gap-3 p-3 text-left text-slate-700 dark:text-slate-200 bg-slate-50 dark:bg-slate-800 hover:bg-[#25D366]/10 dark:hover:bg-[#25D366]/20 rounded-xl transition-all border border-slate-200 dark:border-slate-700 hover:border-[#25D366] dark:hover:border-[#25D366] cursor-pointer"
              >
                <span className="text-xl mt-0.5">💻</span>
                <div>
                  <span className="block text-sm font-medium">Site Institucional</span>
                  <span className="block text-xs text-slate-500 dark:text-slate-400 mt-0.5">Ideal para apresentar sua empresa online</span>
                </div>
              </button>
              
              <button 
                onClick={() => handleWhatsAppClick(WHATSAPP_MESSAGES.landingPage)}
                className="flex items-start gap-3 p-3 text-left text-slate-700 dark:text-slate-200 bg-slate-50 dark:bg-slate-800 hover:bg-[#25D366]/10 dark:hover:bg-[#25D366]/20 rounded-xl transition-all border border-slate-200 dark:border-slate-700 hover:border-[#25D366] dark:hover:border-[#25D366] cursor-pointer"
              >
                <span className="text-xl mt-0.5">💻</span>
                <div>
                  <span className="block text-sm font-medium">Landing Page</span>
                  <span className="block text-xs text-slate-500 dark:text-slate-400 mt-0.5">Página focada em conversão e vendas</span>
                </div>
              </button>
              
              <button 
                onClick={() => handleWhatsAppClick(WHATSAPP_MESSAGES.design)}
                className="flex items-start gap-3 p-3 text-left text-slate-700 dark:text-slate-200 bg-slate-50 dark:bg-slate-800 hover:bg-[#25D366]/10 dark:hover:bg-[#25D366]/20 rounded-xl transition-all border border-slate-200 dark:border-slate-700 hover:border-[#25D366] dark:hover:border-[#25D366] cursor-pointer"
              >
                <span className="text-xl mt-0.5">🎨</span>
                <div>
                  <span className="block text-sm font-medium">Projetos de Design</span>
                  <span className="block text-xs text-slate-500 dark:text-slate-400 mt-0.5">Identidade visual e social media</span>
                </div>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/30 transition-all hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 dark:focus:ring-offset-slate-950 cursor-pointer"
        aria-label="Abrir WhatsApp"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.svg
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </motion.svg>
          ) : (
            <motion.svg
              key="whatsapp"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              className="w-8 h-8 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </motion.svg>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
}
