import * as TITLE from './title.constant';

export const DOWNLOAD_GUIDE_VIDEO_CONTENT = [
  {
    id: 'melon',
    title: TITLE.MELON,
    children: [
      {
        id: 'mobile',
        title: '모바일',
        video: '/videos/downloadGuide/melon-mobile.mp4',
      },
      {
        id: 'pc',
        title: 'PC',
        video: '/videos/downloadGuide/melon-pc.mp4',
      },
    ],
  },
  {
    id: 'genie',
    title: TITLE.GENIE,
    children: [
      {
        id: 'mobile',
        title: '모바일',
        video: '/videos/downloadGuide/genie-mobile.mp4',
      },

      {
        id: 'pc',
        title: 'PC',
        video: '/videos/downloadGuide/genie-pc.mp4',
      },
    ],
  },
  {
    id: 'bugs',
    title: TITLE.BUGS,
    children: [
      {
        id: 'mobile',
        title: '모바일',
        video: '/videos/downloadGuide/bugs-mobile.mp4',
      },
      {
        id: 'pc',
        title: 'PC',
        video: '/videos/downloadGuide/bugs-pc.mp4',
      },
    ],
  },
];
