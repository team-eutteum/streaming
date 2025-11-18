// import musicTheShowGuide from 'public/images/vote/music/theshow.jpg';

import type { CommonContentProps } from '@/types/guide';
import voteGuide from 'public/images/vote/collect/collect.jpg';
// import mamaSuperFanGuide from 'public/images/vote/mama/superfanApply.jpg';
import musicDayGuide from 'public/images/vote/music/day.jpg';
import musicFullGuide from 'public/images/vote/music/full.jpg';
import musicInkigayoGuide from 'public/images/vote/music/inkigayo.jpg';
import musicMcountdownGuide from 'public/images/vote/music/mcountdown.jpg';
import musicMusicBankGuide from 'public/images/vote/music/musicbank.jpg';
import musicMusicCoreGuide from 'public/images/vote/music/musiccore.jpg';
import musicShowChampionGuide from 'public/images/vote/music/showchampion.jpg';

import * as TITLE from './title.constant';

export const COLLECT_CONTENT: CommonContentProps = {
  label: TITLE.COLLECT,
  updateDate: '2025.10',
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
  updateDate: '2025.10',
  uniqueId: 'voteCollectList',
  content: [
    {
      label: '투표일정',
      image: [musicFullGuide, musicDayGuide],
    },
    {
      label: '인기가요',
      image: [musicInkigayoGuide],
    },
    {
      label: '뮤직뱅크',
      image: [musicMusicBankGuide],
    },
    {
      label: '음악중심',
      image: [musicMusicCoreGuide],
      links: [
        {
          link: 'sms:%230505?body=RIIZE',
          linkTxt: '음악중심 실시간 문자투표',
        },
      ],
    },
    {
      label: '엠카운트다운',
      image: [musicMcountdownGuide],
    },
    // 더쇼 종영으로 삭제
    // {
    //   label: '더쇼',
    //   image: [musicTheShowGuide],
    // },
    {
      label: '쇼챔피언',
      image: [musicShowChampionGuide],
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

export const MAMA_CONTENT: CommonContentProps = {
  label: TITLE.MAMA_FANS_CHOICE,
  updateDate: '2025.08.28',
  uniqueId: 'voteCollectList',
  content: [
    {
      label: TITLE.MAMA_FANS_CHOICE,
      // image: [mamaSuperFanGuide],
    },
  ],
};
