'use client';
import { CONST } from '@/lib/constants';

import CommonGuideLayout from '../../_components/CommonGuideLayout';
import TitleArea from '../../_components/TitleArea';

function DetailList() {
  const tabs = CONST.GUIDE_CONTENT.STREAMING_GUIDE_CONTENT;

  return (
    <>
      <TitleArea label={CONST.TITLE.MUSIC_STREAMING} updateDate="2025.03.30" />
      <CommonGuideLayout
        uniqueId="musicStreaming"
        tabContent={tabs}
        label={CONST.TITLE.MUSIC_STREAMING}
      />
    </>
  );
}

export default DetailList;
