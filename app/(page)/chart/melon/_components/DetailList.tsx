'use client';

import { useState } from 'react';
import { ArrowPathIcon, ChartBarSquareIcon } from '@heroicons/react/24/outline';
import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import { SwiperSlide } from 'swiper/react';

import { Tab, Tabs } from '@/components';
import CommingSoon from '@/components/Etc/CommingSoon';
import MusicChartContainer from '@/components/MusicChart/MusicChartContainer';
import MusicChartSkeleton from '@/components/MusicChart/MusicChartSkeleton';
import NoData from '@/components/NoData/Nodata';
import { getChartStatus } from '@/hooks/getChartStatus';
import { getData } from '@/hooks/getData';
import { MELON_CHART_CONTENT } from '@/lib/constants/chart.constants';
import type { MusicChartContentProps } from '@/types/chart';

import CommonChartLayout from '../../_components/CommonChartLayout';
import TitleArea from '../../_components/TitleArea';

function ChartArea({ chartType }: { chartType: string }) {
  const { data, isLoading, isError } = useQuery<MusicChartContentProps[]>({
    queryKey: ['chart', 'melonChartData', chartType],
    queryFn: () => getData(`melon/${chartType}`),
    staleTime: 0,
  });

  dayjs.extend(utc);
  dayjs.extend(timezone);

  const minutes = dayjs().tz('Asia/Seoul').minute();
  const isChartRefresh = minutes >= 0 && minutes <= 5;

  const chartStatus = getChartStatus({
    isLoading: isLoading, // 로딩 중
    isError: isError, // 데이터 가져올 수 없음
    isUpdating: isChartRefresh && !!data && data.length <= 0, // isChartRefresh 이고 데이터가 없을 때
    hasData: !!data && data?.length > 0, // 데이터가 있을 때
  });

  switch (chartStatus) {
    case 'loading':
      return (
        <MusicChartContainer>
          {Array.from({ length: 3 }).map((_, index) => (
            <MusicChartSkeleton key={`skeleton-${index}`} />
          ))}
        </MusicChartContainer>
      );
    case 'updating':
      return (
        <NoData
          Icon={ArrowPathIcon}
          txt="멜론 차트 갱신중! 잠시만 기다려 주세요."
        />
      );
    case 'error':
      return (
        <NoData
          Icon={ChartBarSquareIcon}
          txt={'데이터를 불러오지 못했습니다'}
        />
      );
    case 'noData':
      return (
        <NoData
          Icon={ChartBarSquareIcon}
          txt={`멜론 차트 아웃! \n 스밍을 열심히 합시다!`}
        />
      );
    case 'hasData':
      return (
        data && (
          <div style={{ position: 'relative' }}>
            <CommonChartLayout
              chartName="melon"
              label="멜론 차트"
              uniqueId="melonChart"
              tabContent={data}
              activeTabIdx={0}
            />
          </div>
        )
      );
  }
}

function DetailList() {
  const commingSoon = false;
  const tabContent = MELON_CHART_CONTENT;
  const [activeTabIdx, setActiveTabIdx] = useState(0);

  const [chartType, setChartType] = useState('top100');

  const handleTab = (idx: number, chartType: string) => {
    setActiveTabIdx(idx);
    setChartType(chartType);
  };

  return (
    <>
      <TitleArea label="MELON 차트" />
      <section className="sc-chart">
        {!commingSoon && (
          <Tabs hasScroll>
            {tabContent?.charts.map((tab, index) => (
              <SwiperSlide key={`tabItem${index}`}>
                <Tab
                  uniqueId={`melonTab${index}`}
                  onClick={() => handleTab(index, tab.chart)}
                  selected={activeTabIdx}
                  index={index}
                  size="lg"
                >
                  {tab.label}
                </Tab>
              </SwiperSlide>
            ))}
          </Tabs>
        )}
        <div className="inner">
          {!commingSoon ? <ChartArea chartType={chartType} /> : <CommingSoon />}
        </div>
      </section>
    </>
  );
}

export default DetailList;
