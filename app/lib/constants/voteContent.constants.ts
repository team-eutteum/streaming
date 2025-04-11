import voteGuide from 'public/images/vote/collect/collect.jpg';

import type { CommonContentProps } from '@/types/guide';

import * as TITLE from './title.constant';
export const VOTE_COLLECT_CONTENT: CommonContentProps = {
  label: TITLE.COLLECT,
  updateDate: '2025.03.30',
  uniqueId: 'voteCollectList',
  content: [
    {
      label: TITLE.VOTE,
      image: voteGuide,
    },
  ],
};
