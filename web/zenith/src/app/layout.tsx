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
  title: "zenith | 시간을 담은 예술",
  description: "스위스 장인정신으로 완성된 럭셔리 주얼리와 타임피스. 영원을 담은 컬렉션.",
  keywords: ["zenith", "제니스", "주얼리", "시계", "럭셔리", "스위스", "다이아몬드"],
  authors: [{ name: "zenith" }],
  openGraph: {
    title: "zenith | 시간을 담은 예술",
    description: "스위스 장인정신으로 완성된 럭셔리 주얼리와 타임피스. 영원을 담은 컬렉션.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
