import GuideLayout from '../_components/GuideLayout';
import TitleArea from '../_components/TitleArea';

async function downloadGuideVideoPage({
  params,
}: {
  params: { id: string[] };
}) {
  // const { id } = params;
  const id = params.id.join('/');
  return (
    <>
      <TitleArea label="음원 다운로드 가이드 영상" />
      <GuideLayout id={id} />
    </>
  );
}

export default downloadGuideVideoPage;
