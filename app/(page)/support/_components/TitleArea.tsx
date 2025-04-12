'use client';

import { Button, PageTitle } from '@/components';
import UrlShareButton from '@/components/Button/UrlShareButton';
import type { TitleAreaProps } from '@/types/commonTitle';

function TitleArea({ label, updateDate, link, linkTxt }: TitleAreaProps) {
  return (
    <div className="tit-area">
      <div className="inner">
        <PageTitle
          label={label}
          subTxt={`${label}에 대해 알려드립니다`}
          updateDate={updateDate}
        />
        <UrlShareButton />
        {link && (
          <Button size="lg" href={link}>
            {linkTxt}
          </Button>
        )}
      </div>
    </div>
  );
}

export default TitleArea;
