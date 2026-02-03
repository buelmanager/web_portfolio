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
  title: "vertex | 공간을 디자인하다",
  description: "혁신적인 건축 설계로 공간의 가치를 창조합니다. 주거, 상업, 문화 공간의 새로운 기준.",
  keywords: ["vertex", "버텍스", "건축설계", "건축사무소", "인테리어", "공간디자인", "모던건축"],
  authors: [{ name: "vertex" }],
  openGraph: {
    title: "vertex | 공간을 디자인하다",
    description: "혁신적인 건축 설계로 공간의 가치를 창조합니다. 주거, 상업, 문화 공간의 새로운 기준.",
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
