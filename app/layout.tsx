import type { Metadata } from 'next';
import 'pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css';
import './scss/common.scss';
import 'swiper/css';

export const metadata: Metadata = {
  title: 'RIIZE STREAMING',
  description: '라이즈 음원총공팀',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
