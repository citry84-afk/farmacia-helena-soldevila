import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { MobileActionBar } from "@/components/MobileActionBar";
import { Footer } from "@/components/Footer";
import { PHARMACY, SEO, SITE_URL } from "@/lib/constants";
import { CookieBanner } from "@/components/CookieBanner";
import { DesktopQuickActions } from "@/components/DesktopQuickActions";
import { SkipLink } from "@/components/SkipLink";
import {
  getBreadcrumbJsonLd,
  getFaqJsonLd,
  getPharmacyJsonLd,
  getWebsiteJsonLd,
} from "@/lib/schema";

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
    languages: {
      "es-ES": "/",
    },
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
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "health",
  verification: {
    google: "H_0Ua3qjt49-JXHeSSNQg3CsIwgi550pc14PadwXQVA",
  },
  icons: {
    icon: [{ url: "/logo.webp", type: "image/webp" }],
    apple: "/logo.webp",
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#2F7D5B",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const websiteLd = getWebsiteJsonLd();
  const pharmacyLd = getPharmacyJsonLd();
  const breadcrumbLd = getBreadcrumbJsonLd();
  const faqLd = getFaqJsonLd();

  return (
    <html lang="es" className={inter.variable}>
      <head>
        <meta name="geo.region" content="ES-GR" />
        <meta name="geo.placename" content={PHARMACY.address.city} />
        <meta
          name="geo.position"
          content={`${PHARMACY.geo.latitude};${PHARMACY.geo.longitude}`}
        />
        <meta name="ICBM" content={`${PHARMACY.geo.latitude}, ${PHARMACY.geo.longitude}`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(pharmacyLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      </head>
      <body className="font-sans pb-20 md:pb-0">
        <SkipLink />
        <Header />
        <main id="contenido-principal">{children}</main>
        <Footer />
        <MobileActionBar />
        <DesktopQuickActions />
        <CookieBanner />
      </body>
    </html>
  );
}
