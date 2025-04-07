import type { StaticImageData } from 'next/image';

export interface MusicChartContentProps {
  chartName?: 'melon' | 'genie' | 'bugs' | 'flo';
  title: string;
  rank: number;
  upDowns: 'up' | 'down' | '';
  image?: StaticImageData;
  chartChange?: number;
}

export interface TabContentProps {
  label: string;
  chart: MusicChartContentProps[];
}

export interface CommonChartLayoutProps {
  label: string;
  tabContent: TabContentProps[];
  uniqueId: string;
}
