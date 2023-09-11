import "./styles/_globals.scss";
import type { Metadata } from "next";
import { Providers } from "./providers";
import { Header } from "@/components/header";
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
          {children}
        </Providers>
      </body>
    </html>
  );
}
