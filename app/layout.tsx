import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "./providers";
import { Header, Footer } from "@/components";

export const metadata: Metadata = {
  title: "Ciobanu Nicolae",
  description: "Portofolio of Ciobanu Nicolae",
  keywords: [
    "Ciobanu",
    "Nicolae",
    "Portofolio",
    "Next.js",
    "React",
    "TypeScript",
    "Radix UI",
    "Vercel",
    "GitHub",
  ],
  authors: [
    { name: "Ciobanu Nicolae", url: "https://github.com/ciobanunicolae" },
  ],
  creator: "ciobanunicolae",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    url: "https://ciobanunicolae.com",
    title: "Ciobanu Nicolae",
    description: "Portofolio of Ciobanu Nicolae",
    siteName: "Ciobanu Nicolae",
  },
  icons: {
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
    icon: [
      {
        url: "/favicon-light.ico",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/favicon-dark.ico",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers defaultTheme="system" enableSystem>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
