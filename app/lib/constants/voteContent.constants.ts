import type { CommonContentProps } from '@/types/guide';
import voteGuide from 'public/images/vote/collect/collect.jpg';
import musicDayGuide from 'public/images/vote/music/day.jpg';
import musicFullGuide from 'public/images/vote/music/full.jpg';

import * as TITLE from './title.constant';

export const COLLECT_CONTENT: CommonContentProps = {
  label: TITLE.COLLECT,
  updateDate: '2025.04.14',
  uniqueId: 'voteCollectList',
  content: [
    {
      label: TITLE.VOTE,
      image: [voteGuide],
    },
  ],
};

export const BROADCAST_CONTENT: CommonContentProps = {
  label: TITLE.MUSIC_BROADCAST,
  updateDate: '2025.04.14',
  uniqueId: 'voteCollectList',
  content: [
    {
      label: 'FULL',
      image: [musicFullGuide],
    },
    {
      label: 'DAY',
      image: [musicDayGuide],
    },
  ],
};

export const MELON_CONTENT: CommonContentProps = {
  label: TITLE.MELON_WEEKLY_POPULAR,
  updateDate: '2025.04.14',
  uniqueId: 'voteCollectList',
  content: [
    {
      label: TITLE.MELON_WEEKLY_POPULAR,
      // image: voteGuide,
    },
  ],
};
