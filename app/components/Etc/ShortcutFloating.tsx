'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import Button from '../Button/Button';

function ShortcutFloating() {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);

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
    const { outcome } = await deferredPrompt.userChoice;
    console.log('User choice:', outcome);
    setDeferredPrompt(null);
  };
  return (
    <div className="floating-btn">
      <Button size="xs" rounded="md" onClick={handleInstall}>
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
        </span>
      </Button>
    </div>
  );
}

export default ShortcutFloating;
