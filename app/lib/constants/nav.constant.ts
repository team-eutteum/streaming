import * as TITLE from './title.constant';

interface NavItem {
  title: string;
  path: string;
  children?: NavItem[];
  opened?: boolean;
}

export const NAV: NavItem[] = [
  {
    title: TITLE.GUIDE,
    path: '/guide',
    children: [
      {
        title: TITLE.STREAMING_LIST,
        path: '/guide/list',
        opened: true,
      },
      {
        title: TITLE.MUSIC_STREAMING,
        path: '/guide/streaming',
        opened: true,
      },
      {
        title: TITLE.MUSIC_DOWNLOAD,
        path: '/guide/download',
        opened: true,
      },
      {
        title: TITLE.MUSIC_DOWNLOAD_GUIDE_VIDEO,
        path: '/guide/downloadVideo/melon/mobile',
        children: [
          {
            title: TITLE.MELON,
            path: '/guide/downloadVideo/melon/mobile',
          },
          {
            title: TITLE.GENIE,
            path: '/guide/downloadVideo/genie/mobile',
          },
          {
            title: TITLE.BUGS,
            path: '/guide/downloadVideo/bugs/mobile',
          },
        ],
        opened: true,
      },
      {
        title: TITLE.MUSIC_ID_CREATE,
        path: '/guide/id',
        opened: true,
      },
      {
        title: TITLE.RADIO_APPLICATION,
        path: '/guide/radio',
        opened: true,
      },
      {
        title: TITLE.MUSIC_VIDEO_STREAMING,
        path: '/guide/video',
        opened: true,
      },
      // {
      //   title: TITLE.MUSIC_VIDEO_DOWNLOAD,
      //   path: '/guide/musicVideoDownload',
      //   opened: true,
      // },
      {
        title: TITLE.CHEERING_METHOD,
        path: '/guide/cheering',
        opened: true,
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
        opened: true,
      },
      {
        title: TITLE.MUSIC_BROADCAST,
        path: '/vote/broadcast',
        opened: true,
      },
      {
        title: TITLE.MAMA_FANS_CHOICE,
        path: '/vote/mama',
        opened: true,
      },
      {
        title: TITLE.MELON_WEEKLY_POPULAR,
        path: '/vote/melon',
        opened: true,
      },
    ],
    opened: true,
  },
  {
    title: TITLE.CHART,
    path: '/chart',
    children: [
      {
        title: TITLE.MELON,
        path: '/chart/melon',
        opened: true,
      },
      {
        title: TITLE.GENIE,
        path: '/chart/genie',
        opened: true,
      },
      {
        title: TITLE.BUGS,
        path: '/chart/bugs',
        opened: true,
      },
      {
        title: TITLE.FLO,
        opened: true,
        path: '/chart/flo',
      },
    ],
    opened: true,
  },
  {
    title: TITLE.SUPPORT,
    path: '/support',
    children: [
      {
        title: TITLE.DONATION,
        path: '/support/donation',
        opened: true,
      },
      {
        title: TITLE.ID_DONATION,
        path: '/support/id',
        opened: true,
      },
      {
        title: TITLE.HELPER,
        path: '/support/helper',
        opened: true,
      },
      {
        title: TITLE.ALBUM_PURCHASE,
        path: '/support/album',
        opened: true,
      },
    ],
    opened: true,
  },
  {
    title: TITLE.QNA,
    path: '/qna/streaming',
    opened: true,
  },
];
