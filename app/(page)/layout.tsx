import { Suspense, type ReactNode } from 'react';

import { Footer, Header, NavigationBar } from '@/components';
import ShortcutFloating from '@/components/Etc/ShortcutFloating';

function GlobalLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Suspense fallback={null}>
        <Header />
        {children}
        <Footer />
        <NavigationBar />
        <ShortcutFloating />
      </Suspense>
    </>
  );
}

export default GlobalLayout;
