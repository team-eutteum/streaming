export interface MusicChartContentProps {
  id?: number;
  chartName?: 'melon' | 'genie' | 'bugs' | 'flo';
  chartNameShow: boolean;
  title: string;
  artist?: string;
  albumImageUrl?: string;
  rank: number;
  change: string;
  chartType?: string;
  crawledAt?: string;
  detailUrl?: string;
  upDowns: 'up' | 'down' | 'new' | '';
  songId?: number;
}

export interface CommonChartLayoutProps {
  label: string;
  tabContent: MusicChartContentProps[];
  chartName?: 'melon' | 'genie' | 'bugs' | 'flo';
  uniqueId: string;
  activeTabIdx: number;
}
