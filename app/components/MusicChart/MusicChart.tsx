import clsx from 'clsx';
import Image from 'next/image';

import type { MusicChartContentProps } from '@/types/chart';

function MusicChart({
  chartName,
  chartNameShow,
  title,
  rank,
  upDowns,
  change,
  albumImageUrl,
  chartType,
}: MusicChartContentProps) {
  return (
    <div className={clsx('chart-list', chartName)}>
      <div className="cate-wrap">
        {chartName && chartNameShow && (
          <p className="cate f-bd4 -b">{chartName}</p>
        )}
        {chartType && <p className="type f-cp3 -m">{chartType}</p>}
      </div>
      <div className="chart-box">
        <div className="img-wrap">
          {albumImageUrl && (
            <Image src={albumImageUrl} alt="" width={50} height={50} />
          )}
        </div>
        <p className="tit f-bd4">{title}</p>
        <div className="rank">
          <div className="chart f-bd3 -b">
            {rank}
            <span className="f-bd4">위</span>
          </div>
          <span
            className={clsx(
              'chart-change f-bd4',
              upDowns === 'up' && 'up',
              upDowns === 'down' && 'down',
              upDowns === 'new' && 'new',
            )}
          >
            {change}
          </span>
        </div>
      </div>
    </div>
  );
}

export default MusicChart;
