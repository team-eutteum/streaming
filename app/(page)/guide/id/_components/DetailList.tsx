import { CONST } from '@/lib/constants';

import CommonGuideLayout from '../../_components/CommonGuideLayout';
import TitleArea from '../../_components/TitleArea';

function DetailList() {
  const contents = CONST.GUIDE_CONTENT.MUSIC_ID_CREATE_GUIDE;

  return (
    <>
      <TitleArea label={contents.label} updateDate={contents.updateDate} />
      <CommonGuideLayout
        uniqueId={contents.uniqueId}
        tabContent={contents.content}
        link="https://forms.gle/1LtouTfW8wNsDu2v8"
        linkTxt="아이디 기부폼"
      />
    </>
  );
}

export default DetailList;
