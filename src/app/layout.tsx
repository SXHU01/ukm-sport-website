import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://ukmsport.uingusdur.ac.id"),
  title: "UKM Sport UIN Gusdur - Asah Bakat, Raih Prestasi!",
  description:
    "Wadah resmi pengembangan 8 cabang olahraga kampus. Bergabunglah bersama kami dalam ekosistem latihan terstruktur, turnamen bergengsi, dan pembinaan atlet berprestasi.",
  keywords: [
    "UKM Sport",
    "UIN Gusdur",
    "UIN K.H. Abdurrahman Wahid",
    "Pekalongan",
    "olahraga kampus",
    "futsal",
    "bulutangkis",
    "basket",
    "voli",
    "tenis meja",
    "catur",
    "bela diri",
    "parkour",
    "open recruitment",
    "mahasiswa",
  ],
  authors: [{ name: "UKM Sport UIN Gusdur" }],
  icons: {
    icon: "/images/logo/ukm-sport.png",
  },
  openGraph: {
    title: "UKM Sport UIN Gusdur - Asah Bakat, Raih Prestasi!",
    description:
      "Wadah resmi pengembangan 8 cabang olahraga kampus. Bergabunglah bersama kami dalam ekosistem latihan terstruktur, turnamen bergengsi, dan pembinaan atlet berprestasi.",
    siteName: "UKM Sport UIN Gusdur",
    type: "website",
    locale: "id_ID",
    images: [
      {
        url: "/images/heroSection/hero-bg.png",
        width: 1920,
        height: 1080,
        alt: "UKM Sport UIN Gusdur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UKM Sport UIN Gusdur - Asah Bakat, Raih Prestasi!",
    description:
      "Wadah resmi pengembangan 8 cabang olahraga kampus UIN K.H. Abdurrahman Wahid Pekalongan.",
    images: ["/images/heroSection/hero-bg.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsOrganization",
  name: "UKM Sport UIN Gusdur",
  alternateName: "Unit Kegiatan Mahasiswa Sport",
  description:
    "Wadah resmi pengembangan 8 cabang olahraga kampus UIN K.H. Abdurrahman Wahid Pekalongan.",
  url: "https://ukmsport.uingusdur.ac.id",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Pahlawan Km. 5, Rowolaku, Kajen",
    addressLocality: "Pekalongan",
    addressRegion: "Jawa Tengah",
    postalCode: "51161",
    addressCountry: "ID",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+62-813-2917-4131",
    email: "ukmsport@uingusdur.ac.id",
    contactType: "customer service",
  },
  sameAs: [
    "https://www.instagram.com/ukmsport_uingusdur",
    "https://www.youtube.com/@ukmsportuingusdurpekalonga8654",
    "https://www.tiktok.com/@ukmsport_uingusdur",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="light" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,1,0&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${montserrat.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
