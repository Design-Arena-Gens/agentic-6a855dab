import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Привет — цифровое приветствие",
  description:
    "Минималистичный лендинг на Next.js с тёплым приветствием, функциями и формой обратной связи.",
  keywords: ["Привет", "лендинг", "Next.js", "Tailwind", "цифровой привет"],
  openGraph: {
    title: "Привет — цифровое приветствие",
    description:
      "Уютная страница для представления сервиса, который начинает общение с тёплого приветствия.",
    url: "https://agentic-6a855dab.vercel.app",
    siteName: "Привет",
    locale: "ru_RU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-50 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
