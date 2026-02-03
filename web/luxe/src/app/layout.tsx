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
  title: "DCC&P | 디지털 라이프스타일의 정점",
  description: "2,000여 종의 프리미엄 IT 하드웨어 & 가전. 25년 노하우의 디지털 커머스 플랫폼.",
  keywords: ["DCC&P", "디씨씨앤피", "IT하드웨어", "가전", "Dell", "HP", "B2B", "워크스테이션", "서버"],
  authors: [{ name: "(주)디씨씨앤피" }],
  openGraph: {
    title: "DCC&P | 디지털 라이프스타일의 정점",
    description: "2,000여 종의 프리미엄 IT 하드웨어 & 가전",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
