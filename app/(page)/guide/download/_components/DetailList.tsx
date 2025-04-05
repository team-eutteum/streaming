import { CONST } from '@/lib/constants';

import CommonGuideLayout from '../../_components/CommonGuideLayout';

function DetailList() {
  const tabs = CONST.GUIDE_CONTENT.DOWNLOAD_GUIDE_CONTENT;

  return (
    <CommonGuideLayout
      uniqueId="musicDownload"
      updateDate="2024.12.03"
      tabTitleContent={tabs}
      label={CONST.TITLE.MUSIC_DOWNLOAD}
    />
  );
}

export default DetailList;
