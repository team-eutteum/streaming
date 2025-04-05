'use client';

import { PageTitle } from '@/components';
import UrlShareButton from '@/components/Button/UrlShareButton';
import LinkSelect from '@/components/Select/LinkSelect';
import LinkSelects from '@/components/Select/LinkSelects';

interface TitleAreaProps {
  label: string;
}

function TitleArea({ label }: TitleAreaProps) {
  return (
    <div className="tit-area">
      <div className="inner">
        <PageTitle label={label} subTxt={`${label} 순위 입니다.`} />
        <UrlShareButton />
        <LinkSelects label="test">
          <LinkSelect href="/" label="test" />
          <LinkSelect href="/" label="test" />
          <LinkSelect href="/" label="test" />
          <LinkSelect href="/" label="test" />
          <LinkSelect href="/" label="test" />
        </LinkSelects>
      </div>
    </div>
  );
}

export default TitleArea;
