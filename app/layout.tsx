import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "BuenBocado | Colaciones Premium para Niños",
  description: "Nutrición real, sabores naturales y el snack perfecto para el desarrollo de tus hijos. Sin sellos, sin azúcar añadida.",
  openGraph: {
    title: "BuenBocado | Colaciones Premium para Niños",
    description: "Nutrición real, sabores naturales y el snack perfecto para el desarrollo de tus hijos.",
    type: "website",
    locale: "es_CL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CL">
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased text-gray-900`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
