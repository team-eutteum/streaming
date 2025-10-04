import { Suspense, type ReactNode } from 'react';

import { Footer, Header, NavigationBar } from '@/components';

function GlobalLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Suspense fallback={null}>
        <Header />
        {children}
        <Footer />
        <NavigationBar />
      </Suspense>
    </>
  );
}

export default GlobalLayout;
