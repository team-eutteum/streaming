import type { StaticImageData } from 'next/image';

export interface TabContentProps {
  label?: string;
  image?: StaticImageData;
}

export interface CommonGuideLayoutProps {
  tabContent: Array<TabContentProps>;
  uniqueId: string;
  link?: string;
  linkTxt?: string;
}

export interface CommonContentProps {
  updateDate?: string;
  uniqueId: string;
  label: string;
  link?: string;
  content: Array<TabContentProps>;
}
