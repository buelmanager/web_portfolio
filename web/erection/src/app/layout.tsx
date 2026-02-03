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
  title: "로터스건설 | 믿음으로 짓는 든든한 건축",
  description: "25년 건설 노하우. 주거/상업 공간의 가치를 높이는 종합 건설 인테리어 전문 기업.",
  keywords: ["로터스건설", "건설", "인테리어", "리모델링", "주거공간", "상업공간", "시공"],
  authors: [{ name: "로터스건설" }],
  openGraph: {
    title: "로터스건설 | 믿음으로 짓는 든든한 건축",
    description: "25년 건설 노하우. 주거/상업 공간의 가치를 높이는 종합 건설 인테리어 전문 기업.",
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
