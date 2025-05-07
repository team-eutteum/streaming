import { Container } from '@/components';
import { CHART } from '@/lib/constants/title.constant';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: CHART,
};

function GuideLayout({ children }: { children: React.ReactNode }) {
  return <Container>{children}</Container>;
}

export default GuideLayout;
