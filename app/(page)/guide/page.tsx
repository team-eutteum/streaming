import { PageTitle } from '@/components';
import { CONST } from '@/lib/constants';

import GuideList from './_components/GuideList';

function GuidePage() {
  return (
    <>
      <PageTitle label={CONST.TITLE.GUIDE} />
      <GuideList />
    </>
  );
}

export default GuidePage;
