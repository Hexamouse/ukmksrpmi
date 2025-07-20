import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "UKM KSR PMI UPI YPTK Padang - Unit Kegiatan Mahasiswa",
  description:
    "Website resmi UKM KSR PMI UPI YPTK Padang, sebuah unit kegiatan mahasiswa di Universitas Putra Indonesia YPTK Padang yang berfokus pada kegiatan kemanusiaan, pelatihan kepemimpinan, dan pengabdian masyarakat.",
  keywords: [
    "UKM KSR PMI UPI YPTK Padang",
    "KSR PMI UPI YPTK",
    "Unit Kegiatan Mahasiswa",
    "Universitas Putra Indonesia YPTK Padang",
    "Kegiatan Kemanusiaan Padang",
    "Pelatihan Kepemimpinan Mahasiswa",
    "Pengabdian Masyarakat UPI YPTK",
    "PMI Padang",
    "KSR PMI",
    "Mahasiswa UPI YPTK",
  ],
  authors: [{ name: "UKM KSR PMI UPI YPTK Padang Team" }],
  creator: "UKM KSR PMI UPI YPTK Padang",
  publisher: "UKM KSR PMI UPI YPTK Padang",
  openGraph: {
    title: "UKM KSR PMI UPI YPTK Padang - Unit Kegiatan Mahasiswa",
    description:
      "Bergabunglah dengan UKM KSR PMI UPI YPTK Padang untuk berkontribusi dalam kegiatan kemanusiaan, pelatihan kepemimpinan, dan pengabdian masyarakat di Universitas Putra Indonesia YPTK Padang.",
    url: "https://www.ksrpmi-upiyptkpadang.org",
    siteName: "UKM KSR PMI UPI YPTK Padang",
    images: [
      {
        url: "/assets/images/ksr-pmi-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Logo UKM KSR PMI UPI YPTK Padang",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UKM KSR PMI UPI YPTK Padang - Unit Kegiatan Mahasiswa",
    description:
      "Website resmi UKM KSR PMI UPI YPTK Padang, berfokus pada kegiatan kemanusiaan, pelatihan kepemimpinan, dan pengabdian masyarakat.",
    images: ["/assets/images/ksr-pmi-logo.jpg"],
    creator: "@ksrpmiupiyptk",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.ksrpmi-upiyptkpadang.org",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  viewport: "width=device-width, initial-scale=1.0",
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${montserrat.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
