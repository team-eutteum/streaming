import type { ReactNode } from 'react';

import { Footer, Header, NavigationBar } from '@/components';

function GlobalLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
      <NavigationBar />
    </div>
  );
}

export default GlobalLayout;
