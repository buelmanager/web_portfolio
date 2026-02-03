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
  title: "onyx | 자산의 새로운 기준",
  description: "초고액 자산가를 위한 프라이빗 뱅킹. 맞춤형 자산관리와 글로벌 투자 솔루션.",
  keywords: ["onyx", "오닉스", "프라이빗뱅킹", "자산관리", "wealth management", "투자"],
  authors: [{ name: "onyx Private Banking" }],
  openGraph: {
    title: "onyx | 자산의 새로운 기준",
    description: "초고액 자산가를 위한 프라이빗 뱅킹. 맞춤형 자산관리와 글로벌 투자 솔루션.",
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
