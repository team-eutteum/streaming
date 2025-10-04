'use client';

import { PageTitle } from '@/components';
import UrlShareButton from '@/components/Button/UrlShareButton';
import type { TitleAreaProps } from '@/types/commonTitle';

function TitleArea({ label }: TitleAreaProps) {
  return (
    <div className="tit-area">
      <div className="inner">
        <PageTitle label={label} subTxt="음총팀 이것 뭐예요?" />
        <UrlShareButton />
      </div>
    </div>
  );
}

export default TitleArea;
