'use client';

import { useEffect } from 'react';

export default function RedirectPage() {
  useEffect(() => {
    window.location.replace(
      'https://musicwave.melon.com/musicwave.htm?a=Y&m=tphpmyjUfXJUMxYL_0JGKk4bbsztv_8TdpDeXsUKhwM',
    );
  }, []);

  return <p>외부 서비스로 이동 중...</p>;
}
