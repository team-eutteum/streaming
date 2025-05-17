import clsx from 'clsx';
import Image from 'next/image';

import type { MusicChartContentProps } from '@/types/chart';

function MusicChart({
  chartName,
  title,
  rank,
  upDowns,
  change,
  albumImageUrl,
}: MusicChartContentProps) {
  return (
    <tr className={clsx('chart-list', chartName)}>
      {chartName && <td className="cate f-bd4 -b">{chartName}</td>}
      <td className="chart-box">
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
            )}
          >
            {change}
          </span>
        </div>
      </td>
    </tr>
  );
}

export default MusicChart;
