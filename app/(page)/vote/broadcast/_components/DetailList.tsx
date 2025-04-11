import { CONST } from '@/lib/constants';

import CommonVoteLayout from '../../_components/CommonVoteLayout';
import TitleArea from '../../_components/TitleArea';

function DetailList() {
  const contents = CONST.VOTE_CONTENT.BROADCAST_CONTENT;

  return (
    <>
      <TitleArea label={contents.label} updateDate={contents.updateDate} />
      <CommonVoteLayout
        uniqueId={contents.uniqueId}
        tabContent={contents.content}
      />
    </>
  );
}

export default DetailList;
