import type { CommonContentProps } from '@/types/guide';
/* id guide */
import IdBugsGuide from 'public/images/guide/id/bugs.jpg';
import IdGenieGuide from 'public/images/guide/id/genie.jpg';
import IdMelonGuide from 'public/images/guide/id/melon.jpg';
/* streaming list guide */
import StreamingListGuide from 'public/images/guide/list/list.jpg';
/* streaming guide */
import StreamingBugsGuide from 'public/images/guide/streaming/bugs.jpg';
import StreamingFloGuide from 'public/images/guide/streaming/flo.jpg';
import StreamingGenieGuide from 'public/images/guide/streaming/genie.jpg';
import StreamingMelonGuide from 'public/images/guide/streaming/melon.jpg';

import * as TITLE from './title.constant';

export const STREAMING_LIST_CONTENT: CommonContentProps = {
  label: TITLE.STREAMING_LIST,
  updateDate: '2025.03.30',
  uniqueId: 'streamingList',
  content: [
    {
      label: TITLE.STREAMING_LIST,
      image: StreamingListGuide,
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
      image: StreamingMelonGuide,
    },
    {
      label: TITLE.GENIE,
      image: StreamingGenieGuide,
    },
    {
      label: TITLE.BUGS,
      image: StreamingBugsGuide,
    },
    {
      label: TITLE.FLO,
      image: StreamingFloGuide,
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
      // image: IdMelonGuide,
    },
    {
      label: TITLE.GENIE,
      // image: IdGenieGuide,
    },
    {
      label: TITLE.BUGS,
      // image: IdBugsGuide,
    },
    {
      label: TITLE.FLO,
      // image: IdMelonGuide,
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
