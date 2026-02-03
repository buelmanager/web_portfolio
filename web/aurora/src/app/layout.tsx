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
  title: "aurora | 자연이 선사하는 휴식",
  description: "도심 속 프리미엄 스파 & 웰니스. 자연의 에너지로 몸과 마음의 균형을 찾아드립니다.",
  keywords: ["aurora", "오로라", "스파", "웰니스", "마사지", "힐링", "프리미엄"],
  authors: [{ name: "aurora spa" }],
  openGraph: {
    title: "aurora | 자연이 선사하는 휴식",
    description: "도심 속 프리미엄 스파 & 웰니스. 자연의 에너지로 몸과 마음의 균형을 찾아드립니다.",
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
