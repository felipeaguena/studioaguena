import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import fs from 'fs';
import path from 'path';

const manrope = Manrope({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Studio Aguena | Desenvolvimento & Design",
  description: "Desenvolvimento de sites, landing pages e social media por Felipe Aguena.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Leitura Segura: Ocorre apenas no servidor
  const navFilePath = path.join(process.cwd(), 'data', 'nav.json');
  const navFile = fs.readFileSync(navFilePath, 'utf8');
  const navData = JSON.parse(navFile);

  return (
    <html lang="pt-BR" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var storedTheme = localStorage.getItem('theme');
                var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className={`${manrope.className} ${manrope.variable} font-sans bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 antialiased min-h-screen flex flex-col transition-colors duration-300`}>
        <ThemeProvider>
          <Header navData={navData} />
          <main className="flex-grow w-full overflow-x-hidden">{children}</main>
          <Footer navData={navData} />
        </ThemeProvider>
      </body>
    </html>
  );
}
