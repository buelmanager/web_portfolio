import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "atlas | 완벽한 휴식의 시작",
  description: "세계 최고의 럭셔리 호텔 경험. 프리미엄 스위트, 미슐랭 다이닝, 스파 & 웰니스.",
  keywords: ["atlas", "아틀라스", "럭셔리호텔", "5성급", "리조트", "스위트", "스파"],
  authors: [{ name: "atlas hotel" }],
  openGraph: {
    title: "atlas | 완벽한 휴식의 시작",
    description: "세계 최고의 럭셔리 호텔 경험. 프리미엄 스위트, 미슐랭 다이닝, 스파 & 웰니스.",
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
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
