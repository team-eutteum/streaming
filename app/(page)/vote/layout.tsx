import { Container } from '@/components';
import { VOTE } from '@/lib/constants/title.constant';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: VOTE,
};

function VoteLayout({ children }: { children: React.ReactNode }) {
  return <Container>{children}</Container>;
}

export default VoteLayout;
