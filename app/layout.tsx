import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "./theme-provider";
import { Header } from "@/components/header";
export const metadata: Metadata = {
  title: "Ciobanu Nicolae",
  description: "Portofolio of Ciobanu Nicolae",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider defaultTheme="system" enableSystem>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
