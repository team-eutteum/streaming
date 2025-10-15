'use client';

import { useEffect } from 'react';

import Loader from '@/components/Etc/Loader';

export default function RedirectPage() {
  useEffect(() => {
    window.location.replace('https://tinyurl.com/bddnfyb3');
  }, []);

  return (
    <div className="sub-container">
      <div className="inner">
        <p className="f-bd2">음총팀 뮤직웨이브로 이동중....</p>
      </div>
      <Loader />
    </div>
  );
}
