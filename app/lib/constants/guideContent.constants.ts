import IdBugsGuide from '@/images/id_guide/img-id-guide-bugs.jpg';
import IdGenieGuide from '@/images/id_guide/img-id-guide-genie.jpg';
import IdMelonGuide from '@/images/id_guide/img-id-guide-melon.jpg';
import type { TabContentProps } from '@/types/guide';

import * as TITLE from './title.constant';

// 이미지 수급 예정
export const STREAMING_GUIDE_CONTENT: TabContentProps[] = [
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
];

// 이미지 수급 예정
export const DOWNLOAD_GUIDE_CONTENT: TabContentProps[] = [
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
];

// flo 이미지 수급 예정
export const ID_GUIDE_CONTENT: TabContentProps[] = [
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
];
