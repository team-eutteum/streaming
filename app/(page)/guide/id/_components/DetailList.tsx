import { CONST } from '@/lib/constants';

import CommonGuideLayout from '../../_components/CommonGuideLayout';

function DetailList() {
  const tabs = CONST.GUIDE_CONTENT.ID_GUIDE_CONTENT;

  return (
    <CommonGuideLayout
      uniqueId="idCreate"
      updateDate="2024.12.03"
      tabTitleContent={tabs}
      label={CONST.TITLE.MUSIC_ID_CREATE}
    />
  );
}

export default DetailList;
