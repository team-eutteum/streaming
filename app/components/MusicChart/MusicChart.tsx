import clsx from 'clsx';
import Image from 'next/image';

import AlbumImg from '@/images/@album-ex.jpg';

// 공통 props로 빼기
interface MusicChartContentProps {
  chartName?: string;
  title: string;
  rank: number;
  upDowns?: string;
  chartChange?: number;
}

function MusicChart({
  chartName,
  title,
  rank,
  upDowns,
  chartChange,
}: MusicChartContentProps) {
  return (
    <tr className={clsx('chart-list', chartName)}>
      {chartName && <td className="cate f-bd4 -b">{chartName}</td>}
      <td className="chart-box">
        <div className="img-wrap">
          <Image src={AlbumImg} alt="" width={50} height={50} />
        </div>
        <p className="tit f-bd4">{title}</p>
        <div className="divide">
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
            {chartChange}
          </span>
        </div>
      </td>
    </tr>
  );
}

export default MusicChart;
