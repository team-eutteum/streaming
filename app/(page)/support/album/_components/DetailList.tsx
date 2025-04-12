import { CONST } from '@/lib/constants';

import CommonSupportLayout from '../../_components/CommonSupportLayout';
import TitleArea from '../../_components/TitleArea';

function DetailList() {
  const contents = CONST.SUPPORT_CONTENT.ALBUM_PURCHASE_CONTENT;
  return (
    <>
      <TitleArea label={contents.label} updateDate={contents.updateDate} />
      <CommonSupportLayout
        uniqueId={contents.uniqueId}
        tabContent={contents.content}
      />
    </>
  );
}

export default DetailList;
