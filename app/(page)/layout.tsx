import { Footer, Header } from '@/_components';
import type { ReactNode } from 'react';

function GlobalLayout({ children }: { children: ReactNode }) {
  return (
    <div className='flex flex-col min-h-dvh'>
      <Header />
      <div>
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default GlobalLayout;