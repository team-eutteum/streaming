import DetailList from '../_components/DetailList';

interface PageProps {
  params: Promise<{ id: string[] }>;
}

async function VideoPage({ params }: PageProps) {
  const { id: rawId } = await params;

  const id = Array.isArray(rawId) ? rawId.join('/') : rawId;
  return (
    <>
      <DetailList id={id} />
    </>
  );
}

export default VideoPage;
