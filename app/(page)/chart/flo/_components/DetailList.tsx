'use client';

import { useState } from 'react';
import { ChartBarSquareIcon } from '@heroicons/react/24/outline';
import { useQuery } from '@tanstack/react-query';

import { Tab, Tabs } from '@/components';
import CommingSoon from '@/components/Etc/CommingSoon';
import MusicChartContainer from '@/components/MusicChart/MusicChartContainer';
import MusicChartSkeleton from '@/components/MusicChart/MusicChartSkeleton';
import NoData from '@/components/NoData/Nodata';
import { getData } from '@/hooks/getData';
import { FLO_CHART_CONTENT } from '@/lib/constants/chart.constants';
import type { MusicChartContentProps } from '@/types/chart';

import CommonChartLayout from '../../_components/CommonChartLayout';
import TitleArea from '../../_components/TitleArea';

function DetailList() {
  const commingSoon = false;

  const tabContent = FLO_CHART_CONTENT;

  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const [chartType, setChartType] = useState('realtime');

  const { data, isLoading, isError } = useQuery<MusicChartContentProps[]>({
    queryKey: ['chart', 'floChartData', chartType],
    queryFn: () => getData(`flo/${chartType}`),
    staleTime: 0,
  });

  const handleTab = (idx: number, chartType: string) => {
    setActiveTabIdx(idx);
    setChartType(chartType);
  };

  return (
    <>
      <TitleArea label="FLO 차트" />
      <section className="sc-chart">
        {!commingSoon && (
          <Tabs hasScroll>
            {tabContent?.charts.map((tab, index) => (
              <Tab
                key={`tabItem${index}`}
                uniqueId={`FLOTab${index}`}
                onClick={() => handleTab(index, tab.chart)}
                selected={activeTabIdx}
                index={index}
                size="lg"
              >
                {tab.label}
              </Tab>
            ))}
          </Tabs>
        )}
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
                  label="FLO 차트"
                  uniqueId="melonChart"
                  tabContent={data}
                  activeTabIdx={activeTabIdx}
                />
              </div>
            ) : (
              <NoData
                Icon={ChartBarSquareIcon}
                txt={`플로 차트 아웃! \n 스밍을 열심히 합시다!`}
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
