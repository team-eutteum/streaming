'use client';
import { CONST } from '@/lib/constants';

import CommonGuideLayout from '../../_components/CommonGuideLayout';
import TitleArea from '../../_components/TitleArea';

function DetailList() {
  const contents = CONST.GUIDE_CONTENT.MUSIC_VIDEO_STREAMING_GUIDE;

  return (
    <>
      <TitleArea label={contents.label} updateDate={contents.updateDate} />
      <CommonGuideLayout
        uniqueId={contents.uniqueId}
        tabContent={contents.content}
        link="https://youtu.be/78lNnCitcBM?si=ys6UH_wv3BTqf6L9"
        linkTxt="Boo Boom Bass 뮤비 스밍 바로가기"
      />
    </>
  );
}

export default DetailList;
