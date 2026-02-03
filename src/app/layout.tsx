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
  title: "웹 포트폴리오 | Web Projects Showcase",
  description: "다양한 웹 프로젝트들을 소개하는 포트폴리오 사이트입니다.",
  keywords: ["포트폴리오", "웹개발", "Next.js", "React", "프론트엔드"],
  authors: [{ name: "Developer" }],
  openGraph: {
    title: "웹 포트폴리오 | Web Projects Showcase",
    description: "다양한 웹 프로젝트들을 소개하는 포트폴리오 사이트입니다.",
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
