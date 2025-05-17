import { type ReactNode } from 'react';

import { Footer, Header, NavigationBar } from '@/components';

function GlobalLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <NavigationBar />
    </>
  );
}

export default GlobalLayout;
