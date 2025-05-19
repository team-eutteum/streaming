'use client';

import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

import MusicChart from '@/components/MusicChart/MusicChart';
import MusicChartContainer from '@/components/MusicChart/MusicChartContainer';
import type { CommonChartLayoutProps } from '@/types/chart';

function CommonChartLayout({ tabContent }: CommonChartLayoutProps) {
  const [chartTime, setChartTime] = useState('');

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

  useEffect(() => {
    dayjs.extend(utc);
    dayjs.extend(timezone);

    setChartTime(dayjs().tz('Asia/Seoul').format('YYYY-MM-DD HH'));
  }, []);
  return (
    <>
      <p className="f-bd4 chart-time">{`${chartTime}:00`}</p>
      <MusicChartContainer>
        {tabContent.map((chartItem, chartIndex) => (
          <MusicChart
            key={`melon-content${chartIndex}`}
            artist="RIIZE"
            title={chartItem.title}
            rank={chartItem?.rank}
            change={
              chartItem.change === '0' ? '' : checkRankType(chartItem?.change)
            }
            albumImageUrl={chartItem.albumImageUrl}
            upDowns={handleRankChange(chartItem?.change)}
          />
        ))}
      </MusicChartContainer>
    </>
  );
}

export default CommonChartLayout;
