import type { Metadata } from 'next';
import 'pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css';
// import "./globals.css";
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
      <body>
        {process.env.APP_ENV === 'development' ? (
          <>{children}</>
        ) : (
          <div className="flex flex-col items-center justify-center gap-10 font-black text-white bg-black min-h-dvh text-5xl text-center md:text-7xl">
            <h1>
              <em className="max-md:block">RIIZE</em> 음원 총공팀
            </h1>
          </div>
        )}
      </body>
    </html>
  );
}
