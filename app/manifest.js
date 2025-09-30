const manifest = () => {
  return {
    theme_color: '#222',
    background_color: '#222',
    display: 'standalone',
    scope: '/',
    start_url: '/redirect',
    name: '음총팀뮤웨',
    short_name: '음총팀뮤웨',
    description: '라이즈 음총팀 뮤웨에 오신 것을 환영합니다',
    lang: 'ko-KR',
    icons: [
      {
        src: 'images/logo/logo.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: 'images/logo/logo.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
};
export default manifest;
