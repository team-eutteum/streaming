import type { CommonContentProps } from '@/types/guide';
// import album09Guide from 'public/images/support/album/09.jpg';
// import albumAll from 'public/images/support/album/all.jpg';
// import albumALLMDGuide from 'public/images/support/album/ALLMD.jpg';
// import albumAppleGuide from 'public/images/support/album/apple.jpg';
// import albumEverlineGuide from 'public/images/support/album/everline.jpg';
// import albumIttaGuide from 'public/images/support/album/ITTA.jpg';
// import albumKtown4uGuide from 'public/images/support/album/Ktown4u.jpg';
// import albumSoundWaveGuide from 'public/images/support/album/soundwave.jpg';
// import albumYes24Guide from 'public/images/support/album/yes24.jpg';
import dontationGuide from 'public/images/support/donation/donation.jpg';
import helperGuide from 'public/images/support/helper/helper.jpg';
import idDontationGuide from 'public/images/support/id/id.png';

import * as TITLE from './title.constant';
export const DONATION_CONTENT: CommonContentProps = {
  label: TITLE.DONATION,
  updateDate: '2025.04.14',
  uniqueId: 'dontationList',
  link: 'https://docs.google.com/forms/d/e/1FAIpQLSf4PlkHgQ4k1gAw7diOV2KHRsQol1i0OzmcxBrYZbfO57UYdg/viewform',
  content: [
    {
      label: TITLE.DONATION,
      image: [dontationGuide],
    },
  ],
};

export const ID_DONATION_CONTENT: CommonContentProps = {
  label: TITLE.ID_DONATION,
  updateDate: '2025.09.01',
  uniqueId: 'dontationList',
  link: 'http://pf.kakao.com/_LWmxfn',
  content: [
    {
      label: TITLE.ID_DONATION,
      image: [idDontationGuide],
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
      image: [helperGuide],
    },
  ],
};

export const ALBUM_PURCHASE_CONTENT: CommonContentProps = {
  label: TITLE.ALBUM_PURCHASE,
  updateDate: '2025.04.28',
  uniqueId: 'albumPurchase',
  content: [
    {
      label: TITLE.ALBUM_PURCHASE,
    },
    // {
    //   label: '모아보기',
    //   image: [albumAll],
    // },
    // {
    //   label: 'Ktown4u',
    //   image: [albumKtown4uGuide],
    //   links: [
    //     {
    //       link: 'https://kr.ktown4u.com/eventinfo?eve_no=43259949&biz_no=967',
    //       linkTxt: 'Ktown4u 공구 바로가기',
    //     },
    //   ],
    // },
    // {
    //   label: '올엠디',
    //   image: [albumALLMDGuide],
    //   links: [
    //     {
    //       link: 'https://buly.kr/A44FfrS',
    //       linkTxt: '올엠디 공구 바로가기',
    //     },
    //   ],
    // },
    // {
    //   label: '애플뮤직',
    //   image: [albumAppleGuide],
    //   links: [
    //     {
    //       link: 'https://abit.ly/smddn4',
    //       linkTxt: '애플뮤직 포토북 세트',
    //     },
    //     {
    //       link: 'https://abit.ly/giftvt',
    //       linkTxt: '애플뮤직 포토북 랜덤',
    //     },
    //     {
    //       link: 'https://abit.ly/oys2ad',
    //       linkTxt: '애플뮤직 패키지 세트',
    //     },
    //     {
    //       link: 'https://abit.ly/76sznu',
    //       linkTxt: '애플뮤직 패키지 랜덤',
    //     },
    //     {
    //       link: 'https://abit.ly/d5wopt',
    //       linkTxt: '애플뮤직 스미니',
    //     },
    //   ],
    // },
    // {
    //   label: '09PLATFORM',
    //   image: [album09Guide],
    //   links: [
    //     {
    //       link: 'https://09platform.com/surl/P/1205',
    //       linkTxt: '09플랫폼 포토북 버전',
    //     },
    //     {
    //       link: 'https://09platform.com/surl/P/1206',
    //       linkTxt: '09플랫폼 패키지, 스미니',
    //     },
    //   ],
    // },
    // {
    //   label: '예스24',
    //   image: [albumYes24Guide],
    //   links: [
    //     {
    //       link: 'https://www.yes24.com/product/category/series/003?SeriesNumber=359260',
    //       linkTxt: '예스24 공구 바로가기',
    //     },
    //   ],
    // },
    // {
    //   label: '사운드웨이브',
    //   image: [albumSoundWaveGuide],
    //   links: [
    //     {
    //       link: 'https://bit.ly/3Gv6ftz',
    //       linkTxt: '사운드웨이브 공구 바로가기',
    //     },
    //   ],
    // },
    // {
    //   label: '에버라인',
    //   image: [albumEverlineGuide],
    //   links: [
    //     {
    //       link: 'https://everlineshop.com/goods/goods_view.php?goodsNo=1000012617',
    //       linkTxt: '에버라인 공구 바로가기',
    //     },
    //   ],
    // },
    // {
    //   label: 'ITTA(잇다)',
    //   image: [albumIttaGuide],
    //   links: [
    //     {
    //       link: 'https://fanitta.com/?value=%7B%22productId%22:25313%7D&type=productDetail',
    //       linkTxt: '잇다 공구 바로가기',
    //     },
    //   ],
    // },
  ],
};
