import { CONST } from '@/lib/constants';

import CommonGuideLayout from '../../_components/CommonGuideLayout';
import TitleArea from '../../_components/TitleArea';

function DetailList() {
  const tabs = CONST.GUIDE_CONTENT.STREAMING_LIST_CONTENT;

  return (
    <>
      <TitleArea
        label={CONST.TITLE.STREAMING_LIST}
        updateDate={CONST.UPDATE_DATE.STREAMING_LIST_UPDATE}
      />
      <CommonGuideLayout
        uniqueId="streamingList"
        tabContent={tabs}
        label={CONST.TITLE.STREAMING_LIST}
      />
    </>
  );
}

export default DetailList;
