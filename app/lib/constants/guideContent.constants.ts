import type { CheeringMethodProps, CommonContentProps } from '@/types/guide';
/* download guide */
import DownBugsGuide from 'public/images/guide/download/bugs/bugs.jpg';
import DownGenieAndroidGuide from 'public/images/guide/download/genie/genieAndroid.jpg';
import DownGeniePcGuide from 'public/images/guide/download/genie/geniePc.jpg';
import DownMelonAndroidGuide from 'public/images/guide/download/melon/melonAndroid.jpg';
import DownMelonPcGuide from 'public/images/guide/download/melon/melonPc.jpg';
import DownVibeGuide from 'public/images/guide/download/vibe/vibe.jpg';
/* id guide */
import IdBugsGuide from 'public/images/guide/id/bugs.jpg';
import IdGenieGuide from 'public/images/guide/id/genie.jpg';
import IdMelonGuide from 'public/images/guide/id/melon.jpg';
/* streaming list guide */
import StreamingListGuide from 'public/images/guide/list/list.jpg';
import MusivVideoGuide from 'public/images/guide/musicVideo/musicVideo.jpg';
import RadioKBSGuide from 'public/images/guide/radio/kbs.jpg';
import RadioMBCGuide from 'public/images/guide/radio/mbc.jpg';
import RadioSBSGuide from 'public/images/guide/radio/sbs.jpg';
/* streaming guide */
import StreamingBugsGuide from 'public/images/guide/streaming/bugs.jpg';
import StreamingFloGuide from 'public/images/guide/streaming/flo.jpg';
import StreamingGenieGuide from 'public/images/guide/streaming/genie.jpg';
import StreamingMelonGuide from 'public/images/guide/streaming/melon.jpg';
import StreamingVibeGuide from 'public/images/guide/streaming/vibe.jpg';

import * as RIIZE_ALBUM from './riizeAlbum.constanst';
import * as TITLE from './title.constant';

export const STREAMING_LIST_CONTENT: CommonContentProps = {
  label: TITLE.STREAMING_LIST,
  updateDate: '2025.04.14',
  uniqueId: 'streamingList',
  content: [
    {
      label: TITLE.STREAMING_LIST,
      image: [StreamingListGuide],
    },
  ],
};

export const MUSIC_STREAMING_CONTENT: CommonContentProps = {
  label: TITLE.MUSIC_STREAMING,
  updateDate: '2025.04.14',
  uniqueId: 'musicStreaming',
  content: [
    {
      label: TITLE.MELON,
      image: [StreamingMelonGuide],
    },
    {
      label: TITLE.GENIE,
      image: [StreamingGenieGuide],
    },
    {
      label: TITLE.BUGS,
      image: [StreamingBugsGuide],
    },
    {
      label: TITLE.FLO,
      image: [StreamingFloGuide],
    },
    {
      label: TITLE.VIBE,
      image: [StreamingVibeGuide],
    },
  ],
};

// 이미지 수급 예정
export const MUSIC_DOWNLOAD_CONTENT: CommonContentProps = {
  label: TITLE.MUSIC_DOWNLOAD,
  updateDate: '2025.05.01',
  uniqueId: 'musicDownload',
  content: [
    {
      label: TITLE.MELON,
      image: [DownMelonAndroidGuide, DownMelonPcGuide],
    },
    {
      label: TITLE.GENIE,
      image: [DownGenieAndroidGuide, DownGeniePcGuide],
    },
    {
      label: TITLE.BUGS,
      image: [DownBugsGuide],
    },
    {
      label: TITLE.VIBE,
      image: [DownVibeGuide],
    },
  ],
};

// flo 이미지 수급 예정
export const MUSIC_ID_CREATE_GUIDE: CommonContentProps = {
  label: TITLE.MUSIC_ID_CREATE,
  updateDate: '2025.04.14',
  uniqueId: 'musicIdCreate',
  content: [
    {
      label: TITLE.MELON,
      image: [IdMelonGuide],
    },
    {
      label: TITLE.GENIE,
      image: [IdGenieGuide],
    },
    {
      label: TITLE.BUGS,
      image: [IdBugsGuide],
    },
  ],
};

export const RADIO_APPLICATION_GUIDE: CommonContentProps = {
  label: TITLE.RADIO_APPLICATION,
  updateDate: '2025.04.14',
  uniqueId: 'radioApplication',
  content: [
    {
      label: 'SBS',
      image: [RadioSBSGuide],
    },
    {
      label: 'KBS',
      image: [RadioKBSGuide],
    },
    {
      label: 'MBC',
      image: [RadioMBCGuide],
    },
  ],
};

export const MUSIC_VIDEO_STREAMING_GUIDE: CommonContentProps = {
  label: TITLE.MUSIC_VIDEO_STREAMING,
  updateDate: '2025.05.01',
  uniqueId: 'musicVideoStreaming',
  content: [
    {
      label: TITLE.MUSIC_VIDEO_STREAMING,
      image: [MusivVideoGuide],
    },
  ],
};

export const CHEERING_METHOD_GUIDE: CheeringMethodProps = {
  label: TITLE.CHEERING_METHOD,
  updateDate: '2025.04.14',
  uniqueId: 'musicVideoStreaming',
  content: [
    RIIZE_ALBUM.FIRST_MINI,
    RIIZE_ALBUM.FIRST_SINGLE,
    RIIZE_ALBUM.JP_FIRST_SINGLE,
  ],
};
