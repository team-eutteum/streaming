import { CONST } from '@/lib/constants';

import CommonVoteLayout from '../../_components/CommonVoteLayout';
import TitleArea from '../../_components/TitleArea';

function DetailList() {
  const contents = CONST.VOTE_CONTENT.VOTE_COLLECT_CONTENT;
  return (
    <>
      <TitleArea label={contents.label} updateDate={contents.updateDate} />
      <CommonVoteLayout
        tabContent={contents.content}
        uniqueId={contents.uniqueId}
      />
    </>
  );
}

export default DetailList;
