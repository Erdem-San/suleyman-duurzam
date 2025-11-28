import type { Metadata } from "next";
import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import AuthProvider from "./components/AuthProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "TariefAdviseur - Vergelijk Energietarieven",
  description: "Vind de beste energietarieven en bespaar tot wel €500 per jaar. 100% onafhankelijk en volledig gratis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${poppins.variable} ${montserrat.variable}`}>
      <body className="antialiased bg-white text-gray-900">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
