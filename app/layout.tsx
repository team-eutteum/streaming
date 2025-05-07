import { SITE_TITLE } from '@/lib/constants/title.constant';

import type { Metadata } from 'next';
import 'pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css';
import './scss/common.scss';
import 'swiper/css';
import 'swiper/css/pagination';

export const metadata: Metadata = {
  title: {
    default: SITE_TITLE,
    template: `${SITE_TITLE} | %s`,
  },
  description: '라이즈 음원총공팀입니다.',
  verification: {
    google: 'FEWlIDYerTpTQ0TZchAGDqmoUe9M7umQd5V6y1fah_I',
  },
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
