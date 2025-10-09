'use client';

import { useEffect, useState } from 'react';

import { Button, PageTitle } from '@/components';

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
    <section className="sc-shortcut">
      <div className="inner">
        <PageTitle label="라이즈 음총팀 뮤직웨이브 바로가기 생성 링크입니다" />
        <div className="page-division">
          <div className="android half">
            <p className="f-bd2 half-tit">안드로이드</p>
            <p className="f-bd4 half-txt">
              아래의 링크를 눌러 바로가기 앱을 추가해 주세요.
            </p>
            <Button
              type="button"
              size="md"
              rounded="sm"
              onClick={handleInstall}
              // disabled={!deferredPrompt}
            >
              음총팀 뮤직웨이브 바로가기 생성
            </Button>
          </div>
          <div className="ios half">
            <p className="f-bd2 half-tit">아이폰</p>
            <p className="f-bd4 half-txt">
              아래의 이미지에 따라 바로가기 아이콘을 생성해주세요.
            </p>
            <div className="img-wrap">
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '80%',
                  height: '500rem',
                  background: '#d9d9d9',
                }}
              >
                가이드 이미지 첨부
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShortCutPage;
