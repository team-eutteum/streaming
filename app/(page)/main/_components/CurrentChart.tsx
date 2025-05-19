'use client';
import { useEffect, useState } from 'react';
import { ArrowPathIcon, ChartBarSquareIcon } from '@heroicons/react/24/outline';
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
import { getChartStatus } from '@/hooks/getChartStatus';
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

const minutes = dayjs().minute();
const isChartRefresh = minutes >= 0 && minutes <= 5;

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

  const chartStatus = getChartStatus({
    isUpdating: isChartRefresh && !!data && data.length <= 0,
    hasData: !!data && data.length > 0,
  });

  useEffect(() => {
    setChartLoadingState(isLoading);
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

  switch (chartStatus) {
    case 'updating':
      return (
        <NoData
          Icon={ArrowPathIcon}
          txt="멜론 차트 갱신중! 잠시만 기다려 주세요."
        />
      );
    case 'noData':
      return <NoData txt="데이터를 불러오지 못했습니다" />;
    case 'hasData':
      return !!data && data?.length > 0 ? (
        <MusicChartContainer>
          {data?.map((melonChart, melonIndex) => (
            <MusicChart
              artist={'RIIZE'}
              key={`melonChart${melonIndex}`}
              title={melonChart.title}
              rank={melonChart.rank}
              change={
                melonChart.change === '0'
                  ? ''
                  : checkRankType(melonChart.change)
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

  const chartStatus = getChartStatus({
    isUpdating: isChartRefresh && !!data && data.length <= 0,
    hasData: !!data && data.length > 0,
  });

  useEffect(() => {
    if (!isLoading && !data?.[0]) {
      setEmptyChartCount((prev) => prev + 1);
    }
  }, [isLoading, setEmptyChartCount, data]);

  if (isLoading) {
    return <MusicChartSkeleton />;
  }

  switch (chartStatus) {
    case 'updating':
      return <NoData txt="지니 차트 갱신중! 잠시만 기다려 주세요." />;
    case 'noData':
      return <NoData txt="데이터를 불러오지 못했습니다" />;
    case 'hasData':
      return data?.[0] && data?.length > 0 ? (
        <MusicChart
          artist={'RIIZE'}
          title={data?.[0].title}
          rank={data?.[0].rank}
          change={
            data?.[0].change === '0' ? '' : checkRankType(data?.[0].change)
          }
          upDowns={handleRankChange(data?.[0].change)}
          albumImageUrl={data?.[0].albumImageUrl}
          chartName="genie"
        />
      ) : (
        <tr className="chart-list">
          <td>
            <NoData txt={`지니 차트 아웃! 스밍을 열심히 합시다!`} />
          </td>
        </tr>
      );
  }
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

  const chartStatus = getChartStatus({
    isUpdating: isChartRefresh && !!data && data.length <= 0,
    hasData: !!data && data.length > 0,
  });

  useEffect(() => {
    if (!isLoading && !data?.[0]) {
      setEmptyChartCount((prev) => prev + 1);
    }
  }, [isLoading, setEmptyChartCount, data]);

  if (isLoading) {
    return <MusicChartSkeleton />;
  }

  switch (chartStatus) {
    case 'updating':
      return <NoData txt="벅스 차트 갱신중! 잠시만 기다려 주세요." />;
    case 'noData':
      return <NoData txt="데이터를 불러오지 못했습니다" />;
    case 'hasData':
      return data?.[0] && data?.length > 0 ? (
        <MusicChart
          artist={'RIIZE'}
          title={data?.[0].title}
          rank={data?.[0].rank}
          change={
            data?.[0].change === '0' ? '' : checkRankType(data?.[0].change)
          }
          upDowns={handleRankChange(data?.[0].change)}
          albumImageUrl={data?.[0].albumImageUrl}
          chartName="bugs"
        />
      ) : (
        <tr className="chart-list">
          <td>
            <NoData txt={`벅스 차트 아웃! 스밍을 열심히 합시다!`} />
          </td>
        </tr>
      );
  }
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

    const minutes = dayjs().minute();

    console.log(minutes, 'minutes');

    console.log(dayjs().get('m'));
    if (minutes >= 26 && minutes <= 28) {
      console.log('chartUpdate');
    }
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
