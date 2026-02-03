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
  title: "에너지 솔루션 | 지속 가능한 미래를 위한 태양광 전문기업",
  description: "태양광 발전, ESS, 신재생에너지 토탈 솔루션. 15년 노하우의 설치부터 유지보수까지 원스톱 서비스.",
  keywords: ["에너지 솔루션", "태양광", "태양광 발전", "신재생에너지", "ESS", "태양광 패널", "태양광 설치", "그린에너지"],
  authors: [{ name: "(주)에너지 솔루션" }],
  openGraph: {
    title: "에너지 솔루션 | 지속 가능한 미래를 위한 태양광 전문기업",
    description: "태양광 발전, ESS, 신재생에너지 토탈 솔루션",
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
