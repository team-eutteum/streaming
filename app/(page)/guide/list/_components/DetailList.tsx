import { CONST } from '@/lib/constants';

import CommonGuideLayout from '../../_components/CommonGuideLayout';
import TitleArea from '../../_components/TitleArea';

function DetailList() {
  const contents = CONST.GUIDE_CONTENT.STREAMING_LIST_CONTENT;

  return (
    <>
      <TitleArea label={contents.label} updateDate={contents.updateDate} />
      <CommonGuideLayout
        uniqueId={contents.uniqueId}
        tabContent={contents.content}
      />
    </>
  );
}

export default DetailList;
