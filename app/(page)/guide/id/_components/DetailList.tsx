import { CONST } from '@/lib/constants';

import CommonGuideLayout from '../../_components/CommonGuideLayout';
import TitleArea from '../../_components/TitleArea';

function DetailList() {
  const tabs = CONST.GUIDE_CONTENT.MUSIC_ID_CREATE_GUIDE;

  return (
    <>
      <TitleArea
        label={CONST.TITLE.MUSIC_ID_CREATE}
        updateDate={CONST.UPDATE_DATE.MUSIC_ID_CREATE_UPDATE}
      />
      <CommonGuideLayout
        uniqueId="idCreate"
        tabContent={tabs}
        label={CONST.TITLE.MUSIC_ID_CREATE}
      />
    </>
  );
}

export default DetailList;
