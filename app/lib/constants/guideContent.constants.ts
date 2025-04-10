import type { CommonContentProps } from '@/types/guide';
import IdBugsGuide from 'public/images/guide/id/bugs.jpg';
import IdGenieGuide from 'public/images/guide/id/genie.jpg';
import IdMelonGuide from 'public/images/guide/id/melon.jpg';

import * as TITLE from './title.constant';

export const STREAMING_LIST_CONTENT: CommonContentProps = {
  label: TITLE.STREAMING_LIST,
  updateDate: '2025.03.30',
  uniqueId: 'streamingList',
  content: [
    {
      label: TITLE.STREAMING_LIST,
      image: IdMelonGuide,
    },
  ],
};

// 이미지 수급 예정
export const MUSIC_STREAMING_CONTENT: CommonContentProps = {
  label: TITLE.MUSIC_STREAMING,
  updateDate: '2025.03.30',
  uniqueId: 'musicStreaming',
  content: [
    {
      label: TITLE.MELON,
      image: IdMelonGuide,
    },
    {
      label: TITLE.GENIE,
      image: IdMelonGuide,
    },
    {
      label: TITLE.BUGS,
      image: IdMelonGuide,
    },
    {
      label: TITLE.FLO,
      image: IdMelonGuide,
    },
  ],
};

// 이미지 수급 예정
export const MUSIC_DOWNLOAD_CONTENT: CommonContentProps = {
  label: TITLE.MUSIC_DOWNLOAD,
  updateDate: '2025.03.30',
  uniqueId: 'musicDownload',
  content: [
    {
      label: TITLE.MELON,
      image: IdMelonGuide,
    },
    {
      label: TITLE.GENIE,
      image: IdGenieGuide,
    },
    {
      label: TITLE.BUGS,
      image: IdBugsGuide,
    },
    {
      label: TITLE.FLO,
      image: IdMelonGuide,
    },
  ],
};

// flo 이미지 수급 예정
export const MUSIC_ID_CREATE_GUIDE: CommonContentProps = {
  label: TITLE.MUSIC_ID_CREATE,
  updateDate: '2025.03.30',
  uniqueId: 'musicIdCreate',
  content: [
    {
      label: TITLE.MELON,
      image: IdMelonGuide,
    },
    {
      label: TITLE.GENIE,
      image: IdGenieGuide,
    },
    {
      label: TITLE.BUGS,
      image: IdBugsGuide,
    },
    {
      label: TITLE.FLO,
      // image: IdMelonGuide,
    },
  ],
};
