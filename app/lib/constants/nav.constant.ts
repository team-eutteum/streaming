import * as TITLE from './title.constant';

interface NavItem {
  title: string;
  path: string;
  children?: NavItem[];
}

export const NAV: NavItem[] = [
  {
    title: TITLE.GUIDE,
    path: '/guide',
    children: [
      {
        title: TITLE.STREAMING_LIST,
        path: '/guide/list',
      },
      {
        title: TITLE.MUSIC_STREAMING,
        path: '/guide/streaming',
      },
      {
        title: TITLE.MUSIC_DOWNLOAD,
        path: '/guide/download',
      },
      {
        title: TITLE.MUSIC_ID_CREATE,
        path: '/guide/id',
      },
      {
        title: TITLE.RADIO_APPLICATION,
        path: '/guide/radio',
      },
      {
        title: TITLE.MUSIC_VIDEO_STREAMING,
        path: '/guide/video',
      },
      {
        title: TITLE.CHEERING_METHOD,
        path: '/guide/cheering',
      },
    ],
  },
  {
    title: TITLE.VOTE,
    path: '/vote',
    children: [
      {
        title: TITLE.COLLECT,
        path: '/vote/collect',
      },
      {
        title: TITLE.MUSIC_BROADCAST,
        path: '/vote/broadcast',
      },
      {
        title: TITLE.MELON_WEEKLY_POPULAR,
        path: '/vote/melon',
      },
      {
        title: TITLE.MAMA_FANS_CHOICE,
        path: '/vote/mama',
      },
    ],
  },
  {
    title: TITLE.CHART,
    path: '/chart',
    children: [
      {
        title: TITLE.MELON,
        path: '/chart/melon',
      },
      {
        title: TITLE.GENIE,
        path: '/chart/genie',
      },
      {
        title: TITLE.BUGS,
        path: '/chart/bugs',
      },
      {
        title: TITLE.FLO,
        path: '/chart/flo',
      },
    ],
  },
  {
    title: TITLE.SUPPORT,
    path: '/support',
    children: [
      {
        title: TITLE.DONATION,
        path: '/support/donation',
      },
      {
        title: TITLE.ID_DONATION,
        path: '/support/id',
      },
      {
        title: TITLE.HELPER,
        path: '/support/helper',
      },
      {
        title: TITLE.ALBUM_PURCHASE,
        path: '/support/album',
      },
    ],
  },
];
