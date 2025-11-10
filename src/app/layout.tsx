import "@/styles/globals.scss";
import type { Metadata } from "next";
import { Navbar } from "@/components/organisms/Navbar/Navbar";
import { Sora } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Start TV | Velocidad en Internet y TV con Planes Flexibles",
  description:
    "Contrata planes flexibles de internet de alta velocidad y TV online. Sin cláusulas de permanencia. ¡Empieza hoy mismo con la mejor experiencia de entretenimiento!",

  viewport: {
    width: "device-width",
    initialScale: 1.0,
  },

  alternates: {
    canonical: "https://www.tudominio.com/",
  },

  openGraph: {
    title: "Start TV | Internet y TV Flexible",
    description: "Planes flexibles de internet y TV. Sin permanencia.",
    url: "https://www.tudominio.com/",
    siteName: "Start TV",
    images: [
      {
        url: "https://www.tudominio.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Banner de Start TV con Internet y TV",
      },
    ],
    locale: "es_ES",
    type: "website",
  },

  keywords: [
    "internet rápido",
    "televisión por internet",
    "IPTV Colombia",
    "planes de internet flexibles",
    "Star TV",
    "internet cundinamarca",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={sora.variable}>
      <body>
        <Navbar />
        {/* Aquí puedes incluir el Header.tsx y Footer.tsx si son comunes */}
        {children}
      </body>
    </html>
  );
}
