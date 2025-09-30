'use client';

import { useEffect, useState } from 'react';

function ShortCutPage() {
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
    <div>
      <h3>라이즈 음총팀 뮤직웨이브 바로가기 생성 링크입니다</h3>
      <p>안드로이드</p>
      <p>아래의 링크를 눌러 바로가기 앱을 추가해 주세요</p>

      <button
        onClick={handleInstall}
        className="btn"
        disabled={!deferredPrompt} // 이벤트가 잡혔을 때만 활성화
      >
        음총팀뮤웨 바로가기 생성
      </button>

      <p>아이폰</p>
      <p>아래의 이미지에 따라 바로가기 아이콘을 생성해주세요</p>
    </div>
  );
}

export default ShortCutPage;
