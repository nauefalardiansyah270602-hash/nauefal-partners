import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nauefal Ardiansyah & Partners | Law Firm Jakarta Indonesia",
  description:
    "Firma hukum profesional di Jakarta, Tangerang, Depok, Bekasi, Bogor. Layanan hukum korporasi, litigasi, kontrak bisnis, dan sertifikasi halal.",
  keywords: [
    "law firm jakarta",
    "pengacara jakarta",
    "legal consultant indonesia",
    "firma hukum indonesia",
    "jasa hukum bisnis",
    "sertifikasi halal indonesia",
    "Nauefal Ardiansyah & Partners",
  ],
  authors: [{ name: "Nauefal Ardiansyah" }],

  verification: {
    google: "Ljfeb6Dx1dIwE-9nMPXuMiahStPfbUr6-LuWr2_SoZU",
  },

  openGraph: {
    title: "Nauefal Ardiansyah & Partners",
    description:
      "Firma hukum profesional dan halal compliance services di Indonesia",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-black">
        {children}

        {/* GOOGLE ANALYTICS (GA4) */}
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  );
}
