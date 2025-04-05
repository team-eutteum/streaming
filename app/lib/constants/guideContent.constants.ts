import IdBugsGuide from '@/images/id_guide/img-id-guide-bugs.jpg';
import IdGenieGuide from '@/images/id_guide/img-id-guide-genie.jpg';
import IdMelonGuide from '@/images/id_guide/img-id-guide-melon.jpg';

import * as TITLE from './title.constant';

import type { StaticImageData } from 'next/image';

interface CommonGuideProps {
  label: string;
  image?: StaticImageData;
  updateDate?: string;
}

// 이미지 수급 예정
export const STREAMING_GUIDE_CONTENT: CommonGuideProps[] = [
  {
    label: TITLE.MELON,
    image: IdMelonGuide,
    updateDate: '2025.03.30',
  },
  {
    label: TITLE.GENIE,
    image: IdMelonGuide,
    updateDate: '2025.03.30',
  },
  {
    label: TITLE.BUGS,
    image: IdMelonGuide,
    updateDate: '2025.03.30',
  },
  {
    label: TITLE.FLO,
    image: IdMelonGuide,
    updateDate: '2025.03.30',
  },
];

// 이미지 수급 예정
export const DOWNLOAD_GUIDE_CONTENT: CommonGuideProps[] = [
  {
    label: TITLE.MELON,
    image: IdMelonGuide,
    updateDate: '2025.03.30',
  },
  {
    label: TITLE.GENIE,
    image: IdGenieGuide,
    updateDate: '2025.03.30',
  },
  {
    label: TITLE.BUGS,
    image: IdBugsGuide,
    updateDate: '2025.03.30',
  },
  {
    label: TITLE.FLO,
    image: IdMelonGuide,
    updateDate: '2025.03.30',
  },
];

// flo 이미지 수급 예정
export const ID_GUIDE_CONTENT: CommonGuideProps[] = [
  {
    label: TITLE.MELON,
    image: IdMelonGuide,
    updateDate: '2025.03.30',
  },
  {
    label: TITLE.GENIE,
    image: IdGenieGuide,
    updateDate: '2025.03.30',
  },
  {
    label: TITLE.BUGS,
    image: IdBugsGuide,
    updateDate: '2025.03.30',
  },
  {
    label: TITLE.FLO,
    image: IdMelonGuide,
    updateDate: '2025.03.30',
  },
];
