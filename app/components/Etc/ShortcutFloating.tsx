'use client';

import { useEffect, useState } from 'react';
import clsx from 'clsx';
import Image from 'next/image';

import { useIsMobile } from '@/hooks/deviceCheck';

import Button from '../Button/Button';

function ShortcutFloating() {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);

  const isMobile = useIsMobile();

  console.log(isMobile, 'isMobileisMobile');

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent); // 타입 단언
    };
    window.addEventListener('beforeinstallprompt', handler);

    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt(); // 설치 다이얼로그 띄우기
    setDeferredPrompt(null);
  };
  return (
    <div className={clsx('floating-btn', !isMobile && 'display-none')}>
      <Button
        size="xs"
        rounded="md"
        className="point-melon"
        href="https://tinyurl.com/aryt3pfs"
        hasIcon
        color="melon"
      >
        <Image
          src={'/images/logo/melon-icon50-w.png'}
          alt=""
          width={30}
          height={30}
        />
        <span>
          음총팀 뮤웨
          <br />
          바로가기
          <br />
        </span>
      </Button>
      <Button
        size="xs"
        rounded="md"
        onClick={handleInstall}
        className="riize-secondary"
        hasIcon
      >
        <Image
          src={'/images/logo/melon-icon50-w.png'}
          alt=""
          width={30}
          height={30}
        />
        <span>
          음총팀 뮤웨
          <br />
          바로가기 앱
          <br />
          설치 &#40;갤럭시&#41;
        </span>
      </Button>
    </div>
  );
}

export default ShortcutFloating;
