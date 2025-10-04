import { Suspense } from 'react';

import QnaLayout from '../_components/QnaLayout';
import TitleArea from '../_components/TitleArea';

async function QnaPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <>
      <TitleArea label="QnA" />
      <Suspense>
        <QnaLayout id={id} />
      </Suspense>
    </>
  );
}

export default QnaPage;
