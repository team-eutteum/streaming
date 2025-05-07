import { Container } from '@/components';
import { GUIDE } from '@/lib/constants/title.constant';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: GUIDE,
};

function GuideLayout({ children }: { children: React.ReactNode }) {
  return <Container>{children}</Container>;
}

export default GuideLayout;
