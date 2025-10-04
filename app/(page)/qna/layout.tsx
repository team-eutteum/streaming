import { Container } from '@/components';
import { QNA } from '@/lib/constants/title.constant';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: QNA,
};

function GuideLayout({ children }: { children: React.ReactNode }) {
  return <Container>{children}</Container>;
}

export default GuideLayout;
