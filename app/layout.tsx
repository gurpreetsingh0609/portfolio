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

// Upgraded to a standout professional title instead of "Create Next App"
export const metadata: Metadata = {
  title: "Gurpreet Singh | Portfolio",
  description: "Data Analyst & Power BI Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning /* Prevents extension mismatches on the HTML tag */
    >
      <body 
        className="min-h-full flex flex-col" 
        suppressHydrationWarning /* Prevents extension attributes from throwing layout errors */
      >
        {children}
      </body>
    </html>
  );
}