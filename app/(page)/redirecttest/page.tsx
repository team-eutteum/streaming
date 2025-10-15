'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import Loader from '@/components/Etc/Loader';

export default function RedirectPage() {
  const router = useRouter();

  useEffect(() => {
    router.push('https://tinyurl.com/bddnfyb3');
  }, [router]);

  return (
    <div className="sub-container">
      <div className="inner">
        <p className="f-bd2">음총팀 뮤직웨이브로 이동중....</p>
      </div>
      <Loader />
    </div>
  );
}
