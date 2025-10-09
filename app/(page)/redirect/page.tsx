'use client';

import { useEffect } from 'react';

import Loader from '@/components/Etc/Loader';

export default function RedirectPage() {
  useEffect(() => {
    window.location.replace(
      'https://musicwave.melon.com/musicwave.htm?m=D7W4jfMRX5F_jAiqRE8Inw',
    );
  }, []);

  return (
    <div className="sub-container">
      <div className="inner">
        <p className="f-bd2">음총팀 뮤직웨이브로 이동중...</p>
      </div>
      <Loader />
    </div>
  );
}
