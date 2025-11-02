import GuideLayout from '../_components/GuideLayout';
import TitleArea from '../_components/TitleArea';

interface PageProps {
  params: Promise<{ id: string[] }>;
}

async function downloadGuideVideoPage({ params }: PageProps) {
  const { id: rawId } = await params;

  const id = Array.isArray(rawId) ? rawId.join('/') : rawId;
  return (
    <>
      <TitleArea label="음원 다운로드 가이드 영상" />
      <GuideLayout id={id} />
    </>
  );
}

export default downloadGuideVideoPage;
