import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Russo_One } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "cyrillic"],
});

const russoOne = Russo_One({
  variable: "--font-russo-one",
  weight: "400",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Правила канала Ponzi — Twitch, YouTube, Войс",
  description:
    "Официальные правила Twitch-канала, YouTube-канала и голосового чата стримера Ponzi. Наказания за нарушения, состав администрации и ссылки на соц-сети.",
  keywords: ["Ponzi", "правила", "Twitch", "YouTube", "войс", "стрим"],
  openGraph: {
    title: "Правила канала Ponzi",
    description:
      "Правила Twitch, YouTube и войса на стриме Ponzi + соц-сети стримера",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0e" },
    { media: "(prefers-color-scheme: light)", color: "#f7f5fa" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${russoOne.variable} antialiased bg-background text-foreground`}
      >
        {/* Восстанавливаем выбранный режим (неон/строгий ч/б) до первой отрисовки — без мигания */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              'try{if(localStorage.getItem("ponzi-neon")==="off")document.documentElement.dataset.neon="off"}catch(e){}',
          }}
        />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
