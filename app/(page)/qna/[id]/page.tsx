import QnaLayout from '../_components/QnaLayout';
import TitleArea from '../_components/TitleArea';

interface QnaLayoutProps {
  params: { id: string };
}

function QnaPage({ params }: QnaLayoutProps) {
  const { id } = params;

  return (
    <div>
      <TitleArea label="QnA" />
      <QnaLayout params={id} />
    </div>
  );
}

export default QnaPage;
