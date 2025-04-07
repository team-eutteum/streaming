import DetailList from './_components/DetailList';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'RIIZE STREAMING ID GUIDE',
  description: '라이즈 음원총공팀 음원 아이디 생성 가이드',
};

function IdPage() {
  return (
    <>
      <DetailList />
    </>
  );
}

export default IdPage;
