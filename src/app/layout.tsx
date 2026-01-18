import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { SITE_DESCRIPTION } from "../lib/constants";
import React from "react";
import { ThemeProvider } from "@/providers/ThemeProvider";

const ubuntu = Ubuntu({
  weight: ['300', '400', '500', '700'],
  variable: "--font-ubuntu",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Enrique René | Full Stack UX Engineer',
  description: SITE_DESCRIPTION,
  icons: {
    icon: '/images/favicon.png',
    apple: '/images/favicon.png',
  },
};

// Google Tag Manager Script Tag component
const GoogleTagManagerScriptTag = () => (
  <Script id="google-tag-manager-script" strategy="afterInteractive">
    {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-MDH3GQ4J');`}
  </Script>
);

// Google Tag Manager noscript component
const GoogleTagManagerNoScript = () => {
  return (
    <noscript>
      <iframe 
        src="https://www.googletagmanager.com/ns.html?id=GTM-MDH3GQ4J"
        height="0" 
        width="0" 
        style={{ display: 'none', visibility: 'hidden' }}
      />
    </noscript>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ubuntu.variable} font-ubuntu antialiased`}
      >
        <GoogleTagManagerScriptTag />
        <ThemeProvider>
          <GoogleTagManagerNoScript />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
