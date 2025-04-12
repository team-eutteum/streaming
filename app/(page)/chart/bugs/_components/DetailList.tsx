import CommingSoon from '@/components/Etc/CommingSoon';
import type { TabContentProps } from '@/types/chart';

import CommonChartLayout from '../../_components/CommonChartLayout';
import TitleArea from '../../_components/TitleArea';

function DetailList() {
  const commingSoon = true;
  const tabContent: TabContentProps[] = [
    {
      label: 'Top100',
      chart: [],
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
      <TitleArea label="벅스 차트" />
      {!commingSoon ? (
        <CommonChartLayout
          label="벅스 차트"
          uniqueId="bugsChart"
          tabContent={tabContent}
        />
      ) : (
        <CommingSoon />
      )}
    </>
  );
}

export default DetailList;
