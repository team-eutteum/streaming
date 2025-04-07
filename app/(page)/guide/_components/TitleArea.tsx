'use client';

import { PageTitle } from '@/components';
import UrlShareButton from '@/components/Button/UrlShareButton';
import type { TitleAreaProps } from '@/types/commonTitle';

function TitleArea({ label, updateDate }: TitleAreaProps) {
  return (
    <div className="tit-area">
      <div className="inner">
        <PageTitle
          label={label}
          subTxt={`${label} 방법에 대해 알려드립니다`}
          updateDate={updateDate}
        />
        <UrlShareButton />
      </div>
    </div>
  );
}

export default TitleArea;
