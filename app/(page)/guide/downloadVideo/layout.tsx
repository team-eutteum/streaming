import { Container } from '@/components';
import { MUSIC_DOWNLOAD_GUIDE_VIDEO } from '@/lib/constants/title.constant';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: MUSIC_DOWNLOAD_GUIDE_VIDEO,
};

function GuideLayout({ children }: { children: React.ReactNode }) {
  return <Container>{children}</Container>;
}

export default GuideLayout;
