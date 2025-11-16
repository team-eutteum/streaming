'use client';

import { usePathname } from 'next/navigation';

import { PageTitle } from '@/components';
import UrlShareButton from '@/components/Button/UrlShareButton';
import LinkSelect from '@/components/Select/LinkSelect';
import LinkSelects from '@/components/Select/LinkSelects';
import { NAV } from '@/lib/constants/nav.constant';
import type { TitleAreaProps } from '@/types/commonTitle';

function TitleArea({ label }: TitleAreaProps) {
  const pathname = usePathname();

  const currPath = pathname.split('/')[3];

  return (
    <div className="tit-area">
      <div className="inner">
        <PageTitle label={label} subTxt={`${label} 입니다.`} />
        <UrlShareButton />
        <LinkSelects label={currPath}>
          {NAV?.[0]?.children?.[3]?.children?.map((child, idx) => (
            <LinkSelect
              key={`video-guide${idx}`}
              label={child.title}
              href={child.path}
            />
          ))}
        </LinkSelects>
      </div>
    </div>
  );
}

export default TitleArea;
