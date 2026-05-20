import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { MobileActionBar } from "@/components/MobileActionBar";
import { Footer } from "@/components/Footer";
import { PHARMACY, SEO, SITE_URL } from "@/lib/constants";
import { SkipLink } from "@/components/SkipLink";
import { getBreadcrumbJsonLd, getPharmacyJsonLd } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SEO.title,
    template: `%s | ${PHARMACY.shortName}`,
  },
  description: SEO.description,
  keywords: [...SEO.keywords],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: SITE_URL,
    siteName: PHARMACY.name,
    title: SEO.title,
    description: SEO.description,
    images: [
      {
        url: "/images/fachada.webp",
        width: 1200,
        height: 630,
        alt: "Fachada de Farmacia Helena Soldevila en Granada",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.title,
    description: SEO.description,
    images: ["/images/fachada.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pharmacyLd = getPharmacyJsonLd();
  const breadcrumbLd = getBreadcrumbJsonLd();

  return (
    <html lang="es" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(pharmacyLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
        />
      </head>
      <body className="font-sans pb-20 md:pb-0">
        <SkipLink />
        <Header />
        <main id="contenido-principal">{children}</main>
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}
