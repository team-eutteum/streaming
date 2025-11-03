import type { StaticImageData } from 'next/image';

export interface LinkProps {
  link?: string;
  linkTxt?: string;
}
export interface TabContentProps {
  label?: string;
  image?: StaticImageData[];
  links?: Array<LinkProps>;
  content?: string;
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

export interface MusicContentProps {
  title: string;
  hasCheering: boolean;
  image?: StaticImageData;
}
export interface AlbumContentProps {
  value: string;
  albumTitle: string;
  music: Array<MusicContentProps>;
}

export interface CheeringMethodProps {
  label: string;
  updateDate: string;
  uniqueId: string;
  content: Array<AlbumContentProps>;
}
