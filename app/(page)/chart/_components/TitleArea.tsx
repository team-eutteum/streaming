'use client';

import { usePathname } from 'next/navigation';

import { PageTitle } from '@/components';
import UrlShareButton from '@/components/Button/UrlShareButton';
import LinkSelect from '@/components/Select/LinkSelect';
import LinkSelects from '@/components/Select/LinkSelects';
import type { TitleAreaProps } from '@/types/commonTitle';

function TitleArea({ label }: TitleAreaProps) {
  const pathname = usePathname();

  const currPath = pathname.split('/')[2];

  return (
    <div className="tit-area">
      <div className="inner">
        <PageTitle label={label} subTxt={`${label} 순위 입니다.`} />
        <UrlShareButton />
        <LinkSelects label={currPath}>
          <LinkSelect href="/chart/melon" label="MELON" />
          <LinkSelect href="/chart/genie" label="GENIE" />
          <LinkSelect href="/chart/bugs" label="BUGS" />
          <LinkSelect href="/chart/flo" label="FLO" />
        </LinkSelects>
        <span className="noti f-cp3">
          * 차트 갱신에는 약간의 시간이 소요될 수 있습니다.
        </span>
      </div>
    </div>
  );
}

export default TitleArea;
