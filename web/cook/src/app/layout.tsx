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
  title: "master | 미식의 정점",
  description: "최상의 재료와 장인의 손길이 만나는 파인 다이닝. 특별한 순간을 위한 완벽한 공간.",
  keywords: ["master", "마스터", "파인다이닝", "레스토랑", "미슐랭", "코스요리", "프렌치"],
  authors: [{ name: "master restaurant" }],
  openGraph: {
    title: "master | 미식의 정점",
    description: "최상의 재료와 장인의 손길이 만나는 파인 다이닝. 특별한 순간을 위한 완벽한 공간.",
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
