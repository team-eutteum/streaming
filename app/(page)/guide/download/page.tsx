import DetailList from './_components/DetailList';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'RIIZE STREAMING DOWNLOAD GUIDE',
  description: '라이즈 음원총공팀 다운로드 가이드',
};

function DownloadPage() {
  return (
    <>
      <DetailList />
    </>
  );
}

export default DownloadPage;
