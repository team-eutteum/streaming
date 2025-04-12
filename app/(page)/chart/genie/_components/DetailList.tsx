import CommingSoon from '@/components/Etc/CommingSoon';
import type { TabContentProps } from '@/types/chart';
import AlbumImg from 'public/images/@album-ex.jpg';

import CommonChartLayout from '../../_components/CommonChartLayout';
import TitleArea from '../../_components/TitleArea';

function DetailList() {
  const commingSoon = true;
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
      <TitleArea label="지니 차트" />
      {!commingSoon ? (
        <CommonChartLayout
          label="지니 차트"
          uniqueId="melonChart"
          tabContent={tabContent}
        />
      ) : (
        <CommingSoon />
      )}
    </>
  );
}

export default DetailList;
