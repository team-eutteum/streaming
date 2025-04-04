import { PageTitle } from '@/components';
import { CONST } from '@/lib/constants';

import DetailList from './_components/DetailList';

function StreamingPage() {
  return (
    <>
      <div className="tit-area">
        <div className="guide-inner">
          <PageTitle
            label={CONST.TITLE.MUSIC_STREAMING}
            subTxt={`${CONST.TITLE.MUSIC_STREAMING} 방법에 대해 알려드립니다`}
            updateDate="2025.04.02"
          />
        </div>
      </div>
      <DetailList />
    </>
  );
}

export default StreamingPage;
