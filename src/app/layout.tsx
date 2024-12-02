import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const font = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mart: Plataforma Integral para Negocios y Gestión Empresarial",
  description:
    "Descubre Mart, la plataforma que transforma negocios con herramientas avanzadas de gestión empresarial, POS, autenticación y más.",
  keywords: [
    "Mart",
    "Gestión Empresarial",
    "POS",
    "Autenticación",
    "Herramientas",
    "Integración",
    "Negocios",
    "Gestión de ventas",
    "Gestión de clientes",
    "Gestión de productos",
    "Gestión de inventario",
  ],
  publisher: "Mart Inc.",
  creator: "Jefferson Lopez",
  robots: "index,follow",
  category: "Gestión Empresarial",
  applicationName: "Mart",
  abstract:
    "Mart es una plataforma que ofrece soluciones innovadoras para ayudar a las empresas a mejorar sus ventas y automatizar procesos repetitivos.",
  generator: "Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${font.className} antialiased`}>{children}</body>
    </html>
  );
}
