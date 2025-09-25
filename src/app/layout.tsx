import type { Metadata } from "next";
import { Shippori_Mincho } from "next/font/google";
import "./globals.css";

const shipporiMincho = Shippori_Mincho({
  weight: ['400', '700', '800'],
  subsets: ["latin"],
  variable: "--font-shippori-mincho",
});

export const metadata: Metadata = {
  title: "IKIGAI - Forje seu Destino",
  description: "Junte-se aos Caçadores de Demônios. Domine sua respiração, empunhe sua Nichirin e lute pela humanidade. Uma experiência imersiva no universo de Kimetsu no Yaiba.",
  openGraph: {
    title: "IKIGAI - Forje seu Destino",
    description: "Junte-se aos Caçadores de Demônios e domine sua respiração.",
    images: [
      {
        url: "https://placehold.co/1200x630/1A1A1A/FFFFFF?text=IKIGAI+Roleplay",
        width: 1200,
        height: 630,
        alt: "IKIGAI Roleplay",
      },
    ],
    type: "website",
  },
  icons: {
    apple: "https://placehold.co/192x192/A62639/FFFFFF?text=IKIGAI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body className={`${shipporiMincho.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
