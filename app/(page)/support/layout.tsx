import { Container } from '@/components';
import { SUPPORT } from '@/lib/constants/title.constant';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: SUPPORT,
};

function SupportLayout({ children }: { children: React.ReactNode }) {
  return <Container>{children}</Container>;
}

export default SupportLayout;
