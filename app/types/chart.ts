export interface MusicChartContentProps {
  id?: number;
  chartName?: 'melon' | 'genie' | 'bugs' | 'flo';
  title: string;
  artist?: string;
  albumImageUrl?: string;
  rank: number;
  change: string;
  chartType?: string;
  crawledAt?: string;
  detailUrl?: string;
  upDowns: 'up' | 'down' | '';
  songId?: number;
}

export interface CommonChartLayoutProps {
  label: string;
  tabContent: MusicChartContentProps[];
  uniqueId: string;
  activeTabIdx: number;
}
