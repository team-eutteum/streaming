'use client';

import { useState } from 'react';
import { ChartBarSquareIcon } from '@heroicons/react/24/outline';
import { useQuery } from '@tanstack/react-query';

import { Tab, Tabs } from '@/components';
import CommingSoon from '@/components/Etc/CommingSoon';
import MusicChartContainer from '@/components/MusicChart/MusicChartContainer';
import MusicChartSkeleton from '@/components/MusicChart/MusicChartSkeleton';
import NoData from '@/components/NoData/Nodata';
import { BUGS_CHART_CONTENT } from '@/lib/constants/chart.constants';
import type { MusicChartContentProps } from '@/types/chart';

import CommonChartLayout from '../../_components/CommonChartLayout';
import TitleArea from '../../_components/TitleArea';
function DetailList() {
  const commingSoon = false;

  const tabContent = BUGS_CHART_CONTENT;

  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const [chartType, setChartType] = useState('realtime');

  const { data, isLoading, isError } = useQuery<MusicChartContentProps[]>({
    queryKey: ['chart', 'bugsChartData', chartType],
    queryFn: async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_CHART_URL}/bugs/${chartType}`,
      );
      if (!response.ok) {
        throw new Error(`데이터를 불러오는 데 실패했습니다.`);
      }
      const data = await response.json();
      return data;
    },
    staleTime: 0,
  });

  const handleTab = (idx: number, chartType: string) => {
    setActiveTabIdx(idx);
    setChartType(chartType);
  };
  return (
    <>
      <TitleArea label="BUGS 차트" />
      <section className="sc-chart">
        <Tabs hasScroll>
          {tabContent?.charts.map((tab, index) => (
            <Tab
              key={`tabItem${index}`}
              uniqueId={`bugsTab${index}`}
              onClick={() => handleTab(index, tab.chart)}
              selected={activeTabIdx}
              index={index}
              size="lg"
            >
              {tab.label}
            </Tab>
          ))}
        </Tabs>
        <div className="inner">
          {!commingSoon ? (
            isLoading ? (
              <MusicChartContainer>
                {Array.from({ length: 3 }).map((_, index) => (
                  <MusicChartSkeleton key={`skeleton-${index}`} />
                ))}
              </MusicChartContainer>
            ) : isError ? (
              <NoData
                Icon={ChartBarSquareIcon}
                txt="데이터를 불러오지 못했습니다"
              />
            ) : data && data.length > 0 ? (
              <div style={{ position: 'relative' }}>
                <CommonChartLayout
                  label="BUGS 차트"
                  uniqueId="bugsChart"
                  tabContent={data}
                  activeTabIdx={activeTabIdx}
                />
              </div>
            ) : (
              <NoData
                Icon={ChartBarSquareIcon}
                txt={`벅스 차트 아웃! \n 스밍을 열심히 합시다!`}
              />
            )
          ) : (
            <CommingSoon />
          )}
        </div>
      </section>
    </>
  );
}

export default DetailList;
