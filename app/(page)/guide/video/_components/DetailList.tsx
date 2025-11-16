'use client';
import { notFound } from 'next/navigation';

import { CONST } from '@/lib/constants';

import CommonGuideLayout from '../../_components/CommonGuideLayout';
import TitleArea from '../../_components/TitleArea';

interface idProps {
  id: string;
}

function DetailList({ id }: idProps) {
  const contents = CONST.GUIDE_CONTENT.MUSIC_VIDEO_GUIDE;

  const [parentId, childId] = id.split('/');

  const parent = contents?.find((tab) => tab.uniqueId === parentId);

  if (!parent) {
    notFound();
  }

  // /download는 허용, 하지만 /download/melon, /download/bugs 같은 URL은 금지
  if (childId) {
    notFound();
  }

  return (
    <>
      <TitleArea
        label={parent.label}
        updateDate={parent.updateDate}
        hasSelect
        // hasSelect={false}
      />
      <CommonGuideLayout
        uniqueId={parent.uniqueId}
        tabContent={parent.children} // 혹시 없다면 빈 배열
        // childId={null}
      />
    </>
  );
}

export default DetailList;
