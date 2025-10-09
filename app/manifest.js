const manifest = () => {
  return {
    name: '음총팀뮤웨',
    short_name: '음총팀뮤웨',
    description: '라이즈 음총팀 뮤웨에 오신 것을 환영합니다',
    lang: 'ko-KR',

    theme_color: '#222222',
    background_color: '#222222',

    display: 'standalone',
    orientation: 'portrait',
    scope: '/',
    start_url: '/redirect?utm_source=web_app_manifest',
    icons: [
      {
        src: 'images/logo/logo-app-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: 'images/logo/logo-app-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
};
export default manifest;
