import { CONST } from '@/lib/constants';

import CommonGuideLayout from '../../_components/CommonGuideLayout';
import TitleArea from '../../_components/TitleArea';

function DetailList() {
  const tabs = CONST.GUIDE_CONTENT.ID_GUIDE_CONTENT;

  return (
    <>
      <TitleArea label={CONST.TITLE.MUSIC_ID_CREATE} updateDate="2025.03.30" />
      <CommonGuideLayout
        uniqueId="idCreate"
        updateDate="2024.12.03"
        tabTitleContent={tabs}
        label={CONST.TITLE.MUSIC_ID_CREATE}
      />
    </>
  );
}

export default DetailList;
