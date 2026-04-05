import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    default: "Créer sa Brasserie : Guide Complet Entrepreneur 2024",
    template: "%s | Brasserie Métronome",
  },
  description:
    "Découvrez tous les secrets pour lancer votre brasserie : démarches, financement, équipe, rentabilité. Conseils d'experts et retours d'expérience.",
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Brasserie Métronome - Votre Guide Entrepreneuriat Restauration",
    description:
      "Tous les conseils pour créer et développer votre brasserie artisanale : démarches administratives, financement, équipement, recrutement. Guides experts par des professionnels.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Créer sa Brasserie : Guide Complet | Brasserie Métronome",
    description:
      "Découvrez tous les secrets pour lancer votre brasserie : démarches, financement, équipe, rentabilité.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
