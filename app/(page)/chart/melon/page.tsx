import AlbumImg from '@/images/@album-ex.jpg';

import CommonChartLayout from '../_components/CommonChartLayout';
import TitleArea from '../_components/TitleArea';

import type { StaticImageData } from 'next/image';

interface MusicChartContentProps {
  chartName: string;
  title: string;
  rank: number;
  upDowns: string;
  image?: StaticImageData;
  chartChange?: number;
}

interface TabContentProps {
  label: string;
  chart: MusicChartContentProps[];
}

function ChartMelon() {
  const tabContent: TabContentProps[] = [
    {
      label: 'Top100',
      chart: [
        {
          chartName: 'melon',
          rank: 1,
          title: 'Hug',
          upDowns: 'up',
          image: AlbumImg,
          chartChange: 1,
        },
        {
          chartName: 'melon',
          rank: 1,
          title: 'Boom Boom Bass',
          upDowns: 'down',
          image: AlbumImg,
          chartChange: 1,
        },
        {
          chartName: 'melon',
          rank: 1,
          title: 'Boom Boom Bass',
          upDowns: 'down',
          image: AlbumImg,
          chartChange: 1,
        },
        {
          chartName: 'melon',
          rank: 1,
          title: 'Boom Boom Bass',
          upDowns: 'down',
          image: AlbumImg,
          chartChange: 1,
        },
        {
          chartName: 'melon',
          rank: 1,
          title: 'Boom Boom Bass',
          upDowns: 'down',
          image: AlbumImg,
          chartChange: 1,
        },
        {
          chartName: 'melon',
          rank: 1,
          title: 'Boom Boom Bass',
          upDowns: 'down',
          image: AlbumImg,
          chartChange: 1,
        },
        {
          chartName: 'melon',
          rank: 1,
          title: 'Boom Boom Bass',
          upDowns: 'down',
          image: AlbumImg,
          chartChange: 1,
        },
        {
          chartName: 'melon',
          rank: 1,
          title: 'Boom Boom Bass',
          upDowns: 'down',
          image: AlbumImg,
          chartChange: 1,
        },
      ],
    },
    {
      label: 'Hot100',
      chart: [
        {
          chartName: 'melon',
          rank: 1,
          title: 'Hug',
          upDowns: 'up',
        },
      ],
    },
    {
      label: '일간',
      chart: [
        {
          chartName: 'melon',
          rank: 1,
          title: 'Hug',
          upDowns: 'up',
        },
        {
          chartName: 'melon',
          rank: 1,
          title: 'Siren',
          upDowns: 'up',
        },
      ],
    },
    {
      label: '주간',
      chart: [
        {
          chartName: 'melon',
          rank: 1,
          title: 'Hug',
          upDowns: 'up',
        },
      ],
    },
    {
      label: '월간',
      chart: [
        {
          chartName: 'melon',
          rank: 1,
          title: 'Hug',
          upDowns: 'up',
        },
      ],
    },
    {
      label: '일간',
      chart: [
        {
          chartName: 'melon',
          rank: 1,
          title: 'Hug',
          upDowns: 'up',
        },
      ],
    },
  ];
  return (
    <>
      <TitleArea label="멜론 차트" />
      <CommonChartLayout
        label="멜론 차트"
        uniqueId="melonChart"
        tabContent={tabContent}
      />
    </>
  );
}

export default ChartMelon;
