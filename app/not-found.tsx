import { Metadata } from 'next';

import { SITE_TITLE } from '@/_lib/constants/title.constant';

export const metadata: Metadata = {
  title: `${SITE_TITLE} 페이지를 찾을 수 없습니다`,
};

function NotFound() {
  return (
    <p>요청하신 페이지를 찾을 수 없습니다.</p>
  );
}

export default NotFound;
