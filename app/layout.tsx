import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "BuenBocado | Colaciones ricas y simples para niños",
  description: "Pouches de puré de fruta con ingredientes claros y sabores que les gustan. Porciones prácticas para colaciones sin complicaciones.",
  openGraph: {
    title: "BuenBocado | Colaciones ricas y simples para niños",
    description: "Pouches de puré de fruta con ingredientes claros y sabores que les gustan.",
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
      <body className={`${nunito.variable} font-sans antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
