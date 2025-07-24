import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Website Translation Test",
  description: "Testing Website Translation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Script
          src="https://storage.googleapis.com/website-translation-script/translator.js"
          data-api-key="wt_ca5464d8459e44d1_s85cAJaTlwWpcCNiJ7NXOQ"
        />
      </body>
    </html>
  );
}
