import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import WhatsAppButton from "@/components/WhatsAppButton";
import fs from 'fs';
import path from 'path';

const manrope = Manrope({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-manrope",
});

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8fafc' },
    { media: '(prefers-color-scheme: dark)', color: '#020617' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://studioaguena.com.br'),
  title: {
    default: "Studio Aguena | Desenvolvimento Web & Design Estratégico",
    template: "%s | Studio Aguena",
  },
  description: "Especialista em sites de alta conversão, landing pages ultrarrápidas e identidades visuais magnéticas. Transforme seu posicionamento digital com Felipe Aguena.",
  keywords: ["Desenvolvimento Web", "Design Estratégico", "Felipe Aguena", "Studio Aguena", "Sites", "Landing Pages", "Social Media", "Next.js", "React"],
  authors: [{ name: "Felipe Aguena", url: "https://studioaguena.com.br" }],
  creator: "Felipe Aguena",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://studioaguena.com.br",
    title: "Studio Aguena | Desenvolvimento Web & Design Estratégico",
    description: "Especialista em sites de alta conversão, landing pages ultrarrápidas e identidades visuais magnéticas.",
    siteName: "Studio Aguena",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Studio Aguena - Desenvolvimento Web e Design Estratégico",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio Aguena | Desenvolvimento Web & Design",
    description: "Sites ultrarrápidos e design magnético.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Studio Aguena',
    image: 'https://studioaguena.com.br/felipe.jpg',
    description: 'Desenvolvimento Web e Design Estratégico focados em performance e conversão.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'São Paulo',
      addressRegion: 'SP',
      addressCountry: 'BR'
    },
    url: 'https://studioaguena.com.br',
    telephone: '+5511963563013',
    founder: {
      '@type': 'Person',
      name: 'Felipe Aguena'
    },
    priceRange: '$$',
    makesOffer: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Desenvolvimento Web (Next.js/React)'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Design Estratégico para Social Media'
        }
      }
    ]
  };

  return (
    <html lang="pt-BR" className="scroll-smooth" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className={`${manrope.className} ${manrope.variable} font-sans bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 antialiased min-h-screen flex flex-col transition-colors duration-300`}>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          suppressHydrationWarning
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
        <ThemeProvider>
          <Header navData={navData} />
          <main className="flex-grow w-full overflow-x-clip">{children}</main>
          <Footer navData={navData} />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
