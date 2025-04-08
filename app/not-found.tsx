'use client';

import { useRouter } from 'next/navigation';

import { Button } from './components';

function NotFound() {
  const router = useRouter();

  return (
    <div className="not-found">
      <p>요청하신 페이지를 찾을 수 없습니다.</p>
      <div className="btn-wrap">
        <Button href="/" size="lg">
          메인으로
        </Button>
        <Button size="lg" color="dark" onClick={() => router.back()}>
          뒤로가기
        </Button>
      </div>
    </div>
  );
}

export default NotFound;
