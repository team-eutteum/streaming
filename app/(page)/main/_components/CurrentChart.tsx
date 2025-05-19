'use client';
import { useEffect, useState } from 'react';
import { ChartBarSquareIcon } from '@heroicons/react/24/outline';
import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

import { PageTitle } from '@/components';
import CommingSoon from '@/components/Etc/CommingSoon';
import MusicChart from '@/components/MusicChart/MusicChart';
import MusicChartContainer from '@/components/MusicChart/MusicChartContainer';
import MusicChartSkeleton from '@/components/MusicChart/MusicChartSkeleton';
import NoData from '@/components/NoData/Nodata';
import { getData } from '@/hooks/getData';
import type { MusicChartContentProps } from '@/types/chart';

const handleRankChange = (rank: string) => {
  if (rank.startsWith('+')) {
    return 'up';
  } else if (rank.startsWith('-')) {
    return 'down';
  } else {
    return '';
  }
};

const checkRankType = (rank: string) => {
  if (isNaN(Number(rank))) {
    return rank;
  } else {
    return rank.slice(1);
  }
};

function MelonChart({
  setChartLoadingState,
}: {
  setChartLoadingState: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { data, isLoading } = useQuery<MusicChartContentProps[]>({
    queryKey: ['chart', 'melonChartData', 'top100'],
    queryFn: () => getData('melon/top100'),
    staleTime: 0,
  });

  useEffect(() => {
    if (isLoading) {
      setChartLoadingState(true);
    } else {
      setChartLoadingState(false);
    }
  }, [isLoading, setChartLoadingState]);

  if (isLoading) {
    return (
      <MusicChartContainer>
        <MusicChartSkeleton />
        <MusicChartSkeleton />
        <MusicChartSkeleton />
      </MusicChartContainer>
    );
  }

  if (!data) {
    return <NoData txt="데이터를 불러오지 못했습니다" />;
  }

  return data?.length > 0 ? (
    <MusicChartContainer>
      {data?.map((melonChart, melonIndex) => (
        <MusicChart
          artist={'RIIZE'}
          key={`melonChart${melonIndex}`}
          title={melonChart.title}
          rank={melonChart.rank}
          change={
            melonChart.change === '0' ? '' : checkRankType(melonChart.change)
          }
          upDowns={handleRankChange(melonChart.change)}
          albumImageUrl={melonChart.albumImageUrl}
          chartName="melon"
        />
      ))}
    </MusicChartContainer>
  ) : (
    <NoData
      Icon={ChartBarSquareIcon}
      txt={`멜론 차트 아웃! \n 스밍을 열심히 합시다!`}
    />
  );
}

function GenieChart({
  setEmptyChartCount,
}: {
  setEmptyChartCount: React.Dispatch<React.SetStateAction<number>>;
}) {
  const { data, isLoading } = useQuery<MusicChartContentProps[]>({
    queryKey: ['chart', 'genieChartData', 'realtime'],
    queryFn: () => getData('genie/realtime'),
    staleTime: 0,
  });
  const genieChart = data?.[0];

  useEffect(() => {
    if (!isLoading && !genieChart) {
      setEmptyChartCount((prev) => prev + 1);
    }
  }, [isLoading, setEmptyChartCount, genieChart]);

  if (isLoading) {
    return <MusicChartSkeleton />;
  }

  if (!data) {
    return (
      <tr className="chart-list">
        <td>
          <NoData txt="데이터를 불러오지 못했습니다" />
        </td>
      </tr>
    );
  }

  return (
    <>
      {genieChart && data?.length > 0 ? (
        <MusicChart
          artist={'RIIZE'}
          title={genieChart.title}
          rank={genieChart.rank}
          change={
            genieChart.change === '0' ? '' : checkRankType(genieChart.change)
          }
          upDowns={handleRankChange(genieChart.change)}
          albumImageUrl={genieChart.albumImageUrl}
          chartName="genie"
        />
      ) : (
        <tr className="chart-list">
          <td>
            <NoData txt={`지니 차트 아웃! 스밍을 열심히 합시다!`} />
          </td>
        </tr>
      )}
    </>
  );
}

function BugsChart({
  setEmptyChartCount,
}: {
  setEmptyChartCount: React.Dispatch<React.SetStateAction<number>>;
}) {
  const { data, isLoading } = useQuery<MusicChartContentProps[]>({
    queryKey: ['chart', 'bugsChartData', 'realtime'],
    queryFn: () => getData('bugs/realtime'),
    staleTime: 0,
  });
  const bugsChart = data?.[0];

  useEffect(() => {
    if (!isLoading && !bugsChart) {
      setEmptyChartCount((prev) => prev + 1);
    }
  }, [isLoading, setEmptyChartCount, bugsChart]);

  if (isLoading) {
    return <MusicChartSkeleton />;
  }

  if (!data) {
    return (
      <tr className="chart-list">
        <td>
          <NoData txt="데이터를 불러오지 못했습니다" />
        </td>
      </tr>
    );
  }

  return (
    <>
      {bugsChart && data?.length > 0 ? (
        <MusicChart
          artist={'RIIZE'}
          title={bugsChart.title}
          rank={bugsChart.rank}
          change={
            bugsChart.change === '0' ? '' : checkRankType(bugsChart.change)
          }
          upDowns={handleRankChange(bugsChart.change)}
          albumImageUrl={bugsChart.albumImageUrl}
          chartName="bugs"
        />
      ) : (
        <tr className="chart-list">
          <td>
            <NoData txt={`벅스 차트 아웃! 스밍을 열심히 합시다!`} />
          </td>
        </tr>
      )}
    </>
  );
}

function FloChart({
  setEmptyChartCount,
}: {
  setEmptyChartCount: React.Dispatch<React.SetStateAction<number>>;
}) {
  const { data, isLoading } = useQuery<MusicChartContentProps[]>({
    queryKey: ['chart', 'floChartData', 'realtime'],
    queryFn: () => getData('flo/realtime'),
    staleTime: 0,
  });
  const floChart = data?.[0];

  useEffect(() => {
    if (!isLoading && !floChart) {
      setEmptyChartCount((prev) => prev + 1);
    }
  }, [isLoading, setEmptyChartCount, floChart]);

  if (isLoading) {
    return <MusicChartSkeleton />;
  }

  if (!data) {
    return (
      <tr className="chart-list">
        <td>
          <NoData txt="데이터를 불러오지 못했습니다" />
        </td>
      </tr>
    );
  }

  return (
    <>
      {floChart && data?.length > 0 ? (
        <MusicChart
          artist={'RIIZE'}
          title={floChart.title}
          rank={floChart.rank}
          change={floChart.change === '0' ? '' : checkRankType(floChart.change)}
          upDowns={handleRankChange(floChart.change)}
          albumImageUrl={floChart.albumImageUrl}
          chartName="flo"
        />
      ) : (
        <tr className="chart-list">
          <td>
            <NoData txt={`플로 차트 아웃! 스밍을 열심히 합시다!`} />
          </td>
        </tr>
      )}
    </>
  );
}

function CurrentChart() {
  const commingSoon = false;
  const [emptyChartCount, setEmptyChartCount] = useState(0);
  const [chartTime, setChartTime] = useState('');
  const [chartLoadingState, setChartLoadingState] = useState(true);

  useEffect(() => {
    dayjs.extend(utc);
    dayjs.extend(timezone);

    setChartTime(dayjs().tz('Asia/Seoul').format('YYYY-MM-DD HH'));
  }, []);

  return (
    <section className="sc-chart">
      <div className="inner">
        <div className="tit-area">
          <PageTitle label="현재 순위" />
          {!commingSoon && !chartLoadingState && (
            <div className="chart-time f-cp1">{`${chartTime}:00`}</div>
          )}
          <span className="noti f-cp3">
            * 차트 갱신에는 약간의 시간이 소요될 수 있습니다.
          </span>
        </div>
      </div>
      {!commingSoon ? (
        <div className="inner-wide">
          <div className="chart-container">
            <div className="chart-swiper">
              <div className="scroll-area">
                <MelonChart setChartLoadingState={setChartLoadingState} />
                {emptyChartCount >= 3 ? (
                  <NoData
                    Icon={ChartBarSquareIcon}
                    txt={`차트 아웃! \n 스밍을 열심히 합시다!`}
                  />
                ) : (
                  <MusicChartContainer>
                    <GenieChart setEmptyChartCount={setEmptyChartCount} />
                    <BugsChart setEmptyChartCount={setEmptyChartCount} />
                    <FloChart setEmptyChartCount={setEmptyChartCount} />
                  </MusicChartContainer>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <CommingSoon />
      )}
    </section>
  );
}

export default CurrentChart;
