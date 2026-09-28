import { Fraunces, Karla } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import { ToastProvider } from "@/context/ToastContext";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const karla = Karla({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const viewport = {
  themeColor: "#1D4ED8",
};

export const metadata = {
  title: "PaoClean — Limpieza profesional en Miami",
  description:
    "PaoClean ofrece limpieza residencial, de oficinas, post-construcción y de mudanza en Miami. Cotiza en un minuto por WhatsApp.",
  openGraph: {
    title: "PaoClean — Limpieza profesional en Miami",
    description: "Limpieza residencial, de oficinas y post-construcción. Trato cercano, resultados que se notan.",
    type: "website",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${fraunces.variable} ${karla.variable}`}>
      <body>
        <LanguageProvider>
          <ToastProvider>{children}</ToastProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}