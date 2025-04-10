import { CONST } from '@/lib/constants';

import CommonGuideLayout from '../../_components/CommonGuideLayout';
import TitleArea from '../../_components/TitleArea';

function DetailList() {
  const content = CONST.GUIDE_CONTENT.STREAMING_LIST_CONTENT;

  return (
    <>
      <TitleArea label={content.label} updateDate={content.updateDate} />
      <CommonGuideLayout
        uniqueId={content.uniqueId}
        tabContent={content.content}
      />
    </>
  );
}

export default DetailList;
