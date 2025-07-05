import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Footer from "../components/Footer";
import "./globals.css";
import Menu from "@/components/Menu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Connor Taylor",
  description: "Digital Designer & Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="apple-touch-icon"
          href="/public/icons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          href="/public/icons/favicon.svg"
          type="image/svg+xml"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.documentElement.style.visibility = 'hidden';
              window.addEventListener('DOMContentLoaded', function() {
                document.documentElement.style.visibility = '';
              });
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider attribute={"class"}>
          <Menu />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
