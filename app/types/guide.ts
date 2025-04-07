import type { StaticImageData } from 'next/image';

export interface TabContentProps {
  label: string;
  image?: StaticImageData;
}

export interface CommonGuideLayoutProps {
  label: string;
  tabContent: Array<TabContentProps>;
  uniqueId: string;
}
