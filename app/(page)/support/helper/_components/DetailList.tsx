import { CONST } from '@/lib/constants';

import CommonSupportLayout from '../../_components/CommonSupportLayout';
import TitleArea from '../../_components/TitleArea';

function DetailList() {
  const contents = CONST.SUPPORT_CONTENT.HELPER_CONTENT;
  return (
    <>
      <TitleArea label={contents.label} updateDate={contents.updateDate} />
      <CommonSupportLayout
        uniqueId={contents.uniqueId}
        tabContent={contents.content}
        link="http://pf.kakao.com/_LWmxfn"
        linkTxt="헬퍼 신청 링크(음총팀 카카오채널)"
      />
    </>
  );
}
export default DetailList;
