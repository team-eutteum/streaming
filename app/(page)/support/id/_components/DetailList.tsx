import { CONST } from '@/lib/constants';

import CommonSupportLayout from '../../_components/CommonSupportLayout';
import TitleArea from '../../_components/TitleArea';

function DetailList() {
  const contents = CONST.SUPPORT_CONTENT.ID_DONATION_CONTENT;

  return (
    <>
      <TitleArea label={contents.label} updateDate={contents.updateDate} />
      <CommonSupportLayout
        uniqueId={contents.uniqueId}
        tabContent={contents.content}
        link="https://forms.gle/1LtouTfW8wNsDu2v8"
        linkTxt="아이디 기부폼"
      />
    </>
  );
}

export default DetailList;
