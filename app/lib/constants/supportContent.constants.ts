import type { CommonContentProps } from '@/types/guide';
import albumALLMDGuide from 'public/images/support/album/ALLMD.jpg';
import albumKtown4uGuide from 'public/images/support/album/Ktown4u.jpg';
import dontationGuide from 'public/images/support/donation/donation.jpg';
import helperGuide from 'public/images/support/helper/helper.jpg';
import idDontationGuide from 'public/images/support/id/id.png';

import * as TITLE from './title.constant';
export const DONATION_CONTENT: CommonContentProps = {
  label: TITLE.DONATION,
  updateDate: '2025.09.17',
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
  updateDate: '2025.09.17',
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
  updateDate: '2025.11',
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
  updateDate: '2025.11.03',
  uniqueId: 'albumPurchase',
  content: [
    // {
    //   label: TITLE.ALBUM_PURCHASE,
    // },
    // {
    //   label: '모아보기',
    //   image: [albumAll],
    // },
    {
      label: 'Ktown4u',
      image: [albumKtown4uGuide],
      content:
        '<div class="f-bd3"><ul class="bullet-list"><li class="list">공구처: 케타포</li><li class="list">특전: 미정 (미공포 추가 시 동일 제공 예정)</li><li class="list">가격: 포토북 15,600원 / 챔버 19,200원 / 카탈로그 13,200원 / 스미니 10,800원 (세트 64,200원)</li><li class="list">공구 기간: ~11/24(월) 17:00</li><li class="list">발송일: 11/25 이후</li></ul></div>',
      links: [
        {
          link: 'https://kr.ktown4u.com/eventsub?eve_no=43803989&biz_no=967',
          linkTxt: 'Ktown4u 공구 바로가기',
        },
      ],
    },
    {
      label: '올엠디',
      image: [albumALLMDGuide],
      content:
        '<div class="f-bd3"><ul class="bullet-list"><li class="list">공구처: 올엠디</li><li class="list">가격: 포토북 15,500원 / 챔버 19,000원 / 카탈로그 13,100원 / 스미니 10,700원 (세트 63,600원)</li><li class="list">공구 기간: ~11/30(토) 21:00 (KST)</li><li class="list">발송일: 11/25 이후</li></ul></div>',
      links: [
        {
          link: 'https://bit.ly/47KouW6',
          linkTxt: '올엠디 공구 바로가기',
        },
      ],
    },
    {
      label: '애플뮤직',
      // image: [albumAppleGuide],
      content:
        '<div class="f-bd3"><ul class="bullet-list"><li class="list">공구처: 애플뮤직</li><li class="list">특전: 미정 (미공포 추가 시 동일 제공 예정)</li><li class="list">가격: 포토북 15,400원 / 챔버 18,900원 /카탈로그 13,000원 / 스미니 10,600원 (세트 63,400원)</li><li class="list">공구 기간: ~11/23(일) 23:59</li><li class="list">발송일: 11/24</li></ul></div>',
      links: [
        {
          link: 'https://abit.ly/m6spi3',
          linkTxt: 'Photobook Ver.',
        },
        {
          link: 'https://abit.ly/bz2bkff',
          linkTxt: 'Chamber Ver.',
        },
        {
          link: 'https://abit.ly/oyuty1h',
          linkTxt: 'Catalogue Ver.스마트앨범',
        },
        {
          link: 'https://abit.ly/a3qw8b',
          linkTxt: 'SMini Ver.스마트앨범/세트',
        },
        {
          link: 'https://abit.ly/s10iwoo',
          linkTxt: 'SMini Ver.스마트앨범/랜덤',
        },
      ],
    },
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
    {
      label: '예스24',
      // image: [albumYes24Guide],
      content:
        '<div class="f-bd3"><ul class="bullet-list"><li class="list">공구처: 예스24</li><li class="list">가격: 포토북 17,500원 / 챔버 21,500원 / 카탈로그 14,600원 / 스미니 12,000원 (세트 71,400원)</li><li class="list">공구 기간: ~11/24(일) 17:00</li><li class="list">발송일: 11/25부터 순차배송</li></ul></div>',
      links: [
        {
          link: 'https://yes24.com/product/category/series/003001018002001?SeriesNumber=368390',
          linkTxt: '예스24 공구 바로가기',
        },
      ],
    },
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
