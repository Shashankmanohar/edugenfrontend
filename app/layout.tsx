import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.edugenworldschool.com'),
  title: "Best English Medium School in Nalanda | Edugen World School",
  description: "Edugen World School is the best English medium school in Nalanda and the top CBSE school near Kisan College. We offer education from Play Group to Class 12 Science.",
  keywords: "Best English medium school in Nalanda, Top CBSE school near Kisan College, Best CBSE School in Bihar Sharif, Class 11 and 12 Science Bihar Sharif, Play school Bihar Sharif",
  icons: {
    icon: "/edugenlogo.png",
  },
  openGraph: {
    title: "Best English Medium School in Nalanda | Edugen World School",
    description: "Edugen World School is the best English medium school in Nalanda and the top CBSE school near Kisan College. We offer education from Play Group to Class 12 Science.",
    url: "https://www.edugenworldschool.com",
    siteName: "Edugen World School",
    images: [
      {
        url: "/edugen_hero_banner.png",
        width: 1200,
        height: 630,
        alt: "Edugen World School Hero Banner",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best CBSE School in Bihar Sharif | Edugen World School",
    description: "Edugen World School is the best CBSE school in Bihar Sharif offering education from Play Group to Class 12 Science.",
    images: ["/edugen_hero_banner.png"],
  },
  alternates: {
    canonical: "https://www.edugenworldschool.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Edugen World School",
    url: "https://www.edugenworldschool.com",
    logo: "https://www.edugenworldschool.com/edugenlogo.png",
    image: "https://www.edugenworldschool.com/edugen_hero_banner.png",
    description: "Edugen World School is the best CBSE school in Bihar Sharif offering education from Play Group to Class 12 Science.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Bihar Sharif",
      addressLocality: "Bihar Sharif",
      addressRegion: "Bihar",
      addressCountry: "IN"
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9570000764",
      contactType: "Help Desk"
    },
    sameAs: [
      "https://www.facebook.com/share/1BVkWst3zV/",
      "https://www.instagram.com/edugen.world.school?igsh=MW5sbjRsMTc2cjJneA=="
    ]
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakartaSans.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-slate-800" suppressHydrationWarning>
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

