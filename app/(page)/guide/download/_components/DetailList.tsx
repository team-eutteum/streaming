import { CONST } from '@/lib/constants';

import CommonGuideLayout from '../../_components/CommonGuideLayout';
import TitleArea from '../../_components/TitleArea';

function DetailList() {
  const tabs = CONST.GUIDE_CONTENT.DOWNLOAD_GUIDE_CONTENT;

  return (
    <>
      <TitleArea
        label={CONST.TITLE.MUSIC_DOWNLOAD}
        updateDate={CONST.UPDATE_DATE.MUSIC_DOWNLOAD_UPDATE}
      />
      <CommonGuideLayout
        uniqueId="musicDownload"
        tabContent={tabs}
        label={CONST.TITLE.MUSIC_DOWNLOAD}
      />
    </>
  );
}

export default DetailList;
