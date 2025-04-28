import type { CommonContentProps } from '@/types/guide';
import album09Guide from 'public/images/support/album/09.jpeg';
import albumALLMDGuide from 'public/images/support/album/ALLMD.jpeg';
import albumAppleGuide from 'public/images/support/album/apple.jpeg';
import albumKtown4uGuide from 'public/images/support/album/Ktown4u.jpeg';
import albumYes24Guide from 'public/images/support/album/yes24.jpeg';
import dontationGuide from 'public/images/support/donation/donation.jpg';
import helperGuide from 'public/images/support/helper/helper.jpg';
import idDontationGuide from 'public/images/support/id/id.jpg';

import * as TITLE from './title.constant';
export const DONATION_CONTENT: CommonContentProps = {
  label: TITLE.DONATION,
  updateDate: '2025.04.14',
  uniqueId: 'dontationList',
  link: 'https://docs.google.com/forms/d/e/1FAIpQLSf4PlkHgQ4k1gAw7diOV2KHRsQol1i0OzmcxBrYZbfO57UYdg/viewform',
  content: [
    {
      label: TITLE.DONATION,
      image: dontationGuide,
    },
  ],
};

export const ID_DONATION_CONTENT: CommonContentProps = {
  label: TITLE.ID_DONATION,
  updateDate: '2025.04.14',
  uniqueId: 'dontationList',
  link: 'https://docs.google.com/forms/d/e/1FAIpQLSfv0Rm-dzDspH9nyhIy5hbjjQC32PBYpAPi9TAjsgVfEIT7PQ/viewform',
  content: [
    {
      label: TITLE.ID_DONATION,
      image: idDontationGuide,
    },
  ],
};

export const HELPER_CONTENT: CommonContentProps = {
  label: TITLE.HELPER,
  updateDate: '2025.04.14',
  uniqueId: 'helperList',
  content: [
    {
      label: TITLE.HELPER,
      image: helperGuide,
    },
  ],
};

export const ALBUM_PURCHASE_CONTENT: CommonContentProps = {
  label: TITLE.ALBUM_PURCHASE,
  updateDate: '2025.04.28',
  uniqueId: 'albumPurchase',
  content: [
    {
      label: 'Ktown4u',
      image: albumKtown4uGuide,
      links: [
        {
          link: 'https://kr.ktown4u.com/eventinfo?eve_no=43259949&biz_no=967',
          linkTxt: 'Ktown4u 공구 바로가기',
        },
      ],
    },
    {
      label: '올엠디',
      image: albumALLMDGuide,
      links: [
        {
          link: 'https://m.allmd.com/product/list.html?cate_no=553',
          linkTxt: '올엠디 공구 바로가기',
        },
      ],
    },
    {
      label: '애플뮤직',
      image: albumAppleGuide,
      links: [
        {
          link: 'https://link.gmarket.co.kr/1HHSaI3leg',
          linkTxt: '애플뮤직 포토북 세트',
        },
        {
          link: 'https://link.gmarket.co.kr/Rp3BEv2leg',
          linkTxt: '애플뮤직 포토북 랜덤',
        },
        {
          link: 'https://link.gmarket.co.kr/ooi3941leg',
          linkTxt: '애플뮤직 패키지 세트',
        },
        {
          link: 'https://link.gmarket.co.kr/0d8qqY1leg',
          linkTxt: '애플뮤직 패키지 랜덤',
        },
        {
          link: 'https://link.gmarket.co.kr/y45fOZ2leg',
          linkTxt: '애플뮤직 스미니',
        },
      ],
    },
    {
      label: '09PLATFORM',
      image: album09Guide,
      links: [
        {
          link: 'https://09platform.com/surl/P/1205',
          linkTxt: '09플랫폼 포토북 버전',
        },
        {
          link: 'https://09platform.com/surl/P/1206',
          linkTxt: '09플랫폼 패키지, 스미니',
        },
      ],
    },
    {
      label: '예스24',
      image: albumYes24Guide,
      links: [
        {
          link: 'https://www.yes24.com/product/category/series/003?SeriesNumber=359260',
          linkTxt: '예스24 공구 바로가기',
        },
      ],
    },
  ],
};
