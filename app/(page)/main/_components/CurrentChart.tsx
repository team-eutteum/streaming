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
  } else if (rank.includes('new')) {
    return 'new';
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

dayjs.extend(utc);
dayjs.extend(timezone);

const minutes = dayjs().tz('Asia/Seoul').minute();
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
    isLoading: isLoading, // 로딩 중
    isError: !data, // 데이터 가져올 수 없음
    isUpdating: isChartRefresh && !!data && data.length <= 0, // isChartRefresh 이고 데이터가 없을 때
    hasData: !!data && data.length > 0, // 데이터가 있을 때
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
    case 'error':
      return (
        <NoData
          Icon={ChartBarSquareIcon}
          txt={`데이터를 불러오지 못했습니다`}
        />
      );
    case 'noData':
      return (
        <NoData
          Icon={ChartBarSquareIcon}
          txt={`멜론 차트 아웃! 스밍을 열심히 합시다!`}
        />
      );
    case 'hasData':
      return (
        !!data && (
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
        )
      );
  }
}

function GenieChart({
  setEmptyChartCount,
}: {
  setEmptyChartCount: React.Dispatch<React.SetStateAction<number>>;
}) {
  const { data, isLoading, isError } = useQuery<MusicChartContentProps[]>({
    queryKey: ['chart', 'genieChartData', 'realtime'],
    queryFn: () => getData('genie/realtime'),
    staleTime: 0,
  });

  const chartStatus = getChartStatus({
    isLoading: isLoading,
    isError: isError,
    isUpdating: isChartRefresh && !!data && data.length <= 0,
    hasData: !!data && data.length > 0,
  });

  useEffect(() => {
    if (!isLoading && !data) {
      setEmptyChartCount((prev) => prev + 1);
    }
  }, [isLoading, setEmptyChartCount, data]);

  if (isLoading) {
    return <MusicChartSkeleton />;
  }

  switch (chartStatus) {
    case 'loading':
      return <MusicChartSkeleton />;
    case 'updating':
      return (
        <tr className="chart-list">
          <td>
            <NoData txt={`지니 차트 갱신중! 잠시만 기다려 주세요.`} />
          </td>
        </tr>
      );
    case 'error':
      return (
        <tr className="chart-list">
          <td>
            <NoData txt={`데이터를 불러오지 못했습니다`} />
          </td>
        </tr>
      );
    case 'noData':
      return (
        <tr className="chart-list">
          <td>
            <NoData txt={`지니 차트 아웃! 스밍을 열심히 합시다!`} />
          </td>
        </tr>
      );
    case 'hasData':
      return (
        data && (
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
        )
      );
  }
}

function BugsChart({
  setEmptyChartCount,
}: {
  setEmptyChartCount: React.Dispatch<React.SetStateAction<number>>;
}) {
  const { data, isLoading, isError } = useQuery<MusicChartContentProps[]>({
    queryKey: ['chart', 'bugsChartData', 'realtime'],
    queryFn: () => getData('bugs/realtime'),
    staleTime: 0,
  });

  const chartStatus = getChartStatus({
    isLoading: isLoading,
    isError: isError,
    isUpdating: isChartRefresh && !!data && data.length <= 0,
    hasData: !!data && data.length > 0,
  });

  useEffect(() => {
    if (!isLoading && !data) {
      setEmptyChartCount((prev) => prev + 1);
    }
  }, [isLoading, setEmptyChartCount, data]);

  switch (chartStatus) {
    case 'loading':
      return <MusicChartSkeleton />;
    case 'updating':
      return (
        <tr className="chart-list">
          <td>
            <NoData txt={`벅스 차트 갱신중! 잠시만 기다려 주세요.`} />
          </td>
        </tr>
      );
    case 'error':
      return (
        <tr className="chart-list">
          <td>
            <NoData txt={`데이터를 불러오지 못했습니다`} />
          </td>
        </tr>
      );
    case 'noData':
      return (
        <tr className="chart-list">
          <td>
            <NoData txt={`벅스 차트 아웃! 스밍을 열심히 합시다!`} />
          </td>
        </tr>
      );
    case 'hasData':
      return (
        data?.[0] && (
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
        )
      );
  }
}

function FloChart({
  setEmptyChartCount,
}: {
  setEmptyChartCount: React.Dispatch<React.SetStateAction<number>>;
}) {
  const { data, isLoading, isError } = useQuery<MusicChartContentProps[]>({
    queryKey: ['chart', 'floChartData', 'realtime'],
    queryFn: () => getData('flo/realtime'),
    staleTime: 0,
  });

  const chartStatus = getChartStatus({
    isLoading: isLoading,
    isError: isError,
    isUpdating: isChartRefresh && !!data && data.length <= 0,
    hasData: !!data && data?.length > 0, // 데이터가 있을 때
  });

  useEffect(() => {
    if (!isLoading && !data) {
      setEmptyChartCount((prev) => prev + 1);
    }
  }, [isLoading, setEmptyChartCount, data]);

  switch (chartStatus) {
    case 'loading':
      return <MusicChartSkeleton />;
    case 'updating':
      return (
        <tr className="chart-list">
          <td>
            <NoData txt={`플로 차트 갱신중! 잠시만 기다려 주세요.`} />
          </td>
        </tr>
      );
    case 'error':
      return (
        <tr className="chart-list">
          <td>
            <NoData txt={`데이터를 불러오지 못했습니다`} />
          </td>
        </tr>
      );
    case 'noData':
      return (
        <tr className="chart-list">
          <td>
            <NoData txt={`플로 차트 아웃! 스밍을 열심히 합시다!`} />
          </td>
        </tr>
      );
    case 'hasData':
      return (
        !!data && (
          <MusicChart
            artist={'RIIZE'}
            title={data?.[0].title}
            rank={data?.[0].rank}
            change={
              data?.[0].change === '0' ? '' : checkRankType(data?.[0].change)
            }
            upDowns={handleRankChange(data?.[0].change)}
            albumImageUrl={data?.[0].albumImageUrl}
            chartName="flo"
          />
        )
      );
  }
}

function CurrentChart() {
  const commingSoon = false;
  const [emptyChartCount, setEmptyChartCount] = useState(0);
  const [chartTime, setChartTime] = useState('');
  const [chartLoadingState, setChartLoadingState] = useState(true);

  useEffect(() => {
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
