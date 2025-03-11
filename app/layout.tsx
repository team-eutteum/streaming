import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";

const pretendard = localFont({
  src: "../public/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
  fallback: ['Malgun Gothic', 'sans-serif'],
});

export const metadata: Metadata = {
  title: "RIIZE STREAMING",
  description: "라이즈 총공팀",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${pretendard.variable}`}>
      <body
        className={pretendard.className}
      >
        {children}
      </body>
    </html>
  );
}
