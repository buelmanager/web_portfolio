import type { Metadata } from "next";
import { Noto_Serif_KR } from "next/font/google";
import LenisProvider from "@/components/providers/LenisProvider";
import Preloader from "@/components/ui/Preloader";
import "./globals.css";

const notoSerifKR = Noto_Serif_KR({
  variable: "--font-noto-serif-kr",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Creative Developer & Designer - Portfolio",
  description: "크리에이티브 디렉터 포트폴리오. 브랜딩, 디자인, 아트 디렉션.",
  keywords: ["포트폴리오", "웹개발", "브랜딩", "디자인", "아트 디렉션"],
  authors: [{ name: "Creative Director" }],
  openGraph: {
    title: "Creative Developer & Designer - Portfolio",
    description: "크리에이티브 디렉터 포트폴리오. 브랜딩, 디자인, 아트 디렉션.",
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
      <head>
        <link
          rel="preconnect"
          href="https://cdn.jsdelivr.net"
          crossOrigin="anonymous"
        />
        <link
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
          rel="stylesheet"
        />
      </head>
      <body className={`${notoSerifKR.variable} antialiased`}>
        <Preloader />
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
