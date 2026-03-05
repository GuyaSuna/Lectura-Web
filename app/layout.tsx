import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ruta Positiva - Fluyendo en Ruta Positiva",
  description:
    "Un santuario para el intelecto moderno. Únete a miles en discusiones curadas que trascienden la página.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Newsreader:opsz,ital,wght@6..72,200..800&family=Pinyon+Script&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-cream dark:bg-emerald-deep font-display text-emerald-deep dark:text-cream transition-colors duration-300 antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
