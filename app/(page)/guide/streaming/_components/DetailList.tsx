'use client';
import { CONST } from '@/lib/constants';

import CommonGuideLayout from '../../_components/CommonGuideLayout';

function DetailList() {
  const tabs = CONST.GUIDE_CONTENT.STREAMING_GUIDE_CONTENT;

  return (
    <CommonGuideLayout
      uniqueId="musicStreaming"
      updateDate="2024.12.03"
      tabTitleContent={tabs}
      label={CONST.TITLE.MUSIC_STREAMING}
    />
  );
}

export default DetailList;
