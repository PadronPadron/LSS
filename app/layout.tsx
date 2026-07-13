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
  title: "Lead Systems Studio | Websites for Local Service Businesses",
  description:
    "Sales-focused websites, customer request paths, and advertising foundations for HVAC and home service companies.",
  openGraph: {
    title: "Lead Systems Studio",
    description:
      "Websites that help local service businesses turn traffic into booked jobs.",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lead Systems Studio",
    description:
      "Websites that help local service businesses turn traffic into booked jobs.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
