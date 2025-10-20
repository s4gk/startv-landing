import type { Metadata } from 'next';
import "./globals.scss";
import { Navbar } from '@/components/organisms/Navbar/Navbar';
import { Sora } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});
 
export const metadata: Metadata = {
  title: 'Start TV | Velocidad en Internet y TV con Planes Flexibles',
  description: 'Contrata planes flexibles de internet de alta velocidad y TV online. Sin cláusulas de permanencia. ¡Empieza hoy mismo con la mejor experiencia de entretenimiento!',
  
  alternates: {
    canonical: 'https://www.tudominio.com/',
  },

  openGraph: {
    title: 'Start TV | Internet y TV Flexible',
    description: 'Planes flexibles de internet y TV. Sin permanencia.',
    url: 'https://www.tudominio.com/', // ¡Cambia esto!
    siteName: 'Start TV',
    images: [
      {
        url: 'https://www.tudominio.com/images/og-image.jpg', // Crea una imagen de 1200x630
        width: 1200,
        height: 630,
        alt: 'Banner de Start TV con Internet y TV',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },

  // --- Twitter Card (Para X/Twitter) ---
  twitter: {
    card: 'summary_large_image',
    title: 'Start TV',
    description: 'La mejor opción para Internet y TV flexible.',
    // image: '...', // Misma imagen que Open Graph
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={sora.variable}>
      <body className='overscroll-x-none'>
        <Navbar />
        {/* Aquí puedes incluir el Header.tsx y Footer.tsx si son comunes */}
        {children}
      </body>
    </html>
  );
}