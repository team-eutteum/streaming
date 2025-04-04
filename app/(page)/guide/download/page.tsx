import { PageTitle } from '@/components';
import { CONST } from '@/lib/constants';

import DetailList from './_components/DetailList';

function DownloadPage() {
  return (
    <>
      <div className="tit-area">
        <div className="guide-inner">
          <PageTitle
            label={CONST.TITLE.MUSIC_DOWNLOAD}
            subTxt="음원 다운로드 방법에 대해 알려드립니다"
            updateDate="2025.04.02"
          />
        </div>
      </div>
      <DetailList />
    </>
  );
}

export default DownloadPage;
