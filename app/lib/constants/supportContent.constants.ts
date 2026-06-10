import type { CommonContentProps } from '@/types/guide';
import albumALLMDGuide from 'public/images/support/album/ALLMD.jpg';
import albumKtown4uGuide from 'public/images/support/album/Ktown4u.jpg';
import dontationGuide from 'public/images/support/donation/donation.jpg';
import helperGuide from 'public/images/support/helper/helper.jpg';
import idDontationGuide from 'public/images/support/id/id.jpg';
import instantIdDontationGuide from 'public/images/support/id/instantId.jpg';

// import albumAll from 'public/images/support/album/all.jpg';

import * as TITLE from './title.constant';
export const DONATION_CONTENT: CommonContentProps = {
  label: TITLE.DONATION,
  updateDate: '2026.05',
  uniqueId: 'dontationList',
  content: [
    {
      label: TITLE.DONATION,
      image: [dontationGuide],
      links: [
        {
          link: 'https://docs.google.com/forms/d/1uW7P6LIGLhzJ_1JeShHuQ18lzuNrTv6tKPdCskLp-y4/viewform?chromeless=1&edit_requested=true',
          linkTxt: '모금 후 정보입력 바로가기',
        },
      ],
    },
  ],
};

export const ID_DONATION_CONTENT: CommonContentProps = {
  label: TITLE.ID_DONATION,
  updateDate: '2026.03',
  uniqueId: 'dontationList',
  link: 'http://pf.kakao.com/_LWmxfn',
  content: [
    {
      label: TITLE.ID_DONATION,
      image: [idDontationGuide],
      links: [
        {
          link: 'http://pf.kakao.com/_LWmxfn',
          linkTxt: '아이디 기부 링크(음총팀 카카오채널)',
        },
      ],
    },
    {
      label: TITLE.INSTANT_ID_DONATION,
      image: [instantIdDontationGuide],
      links: [
        {
          link: 'http://pf.kakao.com/_LWmxfn',
          linkTxt: '아이디 기부 링크(음총팀 카카오채널)',
        },
      ],
    },
  ],
};

export const HELPER_CONTENT: CommonContentProps = {
  label: TITLE.HELPER,
  updateDate: '2026.04',
  uniqueId: 'helperList',
  content: [
    {
      label: TITLE.HELPER,
      links: [
        {
          link: 'http://pf.kakao.com/_LWmxfn',
          linkTxt: '헬퍼 신청 링크(음총팀 카카오채널)',
        },
      ],
      image: [helperGuide],
    },
  ],
};

export const ALBUM_PURCHASE_CONTENT: CommonContentProps = {
  label: TITLE.ALBUM_PURCHASE,
  updateDate: '2026.05.22',
  uniqueId: 'albumPurchase',
  content: [
    // {
    //   label: TITLE.ALBUM_PURCHASE,
    // },
    // {
    //   label: '모아보기',
    //   // image: [albumAll],
    // },
    {
      label: 'Ktown4u',
      image: [albumKtown4uGuide],
      content:
        '<div class="f-bd3"><ul class="bullet-list"><li class="list">공구처: 케타포</li><li class="list">특전: 미정</li><li class="list">가격: 스페셜 17,200원 / 포토북 랜덤 13,400원 / 포토북 2CD 세트 26,800원 / 스미니 랜덤 11,800원 / 스미니 6CD 세트 69,900원 / 피규어 랜덤 20,800원</li><li class="list">출시일: 2026-06-15</li><li class="list">[세트 상품 판매 기간: 6/14 23:59까지]</li><li class="list">발송일: 6/16일 이후 순차적 발송</li></ul></div>',
      links: [
        {
          link: 'https://kr.ktown4u.com/eventinfo?eve_no=44392603&biz_no=967',
          linkTxt: 'Ktown4u 공구 바로가기',
        },
      ],
    },
    {
      label: '올엠디',
      image: [albumALLMDGuide],
      content:
        '<div class="f-bd3"><ul class="bullet-list"><li class="list">공구처: 올엠디</li><li class="list">특전: 미정</li><li class="list">가격: 스페셜 16,900원 / 포토북 랜덤 13,200원 / 포토북 2종 세트 26,300원 / 스미니 랜덤 11,600원 / 스미니 6종 세트 68,600원 / 피규어 랜덤 20,400원</li><li class="list">출시일: 2026-06-15</li><li class="list">공구 기간: ~06:21 21:00까지</li><li class="list">발송일: 별도 안내</li></ul></div>',
      links: [
        {
          link: 'https://m.allmd.com/product/list.html?cate_no=2520',
          linkTxt: '올엠디 공구 바로가기',
        },
      ],
    },
    {
      label: '애플뮤직',
      // image: [albumAppleGuide],
      content:
        '<div class="f-bd3"><ul class="bullet-list"><li class="list">공구처: 애플뮤직</li><li class="list">특전: 미정 (미공포 추가시 동일 적용 예정)</li><li class="list">가격: 스페셜 17,200원 / 포토북 랜덤 13,300원 / 포토북 2종 세트 26,400원 / 스미니 랜덤 11,800원 / 스미니 6종 세트 69,600원 / 피규어 랜덤 20,600원</li><li class="list">출시일: 2026-06-15</li><li class="list">공구 기간: ~06/14 23:59까지</li><li class="list">발송일: 6/15일 이후 순차 발송</li><li class="list">배송비: 2만원 이상 무료배송(이하 2,500원)</li></ul></div>',
      links: [
        {
          link: 'https://abit.ly/n478ir',
          linkTxt: 'Photobook Ver.(랜덤)',
        },
        {
          link: 'https://abit.ly/2n0ql6',
          linkTxt: 'Photobook Ver.(세트)',
        },
        {
          link: 'https://abit.ly/jqc6awp',
          linkTxt: 'Special Ver.',
        },
        {
          link: 'https://abit.ly/xvfk90',
          linkTxt: 'SMini Ver.(랜덤)',
        },
        {
          link: 'https://abit.ly/8qeu8c',
          linkTxt: 'SMini Ver.(세트)',
        },
        {
          link: 'https://abit.ly/hifmvz',
          linkTxt: 'Figure Ver.(랜덤)',
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
        '<div class="f-bd3"><ul class="bullet-list"><li class="list">공구처: 예스24</li><li class="list">특전: 미정 (추가시 동일 제공 예정)</li><li class="list">가격: 스페셜 18,600원 / 포토북 랜덤 14,700원 / 포토북 2종 세트 29,400원 / 스미니 랜덤 12,600원 / 스미니 6종 세트 75,000원 / 피규어 랜덤 22,600원</li><li class="list">출시일: 2026-06-15</li><li class="list">공구 기간: ~06:14 23:59까지</li><li class="list">발송일: 6/15 이후 순차 발송</li></ul></div>',
      links: [
        {
          link: 'https://www.yes24.com/product/category/series/003?SeriesNumber=380057',
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
    {
      label: '에버라인',
      // image: [albumEverlineGuide],
      content:
        '<div class="f-bd3"><ul class="bullet-list"><li class="list">공구처: 에버라인</li><li class="list">특전: 미공개 셀카 포토카드 6종 중 랜덤 1종</li><li class="list">가격: 포토북 랜덤 13,500원</li><li class="list">5만원 이상 구매시 무료배송</li><li class="list">출시일: 2026-06-15</li><li class="list">공구 기간: ~06:14 23:59까지</li><li class="list">발송일: 6/15 이후 순차 발송</li></ul></div>',
      links: [
        {
          link: 'https://everlineshop.com/goods/goods_view.php?goodsNo=1000022056',
          linkTxt: '에버라인 공구 바로가기',
        },
      ],
    },
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
