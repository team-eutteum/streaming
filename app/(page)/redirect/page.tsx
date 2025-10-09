'use client';

import { useEffect } from 'react';

export default function RedirectPage() {
  useEffect(() => {
    window.location.replace(
      'https://musicwave.melon.com/musicwave.htm?m=D7W4jfMRX5F_jAiqRE8Inw',
    );
  }, []);

  return <div className="inner">외부 서비스로 이동 중...</div>;
}
